import { React } from 'react';
import './CourseCard.css';

const CourseCard = (props) => {

    const TglViewMoreBtn = () => {
        const viewMoreVisibility = props.shldViewMoreVisible;
        if (viewMoreVisibility == 'show') {
            return (
                <button href="">View More</button>
            );
        } else {
            return null;
        }
    }

    return (<>
        <div class="card-type2-outer-container2">
            <h2>Our Courses</h2>
            <hr />
            <div class="card-type2-container">

                <div class="card-type2">
                    <img src="src\assets\Technologies\python.jpg" alt="" />
                    <div class="contentBox">
                        <h3>Python Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <div class="card-type2">
                    <img src="src\assets\Technologies\c++.jpg" alt="" />
                    <div class="contentBox">
                        <h3>App Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <div class="card-type2">
                    <img src="src\assets\Technologies\webDev.webp" alt="" />
                    <div class="contentBox">
                        <h3>Web Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <div class="card-type2">
                    <img src="src\assets\Technologies\appDev.webp" alt="" />
                    <div class="contentBox">
                        <h3>App Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <div class="card-type2">
                    <img src="src\assets\Technologies\webDev.webp" alt="" />
                    <div class="contentBox">
                        <h3>Web Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <div class="card-type2">
                    <img src="src\assets\Technologies\appDev.webp" alt="" />
                    <div class="contentBox">
                        <h3>C++ Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div><div class="card-type2">
                    <img src="src\assets\Technologies\python.jpg" alt="" />
                    <div class="contentBox">
                        <h3>Python Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <div class="card-type2">
                    <img src="src\assets\Technologies\c++.jpg" alt="" />
                    <div class="contentBox">
                        <h3>C++ Development</h3>
                        <ul>
                            <li>✓ <span>Better Wokflow</span></li>
                            <li>✓ <span>Better Productivity</span></li>
                            <li>✓ <span>Flexible Syntax</span></li>
                            <li>✓ <span>Upgraded skills</span></li>
                        </ul>
                        <button href="">Start Course</button>
                    </div>
                </div>
                <TglViewMoreBtn />
            </div>
        </div>
    </>
    )
}

export default CourseCard