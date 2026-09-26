# MKBIM SOLUTIONS V2.6 Development Build

V2.6 is the production-readiness build based on the approved V2.4 visual baseline and the verified V2.5 enquiry workflow.

## V2.6 changes

### Business content
- Updated company description and FAQ wording for a more customer-facing presentation.
- Replaced development-only project placeholders with four capability-based portfolio entries based on documented MKBIM solution work.
- Client identities and project-specific outcomes are intentionally omitted where publication approval is not available.
- Removed the empty "Testimonials coming soon" section from the public-facing homepage. Verified testimonials can be added later without changing the design.
- Kept the existing technology/service positioning and the official email: support@mkbim-solutions.com.
- Added company registration reference RC 8234995 to the footer; public banking details are not included.

### SEO
- Added canonical URL for https://mkbim-solutions.com/
- Added descriptive title, meta description, keywords, robots and theme metadata.
- Added Open Graph and Twitter metadata.
- Added LocalBusiness structured data (JSON-LD).
- Added robots.txt and sitemap.xml.
- Added web manifest and a GitHub Pages-compatible 404.html.

### Performance and technical readiness
- Logo preload added for the primary brand asset.
- Existing lazy/reveal interaction and reduced-motion handling retained.
- No backend or database dependency introduced.
- Production CNAME is included with the approved release and points to `mkbim-solutions.com`.

## Local testing

Run from this folder:

```powershell
python -m http.server 8080
```

Then open:

`http://localhost:8080`

## Production deployment checklist

Before replacing the production GitHub Pages site:

1. Test desktop navigation and every CTA.
2. Test the V2.5 enquiry workflow again on desktop and mobile.
3. Confirm WhatsApp and email actions.
4. Test mobile menu and responsive layouts.
5. Confirm the live domain, email and phone details.
6. Confirm portfolio wording and publication approval.
7. Run a final link/asset check.
8. Confirm the included `CNAME` contains exactly `mkbim-solutions.com`.
9. Back up the current production repository before replacement.
10. Commit/push the approved release to the production `main` branch.
11. Verify GitHub Pages, the custom domain, HTTPS, sitemap, robots.txt and the enquiry workflow after deployment.

## Production safety

This is a development package. It does not modify or deploy the production GitHub repository.
