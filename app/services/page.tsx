import type { Metadata } from "next";
import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { creativeImages, services } from "../_components/site-data";

export const metadata: Metadata = {
  title: "Branding, Print, Web & Digital Marketing Services",
  description: "Explore Bayworld Creatives' branding, graphic design, printing, web development, social media and digital marketing services in Lagos, Nigeria.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Our services" index="03" title="All the right tools." accent="One creative team." lead="Whether you need one focused deliverable or a connected creative partner, we bring the strategy, design and production together." image={creativeImages[1]} tone="green" />
      <section className="services page-services image-services"><div className="site-shell"><div className="section-heading"><div><p className="eyebrow eyebrow-light"><span /> Built to work together</p><h2>Made for the moments<br /><em>your brand is seen.</em></h2></div><p>Choose the service you need now, or let us help you build a more connected plan for what comes next.</p></div><div className="service-detail-grid image-service-detail-grid">{services.map((service, index) => <article className="service-detail image-service-detail" key={service.number}><img src={creativeImages[index].src} alt="" /><div><p>{service.number}</p><h2>{service.title}</h2><span /><p>{service.detail}</p><a href="/contact">Discuss this service <b aria-hidden="true">&rarr;</b></a></div></article>)}</div></div></section>
      <section className="page-section image-callout-section"><div className="site-shell image-callout-grid"><div><p className="reference-eyebrow">Better together</p><h2>Digital and print, aligned from the start.</h2><p>When every part of your brand comes from the same thoughtful direction, it becomes easier to recognise, easier to trust and easier to use.</p><a className="reference-text-link" href="/contact">Talk to our team <span aria-hidden="true">&rarr;</span></a></div><div className="image-callout-stack"><figure><img src={creativeImages[5].src} alt={creativeImages[5].alt} /></figure><figure><img src={creativeImages[0].src} alt={creativeImages[0].alt} /></figure></div></div></section>
      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">Find your next move</p><h2>Let&apos;s make your<br /><em>brand work harder.</em></h2><p>Start with the challenge in front of you. We&apos;ll help shape the right creative response.</p></div><div className="reference-contact-panel"><p>Bring your branding, print and digital needs together with Bayworld.</p><a className="reference-button reference-button-dark" href="/contact">Get a Quote <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
