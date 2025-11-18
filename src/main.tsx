import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import App from "./app";
import Account from "./app/pages/account";
import Acoes from "./app/pages/acoes";
import Aposentadoria from "./app/pages/aposentadoria";
import BDRs from "./app/pages/bdrs";
import ContinuarAprendendo from "./app/pages/continuar-aprendendo";
import Emprestimo from "./app/pages/emprestimo";
import ETFs from "./app/pages/etfs";
import FIIs from "./app/pages/fiis";
import Financiamento from "./app/pages/financiamento";
import GerenciarDinheiro from "./app/pages/gerenciar-dinheiro";
import Home from "./app/pages/home";
import JurosCompostos from "./app/pages/juros-compostos";
import NegociacaoDividas from "./app/pages/negociacao-dividas";
import Rentabilidade from "./app/pages/rentabilidade";
import ReservaEmergencia from "./app/pages/reserva-emergencia";
import ROI from "./app/pages/roi";
import TaxasJuros from "./app/pages/taxas-e-juros";
import TesouroDireto from "./app/pages/tesouro-direto";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/financas-descomplicadas",
		Component: App,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "continuar-aprendendo",
				Component: ContinuarAprendendo,
			},
			{
				path: "account",
				Component: Account,
			},
			{
				path: "modulos",
				children: [
					{
						path: "conceitos-basicos/taxas-e-juros",
						Component: TaxasJuros,
					},
					{
						path: "conceitos-basicos/gerenciar-dinheiro",
						Component: GerenciarDinheiro,
					},
					{
						path: "conceitos-basicos/negociacao-dividas",
						Component: NegociacaoDividas,
					},
					{
						path: "conceitos-basicos/reserva-emergencia",
						Component: ReservaEmergencia,
					},
					{
						path: "formas-investimento/acoes",
						Component: Acoes,
					},
					{
						path: "formas-investimento/bdrs",
						Component: BDRs,
					},
					{
						path: "formas-investimento/etfs",
						Component: ETFs,
					},
					{
						path: "formas-investimento/fiis",
						Component: FIIs,
					},
					{
						path: "formas-investimento/tesouro-direto",
						Component: TesouroDireto,
					},
				],
			},
			{
				path: "calculadora-financeira",
				children: [
					{
						path: "juros-compostos",
						Component: JurosCompostos,
					},
					{
						path: "financiamento",
						Component: Financiamento,
					},
					{
						path: "emprestimo",
						Component: Emprestimo,
					},
					{
						path: "aposentadoria",
						Component: Aposentadoria,
					},
					{
						path: "rentabilidade",
						Component: Rentabilidade,
					},
					{
						path: "roi",
						Component: ROI,
					},
				],
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
	<SidebarProvider>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</SidebarProvider>,
);
