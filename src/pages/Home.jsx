import { useState } from "react";

//Exporta a funcao para quando outro arquivo usar o import
export function Home(){
    //Aqui vamo criar um estado que guarda todos os itens do cronograma, primeiro nome recebido será o que guarda os valores dos inputs, o set é para atualizar o estado da array, useState incializa com a lista vazio;
    const [cronogramas, setCronogramas] = useState([]);

    // o showForm é um estado que controla a visibilidade do nosso formulario, é do tipo boolean(true ou false), o uso do set para alterar o valor do estado;
    const [showForm, setShowForm] = useState(false);

    // cada input é controlado pelo valor do estado;
    const [titulo, setTitulo] = useState(""); 
    const [materia, setMateria] = useState("");
    const [inicio, setInicio] = useState("");
    const [termino, setTermino] = useState("");
    const [descricao, setDescricao] = useState ("");

    //funcao para mostrar ou ocultar o formulario, inverte o valor do showForm, o toggleForm é a funcao o set é utilizado como um ouvente do useState pelo oq eu entendi, o ! é usado para false se nao me engano;

    const toggleForm = () => setShowForm(!showForm);

    //funcao para salvar o formulario;
    const salvarFormulario = () => {
        // vamos criar o objeto para hospedar os vaores atuais dos inputs;
        const novoItem = {titulo, materia, inicio, termino, descricao};

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
                    {/*value={titulo } mostra o valor atual do estado, onChage atualiza o estado quando o usuario digita;*/}
                    <input 
                        value={titulo}
                        onChange={e=> setTitulo(e.target.value)}
                        placeholder="Titulo"
                    />

                    <input 
                        value={materia}
                        onChange={e=> setMateria(e.target.value)}
                        placeholder="materia"
                    />

                    <input 
                        type="date"
                        value={inicio}
                        onChange={e=> setInicio(e.target.value)}
                        placeholder="Inicio"
                    />

                    <input 
                        type="date"
                        value={termino}
                        onChange={e=> setTermino(e.target.value)}
                        placeholder="TErmino"
                    />

                    <textarea
                        value={descricao}
                        onChange={e=> setDescricao(e.target.value)}
                        placeholder="Descricao"
                    ></textarea>

                    <button onClick={salvarFormulario}>Salvar</button>

                    {/*container q vai exibir os itens do cronograma, a seguir vai percorrer o array e renderizar cada item*/}
                    <div className="container-itens">
                        {cronogramas.map((item, index) =>
                            <div key={index} className="item-cronograma">
                                <h2>{item.titulo}</h2>
                                <p>Materia: {item.materia}</p>
                                <p>Inicio: {item.incio}</p>
                                <p>Termino: {item.termino}</p>
                                <p>Descricao: {item.descricao}</p>
                            </div>
                        )}
                    </div>

                </div>
            )}

        </div>
    );
};