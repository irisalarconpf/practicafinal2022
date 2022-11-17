import { useState, useEffect } from "react";
import ImageLogo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Swal from "sweetalert2";



export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const Swal = require('sweetalert2')


    useEffect(() => {
        if(loading) return;
        if(!user) return navigate('/');
        //fetchUserName();
        }, [user, loading]
    )

    return (
        <>
            <nav className="bg-azul px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="home" className="flex items-center">
                        <img src={ImageLogo} className={"mr-3 h-6 sm:h-9"} alt=" "/>
                        <span className={"self-center text-xl font-semibold whitespace-nowrap dark:text-white"}>Proyecto</span>
                    </a>
                    <div className={"flex items-center md:order-2"}>
                        <button type="button"
                                className={"flex mr-3 text-sm bg-azuloscuro rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"}
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom">
                            <span className={"sr-only"}>Options</span>
                            <img src={ImageLogo} className={"w-8 h-8 rounded-full"} alt=" "/>
                        </button>
                        <div className={"hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"}
                             id="user-dropdown"
                             style={{
                                 position: 'absolute',
                                 inset: '0px auto auto 0px',
                                 margin: '0px',
                                 transform: 'translate(0px, 10px)'}}
                             data-popper-reference-hidden=""
                             data-popper-escaped=""
                             data-popper-placement="bottom"
                        >
                            <div className={"py-3 px-4"}>
                                <span className={"block text-sm text-blanco"}>Usuario</span>
                                <span className={"block text-sm font-medium text-blanco truncate"}>Correo Usuario</span>
                            </div>
                            <ul className={"py-1"} aria-labelledby="user-menu-button">
                                <li>
                                    <a href="home" className={"block py-2 px-4 text-sm text-gris hover:bg-gris"}>Mi Usuario</a>
                                </li>
                                <li>
                                    <a href="home" className={"block py-2 px-4 text-sm text-gris hover:bg-gris"}>Configuracion</a>
                                </li>
                                <li>
                                    <a href="home" className={"block py-2 px-4 text-sm text-gris hover:bg-gris"}>Cerrar Sesion</a>
                                </li>
                            </ul>

                        </div>
                        <button type="button" className={"bg-azuloscuro rounded-full text-blanco"} onClick={logout}>
                            <span>Cerrar Sesion</span>
                        </button>

                    </div>



                </div>
            </nav>
        </>
    );
}
