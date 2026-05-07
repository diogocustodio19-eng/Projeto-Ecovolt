/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowUpRight,
  Bike,
  Battery,
  Navigation
} from "lucide-react";

const marketplaceLinks = [
  { 
    name: "Shopee", 
    url: "https://shopee.com.br/OFERTA-%E2%9A%A1-Bicicleta-El%C3%A9trica-NUDA-48V-Dobr%C3%A1vel-para-Cidade-%F0%9F%9A%B2-Econ%C3%B4mica-%F0%9F%8E%81-Cesta-Gr%C3%A1tis-i.1673235663.22994866771?extraParams=%7B%22display_model_id%22%3A219186559452%2C%22model_selection_logic%22%3A3%7D&sp_atk=bc242d20-c668-42f0-bad1-5b3e333db0a6&xptdk=bc242d20-c668-42f0-bad1-5b3e333db0a6", 
    color: "bg-white text-brand-dark", 
    icon: <ArrowUpRight className="w-5 h-5 text-orange-500" /> 
  },
  { 
    name: "Mercado Livre", 
    url: "https://www.mercadolivre.com.br/bicicleta-eletrica-yoo-mobility-y-200-350w-farol-led-scooter-preto-azul-no-precisa-de-cnh-nem-emplacamento/p/MLB53927517?pdp_filters=item_id%3AMLB5860942352", 
    color: "bg-brand-dark text-white", 
    icon: <Zap className="w-5 h-5 text-yellow-400" /> 
  },
  { 
    name: "Amazon", 
    url: "https://www.amazon.com.br/Bicicleta-El%C3%A9trica-HDJ-G60-Aro/dp/B0GPN3XW9T/ref=sr_1_1_sspa?crid=3W1SF8VIENIMC&dib=eyJ2IjoiMSJ9.Dn8Q8C5rfbOXg9BVFoNmszv_f1LgLSANXqSj3bgOsVsGg8KPEuwHRslJ4eW-grvTAKwTjQ0WvXphb9KPrtqP-qSFbHUdMapYQfnXJeXgemZMQkJpZVZZoCRJ1s8mkZ0ELgMgqS_v0tkkPkKXJqPzv5_ZVVs0ralzbR3Mpd2BwzmKn8YnSocXqgtW2ZQCV8j7DdizKT1CYkG_RatOAXJZgYkEwIUXk3dkydiVxPQbk1vPp4kfqqLhNOeSI_h58QaxsuegDbolt7MNRPBEmNCLEottA3JUh3aoJ5kX384A4_g.mb4KBT5JmyAogGuAyILUDqwg_bDHxSaZ7HaGNZzSIoI&dib_tag=se&keywords=bicicleta+eletrica&qid=1778174269&sprefix=bicicleta+el%2Caps%2C199&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1", 
    color: "bg-zinc-800 text-white border border-zinc-700", 
    icon: <ShoppingBag className="w-5 h-5 text-blue-400" /> 
  }
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Potência Instante",
    description: "Motores de alto torque para subidas sem esforço e aceleração rápida."
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Autonomia Estendida",
    description: "Até 80km com uma única carga. Vá mais longe, recarregue menos."
  },
  {
    icon: <Navigation className="w-6 h-6" />,
    title: "Eco Hidro",
    description: "Mobilidade inteligente e sustentável reduzindo sua pegada de carbono."
  }
];

