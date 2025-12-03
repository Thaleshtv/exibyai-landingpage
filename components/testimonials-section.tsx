function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

const testimonials = [
  {
    name: "Maria Silva",
    role: "Loja de Roupas",
    content: "A análise de fotos me ajudou a melhorar todas as imagens. Minhas vendas aumentaram 40% no primeiro mês!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Artesanato",
    content: "Finalmente organizei meus produtos de forma profissional. A integração com WhatsApp é perfeita.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Acessórios",
    content: "O controle de estoque me salvou! Nunca mais vendi produto que não tinha. Recomendo demais.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">Milhares de empreendedores transformaram seus negócios</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-sm leading-relaxed">{`"${testimonial.content}"`}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
