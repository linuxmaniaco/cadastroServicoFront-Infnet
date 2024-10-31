import React from "react";
// import { FaListUl } from "react-icons/fa";
// import { PiPlus } from "react-icons/pi";

function Menu() {
   return (
        <div className='menu'>
            <ul>
                <li>
                    <a href='#'>Produtos</a>
                </li>
                <li>
                    <a href='#'>PEDIDOS</a>
                </li>
                <li>
                    <a href='#'>RELATÓRIOS</a>
                </li>
                <li>
                    <a href='#'>ADMIN</a>
                </li>
                <li>
                    <a href='#'>SAIR</a>
                </li>
            </ul>
        </div> 
   )
}

export default Menu;

// import React from "react";
// import { FaListUl } from "react-icons/fa";
// import { PiPlus } from "react-icons/pi";

// function Menu({ show, act }) {
//    return (
//         <div className='menu'>
//           <ul>
//                 <li>
//                     <button onClick={() => act(!show)} className="topo"> 
//                         {show ? <PiPlus /> : <FaListUl />}
//                         {show ? 'Cadastro' : 'Produto'}
//                     </button>
//                 </li>
//               <li><a href='#'>PEDIDOS</a></li>
//               <li><a href='#'>RELATÓRIOS</a></li>
//               <li><a href='#'>ADMIN</a></li>
//               <li><a href='#'>SAIR</a></li>
//           </ul>
//         </div> 
//    )
// }

// export default Menu;