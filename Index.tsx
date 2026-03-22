import { motion } from "framer-motion";
import { Zap, Rocket, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const plans = [
  { followers: "5.000", price: "9,90", oldPrice: null, link: "https://pay.disruptybr.app/c/WlNF?of=thY", badge: null, highlight: false },
  { followers: "11.200", price: "14,90", oldPrice: null, link: "https://pay.disruptybr.app/c/WlNF?of=Msd", badge: "MAIS ESCOLHIDO", highlight: true },
  { followers: "25.000", price: "19,90", oldPrice: null, link: "https://pay.disruptybr.app/c/WlNF?of=gW6", badge: null, highlight: false },
  { followers: "30.000", price: "25,90", oldPrice: null, link: "https://pay.disruptybr.app/c/WlNF?of=tB1", badge: null, highlight: false },
  { followers: "50.000", price: "39,90", oldPrice: null, link: "https://pay.disruptybr.app/c/WlNF?of=PiK", badge: "MAIS VENDIDO 🔥", highlight: true },
  { followers: "100.000", price: "69,90", oldPrice: null, link: "https://pay.disruptybr.app/c/WlNF?of=xFe", badge: null, highlight: false },
];

const benefits = [
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Entrega rápida", desc: "Seguidores começam a chegar em poucos minutos" },
  { icon: <Rocket className="w-8 h-8 text-primary" />, title: "100% automático", desc: "Sem precisar de senha ou acesso à conta" },
  { icon: <Shield className="w-8 h-8 text-primary" />, title: "Suporte 24h", desc: "Atendimento sempre disponível" },
];

const faqs = [
  { q: "É seguro comprar seguidores?", a: "Sim! Não solicitamos sua senha. Basta informar seu @usuário e os seguidores são adicionados de forma segura e automática." },
  { q: "Em quanto tempo os seguidores chegam?", a: "A entrega começa em poucos minutos após a confirmação do pagamento. O tempo total depende do pacote escolhido, mas geralmente é concluído em até 24 horas." },
  { q: "Os seguidores são reais?", a: "Sim, todos os seguidores são perfis reais e ativos, garantindo mais credibilidade para o seu perfil." },
  { q: "Preciso fornecer minha senha?", a: "Não! Nunca pedimos sua senha. Basta informar seu nome de usuário público." },
  { q: "Posso perder os seguidores?", a: "Oferecemos garantia de reposição. Caso haja alguma queda, repomos automaticamente sem custo adicional." },
  { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos Pix, cartão de crédito e boleto bancário, com processamento seguro." },
];

const testimonials = [
  { text: "Entrega super rápida, seguidores chegaram em minutos.", stars: 5 },
  { text: "Meu perfil ficou muito mais confiável. Recomendo!", stars: 5 },
  { text: "Simples, rápido e funciona mesmo. Comprei 2 vezes já.", stars: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="bg-card rounded-lg border border-border/50 overflow-hidden"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:text-primary transition-colors"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const features = [
    "Perfis reais e ativos",
    "Entrega em até 24h",
    "Sem necessidade de senha",
    "Seguidores brasileiros",
    "Suporte online",
  ];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative bg-card rounded-xl p-6 card-hover flex flex-col ${
        plan.highlight ? "border-2 border-primary glow-strong" : "border border-border/30"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-full whitespace-nowrap">
          {plan.badge}
        </span>
      )}
      <h4 className="text-lg font-bold mt-2">{plan.followers}</h4>
      <p className="text-sm text-muted-foreground">seguidores</p>
      <p className={`font-black mt-3 ${plan.highlight ? "text-3xl gradient-text" : "text-2xl text-primary"}`}>
        R$ {plan.price}
      </p>

      <ul className="mt-4 space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary">✓</span> {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 bg-input rounded-lg flex items-center px-3 py-2 text-sm text-muted-foreground">
        <span className="mr-2">@</span> seu_usuario
      </div>

      <a
        href={plan.link}
        className={`block mt-4 text-center py-3 rounded-lg font-bold transition-all ${
          plan.highlight
            ? "bg-primary text-primary-foreground glow animate-pulse-glow"
            : "bg-primary/80 text-primary-foreground hover:bg-primary"
        }`}
      >
        Comprar Agora
      </a>
    </motion.div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto"
      >
        <h1 className="font-bold text-lg">Verifica Social</h1>
        <a href="#planos" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold glow hover:opacity-90 transition-opacity">
          Comprar Agora
        </a>
      </motion.header>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="text-center mt-16 px-6"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black leading-tight">
          Compre <span className="gradient-text">Seguidores Reais</span>
          <br />e aumente sua autoridade
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Mais seguidores = mais credibilidade. Destaque seu perfil e aumente sua presença digital de forma simples.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 text-sm text-muted-foreground/70">
          🔥 Mais de 1.800 pedidos entregues hoje
        </motion.p>
        <motion.a
          variants={fadeUp}
          href="#planos"
          className="mt-6 inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold glow hover:opacity-90 transition-opacity animate-float"
        >
          Comprar Agora
        </motion.a>
      </motion.section>

      {/* VSL */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex justify-center px-6"
      >
        <div className="w-full max-w-md rounded-xl overflow-hidden border border-primary glow">
          <iframe
            src="https://fast.wistia.net/embed/iframe/6pyqcmn0kr"
            className="w-full h-64"
            allowFullScreen
          />
        </div>
      </motion.section>

      {/* Benefícios */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 text-center"
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-border/30 card-hover"
          >
            <div className="flex justify-center">{b.icon}</div>
            <p className="mt-3 font-semibold">{b.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Planos */}
      <motion.section
        id="planos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mt-20 max-w-6xl mx-auto px-6"
      >
        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-center">
          Escolha seu pacote
        </motion.h3>
        <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-10 text-sm">
          Quanto maior o pacote, maior o impacto no seu perfil
        </motion.p>
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PlanCard key={plan.followers} plan={plan} index={i} />
          ))}
        </motion.div>
      </motion.section>

      {/* Prova Social */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mt-20 text-center px-6"
      >
        <motion.h3 variants={fadeUp} className="text-2xl font-bold">
          O que nossos clientes dizem
        </motion.h3>
        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-6 rounded-xl border border-border/30 card-hover"
            >
              <div className="text-yellow-400 text-lg">{"⭐".repeat(t.stars)}</div>
              <p className="mt-3 text-muted-foreground">{t.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mt-20 max-w-3xl mx-auto px-6"
      >
        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-center mb-2">
          Perguntas Frequentes
        </motion.h3>
        <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-8 text-sm">
          Tire suas dúvidas sobre nosso serviço
        </motion.p>
        <motion.div variants={stagger} className="space-y-3">
          {faqs.map((faq) => (
            <motion.div key={faq.q} variants={fadeUp}>
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 text-center text-muted-foreground text-sm py-10 border-t border-border/20">
        <p className="font-semibold text-foreground">Verifica Social</p>
        <p className="mt-2">A maneira mais rápida de crescer nas redes sociais</p>
        <p className="mt-4">© 2026 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
