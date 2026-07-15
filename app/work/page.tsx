import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { projects } from "../_components/site-data";

export default function WorkPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Selected work" index="04" title="Work with purpose." accent="Made to stand out." lead="A look at the creative directions we bring to life across identity, print, websites and digital communication." />
      <section className="work page-work"><div className="site-shell"><div className="work-heading"><div><p className="eyebrow eyebrow-light"><span /> Portfolio</p><h2>Every touchpoint is<br /><em>a chance to connect.</em></h2></div><p>We build practical, memorable work around the way people will see, hold, use and remember your brand.</p></div><div className="work-page-grid">{projects.map((project, index) => <article className={`work-item ${project.className}`} key={project.type}><div className="project-visual" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /><b>{project.type.split(" ")[0]}</b></div><div><p>{project.label}</p><h2>{project.type}</h2><p>{project.description}</p></div></article>)}</div></div></section>
      <section className="page-section"><div className="site-shell portfolio-note"><p className="eyebrow"><span /> Your project next</p><h2>Good work begins with a conversation.</h2><p>Tell us what you want to make clearer, more memorable or more useful—and we&apos;ll help you find the visual language for it.</p><a className="text-link" href="/contact">Start a conversation <span aria-hidden="true">&rarr;</span></a></div></section>
    </main><SiteFooter /></>
  );
}
