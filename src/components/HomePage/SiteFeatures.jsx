import React from 'react'
import './SiteFeatures.css'

const SiteFeatures = () => {
    return (<>

        <div class="parallax-section-2">
            <div class="parallax-bg2">LOL</div>
            <div class="site-features">
                <div class="site-feature">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <h3>40K</h3>
                    <label>Online Courses</label>
                </div>
                <div class="site-feature">
                    <i class="fa-solid fa-image-portrait"></i>
                    <h3>50K</h3>
                    <label>Students</label>
                </div>
                <div class="site-feature">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <h3>10K</h3>
                    <label>Instructors</label>
                </div>
                <div class="site-feature">
                    <i class="fa-solid fa-star"></i>
                    <h3>65K</h3>
                    <label>Total Reviews</label>
                </div>
            </div>
        </div>
    </>
    )
}

export default SiteFeatures