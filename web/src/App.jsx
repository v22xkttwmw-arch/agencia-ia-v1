import React, { useState } from 'react';
import { 
  Bot, Zap, Database, ArrowRight, CheckCircle2, BarChart3, 
  Globe, MessageSquare, Mail, Workflow, Plus, Minus, Star, Send 
} from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "CEO, Inmobiliaria Apex",
    content: "Pasamos de perder leads a agendar 15 citas automáticas a la semana. El sistema de Inbound AI se pagó solo el primer mes.",
    initials: "CR"
  },
  {
    name: "Ana Márquez",
    role: "Directora de Ventas, TechSoft",
    content: "La infraestructura de Outbound que montaron es increíble. Nuestra tasa de respuesta en emails fríos subió del 2% al 12%.",
    initials: "AM"
  },
  {
    name: "David Torres",
    role: "Fundador, EcomScale",
    content: "Lo mejor fue la integración de RevOps. Ahora mi CRM se actualiza solo y ahorramos 20 horas semanales de trabajo manual.",
    initials: "DT"
  }
];

const faqs = [
  {
    question: "¿Qué es una infraestructura de IA y cómo funciona?",
    answer: "No es solo un chatbot. Combinamos Inteligencia Artificial con flujos de trabajo (Make/Zapier) para que tus procesos complejos (ventas, soporte, onboarding) funcionen en piloto automático."
  },
  {
    question: "¿Cuánto tardan en implementar el sistema?",
    answer: "Nuestros sistemas 'Core' suelen estar operativos en 14-21 días. Dedicamos la primera semana exclusivamente a entender tu negocio."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Cero. Nosotros construimos la solución 'llave en mano'. Tú solo recibes las notificaciones de nuevos clientes en tu móvil."
  },
  {
    question: "¿Qué pasa si la IA se equivoca?",
    answer: "Nuestros agentes tienen 'Guardrails' de seguridad. Si el bot no sabe una respuesta, escala la conversación a un humano inmediatamente."
  }
];

