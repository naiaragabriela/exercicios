import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item 01"/>
                <Item conteudo="Item 02"/>
            </Lista>
        </div>
    )
}