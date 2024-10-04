import ContadorDisplay from "@/components/ContadorDisplay"
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
        <ContadorDisplay valor={valor} />
        <div>
            <button onClick={alterarValor}> + </button>
            <button onClick={diminuirValor}> - </button>
        </div>
        </div>
    )
}