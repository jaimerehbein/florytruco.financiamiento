import { useLiquidityModel } from '../hooks/useLiquidityModel';
import { Calculator, Info } from 'lucide-react';

export default function Calculadora() {
    const model = useLiquidityModel();

    return (
        <section id="calculadora" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-emerald-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4">Módulo C: <br /><span className="font-bold text-white">Calculadora Regional</span></h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Simulador de liquidez proyectada. Calcula el impacto matemático de centralizar operaciones en la Patagonia mediante beneficios logísticos y D.L. 889.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Controls */}
                <div className="lg:col-span-5 bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 lg:p-8 space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <h3 className="text-xl font-medium text-neutral-200">Parámetros Financieros</h3>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-xs uppercase font-mono tracking-widest text-neutral-500 mb-2">Ingresos Esperados ($)</label>
                            <input
                                type="number"
                                value={model.ingresos}
                                onChange={e => model.setIngresos(Number(e.target.value))}
                                className="w-full bg-[#111] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase font-mono tracking-widest text-neutral-500 mb-2">Gastos Nominales ($)</label>
                            <input
                                type="number"
                                value={model.gastosNominales}
                                onChange={e => model.setGastosNominales(Number(e.target.value))}
                                className="w-full bg-[#111] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase font-mono tracking-widest text-neutral-500 mb-2">Sueldos Aysén (Imponibles) ($)</label>
                            <p className="text-[10px] text-neutral-600 mb-2 leading-tight font-mono tracking-wide">Base cálculo D.L. 889</p>
                            <input
                                type="number"
                                value={model.porcionPersonalAysen}
                                onChange={e => model.setPorcionPersonalAysen(Number(e.target.value))}
                                className="w-full bg-[#111] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase font-mono tracking-widest text-neutral-500 mb-2">Saldo Anterior ($)</label>
                            <input
                                type="number"
                                value={model.saldoAnterior}
                                onChange={e => model.setSaldoAnterior(Number(e.target.value))}
                                className="w-full bg-[#111] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
                            />
                        </div>
                    </div>

                    {/* Explainer Block */}
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 mt-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Info className="w-4 h-4 text-emerald-500" />
                            <h4 className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">Lógica de Cálculo</h4>
                        </div>
                        <ul className="space-y-3 text-xs text-neutral-400 leading-relaxed">
                            <li><strong className="text-neutral-300">Beneficio D.L. 889:</strong> Retorno directo del <span className="text-emerald-400 font-mono">17%</span> sobre las remuneraciones imponibles del personal local.</li>
                            <li><strong className="text-neutral-300">Reembolso IFI CORFO:</strong> El Cash Rebate en zona extrema alcanza un techo del <span className="text-emerald-400 font-mono">40%</span> de los gastos calificados, reduciendo el costo logístico basal frente a filmar en Santiago (30%).</li>
                            <li><strong className="text-neutral-300">Ley de Donaciones:</strong> Aporta integración privada al permitir recuperar el <span className="text-emerald-400 font-mono">50%</span> de la inversión como crédito tributario.</li>
                        </ul>
                    </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-7 bg-gradient-to-br from-[#0a1510] to-[#040906] border border-emerald-900/40 rounded-2xl p-6 lg:p-10 relative overflow-hidden flex flex-col justify-center">
                    {/* Decorative effect */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none"></div>

                    <div className="relative z-10 w-full">
                        <h4 className="text-emerald-500 uppercase tracking-widest text-xs font-mono font-bold mb-4">Liquidez Proyectada (t)</h4>
                        <div className="text-5xl lg:text-7xl font-light font-mono text-white mb-2 tracking-tighter">
                            $ {Math.round(model.liquidezProyectada).toLocaleString('es-CL')}
                        </div>
                        <p className="text-neutral-500 text-sm mb-12 font-mono uppercase tracking-widest">Capital de trabajo disponible post-ejecución</p>

                        <div className="space-y-4 pt-8 border-t border-emerald-900/30">
                            <h5 className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mb-6">Desglose de Ventaja Geográfica Operativa</h5>

                            <div className="flex justify-between items-center bg-[#070b08] border border-emerald-900/30 p-4 rounded-xl shadow-inner">
                                <div>
                                    <span className="text-neutral-300 block font-medium">Beneficio D.L. 889</span>
                                    <span className="text-xs text-neutral-600 font-mono tracking-tight mt-1 inline-block">17% de ahorro en mano de obra local</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-xl">+$ {Math.round(model.bonificacionDL889).toLocaleString('es-CL')}</span>
                            </div>

                            <div className="flex justify-between items-center bg-[#070b08] border border-emerald-900/30 p-4 rounded-xl shadow-inner">
                                <div>
                                    <span className="text-neutral-300 block font-medium">Reembolso IFI CORFO</span>
                                    <span className="text-xs text-neutral-600 font-mono tracking-tight mt-1 inline-block">40% en Aysén (frente al 30% en Santiago)</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-xl">+$ {Math.round(model.ahorroLogistico).toLocaleString('es-CL')}</span>
                            </div>

                            <div className="flex justify-between items-center bg-[#070b08] border border-emerald-900/30 p-4 rounded-xl shadow-inner mt-4">
                                <div>
                                    <span className="text-neutral-300 block font-medium">Ley de Donaciones</span>
                                    <span className="text-xs text-neutral-600 font-mono tracking-tight mt-1 inline-block">50% de Crédito Tributario para empresas aportantes</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-xl">Aplica en Base a Inversión</span>
                            </div>

                            <div className="flex justify-between items-center pt-6 pb-2">
                                <span className="text-neutral-400 uppercase tracking-widest text-sm font-bold">Ventaja Neta</span>
                                <span className="text-emerald-300 font-mono text-3xl font-light">+$ {Math.round(model.ventajaGeograficaTotal).toLocaleString('es-CL')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
