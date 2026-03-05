import { Anchor, BarChart3, Leaf, Building2, Globe2, Link as LinkIcon } from 'lucide-react';

export default function BusinessPlan() {
    return (
        <section id="business-plan" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-amber-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100">
                    Arquitectura de <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Capital Mixta</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Mitigación del riesgo financiero mediante la integración de subsidios estatales, incentivos a la Inversión Extranjera Directa IED <span className="text-sm italic text-neutral-500">(dinero extranjero entrando a Chile)</span> y beneficios tributarios corporativos <span className="text-sm italic text-neutral-500">(descuentos de impuestos para empresas)</span>.
                </p>
            </div>

            <div className="space-y-12">

                {/* Pilares de Sostenibilidad */}
                <div>
                    <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                        <Anchor className="text-amber-500 w-6 h-6" /> Pilares de Sostenibilidad
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-amber-950/10 border border-amber-900/30 p-5 rounded-xl">
                            <h4 className="font-bold text-amber-500 uppercase tracking-widest text-[10px] mb-2">Apalancamiento Semilla <span className="text-amber-300/60 normal-case italic">(Impulso Inicial)</span></h4>
                            <p className="text-xs text-neutral-300">Captación de fondos MINCAP para pre-asegurar hasta un 50% del presupuesto base <span className="text-[10px] text-neutral-500 italic block mt-1">(Tener la mitad de la plata antes de empezar a grabar).</span></p>
                        </div>
                        <div className="bg-amber-950/10 border border-amber-900/30 p-5 rounded-xl">
                            <h4 className="font-bold text-amber-500 uppercase tracking-widest text-[10px] mb-2">Eficiencia en Zona Extrema <span className="text-amber-300/60 normal-case italic">(Sueldos más baratos)</span></h4>
                            <p className="text-xs text-neutral-300">Uso del D.L. 889: bonificación del 17% sobre sueldos para talento técnico residente en Aysén <span className="text-[10px] text-neutral-500 italic block mt-1">(El Estado nos paga el 17% del sueldo de la gente local).</span></p>
                        </div>
                        <div className="bg-amber-950/10 border border-amber-900/30 p-5 rounded-xl">
                            <h4 className="font-bold text-amber-500 uppercase tracking-widest text-[10px] mb-2">Optimización de Imprevistos</h4>
                            <p className="text-xs text-neutral-300">Ingeniería de costos: integración mandatoria del 7% extra permitido por bases públicas para coberturas climáticas en la Patagonia.</p>
                        </div>
                        <div className="bg-amber-950/10 border border-amber-900/30 p-5 rounded-xl">
                            <h4 className="font-bold text-amber-500 uppercase tracking-widest text-[10px] mb-2">Certificación Legal <span className="text-amber-300/60 normal-case italic">(Papeles en regla)</span></h4>
                            <p className="text-xs text-neutral-300">Mantención del "Objeto Social Audiovisual" validado por SEREMI <span className="text-[10px] text-neutral-500 italic block mt-1">(Tener la empresa configurada legalmente para que el Gobierno nos pueda transferir dinero sin trabas).</span></p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">

                    {/* Estrategia de Mercado */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-2xl font-medium text-white mb-4 border-b border-neutral-800 pb-4">Estrategia: "Patagonia Creativa y Valor Compartido"</h3>
                        <p className="text-sm text-neutral-400">
                            La consigna estratégica es vender el territorio de Aysén como un plató premium, ofreciendo reportabilidad a sectores clave bajo esquemas de incentivos tributarios.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-xl border border-neutral-800 bg-[#050505]">
                                <Building2 className="w-6 h-6 text-neutral-500 shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-sm font-bold text-white mb-1">B2B y Fomento Turístico <span className="text-xs italic font-normal text-neutral-500">(Venderle a grandes empresas)</span></h5>
                                    <p className="text-xs text-neutral-400">Desarrollo de comerciales de elite para empresas outdoor. Usamos las devoluciones de dinero del Estado (Cash Rebate) para ofrecerles precios imbatibles.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl border border-emerald-900/30 bg-emerald-950/10">
                                <Leaf className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-sm font-bold text-emerald-100 mb-1">Conservación y Medio Ambiente</h5>
                                    <p className="text-xs text-emerald-300/70">Asociatividad con fundaciones <span className="italic text-emerald-500/80">(ayudarlas a ganar fondos del Gobierno)</span> usando nuestro cine documental como herramienta para educar a la región.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl border border-blue-900/30 bg-blue-950/10">
                                <LinkIcon className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-sm font-bold text-blue-100 mb-1">El Inversionista Privado (Portal Ley Valdés)</h5>
                                    <p className="text-xs text-blue-300/70">Ataque comercial hacia grandes contribuyentes, ofreciendo un 50% de Crédito contra Impuestos para que actúen como mecenas.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl border border-rose-900/30 bg-rose-950/10">
                                <Globe2 className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-sm font-bold text-rose-100 mb-1">Internacionalización (Programa Ibermedia)</h5>
                                    <p className="text-xs text-rose-300/70">Coproducción con otros países. <span className="italic text-rose-500/80">Nos obliga estructuralmente a traer dinero del extranjero hacia Chile para grabar aquí.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flujo Hipotetico de Capital */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#080808] border border-neutral-800 rounded-2xl p-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                                <BarChart3 className="w-6 h-6 text-amber-500" />
                                <h3 className="text-xl font-medium text-white">Flujo de Liquidez a 3 Años</h3>
                            </div>

                            <div className="bg-black/80 rounded-lg p-4 mb-6 text-center border border-amber-900/50">
                                <span className="block text-[10px] uppercase font-mono text-neutral-500 mb-2">Fórmula Operativa</span>
                                <code className="text-amber-400 font-mono text-sm block">Liquidez<sub>(t)</sub> = Ingresos<sub>(t)</sub> - Gastos<sub>(t)</sub> + Saldo<sub>(t-1)</sub></code>
                            </div>

                            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent flex-grow">

                                {/* 2026 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-[10px] font-bold">
                                        '26
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-neutral-800/80 bg-[#0a0a0a]">
                                        <h5 className="text-xs font-bold text-white mb-1">Fase 1: Captación</h5>
                                        <p className="text-[10px] text-neutral-400 leading-relaxed">Ganar los primeros fondos del Gobierno. <strong className="text-emerald-400 block mt-1">Hito de Dinero: Recibir el adelanto (40% del fondo) firmando un seguro (Boleta de Garantía) para tener dinero en la cuenta y poder comenzar a trabajar.</strong></p>
                                    </div>
                                </div>

                                {/* 2027 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-[10px] font-bold">
                                        '27
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-neutral-800/80 bg-[#0a0a0a]">
                                        <h5 className="text-xs font-bold text-white mb-1">Fase 2: Ejecución Activa</h5>
                                        <p className="text-[10px] text-neutral-400 leading-relaxed">Pagar los gastos del rodaje (cámaras, viajes). <strong className="text-emerald-400 block mt-1">Hito de Dinero: CORFO nos devuelve el 40% de lo que gastamos en Aysén (Reembolso IFI), recuperando el efectivo a mitad del camino para no quebrar.</strong> Salir a buscar donaciones de privados.</p>
                                    </div>
                                </div>

                                {/* 2028-2029 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-[10px] font-bold">
                                        '28
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-neutral-800/80 bg-[#0a0a0a]">
                                        <h5 className="text-xs font-bold text-white mb-1">Fase 3: Retorno y Regalías</h5>
                                        <p className="text-[10px] text-neutral-400 leading-relaxed">Ventas al mercado internacional, licenciamiento en Streaming y <strong className="text-neutral-300">alojamiento en canal de YouTube propio con inyección de Tráfico Pagado (Ads) para escalar la monetización pasiva</strong>. <strong className="text-emerald-400 block mt-1">Hito: Liquidación e inyección de márgenes finales (Explotación Comercial).</strong></p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
