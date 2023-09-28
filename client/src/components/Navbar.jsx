import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar1.css';

const Navbar = () => {

    const navigate = useNavigate();

    const goto_quizquestion = () => navigate('/quizquestion');
    const goto_home = () => navigate('/');
    const goto_courses = () => navigate('/courses');
    const goto_blog = () => navigate('/blog');
    const goto_roadmap = () => navigate('/roadmap');
    const goto_signup = () => navigate('/signup');
    const goto_login = () => navigate('/login');
    const goto_discussion = () => navigate('/discussion');
    const goto_mostsolvedques = () => navigate('/mostsolvedques');

    const [isCls1Active, changeIsCls1Active] = useState(0);
    const [isCls3Active, changeIsCls3Active] = useState(false);
    const tglIsCls1Active = (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText == 'Home')
            return
        else if (e.target.innerText == 'Practice')
            changeIsCls1Active(2)
        else if (e.target.innerText == 'Resources')
            changeIsCls1Active(3)
        else if (e.target.innerText == 'Contact')
            changeIsCls1Active(4)
        else
            changeIsCls1Active(0)
        console.log(changeIsCls1Active);
        changeIsCls3Active(!isCls3Active);
    };


    return (<>
        <div className='navHeight'></div>
        <nav className="navbar">
            <h2 className="logo">E-LearningX</h2>
            <div className={`nav-links ${isCls3Active ? "hamburger-toggle" : ""}`}>
                <ul>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={goto_home}>Home</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 1 ? "expanded" : ""}`}>
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Practice</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 2 ? "expanded" : ""}`}>
                            <a onClick={goto_quizquestion}>Quiz Tests</a>
                            <a onClick={goto_mostsolvedques}>Most Solved Questions</a>
                            {/* <a href=""><Link to='/practicequestion'>Coding Problems</Link></a> */}
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Resources</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 3 ? "expanded" : ""}`}>
                            <a onClick={goto_roadmap}>RoadMaps</a>
                            <a onClick={goto_courses} href="">Courses</a>
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Contact</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 4 ? "expanded" : ""}`}>
                            <a onClick={goto_discussion}>Discussion</a>
                            <a onClick={goto_blog}>Blogs</a>
                            {/* <a href="">Submit Query</a> */}
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>
                            <i className={`fas
                                ${isCls3Active ? "fa-xmark" : "fa-user "}`}
                                onClick={tglIsCls1Active}>
                            </i></button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 0 ? "expanded" : ""}`}>
                            <a onClick={goto_login}>Log in</a>
                            <a onClick={goto_signup}>Sign Up</a>
                        </div>
                    </li>
                </ul>

            </div >
            <i className={`fa-solid fa-lg menu-hamburger
                ${isCls3Active ? "fa-xmark" : "fa-bars"}`}
                onClick={tglIsCls1Active}></i>
        </nav >
    </>
    )
}

export default Navbar