type PageHeroProps = { eyebrow: string; title: string; accent: string; lead: string; index: string; tone?: "paper" | "sand" | "green" };

export function PageHero({ eyebrow, title, accent, lead, index, tone = "paper" }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="site-shell page-hero-grid">
        <div><p className="eyebrow"><span /> {eyebrow}</p><p className="page-index">BC / {index}</p><h1>{title}<br /><em>{accent}</em></h1><p className="page-lead">{lead}</p></div>
        <div className="page-hero-art" aria-hidden="true"><span className="page-art-orb" /><span className="page-art-sheet page-art-sheet-one" /><span className="page-art-sheet page-art-sheet-two" /><span className="page-art-mark">B</span></div>
      </div>
    </section>
  );
}
