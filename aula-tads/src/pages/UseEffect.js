import { useEffect, useState } from "react";

const UseEffect = () => {
    const [myState, setMyState] = useState();
    const [myState2, setMyState2] = useState();


    //att do componente
    useEffect(() => {
        console.log("useEffect executado na montagem e att do componente");
    }, [myState]);

    //Montagem do componente
    useEffect(() => {
        console.log("useEffect executado na montagem do componente");
    })

    //Desmontagem do componente
    useEffect(() => {


        return () => {
            console.log("Fç executada na desmontagem do componente");
        }
    })

    const updateMyState = () => {
        setMyState("meu novo myState");
    };

    return (<div>
        <button onClick={updateMyState}>Disparar UseEffect
        </button>
    </div>

    );
}

export default UseEffect;