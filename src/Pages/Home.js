import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <div className="m-20">
                <div className={"grid grid-cols-3 gap-x-16 m-10"}>
                    <button
                        onClick={() => navigate("/create")}
                        className={
                            "btn bg-celeste text-blanco p-20 rounded-md hover:bg-gris text-center flex flex-col items-center drop-shadow-md"
                        }
                    >
                        <svg
                            className="w-14 h-14"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>

                        <span className="text-2xl font-bold"> Crear Paciente</span>
                    </button>
                    <button
                        onClick={() => navigate("/search")}
                        className={
                            "btn bg-celeste text-blanco p-20 rounded-lg hover:bg-gris text-center flex flex-col items-center drop-shadow-md"
                        }
                    >
                        <svg
                            class="w-14 h-14"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span className="text-2xl font-bold">Buscar Paciente</span>
                    </button>
                    <button
                        className={
                            "btn bg-celeste text-blanco p-20 rounded-lg hover:bg-gris text-center flex flex-col items-center drop-shadow-md"
                        }
                        onClick={() => navigate("/connection")}
                    >
                        <svg
                            class="w-14 h-14"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>

                        <span className="text-2xl font-bold">Conexion</span>
                    </button>

                </div>

            </div>

        </>
    );
};

export default Home;
