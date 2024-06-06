import { useEffect, useState } from 'react';
import './SimulateApi.css';

const infoCampoMourao = {
    dataCriacao: '10/10/1947',
    nome: 'Campo Mourão',
    qtdHabitantes: 99000,
    universidades: ["Integrado", "UTFR", "UNESPAR", 'UNICAMPO', "Unicesumar", "Unoeste"]
}

const SimulateApi = () => {

    const [info, setInfo] = useState()
    console.log(info);


    useEffect(() => {
        //simulação de espera pela resposta do backend
        setTimeout(() => {
            setInfo(infoCampoMourao);
        }, 1000)
    }, []);

    return (
        <div className='container'>
            {info ? <div>
                <h3>{info.nome}</h3>
                <h4>{info.dataCriacao}</h4>
                <h4>{info.qtdHabitantes}</h4>
                {info.universidades.map(universidade => (
                    <div>{universidade}</div>
                ))}
            </div> : null}
        </div>);
}

export default SimulateApi;