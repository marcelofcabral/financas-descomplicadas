import "./app.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { Toaster } from "@/components/ui/sonner";

function App() {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: we need this
	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname]);

	return (
		<>
			<AppSidebar />
			<main className="w-full flex justify-center">
				<section className="w-[100%] md:w-[80%] py-5">
					<Outlet />
				</section>
				<Toaster richColors theme="light" />
			</main>
		</>
	);
}

export default App;
