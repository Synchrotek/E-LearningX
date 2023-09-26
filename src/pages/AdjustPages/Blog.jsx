import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
import Navbar from '../../components/Navbar';

const Blog = () => {
    return (<>
        <Navbar />
        <header>
            <a className="submit-link" href="#submit-form">
                <img src="your-image-url.jpg" alt="Submit Article" width="50" height="50" />
            </a>
            <h1>Blogs</h1>
        </header>
        <div className="container">
            <Link to='/blog/problemsolving'><a href="problemsolving.html">
                <div className="post">
                    <h2>Problem Solving</h2>
                    <p>Published on: September 14, 2023</p>
                    <p>The life of a software engineer is filled with various challenges and complexities. The one skill that glues these disparate tasks together and makes them manageable? Problem solving.</p>
                </div>
            </a></Link>
            <Link to='/blog/cpp'><a href="C++.html">
                <div className="post">
                    <h2>C++</h2>
                    <p>Published on: September 20, 2023</p>
                    <p>C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language.</p>
                </div>
            </a></Link>
            <Link to='/blog/java'><a href="java.html">
                <div className="post">
                    <h2>JAVA</h2>
                    <p>Published on: September 14, 2023</p>
                    <p>JAVA was developed by Sun Microsystems Inc in the year 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.</p>
                </div>
            </a></Link>
        </div>
        <div className="container" id="submit-form">
            <div className="submit-form">
                <h2>Write an Article</h2>
                <p>Publish your own article and share your knowledge with the world.</p>
                <Link to='/blog/blogsubmit'><a className='submt-artcl'>Submit Your Article</a></Link>
            </div>
        </div>
    </>
    )
}

export default Blog