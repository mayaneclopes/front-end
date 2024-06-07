import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Nome: Mayane</p>
            <p>Idade: 27</p>
            <p>Email: teste@gmail.com</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default Profile;