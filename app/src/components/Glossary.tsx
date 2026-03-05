import { BookMarked } from 'lucide-react';

const terms = [
    {
        term: "Inversión Extranjera Directa IED",
        category: "Finanzas",
        definition: "Dinero proveniente de otros países que ingresa a Chile para financiar proyectos locales. El programa Ibermedia obliga a atraer este tipo de capital mediante coproducciones internacionales.",
    },
    {
        term: "EBITDA",
        category: "Finanzas",
        definition: "Acrónimo en inglés que significa los 'beneficios antes de intereses, impuestos, depreciación y amortización'. Hablando en simple: es la plata dura y real que le queda a la productora después de pagar todas las cuentas operativas del mes.",
    },
    {
        term: "VPN (Valor Presente Neto)",
        category: "Finanzas",
        definition: "Fórmula matemática que calcula cuánta plata valdría hoy un proyecto que se va a explotar a lo largo de muchos años en el futuro. Sirve para ponerle un precio justo al catálogo de películas de la productora.",
    },
    {
        term: "IP (Propiedad Intelectual)",
        category: "Legal/Comercial",
        definition: "Los derechos legales y comerciales sobre una obra creativa. Retener un porcentaje del IP permite seguir cobrando regalías cada vez que la película se transmite por streaming o televisión durante décadas.",
    },
    {
        term: "B2B (Business to Business)",
        category: "Comercial",
        definition: "Modelo de negocios donde la productora le vende servicios a otras grandes empresas (ej. grabar avances de obra para salmoneras, mineras o proyectos de energía), no al cliente o consumidor final de la calle.",
    },
    {
        term: "Ley Valdés (Certificado N°40)",
        category: "Tributario",
        definition: "Ley de Donaciones Culturales. Permite a empresas privadas (mecenas) entregar dinero a la productora y, a cambio, descontar hasta el 50% de ese dinero de los impuestos obligatorios que deben pagar al Estado a fin de año.",
    },
    {
        term: "D.L. 889",
        category: "Tributario/Laboral",
        definition: "Decreto Ley de incentivo para Zonas Extremas. El Estado entrega a las empresas una bonificación o reintegro económico del 17% sobre los sueldos imponibles que se le pagan a los trabajadores que residen en la Patagonia.",
    },
    {
        term: "IFI (Iniciativa de Fomento Integrada CORFO)",
        category: "Subsidios",
        definition: "Subsidio de CORFO bajo el formato 'Cash Rebate'. Significa que la productora gasta su dinero en la región de Aysén, y luego el Estado le devuelve hasta un 40% de esas facturas y boletas rendidas.",
    },
    {
        term: "Apalancamiento",
        category: "Estrategia",
        definition: "Usar un primer fondo (como un capital semilla del MINCAP) para financiar la mitad del proyecto, lo cual permite 'apalancar' (ganar respaldo y confianza) para ir a pedir la otra mitad a inversores privados más grandes.",
    },
    {
        term: "Retainer (Suscripción B2B)",
        category: "Comercial",
        definition: "Un contrato fijo donde una empresa paga una mensualidad a la productora a cambio de un paquete constante de servicios (por ejemplo, 2 vuelos de dron al mes). Garantiza flujo de caja estable que no depende de ganar concursos públicos.",
    },
    {
        term: "Compliance",
        category: "Legal",
        definition: "Estar al día y cumplir estrictamente con todas las leyes, giros comerciales del Servicio de Impuestos Internos y normativas del Ministerio. Si el Compliance falla, el Estado bloquea la entrega de fondos ganados.",
    },
    {
        term: "Economía Naranja",
        category: "Estrategia",
        definition: "Conjunto de actividades económicas que transforman las ideas y el talento cultural (como el cine) en bienes y servicios comerciales. Genera riqueza a partir de la propiedad intelectual.",
    },
    {
        term: "Green Finances (Finanzas Verdes)",
        category: "Inversión",
        definition: "Mecanismos financieros (como bonos o fondos) que buscan generar un impacto ambiental positivo junto con un retorno económico. Aplica a documentales de conservación en Aysén.",
    },
    {
        term: "Cash Rebate",
        category: "Finanzas",
        definition: "Literalmente 'reembolso de efectivo'. Es cuando un gobierno o institución (como CORFO) te devuelve un porcentaje del dinero que ya gastaste en su territorio luego de rendir facturas.",
    },
    {
        term: "PEDZE (Plan Especial Zonas Extremas)",
        category: "Políticas Públicas",
        definition: "Programa gubernamental de financiamiento enfocado a largo plazo (2026-2036) diseñado para potenciar económicamente a regiones apartadas como Aysén.",
    },
    {
        term: "OPEX (Gastos Operacionales)",
        category: "Contabilidad",
        definition: "Dinero necesario para el funcionamiento diario y continuo de la productora (arriendos, sueldos fijos, luz, contabilidad, servidores).",
    },
    {
        term: "CAPEX (Gastos de Capital)",
        category: "Contabilidad",
        definition: "Dinero invertido en comprar activos físicos a largo plazo, como cámaras 8K, computadores de edición y drones de alta gama.",
    },
    {
        term: "FECIPA",
        category: "Hito Histórico",
        definition: "Festival de Cine de la Patagonia. Funciona como un 'Track Record' (historial de éxito probado) que valida frente a inversores los 11 años de experiencia comercial ininterrumpida de Flor y Truco.",
    },
    {
        term: "FNDR 8% (Fondo Regional)",
        category: "Subsidios",
        definition: "Fondo Nacional de Desarrollo Regional destinado específicamente a organizaciones sin fines de lucro (ONGs). La productora se asocia a estas ONGs para prestarles el servicio de ejecución.",
    },
    {
        term: "Track Record",
        category: "Estrategia Comercial",
        definition: "El historial de desempeño de la empresa. Para un inversionista grande, 11 años de 'Track Record' demuestran que la productora no es un riesgo emergente, sino una inversión segura y madura.",
    }
];

export default function Glossary() {
    return (
        <section id="glosario" className="scroll-mt-32">
            <div className="mb-12 border-l-2 border-neutral-600 pl-6">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-100 flex items-center gap-4">
                    Glosario <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">Técnico</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    Diccionario de términos frecuentes utilizados a lo largo del Ecosistema Audiovisual y Financiero.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {terms.map((item, index) => (
                    <div key={index} className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
                        <div className="flex items-center gap-2 mb-3">
                            <BookMarked className="w-4 h-4 text-neutral-500" />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded-full">
                                {item.category}
                            </span>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-200 transition-colors">
                            {item.term}
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            {item.definition}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
