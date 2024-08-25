import React, { useEffect, useState } from "react"
import ModalComponent from "./ModalComponent"
import axios from "axios"
import Swal from 'sweetalert2'

const ListTasks = () => {
    const [ ModalIsOpen, SetModalIsOpen ] = useState(false)
    const [values, setValues] = useState({
        name: '',
        description: ''
    })

    const openModal = () => SetModalIsOpen(true)
    const closeModal = () => SetModalIsOpen(false)

    const handleSubmit = (e, onRequestClose) => {
        e.preventDefault()

        axios.post('/tasks', values)
        .then((res)=>{
            console.log(res)
            Swal.fire({
                title: 'Exito!',
                text: 'La tarea se agrego correctamente',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            onRequestClose()
        })
        .catch((err)=>console.log(err))
    }

    const [data, setData] = useState([])
    useEffect(() =>{
        axios.get('/tasks')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    })

    return (
        <div className="container-fluid">
            <div className="card m-auto mt-5" style={{ width: 900 }}>
                <div className="row">
                    <div className="cl-md-2 ms-3 mt-3">
                        <button onClick={openModal} className="btn btn-success">Agregar</button>
                        <ModalComponent 
                            isOpen={ModalIsOpen} 
                            onRequestClose={closeModal}
                            handleSubmit={handleSubmit}
                            setValues={setValues}
                            values={values}></ModalComponent>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-hovered">
                        <thead className="thead-black">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((task) => {
                                    return(<tr>
                                        <td>{task.id}</td>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        <td>
                                            <a href="" role="button"><i class="bi bi-pencil-fill"></i></a>
                                            <a href="" role="button"><i class="bi bi-trash"></i></a>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListTasks

