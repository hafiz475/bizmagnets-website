'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import landData from 'world-atlas/land-110m.json';

interface GlobeCanvasProps {
  size?: number;
}

interface GlobeUser {
  id: string;
  coords: [number, number];
  name: string;
  role: string;
  avatarUrl: string;
  ringColor: string;
  statusTag: string;
  tagColor: string;
  message: string;
  cardOffset: { x: number; y: number };
}

const GLOBE_USERS: GlobeUser[] = [
  {
    id: 'user-1',
    coords: [-74.006, 40.7128], // New York
    name: 'Sarah Jenkins',
    role: 'Operations Lead',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&auto=format&fit=crop&q=80',
    ringColor: '#1A73E8',
    statusTag: 'CONFIRMED',
    tagColor: '#12A150',
    message: '📅 Appointment set · Dr. Menon Thu 11:30',
    cardOffset: { x: 22, y: -48 },
  },
  {
    id: 'user-2',
    coords: [-122.4194, 37.7749], // San Francisco
    name: 'Alex Rivera',
    role: 'Workflows Lead',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    ringColor: '#12A150',
    statusTag: 'SLA MET',
    tagColor: '#1A73E8',
    message: '⚡ Ticket #2910 auto-routed to Tier 2',
    cardOffset: { x: -190, y: -45 },
  },
  {
    id: 'user-3',
    coords: [-0.1278, 51.5074], // London
    name: 'James Wilson',
    role: 'Support Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
    ringColor: '#EA3323',
    statusTag: 'LIVE GPS',
    tagColor: '#EA3323',
    message: '🚚 Field Tech dispatched · En route',
    cardOffset: { x: 22, y: -46 },
  },
  {
    id: 'user-4',
    coords: [2.3522, 48.8566], // Paris
    name: 'Amélie Dubois',
    role: 'Care Coordinator',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    ringColor: '#1A73E8',
    statusTag: 'CSAT 5★',
    tagColor: '#F9AB00',
    message: '⭐ Feedback received: 5/5 on WhatsApp',
    cardOffset: { x: 22, y: -46 },
  },
  {
    id: 'user-5',
    coords: [55.2708, 25.2048], // Dubai
    name: 'Tariq Al-Mansoor',
    role: 'Facility Head',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80',
    ringColor: '#F9AB00',
    statusTag: 'APPROVED',
    tagColor: '#12A150',
    message: '🔧 HVAC maintenance SLA verified',
    cardOffset: { x: 22, y: -46 },
  },
  {
    id: 'user-6',
    coords: [72.8777, 19.076], // Mumbai
    name: 'Priya Sharma',
    role: 'Ticketing Lead',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    ringColor: '#12A150',
    statusTag: 'PAID ₹4.5k',
    tagColor: '#12A150',
    message: '💳 WhatsApp In-Chat Payment settled',
    cardOffset: { x: 22, y: -46 },
  },
  {
    id: 'user-7',
    coords: [103.8198, 1.3521], // Singapore
    name: 'Mei Lin Chen',
    role: 'E-Commerce Ops',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80',
    ringColor: '#1A73E8',
    statusTag: 'ORDER #889',
    tagColor: '#1A73E8',
    message: '📦 WhatsApp Catalogue Cart synced',
    cardOffset: { x: 22, y: -46 },
  },
  {
    id: 'user-8',
    coords: [139.6917, 35.6895], // Tokyo
    name: 'Kenji Takahashi',
    role: 'Logistics Dir',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80',
    ringColor: '#EA3323',
    statusTag: 'DISPATCHED',
    tagColor: '#EA3323',
    message: '📍 Delivery proof photo captured',
    cardOffset: { x: 22, y: -46 },
  },
  {
    id: 'user-9',
    coords: [151.2093, -33.8688], // Sydney
    name: 'Liam Miller',
    role: 'Field Service',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&auto=format&fit=crop&q=80',
    ringColor: '#12A150',
    statusTag: 'SITE VISIT',
    tagColor: '#F9AB00',
    message: '🏠 Property enquiry qualified via CTWA',
    cardOffset: { x: -190, y: -45 },
  },
  {
    id: 'user-10',
    coords: [-46.6333, -23.5505], // Sao Paulo
    name: 'Gabriela Santos',
    role: 'Sales Director',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&auto=format&fit=crop&q=80',
    ringColor: '#F9AB00',
    statusTag: 'LEAD WON',
    tagColor: '#12A150',
    message: '🎯 Auto-drip sequence closed deal',
    cardOffset: { x: -190, y: -45 },
  },
  {
    id: 'user-11',
    coords: [18.4241, -33.9249], // Cape Town
    name: 'Zola Ndlovu',
    role: 'Care Dispatch',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=160&auto=format&fit=crop&q=80',
    ringColor: '#12A150',
    statusTag: 'SHIFT SET',
    tagColor: '#1A73E8',
    message: '🏥 Home care nurse assigned for 14:00',
    cardOffset: { x: 22, y: -46 },
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

export const GlobeCanvas: React.FC<GlobeCanvasProps> = ({ size = 520 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const W = size;
    const R = W / 2 - 28;
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

    // Glow filter for globe rim
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

    // Card drop shadow filter
    const cardShadow = defs
      .append('filter')
      .attr('id', 'card-drop-shadow')
      .attr('x', '-20%')
      .attr('y', '-20%')
      .attr('width', '150%')
      .attr('height', '150%');
    cardShadow
      .append('feDropShadow')
      .attr('dx', '0')
      .attr('dy', '4')
      .attr('stdDeviation', '6')
      .attr('flood-color', '#111C34')
      .attr('flood-opacity', '0.14');

    // Avatar & Card clip path definitions
    GLOBE_USERS.forEach((u) => {
      const clip = defs.append('clipPath').attr('id', `photo-clip-${u.id}`);
      clip.append('circle').attr('cx', 0).attr('cy', 0).attr('r', 14);

      const cardClip = defs.append('clipPath').attr('id', `card-clip-${u.id}`);
      cardClip
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 178)
        .attr('height', 48)
        .attr('rx', 12);
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

    // Real Person User Marker Groups
    const userMarkerG = svg
      .append('g')
      .selectAll('g')
      .data(GLOBE_USERS)
      .enter()
      .append('g')
      .attr('class', 'globe-user-marker');

    // 1. Drop Shadow Circle for Avatar Pin
    userMarkerG
      .append('circle')
      .attr('r', 16)
      .attr('cy', 3)
      .attr('fill', 'rgba(17, 28, 52, 0.22)');

    // 2. Real Person Photo Image (Clipped to Circle)
    userMarkerG
      .append('image')
      .attr('href', (d) => d.avatarUrl)
      .attr('x', -14)
      .attr('y', -14)
      .attr('width', 28)
      .attr('height', 28)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .attr('clip-path', (d) => `url(#photo-clip-${d.id})`);

    // 3. Colored Brand Outer Ring Halo
    userMarkerG
      .append('circle')
      .attr('r', 15.5)
      .attr('fill', 'none')
      .attr('stroke', (d) => d.ringColor)
      .attr('stroke-width', 2.5);

    // 4. WhatsApp Online Green Signal Badge on Avatar
    userMarkerG
      .append('circle')
      .attr('cx', 10.5)
      .attr('cy', 10.5)
      .attr('r', 4)
      .attr('fill', '#25D366')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1.6);

    // 5. Message Style Card
    const msgCard = userMarkerG
      .append('g')
      .attr('class', 'message-card')
      .attr('transform', (d) => `translate(${d.cardOffset.x}, ${d.cardOffset.y})`)
      .attr('filter', 'url(#card-drop-shadow)');

    // Card White Background Container
    msgCard
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 178)
      .attr('height', 48)
      .attr('rx', 12)
      .attr('fill', '#ffffff')
      .attr('stroke', 'rgba(17, 28, 52, 0.10)')
      .attr('stroke-width', 1);

    // Top Accent Border Line on Card (Clipped to 12px rounded card boundary)
    msgCard
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 178)
      .attr('height', 3.5)
      .attr('fill', (d) => d.ringColor)
      .attr('clip-path', (d) => `url(#card-clip-${d.id})`);

    // Card Header Row: Green Online Dot
    msgCard
      .append('circle')
      .attr('cx', 12)
      .attr('cy', 17)
      .attr('r', 3)
      .attr('fill', '#25D366');

    // Card Header Row: Person Name
    msgCard
      .append('text')
      .attr('x', 20)
      .attr('y', 20.5)
      .attr('fill', '#111C34')
      .attr('font-size', '10.5')
      .attr('font-weight', '800')
      .attr('font-family', 'var(--font-outfit), sans-serif')
      .text((d) => d.name);

    // Card Header Row: Status Tag Pill Background
    msgCard
      .append('rect')
      .attr('x', 114)
      .attr('y', 10)
      .attr('width', 54)
      .attr('height', 14)
      .attr('rx', 7)
      .attr('fill', (d) => `${d.tagColor}18`);

    // Card Header Row: Status Tag Pill Text
    msgCard
      .append('text')
      .attr('x', 141)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('fill', (d) => d.tagColor)
      .attr('font-size', '7.5')
      .attr('font-weight', '800')
      .attr('font-family', 'var(--font-outfit), sans-serif')
      .text((d) => d.statusTag);

    // Card Body Row: Business Operations Message Text
    msgCard
      .append('text')
      .attr('x', 10)
      .attr('y', 36.5)
      .attr('fill', '#4A5568')
      .attr('font-size', '8.5')
      .attr('font-weight', '600')
      .attr('font-family', 'var(--font-jakarta), sans-serif')
      .text((d) => d.message);

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

      userMarkerG.each(function (d) {
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
    <div className="w-full flex items-center justify-center p-2 overflow-visible">
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
