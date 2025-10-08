import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Account: React.FC = () => {
	return (
		<div>
			<Avatar className="mx-auto size-20">
				<AvatarImage src="/avatars/user.jpg" alt="Avatar do Usuário" />
				<AvatarFallback>JS</AvatarFallback>
			</Avatar>
			<Input placeholder="E-mail" />
			<Input placeholder="Senha" type="password" />
			<Button className="mt-4 w-full">Atualizar Conta</Button>
		</div>
	);
};

export default Account;
