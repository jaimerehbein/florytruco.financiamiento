import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 bg-[#050505]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,78,59,0.15),transparent_60%)]"></div>
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent"></div>

                {/* Cinematic noise overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            </div>

            <div className="z-10 max-w-4xl mx-auto space-y-8 mt-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-900/50 bg-emerald-950/20 text-emerald-400 text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    INFORME CORPORATIVO • FLOR Y TRUCO 2026
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                    Cine, Impacto y<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-700 italic pr-2">Sostenibilidad</span>
                </h1>

                <p className="text-md md:text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Nuestra hoja de ruta para financiar proyectos desde la Patagonia. Conectamos fondos culturales, alianzas corporativas e inversión privada en un modelo de trabajo colaborativo, seguro y verde.
                </p>

                <div className="pt-10 flex items-center justify-center gap-6">
                    <a href="#hub" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-800/20 border border-emerald-600/30 hover:bg-emerald-800/40 hover:border-emerald-500/50 text-emerald-300 font-medium transition-all backdrop-blur-md">
                        Ver Matriz de Financiamiento
                    </a>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <a href="#hub" className="text-neutral-600 hover:text-emerald-400 transition-colors">
                    <ChevronDown className="w-8 h-8" />
                </a>
            </div>
        </section>
    )
}
