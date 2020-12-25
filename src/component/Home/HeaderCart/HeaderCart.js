import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import HeaderCartInfo from '../HeaderCartInfo/HeaderCartInfo';

const cartInfo = [
    {
        title: "Opening Hours",
        discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        icon: faClock,
        background: "primary",
    },
    {
        title: "Visit Our Locations",
        discription: "24 Samunta, Paris, France",
        icon: faMapMarker,
        background: "dark",
    },
    {
        title: "Contack Us Now",
        discription: "+2056487596512",
        icon: faPhone,
        background: "primary",
    }
];
const HeaderCart = () => {
    return (
        <div className="d-flex justify-content-center pb-5">
            <div className="w-75 row d-flex justify-content-center">
                {
                    cartInfo.map(info => 
                    <HeaderCartInfo info={info} />)
                }
            </div>
        </div>
    );
};

export default HeaderCart;