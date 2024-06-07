import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>
                <Link to="/profile">Ir p/ pag de perfil</Link>
            </div>
            <div>
                <Link to="/list">Ir p/ pag de lista</Link>
            </div>
        </div>
    );
}

export default Home;