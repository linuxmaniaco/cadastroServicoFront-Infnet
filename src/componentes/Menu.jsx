import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../assets/styleGlobal.css';


function Menu() {
   return (
        <nav className="menu">

            <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                HOME
            </NavLink>

            <NavLink
                to="/produtos"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                PRODUTOS
            </NavLink>

            <NavLink
                to="/cadastro"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                CADASTRAR
            </NavLink>

            <NavLink
                to="/relatorio"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                RELATÓRIOS
            </NavLink>

            <NavLink
                to="/admin"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                ADMIN
            </NavLink>
            
            {/* <Link className="nav" to="/teste">ADMIN</Link> */}

            <NavLink
                to="/sair"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                SAIR
            </NavLink>

            {/* <Link className="nav" to="/teste">SAIR</Link> */}
        </nav>
   )
}

export default Menu;