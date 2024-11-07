import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./pages/Index";
import Layout from "./componentes/Layout";
import Detalhes from "./pages/Destalhes";
import Cadastro from "./pages/Cadastro";

function Routers() {
    
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/home" Component={home} /> 
                    <Route path="/produtos" Component={Initial} /> 
                    <Route path="/cadastro" Component={Cadastro} /> 
                    <Route path="/detalhes/:id?" Component={Detalhes} />
                    <Route path="/relatorio" Component={relatorio}/>
                    <Route path="/admin" Component={admin}/>
                    <Route path="/sair" Component={sair}/>
                    
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Routers;

const home = () => {
    return <div> Aqui é um teste componente fake react</div>
};

const relatorio = () => {
    return <div> RELATÓRIOS VAZIO</div>
}

const admin = () => {
    return <div>ADMIN VAZIO</div>
}

const sair = () => {
    return <div>SAIR VAZIO</div>
}