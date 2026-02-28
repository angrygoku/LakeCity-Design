# Services Pages Evidence & Visual Credibility Plan

## Goal
Make `/services` and `/services/[slug]` pages feel **data-backed, visual, and trustworthy** without overclaiming.

## 1) Current Gaps (from existing implementation)
1. **Mostly descriptive copy** with limited quantitative evidence.
2. **No proof hierarchy** (measured vs estimated vs client-reported).
3. **Limited visual proof blocks** (no KPI cards, benchmark charts, timelines, or process evidence).
4. **No “last updated” or methodology notes**, which reduces trust.

---

## 2) What to Add on `/services` (overview page)

### A. Evidence Snapshot Row (top-of-page)
Add 4–6 KPI cards above service cards:
- Avg. project delivery time
- Median performance uplift (e.g., CWV or conversion)
- On-time delivery rate
- Client retention rate
- Number of completed projects by service line

Each card should include:
- **Metric value**
- **Confidence label**: Measured / Estimated / Client-reported
- **Data window** (e.g., “Jan–Dec 2025”)

### B. “By the Numbers” section (small charts)
Use lightweight visualizations:
- Bar chart: projects completed by service category
- Line chart: median KPI improvement trend by quarter
- Donut chart: client mix by industry

### C. Proof-oriented service cards
For each service card, add:
- “Typical impact” (range, not single cherry-picked number)
- “Typical timeline” (median and P75)
- “Best-fit use case” with company stage

---

## 3) What to Add on `/services/[slug]` (detail page)

### A. Service KPI panel
Include a dedicated panel with:
- Outcome ranges (e.g., +18% to +42% conversion lift)
- Delivery benchmarks (median timeline, revision cycles)
- Risk notes (what can affect outcomes)

### B. Methodology + measurement section
For every major claim, show:
- **How measured** (GA4/CRM/Shopify/Lighthouse)
- **Attribution caveat** (influenced vs fully caused)
- **Sample size** (N projects)

### C. Visual proof modules
Add reusable modules:
1. **Before/After metric cards**
2. **Mini case strip** (3 short case references)
3. **Timeline visualization** of phases and decision gates
4. **Deliverables matrix** (included / optional / out-of-scope)

### D. Trust metadata
Add at footer of each service page:
- Last updated date
- Data coverage period
- Reviewer/owner (role)

---

## 4) Data Model Plan (single source of truth)

Create a structured dataset for service proof so pages are not hardcoded prose-only.

### Proposed type (TypeScript)
```ts
export type EvidenceConfidence = 'measured' | 'estimated' | 'client-reported'

export interface ServiceMetric {
  id: string
  serviceSlug: string
  label: string
  value: string
  change?: string
  confidence: EvidenceConfidence
  source: string
  sampleSize?: number
  period: string
  methodologyNote?: string
  lastUpdated: string
}

export interface ServiceBenchmark {
  serviceSlug: string
  metric: string
  median: string
  p75?: string
  unit: 'days' | 'percent' | 'score' | 'currency' | 'count'
  period: string
  confidence: EvidenceConfidence
}
```

### Data storage options
- **Phase 1 (fast):** `lib/service-evidence.ts` static typed object
- **Phase 2:** MDX content files with frontmatter
- **Phase 3:** CMS / Notion sync / DB-backed source with review workflow

---

## 5) Visual Design Plan (component backlog)

1. `components/services/service-metrics-grid.tsx`
2. `components/services/service-benchmark-chart.tsx`
3. `components/services/proof-badge.tsx` (Measured / Estimated / Client-reported)
4. `components/services/methodology-disclosure.tsx`
5. `components/services/deliverables-matrix.tsx`

Design rules:
- Keep charts simple and scannable.
- Always pair visuals with textual caveats.
- Never show a headline metric without source + period.

---

## 6) Content Governance Plan

### Editorial policy
- Every numeric claim requires:
  1. source,
  2. period,
  3. owner,
  4. confidence label.

### Update cadence
- Monthly: KPI refresh (automated/manual)
- Quarterly: copy + benchmark review
- Per release: “last updated” stamp

### Approval workflow
- Draft by service owner
- Validate by analytics/research owner
- Publish with changelog note

---

## 7) Implementation Roadmap

## Sprint 1 (1 week): Foundation
- Add evidence data types and seed dataset.
- Add confidence badge component.
- Add “last updated” metadata block.

## Sprint 2 (1 week): Overview Page Upgrade
- Add KPI cards row on `/services`.
- Add one lightweight chart (“projects by category”).
- Update service cards with typical range + timeline.

## Sprint 3 (1–2 weeks): Detail Page Upgrade
- Add KPI panel + methodology section on `/services/[slug]`.
- Add mini case strip and deliverables matrix.
- Add attribution caveats for each metric group.

## Sprint 4 (ongoing): Governance
- Establish monthly metric refresh ritual.
- Add content checklist to PR template.

---

## 8) Definition of Done (DoD)
A service page is “fact-backed” only when:
1. At least 5 numeric claims include source + period + confidence.
2. At least 2 visuals are tied to live/maintained data.
3. All major claims have attribution caveats.
4. Page includes a visible “last updated” date.
5. One owner is accountable for quarterly review.
