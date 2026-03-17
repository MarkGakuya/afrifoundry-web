'use client';
import { useEffect, useRef, useState } from 'react';

const DATA_NODES = [
  // ── KENYA PRIMARY — exhaustive depth ────────────────────────────────────
  { name: 'Nairobi — Gikomba', lat: -1.2896, lng: 36.8425, points: 48000, sector: 'Wholesale clothing & goods', tier: 'primary' },
  { name: 'Nairobi — Wakulima', lat: -1.2833, lng: 36.8219, points: 31000, sector: 'Produce wholesale', tier: 'primary' },
  { name: 'Nairobi CBD', lat: -1.2864, lng: 36.8172, points: 28000, sector: 'Mixed · Finance · Tech', tier: 'primary' },
  { name: 'Nairobi — Eastleigh', lat: -1.2757, lng: 36.8534, points: 22000, sector: 'Clothing & electronics', tier: 'primary' },
  { name: 'Nairobi — Westlands', lat: -1.2636, lng: 36.8014, points: 12000, sector: 'Finance · Hospitality', tier: 'primary' },
  { name: 'Nairobi — Industrial Area', lat: -1.3134, lng: 36.8447, points: 9000, sector: 'Manufacturing · Labour', tier: 'primary' },

  { name: 'Mombasa — Kongowea', lat: -4.0222, lng: 39.6833, points: 58000, sector: 'Fresh produce', tier: 'primary' },
  { name: 'Mombasa CBD', lat: -4.0500, lng: 39.6667, points: 24000, sector: 'Mixed · Trade', tier: 'primary' },
  { name: 'Mombasa — Marikiti', lat: -4.0614, lng: 39.6636, points: 18000, sector: 'Fresh produce', tier: 'primary' },
  { name: 'Mombasa — Likoni', lat: -4.0834, lng: 39.6664, points: 9000, sector: 'Mixed retail', tier: 'primary' },

  { name: 'Kisumu CBD', lat: -0.1022, lng: 34.7617, points: 22000, sector: 'Mixed · Fish · Trade', tier: 'primary' },
  { name: 'Kisumu — Kibuye', lat: -0.0830, lng: 34.7510, points: 16000, sector: 'Fresh produce & fish', tier: 'primary' },

  // ── KENYA SECONDARY — county level ──────────────────────────────────────
  { name: 'Nakuru', lat: -0.2827, lng: 36.0661, points: 18000, sector: 'Mixed · Agriculture', tier: 'secondary' },
  { name: 'Eldoret', lat: 0.5143, lng: 35.2698, points: 14000, sector: 'Agriculture · Transport', tier: 'secondary' },
  { name: 'Kiambu', lat: -1.1697, lng: 36.8327, points: 12000, sector: 'Agriculture · Real estate', tier: 'secondary' },
  { name: 'Nyeri', lat: -0.4167, lng: 36.9500, points: 11000, sector: 'Agriculture · Retail', tier: 'secondary' },
  { name: 'Kakamega', lat: 0.2827, lng: 34.7519, points: 9000, sector: 'Agriculture · Education', tier: 'secondary' },
  { name: 'Thika', lat: -1.0332, lng: 37.0693, points: 8000, sector: 'Manufacturing · Agriculture', tier: 'secondary' },
  { name: 'Naivasha', lat: -0.7167, lng: 36.4333, points: 7000, sector: 'Flowers · Agriculture', tier: 'secondary' },
  { name: 'Kericho', lat: -0.3685, lng: 35.2863, points: 7500, sector: 'Tea · Agriculture', tier: 'secondary' },
  { name: 'Machakos', lat: -1.5177, lng: 37.2634, points: 7000, sector: 'Retail · Agriculture', tier: 'secondary' },
  { name: 'Malindi', lat: -3.2175, lng: 40.1169, points: 5000, sector: 'Tourism · Fishing', tier: 'secondary' },
  { name: 'Kilifi', lat: -3.6305, lng: 39.8499, points: 4500, sector: 'Tourism · Agriculture', tier: 'secondary' },
  { name: 'Bungoma', lat: 0.5635, lng: 34.5606, points: 6000, sector: 'Agriculture · Trade', tier: 'secondary' },
  { name: 'Karatina', lat: -0.4833, lng: 37.1167, points: 5500, sector: 'Produce & livestock', tier: 'secondary' },

  // ── KENYA SPARSE — early coverage ────────────────────────────────────────
  { name: 'Garissa', lat: -0.4532, lng: 42.1376, points: 2200, sector: 'Livestock · Trade', tier: 'sparse' },
  { name: 'Wajir', lat: 1.7471, lng: 40.0573, points: 1200, sector: 'Livestock', tier: 'sparse' },
  { name: 'Lamu', lat: -2.2686, lng: 40.9020, points: 2800, sector: 'Fishing · Tourism', tier: 'sparse' },
  { name: 'Kitui', lat: -1.3667, lng: 38.0167, points: 3500, sector: 'Agriculture · Labour', tier: 'sparse' },
  { name: 'Mandera', lat: 3.9366, lng: 41.8670, points: 800, sector: 'Livestock · Border trade', tier: 'sparse' },

  // ── EAST AFRICA — regional anchors ──────────────────────────────────────
  { name: 'Kampala, Uganda', lat: 0.3476, lng: 32.5825, points: 1800, sector: 'Mixed · Trade', tier: 'ea' },
  { name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083, points: 1500, sector: 'Mixed · Port', tier: 'ea' },
  { name: 'Kigali, Rwanda', lat: -1.9441, lng: 30.0619, points: 900, sector: 'Mixed · Tech', tier: 'ea' },
  { name: 'Arusha, Tanzania', lat: -3.3869, lng: 36.6830, points: 1100, sector: 'Tourism · Agriculture', tier: 'ea' },
];

