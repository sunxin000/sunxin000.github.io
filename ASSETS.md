# Homepage assets

The page uses local images so the school, company, and publication visuals do not depend on third-party image hotlinks. Run `python3 -m http.server 8765` in this directory to preview the site.

## Institution and venue marks

Exact download URLs are recorded in `images/logos/sources.json`. Logos identify the corresponding institutions or publication venues; all marks belong to their respective owners.

- USTC: blue seal cropped from the university's official visual identity sheet.
- SJTU: 240 x 240 standard seal from the university's official visual identity website, replacing the 32 x 32 favicon.
- CASIA and ByteDance: icons served by the institutions' official websites.
- Ant Group: company symbol sourced from CompaniesLogo's Ant Group page.
- ACL 2025, EMNLP 2023/2026, ICASSP 2026: year-specific official conference marks.
- ICML, ICLR, NeurIPS, KDD, AAAI: official conference or organizing association marks; the adjacent text specifies the year and publication status.
- IJCNN 2026: WCCI 2026 congress mark, cropped from the official registration banner. IJCNN is part of WCCI in 2026.
- IEEE TKDE: IEEE publisher mark, linked to the journal page.

## Publication figures

The 13 publication figures come from the author's existing paper images and PDF-derived presentation assets. Their source paths and figure types are recorded in `images/publications/sources.json`. Each publication title links to its source paper.

`*-thumb.webp` images serve the list; the corresponding larger `.webp` opens in the accessible figure dialog. The calibration paper uses an original calibration result plot rather than an invented framework. SSLRE uses Figure 2 cropped from page 4 of the paper. The TTARAG poster is copied from the existing local poster PDF.

Publication statuses are preserved from the supplied homepage, including “Under Review at AAAI 2027.” A venue mark does not indicate acceptance.

## Maintenance

Keep paper links and text in `index.html`, styles in `css/style.css`, and navigation/figure preview behavior in `js/main.js`. Figure links also open directly when JavaScript is unavailable. Update `sources.json` when replacing an image.
