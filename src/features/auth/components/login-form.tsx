// biome-ignore-all lint: shadcn component

import { zodResolver } from "@hookform/resolvers/zod";
import { use } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../components/ui/form";
import { useLoginUser, useUserData } from "../api/login";
import { useUser } from "../context/user-context";
import { type LoginRequestData, loginFormSchema } from "../types/login";

const useLoginForm = () => {
	const form = useForm<LoginRequestData>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const loginUserMutation = useLoginUser();
	const userDataQuery = useUserData();

	const { setUser } = useUser();

	const onSubmit = async (values: LoginRequestData) => {
		try {
			const response = await loginUserMutation.mutateAsync(values);

			if (response.user) {
				const { data: userData } = await userDataQuery.refetch();

				console.log(userData);

				if (userData) {
					console.log(userData);
					setUser(userData);
					toast.success("Login realizado com sucesso!");
					form.reset();
				}
			}
		} catch (error) {
			toast.error("Erro ao realizar login. Tente novamente.");
			console.error("Login error:", error);
		}
	};

	return { form, onSubmit, isPending: loginUserMutation.isPending };
};

interface LoginFormProps extends React.ComponentProps<"div"> {
	onSignUpClick?: () => void;
}

export function LoginForm({ onSignUpClick, ...props }: LoginFormProps) {
	const { form, onSubmit, isPending } = useLoginForm();

	return (
		<Card className="bg-transparent border-none shadow-none p-0" {...props}>
			<CardHeader>
				<CardTitle>Faça login</CardTitle>
				<CardDescription>
					Insira seu e-mail e senha para acessar sua conta
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FieldGroup>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="email">Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="email"
												placeholder="m@exemplo.com"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<div className="flex items-center">
											<FormLabel htmlFor="password">Senha</FormLabel>
											<a
												href="#"
												className="text-text ml-auto inline-block text-sm underline-offset-4 hover:underline"
											>
												Esqueceu sua senha?
											</a>
										</div>
										<FormControl>
											<Input {...field} type="password" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FieldGroup>
								<Field>
									<Button type="submit" isLoading={isPending}>
										Login
									</Button>
									{/*<Button variant="outline" type="button">
										Login with Google
									</Button>*/}
									<FieldDescription className="px-6 text-center">
										Não tem uma conta?{" "}
										<Button
											variant="link"
											className="p-0"
											onClick={onSignUpClick}
										>
											Registre-se
										</Button>
									</FieldDescription>
								</Field>
							</FieldGroup>
						</FieldGroup>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
