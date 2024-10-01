function gerarLista() {
    const lista = [
        <span> 1, </span>,
        <span> 2, </span>,
        <span> 3, </span>,
        <span> 4, </span>,
        <span> 5. </span>,
    ]
    
    return lista
}



export default function lista2() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}

