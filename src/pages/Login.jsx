export function Login() {
    return (
        <>
        <div className="container">
            <form className="login" action="cadastro.php" method="post">
                <label htmlFor="iemail">E-mail: </label>
                <input type="email" name="email" id="iemail" required placeholder="Digite seu e-mail" />

                <label htmlFor="isenha">Senha: </label>
                <input type="password" name="senha" id="isenha" required placeholder="Digite sua senha" maxLength={'15'} />
                <button type="button">Entrar</button>
            </form>
        </div>
        </>
    )
}