const TIER_CONFIG = {
  primary:   { color: '#F97316', minR: 6,  maxR: 22 },
  secondary: { color: '#F59E0B', minR: 4,  maxR: 13 },
  sparse:    { color: '#6B7280', minR: 3,  maxR: 7  },
  ea:        { color: '#3B82F6', minR: 3,  maxR: 7  },
};

function fmt(n) {
  return n >= 1000 ? `${(n/1000).toFixed(0)}k` : n.toString();
}

export default function DataMapClient() {
  const mapRef = useRef(null);
  const leafletRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    import('leaflet').then(L => {
      delete L.Icon.Default.prototype._getIconUrl;

      const map = L.map(mapRef.current, {
        center: [-1.8, 37.8],   // Kenya centred — shows Nairobi + Mombasa
        zoom: 5.5,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false,
        zoomSnap: 0.5,
      });

      leafletRef.current = map;

      // Dark CARTO tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19,
      }).addTo(map);

      // Attribution
      L.control.attribution({ prefix: false, position: 'bottomright' })
        .addAttribution('<span style="font-size:9px;color:#4B5563">© CARTO · AfriFoundry Dataset · © OpenStreetMap</span>')
        .addTo(map);

      const maxPoints = Math.max(...DATA_NODES.map(n => n.points));

      DATA_NODES.forEach(node => {
        const cfg = TIER_CONFIG[node.tier];
        const ratio = Math.pow(node.points / maxPoints, 0.45); // power curve — keeps big bubbles in check
        const radius = cfg.minR + ratio * (cfg.maxR - cfg.minR);
        const opacity = 0.3 + ratio * 0.45;

        // Outer glow
        L.circleMarker([node.lat, node.lng], {
          radius: radius + 4,
          fillColor: cfg.color,
          fillOpacity: 0.06,
          color: 'transparent',
          weight: 0,
        }).addTo(map);

        // Main dot
        const circle = L.circleMarker([node.lat, node.lng], {
          radius,
          fillColor: cfg.color,
          fillOpacity: opacity,
          color: cfg.color,
          weight: 1,
          opacity: 0.7,
        }).addTo(map);

        circle.on('mouseover', function(e) {
          this.setStyle({ fillOpacity: Math.min(opacity + 0.3, 0.95), weight: 2 });
          const pt = map.latLngToContainerPoint([node.lat, node.lng]);
          setTooltip({ x: pt.x, y: pt.y, ...node });
        });
        circle.on('mouseout', function() {
          this.setStyle({ fillOpacity: opacity, weight: 1 });
          setTooltip(null);
        });
      });

      setMapReady(true);
    });

    return () => {
      if (leafletRef.current) { leafletRef.current.remove(); leafletRef.current = null; }
    };
  }, []);

  const tierColor = { primary: '#F97316', secondary: '#F59E0B', sparse: '#9CA3AF', ea: '#3B82F6' };

  return (
    <div style={{ position: 'relative' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />

      <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(249,115,22,0.2)', boxShadow: '0 0 60px rgba(249,115,22,0.05)', position: 'relative' }}>
        {!mapReady && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: 28, height: 28, border: '2px solid rgba(249,115,22,0.3)', borderTop: '2px solid var(--orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>Loading map…</span>
          </div>
        )}

        <div ref={mapRef} style={{ height: 480, width: '100%', background: '#0d1117' }} />

        {tooltip && (
          <div style={{
            position: 'absolute',
            left: Math.min(tooltip.x + 14, 650),
            top: Math.max(tooltip.y - 75, 8),
            zIndex: 1000, pointerEvents: 'none',
            background: 'rgba(8,12,24,0.96)',
            border: `1px solid ${tierColor[tooltip.tier]}40`,
            borderLeft: `3px solid ${tierColor[tooltip.tier]}`,
            borderRadius: 10, padding: '0.7rem 1rem', minWidth: 170,
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.88rem', color: '#fff', marginBottom: '0.2rem' }}>{tooltip.name}</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.78rem', color: tierColor[tooltip.tier], fontWeight: 600, marginBottom: '0.15rem' }}>
              {fmt(tooltip.points)} datapoints
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text3)', lineHeight: 1.4 }}>{tooltip.sector}</div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1rem', padding: '0.85rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10 }}>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', alignSelf: 'center' }}>Coverage</span>
        {[
          { color: '#F97316', label: 'Kenya — primary market' },
          { color: '#F59E0B', label: 'Kenya — county level' },
          { color: '#9CA3AF', label: 'Kenya — early coverage' },
          { color: '#3B82F6', label: 'East Africa — regional' },
        ].map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: l.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--text2)' }}>{l.label}</span>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', letterSpacing: '0.05em', marginTop: '0.75rem', textAlign: 'center' }}>
        Hover any dot to see location details · Drag to pan · Pinch or +/− to zoom
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
