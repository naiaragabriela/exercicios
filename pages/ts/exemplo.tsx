import React from "react";
import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Joao" idade={30} />
            <Pessoa nome="Maria" />
        </div>
    )
}