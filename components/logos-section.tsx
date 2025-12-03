export function LogosSection() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Mais de <span className="font-semibold text-foreground">2.500 lojas</span> já usam Exibyai para vender mais
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <div className="text-xl font-bold text-muted-foreground/40">ModeStyle</div>
          <div className="text-xl font-bold text-muted-foreground/40">ArtesaBR</div>
          <div className="text-xl font-bold text-muted-foreground/40">FashionUp</div>
          <div className="text-xl font-bold text-muted-foreground/40">TrendShop</div>
          <div className="text-xl font-bold text-muted-foreground/40">EcoStore</div>
        </div>
      </div>
    </section>
  )
}
