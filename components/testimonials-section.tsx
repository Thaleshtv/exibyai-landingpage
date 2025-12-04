interface IconProps {
  className?: string
}

function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function QuoteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  )
}

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Loja de Roupas",
    content: "A análise de fotos com IA me ajudou a melhorar todas as imagens. Minhas vendas aumentaram 40% no primeiro mês!",
    rating: 5,
    avatar: "M",
  },
  {
    name: "João Santos",
    role: "Artesanato",
    content: "Finalmente organizei meus produtos de forma profissional. A integração com WhatsApp é simplesmente perfeita.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Ana Costa",
    role: "Acessórios",
    content: "O controle de estoque me salvou! Nunca mais vendi produto que não tinha. Super recomendo o Exiby!",
    rating: 5,
    avatar: "A",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Empreendedores que já transformaram seus negócios com o Exiby
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Quote icon */}
              <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D68FF] to-[#5A8BFF] flex items-center justify-center shadow-lg">
                  <span className="text-base font-bold text-white">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
