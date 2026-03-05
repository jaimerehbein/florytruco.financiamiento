import Hero from './components/Hero'
import BusinessPlan from './components/BusinessPlan'
import HubFondos from './components/HubFondos'
import FinancialEngineering from './components/FinancialEngineering'
import CorporateServices from './components/CorporateServices'
import EconomicDiagnostics from './components/EconomicDiagnostics'
import MacroAnalysis from './components/MacroAnalysis'
import Roadmap from './components/Roadmap'
import Glossary from './components/Glossary'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden selection:text-white">
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-32 space-y-40">
        <BusinessPlan />
        <HubFondos />
        <FinancialEngineering />
        <CorporateServices />
        <EconomicDiagnostics />
        <MacroAnalysis />
        <Roadmap />
        <Glossary />
      </main>
      <footer className="border-t border-neutral-800/50 bg-[#020202] py-16 text-center text-neutral-500 text-sm">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p className="font-mono text-emerald-500 mb-4 opacity-70">&lt; / compliance &amp; legal &gt;</p>

          <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-6 mb-8 text-left space-y-3">
            <h4 className="text-neutral-300 text-xs font-mono uppercase tracking-widest mb-2 border-b border-neutral-800 pb-2">Sección de Admisibilidad (Compliance)</h4>
            <p className="flex items-start gap-2 text-xs text-neutral-400">
              <span className="text-emerald-500 mt-0.5">▪</span>
              <span><strong>Requisito SEREMI:</strong> "Objeto Social pertinente a la actividad audiovisual" verificado y en regla.</span>
            </p>
            <p className="flex items-start gap-2 text-xs text-neutral-400">
              <span className="text-emerald-500 mt-0.5">▪</span>
              <span><strong>Puntaje Estratégico:</strong> Estructura operativa con "Residencia Permanente en Región de Aysén" para maximizar puntaje en Viabilidad y Empleabilidad territorial.</span>
            </p>
          </div>

          <p>© {new Date().getFullYear()} Flor y Truco. Arquitectura Financiera para la Patagonia Creativa.</p>
          <p className="text-xs tracking-widest uppercase bg-gradient-to-r from-neutral-500 to-neutral-400 bg-clip-text text-transparent">Desarrollado estratégicamente para economía naranja</p>

          <div className="mt-12 pt-8 border-t border-neutral-900 inline-block text-center">
            <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-600 mb-1">Encargado de Informe:</p>
            <p className="text-sm font-medium text-neutral-300">Jaime Rehbein</p>
            <p className="text-xs text-neutral-500 mt-0.5">Economista Pasante en Productora Flor y Truco</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
