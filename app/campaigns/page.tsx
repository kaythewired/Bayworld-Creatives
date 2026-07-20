import { PageHero } from "../_components/PageHero";
import { PortfolioGallery } from "../_components/PortfolioGallery";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { nurveitCampaign, portfolioGallery } from "../_components/site-data";

const campaignWork = [...nurveitCampaign, ...portfolioGallery.filter((project) => [
  "Campaign print", "Event campaign", "Outdoor advertising", "Vehicle branding", "Large format print",
].includes(project.category))];

export default function CampaignsPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Featured campaign" index="05" title="NURVFIT" accent="built for motion." lead="A premium sportswear identity brought to life through a complete campaign system: kit, retail, athlete storytelling and branded touchpoints." image={campaignWork[0]} tone="green" />

      <section className="campaign-intro page-section">
        <div className="site-shell campaign-intro-grid">
          <div><p className="reference-eyebrow">NURVFIT · Premium Sportswear</p><h2>Built for motion.<br /><em>Designed for impact.</em></h2></div>
          <div><p>NURVFIT is a performance-driven sportswear brand for people who approach fitness with discipline, confidence and purpose. Bayworld Creatives developed the brand concept, visual identity and campaign direction to position NURVFIT as a bold, modern and premium name within the activewear market.</p><p>NURVFIT is more than sportswear. It represents the mindset required to keep moving, push beyond limits and perform under pressure.</p><a className="reference-text-link" href="/contact">Plan a campaign <span aria-hidden="true">&rarr;</span></a></div>
        </div>
      </section>

      <section className="nurvfit-concept page-section">
        <div className="site-shell nurvfit-concept-grid">
          <div><p className="reference-eyebrow">The brand concept</p><h2>Strength begins<br /><em>within.</em></h2><p>The name combines the energy of <strong>nerve</strong>—courage, resilience and determination—with <strong>fit</strong>, representing physical performance and an active lifestyle.</p></div>
          <div className="nurvfit-principles"><article><span>01</span><h3>Inner strength</h3><p>Confidence that starts before the first step.</p></article><article><span>02</span><h3>Endurance</h3><p>A system designed for consistency and long-term movement.</p></article><article><span>03</span><h3>Forward motion</h3><p>A bold point of view built to keep progressing.</p></article></div>
        </div>
      </section>

      <PortfolioGallery items={campaignWork} eyebrow="First campaign · NURVFIT" title="A complete identity" accent="built to perform." description="NURVFIT leads our campaign gallery: a premium sportswear system designed across product, retail, branded touchpoints and athlete-led storytelling." />

      <section className="nurvfit-system page-section">
        <div className="site-shell nurvfit-system-grid"><div><p className="reference-eyebrow">The visual identity</p><h2>Precision with<br /><em>momentum.</em></h2><p>The sharp geometric symbol takes cues from movement, speed and interconnected pathways. Structured lines communicate discipline and precision, while the forward-facing form gives the brand a strong sense of momentum.</p></div><div className="nurvfit-colours" aria-label="NURVFIT colour palette"><div><span className="nurvfit-swatch nurvfit-red" /><strong>Deep red</strong><p>Energy, ambition and power.</p></div><div><span className="nurvfit-swatch nurvfit-black" /><strong>Black</strong><p>Strength, confidence and sophistication.</p></div><div><span className="nurvfit-swatch nurvfit-white" /><strong>White</strong><p>Balance, clarity and a premium finish.</p></div></div></div>
      </section>

      <section className="nurvfit-direction page-section"><div className="site-shell nurvfit-direction-grid"><div className="nurvfit-direction-art"><img src="/gallery/nurveit-athlete-white.png" alt="NURVFIT athlete campaign image" /></div><div><p className="reference-eyebrow">Campaign direction</p><h2>Performance<br /><em>meets style.</em></h2><p>The campaign presents NURVFIT as a complete premium sportswear experience rather than simply a clothing label. Dramatic lighting, technical materials and bold architectural environments bring the brand&apos;s confidence into focus.</p><p>Each visual shows that NURVFIT is designed for training, competition and everyday active living.</p></div></div></section>

      <section className="nurvfit-applications page-section"><div className="site-shell"><p className="reference-eyebrow">Product and brand applications</p><div className="nurvfit-application-heading"><h2>One identity.<br /><em>Every touchpoint.</em></h2><p>The identity was developed to work from apparel and accessories to campaign imagery, retail environments and digital advertising.</p></div><div className="nurvfit-application-grid"><span>Performance jerseys &amp; training tops</span><span>Tracksuits, leggings &amp; shorts</span><span>Football kits &amp; teamwear</span><span>Running shoes &amp; sports accessories</span><span>Caps, gym bags &amp; water bottles</span><span>Product tags &amp; garment labels</span><span>Retail packaging &amp; shopping bags</span><span>Sports retail environments</span><span>Campaign photography &amp; digital advertising</span></div></div></section>

      <section className="nurvfit-positioning page-section"><div className="site-shell nurvfit-positioning-grid"><div><p className="reference-eyebrow">Brand positioning</p><h2>Bold. Disciplined.<br /><em>Aspirational.</em></h2><p>NURVFIT is positioned for athletes, fitness enthusiasts and ambitious individuals who value performance, quality and confident design.</p></div><blockquote><span>Core message</span><p>“Strength begins within. Performance makes it visible.”</p><footer>Brand descriptor · Premium Sportswear</footer></blockquote></div></section>

      <section className="campaign-services page-section"><div className="site-shell"><p className="reference-eyebrow">What we can create</p><div className="campaign-service-grid"><article><span>01</span><h2>Campaign concepts</h2><p>Strong central ideas and visual directions that give every campaign a recognisable point of view.</p></article><article><span>02</span><h2>Launch materials</h2><p>Social assets, flyers, posters, email graphics and practical rollout pieces made ready for action.</p></article><article><span>03</span><h2>Print &amp; outdoor</h2><p>Large-format print, displays, vehicle branding and physical touchpoints that bring your message into view.</p></article></div></div></section>

      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">The result</p><h2>Ready for the<br /><em>performance market.</em></h2><p>Bayworld Creatives transformed NURVFIT into a cohesive and commercially adaptable sportswear identity—powerful, recognisable and ready for modern performance.</p></div><div className="reference-contact-panel"><p>Bring us the goal, the occasion or the spark of an idea. We&apos;ll help turn it into a campaign people can feel.</p><a className="reference-button reference-button-dark" href="/contact">Start Your Campaign <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
