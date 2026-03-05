import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { fondosMatriz2026 } from '../data/fondos';

export default function HubFondos() {
    const [filter, setFilter] = useState<string | null>(null);

    const tags = Array.from(new Set(fondosMatriz2026.flatMap(f => f.etiquetas)));
    const filteredFondos = filter ? fondosMatriz2026.filter(f => f.etiquetas.includes(filter)) : fondosMatriz2026;

    return (
        <section id="hub" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-emerald-500 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4">Módulo A: <br /><span className="font-bold text-white">Hub de Fondos</span></h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Matriz de financiamiento 2026 destacando objetivos prioritarios: <strong className="text-emerald-400">FIA ($300M)</strong>, <strong className="text-emerald-400">Regional ($250M)</strong> e <strong className="text-emerald-400">Ibermedia (US$150K)</strong>.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 border-b border-neutral-800 pb-6">
                <button
                    onClick={() => setFilter(null)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === null ? 'bg-emerald-900/40 border-emerald-500 text-emerald-300' : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-600'}`}
                >
                    Todos
                </button>
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === tag ? 'bg-emerald-900/40 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]' : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-600'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFondos.map(fondo => (
                    <div key={fondo.id} className="group bg-[#0a0a0a] border border-neutral-800/80 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-[#0c0c0c] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <div className="w-24 h-24 bg-emerald-500 rounded-full blur-3xl"></div>
                        </div>

                        <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 mb-3">{fondo.institucion}</div>
                        <h3 className="text-xl text-neutral-100 font-medium mb-1 pr-4">{fondo.fondo}</h3>
                        <div className="text-3xl font-light font-mono text-emerald-400 my-5 tracking-tight">{fondo.monto}</div>

                        <div className="pt-4 border-t border-neutral-900">
                            <p className="text-sm text-neutral-400">
                                <span className="text-neutral-200 block mb-1.5 text-xs font-mono uppercase tracking-widest">Requisito Clave</span>
                                {fondo.requisito_clave}
                            </p>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {fondo.etiquetas.map(e => (
                                <span key={e} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 flex items-center justify-center rounded bg-neutral-900 text-neutral-500 border border-neutral-800">
                                    {e}
                                </span>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-neutral-900 flex justify-end">
                            <a
                                href={fondo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors"
                            >
                                Bases y Portal <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
