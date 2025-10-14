import { User } from "lucide-react";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../../../components/ui/dialog";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../../../components/ui/sidebar";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";

const AuthDialog: React.FC = () => {
	const [authType, setAuthType] = useState<"login" | "signup">("login");
	const [isOpen, setIsOpen] = useState(false);

	const form =
		authType === "login" ? (
			<LoginForm
				onLoginFinish={() => setIsOpen(false)}
				onSignUpClick={() => setAuthType("signup")}
			/>
		) : (
			<SignupForm
				onSignupFinish={() => setIsOpen(false)}
				onLoginClick={() => setAuthType("login")}
			/>
		);

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton>
					<Dialog open={isOpen} onOpenChange={setIsOpen}>
						<DialogTrigger asChild>
							<div className="flex items-center justify-center gap-x-1 ml-[-4px]">
								<User />
								<p className="truncate text-sm font-bold">
									Faça login ou registre-se!
								</p>
							</div>
						</DialogTrigger>
						<DialogContent>
							<DialogTitle className="hidden">
								{authType === "login" ? "Login" : "Cadastro"}
							</DialogTitle>
							{form}
						</DialogContent>
					</Dialog>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

export default AuthDialog;
