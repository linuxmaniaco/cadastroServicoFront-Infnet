import Container from "./Container";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

function Layout({ children }) {
    return (
        <>
            <Container>
                <Cabecalho />
                <Menu />
                <main>{children}</main>
                <Rodape />
            </Container>
        </>
    );
}

export default Layout;