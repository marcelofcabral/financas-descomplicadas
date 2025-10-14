import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import Title from "@/components/title";
import { useLogoutUserMutation, useUserDataQuery } from "@/features/auth/api/login";
import { LogOut, Mail, User } from "lucide-react";
import { useNavigate } from "react-router";

const getInitials = (name: string) => {
	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);
};

const Account: React.FC = () => {
	const { data: user, isLoading } = useUserDataQuery();
	const logoutMutation = useLogoutUserMutation();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logoutMutation.mutateAsync();
		navigate("/");
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-[60vh]">
				<Spinner className="w-8 h-8" />
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
				<Title variant="h2">Você não está autenticado</Title>
				<p className="text-muted-foreground">
					Faça login para acessar sua conta.
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<Title>Minha Conta</Title>
				<p className="text-muted-foreground text-lg">
					Gerencie suas informações pessoais
				</p>
			</div>

			{/* Profile Card */}
			<Card className="border-0 shadow-none bg-transparent">
				<CardHeader className="px-0">
					<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
						<Avatar className="w-24 h-24 border-2 border-primary/5">
							<AvatarImage src={user.avatar_url || ""} alt={user.full_name} />
							<AvatarFallback className="text-2xl font-semibold bg-primary/5 text-primary">
								{getInitials(user.full_name)}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1 space-y-1">
							<CardTitle className="text-2xl">{user.full_name}</CardTitle>
							<CardDescription className="text-base">
								Bem-vindo à plataforma Finanças Descomplicadas
							</CardDescription>
						</div>
					</div>
				</CardHeader>
			</Card>

			{/* Account Details */}
			<Card className="border-border/40 shadow-sm">
				<CardHeader>
					<CardTitle>Informações da Conta</CardTitle>
					<CardDescription>
						Suas informações pessoais e detalhes de contato
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						<div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
							<div className="bg-primary/5 text-primary p-2 rounded-lg mt-0.5">
								<User className="w-5 h-5" />
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium text-muted-foreground mb-1">
									Nome Completo
								</p>
								<p className="text-base font-semibold text-text">
									{user.full_name}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
							<div className="bg-secondary/5 text-secondary p-2 rounded-lg mt-0.5">
								<Mail className="w-5 h-5" />
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium text-muted-foreground mb-1">
									E-mail
								</p>
								<p className="text-base font-semibold text-text">
									{user.email}
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Actions */}
			<Card className="border-error/10 shadow-sm">
				<CardHeader>
					<CardTitle className="text-error">Zona de Perigo</CardTitle>
					<CardDescription>
						Ações irreversíveis relacionadas à sua conta
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button
						variant="destructive"
						className="w-full md:w-auto"
						onClick={handleLogout}
						disabled={logoutMutation.isPending}
					>
						{logoutMutation.isPending ? (
							<>
								<Spinner className="w-4 h-4 mr-2" />
								Saindo...
							</>
						) : (
							<>
								<LogOut className="w-4 h-4 mr-2" />
								Sair da Conta
							</>
						)}
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default Account;
