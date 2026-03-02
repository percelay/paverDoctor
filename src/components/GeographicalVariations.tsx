"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Phone } from "lucide-react";
import { US_STATE_PATHS } from "./usStatePaths";

// ─── Shared data ────────────────────────────────────────────────────────────

type Rep = {
  territory: string;
  states: string;
  rep: string;
};

const reps: Rep[] = [
  {
    territory: "Western Canada",
    states: "BC, AB, SK, MB, YT, NT, NU",
    rep: "Alliance Marketing",
  },
  {
    territory: "Eastern Canada",
    states: "ON, QE, NB, NS, PEI, NF",
    rep: "Fowler Sales Agency",
  },
  {
    territory: "Pacific Northwest",
    states: "WA, OR, ID, AK",
    rep: "Pacific NW Reps",
  },
  {
    territory: "West / Hawaii",
    states: "CA, AZ, HI, Western NV & Clark County (Las Vegas)",
    rep: "Denco",
  },
  {
    territory: "South Central",
    states: "TX, NM, OK, AR, LA",
    rep: "Hugh M. Cunningham Companies",
  },
  {
    territory: "Midwest",
    states: "ND, SD, IA, NB, MN, WI, IL, KS, MO, KY, MI, OH, WV, IN",
    rep: "Moore Sales Corp",
  },
  {
    territory: "New England / Upstate NY",
    states: "ME, NH, VT, MA, RI, CT, Upstate NY",
    rep: "Pilgrim Sales",
  },
  {
    territory: "Mid-Atlantic",
    states: "NYC Metro & Long Island, NJ, PA, VI, MD, DE",
    rep: "Kehoe Company",
  },
  {
    territory: "Carolinas",
    states: "NC, SC",
    rep: "Mid South Marketing",
  },
  {
    territory: "Southeast",
    states: "GA, AL, TN, MS, Western FL Panhandle",
    rep: "Phil Thomas",
  },
  {
    territory: "Florida",
    states: "FL (except panhandle west of GA, AB border)",
    rep: "AHR Sales",
  },
  {
    territory: "Mountain / Interior West",
    states: "CO, UT, WY, MT, Eastern NV (except Las Vegas)",
    rep: "Open",
  },
];

// ─── Version 1 — Static lines ────────────────────────────────────────────────

