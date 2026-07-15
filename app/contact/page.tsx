import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export default function ContactPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Start a project" index="05" title="Let&apos;s make something." accent="Memorable." lead="Whether the next step is a new identity, professional printing, a website or ongoing digital support, we&apos;d love to hear what you&apos;re working towards." tone="sand" />
      <section className="contact-section"><div className="site-shell contact-grid"><div className="contact-intro"><p className="eyebrow"><span /> Contact Bayworld</p><h2>A good conversation is where the best work starts.</h2><p>Call us directly to talk through your brief, your timeline and the support your business needs.</p></div><div className="contact-card"><p className="footer-label">Call Bayworld</p><a className="contact-phone" href="tel:+2349064428166">0906 442 8166</a><a className="contact-phone" href="tel:+2349066794843">0906 679 4843</a><div className="contact-rule" /><p className="footer-label">Visit online</p><a className="contact-web" href="https://www.bayworldcreatives.com">www.bayworldcreatives.com <span aria-hidden="true">&rarr;</span></a></div></div></section>
      <section className="contact-details"><div className="site-shell contact-detail-grid"><div><p className="footer-label">Based in</p><p>Lagos, Nigeria</p></div><div><p className="footer-label">Business registration</p><p>RC 9388644</p></div><div><p className="footer-label">Ready when you are</p><a href="tel:+2349064428166">Call to start your project &rarr;</a></div></div></section>
    </main><SiteFooter /></>
  );
}
