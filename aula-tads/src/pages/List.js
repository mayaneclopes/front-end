import { useNavigate } from "react-router-dom";

const List = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Hobbies: ler, jogar</p>
            <p>Comidas: lasanha, pastel</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default List;