import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import "./AppointmentForm.css";
 
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, title, date}) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
    console.log(data);
    closeModal();
     };
     console.log(errors)
    return (
        <div className="appointment-form">
            <Modal
                className="modal-style"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="Overlay"
                contentLabel="Example Modal"
                >
        
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <button onClick={closeModal} className="close-btn btn"><FontAwesomeIcon icon={faTimes} /></button>
                    <h4 className="text-brand">{title}</h4>
                    <small>On {date}</small>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-2" name="name" 
                    ref={register({ required: true, pattern: /^[A-Za-z]+$/i})} 
                    placeholder="Your Name"/> 
                    {errors.name && <p className="text-danger mt-n2"><small>Name is Required</small></p>}

                    <input className="form-control mb-2" name="phone" 
                    ref={register({ required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im})} 
                    placeholder="Phone number" />
                    {errors.phone && <p className="text-danger mt-n2"><small>Phone number is Required or Invalid</small></p>}

                    <input className="form-control mb-2" name="email" 
                    ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} 
                    placeholder="Email Address" />
                    {errors.email && <p className="text-danger mt-n2"><small>Email is Required or Invalid</small></p>}

                    <div className="row ml-1">
                        <div classNam="col-md-4">
                        <select name="gender" className="form-control w-100 input-appointment" ref={register({ required: true, minLength: 3 })}> 
                            <option value=" "> Select Gender</option> 
                            <option value="Male">Male</option> 
                            <option value="Female">Female</option> 
                            <option value="Female">Other</option>
                        </select> 
                        {errors.gender && <p className="text-danger mt-n2"><small>Required Fields</small></p>}
                        </div>

                    <div className="col-md-4">
                        <input className="form-control mb-2 w-100" name="age" 
                        ref={register({ required: true, pattern: /^[1-9]?[0-9]{1}$|^100$/})}
                        placeholder="Age" />
                        {errors.age && <p className="text-danger mt-n2"><small>Required Fields</small></p>}
                    </div>

                    <div className="col-md-4">
                        <input className="form-control mb-2 w-100" name="weight" 
                        ref={register({ required: true, pattern: /^[1-9]?[0-9]{1}$|^100$/})}
                        placeholder="Weight"/> 
                        {errors.weight && <p className="text-danger mt-n2"><small>Required Fields</small></p>}
                    </div>
                    </div>
                   
                    <input className="form-control btn-brand" type="submit" />
                </form>
                </Modal>
        </div>
    );
};

export default AppointmentForm;

