import  { useState } from 'react';
import Modal from 'react-modal';
import { addHours, differenceInSeconds } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks/';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');
  

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();// Hook

    /**
     * FORMULARIO
     */

    const [formValues,setFormValues ] = useState({
        title:'',
        notes:'',
        start: new Date(),
        end: addHours(new Date(), 2),
    }
        
    )

    const onInputChanged = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloeModal = () => {
        closeDateModal();
        //console.log('Cerrar');
        //setIsOpen(false);
    }

    const onSubmit = async( event) =>{
        event.preventDefault();
        //setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.end, formValues.start);
        console.log(difference);

        if(isNaN(difference) || difference <= 0){
            Swal.fire(
                'Fechas Incorrectas',
                'Revisar fechas',
                'error'
              )
        }

        if(formValues.title.length <= 0) return;

        console.log(formValues);
    }

    return ( 
        <Modal
        isOpen={ isDateModalOpen }
        style={ customStyles }
        //className="modal"
        //overlayClassName="modal-fondo"
        //``
        onRequestClose={onCloeModal}
        closeTimeoutMS={ 200 }
    >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={ onSubmit }>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker selected={formValues.start}
                     onChange={ (event) => onDateChanged (event, 'start')}
                     dateFormat='Pp'
                    className='form-control'
                    showTimeSelect
                    timeCaption='Hora' />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                    minDate={ formValues.start}
                    selected={formValues.end} 
                    onChange={ (event) => onDateChanged (event, 'end')}
                    dateFormat='Pp'
                    className='form-control'
                    showTimeSelect
                    timeCaption='Hora' />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={ onInputChanged }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={ onInputChanged }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}