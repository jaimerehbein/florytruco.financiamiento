import { Users, Briefcase, Gem, Activity, CreditCard, Crosshair, ShieldAlert, ArrowDownToLine, MoveUpRight, Swords } from 'lucide-react';

export default function MacroAnalysis() {
    return (
        <section id="analisis-avanzado" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-indigo-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100">
                    Estructura <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600">Avanzada de Inversión</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Posicionamiento corporativo evaluado bajo estándares de Venture Capital. Demostración de barreras de entrada (Porter) y generación de valor directo (Business Canvas).
                </p>
            </div>

            <div className="space-y-12">
                {/* Las 5 Fuerzas de Porter */}
                <div className="bg-gradient-to-br from-[#020205] to-[#01050e] p-8 rounded-2xl border border-indigo-900/40 shadow-xl">
                    <div className="flex items-center gap-3 mb-8 border-b border-indigo-900/30 pb-4">
                        <Swords className="w-8 h-8 text-indigo-400" />
                        <h3 className="text-2xl font-medium text-white">Competitividad de la Industria (Porter 5 Forces)</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Competidores */}
                        <div className="bg-indigo-950/20 border border-indigo-900/30 p-5 rounded-xl hover:bg-indigo-950/40 transition-colors">
                            <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                <Crosshair className="w-4 h-4" /> Rivalidad del Sector
                            </h4>
                            <div className="text-2xl font-bold text-emerald-400 mb-2">Baja</div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Hay pocos competidores con certificación comercial y estructura legal D.L. 889 en la Región de Aysén. El mercado audiovisual corporativo verde está virtualmente desatendido.
                            </p>
                        </div>

                        {/* Nuevos Entrantes */}
                        <div className="bg-indigo-950/20 border border-indigo-900/30 p-5 rounded-xl hover:bg-indigo-950/40 transition-colors">
                            <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                <ShieldAlert className="w-4 h-4" /> Barreras de Entrada
                            </h4>
                            <div className="text-2xl font-bold text-emerald-400 mb-2">Altas</div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Se requiere un <strong className="text-indigo-300">Track Record de 11 años (FECIPA)</strong> para obtener confianza de instituciones estatales y privadas, blindando a Flor y Truco contra agencias emergentes jóvenes.
                            </p>
                        </div>

                        {/* Clientes */}
                        <div className="bg-indigo-950/20 border border-indigo-900/30 p-5 rounded-xl hover:bg-indigo-950/40 transition-colors">
                            <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4" /> Poder de Clientes
                            </h4>
                            <div className="text-2xl font-bold text-amber-500 mb-2">Medio-Alto</div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                El Estado y ONGs Globales imponen presupuestos y plazos estrictos. <span className="text-indigo-300 font-medium">Mitigación:</span> Diversificación transversal del catálogo de servicios hacia filántropos privados (Ley Valdés).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Business Model Canvas */}
                <div className="bg-[#050505] p-6 lg:p-10 rounded-2xl border border-neutral-800">
                    <h3 className="text-2xl font-medium text-white mb-8">Business Model Canvas</h3>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-auto md:h-[400px]">

                        {/* Socios // Actividades // Recursos */}
                        <div className="md:col-span-1 space-y-4 flex flex-col">
                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex-1">
                                <h4 className="font-bold text-neutral-400 uppercase text-[10px] tracking-widest mb-3 flex items-center gap-1.5"><Briefcase className="w-3 h-3 text-neutral-500" /> Socios Clave</h4>
                                <ul className="text-xs text-neutral-300 space-y-2 list-disc pl-4 marker:text-emerald-500">
                                    <li>MINCAP</li>
                                    <li>Agrupaciones Sociales y Culturales de la Región</li>
                                    <li>Fundación Mira al Mar</li>
                                    <li>GORE</li>
                                </ul>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex-1">
                                <h4 className="font-bold text-neutral-400 uppercase text-[10px] tracking-widest mb-3 flex items-center gap-1.5"><Activity className="w-3 h-3 text-neutral-500" /> Actividades Clave</h4>
                                <ul className="text-xs text-neutral-300 space-y-2 list-disc pl-4 marker:text-emerald-500">
                                    <li>Levantamiento de Capital (Grants).</li>
                                    <li>Producción Green Shooting 4K.</li>
                                    <li>Gestión de Beneficios Tributarios.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Propuesta de Valor Central */}
                        <div className="md:col-span-2 bg-gradient-to-b from-emerald-950/30 to-neutral-900/50 p-6 rounded-xl border border-emerald-900/40 flex flex-col justify-center relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                            <Gem className="w-16 h-16 text-emerald-500/20 absolute -top-4 -right-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-4 flex items-center gap-2"><Gem className="w-4 h-4" /> Propuesta de Valor Única (UVP)</h4>
                            <p className="text-sm text-neutral-200 leading-relaxed font-medium">
                                Convertimos presupuestos de marketing y responsabilidad social en cine documental de impacto.
                            </p>
                            <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                                Ofrecemos a las corporaciones e instituciones un mecanismo blindado para descontar impuestos hasta en un 50% (Ley Valdés) mientras obtienen reportabilidad audiovisual premium (ESG) desde la Zona Extrema de Aysén.
                            </p>
                        </div>

                        {/* Relaciones // Segmentos */}
                        <div className="md:col-span-2 flex flex-col gap-4">
                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex-1 flex flex-col">
                                <h4 className="font-bold text-neutral-400 uppercase text-[10px] tracking-widest mb-3 flex items-center gap-1.5"><Users className="w-3 h-3 text-neutral-500" /> Segmentos del Cliente</h4>
                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    <div className="bg-neutral-950 p-2 rounded border border-neutral-800 text-[10px] text-neutral-300">B2G: Estado (Corfo, GORE)</div>
                                    <div className="bg-neutral-950 p-2 rounded border border-neutral-800 text-[10px] text-neutral-300">B2B: Mkt. de Sostenibilidad</div>
                                    <div className="bg-neutral-950 p-2 rounded border border-neutral-800 text-[10px] text-neutral-300 col-span-2">Private: Filántropos & Inversionistas</div>
                                </div>
                            </div>

                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex-1">
                                <h4 className="font-bold text-neutral-400 uppercase text-[10px] tracking-widest mb-3 flex items-center gap-1.5"><MoveUpRight className="w-3 h-3 text-neutral-500" /> Canales</h4>
                                <ul className="text-xs text-neutral-300 space-y-1.5">
                                    <li>Licitación Directa Mercado Público.</li>
                                    <li>Adquisición Corporativa Directa.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Costos e Ingresos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-neutral-900/80 p-5 rounded-xl border border-red-900/30">
                            <h4 className="font-bold text-red-400 uppercase text-xs tracking-widest mb-3 flex items-center gap-2"><ArrowDownToLine className="w-4 h-4" /> Estructura de Costos (Caja)</h4>
                            <div className="flex gap-4">
                                <div className="w-1/2 text-xs text-neutral-400">
                                    <strong className="text-white block mb-1">CapEX (Fijos)</strong>
                                    Licencias Software, Almacenamiento NAS, Depreciación Cámara/Dron.
                                </div>
                                <div className="w-1/2 text-xs text-neutral-400">
                                    <strong className="text-white block mb-1">OpEX (Variables)</strong>
                                    Sueldos Equipo Técnico, Logística Rodajes, Ley 40 Horas.
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-900/80 p-5 rounded-xl border border-emerald-900/30">
                            <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-3 flex items-center gap-2"><CreditCard className="w-4 h-4" /> Flujos de Ingreso (ARR)</h4>
                            <div className="flex gap-4">
                                <div className="w-1/2 text-xs text-neutral-400">
                                    <strong className="text-emerald-200 block mb-1">Uniformes (Retainers)</strong>
                                    Contratos mensuales (10-40 UF) por reportabilidad ESG y Dron.
                                </div>
                                <div className="w-1/2 text-xs text-neutral-400">
                                    <strong className="text-emerald-200 block mb-1">Disruptivos (Hitos)</strong>
                                    Inyecciones líquidas (20M-150M) vía premios MINCAP o Cash Rebate Corfo.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
