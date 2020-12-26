import React from 'react';
import chair from "../../../images/chair.png";
import "../Header/Header.css";

const HeaderMain = () => {
    
    return (
        <main className='my-5 headerMain d-flex justify-content-center'>
            <div className='w-75 d-flex justify-content-between align-items-center'>
            <div className="headerMain__content">
                <h1>Your New Smile <br/> Start Here</h1>
                <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem placeat recusandae a voluptate doloribus nobis. Nostrum aspernatur hic numquam!</p>
                <button className="btn home-btn">GET APPOINTMENT</button>
            </div>
            <div className="headerMain__img">
                <img className="w-100" src={chair} alt=""/>
            </div>
            </div>
        </main>
    );
};

export default HeaderMain;