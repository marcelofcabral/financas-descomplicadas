import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import App from "./app";
import Account from "./app/pages/account";
import Acoes from "./app/pages/acoes";
import BDRs from "./app/pages/bdrs";
import CalculadoraFinanceira from "./app/pages/calculadora-financeira";
import ContinuarAprendendo from "./app/pages/continuar-aprendendo";
import ETFs from "./app/pages/etfs";
import FIIs from "./app/pages/fiis";
import Home from "./app/pages/home";
import TaxasJuros from "./app/pages/taxas-e-juros";
import TesouroDireto from "./app/pages/tesouro-direto";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
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
						Component: () => <div>Como gerenciar seu dinheiro</div>,
					},
					{
						path: "conceitos-basicos/negociacao-dividas",
						Component: () => <div>Negociação de dívidas</div>,
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
					{
						path: "investimentos",
						Component: () => <div>Investimentos</div>,
					},
				],
			},
			{
				path: "calculadora-financeira",
				Component: CalculadoraFinanceira,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SidebarProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</SidebarProvider>
	</StrictMode>,
);
