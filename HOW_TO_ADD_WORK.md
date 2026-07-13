# How To Add Your Work

Use this when adding videos, dashboard screenshots, GitHub repos, or LinkedIn posts.

## Preview Files

The website now reads these folders automatically:

```text
assets/tazabeet/              -> TAZABEET video
assets/tabeeby/               -> Tabeeby hospital website video
assets/Egypt health insights/ -> Egypt Health Insights screenshots
assets/inventa dashboards /   -> Inventa Dashboard screenshots
```

For the hospital website video, put the finished MP4 inside:

```text
assets/tabeeby/
```

Then restart the dev server if it does not appear immediately.

## Inventa Dashboard links

Open `App.jsx` and find:

```js
title: 'Inventa Dashboard'
```

Use `links` for the small professional buttons:

```js
links: [
  { label: 'Source code', href: 'https://github.com/hazemmostafaa/your-repo' },
  { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/your-post' },
  { label: 'Dashboard file', href: '' },
],
```

Leave a link as `href: ''` if you do not have it yet. Empty links are hidden.

The dashboard screenshots already show from `assets/inventa dashboards /`.

Visitors will only see the short labels, not the full URLs.
