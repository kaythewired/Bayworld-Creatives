import { PageHero } from "../../_components/PageHero";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";

const brioMarks = [
  { src: "/mockups/briohouse-primary.png", alt: "Brio House real estate primary logo in white and orange on navy", label: "Primary mark" },
  { src: "/mockups/briohouse-light.png", alt: "Brio House real estate logo in navy and orange on white", label: "Light background" },
  { src: "/mockups/briohouse-black.png", alt: "Brio House real estate logo in black on white", label: "Single colour" },
  { src: "/mockups/briohouse-white.png", alt: "Brio House real estate logo in white on black", label: "Reverse mark" },
];

export default function BrioHouseCaseStudy() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Portfolio case study" index="01" title="Brio House." accent="Real estate, reimagined." lead="A polished identity system designed to make a property brand feel clear, established and easy to recognise." image={brioMarks[0]} tone="green" />
      <section className="brio-case-intro page-section"><div className="site-shell brio-case-intro-grid"><div><p className="reference-eyebrow">The brief</p><h2>A place for confidence, <em>from first glance.</em></h2></div><div><p>Bayworld Creatives developed a distinctive identity direction for Brio House Real Estate, balancing a welcoming home-inspired symbol with a modern, professional wordmark.</p><p>The system was created to work confidently across digital communication, printed materials and the everyday moments where people meet the brand.</p><a className="reference-text-link" href="/work">Back to selected work <span aria-hidden="true">&rarr;</span></a></div></div></section>
      <section className="brio-logo-system"><div className="site-shell"><div className="brio-system-heading"><p className="reference-eyebrow">Logo system</p><h2>One identity. <em>Every setting.</em></h2><p>The Brio House mark holds its character across full colour, single colour and reverse applications.</p></div><div className="brio-logo-grid">{brioMarks.map((mark) => <figure key={mark.src}><img src={mark.src} alt={mark.alt} /><figcaption>{mark.label}</figcaption></figure>)}</div></div></section>
      <section className="brio-case-outcome"><div className="site-shell brio-outcome-grid"><div><p className="reference-eyebrow">Designed to deliver</p><h2>Built for a brand that helps people <em>find their next place.</em></h2></div><div className="brio-outcome-list"><p><span>01</span> Clear, memorable property-sector identity</p><p><span>02</span> Flexible logo system for print and digital use</p><p><span>03</span> A confident foundation for future brand touchpoints</p></div></div></section>
      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">Your brand next</p><h2>Ready to make your<br /><em>mark?</em></h2><p>Let&apos;s shape an identity that gives people a reason to remember you.</p></div><div className="reference-contact-panel"><p>From logo systems to the full rollout, Bayworld is ready to bring your next brand to life.</p><a className="reference-button reference-button-dark" href="/contact">Start Your Project <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
