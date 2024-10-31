import { FaListUl } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";

function MenuProduto({ show, act }){

    return(
        <div className="topo">
            <button onClick={() => act(!show)} className="btn">
                {show ? <PiPlus /> : <FaListUl />}
                {show ? 'Cadastro Produto' : 'Listagem'}
            </button>
        </div>
    )
}

export default MenuProduto