// LISTA DE LOGOS
const logos = [
  { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "HubSpot", url: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
  { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Anthropic", url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Airtable", url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg" },
  { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Shopify", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center text-white">
              <Bot size={20} />
            </div>
            NEXUS<span className="text-purple-700">FLOW</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
            <a href="#servicios" className="hover:text-purple-700 transition">Soluciones</a>
            <a href="#casos" className="hover:text-purple-700 transition">Resultados</a>
            <a href="#faq" className="hover:text-purple-700 transition">FAQ</a>
          </div>
          <a href="https://wa.me/1234567" className="hidden md:block px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg hover:bg-purple-700 transition shadow-lg">
            Agendar Auditoría
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs tracking-widest uppercase mb-8">
          AI Automation Agency
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
          Construimos infraestructuras de <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Adquisición con IA.</span>
        </h1>

        <p className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
          Ayudamos a empresas B2B a escalar sus operaciones eliminando el caos manual. Implementamos sistemas inteligentes que trabajan 24/7.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Ver Sistemas <ArrowRight size={20}/>
          </button>
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold text-lg rounded-lg hover:bg-gray-50 transition">
            Cómo funciona
          </button>
        </div>
      </section>

      {/* BARRA MORADA DE RESULTADOS */}
      <section className="bg-purple-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="pt-8 md:pt-0 px-4">
              <div className="text-5xl font-bold mb-2">1,000+</div>
              <div className="text-lg opacity-80">Horas Ahorradas</div>
            </div>
            <div className="pt-8 md:pt-0 px-4">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-80">Disponibilidad Activa</div>
            </div>
            <div className="pt-8 md:pt-0 px-4">
              <div className="text-5xl font-bold mb-2">10x</div>
              <div className="text-lg opacity-80">ROI Estimado</div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK (CORREGIDO: Color siempre, Espacio uniforme) */}
      <section className="py-16 border-b border-gray-100 overflow-hidden bg-gray-50">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-10 font-bold">Tech Stack & Integraciones</p>
        
        {/* Contenedor del Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll items-center">
            
            {/* GRUPO 1: Usamos gap-12 para espacio uniforme. Sin grayscale. */}
            <div className="flex gap-12 px-6 items-center">
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center shrink-0">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* GRUPO 2 (Clon): Exactamente igual */}
            <div className="flex gap-12 px-6 items-center">
              {logos.map((logo, index) => (
                <div key={`clone-${index}`} className="flex items-center justify-center shrink-0">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Ecosistema de Crecimiento</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">No implementamos "bots". Diseñamos flujos de trabajo completos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl relative overflow-hidden group hover:border-purple-500 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Inbound AI</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Captura y cualifica el tráfico de tu web. Agenda reuniones automáticamente en tu calendario.</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-500"/> Booking Automático</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-500"/> Soporte L1 Instantáneo</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl relative overflow-hidden group hover:border-orange-500 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Outbound AI</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Sistemas de prospección que envían correos personalizados y generan citas sin intervención humana.</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-500"/> Personalización masiva</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-500"/> Warm-up de dominios</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl relative overflow-hidden group hover:border-cyan-500 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 text-cyan-500">
              <Workflow size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">RevOps</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Conectamos tus herramientas (CRM, Slack, Facturación) para eliminar el error humano.</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-500"/> Sincronización 2-vías</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-500"/> Dashboards en vivo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CASOS DE ESTUDIO */}
      <section id="casos" className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Casos de Éxito</h2>
              <p className="text-gray-500">Resultados reales con métricas auditables.</p>
            </div>
            <button className="hidden md:flex text-purple-700 items-center gap-2 hover:gap-4 transition-all font-bold">
              Ver todos los casos <ArrowRight size={18}/>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl cursor-pointer group hover:border-purple-600 transition duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">SAAS B2B</div>
                <ArrowRight className="text-gray-300 group-hover:text-purple-600 transition"/>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition">Software Company</h3>
              <p className="text-gray-500 mb-6">Automatización completa del funnel de ventas y cualificación de leads.</p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div><div className="text-2xl font-bold text-slate-900">2.5x</div><div className="text-xs text-gray-500">ROI</div></div>
                <div><div className="text-2xl font-bold text-slate-900">15h</div><div className="text-xs text-gray-500">Ahorradas/sem</div></div>
                <div><div className="text-2xl font-bold text-slate-900">$12k</div><div className="text-xs text-gray-500">Nuevo MRR</div></div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl cursor-pointer group hover:border-purple-600 transition duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">INMOBILIARIA</div>
                <ArrowRight className="text-gray-300 group-hover:text-purple-600 transition"/>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition">Agencia Apex</h3>
              <p className="text-gray-500 mb-6">Implementación de chatbot Inbound para captación de propiedades 24/7.</p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div><div className="text-2xl font-bold text-slate-900">24/7</div><div className="text-xs text-gray-500">Atención</div></div>
                <div><div className="text-2xl font-bold text-slate-900">100%</div><div className="text-xs text-gray-500">Respuesta</div></div>
                <div><div className="text-2xl font-bold text-slate-900">30+</div><div className="text-xs text-gray-500">Citas/mes</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Lo que dicen los fundadores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex gap-1 mb-4 text-orange-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                <p className="text-gray-600 text-lg italic mb-6">"{testimonio.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
                    {testimonio.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{testimonio.name}</div>
                    <div className="text-xs text-gray-500">{testimonio.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto bg-gray-50 rounded-3xl my-12 border border-gray-100">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Preguntas Frecuentes</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-start gap-4 text-left py-6 group hover:bg-white px-4 rounded-lg transition"
              >
                <div className="mt-1">
                  {openFaq === index 
                    ? <Minus className="text-cyan-500 w-6 h-6" /> 
                    : <Plus className="text-cyan-500 w-6 h-6" />
                  }
                </div>
                <div>
                  <h3 className={`text-lg font-bold transition ${openFaq === index ? 'text-cyan-600' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-purple-700 text-white p-12 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Únete a la revolución de la IA</h2>
             <p className="text-purple-100 mb-10 max-w-xl mx-auto text-lg">
               Recibe semanalmente estrategias de automatización que usamos con nuestros clientes privados.
             </p>
             <form className="max-w-md mx-auto flex gap-2">
               <input 
                 type="email" 
                 placeholder="tu@empresa.com" 
                 className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-purple-200 focus:outline-none focus:bg-white/20 transition"
               />
               <button className="bg-white text-purple-700 p-4 rounded-full hover:bg-gray-100 transition shadow-lg">
                 <ArrowRight size={24}/>
               </button>
             </form>
             <p className="text-xs text-purple-200 mt-6">Más de 500 CEOs ya están suscritos.</p>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-100 text-center">
        <div className="flex justify-center gap-6 mb-8 text-gray-400">
          <Globe className="hover:text-purple-600 cursor-pointer transition"/>
          <Mail className="hover:text-purple-600 cursor-pointer transition"/>
        </div>
        <p className="text-gray-500 text-sm">© 2024 NexusFlow AI Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;