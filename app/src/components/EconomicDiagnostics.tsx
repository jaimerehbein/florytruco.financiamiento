import { LineChart, PieChart, Coins, ShieldAlert, Lightbulb, Clock, Activity, Scale, BookOpen } from 'lucide-react';

export default function EconomicDiagnostics() {
    return (
        <section id="diagnostico-operativo" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-violet-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100">
                    Diagnóstico <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-600">Económico y Operativo</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Guía estratégica para gerencia no financiera. Explicación paso a paso de las nuevas propuestas para escalar la productora y generar valor real.
                </p>
            </div>

            <div className="space-y-12">

                {/* Pilares del Analisis */}
                <div>
                    <h3 className="text-2xl font-medium text-white mb-6 border-b border-neutral-800 pb-4">1. Propuestas de Escalamiento Interno</h3>
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Liquidez */}
                        <div className="bg-[#050510] border border-violet-900/30 p-6 rounded-2xl group hover:border-violet-500/50 transition-colors relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Clock className="w-24 h-24 text-violet-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="p-2 bg-violet-950/50 rounded-lg text-violet-400">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold text-violet-100">
                                    Gestión de Liquidez
                                </h4>
                            </div>
                            <div className="space-y-3 relative z-10 flex-grow">
                                <p className="text-sm text-neutral-400">
                                    El equipo sufre el descalce de plazos entre el gasto de pre-producción (que se paga hoy) y el pago final del cliente (que llega en 6 meses).
                                </p>
                            </div>

                            {/* Diccionario Integrado */}
                            <div className="mt-6 bg-violet-950/20 border-t border-violet-900/50 pt-4 -mx-2 px-2">
                                <h5 className="flex items-center gap-2 text-[10px] uppercase font-bold text-violet-400 mb-2 tracking-widest">
                                    <BookOpen className="w-3 h-3" /> Concepto Clave
                                </h5>
                                <p className="text-sm text-white font-medium mb-1">Tesorería Cercada</p>
                                <p className="text-xs text-neutral-400 leading-relaxed">
                                    <strong className="text-neutral-300">¿Qué es?:</strong> Es separar el dinero en cuentas cerradas o presupuestos intocables por cada proyecto.<br />
                                    <strong className="text-emerald-400">¿Para qué sirve?:</strong> Para evitar la quiebra. Impide que se utilicen los fondos destinados a una película para pagar los sueldos atrasados del mes en la oficina.
                                </p>
                            </div>
                        </div>

                        {/* Costos */}
                        <div className="bg-[#050510] border border-violet-900/30 p-6 rounded-2xl group hover:border-violet-500/50 transition-colors relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Scale className="w-24 h-24 text-violet-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="p-2 bg-violet-950/50 rounded-lg text-violet-400">
                                    <PieChart className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold text-violet-100">Estructura de Costos</h4>
                            </div>
                            <div className="space-y-3 relative z-10 flex-grow">
                                <p className="text-sm text-neutral-400">
                                    Se debe diagnosticar rápidamente la cantidad de activos ociosos (cámaras, luces, drones) que acumulan polvo en la oficina de Aysén.
                                </p>
                            </div>

                            {/* Diccionario Integrado */}
                            <div className="mt-6 bg-violet-950/20 border-t border-violet-900/50 pt-4 -mx-2 px-2">
                                <h5 className="flex items-center gap-2 text-[10px] uppercase font-bold text-violet-400 mb-2 tracking-widest">
                                    <BookOpen className="w-3 h-3" /> Concepto Clave
                                </h5>
                                <p className="text-sm text-white font-medium mb-1">Costo de Oportunidad y OPEX</p>
                                <p className="text-xs text-neutral-400 leading-relaxed">
                                    <strong className="text-neutral-300">¿Qué es?:</strong> Es medir cuánto dinero estamos perdiendo por el simple hecho de haber comprado una cámara cara que no se usa todos los días.<br />
                                    <strong className="text-emerald-400">¿Para qué sirve?:</strong> Obliga a la gerencia a vender o dejar de comprar fierros (Costo Fijo) y pasarse a un formato <em className="text-violet-300">Rental</em> (Arriendo o OPEX), donde solo gastamos dinero si una grabación ya está pagada.
                                </p>
                            </div>
                        </div>

                        {/* Intangibles */}
                        <div className="bg-[#050510] border border-violet-900/30 p-6 rounded-2xl group hover:border-violet-500/50 transition-colors relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Lightbulb className="w-24 h-24 text-violet-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="p-2 bg-violet-950/50 rounded-lg text-violet-400">
                                    <Coins className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold text-violet-100">Valoración Patrimonial</h4>
                            </div>
                            <div className="space-y-3 relative z-10 flex-grow">
                                <p className="text-sm text-neutral-400">
                                    El valor de Flor y Truco como empresa no está en sus computadores ni en su infraestructura física, está en las mentes creativas y su catálogo de obras.
                                </p>
                            </div>

                            {/* Diccionario Integrado */}
                            <div className="mt-6 bg-violet-950/20 border-t border-violet-900/50 pt-4 -mx-2 px-2">
                                <h5 className="flex items-center gap-2 text-[10px] uppercase font-bold text-violet-400 mb-2 tracking-widest">
                                    <BookOpen className="w-3 h-3" /> Concepto Clave
                                </h5>
                                <p className="text-sm text-white font-medium mb-1">Valoración de Activos IP</p>
                                <p className="text-xs text-neutral-400 leading-relaxed">
                                    <strong className="text-neutral-300">¿Qué es?:</strong> Significa ponerle un precio matemático (VPN - Valor Presente Neto) a todos los derechos de autor (IP) e ideas de proyectos que ha hecho la productora ("Batalla de Aysén").<br />
                                    <strong className="text-emerald-400">¿Para qué sirve?:</strong> Estos derechos o "Intangibles" se usan como "Colateral" (garantía) para pedir préstamos grandes en los bancos.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Matriz de Riesgo */}
                    <div className="md:col-span-3 bg-[#020202] rounded-2xl border border-neutral-800 p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldAlert className="w-6 h-6 text-amber-500" />
                            <h3 className="text-xl font-medium text-white">2. Matriz Operativa de Riesgos</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] uppercase tracking-widest text-neutral-500 bg-neutral-900 border-b border-neutral-800">
                                    <tr>
                                        <th className="px-4 py-3 rounded-tl-lg">Vector de Riesgo</th>
                                        <th className="px-4 py-3">Impacto (El Peligro)</th>
                                        <th className="px-4 py-3 rounded-tr-lg">Estrategia (La Solución)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800/50">
                                    <tr className="hover:bg-neutral-900/20 transition-colors">
                                        <td className="px-4 py-4 font-medium text-amber-400">Concentración de Clientes</td>
                                        <td className="px-4 py-4 text-xs text-neutral-400">Depender de que 1 sola ONG o el MINCAP te dé todo el trabajo del año. Si dicen no, no hay sueldos.</td>
                                        <td className="px-4 py-4 text-emerald-400/90 text-xs">Atacar a empresas privadas por Ley Donaciones para tener 3 o 4 financiadores diferentes, no solo el Estado.</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/20 transition-colors">
                                        <td className="px-4 py-4 font-medium text-amber-400">Amortización Tecnológica</td>
                                        <td className="px-4 py-4 text-xs text-neutral-400">Las cámaras, computadores y discos duros mueren de viejos y cuesta una fortuna reponerlos de golpe.</td>
                                        <td className="px-4 py-4 text-emerald-400/90 text-xs">Crear la obligación de que en CADA proyecto cobrado, un pedacito ínfimo vaya a una "cuenta secreta de ahorros" intocable para renovar equipos.</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/20 transition-colors">
                                        <td className="px-4 py-4 font-medium text-amber-400">Inflación en Rodajes</td>
                                        <td className="px-4 py-4 text-xs text-neutral-400">Cobras por un documental hoy, pero lo grabas en un año más cuando la bencina y la comida están carísimas. Pierdes margen.</td>
                                        <td className="px-4 py-4 text-emerald-400/90 text-xs">Nunca firmar contratos fijos grandes. Siempre firmar cláusulas de cobros y giros presupuestarios actualizados a la Unidad de Fomento (UF).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* El Gran Cierre (Hibridación) */}
                    <div className="md:col-span-2 bg-gradient-to-tr from-violet-950/40 via-neutral-900/50 to-emerald-950/20 border border-violet-900/40 rounded-2xl p-8 flex flex-col justify-center text-center shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all relative">
                        <div className="inline-flex justify-center mb-4">
                            <span className="w-12 h-12 rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center text-violet-400">
                                <LineChart className="w-6 h-6" />
                            </span>
                        </div>
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-violet-400 mb-2">3. Decisión Directiva Financiera</h4>
                        <h3 className="text-2xl font-bold text-white mb-2">Hibridación del Modelo</h3>
                        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                            Flor y Truco no puede seguir siendo <strong>solamente una prestadora de servicios</strong> que se desvive haciendo un video corporativo para una marca que luego se adueña de todo el material.
                        </p>
                        <div className="bg-black/50 border border-violet-900/50 p-6 rounded-xl">
                            <span className="block text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400 mb-2">
                                Retener 15% IP
                            </span>
                            <div className="text-left mt-4 border-t border-violet-900/50 pt-4">
                                <p className="text-xs text-neutral-300 mb-2">
                                    <strong className="text-violet-400">¿Qué es el IP y el EBITDA?:</strong><br /> El <strong className="text-white">IP</strong> es exigir quedarse con un porcentaje de propiedad sobre las series o películas en los contratos. El <strong className="text-white">EBITDA</strong> es la cifra real y dura del dinero que le queda a la productora después de toda la batalla de pagar cuentas y sueldos.
                                </p>
                                <p className="text-xs text-emerald-400/90 leading-relaxed">
                                    <strong className="text-emerald-400">¿Para qué sirve retener este 15%?:</strong> Permite que Flor y Truco aloje de forma exclusiva los videos finales en su propio <strong className="text-white">canal de YouTube monetizado</strong>. Posteriormente, realizando una <strong className="text-white border-b border-emerald-500/50">inversión en tráfico pagado (Ads en RRSS)</strong>, se genera una tracción masiva de reproducciones. Así, cada visualización futura a lo largo de los años se transforma en pagos pasivos y constantes (Regalías), inflando su <strong className="text-white">EBITDA</strong> de por vida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
