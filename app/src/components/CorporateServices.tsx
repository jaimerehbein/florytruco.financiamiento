import { Building2, Drone, Radio, CheckCircle2 } from 'lucide-react';

export default function CorporateServices() {
    return (
        <section id="b2b-services" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-emerald-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100">
                    Módulo E: <br />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">
                        B2B Liquidity Streams
                    </span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Suscripciones corporativas (Retainers) Eco-Conscientes para fundaciones u ONGs. Transformamos servicios visuales aislados en herramientas continuas de documentación de impacto socioambiental, conservación y reportabilidad ESG para proyectos de energía limpia y turismo sustentable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Plan 1: Monitoreo Aereo */}
                <div className="bg-[#020617] border border-emerald-900/30 rounded-2xl p-8 relative flex flex-col transition-all hover:border-emerald-500/50">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-emerald-950/50 rounded-lg text-emerald-400">
                            <Drone className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-emerald-500 bg-emerald-950/30 px-3 py-1 rounded-full border border-emerald-900/50">CERO HUELLA (GREEN SHOOTING)</span>
                    </div>

                    <h3 className="text-xl font-medium text-emerald-100 mb-2">Monitoreo de Conservación</h3>
                    <p className="text-sm text-neutral-500 mb-6">Reportabilidad visual no invasiva de reservas naturales, ecosistemas y progreso en reforestación.</p>

                    <div className="mb-8 border-b border-emerald-900/30 pb-6">
                        <span className="text-4xl font-bold text-white">40 UF<span className="text-xl text-neutral-500 font-normal">/mes</span></span>
                        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Aprox $1.5M CLP • Facturación a 30 días</p>
                    </div>

                    <ul className="space-y-3 text-sm text-neutral-300 mb-8 flex-grow">
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>2 Vuelos Dron 4K mensuales (Avance de obra y revisión estructural).</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>Entrega de Data cruda 24h post-vuelo.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>1 Reporte Ejecutivo Semestral editado.</span>
                        </li>
                    </ul>

                    <p className="text-xs text-emerald-400 mt-auto bg-emerald-950/20 p-3 rounded-lg border border-emerald-900/20">
                        <strong>Impacto CFO:</strong> Mitiga el Opex de tener un equipo de drones interno inactivo.
                    </p>
                </div>

                {/* Plan 2: Eventos y Streaming (Popular) */}
                <div className="bg-[#050b14] border border-blue-500/50 rounded-2xl p-8 relative flex flex-col shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transform md:-translate-y-4">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

                    <div className="flex items-center justify-between mb-4 mt-2">
                        <div className="p-2 bg-blue-900/50 rounded-lg text-blue-300">
                            <Radio className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-white bg-blue-600 px-3 py-1 rounded-full uppercase tracking-wider font-bold">Más Solicitado</span>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2">Comunicaciones Socio-Ambientales</h3>
                    <p className="text-sm text-blue-200/60 mb-6">Plataforma integral para transmisión de impacto ambiental, vinculación comunitaria y educación.</p>

                    <div className="mb-8 border-b border-blue-900/50 pb-6">
                        <span className="text-4xl font-bold text-white">75 UF<span className="text-xl text-blue-400/50 font-normal">/mes</span></span>
                        <p className="text-xs text-blue-400/70 mt-1 uppercase tracking-wider">Aprox $2.8M CLP • Contrato Semestral Mínimo</p>
                    </div>

                    <ul className="space-y-3 text-sm text-blue-100 flex-grow mb-8">
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>1 Streaming corporativo mensual (switcheo 3 cámaras, graficas on-air).</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>4 Cápsulas Digitales (Reels) para RRPP y LinkedIn.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>Soporte técnico dedicado In-Situ.</span>
                        </li>
                    </ul>

                    <p className="text-xs text-blue-300 mt-auto bg-blue-950/40 p-3 rounded-lg border border-blue-800/30">
                        <strong>Impacto Comunitario:</strong> Transparencia total. Evita conflictos territoriales manteniendo a la comunidad informada y partícipe.
                    </p>
                </div>

                {/* Plan 3: Archivo Institucional ESG */}
                <div className="bg-[#020617] border border-emerald-900/30 rounded-2xl p-8 relative flex flex-col transition-all hover:border-emerald-500/50">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-emerald-950/50 rounded-lg text-emerald-400">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-neutral-500 uppercase">Proyectos Anuales</span>
                    </div>

                    <h3 className="text-xl font-medium text-emerald-100 mb-2">Memoria Institucional ESG</h3>
                    <p className="text-sm text-neutral-500 mb-6">Levantamiento audiovisual para reportes de sostenibilidad, medio ambiente y vinculación comunitaria.</p>

                    <div className="mb-8 border-b border-emerald-900/30 pb-6">
                        <span className="text-4xl font-bold text-white">95 UF<span className="text-xl text-neutral-500 font-normal">/trimestre</span></span>
                        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Aprox $3.5M CLP • Focus en Sustentabilidad</p>
                    </div>

                    <ul className="space-y-3 text-sm text-neutral-300 mb-8 flex-grow">
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>1 Mini-documental corporativo (5 min) por trimestre.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>Levantamiento de testimonios comunitarios en terreno.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>Archivo Base en 4K liberado para la agencia de prensa de la compañía.</span>
                        </li>
                    </ul>

                    <p className="text-xs text-emerald-400 mt-auto bg-emerald-950/20 p-3 rounded-lg border border-emerald-900/20">
                        <strong>Impacto CFO:</strong> Activo digital reutilizable que justifica compliance ambiental ante inversionistas.
                    </p>
                </div>

            </div>
        </section>
    );
}
