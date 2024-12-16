import {userParmas} from "react-router-dom";

export default function Alterar(){

    const{id} = userParmas();

    return(
        <h1>página Alterar{id}</h1>
    );
}