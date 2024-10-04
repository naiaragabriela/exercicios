export default function Lista(props) {
    return (
        <>
            <h1>Lista de Algo</h1>
            <ul style={{
                padding:0,
                listStyle: "none"
            }}>
                {props.children}
            </ul>
        </>
       
    )
}