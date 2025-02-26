import { RiErrorWarningLine } from "@remixicon/react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Login.module.css"

import { useState, useEffect } from "react"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // importing from hook
    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password
        }

        const res = await login(user)
    }

    // substitui erro atual pelo erro do auth
    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.login}>
            <h1 className={styles.heading}>Entrar</h1>
            <p className={styles.text}>Faça o login para poder utilizar o sistema!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className={styles.title}>Email:</span>
                    <input type="email" name="email" required placeholder="Email do usuário" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span className={styles.title}>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                {!loading && <button className="btn">Entrar</button>}
                {loading && <button className="btn" disabled>Aguarde...</button>}

                {error && <p className="error">
                    <RiErrorWarningLine style={{ marginRight: "10px", color: "red" }} />
                    {error}</p>}
            </form>
        </div>
    )
}

export default Login