import { RiErrorWarningLine } from "@remixicon/react";
import { useAuthentication } from "../../hooks/useAuthentication";

import styles from "./Register.module.css"

import { useState, useEffect } from "react"

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    // importing from hook
    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais");
            return;
        }

        const res = await createUser(user)

        console.log(res)
    }

    // substitui erro atual pelo erro do auth
    useEffect(() => {
        if(authError) { 
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1 className={styles.heading}>Cadastre-se</h1>
            <p className={styles.text}>Crie seu usuário e compartilhe suas histórias!</p>
            <form className={styles.formRegister} onSubmit={handleSubmit}>
                <label style={{marginTop:"8px"}}>
                    <span className={styles.title}>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário" autoComplete="off" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span className={styles.title}>Email:</span>
                    <input type="email" name="email" required placeholder="Email do usuário" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span className={styles.title}>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span className={styles.title}>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha" autoComplete="off" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>

                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disabled>Aguarde...</button>}

                {error && <p className="error">
                <RiErrorWarningLine style={{marginRight:"10px", color:"red"}} />
                {error}</p>}
            </form>
        </div>
    )
}

export default Register