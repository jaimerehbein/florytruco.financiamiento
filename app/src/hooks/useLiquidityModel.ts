import { useState, useMemo } from 'react';

export const useLiquidityModel = () => {
    const [ingresos, setIngresos] = useState(150000000);
    const [gastosNominales, setGastosNominales] = useState(100000000);
    const [saldoAnterior, setSaldoAnterior] = useState(25000000);
    const [porcionPersonalAysen, setPorcionPersonalAysen] = useState(40000000);

    const calculoBeneficios = useMemo(() => {
        // 1. D.L. 889: Bonificación del 17% sobre remuneraciones imponibles en Aysén
        const bonificacionDL889 = porcionPersonalAysen * 0.17;

        // 2. PEDZE 2026-2036: Reducción estimada de costos logísticos (ej: 5% ahorro logístico asumido)
        const factorPEDZE = 0.05;
        const ahorroLogistico = gastosNominales * factorPEDZE;

        // Gasto Real ajustado por beneficios de Coyhaique/Aysén
        const gastosReales = gastosNominales - bonificacionDL889 - ahorroLogistico;

        // Fórmula de Liquidez Requerida: Liquidez(t) = Ingresos(t) - Gastos(t) + Saldo(t-1)
        const liquidezProyectada = ingresos - gastosReales + saldoAnterior;

        return {
            bonificacionDL889,
            ahorroLogistico,
            gastosReales,
            liquidezProyectada,
            ventajaGeograficaTotal: bonificacionDL889 + ahorroLogistico
        };
    }, [ingresos, gastosNominales, saldoAnterior, porcionPersonalAysen]);

    return { setIngresos, setGastosNominales, setSaldoAnterior, setPorcionPersonalAysen, ingresos, gastosNominales, saldoAnterior, porcionPersonalAysen, ...calculoBeneficios };
};
