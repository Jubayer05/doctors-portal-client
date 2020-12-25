import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./HeaderCartInfo.css";

const HeaderCartInfo = ({info}) => {
    return (
        <div className="col-md-4 mt-5 pt-5">
            <div className={`header-cart p-4 h-100 d-flex justify-content-center align-items-center color-${info.background}`}>
                <FontAwesomeIcon className="info-icon mr-3" icon={info.icon} />
                <div>
                    <h6>{info.title}</h6>
                    <p className="text-line">{info.discription}</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCartInfo;