import React, {useState} from "react";
import "./Login.css"

import Title from "./components/Title/Title"
import Label from "./components/Label/Label";
import Input from "./components/input/Input";

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErro, setPasswordError] = useState(false);

    function handleChange(name, value) {
        if(name === "usuario"){
            setUser(value)

        } else {
            setPassword(value)
        }
    }

    console.log("usuario:", user);
    console.log("password:", password)

    function handleSubmit(){
        let account = {user, password }
        if(account) {
            console.log("account:", account)
        }
    }
    return(
        <div className="login-container">
            <Title text="soy un titulo"/>
            <Label text="Usuario"/>
            <Input 
            attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: "ingrese su usuario"
            }}
            
            handleChange={handleChange}
            param={passwordErro}
            />
            <Label text="Contraseña"/>
            <Input 
            attribute={{
                id: "contraseña",
                name: "contraseña",
                type: "password",
                placeholder: "ingrese su contraseña"
            }}
            
            handleChange={handleChange}
            />
            <button onClick={handleSubmit}>
                Ingresar
            </button>

        </div>
    )
};

export default Login;
