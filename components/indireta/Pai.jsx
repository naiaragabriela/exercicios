import Filho from './Filho'

//pai tem uma instancia do filho

export default function Pai(props) {
    function falarComigo(param, param2, param3) {
        console.log(param, param2, param3)
        console.log('Alguem falou comigo')
    }
    return (
        <div>
           <Filho funcao={falarComigo}/> 
        </div>
    )
}