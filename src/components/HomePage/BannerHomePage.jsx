import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BannerHomePage.css';

const BannerHomePage = () => {

    const navigate = useNavigate();

    const goto_quizquestion = () => navigate('/quizquestion');
    const goto_courses = () => navigate('/courses');

    return (<>
        <section id="banner-homepage">
            <div className="banner-overlay">
                <h1>Welcome to <br />VelocityX</h1>
                <hr />
                <div className="playChk-btns">
                    <button id="playMusicBtn"
                        className="play-music-btn"
                        onClick={goto_quizquestion}
                    >Practice</button>
                    <br /><br />
                    <button
                        className="check-cars-btn"
                        onClick={goto_courses}
                    >Check Courses</button>
                </div>
            </div>
        </section>
    </>
    )
}

export default BannerHomePage