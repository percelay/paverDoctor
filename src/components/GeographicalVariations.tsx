"use client";

import { useState } from "react";
import { MapPin, ChevronDown, ChevronRight, Phone, Users } from "lucide-react";

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
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-widest">
          Version 1 — Static Reference
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reps.map((r) => (
          <div
            key={r.territory}
            className="bg-[var(--color-bg)] rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start"
          >
            {/* Left accent line */}
            <div className="flex flex-col items-center pt-1 shrink-0">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              <div className="w-px flex-1 bg-orange-200 mt-1 min-h-[2rem]" />
            </div>
            {/* Content */}
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-0.5">
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

// ─── Version 2 — Interactive hover cards ────────────────────────────────────

function VersionInteractive() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-widest">
          Version 2 — Interactive Region Select
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Region list */}
        <div className="lg:col-span-1 flex flex-col gap-2">
          {reps.map((r, i) => (
            <button
              key={r.territory}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                active === i
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md -translate-y-0.5"
                  : "bg-[var(--color-bg)] text-[var(--color-text-main)] border-gray-100 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              <span>{r.territory}</span>
              <ChevronRight
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  active === i ? "translate-x-0.5" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-2 flex items-start">
          {active !== null ? (
            <div className="w-full bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-primary)]">
                    Territory
                  </p>
                  <p className="font-bold text-[var(--color-text-main)] text-lg">
                    {reps[active].territory}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[var(--color-bg)] rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
                    States / Provinces
                  </p>
                  <p className="text-[var(--color-text-main)] font-medium text-sm leading-relaxed">
                    {reps[active].states}
                  </p>
                </div>
                <div className="bg-[var(--color-bg)] rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
                    Representative
                  </p>
                  <p className="text-[var(--color-primary)] font-bold text-xl">
                    {reps[active].rep}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full bg-[var(--color-surface)] rounded-2xl p-8 border border-dashed border-gray-200 flex flex-col items-center justify-center text-center min-h-[240px] gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">
                Hover or click a region to see the assigned representative.
              </p>
            </div>
          )}
        </div>
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
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-widest">
          Version 3 — Step-by-Step Finder
        </span>
      </div>

      <div className="max-w-xl">
        <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm space-y-6">
          {/* Step 1 */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
              Step 1 — Select Country
            </p>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value as Region | "");
                  setTerritory("");
                }}
                className="w-full appearance-none bg-[var(--color-bg)] border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200"
              >
                <option value="">— Choose country —</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            </div>
          </div>

          {/* Step 2 */}
          {country && (
            <div className="transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                Step 2 — Select Territory
              </p>
              <div className="relative">
                <select
                  value={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                  className="w-full appearance-none bg-[var(--color-bg)] border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200"
                >
                  <option value="">— Choose territory —</option>
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
            <div className="bg-[var(--color-bg)] rounded-xl p-5 border border-orange-100 transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Contact MarketAir
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-muted)] hover:border-gray-400 hover:text-[var(--color-text-main)] transition-colors duration-200"
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
    <section id="reps" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
            Manufacturer Reps
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            Find Your Representative
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-2">
            In the trade or want to buy wholesale? You can search for manufacturer
            representatives by zipcode.
          </p>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            FOR SHIPMENTS TO CANADA, PLEASE CALL (732) 985-8226 to place your
            credit card order!
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 mt-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === t.id
                  ? "bg-[var(--color-primary)] text-white shadow-sm"
                  : "bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] border border-gray-200"
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
