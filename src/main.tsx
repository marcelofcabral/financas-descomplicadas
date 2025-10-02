import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import App from "./app";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
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
