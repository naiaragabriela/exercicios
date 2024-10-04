function acao() {
    console.log('acao');
}



export default function botao() {
    function acao2() {
        console.log('acao2')
    }

    function acao5(e) {
        console.log(e)
    }
    return (
        <div>
            <input type="text" onChange={e => console.log(e.target.value)} />
            <button onClick={acao}>Click</button>
            <button onClick={acao2}>Click2</button>
            <button onClick={function () { console.log('acao3')}}>
                Click3
            </button>
            <button onClick={() => console.log('acao4')}>
                Click4
            </button>
            <button onClick={acao5}>
                Click5
            </button>
            <button onClick={e => acao5(e.type)}>
                Click6
            </button>
        </div>
    )
}