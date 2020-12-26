import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const BlogItem = ({item}) => {
    return (
        <div className="col-md-4 ">
            <div className="p-4 blog-item">
                <div className="d-flex justify-content-start align-items-center">
                    <img className="mr-3" style={{width: "60px"}} src={item.image} alt=""/>
                    <div className="">
                        <h6>{item.name}</h6>
                        <small className="text-secondary">23 April, {new Date().getFullYear()}</small>
                    </div>
                </div>
                <h5 className="my-3">{item.title}</h5>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit illo provident itaque, unde nihil. Voluptatem sed minus molestiae dolor!</p>
                <span className="blog-arrow"><FontAwesomeIcon className="mr-3" icon={faLongArrowAltRight} /></span>
            </div>
        </div>
    );
};

export default BlogItem;