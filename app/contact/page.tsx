import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { creativeImages } from "../_components/site-data";

export default function ContactPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Start a project" index="05" title="Let&apos;s make something." accent="Memorable." lead="Whether the next step is a new identity, professional printing, a website or ongoing digital support, we&apos;d love to hear what you&apos;re working towards." image={creativeImages[4]} tone="sand" />
      <section className="contact-section image-contact-section"><div className="site-shell contact-grid image-contact-grid"><div className="contact-intro"><p className="reference-eyebrow">Contact Bayworld</p><h2>A good conversation is where the best work starts.</h2><p>Call us directly to talk through your brief, your timeline and the support your business needs.</p><figure className="contact-intro-photo"><img src={creativeImages[3].src} alt={creativeImages[3].alt} /></figure></div><div className="contact-card image-contact-card"><img src={creativeImages[1].src} alt="" /><div className="image-contact-card-content"><p className="footer-label">Call Bayworld</p><a className="contact-phone" href="tel:+2349064428166">0906 442 8166</a><a className="contact-phone" href="tel:+2349066794843">0906 679 4843</a><div className="contact-rule" /><p className="footer-label">Visit online</p><a className="contact-web" href="https://www.bayworldcreatives.com">www.bayworldcreatives.com <span aria-hidden="true">&rarr;</span></a></div></div></div></section>
      <section className="contact-details image-contact-details"><div className="site-shell contact-detail-grid"><div><p className="footer-label">Based in</p><p>Lagos, Nigeria</p></div><div><p className="footer-label">Business registration</p><p>RC 9388644</p></div><div><p className="footer-label">Ready when you are</p><a href="tel:+2349064428166">Call to start your project &rarr;</a></div></div></section>
      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">Bayworld Creatives</p><h2>Crafting dreams.<br /><em>Amplifying brands.</em></h2><p>Let&apos;s create a clearer, stronger and more memorable next step for your business.</p></div><div className="reference-contact-panel"><p>We are ready to hear about your project and help you move it forward.</p><a className="reference-button reference-button-dark" href="tel:+2349064428166">Call Bayworld <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
