'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import landData from 'world-atlas/land-110m.json';

interface GlobeCanvasProps {
  size?: number;
}

const CITIES: [number, number][] = [
  [-74.006, 40.7128], // New York
  [-0.1278, 51.5074], // London
  [139.6917, 35.6895], // Tokyo
  [2.3522, 48.8566], // Paris
  [55.2708, 25.2048], // Dubai
  [103.8198, 1.3521], // Singapore
  [151.2093, -33.8688], // Sydney
  [-46.6333, -23.5505], // Sao Paulo
  [72.8777, 19.076], // Mumbai
  [18.4241, -33.9249], // Cape Town
  [-122.4194, 37.7749], // San Francisco
];

const FLOWS = [
  { from: [-74.006, 40.7128] as [number, number], to: [-0.1278, 51.5074] as [number, number], color: '#EA3323' },
  { from: [-0.1278, 51.5074] as [number, number], to: [55.2708, 25.2048] as [number, number], color: '#F9AB00' },
  { from: [55.2708, 25.2048] as [number, number], to: [103.8198, 1.3521] as [number, number], color: '#12A150' },
  { from: [103.8198, 1.3521] as [number, number], to: [139.6917, 35.6895] as [number, number], color: '#1A73E8' },
  { from: [139.6917, 35.6895] as [number, number], to: [-122.4194, 37.7749] as [number, number], color: '#EA3323' },
  { from: [-46.6333, -23.5505] as [number, number], to: [-74.006, 40.7128] as [number, number], color: '#F9AB00' },
  { from: [72.8777, 19.076] as [number, number], to: [2.3522, 48.8566] as [number, number], color: '#1A73E8' },
  { from: [18.4241, -33.9249] as [number, number], to: [55.2708, 25.2048] as [number, number], color: '#12A150' },
];

export const GlobeCanvas: React.FC<GlobeCanvasProps> = ({ size = 480 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const W = size;
    const R = W / 2 - 16;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const defs = svg.append('defs');

    // Ocean Gradient
    const ocean = defs
      .append('radialGradient')
      .attr('id', 'g-ocean-react')
      .attr('cx', '38%')
      .attr('cy', '34%')
      .attr('r', '68%');
    ocean.append('stop').attr('offset', '0%').attr('stop-color', '#ffffff');
    ocean.append('stop').attr('offset', '55%').attr('stop-color', '#EAF3FF');
    ocean.append('stop').attr('offset', '100%').attr('stop-color', '#D6E6FB');

    // Multi-color glowing rim
    const rim = defs
      .append('linearGradient')
      .attr('id', 'g-rim-react')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    [
      ['0%', '#1A73E8'],
      ['33%', '#EA3323'],
      ['66%', '#F9AB00'],
      ['100%', '#12A150'],
    ].forEach(([o, c]) => rim.append('stop').attr('offset', o).attr('stop-color', c));

    // Glow filter
    const glow = defs
      .append('filter')
      .attr('id', 'g-glow-react')
      .attr('x', '-25%')
      .attr('y', '-25%')
      .attr('width', '150%')
      .attr('height', '150%');
    glow.append('feGaussianBlur').attr('stdDeviation', '6').attr('result', 'b');
    const m = glow.append('feMerge');
    m.append('feMergeNode').attr('in', 'b');
    m.append('feMergeNode').attr('in', 'SourceGraphic');

    const proj = d3
      .geoOrthographic()
      .scale(R)
      .translate([W / 2, W / 2])
      .clipAngle(90)
      .rotate([0, -18, 0]);

    const path = d3.geoPath().projection(proj);
    const grat = d3.geoGraticule10();

    // Base Sphere Ocean
    svg
      .append('circle')
      .attr('cx', W / 2)
      .attr('cy', W / 2)
      .attr('r', R)
      .attr('fill', 'url(#g-ocean-react)');

    // Graticules
    const gGrat = svg
      .append('path')
      .datum(grat)
      .attr('fill', 'none')
      .attr('stroke', '#B9D2F2')
      .attr('stroke-width', 0.6)
      .attr('opacity', 0.75);

    // Land masses from TopoJSON
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gLand: d3.Selection<SVGPathElement, any, null, undefined> | null = null;
    try {
      // Convert TopoJSON to GeoJSON feature
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const land = topojson.feature(landData as any, landData.objects.land as any);
      gLand = svg
        .append('path')
        .datum(land)
        .attr('fill', '#12A150')
        .attr('fill-opacity', 0.18)
        .attr('stroke', '#12A150')
        .attr('stroke-width', 0.9)
        .attr('opacity', 0.95);
    } catch (e) {
      console.error('Error loading land data:', e);
    }

    // Glow Outer Rim
    svg
      .append('circle')
      .attr('cx', W / 2)
      .attr('cy', W / 2)
      .attr('r', R + 3)
      .attr('fill', 'none')
      .attr('stroke', 'url(#g-rim-react)')
      .attr('stroke-width', 3)
      .attr('opacity', 0.95)
      .attr('filter', 'url(#g-glow-react)');

    // Flow Arcs
    const flowSel = svg
      .append('g')
      .selectAll('path')
      .data(FLOWS)
      .enter()
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', (d) => d.color)
      .attr('stroke-width', 2.4)
      .attr('stroke-linecap', 'round')
      .attr('stroke-dasharray', '7 7')
      .attr('opacity', 0.9);

    // City Markers
    const cityG = svg.append('g').selectAll('g').data(CITIES).enter().append('g');
    cityG
      .append('circle')
      .attr('r', 5.5)
      .attr('fill', '#fff')
      .attr('stroke', '#1A73E8')
      .attr('stroke-width', 2);
    cityG.append('circle').attr('r', 2).attr('fill', '#12A150');

    // Arc interpolator
    const arc = (a: [number, number], b: [number, number]) => {
      const it = d3.geoInterpolate(a, b);
      const pts: [number, number][] = [];
      for (let i = 0; i <= 40; i++) pts.push(it(i / 40));
      return { type: 'LineString', coordinates: pts } as GeoJSON.Geometry;
    };

    let rot: [number, number, number] = [0, -18, 0];
    let dash = 0;
    let animId: number;

    const draw = () => {
      proj.rotate(rot);
      gGrat.attr('d', path as any);
      if (gLand) gLand.attr('d', path as any);
      const c = proj.invert!([W / 2, W / 2]);

      flowSel.each(function (d) {
        const dStr = path(arc(d.from, d.to) as any);
        const vis =
          c &&
          (d3.geoDistance(c, d.from) < Math.PI / 2.2 || d3.geoDistance(c, d.to) < Math.PI / 2.2);
        d3.select(this)
          .attr('d', dStr || '')
          .attr('display', vis && dStr ? 'inline' : 'none')
          .attr('stroke-dashoffset', -dash);
      });

      cityG.each(function (d) {
        const p = proj(d);
        const front = c && d3.geoDistance(c, d) < Math.PI / 2.1;
        d3.select(this)
          .attr('display', p && front ? 'inline' : 'none')
          .attr('transform', p ? `translate(${p[0]},${p[1]})` : null);
      });
    };

    const tick = () => {
      rot = [rot[0] + 0.16, rot[1], rot[2]];
      dash = (dash + 0.6) % 14;
      draw();
      animId = requestAnimationFrame(tick);
    };

    draw();
    animId = requestAnimationFrame(tick);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [size]);

  return (
    <div className="w-full flex items-center justify-center p-2">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[500px] h-auto drop-shadow-[0_30px_70px_rgba(17,28,52,0.16)] overflow-visible"
      />
    </div>
  );
};
