import React, { useState, useEffect } from "react";
import ImageLogo from '../Images/logo.png';
import { useNavigate, Link} from "react-router-dom";
//import "../../../node_modules/react-custom-alert/dist/index.css";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
//import withReactContent from "sweetalert2-react-content";
import { auth, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function Login(){
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const Swal = require('sweetalert2')

    useEffect(()=> {
        if(loading){
            return
        }
        if(user) {
            navigate('/home')
            }
    }, [user, loading]);

    return( <>
        <div className="h-screen flex bg-azul">
            <div className="w-full max-w-md m-auto bg-azul shadow-default py-10 px-16">
                <div className="mb-4">
                    <img className={"img"} src={ImageLogo} alt="" />
                    <h1 className="text-2xl font-medium text-primary mt-2  mb-12 text-center text-blanco">
                        Salud de la Mujer
                    </h1>
                </div>
                <div className="flex items-center bg-celeste rounded shadow-md mt-4 mb-4">

                        <input
                            type="text"
                            className={
                                "w-full p-4 text-primary outline-none text-2xl transition duration-150 ease-in-out bg-celesteclaro focus:outline-none"
                            }
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electronico"
                        />
                    </div>
                    <div className="flex items-center bg-celeste rounded shadow-md mt-4 mb-4">

                        <input
                            type="password"
                            className={
                                "w-full p-4 text-primary outline-none text-2xl transition duration-150 ease-in-out bg-celesteclaro focus:outline-none"
                            }
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <button
                            className={`bg-verde w-full p-4 text-2xl focus:outline-none focus:border-green-dark text-blanco font-bold`}
                            onClick={() =>
                                logInWithEmailAndPassword(email, password, auth)
                                }

                        >
                            Ingresar
                        </button>
                    </div>
            </div>
        </div>
    </>)
}

export default Login;
