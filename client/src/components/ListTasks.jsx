import React, { useState } from "react"
import ModalComponent from "./ModalComponent"
import axios from "axios"
import { set } from "mongoose"

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
            onRequestClose()
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div className="container">
            <div className="card m-auto mt-5" style={{ width: 700 }}>
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
            </div>
        </div>
    )
}

export default ListTasks

