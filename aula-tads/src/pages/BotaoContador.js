import { useState } from "react";
import Button from "./Button";
import './BotaoContador.css';


const BotaoContador = () => {

    const [contador, setContador] = useState(0);

    const handleCliqueButton = () => {
        setContador(contador + 1);
    }

    return (
        <div className="contadorContainer">
            <h2>{contador}</h2>
            <Button texto={"Contador+1"} onClickButton={handleCliqueButton} />
        </div>
    );
}

export default BotaoContador;