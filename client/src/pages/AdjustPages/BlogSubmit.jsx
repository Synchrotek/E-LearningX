import React from 'react'
import './BlogSubmit.css'

const BlogSubmit = () => {
    return (
        <>
            <title>Submit Blog Post</title>
            <form id="submissionForm">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required />

                <label for="content">Content:</label>
                <textarea id="content" name="content" required></textarea>

                <label for="category">Category:</label>
                <input type="text" id="category" name="category" />

                <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default BlogSubmit