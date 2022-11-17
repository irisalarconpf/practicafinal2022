import React from "react";
import {useState} from "react";
import Select from "react-select";
import NavBar from "../Components/NavBar";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from "../firebase";

function CreatePatient(){


    const [name, setName] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [diagnostico, setDiagnostico] = useState('')

    const options = [
        {value: "femenino", label: "Femenino"},
        {value: "masculino", label: "Masculino"},
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    const date = new Date()

    const handleChange = (selectedOption) => {
        setSelectedOption({selectedOption})
        console.log('opcion seleccionada:', selectedOption)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await addDoc(collection(db, 'patient'),{
                name: name,
                secondname: segundoNombre,
                surname: apellido,
                birthday: fechaNacimiento,
                gender: genero,
                weight: peso,
                height: altura,
                address: direccion,
                phone: telefono,
                created: Timestamp.now()
            })
        }catch (err){
            alert(err)
        }
    }

    return(
        <>
            <NavBar />
        <form onSubmit={handleSubmit} className={'w-full max-w-lg'}>
            <div className={'flex flex-wrap mx-3 mb-6'}>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Primer Nombre
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                    type="text"
                           onChange={(e)=>setName(e.target.value)}
                           value={name}
                    placeholder="Primer Nombre"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Segundo Nombre
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           value={segundoNombre}
                           onChange={(e)=>setSegundoNombre(e.target.value)}
                           placeholder="Segundo Nombre"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Apellidos
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           value={apellido}
                           onChange={(e)=>setApellido(e.target.value)}
                           placeholder="Apellidos"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Fecha de Nacimiento
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="date"
                           value={fechaNacimiento}
                           onChange={(e)=>setFechaNacimiento(e.target.value)}
                           placeholder="Fecha de nacimiento"
                           max={date.toISOString().split("T")[0]}/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Genero
                    </label>
                    <Select options={options}
                            onChange={handleChange}
                            />

                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Peso
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           onChange={(e)=>setPeso(e.target.value)}
                           value={peso}
                           placeholder="Peso"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Altura
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           value={altura}
                           onChange={(e)=>setAltura(e.target.value)}
                           placeholder="Altura"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Direccion
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           value={direccion}
                           onChange={(e)=>setDireccion(e.target.value)}
                           placeholder="Direccion"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Telefono
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           value={telefono}
                           onChange={(e)=>setTelefono(e.target.value)}
                           placeholder="Telefono"/>
                </div>
                <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>
                        Diagnostico
                    </label>
                    <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                           type="text"
                           value={diagnostico}
                           onChange={(e)=>setDiagnostico(e.target.value)}
                           placeholder="Diagnostico"/>
                </div>
                <button
                    className="bg-gray-600 p-2 m-4 text-white w-24 rounded-md"
                >
                    Enviar
                </button>

            </div>

        </form>

        </>
    )
}

export default CreatePatient;


