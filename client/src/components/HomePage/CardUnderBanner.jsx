import { React } from 'react';
import './CardUnderBanner.css';

const CardUnderBanner = () => {
    return (<>
        <div className="card-type1-container">
            <div className="card-type1">
                <i className="fa-solid fa-desktop"></i>
                <h3>Online Learning</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum, aut facilis consectetur eligendi
                    excepturi! Voluptas </p>
            </div>

            <div className="card-type1">
                <i className="fa-solid fa-chalkboard-user"></i>
                <h3>Expert Instructor</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum, aut facilis consectetur eligendi
                    excepturi! Voluptas </p>
            </div>

            <div className="card-type1">
                <i className="fa-regular fa-message"></i>
                <h3>Easy Communication</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum, aut facilis consectetur eligendi
                    excepturi! Voluptas </p>
            </div>

            <div className="card-type1">
                <i className="fa-regular fa-face-smile"></i>
                <h3>Easy To Use</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum, aut facilis consectetur eligendi
                    excepturi! Voluptas </p>
            </div>

        </div>
    </>
    )
}

export default CardUnderBanner