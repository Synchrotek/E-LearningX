import React from 'react'
import './Footer.css'

const Footer = () => {
    return (<>
        <footer>
            <div class="row">
                <div class="col">
                    <h3>About Us <div class="underline"><span></span></div>
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis cumque rerum recusandae
                        impedit laudantium maiores voluptatum quis </p>
                </div>
                <div class="col">
                    <h3>Location <div class="underline"><span></span></div>
                    </h3>
                    <p>Trident Academy of Technology</p>
                    <p>Bhubaneswar, Odisha</p>
                    <p class="email-id">xyz@gmail.com</p>
                    <div class="social-icons">
                        <i class="fa-brands fa-discord"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
                <div class="col">
                    <h3>Links <div class="underline"><span></span></div>
                    </h3>
                    <ul class="useful-links">
                        <li><a href="">Home</a></li>
                        <li><a href="">Roadmaps</a></li>
                        <li><a href="">Courses</a></li>
                        <li><a href="">My Profile</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Contact us <div class="underline">
                        <span></span></div></h3>
                    <div class="form">
                        <input class="email" type="email" placeholder="Your Email Id" required />
                        <input class="msg" type="text" placeholder="Your Message" required />
                        <div class="form-btn">
                            <button type="submit">
                                submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p class="copyright">E-LearningX © 2023 - All Rights Reserved</p>
        </footer>
    </>
    )
}

export default Footer