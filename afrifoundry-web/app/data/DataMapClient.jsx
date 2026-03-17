'use client';
import { useEffect, useRef, useState } from 'react';

// Datapoint distribution — reflecting 500,000+ across Kenya + East Africa
// Kenya is primary market (exhaustive depth), EA is secondary (enough depth to function)
const DATA_NODES = [
  // ── KENYA — Primary Market ──────────────────────────────────────────────
  // Nairobi cluster — heaviest concentration
  { name: 'Nairobi CBD', lat: -1.2864, lng: 36.8172, points: 62000, sector: 'Mixed · Finance · Tech', tier: 'primary' },
  { name: 'Gikomba Market', lat: -1.2896, lng: 36.8425, points: 48000, sector: 'Wholesale clothing & goods', tier: 'primary' },
  { name: 'Wakulima Market', lat: -1.2833, lng: 36.8219, points: 31000, sector: 'Produce wholesale', tier: 'primary' },
  { name: 'Eastleigh', lat: -1.2757, lng: 36.8534, points: 22000, sector: 'Clothing & electronics', tier: 'primary' },
  { name: 'Toi Market', lat: -1.3006, lng: 36.7706, points: 14000, sector: 'Second-hand goods', tier: 'primary' },
  { name: 'City Market Nairobi', lat: -1.2840, lng: 36.8196, points: 11000, sector: 'Mixed retail', tier: 'primary' },
  { name: 'Industrial Area', lat: -1.3134, lng: 36.8447, points: 8500, sector: 'Manufacturing · Labour', tier: 'primary' },
  { name: 'Westlands', lat: -1.2636, lng: 36.8014, points: 7200, sector: 'Finance · Hospitality', tier: 'primary' },

  // Mombasa cluster — second heaviest
  { name: 'Kongowea Market', lat: -4.0222, lng: 39.6833, points: 58000, sector: 'Fresh produce', tier: 'primary' },
  { name: 'Mombasa CBD', lat: -4.0500, lng: 39.6667, points: 34000, sector: 'Mixed · Trade', tier: 'primary' },
  { name: 'Marikiti Market', lat: -4.0614, lng: 39.6636, points: 21000, sector: 'Fresh produce', tier: 'primary' },
  { name: 'Likoni', lat: -4.0834, lng: 39.6664, points: 12000, sector: 'Mixed retail', tier: 'primary' },
  { name: 'Kongowea Phase 2', lat: -4.0180, lng: 39.6940, points: 9500, sector: 'Electronics & phones', tier: 'primary' },
  { name: 'Nyali', lat: -3.9964, lng: 39.7167, points: 6800, sector: 'Hospitality · Real estate', tier: 'primary' },

  // Kisumu
  { name: 'Kisumu CBD', lat: -0.1022, lng: 34.7617, points: 28000, sector: 'Mixed · Fish · Trade', tier: 'primary' },
  { name: 'Kibuye Market', lat: -0.0830, lng: 34.7510, points: 19500, sector: 'Fresh produce & fish', tier: 'primary' },

  // Nakuru
  { name: 'Nakuru CBD', lat: -0.2827, lng: 36.0661, points: 21000, sector: 'Mixed · Agriculture', tier: 'secondary' },
  { name: 'Nakuru Market', lat: -0.2904, lng: 36.0671, points: 11500, sector: 'Produce & livestock', tier: 'secondary' },

  // Kiambu / Limuru
  { name: 'Kiambu Town', lat: -1.1697, lng: 36.8327, points: 14500, sector: 'Agriculture · Real estate', tier: 'secondary' },
  { name: 'Limuru Road', lat: -1.1000, lng: 36.6500, points: 9200, sector: 'Farm gate prices', tier: 'secondary' },
  { name: 'Thika', lat: -1.0332, lng: 37.0693, points: 8800, sector: 'Manufacturing · Agriculture', tier: 'secondary' },

  // Nyeri / Karatina
  { name: 'Nyeri Town', lat: -0.4167, lng: 36.9500, points: 13000, sector: 'Agriculture · Retail', tier: 'secondary' },
  { name: 'Karatina Market', lat: -0.4833, lng: 37.1167, points: 9500, sector: 'Produce & livestock', tier: 'secondary' },

  // Eldoret
  { name: 'Eldoret CBD', lat: 0.5143, lng: 35.2698, points: 16500, sector: 'Agriculture · Transport', tier: 'secondary' },

  // Machakos / Ukambani
  { name: 'Machakos Town', lat: -1.5177, lng: 37.2634, points: 9000, sector: 'Retail · Agriculture', tier: 'secondary' },
  { name: 'Kitui', lat: -1.3667, lng: 38.0167, points: 5500, sector: 'Agriculture · Labour', tier: 'secondary' },

  // Coast region beyond Mombasa
  { name: 'Malindi', lat: -3.2175, lng: 40.1169, points: 6200, sector: 'Tourism · Fishing', tier: 'secondary' },
  { name: 'Lamu', lat: -2.2686, lng: 40.9020, points: 4100, sector: 'Fishing · Tourism', tier: 'secondary' },
  { name: 'Kwale', lat: -4.1740, lng: 39.4524, points: 3800, sector: 'Agriculture · Mining', tier: 'secondary' },
  { name: 'Kilifi', lat: -3.6305, lng: 39.8499, points: 5100, sector: 'Tourism · Agriculture', tier: 'secondary' },

  // Rift Valley
  { name: 'Naivasha', lat: -0.7167, lng: 36.4333, points: 7800, sector: 'Flowers · Agriculture', tier: 'secondary' },
  { name: 'Kericho', lat: -0.3685, lng: 35.2863, points: 8200, sector: 'Tea · Agriculture', tier: 'secondary' },
  { name: 'Bomet', lat: -0.7833, lng: 35.3414, points: 4500, sector: 'Tea · Agriculture', tier: 'secondary' },

  // Western Kenya
  { name: 'Kakamega', lat: 0.2827, lng: 34.7519, points: 10500, sector: 'Agriculture · Education', tier: 'secondary' },
  { name: 'Bungoma', lat: 0.5635, lng: 34.5606, points: 7200, sector: 'Agriculture · Trade', tier: 'secondary' },

  // North Eastern (sparse)
  { name: 'Garissa', lat: -0.4532, lng: 42.1376, points: 3200, sector: 'Livestock · Trade', tier: 'sparse' },
  { name: 'Wajir', lat: 1.7471, lng: 40.0573, points: 1800, sector: 'Livestock', tier: 'sparse' },
  { name: 'Mandera', lat: 3.9366, lng: 41.8670, points: 1200, sector: 'Livestock · Border trade', tier: 'sparse' },

  // ── EAST AFRICA — Secondary Market ──────────────────────────────────────
  { name: 'Kampala', lat: 0.3476, lng: 32.5825, points: 2800, sector: 'Mixed · Trade', tier: 'ea' },
  { name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083, points: 2400, sector: 'Mixed · Port trade', tier: 'ea' },
  { name: 'Kigali', lat: -1.9441, lng: 30.0619, points: 1200, sector: 'Mixed · Tech', tier: 'ea' },
  { name: 'Arusha', lat: -3.3869, lng: 36.6830, points: 1400, sector: 'Tourism · Agriculture', tier: 'ea' },
  { name: 'Nairobi (Regional hub)', lat: -1.2921, lng: 36.8219, points: 0, sector: '', tier: 'ea' }, // already counted
];

const TIER_STYLES = {
  primary:   { baseColor: '#F97316', glowColor: 'rgba(249,115,22,',   minR: 14, maxR: 52 },
  secondary: { baseColor: '#F59E0B', glowColor: 'rgba(245,158,11,',   minR: 8,  maxR: 28 },
  sparse:    { baseColor: '#6B7280', glowColor: 'rgba(107,114,128,',   minR: 5,  maxR: 12 },
  ea:        { baseColor: '#3B82F6', glowColor: 'rgba(59,130,246,',    minR: 5,  maxR: 14 },
};

function formatPoints(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

export default function DataMapClient() {
  const mapRef = useRef(null);
  const leafletRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (mapRef.current && !leafletRef.current) {
      // Dynamically import Leaflet (avoids SSR issues)
      import('leaflet').then(L => {
        // Fix default marker icons
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });

        const map = L.map(mapRef.current, {
          center: [-1.0, 37.8],
          zoom: 6,
          zoomControl: true,
          scrollWheelZoom: false,
          attributionControl: false,
        });

        leafletRef.current = map;

        // Dark map tiles — matches AfriFoundry's dark theme
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '© OpenStreetMap © CARTO',
          subdomains: 'abcd',
          maxZoom: 19,
        }).addTo(map);

        // Subtle attribution
        L.control.attribution({ prefix: false, position: 'bottomright' })
          .addAttribution('<span style="font-size:9px;color:#4B5563">© CARTO · AfriFoundry Dataset</span>')
          .addTo(map);

        const nodes = DATA_NODES.filter(n => n.points > 0);
        const maxPoints = Math.max(...nodes.map(n => n.points));

        nodes.forEach(node => {
          const style = TIER_STYLES[node.tier];
          const ratio = Math.sqrt(node.points / maxPoints);
          const radius = style.minR + ratio * (style.maxR - style.minR);
          const opacity = 0.25 + ratio * 0.45;

          // Outer glow ring
          L.circleMarker([node.lat, node.lng], {
            radius: radius + 6,
            fillColor: style.baseColor,
            fillOpacity: 0.07,
            color: style.baseColor,
            weight: 0,
          }).addTo(map);

          // Main bubble
          const circle = L.circleMarker([node.lat, node.lng], {
            radius,
            fillColor: style.baseColor,
            fillOpacity: opacity,
            color: style.baseColor,
            weight: 1.5,
            opacity: 0.6,
          }).addTo(map);

          circle.on('mouseover', function(e) {
            this.setStyle({ fillOpacity: Math.min(opacity + 0.25, 0.95), weight: 2, opacity: 1 });
            const containerPoint = map.latLngToContainerPoint([node.lat, node.lng]);
            setTooltip({
              x: containerPoint.x,
              y: containerPoint.y,
              name: node.name,
              points: node.points,
              sector: node.sector,
              tier: node.tier,
            });
          });

          circle.on('mouseout', function() {
            this.setStyle({ fillOpacity: opacity, weight: 1.5, opacity: 0.6 });
            setTooltip(null);
          });
        });

        setMapReady(true);
      });
    }

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
      }
    };
  }, []);

  const tierColor = { primary: '#F97316', secondary: '#F59E0B', sparse: '#9CA3AF', ea: '#3B82F6' };

  return (
    <div style={{ position: 'relative' }}>
      {/* Map container */}
      <div style={{
        borderRadius: 16, overflow: 'hidden',
        border: '1px solid rgba(249,115,22,0.2)',
        boxShadow: '0 0 60px rgba(249,115,22,0.06)',
        position: 'relative',
      }}>
        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        />

        {!mapReady && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 10,
            background: 'var(--surface)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '0.75rem', flexDirection: 'column',
          }}>
            <div style={{ width: 28, height: 28, border: '2px solid rgba(249,115,22,0.3)', borderTop: '2px solid var(--orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>Loading map…</span>
          </div>
        )}

        <div ref={mapRef} style={{ height: 520, width: '100%', background: '#0d1117' }} />

        {/* Hover tooltip */}
        {tooltip && (
          <div style={{
            position: 'absolute',
            left: Math.min(tooltip.x + 12, 700),
            top: Math.max(tooltip.y - 80, 8),
            zIndex: 1000, pointerEvents: 'none',
            background: 'rgba(8,12,24,0.95)',
            border: `1px solid ${tierColor[tooltip.tier]}40`,
            borderLeft: `3px solid ${tierColor[tooltip.tier]}`,
            borderRadius: 10, padding: '0.75rem 1rem',
            minWidth: 180, backdropFilter: 'blur(8px)',
          }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.9rem', color: '#fff', marginBottom: '0.25rem' }}>{tooltip.name}</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem', color: tierColor[tooltip.tier], fontWeight: 600, marginBottom: '0.2rem' }}>
              {formatPoints(tooltip.points)} datapoints
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text3)', lineHeight: 1.4 }}>{tooltip.sector}</div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
        marginTop: '1.25rem', padding: '1rem 1.25rem',
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 12,
      }}>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', alignSelf: 'center' }}>Coverage</span>
        {[
          { color: '#F97316', label: 'Kenya — primary (exhaustive depth)' },
          { color: '#F59E0B', label: 'Kenya — secondary (county level)' },
          { color: '#9CA3AF', label: 'Kenya — sparse (early coverage)' },
          { color: '#3B82F6', label: 'East Africa — regional anchor' },
        ].map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: l.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text2)' }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Spin animation */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
