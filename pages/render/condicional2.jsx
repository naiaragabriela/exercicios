import If from "../../components/If";


export default function condicional2() {
    const numero = 3;
    
    return (
        <div>
            <If test={numero % 2 === 0}>
                <h1>O número é par</h1>
            </If>
            <If test={numero % 2 === 1}>
                <h1>O número {numero} é impar</h1>
            </If>

        </div>
    )
}