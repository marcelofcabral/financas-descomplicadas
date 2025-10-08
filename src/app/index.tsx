import "./app.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { Outlet } from "react-router";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { Toaster } from "@/components/ui/sonner";

function App() {
	return (
		<>
			<AppSidebar />
			<main className="w-full flex justify-center">
				<section className="w-[100%] md:w-[80%] py-5">
					<Outlet />
				</section>
				<Toaster />
			</main>
		</>
	);
}

export default App;
