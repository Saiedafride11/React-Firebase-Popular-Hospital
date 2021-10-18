import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    const blogs = [
        {   
            "img": "https://i.ibb.co/LSyWRR8/blog-04.jpg",
            "title": "Doccure – Making your clinic painless visit?",
            "description": "Well + Good is a wellness blog with articles on fitness, nutrition, beauty, and more.",
            "doctor_img": "https://i.ibb.co/9hFWPtK/doctor-03.jpg",
            "doctor_name": "Dr. Harrison Hall",
            "time": "4 oct 2021"
        },
        {   
            "img": "https://i.ibb.co/rQhffWx/blog-03.jpg",
            "title": "What are the benefits of Online Doctor Booking?",
            "description": "Tips, practical fitness tips, and videos to walk blog readers through workouts.",
            "doctor_img": "https://i.ibb.co/JjDxb19/doctor-10.jpg",
            "doctor_name": "Dr. Delores Lewis",
            "time": "3 oct 2021"
        },
        {   
            "img": "https://i.ibb.co/QYx3b3F/blog-02.jpg",
            "title": "Benefits of consulting with an Online Doctor",
            "description": "Beauty, and more. Practical fitness tips and The journalism-based fitness.",
            "doctor_img": "https://i.ibb.co/wsTYw5v/doctor-05.jpg",
            "doctor_name": "Dr. Iker Martin",
            "time": "6 oct 2021"
        },
        {   
            "img": "https://i.ibb.co/B2YKH4r/blog-01.jpg",
            "title": "5 Great reasons to use an Online Doctor",
            "description": "Fitness experts, practical fitness tips, and videos to walk blog readers through workouts.",
            "doctor_img": "https://i.ibb.co/mcS6HKH/Waist-up-portrait-of-beautiful-African-American-nurse-posing-confidently-while-standing-with-arms-cr.jpg",
            "doctor_name": "Dr. Emilie Knight",
            "time": "8 oct 2021"
        }
    ]
    return (
        <div className="py-5">
            <div className="container">
                <h2 className="text-center py-2">Blogs and News</h2>
                <div className="blog-container">
                    {
                        blogs?.map(blog =>  <div className="row row-cols-1 g-4 p-2" key={blog.time}>
                        <div className="col">
                            <div className="card h-100 pb-3">
                                <img src={blog.img} className="card-img-top w-100" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text"><small>{blog.description}</small></p>
                                    <Link to='/blog' className="text-decoration-underline">
                                        Read More
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center" style={{width: '65%'}}>
                                        <div className="w-25">
                                            <img src={blog.doctor_img} className="w-100 m-1 rounded-circle" style={{height: '42px'}} alt="" />
                                        </div>
                                        &nbsp;&nbsp;
                                        <p style={{marginBottom: '0px', fontSize: '14px'}}>{blog.doctor_name}</p>
                                    </div>
                                    <div className="d-flex align-items-center" style={{width: '35%'}}>
                                        <FontAwesomeIcon icon={faClock} /> &nbsp;
                                        <p style={{marginBottom: '0px', fontSize: '14px'}}>{blog.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
                <div className="text-center mt-2">
                    {/* <Link to="/doctors">
                        <button className="btn btn-primary w-25">All Doctors</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Blog;