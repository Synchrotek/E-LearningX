import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import BannerHomePage from '../components/HomePage/BannerHomePage';
import CardUnderBanner from '../components/HomePage/CardUnderBanner';
import SiteFeatures from '../components/HomePage/SiteFeatures';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <BannerHomePage />
            <CardUnderBanner />
            <CourseCard shldViewMoreVisible='show' />
            <SiteFeatures />
            <Footer />
        </>
    )
}

export default HomePage