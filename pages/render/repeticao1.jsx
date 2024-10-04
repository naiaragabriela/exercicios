export default function Repeticao1() {
    const listaAprovados = [
        'Bia',
        'Carlos',
        'Daniel',
        'João',
        'Laura',
        'Maria',
    ]

   // primeiro medo de fazer  
    function renderizarLista() {
        const itens = []
            for (let i=0; i< listaAprovados.length; i++) {
                itens.push(<li key={i}>{listaAprovados[i]}</li>)
            }
        
        return itens
        /*(
            <>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
            </>
        )*/
    }

    return (
        <ul>
           { renderizarLista() }

           { renderizarLista2() }
        </ul>
    )

    //segundo modo de fazer
    function renderizarLista2() {
        
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }   


}