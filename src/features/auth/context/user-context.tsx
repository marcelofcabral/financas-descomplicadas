import {
	createContext,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";
import type { Tables } from "../../../../database.types";

type User = Tables<"users">;

interface UserContext {
	user: User | null;
	setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContext | undefined>(undefined);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
