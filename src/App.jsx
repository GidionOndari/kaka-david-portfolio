import { useEffect, useState } from 'react'
import { portfolio } from './data/portfolioData'

const navItems = [
  ['About', 'about'],
  ['Strengths', 'strengths'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Certificates', 'certificates'],
  ['Gallery', 'gallery'],
  ['Contact', 'contact'],
]

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-stone-950 dark:text-stone-50 sm:text-3xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">{text}</p> : null}
    </div>
  )
}

function ImagePanel({ image, className = '', imgClassName = '' }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-sm dark:border-stone-700 dark:bg-stone-800 ${className}`}>
      <img src={image.src} alt={image.alt} className={`h-full w-full object-cover ${imgClassName}`} />
    </div>
  )
}

function TagList({ items, tone = 'light' }) {
  const toneClass =
    tone === 'dark'
      ? 'border-white/15 bg-white/10 text-white'
      : 'border-emerald-900/10 bg-white text-stone-800 dark:border-emerald-200/15 dark:bg-stone-800 dark:text-stone-100'

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`rounded-full border px-3 py-1 text-sm font-medium ${toneClass}`}>
          {item}
        </span>
      ))}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return window.localStorage.getItem('theme') || 'light'
  })
  const { contact, images } = portfolio
  const isDark = theme === 'dark'

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen overflow-x-hidden bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-100`}>
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/95 backdrop-blur dark:border-stone-800 dark:bg-stone-950/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <a href="#top" className="min-w-0 flex-1 leading-tight sm:flex-none">
            <span className="block truncate text-base font-semibold text-stone-950 dark:text-stone-50">{portfolio.name}</span>
            <span className="block truncate text-xs font-medium uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              Agriculture Portfolio
            </span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-stone-600 transition hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:text-stone-300 dark:hover:text-emerald-200"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-none items-center gap-2">
            <button
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-300 bg-white text-base text-stone-800 transition hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-emerald-300 dark:hover:text-emerald-200"
            >
              <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="hidden rounded-md bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 sm:inline-flex"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="border-b border-stone-200 bg-[#f4f5ed] dark:border-stone-800 dark:bg-stone-900">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300 sm:text-sm">
                {portfolio.headline}
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-stone-950 dark:text-stone-50 sm:text-5xl lg:text-6xl">
                {portfolio.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-emerald-900 dark:text-emerald-200 sm:text-xl">
                {portfolio.positioning}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700 dark:text-stone-300 sm:text-lg sm:leading-8">
                {portfolio.summary}
              </p>
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-600 dark:text-stone-300">
                  Open to
                </p>
                <TagList items={portfolio.openTo} />
              </div>
              <div className="mt-6">
                <TagList items={portfolio.proofBadges} />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex justify-center rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                >
                  Email David
                </a>
                <a
                  href="#experience"
                  className="inline-flex justify-center rounded-md border border-emerald-800 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:border-emerald-300/70 dark:bg-stone-900 dark:text-emerald-100 dark:hover:bg-stone-800"
                >
                  View Experience
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-emerald-300 dark:hover:text-emerald-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <ImagePanel
              image={images.hero}
              className="aspect-[4/5] max-h-[720px] sm:aspect-[3/4] lg:aspect-[4/5]"
              imgClassName="object-[50%_24%]"
            />
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImagePanel
            image={images.about}
            className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
            imgClassName="object-[50%_18%]"
          />
          <div>
            <SectionHeader eyebrow="About" title="Agriculture graduate with field exposure" />
            <p className="text-base leading-7 text-stone-700 dark:text-stone-300 sm:text-lg sm:leading-8">{portfolio.about}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-stone-200 border-l-4 border-l-emerald-700 bg-white p-4 shadow-sm dark:border-stone-700 dark:border-l-emerald-400 dark:bg-stone-900">
                <dt className="text-sm font-semibold text-stone-500 dark:text-stone-400">Location</dt>
                <dd className="mt-1 font-semibold text-stone-950 dark:text-stone-50">{contact.location}</dd>
              </div>
              <div className="rounded-md border border-stone-200 border-l-4 border-l-emerald-700 bg-white p-4 shadow-sm dark:border-stone-700 dark:border-l-emerald-400 dark:bg-stone-900">
                <dt className="text-sm font-semibold text-stone-500 dark:text-stone-400">Focus</dt>
                <dd className="mt-1 font-semibold text-stone-950 dark:text-stone-50">Fieldwork</dd>
              </div>
              <div className="rounded-md border border-stone-200 border-l-4 border-l-emerald-700 bg-white p-4 shadow-sm dark:border-stone-700 dark:border-l-emerald-400 dark:bg-stone-900">
                <dt className="text-sm font-semibold text-stone-500 dark:text-stone-400">Training</dt>
                <dd className="mt-1 font-semibold text-stone-950 dark:text-stone-50">Egerton University</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="strengths" className="border-y border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
            <SectionHeader
              eyebrow="Key Strengths"
              title="Field-ready strengths"
              text="Practical capability across crop production, extension, research support, and agricultural learning."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {portfolio.strengths.map((strength) => (
                <div key={strength} className="rounded-lg border border-stone-200 bg-stone-50 p-4 shadow-sm dark:border-stone-700 dark:bg-stone-950">
                  <div className="h-1 w-10 rounded-full bg-emerald-700 dark:bg-emerald-400" />
                  <h3 className="mt-4 text-base font-semibold text-stone-950 dark:text-stone-50">{strength}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
          <SectionHeader eyebrow="Experience" title="Field and teaching experience" />
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolio.experience.map((item) => (
              <article key={item.role} className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-950">
                <ImagePanel
                  image={images[item.imageKey]}
                  className={`${item.imageFrame} rounded-none border-0 shadow-none`}
                  imgClassName={images[item.imageKey].objectPosition}
                />
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                    {item.organization}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-stone-950 dark:text-stone-50 sm:text-2xl">{item.role}</h3>
                  <ul className="mt-5 space-y-3 text-stone-700 dark:text-stone-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-700 dark:bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-stone-200 bg-[#eef2e7] dark:border-stone-800 dark:bg-stone-900">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
            <SectionHeader eyebrow="Projects" title="Projects & field exposure" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
              {portfolio.projects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-950">
                  <img
                    src={images[project.imageKey].src}
                    alt={images[project.imageKey].alt}
                    className={`h-48 w-full object-cover ${images[project.imageKey].objectPosition}`}
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-stone-950 dark:text-stone-50">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
          <SectionHeader eyebrow="Skills" title="Skills at a glance" />
          <TagList items={portfolio.skills} />
        </section>

        <section id="certificates" className="border-y border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
            <SectionHeader eyebrow="Certificates" title="Professional development" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.certificates.map((certificate) => (
                <div key={certificate} className="rounded-lg border border-stone-200 bg-stone-50 p-5 dark:border-stone-700 dark:bg-stone-950">
                  <p className="font-semibold text-stone-950 dark:text-stone-50">{certificate}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
          <SectionHeader eyebrow="Field Gallery" title="Field gallery" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portfolio.gallery.map((imageKey) => (
              <ImagePanel key={imageKey} image={images[imageKey]} className="aspect-[4/5]" imgClassName="object-[50%_42%]" />
            ))}
          </div>
        </section>

        <section id="contact" className="bg-emerald-950 text-white dark:bg-stone-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Available for agricultural field roles</h2>
              <p className="mt-4 max-w-2xl leading-7 text-emerald-50">
                Open to agronomy support, field officer, project support, and graduate trainee opportunities.
              </p>
              <div className="mt-6">
                <TagList items={portfolio.openTo.slice(0, 4)} tone="dark" />
              </div>
            </div>
            <div className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-5 sm:p-6">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-emerald-200">Email</dt>
                  <dd>
                    <a className="font-semibold hover:text-emerald-100" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-emerald-200">Phone</dt>
                  <dd>
                    <a className="font-semibold hover:text-emerald-100" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-emerald-200">LinkedIn</dt>
                  <dd>
                    <a className="break-all font-semibold hover:text-emerald-100" href={contact.linkedin} target="_blank" rel="noreferrer">
                      {contact.linkedin}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-emerald-200">Location</dt>
                  <dd className="font-semibold">{contact.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-950 px-4 py-6 text-sm text-stone-300 dark:border-stone-800 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0">{portfolio.name}</p>
          <p className="min-w-0">{portfolio.positioning}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
