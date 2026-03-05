import { Shield, TrendingUp, Calendar, Zap, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function FinancialEngineering() {
    const [donacion, setDonacion] = useState(25);
    return (
        <section id="finanzas" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-blue-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100">
                    Módulo D: <br />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
                        Financial Engineering
                    </span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Instrumentos estratégicos para el diseño de capital. Maximizamos el retorno corporativo operando bajo la matriz de incentivos de la Patagonia.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Ley Valdes Card */}
                <div className="bg-[#050b14] border border-blue-900/40 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-950 rounded-lg text-blue-400">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-medium text-blue-100">Ley Valdés (Donaciones)</h3>
                    </div>

                    <div className="text-sm text-neutral-400 mb-5 leading-relaxed space-y-3">
                        <p>
                            <strong className="text-neutral-300">¿Por qué existe?</strong> Para fomentar que el sector privado actúe de mecenas de proyectos de <strong className="text-blue-300">Fomento Turístico y Conservación Patrimonial</strong>, dándoles a cambio un incentivo irresistible: **pagar menos impuestos** a fin de año.
                        </p>
                    </div>

                    {/* Simulador Interactivo Ley Valdés */}
                    <div className="bg-[#020617] border border-blue-900/50 rounded-xl p-5 mt-auto">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-mono uppercase text-blue-400">Aporte Privado</span>
                            <span className="text-lg font-bold text-white">${donacion}M CLP</span>
                        </div>

                        <input
                            type="range"
                            min="5"
                            max="100"
                            step="5"
                            value={donacion}
                            onChange={(e) => setDonacion(Number(e.target.value))}
                            className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-6 focus:outline-none"
                        />

                        <div className="space-y-3 pt-4 border-t border-blue-900/40">
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                    <span className="text-neutral-400">Descuento Directo Impuestos</span>
                                </div>
                                <span className="font-bold text-emerald-400">${(donacion * 0.5).toFixed(1)}M</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-blue-500" />
                                    <span className="text-neutral-400">Ingresado a Gasto Aceptado</span>
                                </div>
                                <span className="font-bold text-blue-400">${(donacion * 0.5).toFixed(1)}M</span>
                            </div>
                            <div className="mt-4 pt-3 border-t border-blue-900/20 text-center">
                                <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                                    Costo Real Final para la Empresa: <strong className="text-white text-xs">${(donacion * 0.5).toFixed(1)}M</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Territorial Advantage Card */}
                <div className="bg-[#050b14] border border-blue-900/40 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-950 rounded-lg text-blue-400">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-medium text-blue-100">Ventaja Territorial Aysén</h3>
                    </div>

                    <div className="text-sm text-neutral-400 mb-6 leading-relaxed space-y-3">
                        <p>
                            <strong className="text-neutral-300">¿Por qué existe?</strong> El plan "Zonas Extremas" (PEDZE) busca inyectar dinero y trabajo en regiones aisladas como Aysén pagándole a las empresas que decidan operar allí.
                        </p>
                        <p>
                            <strong className="text-neutral-300">¿Para qué lo usamos?</strong> Para justificar financieramente que grabar en la nieve de Aysén es matemáticamente mejor que grabar en Santiago. CORFO nos devuelve el 40% del dinero gastado (Cash Rebate), reduciendo radicalmente el riesgo de inversión.
                        </p>
                    </div>

                    <div className="bg-[#020617] border border-blue-900/50 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-blue-900/30">
                            <span className="text-xs font-mono uppercase text-neutral-500">CORFO IFI en RM</span>
                            <span className="text-sm font-bold text-neutral-400">30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-mono uppercase text-blue-400">CORFO IFI en Aysén</span>
                            <span className="text-lg font-bold text-blue-300">40% Rebate</span>
                        </div>
                    </div>
                </div>

                {/* Admissibility Timeline Card */}
                <div className="bg-[#050b14] border border-blue-900/40 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-950 rounded-lg text-blue-400">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-medium text-blue-100">Cronograma de Admisibilidad</h3>
                    </div>

                    <div className="text-sm text-neutral-400 mb-6 leading-relaxed space-y-3">
                        <p>
                            <strong className="text-neutral-300">¿Por qué existe?</strong> La obtención exitosa de fondos estatales depende 100% de llegar a tiempo y con los papeles en regla (admisibilidad) a ventanas de postulación que duran apenas semanas.
                        </p>
                        <p>
                            <strong className="text-neutral-300">¿Para qué lo usamos?</strong> Para asegurar a la gerencia y a los inversionistas que no dejamos el financiamiento al azar. Contamos con una hoja de ruta estricta (marzo-agosto) para ir "cosechando" cada recurso disponible mes a mes.
                        </p>
                    </div>

                    <div className="space-y-4 mt-auto">
                        <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                            <div className="text-[10px] font-mono font-bold text-blue-400 mb-0.5">MARZO 2026</div>
                            <div className="text-xs text-neutral-300">Enrolamiento TGR (D.L. 889).</div>
                        </div>
                        <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                            <div className="text-[10px] font-mono font-bold text-blue-400 mb-0.5">ABRIL 2026</div>
                            <div className="text-xs text-neutral-300">Carga Cultura (Ventanilla MINCAP).</div>
                        </div>
                        <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                            <div className="text-[10px] font-mono font-bold text-blue-400 mb-0.5">JUNIO 2026</div>
                            <div className="text-xs text-neutral-300">Aperturas de Fondos Concursables.</div>
                        </div>
                        <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                            <div className="text-[10px] font-mono font-bold text-blue-400 mb-0.5">AGOSTO 2026</div>
                            <div className="text-xs text-neutral-300">Cierre postulaciones.</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
