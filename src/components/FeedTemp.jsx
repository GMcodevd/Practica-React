import React from 'react';
import Colors from './Colors';
import HookContador from './HookContador';

function Feed(props) {
    const showAlert = () =>{
        alert("Alerta!")
    }
    const Hello = (props) => {
        return <h2>{props.title}</h2>
    };

    return (
        <div style={style.feed}>
            <img src={props.img} alt="" height="200" width="300" />
            <h3 style={style.title}>{props.title}</h3>
            <p>{props.detail}</p>
            <Colors show = {showAlert} color={props.color} contador= {<HookContador></HookContador>}></Colors>
            <Hello title = "Bienvenido desde otro componente!"/>
        </div>
    );

}
const style = {
    feed: {
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        margin: "10px",
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "",
    },
    title: {
        fontSize: 24,
    },
    detail: {
        fontSize: 18
    }
}
export default Feed;