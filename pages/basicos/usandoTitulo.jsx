import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal = "Pagina de Cadastro"
                secundario = "Incluir, alterar e excluir coisas"
            />
                  <Titulo 
                principal = "Pagina de Login"
                secundario = "Informe seu email e senha"
                pequeno
                //posso colocar pequeno = {true} tb funciona
            />
        </div>
    )
}