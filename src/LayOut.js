import {Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
           
                    <Nav.Link as={Link} to="/Tesztek">Tesztek</Nav.Link>
                    </li>
                   
         
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
}

export default Layout;