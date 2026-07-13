# Data Project Portfolio

A React and Vite web application for presenting data analytics, business intelligence, and data engineering projects as case studies. The project is built around real dashboard screenshots, a mobile product demo video, project links, skills, internship experience, and contact actions.

Rather than a static resume page, this site works as a project showcase for BI dashboards and full-stack data products.

## Live Site

After GitHub Pages is enabled, the project is available at:

```text
https://hazemmostafaa.github.io/portfolio/
```

## Features

- Responsive single-page project showcase
- Filterable project cards for BI dashboards, data engineering work, and full-stack platforms
- Embedded mobile-style video preview for the TAZABEET demo
- Dashboard screenshot galleries for Inventa Dashboard and Egypt Health Insights
- Professional short-link buttons for GitHub, LinkedIn, live demos, and dashboard files
- CV-based sections for skills, internships, education, and contact information

## Featured Work

- **TAZABEET**: Home services booking and management platform with role-based dashboards, PWA support, and React Native extension.
- **Tabeeby**: Hospital capacity management platform with dashboard-focused operational flows.
- **Egypt Health Insights**: Healthcare analytics dashboard built with Power BI, DAX, data modeling, and KPI tracking.
- **Inventa Dashboard**: Inventory and business performance dashboard with KPI views and dashboard screenshot previews.
- **Data Analysis Projects**: Exploratory analysis, reporting, and Python/SQL data cleaning work.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Power BI project assets
- GitHub-hosted project media

## Project Structure

```text
.
|-- App.jsx
|-- styles.css
|-- main.jsx
|-- index.html
|-- assets/
|   |-- data-workspace.png
|   |-- tazabeet/
|   |-- tabeeby/
|   |-- Egypt health insights/
|   `-- inventa dashboards /
`-- HOW_TO_ADD_WORK.md
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deploy

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To publish the site:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main`, or run the `Deploy to GitHub Pages` workflow manually from the `Actions` tab.

The Vite production build uses `/portfolio/` as its base path so assets load correctly from the GitHub Pages project URL.

## Add New Work

Use the asset folders to add previews without changing the layout:

```text
assets/tazabeet/              -> TAZABEET video
assets/tabeeby/               -> Tabeeby hospital website video
assets/Egypt health insights/ -> Egypt Health Insights screenshots
assets/inventa dashboards /   -> Inventa Dashboard screenshots
```

For professional buttons, edit the `links` array for the matching project in `App.jsx`:

```js
links: [
  { label: 'Source code', href: 'https://github.com/hazemmostafaa/project-repo' },
  { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/post-link' },
]
```

Visitors only see short labels such as `Source code`, `LinkedIn post`, `Live website`, and `Open screenshots`.

More editing notes are in `HOW_TO_ADD_WORK.md`.

## Purpose

This project is designed to support applications for data analyst, BI analyst, and junior data engineering roles by showing practical work, dashboard outputs, and product-building experience in one clean interface.
