"use client";

import {
	BookOpen,
	Calculator,
	ChevronRight,
	DollarSign,
	LibraryBig,
} from "lucide-react";
import type * as React from "react";
import { Link } from "react-router";

import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { useUserDataQuery } from "@/features/auth/api/login";
import AuthDialog from "../features/auth/components/auth-dialog";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { Spinner } from "./ui/spinner";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { data: user, isLoading } = useUserDataQuery();

	return (
		<Sidebar
			collapsible="icon"
			{...props}
			className="bg-background text-text border-border truncate"
		>
			<SidebarHeader className="border-b border-border">
				<Link to="/financas-descomplicadas/">
					<div className="flex items-center gap-3">
						<div className="flex min-h-8 min-w-8 items-center justify-center rounded-lg bg-primary">
							<DollarSign className="h-5 w-5 text-white" />
						</div>
						<div className="flex flex-col overflow-x-hidden">
							<span className="text-lg font-bold">Finanças</span>
							<span className="text-sm opacity-70">Descomplicadas</span>
						</div>
					</div>
				</Link>
			</SidebarHeader>

			<SidebarContent className="space-y-6 text-text">
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem key="continuar-aprendendo">
							<SidebarMenuButton asChild>
								<Link to="/financas-descomplicadas/continuar-aprendendo">
									<BookOpen />
									<span>Continuar Aprendendo</span>
								</Link>
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
										<Collapsible
											key="conceitos-basicos"
											asChild
											defaultOpen={false}
											className="group/collapsible-nested"
										>
											<SidebarMenuSubItem>
												<CollapsibleTrigger asChild>
													<SidebarMenuSubButton className="select-none">
														Conceitos Básicos
														<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible-nested:rotate-90" />
													</SidebarMenuSubButton>
												</CollapsibleTrigger>
												<CollapsibleContent>
													<SidebarMenuSub>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton asChild>
																<Link to="/financas-descomplicadas/modulos/conceitos-basicos/taxas-e-juros">
																	Taxas e Juros
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton
																asChild
																className="h-auto py-2"
															>
																<Link
																	to="/financas-descomplicadas/modulos/conceitos-basicos/gerenciar-dinheiro"
																	className="whitespace-normal break-words leading-tight"
																>
																	Como gerenciar seu dinheiro
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton
																asChild
																className="h-auto py-2"
															>
																<Link
																	to="/financas-descomplicadas/modulos/conceitos-basicos/negociacao-dividas"
																	className="whitespace-normal break-words leading-tight"
																>
																	Negociação de dívidas
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													</SidebarMenuSub>
												</CollapsibleContent>
											</SidebarMenuSubItem>
										</Collapsible>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="/financas-descomplicadas/modulos/conceitos-basicos/reserva-emergencia">
													Reserva de Emergência
												</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<Collapsible
											key="formas-investimento"
											asChild
											defaultOpen={false}
											className="group/collapsible-nested"
										>
											<SidebarMenuSubItem>
												<CollapsibleTrigger asChild>
													<SidebarMenuSubButton className="select-none">
														Formas de Investimento
														<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible-nested:rotate-90" />
													</SidebarMenuSubButton>
												</CollapsibleTrigger>
												<CollapsibleContent>
													<SidebarMenuSub>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton asChild>
																<Link to="/financas-descomplicadas/modulos/formas-investimento/acoes">
																	Ações
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton asChild>
																<Link to="/financas-descomplicadas/modulos/formas-investimento/bdrs">
																	BDRs
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton asChild>
																<Link to="/financas-descomplicadas/modulos/formas-investimento/etfs">
																	ETFs
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton asChild>
																<Link to="/financas-descomplicadas/modulos/formas-investimento/fiis">
																	FIIs
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
														<SidebarMenuSubItem>
															<SidebarMenuSubButton asChild>
																<Link to="/financas-descomplicadas/modulos/formas-investimento/tesouro-direto">
																	Tesouro Direto
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													</SidebarMenuSub>
												</CollapsibleContent>
											</SidebarMenuSubItem>
										</Collapsible>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="#">Gestão de Ativos</Link>
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
												<Link to="#">Juros Compostos</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="#">Financiamento</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="#">Empréstimo</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="#">Aposentadoria</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="#">Rentabilidade</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton asChild>
												<Link to="#">ROI</Link>
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
				{isLoading ? (
					<Spinner className="m-auto" />
				) : user ? (
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
