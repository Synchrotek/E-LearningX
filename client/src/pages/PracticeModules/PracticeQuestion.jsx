import React from 'react';
import './PracticeQuestion.css';

const PracticeQuestion = () => {
    return (<>
        <div class="wrapper">

        </div>
        <header>
            <h1>Programming is learned by writing programs!</h1>
        </header>
        <main>
            <div class="problem">
                <h2>Programming Challenge</h2>
                <h3 id="PROB">PROBLEM OF THE DAY! </h3>
                <hr />
                <h3>Problem Statement</h3>
                <P class="statement-pargraph">Welcome to the world of Programming, In this challange , we practice printing to stdout. <br />
                    <h4>Input format</h4>
                    There is no input for this Challenge.
                </P>
                <p class="Outputformat">
                    <h4>Output Format</h4>
                    <h5>You must print two lines of output:</h5>
                </p>
                <p class="printing-format">
                    1. Print <code>Hello,World.</code> on the first line. <br />
                    2. Print <code>Hello,Java</code> on the second line.
                </p>

                <h4>Sample Output</h4>
                <div class="box">
                    1. <code>Hello, World</code><br />
                    2. <code>Hello, java</code>
                </div>
            </div>

            <section class="user-manual">
                <h2>User Manual</h2>
                <p>
                    To use the code editor:
                </p>
                <ul>
                    <li>Write your code in the editor.</li>
                    <li>Click the "Run Code" button to execute your code.</li>
                </ul>
            </section>

            <div class="code-editor" id="editor"></div>

            <div class="output">
                <h2>Output</h2>
                <pre id="output-display"></pre>
            </div>


            <button id="run-button">Run Code</button>
        </main>
    </>
    )
}
export default PracticeQuestion