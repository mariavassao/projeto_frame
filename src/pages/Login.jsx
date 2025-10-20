export function Login() {
    return (
        <>
        <div className="container-filho">
            <h1>Login</h1>
            <form action="cadastro.php" method="post">
                <div className="campo">
                    <label htmlFor="iemail">E-mail: </label>
                    <input type="email" name="email" id="iemail" required placeholder="Digite seu e-mail" />
                </div>

                <div className="campo">
                    <label htmlFor="isenha">Senha: </label>
                    <input type="password" name="senha" id="isenha" required placeholder="Digite sua senha" maxLength={'15'} />
                </div>
                <button type="button">Entrar</button>
            </form>
        </div>
        </>
    )
}