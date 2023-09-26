import React from 'react'
import './QuizQuestion.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const QuizQuestion = () => {
    return (<>
        <Navbar />
        <header>
            <div className="content">
                <hgroup>
                    <h1>Problems and Questions</h1>
                </hgroup>
            </div>
            <div className="overlay"></div>
        </header>

        <section className="difficulty-level easy">
            <h2>Easy Questions</h2>
            <h3>MCQ Question 1: What is the output of the following code?</h3>
            <ul>
                <li><input type="radio" name="mcq1" /> Option A: 42</li>
                <li><input type="radio" name="mcq1" /> Option B: 24</li>
                <li><input type="radio" name="mcq1" /> Option C: Error</li>
                <li><input type="radio" name="mcq1" /> Option D: None of the above</li>
            </ul>

            <h3>Normal Question : Write a Python function to calculate the factorial of a number.</h3>
            <textarea name="programming-response" rows="5" cols="40"></textarea>
            <button type="submit" className="submit-button">Submit</button>
        </section>

        <section className="difficulty-level moderate">
            <h2>Moderate Questions</h2>
            <h3>MCQ Question 1: Which of the following is not a programming language?</h3>
            <ul>
                <li><input type="radio" name="mcq2" /> Option A: Python</li>
                <li><input type="radio" name="mcq2" /> Option B: BananaScript</li>
                <li><input type="radio" name="mcq2" /> Option C: Java</li>
                <li><input type="radio" name="mcq2" /> Option D: C++</li>
            </ul>

            <h3>Normal Question 1: Write a Java program to find the sum of all even numbers between 1 and 100.</h3>
            <textarea name="programming-response" rows="5" cols="40"></textarea>
            <button type="submit" className="submit-button">Submit</button>
        </section>

        <section className="difficulty-level hard">
            <h2>Hard Questions</h2>
            <h3>MCQ Question 1: Which data structure is used to implement priority queues?</h3>
            <ul>
                <li><input type="radio" name="mcq3" /> Option A: Stack</li>
                <li><input type="radio" name="mcq3" /> Option B: Queue</li>
                <li><input type="radio" name="mcq3" /> Option C: Heap</li>
                <li><input type="radio" name="mcq3" /> Option D: Linked List</li>
            </ul>

            <h3>Normal Question 1: Implement a binary search tree in C++.</h3>
            <textarea name="programming-response" rows="5" cols="40"></textarea>
            <button type="submit" className="submit-button">Submit</button>
        </section>
        <Footer />
    </>
    )
}

export default QuizQuestion