import React from 'react';
import { Bot, Zap, Database, Mail, ArrowRight, Check, Workflow, BarChart3, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-ai-bg text-white font-sans selection:bg-ai-primary selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 glass border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter">
            NEXUS<span className="text-ai-primary">AI</span>
          </div>
          <a 
            href="https://wa.me/1234567" 
            className="bg-white text-black px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition"
          >
            AGENDA
          </a>
        </div>
      </nav>

      {/* HERO SECTION - Estilo MQL Flow */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Mancha de luz superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ai-primary/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Aceptando proyectos para Q4 2024
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Automatización inteligente para <br />
            <span className="text-gradient">empresas escalables.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Eliminamos el caos operativo. Diseñamos sistemas de IA que captan clientes, agendan citas y gestionan tus datos sin intervención humana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
              Ver Soluciones
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
              Cómo funciona
            </button>
          </div>
        </div>
      </section>

      {/* INFINITE TECH STACK SCROLL */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="relative flex overflow-x-hidden group">
          <div className="py-2 animate-scroll whitespace-nowrap flex gap-16 px-16 text-gray-500 font-bold text-xl uppercase tracking-widest items-center">
            <span>OpenAI</span>
            <span>Anthropic</span>
            <span>Make</span>
            <span>Zapier</span>
            <span>HubSpot</span>
            <span>Stripe</span>
            <span>Voiceflow</span>
            <span>Botpress</span>
            {/* Repetimos para el efecto infinito */}
            <span>OpenAI</span>
            <span>Anthropic</span>
            <span>Make</span>
            <span>Zapier</span>
            <span>HubSpot</span>
            <span>Stripe</span>
            <span>Voiceflow</span>
            <span>Botpress</span>
          </div>
        </div>
      </section>

      {/* BENTO GRID - LA PARTE CLAVE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Un sistema operativo <br/>completo para tu negocio.</h2>
          <p className="text-gray-400 max-w-lg text-lg">No solo hacemos chatbots. Construimos la infraestructura digital que tu empresa necesita para crecer sola.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card Grande 1: Chatbots */}
          <div className="bento-card p-8 rounded-3xl md:col-span-2 md:row-span-2 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-ai-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-ai-primary/20 transition duration-500"></div>
            <div>
              <div className="w-12 h-12 bg-ai-primary rounded-xl flex items-center justify-center mb-6">
                <Bot className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Agentes de IA Conversacional</h3>
              <p className="text-gray-400 text-lg max-w-md">
                Tus clientes no quieren esperar. Implementamos asistentes que responden al instante, cualifican leads y agendan reuniones directamente en tu calendario.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-500">Disponibilidad</div>
              </div>
              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <div className="text-2xl font-bold text-white">&lt; 3s</div>
                <div className="text-sm text-gray-500">Tiempo respuesta</div>
              </div>
            </div>
          </div>

          {/* Card Mediana 2: Lead Gen */}
          <div className="bento-card p-8 rounded-3xl flex flex-col justify-center hover:-translate-y-1 transition duration-300">
            <Mail className="text-ai-secondary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Outbound Automático</h3>
            <p className="text-gray-400 text-sm">Sistemas de email en frío que calientan dominios y envían secuencias personalizadas.</p>
          </div>

          {/* Card Mediana 3: Workflows */}
          <div className="bento-card p-8 rounded-3xl flex flex-col justify-center hover:-translate-y-1 transition duration-300">
            <Workflow className="text-pink-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Conexión de Apps</h3>
            <p className="text-gray-400 text-sm">Integramos tu CRM con WhatsApp, Slack y Excel. Adiós al "copy-paste".</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE COMPARACIÓN */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Deja de perder tiempo en tareas manuales.</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                  <div className="mt-1 text-red-400"><Lock size={20}/></div>
                  <div>
                    <h4 className="font-bold text-red-200">El método antiguo</h4>
                    <p className="text-sm text-gray-400">Contratar más personal, errores humanos, respuesta lenta a clientes, datos desordenados.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="mt-1 text-green-400"><Zap size={20}/></div>
                  <div>
                    <h4 className="font-bold text-green-200">El método Nexus AI</h4>
                    <p className="text-sm text-gray-400">Escalabilidad infinita, respuestas instantáneas, datos sincronizados en tiempo real.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-ai-card to-black p-8 rounded-3xl border border-white/10 relative">
               <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">ACTIVO</div>
               <div className="space-y-4 font-mono text-sm">
                 <div className="flex justify-between text-gray-400"><span>Nuevo Lead Capturado</span> <span>Hace 1m</span></div>
                 <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full w-3/4 bg-ai-primary"></div>
                 </div>
                 <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-300">
                   "Hola, me gustaría agendar una demo para mi inmobiliaria..."
                 </div>
                 <div className="flex items-center gap-2 text-green-400 text-xs">
                    <Check size={12}/> AI respondiendo y agendando cita en Calendar
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">© 2024 Nexus AI. Designed for the future.</p>
      </footer>

    </div>
  );
}

export default App;