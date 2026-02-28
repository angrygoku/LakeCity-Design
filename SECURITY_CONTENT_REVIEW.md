# Security and Content Review (Lakecity Design)

## Security Improvements

### 1) Tighten image and remote asset policy
- **Issue observed:** `next.config.mjs` currently allows all HTTPS domains for images (`hostname: '**'`) and enables SVG handling (`dangerouslyAllowSVG: true`). This broad trust model increases risk if untrusted remote image URLs are ever introduced.
- **Recommendation:**
  - Restrict `images.remotePatterns` to a short allowlist of trusted domains only.
  - Keep `dangerouslyAllowSVG` disabled unless you have a hard requirement for remote SVG.
  - If SVG must remain enabled, sanitize SVG sources and only allow first-party domains.

### 2) Harden Content Security Policy (CSP)
- **Issue observed:** Middleware sets `script-src` to include `'unsafe-inline'` and `'unsafe-eval'` for all matched pages.
- **Recommendation:**
  - Remove `'unsafe-eval'` in production where possible.
  - Minimize or remove `'unsafe-inline'` using nonces/hashes for inline scripts.
  - Add `object-src 'none'; base-uri 'self'; form-action 'self';` and, if viable, `upgrade-insecure-requests`.
  - Consider route-specific CSP if certain pages need exceptions.

### 3) Improve API rate limiting for production
- **Issue observed:** `/api/contact` uses in-memory map-based limits keyed by IP. This does not scale across server instances and resets on cold start/redeploy.
- **Recommendation:**
  - Move to distributed rate limiting (Redis/Upstash/Vercel KV) with TTL.
  - Add per-route and per-identifier rules (IP + normalized email hash) to reduce abuse.
  - Add basic bot defense (honeypot field + optional CAPTCHA for repeated failures).

### 4) Add CSRF/origin checks for write endpoints
- **Issue observed:** Contact endpoint validates payload shape well, but does not verify trusted origin/referer for browser-origin requests.
- **Recommendation:**
  - Validate `Origin` and fallback `Referer` against your site allowlist.
  - Reject cross-site requests for state-changing endpoints.
  - If adding authenticated features later, use anti-CSRF tokens for cookie-based sessions.

### 5) Validate email sending controls and resilience
- **Issue observed:** Contact endpoint accepts user email in `replyTo`, which is common but still should be validated to avoid header abuse edge cases.
- **Recommendation:**
  - Keep strict email validation (already present via Zod) and consider additional checks for disposable or suspicious domains if spam becomes a problem.
  - Add server-side structured logging (request ID, status, throttled/not throttled) without storing raw PII where unnecessary.

### 6) Dependency and platform hygiene
- **Issue observed:** The project depends on many UI packages and framework libraries; routine vulnerability scanning should be part of CI.
- **Recommendation:**
  - Add CI steps for `npm audit` (or Snyk/GitHub Dependabot) and enforce patch cadence.
  - Lock Node and npm versions via `.nvmrc`/engines for reproducible builds.
  - Track framework major upgrades (notably Next.js) and review security advisories promptly.

### 7) Strengthen transport and session policies for future auth
- **Current state:** There is no user auth flow in the current app, but you should pre-plan secure defaults.
- **Recommendation for future auth rollout:**
  - Use OAuth/OIDC providers with short-lived tokens and refresh rotation.
  - Enforce MFA for admin/editor roles.
  - Use HTTP-only, `Secure`, `SameSite=Lax` (or `Strict`) cookies.
  - Add account lockout / anomaly detection and audit logs for privileged actions.

### 8) Data handling and privacy controls
- **Issue observed:** Contact form captures personal and business info (`name`, `email`, `company`, optional message).
- **Recommendation:**
  - Define retention policy (e.g., auto-delete stale inquiries after X months).
  - Add privacy notice near form submission explaining usage and retention.
  - Redact or hash sensitive identifiers in logs.
  - Document data flow (browser -> API -> email provider) in internal security docs.

---

## Guidance for Reliable, Trustworthy Project Content

### 1) Replace generic claims with verifiable proof points
- Replace broad statements (e.g., “enterprise-ready”, “95+ Lighthouse”, “WCAG compliant”) with:
  - Date-stamped metrics,
  - Scope qualifiers (which page/template/version),
  - Evidence links (reports/screenshots/case-study annex).

### 2) Make case studies evidence-first
For each project, include a compact and consistent structure:
1. **Client context** (industry, company size, business stage)
2. **Problem** (baseline constraints and measurable pain points)
3. **Intervention** (what your team changed)
4. **Outcome** (before/after numbers and timeframe)
5. **Attribution note** (what was influenced vs fully caused)

This format improves authenticity and avoids inflated marketing language.

### 3) Add confidence labels to results
- Mark outcomes as one of:
  - **Measured** (analytics/CRM/source-of-truth data),
  - **Estimated** (modeled),
  - **Client-reported** (provided by client).
- Include “last updated” date on each case study.

### 4) Improve testimonial trust signals
- Pair testimonials with role, company, and engagement type (where permission exists).
- If anonymity is required, state why (e.g., NDA) and provide alternate credibility markers (industry, project scope).

### 5) Align homepage messaging with actual service boundaries
- Current services and pricing are clear; ensure claims match what your team can consistently deliver.
- Add explicit “not included” and “assumptions” for packages (e.g., ad spend, copywriting rounds, integrations).

### 6) Create a lightweight editorial governance workflow
- Set ownership by section (services, pricing, case studies, legal).
- Add quarterly review cadence with a changelog entry per edited section.
- Require source verification before publishing numerical claims.

### 7) Suggested tone and copy pattern
Use concise, factual copy:
- **What we did** (specific)
- **Why it mattered** (business impact)
- **How we measured it** (method/source)
- **Current status** (date + next milestone)

### 8) Suggested near-term content roadmap (4 weeks)
- **Week 1:** Audit all claims and tag them as Verified / Needs Evidence / Rewrite.
- **Week 2:** Update 2 flagship case studies with baseline + outcome tables.
- **Week 3:** Refresh services/pricing pages with assumptions, deliverables, and exclusions.
- **Week 4:** Publish editorial policy and “last updated” metadata across key pages.

