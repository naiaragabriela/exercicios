import Filho from './Filho';

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Joao" familia={props.familia} />
            <Filho nome="Maria" familia={props.familia} />
            <Filho nome="Daniel" {...props} />
            <Filho {...props} nome="Daniel"  />

        </div>
    )
}