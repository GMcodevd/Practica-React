import React, { useState } from 'react';

function HookContador(props) {
    const [suma, setSuma] = useState(0);

    const sumar = () =>{
        setSuma(suma + 1);
    }
    return (
        <div style={{height: 22, width: "100%", display: "flex", gap: "50px",alignItems: "center"}}>
            <button onClick={()=>sumar()}>Click para aumentar</button>
            <span style={{fontSize: 20, height: 20, alignItems: "center", lineHeight: "1"}}>{suma}</span>
        </div>
    );
}

export default HookContador;