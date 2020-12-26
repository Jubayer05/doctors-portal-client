import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import person1 from "../../../images/Ellipse 1.png";
import person2 from "../../../images/Ellipse 2.png";
import person3 from "../../../images/Ellipse 3.png";
import "./Blog.css";

const blogCart = [
    {
        name: "Dr. William Hang",
        title: "Check at least a doctor in one year",
        image: person1
    },
    {
        name: "Dr. Neyachals Mou",
        title: "2 Times brush in a day keep your teed healthy",
        image: person2
    },
    {
        name: "Dr. Fardin Jr",
        title: "The tooth cancer is taking a challenge",
        image: person3
    },
]

const Blog = () => {
    return (
        <section className="blog mt-5">
            <h5 className="home-title-sub text-center">OUR BLOG</h5>
            <h3 className="home-title mb-5 text-center mb-4">From Our Blog News</h3> 

            <div className="row mx-5 px-5 pb-5">
                {
                    blogCart.map(item => <BlogItem item={item}/>)
                }
            </div>
        </section>
    );
};

export default Blog;