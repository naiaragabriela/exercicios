import NumeroDisplay from "../../components/NumeroDisplay"
import { useState } from "react"

export default function contador() {
    const [valor, setValor] = useState(0) 

    const alterarValor = () => {
        setValor(valor + 1) 
    }
    const diminuirValor = () => {
        setValor(valor - 1)
    }
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",}}>
        <h1>Contador</h1>
        <NumeroDisplay valor={valor} />
        <div>
            <button onClick={alterarValor}> + </button>
            <button onClick={diminuirValor}> - </button>
        </div>
        </div>
    )
}