import styles from "./Register.module.css"

import { useState, useEffect } from "react"

const Register = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.heading}>Cadastre-se</h1>
            <p className={styles.text}>Crie seu usuário e compartilhe suas histórias!</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário" autoComplete="off" />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" required placeholder="Email do usuário" autoComplete="off" />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" autoComplete="off" />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha" autoComplete="off" />
                </label>

                <button className="btn">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register