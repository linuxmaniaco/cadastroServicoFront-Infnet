import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./pages/Index";
import Container from "./componentes/Container";

function Routers() {
    
    return (
        <BrowserRouter>
            
                <Routes>
                    <Route path="/" Component={Initial} /> 
                    <Route path="/teste" Component={teste} /> 
                </Routes>
            
        </BrowserRouter>
    );
}

export default Routers;

const teste = () => {
    return <div> Aqui é um teste componente fake react</div>
};