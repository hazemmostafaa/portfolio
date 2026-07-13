import { useMemo, useState } from 'react';
import heroImage from './assets/data-workspace.png';

const tazabeetVideos = Object.values(
  import.meta.glob('./assets/tazabeet/*.{mp4,MP4,mov,MOV,webm,WEBM}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

const tabeebyVideos = Object.values(
  import.meta.glob('./assets/tabeeby/*.{mp4,MP4,mov,MOV,webm,WEBM}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

const egyptHealthImages = Object.values(
  import.meta.glob('./assets/Egypt health insights/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

const inventaDashboardImages = Object.values(
  import.meta.glob('./assets/inventa dashboards /*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

const contactLinks = [
  {
    label: 'Email',
    value: 'Send an email',
    href: 'mailto:hazemelsherif6666@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'View profile',
    href: 'https://github.com/hazemmostafaa',
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://www.linkedin.com/in/hazem-elsherif-2312272aa',
  },
];

const stats = [
  { value: '4', label: 'Data and systems internships' },
  { value: '2', label: 'Full-stack platforms shipped' },
  { value: '2026', label: 'Expected graduation' },
  { value: 'BI + ETL', label: 'Current focus' },
];

const projectFilters = ['All', 'BI Dashboards', 'Data Engineering', 'Full Stack'];

// Paste project URLs into `href`. Visitors see the short `label` / `actionLabel`, not the full URL.
const projects = [
  {
    title: 'TAZABEET',
    subtitle: 'Home services booking and management platform',
    category: 'Full Stack',
    accent: 'teal',
    summary:
      'Graduation project connecting customers with home service providers through booking flows, role-based dashboards, and an AI-powered troubleshooting assistant.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'React Native', 'PWA'],
    outcomes: [
      'Built customer, worker, and admin dashboards.',
      'Converted the web app into an installable PWA with offline support.',
      'Managed deployment and source control with Git and GitHub.',
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/hazemmostafaa/Tazabeet' },
      { label: 'Live website', href: 'https://tazabeet.vercel.app' },
    ],
    media: {
      type: 'video',
      layout: 'mobile',
      eyebrow: 'Website walkthrough',
      title: 'Tazabeet product demo',
      note: 'A walkthrough for the customer, worker, and admin flows.',
      actionLabel: 'Open video',
      videoSrc: tazabeetVideos[0],
    },
  },
  {
    title: 'Tabeeby',
    subtitle: 'Hospital capacity management platform',
    category: 'Full Stack',
    accent: 'amber',
    summary:
      'Full-stack healthcare platform for monitoring hospital capacity and supporting operational decision-making through dashboards.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'React Native', 'PWA'],
    outcomes: [
      'Designed backend APIs for hospital management workflows.',
      'Built responsive user interfaces for hospital capacity monitoring.',
      'Extended the platform into PWA and mobile experiences.',
    ],
    media: {
      type: 'video',
      eyebrow: 'Platform walkthrough',
      title: 'Product demo',
      note: 'A walkthrough space for capacity dashboards, hospital flows, and mobile/PWA screens.',
      actionLabel: 'Watch demo',
      videoSrc: tabeebyVideos[0],
    },
  },
  {
    title: 'Egypt Health Insights',
    subtitle: 'Healthcare analytics dashboard',
    category: 'BI Dashboards',
    accent: 'coral',
    summary:
      'End-to-end Power BI solution using a synthetic healthcare dataset to analyze hospital performance, KPIs, and operational trends.',
    stack: ['Power BI', 'DAX', 'Data Modeling', 'KPI Tracking', 'Healthcare Analytics'],
    outcomes: [
      'Modeled healthcare operations data for dashboard reporting.',
      'Created DAX calculations and interactive performance views.',
      'Focused on hospital performance and executive-level KPI tracking.',
    ],
    media: {
      type: 'dashboard',
      eyebrow: 'Power BI showcase',
      title: 'Egypt Health Insights preview',
      note: 'Screenshots from the healthcare analytics dashboard.',
      actionLabel: 'Open screenshots',
      images: egyptHealthImages,
    },
  },
  {
    title: 'Inventa Dashboard',
    subtitle: 'Inventory and business performance report',
    category: 'BI Dashboards',
    accent: 'olive',
    summary:
      'Power BI dashboard project built to organize inventory and business activity into readable KPI views and performance insights.',
    stack: ['Power BI', 'SQL', 'Python', 'Excel', 'Data Visualization'],
    outcomes: [
      'Prepared source data through cleaning and transformation steps.',
      'Built KPI views for stock, sales, and business performance tracking.',
      'Structured dashboard pages for filtering, comparison, and metric storytelling.',
    ],
    links: [
      { label: 'Source code', href: '' },
      { label: 'LinkedIn post', href: '' },
      { label: 'Dashboard file', href: '' },
    ],
    media: {
      type: 'dashboard',
      eyebrow: 'Dashboard showcase',
      title: 'Inventa Dashboard preview',
      note: 'Screenshots from the inventory and business performance dashboard.',
      actionLabel: 'Open screenshots',
      images: inventaDashboardImages,
    },
  },
  {
    title: 'Data Analysis Projects',
    subtitle: 'Exploratory analysis and reporting',
    category: 'Data Engineering',
    accent: 'graphite',
    summary:
      'Generated datasets, explored patterns, and produced reports that connect raw data to decisions and next questions.',
    stack: ['Python', 'SQL', 'EDA', 'Reporting', 'Data Cleaning'],
    outcomes: [
      'Generated structured datasets with Python.',
      'Performed exploratory analysis to identify trends and anomalies.',
      'Created visual reports that summarize findings clearly.',
    ],
    media: {
      type: 'dashboard',
      eyebrow: 'Analysis output',
      title: 'Notebook or report',
      note: 'A showcase space for notebooks, reports, charts, and analysis summaries.',
      actionLabel: 'View analysis',
      href: '',
    },
  },
];

const skillGroups = [
  {
    title: 'Analytics and BI',
    skills: ['Power BI', 'Tableau', 'Excel', 'Data Visualization', 'KPI Reporting'],
  },
  {
    title: 'Data Engineering',
    skills: ['ETL', 'SSIS', 'SSAS', 'Data Warehousing', 'Data Modeling'],
  },
  {
    title: 'Databases',
    skills: ['Oracle Database', 'SQL Server', 'MongoDB', 'SQL'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'React Native'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'ERP Systems', 'Backup and Recovery'],
  },
];

const experiences = [
  {
    role: 'Intern',
    company: 'IDC Solutions',
    date: 'Jul 2025 - Sep 2025',
    points: [
      'Analyzed business datasets using SQL and Power BI.',
      'Developed dashboards and visual reports for decision-making.',
      'Completed training in SQL, Tableau, Power BI, SSIS, and SSAS.',
    ],
  },
  {
    role: 'Intern',
    company: 'ICT Hub',
    date: 'Jan 2025 - Feb 2025',
    points: [
      'Worked with SQL Server databases and queries.',
      'Performed data analysis and reporting using Power BI.',
      'Created visual dashboards from structured datasets.',
    ],
  },
  {
    role: 'Intern',
    company: 'ALI ALDEIN & SARHAN STEEL',
    date: 'Aug 2024',
    points: [
      'Supported Oracle ERP system operations and maintenance.',
      'Assisted in troubleshooting ERP-related issues.',
      'Participated in network installation and maintenance activities.',
    ],
  },
  {
    role: 'Intern',
    company: 'AL Motakamel Office Soft',
    date: 'Jul 2024 - Aug 2024',
    points: [
      'Developed Oracle database components.',
      'Managed users, permissions, and database security.',
      'Performed backup and recovery operations.',
    ],
  },
];

function ProjectMedia({ media }) {
  if (!media) {
    return null;
  }

  const hasVideo = Boolean(media.videoSrc);
  const hasImages = Boolean(media.images?.length);
  const actionHref = media.href || media.videoSrc || media.images?.[0] || '';

  return (
    <div className={`media-slot ${media.type} ${media.layout || ''}`}>
      {hasVideo ? (
        media.layout === 'mobile' ? (
          <div className="phone-frame" aria-label={`${media.title} mobile preview`}>
            <div className="phone-speaker" aria-hidden="true" />
            <video
              className="media-video mobile-video"
              controls
              playsInline
              preload="metadata"
              src={media.videoSrc}
              aria-label={`${media.title} video`}
            />
          </div>
        ) : (
          <video
            className="media-video"
            controls
            preload="metadata"
            src={media.videoSrc}
            aria-label={`${media.title} video`}
          />
        )
      ) : null}

      {hasImages ? (
        <div className="dashboard-preview" aria-label={`${media.title} screenshots`}>
          <a className="dashboard-main" href={media.images[0]} target="_blank" rel="noreferrer">
            <img src={media.images[0]} alt={`${media.title} main screenshot`} />
          </a>
          <div className="dashboard-thumbs">
            {media.images.slice(1, 5).map((image, index) => (
              <a href={image} key={image} target="_blank" rel="noreferrer">
                <img src={image} alt={`${media.title} screenshot ${index + 2}`} />
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="media-copy">
        <span>{media.eyebrow}</span>
        <strong>{media.title}</strong>
        <p>{media.note}</p>
      </div>

      {actionHref ? (
        <a className="media-action" href={actionHref} target="_blank" rel="noreferrer">
          {media.actionLabel}
        </a>
      ) : (
        <span className="media-placeholder">Coming soon</span>
      )}
    </div>
  );
}

function ProjectLinks({ links }) {
  const visibleLinks = links?.filter((link) => link.href);

  if (!visibleLinks?.length) {
    return null;
  }

  return (
    <div className="card-links">
      {visibleLinks.map((link) => (
        <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [copied, setCopied] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hazemelsherif6666@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:hazemelsherif6666@gmail.com';
    }
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Hazem Mostafa home">
          HM
        </a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(16, 22, 22, 0.92), rgba(16, 22, 22, 0.72) 42%, rgba(16, 22, 22, 0.28)), url(${heroImage})`,
          }}
        >
          <div className="hero-content">
            <p className="eyebrow">Data Analyst | Business Intelligence | Aspiring Data Engineer</p>
            <h1>Hazem Mostafa</h1>
            <p className="hero-summary">
              Business Information Systems student building dashboards, SQL analysis workflows,
              database-backed applications, and the data engineering foundation behind reliable reporting.
            </p>
            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button primary" href="#projects">
                View projects
              </a>
              <a className="button secondary" href="#contact">
                Contact me
              </a>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Portfolio highlights">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section intro-section" aria-labelledby="profile-heading">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2 id="profile-heading">Turning raw data into decisions.</h2>
          </div>
          <div className="intro-copy">
            <p>
              I work across SQL, Oracle Database, Power BI, Tableau, and ERP systems, with
              hands-on internship experience in business datasets, dashboard delivery, database
              administration, and Oracle ERP support.
            </p>
            <p>
              My current direction is data engineering: ETL processes, SSIS, SSAS, data
              warehousing, and dependable pipelines that make analysis easier to trust.
            </p>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-heading">Projects with analytics, systems, and product shape.</h2>
          </div>

          <div className="filter-row" role="tablist" aria-label="Project filters">
            {projectFilters.map((filter) => (
              <button
                className={filter === activeFilter ? 'filter-button active' : 'filter-button'}
                type="button"
                role="tab"
                aria-selected={filter === activeFilter}
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.summary}</p>
                </div>

                <ul className="outcome-list">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>

                <ProjectMedia media={project.media} />

                <div className="tag-row" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <ProjectLinks links={project.links} />
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2 id="skills-heading">BI front end, database back end, engineering next.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-heading">Internships across BI, databases, and ERP operations.</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.company}-${experience.date}`}>
                <div className="timeline-date">{experience.date}</div>
                <div>
                  <h3>
                    {experience.role} <span>{experience.company}</span>
                  </h3>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" aria-labelledby="education-heading">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2 id="education-heading">Business Information Systems foundation.</h2>
          </div>

          <div className="education-grid">
            <article>
              <h3>Bachelor of Science</h3>
              <p>AAST Miami Campus</p>
              <span>Sep 2022 - Sep 2026 | Expected graduation: September 2026</span>
            </article>
            <article>
              <h3>Languages</h3>
              <p>Arabic | English</p>
              <span>English: Professional working proficiency</span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-content">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading">Open to data analyst, BI, and junior data engineering work.</h2>
            <p>
              Based in Alexandria, Egypt. Available for dashboards, reporting, SQL analysis, and
              data engineering learning opportunities.
            </p>
            <div className="contact-actions">
              <button className="button primary" type="button" onClick={handleCopyEmail}>
                {copied ? 'Email copied' : 'Copy email'}
              </button>
              <a className="button secondary" href="tel:+201000570031">
                Call
              </a>
            </div>
          </div>

          <div className="contact-list" aria-label="Contact links">
            {contactLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noreferrer'}
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
