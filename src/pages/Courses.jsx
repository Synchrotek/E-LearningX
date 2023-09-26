import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

const Courses = () => {
    return (<>
        <Navbar />
        <CourseCard />
        <Footer />
    </>
    )
}

export default Courses