import { PageHero } from "../_components/PageHero";
import { PortfolioGallery } from "../_components/PortfolioGallery";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { nurveitCampaign, portfolioGallery } from "../_components/site-data";

const campaignWork = [...nurveitCampaign, ...portfolioGallery.filter((project) => [
  "Campaign print",
  "Event campaign",
  "Outdoor advertising",
  "Vehicle branding",
  "Large format print",
].includes(project.category))];

export default function CampaignsPage() {
  return (
    <><SiteHeader /><main id="top">
      <PageHero eyebrow="Featured campaign" index="05" title="NURVEIT" accent="performance in motion." lead="A premium sportswear identity brought to life through a complete campaign system: kit, retail, athlete storytelling and branded touchpoints." image={campaignWork[0]} tone="green" />

      <section className="campaign-intro page-section">
        <div className="site-shell campaign-intro-grid">
          <div><p className="reference-eyebrow">Campaign thinking</p><h2>Big ideas with a<br /><em>clear destination.</em></h2></div>
          <div><p>Campaigns work best when every piece feels connected. We turn your objective into an idea that can travel across print, digital, social, outdoor media and the real-world moments your audience remembers.</p><a className="reference-text-link" href="/contact">Plan a campaign <span aria-hidden="true">&rarr;</span></a></div>
        </div>
      </section>

      <PortfolioGallery items={campaignWork} eyebrow="First campaign · NURVEIT" title="A complete identity" accent="built to perform." description="NURVEIT leads our campaign gallery: a premium sportswear system designed across product, retail, branded touchpoints and athlete-led storytelling." />

      <section className="campaign-services page-section">
        <div className="site-shell"><p className="reference-eyebrow">What we can create</p><div className="campaign-service-grid">
          <article><span>01</span><h2>Campaign concepts</h2><p>Strong central ideas and visual directions that give every campaign a recognisable point of view.</p></article>
          <article><span>02</span><h2>Launch materials</h2><p>Social assets, flyers, posters, email graphics and practical rollout pieces made ready for action.</p></article>
          <article><span>03</span><h2>Print &amp; outdoor</h2><p>Large-format print, displays, vehicle branding and physical touchpoints that bring your message into view.</p></article>
        </div></div>
      </section>

      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">Ready when you are</p><h2>Let&apos;s make your<br /><em>next move visible.</em></h2><p>Bring us the goal, the occasion or the spark of an idea. We&apos;ll help turn it into a campaign people can feel.</p></div><div className="reference-contact-panel"><p>Start with a conversation about your audience, your message and where the work needs to go.</p><a className="reference-button reference-button-dark" href="/contact">Start Your Campaign <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