function VersionStatic() {
  return (
    <div>
      <div className="mb-6">
        <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[var(--color-primary-2)] text-xs font-semibold uppercase tracking-widest">
          Version 1 - Static Reference
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reps.map((r) => (
          <div
            key={r.territory}
            className="glass-card rounded-2xl p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
          >
            {/* Left accent line */}
            <div className="flex flex-col items-center pt-1 shrink-0">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              <div className="w-px flex-1 mt-1 min-h-[2rem] bg-[var(--color-border-strong)]" />
            </div>
            {/* Content */}
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-2)] mb-0.5">
                {r.territory}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2 leading-relaxed">
                {r.states}
              </p>
              <p className="text-sm font-bold text-[var(--color-text-main)]">
                {r.rep}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Version 2 — Interactive U.S. map ────────────────────────────────────────

type USRegionId =
  | "pacificNorthwest"
  | "westHawaii"
  | "mountainWest"
  | "southCentral"
  | "midwest"
  | "newEnglandUpstate"
  | "midAtlantic"
  | "carolinas"
  | "southeast"
  | "florida";

type CanadaRegionId = "westernCanada" | "easternCanada";
type RegionId = USRegionId | CanadaRegionId;

type MapRegion = {
  id: RegionId;
  territory: string;
  rep: string;
  stateNames: string[];
  mapPoint: { x: number; y: number };
  labelPoint: { x: number; y: number };
  labelAnchor: "start" | "middle" | "end";
  stateCodes?: string[];
};

type USMapRegion = MapRegion & {
  id: USRegionId;
  stateCodes: string[];
};

type CanadaMapRegion = MapRegion & {
  id: CanadaRegionId;
};

const MAP_SCALE = 0.62;
const MAP_OFFSET_X = 470;
const MAP_OFFSET_Y = 330;

const toCanvasX = (sourceX: number) => MAP_OFFSET_X + sourceX * MAP_SCALE;
const toCanvasY = (sourceY: number) => MAP_OFFSET_Y + sourceY * MAP_SCALE;

const CANADA_REGION_PATHS: Record<CanadaRegionId, string> = {
  westernCanada:
    "M95 -40 L150 -75 L230 -95 L320 -105 L405 -95 L470 -75 L500 -40 L470 -8 L390 8 L300 20 L210 15 L140 5 L100 -15 Z",
  easternCanada:
    "M500 -40 L540 -70 L620 -88 L700 -82 L770 -60 L835 -30 L860 5 L845 30 L790 36 L720 30 L640 42 L560 28 L510 10 Z",
};

const CANADA_REGIONS: CanadaMapRegion[] = [
  {
    id: "westernCanada",
    territory: "Western Canada",
    rep: "Alliance Marketing",
    stateNames: [
      "British Columbia",
      "Alberta",
      "Saskatchewan",
      "Manitoba",
      "Yukon",
      "Northwest Territories",
      "Nunavut",
    ],
    mapPoint: { x: 330, y: -44 },
    labelPoint: { x: 220, y: 170 },
    labelAnchor: "end",
  },
  {
    id: "easternCanada",
    territory: "Eastern Canada",
    rep: "Fowler Sales Agency",
    stateNames: [
      "Ontario",
      "Quebec",
      "New Brunswick",
      "Nova Scotia",
      "Prince Edward Island",
      "Newfoundland and Labrador",
    ],
    mapPoint: { x: 690, y: -30 },
    labelPoint: { x: 1410, y: 170 },
    labelAnchor: "start",
  },
];

const US_REGIONS: USMapRegion[] = [
  {
    id: "pacificNorthwest",
    territory: "Pacific Northwest",
    rep: "Pacific NW Reps",
    stateCodes: ["WA", "OR", "ID", "AK"],
    stateNames: ["Washington", "Oregon", "Idaho", "Alaska"],
    mapPoint: { x: 136, y: 88 },
    labelPoint: { x: 220, y: 360 },
    labelAnchor: "end",
  },
  {
    id: "westHawaii",
    territory: "West / Hawaii",
    rep: "Denco",
    stateCodes: ["CA", "AZ", "HI"],
    stateNames: ["California", "Arizona", "Hawaii", "Nevada (west + Las Vegas area)"],
    mapPoint: { x: 138, y: 318 },
    labelPoint: { x: 220, y: 520 },
    labelAnchor: "end",
  },
  {
    id: "mountainWest",
    territory: "Mountain / Interior West",
    rep: "Open",
    stateCodes: ["CO", "UT", "WY", "MT", "NV"],
    stateNames: ["Colorado", "Utah", "Wyoming", "Montana", "Nevada (east, except Las Vegas)"],
    mapPoint: { x: 320, y: 254 },
    labelPoint: { x: 740, y: 190 },
    labelAnchor: "middle",
  },
  {
    id: "southCentral",
    territory: "South Central",
    rep: "Hugh M. Cunningham Companies",
    stateCodes: ["TX", "NM", "OK", "AR", "LA"],
    stateNames: ["Texas", "New Mexico", "Oklahoma", "Arkansas", "Louisiana"],
    mapPoint: { x: 454, y: 424 },
    labelPoint: { x: 720, y: 940 },
    labelAnchor: "middle",
  },
  {
    id: "midwest",
    territory: "Midwest",
    rep: "Moore Sales Corp",
    stateCodes: ["ND", "SD", "IA", "NE", "MN", "WI", "IL", "KS", "MO", "KY", "MI", "OH", "WV", "IN"],
    stateNames: [
      "North Dakota",
      "South Dakota",
      "Iowa",
      "Nebraska",
      "Minnesota",
      "Wisconsin",
      "Illinois",
      "Kansas",
      "Missouri",
      "Kentucky",
      "Michigan",
      "Ohio",
      "Indiana",
      "West Virginia",
    ],
    mapPoint: { x: 558, y: 242 },
    labelPoint: { x: 980, y: 190 },
    labelAnchor: "middle",
  },
  {
    id: "newEnglandUpstate",
    territory: "New England / Upstate NY",
    rep: "Pilgrim Sales",
    stateCodes: ["ME", "NH", "VT", "MA", "RI", "CT", "NY"],
    stateNames: ["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York (upstate)"],
    mapPoint: { x: 868, y: 134 },
    labelPoint: { x: 1410, y: 330 },
    labelAnchor: "start",
  },
  {
    id: "midAtlantic",
    territory: "Mid-Atlantic",
    rep: "Kehoe Company",
    stateCodes: ["NJ", "PA", "MD", "DE", "VA", "DC"],
    stateNames: [
      "New Jersey",
      "Pennsylvania",
      "Maryland",
      "Delaware",
      "Virginia",
      "District of Columbia",
      "NYC Metro + Long Island",
    ],
    mapPoint: { x: 808, y: 238 },
    labelPoint: { x: 1410, y: 480 },
    labelAnchor: "start",
  },
  {
    id: "carolinas",
    territory: "Carolinas",
    rep: "Mid South Marketing",
    stateCodes: ["NC", "SC"],
    stateNames: ["North Carolina", "South Carolina"],
    mapPoint: { x: 754, y: 346 },
    labelPoint: { x: 1410, y: 620 },
    labelAnchor: "start",
  },
  {
    id: "southeast",
    territory: "Southeast",
    rep: "Phil Thomas",
    stateCodes: ["GA", "AL", "TN", "MS"],
    stateNames: ["Georgia", "Alabama", "Tennessee", "Mississippi", "Western Florida panhandle"],
    mapPoint: { x: 692, y: 398 },
    labelPoint: { x: 1410, y: 770 },
    labelAnchor: "start",
  },
  {
    id: "florida",
    territory: "Florida",
    rep: "AHR Sales",
    stateCodes: ["FL"],
    stateNames: ["Florida (except panhandle west of GA/AL border)"],
    mapPoint: { x: 802, y: 500 },
    labelPoint: { x: 1410, y: 910 },
    labelAnchor: "start",
  },
];

const MAP_REGIONS: MapRegion[] = [...CANADA_REGIONS, ...US_REGIONS];

const REGION_FILL: Record<RegionId, string> = {
  westernCanada: "rgba(160, 220, 252, 0.36)",
  easternCanada: "rgba(120, 188, 224, 0.36)",
  pacificNorthwest: "#cfe8ff",
  westHawaii: "#ffd8be",
  mountainWest: "#ffefbf",
  southCentral: "#ffd1c2",
  midwest: "#d8f0d0",
  newEnglandUpstate: "#c7ecee",
  midAtlantic: "#d6e3ff",
  carolinas: "#ffe2b8",
  southeast: "#f6d8c6",
  florida: "#fdd3dc",
};

const REGION_FILL_ACTIVE: Record<RegionId, string> = {
  westernCanada: "rgba(114, 208, 255, 0.7)",
  easternCanada: "rgba(97, 176, 221, 0.7)",
  pacificNorthwest: "#8ab8ea",
  westHawaii: "#ffb27e",
  mountainWest: "#f6cf6b",
  southCentral: "#fca784",
  midwest: "#9fd286",
  newEnglandUpstate: "#87d9dd",
  midAtlantic: "#9db8fb",
  carolinas: "#f8bd69",
  southeast: "#e89d74",
  florida: "#f49db0",
};

const STATE_TO_REGION = US_REGIONS.reduce((acc, region) => {
  region.stateCodes.forEach((code) => {
    acc[code] = region.id;
  });
  return acc;
}, {} as Record<string, RegionId>);

function wrapStates(states: string[], maxLineLength = 40) {
  const lines: string[] = [];
  let currentLine = "";

  states.forEach((state) => {
    if (!currentLine) {
      currentLine = state;
      return;
    }

    const withComma = `${currentLine}, ${state}`;
    if (withComma.length <= maxLineLength) {
      currentLine = withComma;
      return;
    }

    lines.push(currentLine);
    currentLine = state;
  });

  if (currentLine) lines.push(currentLine);

  return lines;
}

function VersionInteractive() {
  const [hoveredRegion, setHoveredRegion] = useState<RegionId | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<RegionId | null>(null);
  const activeRegionId = hoveredRegion ?? selectedRegion;

  const activate = (id: RegionId) => setHoveredRegion(id);
  const toggleSelection = (id: RegionId) =>
    setSelectedRegion((prev) => (prev === id ? null : id));

  return (
    <div>
      <div className="mb-6">
        <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[var(--color-primary-2)] text-xs font-semibold uppercase tracking-widest">
          Version 2 - Interactive North America Territory Map
        </span>
      </div>

      <div className="glass-card-strong rounded-2xl p-3 md:p-4">
        <div className="overflow-x-auto">
          <div
            className="min-w-[1520px]"
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <svg
              viewBox="0 0 1800 1100"
              className="w-full h-auto"
              role="img"
              aria-labelledby="rep-map-title"
            >
              <title id="rep-map-title">
                United States and Canada manufacturer representative territory map
              </title>

              <g transform={`translate(${MAP_OFFSET_X} ${MAP_OFFSET_Y}) scale(${MAP_SCALE})`}>
                {CANADA_REGIONS.map((region) => {
                  const isActive = region.id === activeRegionId;
                  const fillColor = isActive
                    ? REGION_FILL_ACTIVE[region.id]
                    : REGION_FILL[region.id];
                  const strokeColor = isActive
                    ? "rgba(95, 201, 255, 1)"
                    : "rgba(174, 226, 255, 0.55)";

                  return (
                    <path
                      key={region.id}
                      d={CANADA_REGION_PATHS[region.id]}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isActive ? 3.4 : 2.2}
                      className="cursor-pointer transition-colors duration-150"
                      onMouseEnter={() => activate(region.id)}
                      onClick={() => toggleSelection(region.id)}
                    />
                  );
                })}

                {Object.entries(US_STATE_PATHS).map(([code, state]) => {
                  const regionId = STATE_TO_REGION[code];
                  const isActive = regionId ? regionId === activeRegionId : false;
                  const fillColor = regionId
                    ? isActive
                      ? REGION_FILL_ACTIVE[regionId]
                      : REGION_FILL[regionId]
                    : "rgba(186, 218, 238, 0.65)";
                  const strokeColor = regionId
                    ? isActive
                      ? "rgba(95, 201, 255, 1)"
                      : fillColor
                    : "rgba(210, 236, 255, 0.85)";

                  return (
                    <path
                      key={code}
                      d={state.d}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isActive ? 3.2 : 2}
                      className={regionId ? "cursor-pointer transition-colors duration-150" : "transition-colors duration-150"}
                      onMouseEnter={() => regionId && activate(regionId)}
                      onClick={() => regionId && toggleSelection(regionId)}
                    >
                      <title>{state.name}</title>
                    </path>
                  );
                })}
              </g>

              {MAP_REGIONS.map((region) => {
                const isActive = region.id === activeRegionId;
                const mapX = toCanvasX(region.mapPoint.x);
                const mapY = toCanvasY(region.mapPoint.y);
                const lineEndX =
                  region.labelAnchor === "start"
                    ? region.labelPoint.x - 14
                    : region.labelAnchor === "end"
                    ? region.labelPoint.x + 14
                    : region.labelPoint.x;
                const stateLines = wrapStates(
                  region.stateNames,
                  region.labelAnchor === "middle" ? 46 : 38
                );

                return (
                  <g
                    key={region.id}
                    className="cursor-pointer"
                    onMouseEnter={() => activate(region.id)}
                    onClick={() => toggleSelection(region.id)}
                  >
                    <line
                      x1={mapX}
                      y1={mapY}
                      x2={lineEndX}
                      y2={region.labelPoint.y}
                      stroke={isActive ? "rgba(146, 214, 255, 0.95)" : "rgba(146, 214, 255, 0.5)"}
                      strokeWidth={isActive ? 2.6 : 1.8}
                    />
                    <circle
                      cx={mapX}
                      cy={mapY}
                      r={isActive ? 5.8 : 4.6}
                      fill={isActive ? "rgba(95, 201, 255, 1)" : "rgba(123, 187, 224, 0.8)"}
                    />
                    <text
                      x={region.labelPoint.x}
                      y={region.labelPoint.y - 16}
                      textAnchor={region.labelAnchor}
                      fill={isActive ? "rgba(146, 214, 255, 1)" : "rgba(160, 192, 216, 1)"}
                      fontSize="12"
                      fontWeight="700"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {region.territory}
                    </text>
                    <text
                      x={region.labelPoint.x}
                      y={region.labelPoint.y}
                      textAnchor={region.labelAnchor}
                      fill={isActive ? "rgba(233, 246, 255, 1)" : "rgba(233, 246, 255, 0.9)"}
                      fontSize="16"
                      fontWeight="800"
                    >
                      {region.rep}
                    </text>
                    {isActive &&
                      stateLines.map((line, index) => (
                        <text
                          key={`${region.id}-states-${index}`}
                          x={region.labelPoint.x}
                          y={region.labelPoint.y + 26 + index * 18}
                          textAnchor={region.labelAnchor}
                          fill="rgba(160, 192, 216, 1)"
                          fontSize="13"
                          fontWeight="500"
                        >
                          {line}
                        </text>
                      ))}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          Hover a bordered region or its partner name to reveal the states or
          provinces served under that partner.
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          NY, NV, and FL include sub-state splits in your territory notes; the
          map uses primary-area fills for those states to keep boundaries clean.
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          Canada is split into Western and Eastern sections based on your rep
          coverage list.
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          The U.S. footprint is intentionally scaled down so all partner labels
          and hover details live outside the map area.
        </p>
      </div>
    </div>
  );
}

// ─── Version 3 — Dropdown wizard ────────────────────────────────────────────

type Region = "USA" | "Canada";

const usaRegions = [
  "Pacific Northwest",
  "West / Hawaii",
  "South Central",
  "Midwest",
  "New England / Upstate NY",
  "Mid-Atlantic",
  "Carolinas",
  "Southeast",
  "Florida",
  "Mountain / Interior West",
] as const;

const canadaRegions = ["Western Canada", "Eastern Canada"] as const;

function VersionWizard() {
  const [country, setCountry] = useState<Region | "">("");
  const [territory, setTerritory] = useState<string>("");

  const regionOptions =
    country === "USA"
      ? usaRegions
      : country === "Canada"
      ? canadaRegions
      : [];

  const result = territory
    ? reps.find((r) => r.territory === territory)
    : null;

  const reset = () => {
    setCountry("");
    setTerritory("");
  };

  return (
    <div>
      <div className="mb-6">
        <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[var(--color-primary-2)] text-xs font-semibold uppercase tracking-widest">
          Version 3 - Step-by-Step Finder
        </span>
      </div>

      <div className="max-w-xl">
        <div className="glass-card-strong rounded-2xl p-6 sm:p-8 space-y-6">
          {/* Step 1 */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-2">
              Step 1 - Select Country
            </p>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value as Region | "");
                  setTerritory("");
                }}
                className="w-full appearance-none glass-card rounded-xl px-4 py-3 pr-10 text-sm font-medium text-[var(--color-text-main)] bg-[rgba(8,21,45,0.75)] focus:outline-none focus:border-[var(--color-border-strong)]"
              >
                <option value="">Choose country</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            </div>
          </div>

          {/* Step 2 */}
          {country && (
            <div className="transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-2">
                Step 2 - Select Territory
              </p>
              <div className="relative">
                <select
                  value={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                  className="w-full appearance-none glass-card rounded-xl px-4 py-3 pr-10 text-sm font-medium text-[var(--color-text-main)] bg-[rgba(8,21,45,0.75)] focus:outline-none focus:border-[var(--color-border-strong)]"
                >
                  <option value="">Choose territory</option>
                  {regionOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
              </div>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="glass-card rounded-xl p-5 border border-[var(--color-border)] transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-2)] mb-3">
                Your Representative
              </p>
              <p className="text-2xl font-bold text-[var(--color-text-main)] mb-2">
                {result.rep}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">
                {result.states}
              </p>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="#contact"
                  className="btn-primary px-4 py-2 text-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Contact MarketAir
                </a>
                <button
                  onClick={reset}
                  className="btn-glass px-4 py-2 text-sm"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

type TabId = "static" | "interactive" | "wizard";

const tabs: { id: TabId; label: string }[] = [
  { id: "static", label: "Static" },
  { id: "interactive", label: "Interactive" },
  { id: "wizard", label: "Finder" },
];

export default function GeographicalVariations() {
  const [tab, setTab] = useState<TabId>("static");

  return (
    <section id="reps" className="site-section section-alt section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-4 animate-rise">
          <p className="eyebrow mb-3">
            Manufacturer Reps
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            Find Your Representative
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-2">
            In the trade or want to buy wholesale? You can search for manufacturer
            representatives by zipcode.
          </p>
          <p className="text-sm font-semibold text-[var(--color-primary-2)]">
            FOR SHIPMENTS TO CANADA, PLEASE CALL (732) 985-8226 to place your
            credit card order!
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-8 mt-8" role="tablist" aria-label="Representative finder modes">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              role="tab"
              aria-selected={tab === t.id}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === t.id
                  ? "btn-primary"
                  : "btn-glass text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Version panels */}
        <div>
          {tab === "static" && <VersionStatic />}
          {tab === "interactive" && <VersionInteractive />}
          {tab === "wizard" && <VersionWizard />}
        </div>
      </div>
    </section>
  );
}
