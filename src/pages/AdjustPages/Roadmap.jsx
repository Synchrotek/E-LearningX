import React from 'react'
import './Roadmap.css'
import Navbar from '../../components/Navbar';

const Roadmap = () => {
    return (<>
        <Navbar />
        <header>
            <h1>Roadmaps</h1>
        </header>
        <main>
            <section className="roadmap">
                <h2>Web Development Roadmap</h2>
                <p>A comprehensive guide to becoming a web developer.</p>
                <a href="src\assets\Roadmaps\full-stack.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Data Science Roadmap</h2>
                <p>Explore the path to becoming a data scientist.</p>
                <a href="src\assets\Roadmaps\ai-data-scientist.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Mobile App Development Roadmap</h2>
                <p>Learn the steps to become a mobile app developer.</p>
                <a href="src\assets\Roadmaps\android.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Fronted</h2>
                <p>Explore the path to becoming a frontend development.</p>
                <a href="src\assets\Roadmaps\frontend.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Backend</h2>
                <p>Explore the path to becoming a backend development.</p>
                <a href="src\assets\Roadmaps\backend.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>C++</h2>
                <p>Explore the path to becoming a c++ programming.</p>
                <a href="src\assets\Roadmaps\cpp.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Cyber Security</h2>
                <p>Explore the path to becoming a  cyber-security expert.</p>
                <a href="src\assets\Roadmaps\cyber-security.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Blockchain</h2>
                <p>Explore the path to becoming a Blockchain developer.</p>
                <a href="src\assets\Roadmaps\blockchain.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>Java</h2>
                <p>Explore the path to becoming a  java programming.</p>
                <a href="src\assets\Roadmaps\java.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>AWS</h2>
                <p>Explore the path to becoming a aws developer.</p>
                <a href="src\assets\Roadmaps\aws.pdf">View Roadmap</a>
            </section>

            <section className="roadmap">
                <h2>System Design</h2>
                <p>Explore the path to becoming a system Design engineer.</p>
                <a href="src\assets\Roadmaps\system-design.pdf">View Roadmap</a>
            </section>

        </main>
    </>
    )
}

export default Roadmap