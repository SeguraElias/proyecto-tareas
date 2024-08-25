import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalComponent = ({isOpen, onRequestClose, handleSubmit, setValues, values}) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
            >
                <form onSubmit={(e) => handleSubmit(e, onRequestClose)}>
                    <h3>Agregar tarea</h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="text" className="form-control" name="name" required 
                                onChange={(e)=> setValues({...values, name: e.target.value})} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="descripcion">Descripcion</label>
                            <textarea name="description" className="form-control" required
                                onChange={(e)=> setValues({...values, description: e.target.value})}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type='submit' className="btn btn-success mt-3">Guardar</button>
                            <button className="btn btn-danger ms-1 mt-3" onClick={onRequestClose}>Cerrar</button>
                        </div>
                    </div>
                </form>
            </Modal>
    )
}

export default ModalComponent