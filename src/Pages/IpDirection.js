import React, { useState, useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from "../firebase";
import Select from "react-select";

function IpDirection(){

    const [direccionIp, setDireccionIp] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await addDoc(collection(db, 'direccionip'),{
                direccionIp: direccionIp
            })
            navigate('/home')
        }catch (err){
            alert(err)
        }
    }


    return(<>

        <form onSubmit={handleSubmit} className={'w-full max-w-lg'}>
            <div className={'flex flex-wrap mx-3 mb-6'}>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Primer Nombre
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           onChange={(e)=>setDireccionIp(e.target.value)}
                           value={direccionIp}
                           placeholder="Direccion IP"/>
                </div>

                <button
                    className="bg-gray-600 p-2 m-4 text-white w-24 rounded-md"
                >
                    Guardar Ip
                </button>

            </div>

        </form>


    </>)
}

export default IpDirection