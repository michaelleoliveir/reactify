import { useContext, createContext } from "react";

// armanezamento global para os dados de autenticação
const AuthContext = createContext();

export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// acessar dados de autenticação
export function useAuthValue() {
    return useContext(AuthContext);
}