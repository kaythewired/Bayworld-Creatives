type PageHeroProps = { eyebrow: string; title: string; accent: string; lead: string; index: string; image: { src: string; alt: string }; tone?: "paper" | "sand" | "green" };

export function PageHero({ eyebrow, title, accent, lead, index, image, tone = "paper" }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="site-shell page-hero-grid">
        <div><p className="eyebrow"><span /> {eyebrow}</p><p className="page-index">BC / {index}</p><h1>{title}<br /><em>{accent}</em></h1><p className="page-lead">{lead}</p></div>
        <div className="page-hero-art page-hero-photo"><img src={image.src} alt={image.alt} /><span className="page-art-orb" aria-hidden="true" /><span className="page-art-sheet page-art-sheet-one" aria-hidden="true" /><span className="page-art-sheet page-art-sheet-two" aria-hidden="true" /><span className="page-hero-sticker" aria-hidden="true">MAKE IT<br />POP!</span><span className="page-hero-spark" aria-hidden="true">✦</span></div>
      </div>
    </section>
  );
}
