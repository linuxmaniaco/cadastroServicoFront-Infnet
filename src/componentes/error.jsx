import { Link } from "react-router-dom";

function PageError () {
    return (
        <div>
            <h2>Aluno não encontrado</h2>
            <h5>Não foi possível encontra o aluno buscado</h5>
            <br />
            <br />
            <Link to="/">Pagina inicial</Link>
        </div>
    )
}

export default PageError;