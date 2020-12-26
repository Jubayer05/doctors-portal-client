import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const BookingCart = ({item, date}) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4">
            <div className="card p-3">
            <div className="card-body text-center">
                <h5 className="text-brand">{item.subject}</h5>
                <h6>{item.visitingHour}</h6>
                <small className="text-secondary">{item.totalSpace} SPACE AVAILABLE NOW</small> <br/>
                <button onClick={openModal} className="btn-brand mt-2">Book Appointment</button>
                <AppointmentForm date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} title={item.subject}/>
            </div>
            </div>
        </div>
    );
};

export default BookingCart;