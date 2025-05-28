import React from 'react';

function Colors(props) {
    const color = props.color
    return (
        <div style = {{backgroundColor: color, height: 22, width: "100%", display: "flex", gap: "50px", alignItems: "center"}}>
            <button onClick={props.show}>Click</button>
            {props.contador}
        </div>
    );
}

export default Colors;