import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { UserProvider } from "@/features/auth/context/user-context";
import App from "./app";
import CalculadoraFinanceira from "./app/pages/calculadora-financeira";
import ContinuarAprendendo from "./app/pages/continuar-aprendendo";
import Home from "./app/pages/home";

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
				path: "modulos",
				children: [
					{
						path: "conceitos-basicos",
					},
					{
						path: "investimentos",
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
				<UserProvider>
					<RouterProvider router={router} />
				</UserProvider>
			</QueryClientProvider>
		</SidebarProvider>
	</StrictMode>,
);
