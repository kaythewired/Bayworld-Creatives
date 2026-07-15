import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { services } from "../_components/site-data";

export default function ServicesPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Our services" index="03" title="All the right tools." accent="One creative team." lead="Whether you need one focused deliverable or a connected creative partner, we bring the strategy, design and production together." tone="green" />
      <section className="services page-services"><div className="site-shell"><div className="section-heading"><div><p className="eyebrow eyebrow-light"><span /> Built to work together</p><h2>Made for the moments<br /><em>your brand is seen.</em></h2></div><p>Choose the service you need now, or let us help you build a more connected plan for what comes next.</p></div><div className="service-detail-grid">{services.map((service) => <article className="service-detail" key={service.number}><p>{service.number}</p><h2>{service.title}</h2><span /><p>{service.detail}</p><a href="/contact">Discuss this service <b aria-hidden="true">&rarr;</b></a></article>)}</div></div></section>
      <section className="page-section"><div className="site-shell service-callout"><div><p className="eyebrow"><span /> Better together</p><h2>Digital and print, aligned from the start.</h2></div><p>When every part of your brand comes from the same thoughtful direction, it becomes easier to recognise, easier to trust and easier to use.</p></div></section>
      <section className="cta"><div className="site-shell cta-inner"><p className="eyebrow"><span /> Find your next move</p><h2>Let&apos;s make your<br /><em>brand work harder.</em></h2><p>Start with the challenge in front of you. We&apos;ll help shape the right creative response.</p><a className="button button-primary" href="/contact">Get a Quote <span aria-hidden="true">&rarr;</span></a></div></section>
    </main><SiteFooter /></>
  );
}
