import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { creativeImages, projects } from "../_components/site-data";

export default function WorkPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Selected work" index="04" title="Work with purpose." accent="Made to stand out." lead="A look at the creative directions we bring to life across identity, print, websites and digital communication." image={creativeImages[5]} />
      <section className="work page-work image-work-page"><div className="site-shell"><div className="work-heading"><div><p className="eyebrow"><span /> Portfolio</p><h2>Every touchpoint is<br /><em>a chance to connect.</em></h2></div><p>We build practical, memorable work around the way people will see, hold, use and remember your brand.</p></div><div className="work-page-grid image-work-grid">{projects.map((project, index) => <article className={`work-item ${project.className}`} key={project.type}><div className="project-visual image-project-visual"><img src={project.image.src} alt={project.image.alt} /><span>{String(index + 1).padStart(2, "0")}</span><b>{project.type.split(" ")[0]}</b></div><div><p>{project.label}</p><h2>{project.type}</h2><p>{project.description}</p></div></article>)}</div></div></section>
      <section className="image-work-collage"><div className="site-shell image-work-collage-grid"><figure><img src={creativeImages[0].src} alt={creativeImages[0].alt} /></figure><div><p className="reference-eyebrow">Your project next</p><h2>Good work begins with a <em>conversation.</em></h2><p>Tell us what you want to make clearer, more memorable or more useful — and we&apos;ll help you find the visual language for it.</p><a className="reference-text-link" href="/contact">Start a conversation <span aria-hidden="true">&rarr;</span></a></div><figure><img src={creativeImages[4].src} alt={creativeImages[4].alt} /></figure></div></section>
      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">Make an impact</p><h2>Bring your idea.<br /><em>We&apos;ll bring it to life.</em></h2><p>From a single visual piece to a full brand rollout, we are ready to help you make the right impression.</p></div><div className="reference-contact-panel"><p>Get in touch to discuss a practical, memorable solution for your business.</p><a className="reference-button reference-button-dark" href="/contact">Start Your Project <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
