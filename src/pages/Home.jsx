import { useState } from "react";

//Exporta a funcao para quando outro arquivo usar o import
export function Home(){
    //Aqui vamo criar um estado que guarda todos os itens do cronograma, primeiro nome recebido será o que guarda os valores dos inputs, o set é para atualizar o estado da array, useState incializa com a lista vazio;
    const [cronogramas, setCronogramas] = useState([]);

    // o showForm é um estado que controla a visibilidade do nosso formulario, é do tipo boolean(true ou false), o uso do set para alterar o valor do estado;
    const [showForm, setShowForm] = useState(false);

    // cada input é controlado pelo valor do estado;
    const [titulo, setTtitulo] = useState(""); 
    const [materia, setMateria] = useState("");
    const [incio, setInicio] = useState("");
    const [termino, setTermino] = useState("");
    const [descricao, setDescricao] = useState ("");

    //funcao para mostrar ou ocultar o formulario, inverte o valor do showForm, o toggleForm é a funcao o set é utilizado como um ouvente do useState pelo oq eu entendi, o ! é usado para false se nao me engano;

    const toggleForm = () => setShowForm(!showForm);

    //funcao para salvar o formulario;
    const salvarFormulario = () => {
        // vamos criar o objeto para hospedar os vaores atuais dos inputs;
        const novoItem = {titulo, materia, incio, termino, descricao};

        //agora vamos dividir para entender => set usado para utilizar o hook useState => [...] é um operador spread, ele copia os itens antigos e adiciona o novo;

        setCronogramas([...cronogramas, novoItem]);

        // aqui volta para o estado inicial = vazio

        setTtitulo("");
        setMateria("");
        setInicio("");
        setTermino("");
        setDescricao("");

    };

    //JSX  sera renderizado pelo componente;
    // tudo dentro o return() é HTML misturado com js(JXS);

    return(
        <div className="container-pai">
            <h1>Meu cronograma</h1>

            {/*Botao para criar o cronograma, o onClick chama a funcao toggleForm quando clica, é o ouvente no React*/}
            <button onClick={toggleForm}>Criar Cronograma</button>
            {/*Condicional do formulario, se show for true o formulario é exibido  */}

            {showForm && (
                <div className="formulario">
                    
                </div>
            )}

        </div>
    )
}