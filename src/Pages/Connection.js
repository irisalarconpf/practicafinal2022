import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';


const Connection = () =>{

    const [direccionIp, setDireccionIp] = useState("")
    var ip = "http://192.168.43.104"

    const fetchIp = async () => {
        await getDocs(collection(db, "direccionip"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setDireccionIp(newData);
                console.log(direccionIp, newData);
                ip = direccionIp
            })
    }

    const comandoHome = async (e) =>{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'D583329C36E74CC58409161F5662F375'
            },
            body: '{"command":"G28 Z"}'
        };

        fetch(ip+'/api/printer/command', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }



    const comandoArriba = async (e) =>{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'D583329C36E74CC58409161F5662F375'
            },
            body: '{"command":"G0 Z1 F200"}'
        };

        fetch(ip+'/api/printer/command', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const connect = async (e) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'D583329C36E74CC58409161F5662F375'
            },
            body: '{"command":"connect","port":"/dev/ttyUSB0","baudrate":115200,"printerProfile":"_default","save":true,"autoconnect":true}'
        };

        fetch(ip+'/api/connection', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const disconnect = async (e) =>{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'D583329C36E74CC58409161F5662F375'
            },
            body: '{"command":"disconnect"}'
        };

        fetch(ip+'/api/connection', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const comandoAbajo = async (e) =>{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'D583329C36E74CC58409161F5662F375'
            },
            body: '{"command":"G0 Z-1 F200"}'
        };

        fetch(ip+'/api/printer/command', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return(
        <>
        <NavBar />


            <div className={"flex mb-4"}>
                <h1>conexion</h1>
                <button className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"} onClick={() => {connect()}}>Conectar</button>
                <button className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"} onClick={() => {disconnect()}}>Desconectar</button>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>

                </div>
                <div className={"w-1/2 h-12"}>
                    <div>
                        <h1>Comandos prototipo</h1>
                        <button className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"} onClick={() => {comandoArriba()}}>Arriba</button>
                        <button className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"} onClick={() => {comandoHome()}}>Home</button>
                        <button className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"} onClick={() => {comandoAbajo()}}>Abajo</button>

                        <button className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"} onClick={() => {comandoAbajo()}}>Iniciar</button>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Connection;