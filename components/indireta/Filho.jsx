export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>
                Falar com o Pai1
            </button>
            <button onClick={() => props.funcao("Passei no ENEM", "UHUlll", 1000)}>
                Falar com o Pai2
            </button>
        </div>
    )
}