"use client";

import {
	BookOpen,
	Calculator,
	ChevronRight,
	DollarSign,
	GraduationCap,
	LibraryBig,
	LineChart,
	PieChart,
	Settings2,
	TrendingUp,
	Wallet,
} from "lucide-react";
import type * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import AuthDialog from "../features/auth/components/auth-dialog";
import { useUser } from "../features/auth/context/user-context";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";

// Finance education platform data
const data = {
	user: {
		name: "João Silva",
		email: "joao@exemplo.com",
		avatar: "/avatars/user.jpg",
	},
	teams: [
		{
			name: "Finanças Pessoais",
			logo: Wallet,
			plan: "Básico",
		},
		{
			name: "Investimentos",
			logo: TrendingUp,
			plan: "Avançado",
		},
		{
			name: "Educação Financeira",
			logo: GraduationCap,
			plan: "Premium",
		},
	],
	navMain: [
		{
			title: "Continuar Aprendizado",
			url: "#",
			icon: LineChart,
			// isActive: true,
			/*
			items: [
				{
					title: "Visão Geral",
					url: "#",
				},
				{
					title: "Metas Financeiras",
					url: "#",
				},
				{
					title: "Relatórios",
					url: "#",
				},
			],
      */
		},
		{
			title: "Aprender",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Conceitos Básicos",
					url: "#",
				},
				{
					title: "Investimentos",
					url: "#",
				},
				{
					title: "Planejamento",
					url: "#",
				},
				{
					title: "Análise de Risco",
					url: "#",
				},
			],
		},
		{
			title: "Calculadoras",
			url: "#",
			icon: Calculator,
			items: [
				{
					title: "Juros Compostos",
					url: "#",
				},
				{
					title: "Financiamento",
					url: "#",
				},
				{
					title: "Aposentadoria",
					url: "#",
				},
				{
					title: "Rentabilidade",
					url: "#",
				},
			],
		},
		{
			title: "Configurações",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "Perfil",
					url: "#",
				},
				{
					title: "Preferências",
					url: "#",
				},
				{
					title: "Notificações",
					url: "#",
				},
				{
					title: "Privacidade",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Orçamento Pessoal",
			url: "#",
			icon: DollarSign,
		},
		{
			name: "Carteira de Investimentos",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Planejamento Futuro",
			url: "#",
			icon: TrendingUp,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useUser();

	return (
		<Sidebar
			collapsible="icon"
			{...props}
			className="bg-background text-text border-border truncate"
		>
			<SidebarHeader className="border-b border-border">
				<a href="/#">
					<div className="flex items-center gap-3">
						<div className="flex min-h-8 min-w-8 items-center justify-center rounded-lg bg-primary">
							<DollarSign className="h-5 w-5 text-white" />
						</div>
						<div className="flex flex-col overflow-x-hidden">
							<span className="text-lg font-bold">Finanças</span>
							<span className="text-sm opacity-70">Descomplicadas</span>
						</div>
					</div>
				</a>
			</SidebarHeader>

			<SidebarContent className="space-y-6 text-text">
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem key="continuar-aprendendo">
							<SidebarMenuButton asChild>
								<a href="/#">
									<BookOpen />
									<span>Continuar Aprendendo</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<Collapsible
							key="modulos"
							asChild
							defaultOpen={false}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip="Módulos">
										<LibraryBig />
										<span>Módulos</span>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Conceitos Básicos</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Investimentos</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
						<Collapsible
							key="calculadora-financeira"
							asChild
							defaultOpen={false}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip="Calculadora Financeira">
										{<Calculator />}
										<span>Calculadora Financeira</span>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Juros Compostos</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Financiamento</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Empréstimo</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Aposentadoria</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">Rentabilidade</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<a href="/#">ROI</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-t border-border">
				{user ? (
					<NavUser
						user={{
							name: user.full_name,
							email: user.email,
							avatar: user.avatar_url || "",
						}}
					/>
				) : (
					<AuthDialog />
				)}
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
