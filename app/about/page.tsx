import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { process, values } from "../_components/site-data";

export default function AboutPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="About Bayworld" index="02" title="Built around your ambition." accent="Driven by good ideas." lead="We are a Lagos creative agency that brings strategy, craft and practical delivery together for businesses that want to move forward with clarity." tone="sand" />
      <section className="page-section"><div className="site-shell story-grid"><div><p className="eyebrow"><span /> Our point of view</p><p className="section-number">CREATIVE, USEFUL, HUMAN</p></div><div className="story-copy"><h2>We believe the strongest brands are felt before they are explained.</h2><p>Bayworld Creatives helps businesses build that feeling through clear visual identities, considered production and digital tools that work hard for the people using them.</p><p>Our role is to bring the right thinking and the right making into one place—so every project is more connected, more useful and more recognisably yours.</p></div></div></section>
      <section className="values-section"><div className="site-shell"><div className="section-heading values-heading"><div><p className="eyebrow eyebrow-light"><span /> What guides us</p><h2>Every detail is part<br /><em>of the bigger picture.</em></h2></div><p>From a single printed card to a complete digital presence, we treat every touchpoint as a chance to build trust.</p></div><ul className="value-grid">{values.map((value, index) => <li key={value}><span>{String(index + 1).padStart(2, "0")}</span>{value}</li>)}</ul></div></section>
      <section className="process section"><div className="site-shell"><div className="section-heading process-heading"><div><p className="eyebrow"><span /> How we work</p><h2>Clear steps.<br /><em>Beautiful outcomes.</em></h2></div><p>A collaborative approach that keeps every project focused, considered and moving forward.</p></div><div className="process-grid">{process.map((item) => <article className="process-card" key={item.step}><p>{item.step}</p><h3>{item.title}</h3><span className="process-line" /><p>{item.description}</p></article>)}</div></div></section>
      <section className="cta"><div className="site-shell cta-inner"><p className="eyebrow"><span /> Work with us</p><h2>Have a vision?<br /><em>Let&apos;s give it shape.</em></h2><p>Tell us what your business needs next and we&apos;ll help you find a creative way forward.</p><a className="button button-primary" href="/contact">Start Your Project <span aria-hidden="true">&rarr;</span></a></div></section>
    </main><SiteFooter /></>
  );
}