const products = [
  {
    id: 1,
    name: "EcoVolt Alpha X",
    price: "R$ 5.490",
    image: "https://images.unsplash.com/photo-1571068316341-3d02471d5ae2?q=80&w=800&h=600&auto=format&fit=crop",
    tag: "Urbana"
  },
  {
    id: 2,
    name: "EcoVolt Mountain S1",
    price: "R$ 7.200",
    image: "https://images.unsplash.com/photo-1621535787968-3bfb73ec4867?q=80&w=800&h=600&auto=format&fit=crop",
    tag: "Mountain"
  },
  {
    id: 3,
    name: "EcoVolt City Glide",
    price: "R$ 4.800",
    image: "https://images.unsplash.com/photo-1598209279122-8541213a0387?q=80&w=800&h=600&auto=format&fit=crop",
    tag: "Compacta"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white p-4 md:p-8 flex flex-col gap-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
            <Bike className="text-brand-dark w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">EcoVolt</span>
        </div>
        
        <nav className="hidden lg:flex gap-12 text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">
          <a href="#modelos" className="hover:text-brand-primary transition-colors">Modelos</a>
          <a href="#vendas" className="hover:text-brand-primary transition-colors">Comprar</a>
          <a href="#contato" className="hover:text-brand-primary transition-colors">Suporte</a>
        </nav>

        <div className="px-5 py-2 bg-brand-light-gray border border-zinc-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          Edição 2024
        </div>
      </header>

      {/* Main Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:grid-rows-6 h-full lg:h-[800px]">
        {/* Hero Section - Bento style */}
        <div className="md:col-span-8 md:row-span-4 bg-brand-gray rounded-[2rem] relative overflow-hidden group border border-zinc-800 p-8 flex flex-col justify-end min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1532298229144-0ee0c57512c7?q=80&w=2560&auto=format&fit=crop" 
              alt="Hero Bike"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4 tracking-tighter">
              VOLT <span className="text-brand-primary">X-PRO</span>
            </h1>
            <p className="text-zinc-400 max-w-sm font-medium text-sm md:text-base leading-relaxed">
              A revolução da mobilidade urbana chegou com design futurista e performance inigualável.
            </p>
          </div>
        </div>

        {/* Purchase Card - Bento style */}
        <div className="md:col-span-4 md:row-span-4 bg-brand-primary rounded-[2rem] p-8 flex flex-col justify-between text-brand-dark overflow-hidden relative">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black leading-none mb-6">ADQUIRA A SUA AGORA</h2>
            <p className="font-bold opacity-70 text-sm">Escolha sua plataforma de preferência e garanta o frete grátis para todo Brasil.</p>
          </div>
          
          <div className="flex flex-col gap-3 relative z-10">
            {marketplaceLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 ${link.color} rounded-2xl flex items-center justify-between px-6 font-black shadow-sm transition-transform hover:-translate-y-1`}
              >
                <span>{link.name.toUpperCase()}</span>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stats Column 1 */}
        <div className="md:col-span-3 md:row-span-2 bento-item p-8 flex flex-col justify-end">
          <Battery className="w-8 h-8 text-brand-primary mb-4" />
          <span className="text-4xl font-black text-brand-primary leading-none">80km</span>
          <span className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em] mt-2">Autonomia Total</span>
        </div>
        
        {/* Stats Column 2 */}
        <div className="md:col-span-3 md:row-span-2 bento-item p-8 flex flex-col justify-end">
          <Zap className="w-8 h-8 text-brand-primary mb-4" />
          <span className="text-4xl font-black text-brand-primary leading-none">32km/h</span>
          <span className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em] mt-2">Velocidade Máx</span>
        </div>

        {/* Stats Column 3 */}
        <div className="md:col-span-3 md:row-span-2 bento-item p-8 flex flex-col justify-end">
          <ShieldCheck className="w-8 h-8 text-white mb-4" />
          <span className="text-4xl font-black text-white italic leading-none uppercase">Carbon</span>
          <span className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em] mt-2">Quadro Ultraleve</span>
        </div>

        {/* Stats Column 4 - Emissões */}
        <div className="md:col-span-3 md:row-span-2 bg-brand-light-gray rounded-[2rem] p-6 flex items-center justify-center border border-zinc-700 relative overflow-hidden">
          <div className="z-10 text-center">
            <div className="text-5xl font-black leading-none">0%</div>
            <div className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.2em] mt-2">Emissões CO2</div>
          </div>
          <div className="absolute inset-0 bg-brand-primary/5 blur-3xl opacity-50"></div>
        </div>
      </main>

      {/* Modelos Section */}
      <section id="modelos" className="mt-12">
        <div className="flex justify-between items-end mb-8 px-4">
          <div>
            <h2 className="text-3xl font-black uppercase">Nossos Modelos</h2>
            <p className="text-zinc-500 text-sm mt-1">Engenharia de precisão para sua cidade.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="bento-item group p-4">
              <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  {product.tag}
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-xl font-black uppercase leading-tight">{product.name}</h3>
                  <p className="text-brand-primary font-bold">{product.price}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 flex flex-col md:flex-row justify-between items-center py-8 px-4 border-t border-zinc-800 gap-6">
        <div className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em] text-center md:text-left">
          © 2024 ECOVOLT MOBILIDADE • TODOS OS DIREITOS RESERVADOS
        </div>
        <div className="flex gap-8 text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">
          <a href="#" className="hover:text-zinc-300">Sustentabilidade</a>
          <a href="#" className="hover:text-zinc-300">Termos</a>
          <a href="#" className="hover:text-zinc-300">Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
