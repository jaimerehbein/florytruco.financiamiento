import { Target, Leaf, Handshake, Compass, PieChart, TrendingDown, ShieldCheck, Activity } from 'lucide-react';

export default function StrategicFramework() {
    return (
        <section id="estrategia" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-emerald-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100">
                    Marco <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">Estratégico 2026</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Pilares de acción interconectados para sostener la rentabilidad, asegurar el impacto socioambiental y blindar el flujo de caja operativo de Productora Flor y Truco.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-[#020617] p-8 rounded-2xl border border-emerald-900/40 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Leaf className="w-32 h-32 text-emerald-500" />
                    </div>
                    <div className="flex gap-4 items-center mb-6">
                        <div className="p-3 bg-emerald-950/60 rounded-xl text-emerald-400 ring-1 ring-emerald-900/50">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-medium text-emerald-100">Pilar I: Impacto Verde (Green Shooting)</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed mb-4">
                        Transición completa hacia producciones "Cero Huella". Priorizar proyectos documentales y campañas de conservación que permitan acceder a fondos de <strong className="text-emerald-300">Resiliencia Climática</strong> y <strong className="text-emerald-300">Ley Valdés</strong> impulsados por filántropos y ONGs.
                    </p>
                </div>

                <div className="bg-[#050b14] p-8 rounded-2xl border border-blue-900/40 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Handshake className="w-32 h-32 text-blue-500" />
                    </div>
                    <div className="flex gap-4 items-center mb-6">
                        <div className="p-3 bg-blue-950/60 rounded-xl text-blue-400 ring-1 ring-blue-900/50">
                            <Handshake className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-medium text-blue-100">Pilar II: Alianzas B2B (Retainers ESG)</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed mb-4">
                        Desacoplar la dependencia estatal asegurando contratos recurrentes (<strong className="text-blue-300">ARR</strong>) con fundaciones y proyectos de energía limpia. Proveerles reportabilidad continua y vinculación comunitaria visual a cambio de liquidez mensual asegurada.
                    </p>
                </div>

                <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group md:col-span-2">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Compass className="w-48 h-48 text-neutral-500" />
                    </div>
                    <div className="flex gap-4 items-center mb-6">
                        <div className="p-3 bg-neutral-900 rounded-xl text-neutral-400 ring-1 ring-neutral-800">
                            <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-medium text-neutral-200">Pilar III: Apalancamiento Estatal Exhaustivo</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <p className="text-neutral-400 leading-relaxed">
                            Control total sobre el cronograma burocrático chileno. Utilizar la arquitectura financiera regional (PEDZE, D.L. 889) no como un extra, sino como el <strong className="text-neutral-200">núcleo de rentabilidad</strong>. Todo gasto operativo debe planificarse bajo el esquema del <strong className="text-emerald-400/80">Cash Rebate 40% (IFI)</strong> en la Región de Aysén.
                        </p>
                        <div className="bg-black/50 p-6 rounded-xl border border-neutral-800">
                            <h4 className="text-sm font-mono text-neutral-500 mb-3 uppercase tracking-wider border-b border-neutral-800 pb-2">Síntesis Táctica</h4>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li className="flex gap-2"><span className="text-emerald-500">→</span> Postulación precisa 100% de admisibilidad.</li>
                                <li className="flex gap-2"><span className="text-emerald-500">→</span> Reembolsos IFI financiando la etapa de post-producción.</li>
                                <li className="flex gap-2"><span className="text-emerald-500">→</span> Capital semilla impulsado por Ley Valdés.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Matriz de Diversificación */}
                <div className="bg-[#020202] py-10 px-8 rounded-2xl border border-neutral-800/60 relative overflow-hidden group md:col-span-2 mt-4 shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-10 border-b border-neutral-800/80 pb-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-neutral-900 rounded-xl text-neutral-300 ring-1 ring-neutral-700">
                                <PieChart className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium text-white mb-2">Matriz de Diversificación (No poner todos los huevos en la misma canasta)</h3>
                                <p className="text-sm text-neutral-400">¿De dónde sale el dinero de la empresa? Lo dividimos en tres partes para que, si una falla o se atrasa, las otras dos nos mantengan a flote.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Bloque 1 */}
                        <div className="border border-neutral-800/80 rounded-xl p-6 bg-neutral-950/50 hover:border-emerald-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-3xl font-bold text-white">40%</span>
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            </div>
                            <h4 className="font-medium text-neutral-200 mb-2">Fondos del Estado (El ancla)</h4>
                            <p className="text-xs text-neutral-400 mb-4 line-clamp-3">El dinero del Gobierno (MINCAP, CORFO). Es la base gruesa para financiar la película, pero el Estado siempre se demora meses en pagar.</p>
                            <div className="space-y-2 mt-auto">
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-500">Nivel de Riesgo:</span>
                                    <span className="text-emerald-400 font-medium">Bajo (Es seguro que pagan)</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-500">Problema principal:</span>
                                    <span className="text-red-400 font-medium">Lentitud burocrática</span>
                                </div>
                            </div>
                        </div>

                        {/* Bloque 2 */}
                        <div className="border border-neutral-800/80 rounded-xl p-6 bg-neutral-950/50 hover:border-blue-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-3xl font-bold text-white">35%</span>
                                <Activity className="w-5 h-5 text-blue-500" />
                            </div>
                            <h4 className="font-medium text-neutral-200 mb-2">Servicios Mensuales (El motor diario)</h4>
                            <p className="text-xs text-neutral-400 mb-4 line-clamp-3">Contratos fijos con ONGs para grabar su trabajo ecológico. Nos pagan todos los meses sin falta.</p>
                            <div className="space-y-2 mt-auto">
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-500">Nivel de Riesgo:</span>
                                    <span className="text-blue-400 font-medium">Casi nulo (Contrato firmado)</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-500">¿Para qué sirve?:</span>
                                    <span className="text-emerald-400 font-medium">Para pagar sueldos y la luz HOY</span>
                                </div>
                            </div>
                        </div>

                        {/* Bloque 3 */}
                        <div className="border border-neutral-800/80 rounded-xl p-6 bg-neutral-950/50 hover:border-purple-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-3xl font-bold text-white">25%</span>
                                <TrendingDown className="w-5 h-5 text-purple-500" />
                            </div>
                            <h4 className="font-medium text-neutral-200 mb-2">Aportes Privados (El acelerador)</h4>
                            <p className="text-xs text-neutral-400 mb-4 line-clamp-3">Dinero donado por filántropos o fundaciones. Se motivan a darnos dinero porque la "Ley Valdés" les deuelve la mitad en impuestos.</p>
                            <div className="space-y-2 mt-auto">
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-500">Nivel de Riesgo:</span>
                                    <span className="text-yellow-400 font-medium">Medio (Cuesta convencerlos)</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-500">Premio:</span>
                                    <span className="text-purple-400 font-medium">Da el "empujón" gigante al inicio</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
