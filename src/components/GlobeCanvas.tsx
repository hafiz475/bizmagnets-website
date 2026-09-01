'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import landData from 'world-atlas/land-110m.json';

interface GlobeCanvasProps {
  size?: number;
}

interface CityUserData {
  id: string;
  coords: [number, number];
  city: string;
  name: string;
  role: string;
  skin: string;
  hair: string;
  hairStyle: 'short' | 'curly' | 'bun' | 'ponytail' | 'side' | 'bob';
  shirt: string;
  ringColor: string;
  glasses?: boolean;
}

const CITY_USERS: CityUserData[] = [
  {
    id: 'nyc',
    coords: [-74.006, 40.7128],
    city: 'New York',
    name: 'Sarah K.',
    role: 'Ops Lead',
    skin: '#FAD2B8',
    hair: '#4A2C11',
    hairStyle: 'ponytail',
    shirt: '#1A73E8',
    ringColor: '#1A73E8',
    glasses: true,
  },
  {
    id: 'lon',
    coords: [-0.1278, 51.5074],
    city: 'London',
    name: 'James W.',
    role: 'Support',
    skin: '#F8D8BE',
    hair: '#6C4827',
    hairStyle: 'short',
    shirt: '#111C34',
    ringColor: '#EA3323',
  },
  {
    id: 'tyo',
    coords: [139.6917, 35.6895],
    city: 'Tokyo',
    name: 'Kenji T.',
    role: 'Logistics',
    skin: '#F6DEC6',
    hair: '#1E1E24',
    hairStyle: 'side',
    shirt: '#EA3323',
    ringColor: '#12A150',
  },
  {
    id: 'par',
    coords: [2.3522, 48.8566],
    city: 'Paris',
    name: 'Amélie D.',
    role: 'Care Coord',
    skin: '#FFE3D1',
    hair: '#9E5B28',
    hairStyle: 'bob',
    shirt: '#12A150',
    ringColor: '#1A73E8',
  },
  {
    id: 'dxb',
    coords: [55.2708, 25.2048],
    city: 'Dubai',
    name: 'Tariq A.',
    role: 'Facility Ops',
    skin: '#D9A16E',
    hair: '#111827',
    hairStyle: 'short',
    shirt: '#F9AB00',
    ringColor: '#F9AB00',
  },
  {
    id: 'sin',
    coords: [103.8198, 1.3521],
    city: 'Singapore',
    name: 'Mei Lin',
    role: 'E-commerce',
    skin: '#F8E0CB',
    hair: '#1A1A1A',
    hairStyle: 'bob',
    shirt: '#1A73E8',
    ringColor: '#12A150',
    glasses: true,
  },
  {
    id: 'syd',
    coords: [151.2093, -33.8688],
    city: 'Sydney',
    name: 'Liam M.',
    role: 'Field Lead',
    skin: '#FADCB9',
    hair: '#C89243',
    hairStyle: 'short',
    shirt: '#12A150',
    ringColor: '#EA3323',
  },
  {
    id: 'sao',
    coords: [-46.6333, -23.5505],
    city: 'São Paulo',
    name: 'Gabriela S.',
    role: 'Sales Dir',
    skin: '#BA7A48',
    hair: '#261C14',
    hairStyle: 'curly',
    shirt: '#EA3323',
    ringColor: '#F9AB00',
  },
  {
    id: 'bom',
    coords: [72.8777, 19.076],
    city: 'Mumbai',
    name: 'Rajesh P.',
    role: 'Ticketing',
    skin: '#A96B3E',
    hair: '#1A1A1A',
    hairStyle: 'short',
    shirt: '#1A73E8',
    ringColor: '#1A73E8',
    glasses: true,
  },
  {
    id: 'cpt',
    coords: [18.4241, -33.9249],
    city: 'Cape Town',
    name: 'Zola N.',
    role: 'Dispatch',
    skin: '#6E4327',
    hair: '#101010',
    hairStyle: 'bun',
    shirt: '#F9AB00',
    ringColor: '#12A150',
  },
  {
    id: 'sfo',
    coords: [-122.4194, 37.7749],
    city: 'San Francisco',
    name: 'Alex R.',
    role: 'Workflows',
    skin: '#FBDDC0',
    hair: '#503521',
    hairStyle: 'side',
    shirt: '#111C34',
    ringColor: '#1A73E8',
  },
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
    const R = W / 2 - 18;
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

    // Avatar clip path definitions
    CITY_USERS.forEach((u) => {
      const clip = defs.append('clipPath').attr('id', `clip-user-${u.id}`);
      clip.append('circle').attr('cx', 0).attr('cy', 0).attr('r', 10.5);
    });

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

    // User Avatar City Markers
    const cityG = svg
      .append('g')
      .selectAll('g')
      .data(CITY_USERS)
      .enter()
      .append('g')
      .attr('class', 'user-marker group cursor-pointer');

    // 1. Drop Shadow Circle
    cityG
      .append('circle')
      .attr('r', 12.5)
      .attr('cy', 2.5)
      .attr('fill', 'rgba(17, 28, 52, 0.20)');

    // 2. Avatar Outer Halo Ring
    cityG
      .append('circle')
      .attr('r', 12)
      .attr('fill', '#ffffff')
      .attr('stroke', (d) => d.ringColor)
      .attr('stroke-width', 2);

    // 3. Avatar Face Content Container (Clipped to Circle)
    const avatarContent = cityG
      .append('g')
      .attr('clip-path', (d) => `url(#clip-user-${d.id})`);

    // Avatar Background Tint
    avatarContent
      .append('circle')
      .attr('r', 10.5)
      .attr('fill', '#F4F8FD');

    // Shirt / Body Silhouette
    avatarContent
      .append('path')
      .attr('d', 'M -9 11 C -9 5, 9 5, 9 11 Z')
      .attr('fill', (d) => d.shirt);

    // Neck / Head Circle
    avatarContent
      .append('circle')
      .attr('cx', 0)
      .attr('cy', -1.5)
      .attr('r', 4.6)
      .attr('fill', (d) => d.skin);

    // Hair Styles
    avatarContent.each(function (d) {
      const g = d3.select(this);
      if (d.hairStyle === 'short') {
        g.append('path')
          .attr('d', 'M -4.8 -2.5 C -4.8 -6.8, 4.8 -6.8, 4.8 -2.5 C 4.8 -1.2, -4.8 -1.2, -4.8 -2.5 Z')
          .attr('fill', d.hair);
      } else if (d.hairStyle === 'bob') {
        g.append('path')
          .attr('d', 'M -5.2 -1.5 C -5.5 -6.8, 5.5 -6.8, 5.2 -1.5 C 5.5 2.5, 3.8 3, 3.8 0.5 C 2 -5, -2 -5, -3.8 0.5 C -3.8 3, -5.5 2.5, -5.2 -1.5 Z')
          .attr('fill', d.hair);
      } else if (d.hairStyle === 'curly') {
        g.append('circle').attr('cx', -3.8).attr('cy', -3.5).attr('r', 2.6).attr('fill', d.hair);
        g.append('circle').attr('cx', 0).attr('cy', -6).attr('r', 3).attr('fill', d.hair);
        g.append('circle').attr('cx', 3.8).attr('cy', -3.5).attr('r', 2.6).attr('fill', d.hair);
      } else if (d.hairStyle === 'ponytail') {
        g.append('circle').attr('cx', 0).attr('cy', -4).attr('r', 4.6).attr('fill', d.hair);
        g.append('circle').attr('cx', -4.8).attr('cy', -2).attr('r', 2.2).attr('fill', d.hair);
      } else if (d.hairStyle === 'bun') {
        g.append('circle').attr('cx', 0).attr('cy', -3.8).attr('r', 4.6).attr('fill', d.hair);
        g.append('circle').attr('cx', 0).attr('cy', -8).attr('r', 2.6).attr('fill', d.hair);
      } else {
        g.append('path')
          .attr('d', 'M -4.8 -2 C -4.8 -6.8, 5.8 -5.8, 4.8 -1 C 4.8 -4.8, -2.8 -4.8, -4.8 -2 Z')
          .attr('fill', d.hair);
      }

      // Glasses (if user wears glasses)
      if (d.glasses) {
        g.append('path')
          .attr('d', 'M -3.8 -2.2 h 2.6 M 1.2 -2.2 h 2.6 M -1.2 -2.2 h 2.4')
          .attr('stroke', '#111C34')
          .attr('stroke-width', 0.85)
          .attr('fill', 'none');
      }

      // Eyes
      g.append('circle').attr('cx', -1.6).attr('cy', -1.5).attr('r', 0.65).attr('fill', '#111C34');
      g.append('circle').attr('cx', 1.6).attr('cy', -1.5).attr('r', 0.65).attr('fill', '#111C34');

      // Smile
      g.append('path')
        .attr('d', 'M -1.8 0.9 Q 0 2.2 1.8 0.9')
        .attr('stroke', '#5A2A18')
        .attr('stroke-width', 0.6)
        .attr('fill', 'none')
        .attr('stroke-linecap', 'round');
    });

    // 4. WhatsApp Active Green Online Signal Pill
    cityG
      .append('circle')
      .attr('cx', 8)
      .attr('cy', 8)
      .attr('r', 3.2)
      .attr('fill', '#25D366')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1.2);

    // 5. Name & City Floating Tag Pill
    const tag = cityG
      .append('g')
      .attr('transform', 'translate(0, -17)');

    tag
      .append('rect')
      .attr('x', -26)
      .attr('y', -8)
      .attr('width', 52)
      .attr('height', 13)
      .attr('rx', 6.5)
      .attr('fill', '#111C34')
      .attr('opacity', 0.9);

    tag
      .append('text')
      .attr('x', 0)
      .attr('y', 1.5)
      .attr('text-anchor', 'middle')
      .attr('fill', '#ffffff')
      .attr('font-size', '7.2')
      .attr('font-weight', '700')
      .text((d) => d.city);

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
        const p = proj(d.coords);
        const front = c && d3.geoDistance(c, d.coords) < Math.PI / 2.15;
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
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      />
    </div>
  );
};
