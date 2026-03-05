import { CheckCircle2, ExternalLink, AlertTriangle } from 'lucide-react';
import { roadmap2026 } from '../data/roadmap';

export default function Roadmap() {
    return (
        <section>
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-emerald-400">Roadmap <span className="font-bold text-white">2026</span></h2>
                <p className="text-neutral-400 text-lg">
                    La ventana de postulación no es estática. Dependemos de contratos escalonados para concretar el cierre financiero.
                </p>

                {/* Semáforo de Riesgo Político */}
                <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-5 inline-flex flex-col md:flex-row items-start text-left max-w-2xl mt-6 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                    <AlertTriangle className="w-6 h-6 text-amber-500 mr-4 shrink-0 mb-3 md:mb-0" />
                    <div>
                        <h4 className="text-amber-400 font-medium text-sm uppercase tracking-widest mb-1.5">Ventana de Admisibilidad (Abril - Agosto 2026)</h4>
                        <p className="text-amber-200/70 text-xs leading-relaxed">
                            El cambio de mando presidencial históricamente retrasa los procesos. El cronograma maestro exige iniciar la <strong className="text-white">Carga de Perfil Cultura en Abril</strong> y estar 100% listos para el <strong className="text-white">Cierre FIA en Agosto</strong>. La liquidez B2B será el puente para cruzar este "valle burocrático" de 5 meses sin sobresaltos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
                {roadmap2026.map((item, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-[#0a0a0a] group-hover:border-emerald-500 text-neutral-500 group-hover:text-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>

                        {/* Content card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-neutral-800/80 bg-[#0a0a0a] hover:border-emerald-600/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(6,78,59,0.2)]">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-500">{item.mes} {item.anio}</span>
                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest ${item.urgencia === 'Crítica' ? 'bg-red-900/30 text-red-400 border border-red-900/50' :
                                    item.urgencia === 'Alta' ? 'bg-amber-900/30 text-amber-400 border border-amber-900/50' :
                                        'bg-emerald-900/30 text-emerald-400 border border-emerald-900/50'
                                    }`}>
                                    {item.urgencia}
                                </span>
                            </div>
                            <h3 className="text-xl text-white font-medium mb-2">{item.hito}</h3>
                            <p className="text-sm text-neutral-400 mb-4">
                                <span className="block text-xs uppercase tracking-widest text-neutral-600 mb-1">Acción Requerida</span>
                                {item.accion}
                            </p>
                            <div className="flex items-center justify-between pt-3 border-t border-neutral-800/50">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">Responsable:</span>
                                    <span className="text-xs font-mono font-medium text-emerald-300">{item.responsable}</span>
                                </div>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-emerald-400 transition-colors"
                                    title="Ver enlace oficial"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
