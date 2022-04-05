import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section>
            <article className="questions">
                <h1>What is Context API?</h1>
                <p>
                    Context API is, in words, the alternative of props drilling. Now the question is what is props drilling.
                    Basically when we need to share any variable or property to a child or sub-child or far away child, we can send it to every child using props and need to receive it. It's a problem and painful task. So we have solution with the context API.
                    The system of Context API is much easier. We need to declare a context outside the component with createContext(value) and export it. Then we need to wrap what we want to transfer with RingContext.Provider with the value.
                    Then we need to receive the value with useContext(value) from the destination. Now we can use the value.
                </p>
            </article>
            <article className="questions">
                <h1>What is Semantic Tag?</h1>
                <p>
                    {/* ---------------------------------------------------
                    wanna show html code in UI but <code></code>, &LeftAngleBracket;, <pre></pre> all are not working in JSX -_- 
                    -------------------------------------------------------*/}
                    Semantic tags are the updated tags of HTML. We know that HTML is a markup language created far before. So the markup tags of it should be updated to help the developers to develop easily.
                    Say for an example, header was created with div element with the class 'header'. Now the Updated tag is header.
                    Some more semantic tags are:
                    <li>main</li>
                    <li>article</li>
                    <li>summary</li>
                    <li>aside</li>
                    <li>nav</li>
                </p>
            </article>
            <article className="questions">
                <h1>Inline, Block and Inline-Block Elements</h1>
                <p>
                    <li><b>Inline Elements:</b> <br />  Inline elements are which not take the whole width of the content. Any other inline element can stand side-by-side. Say for example, anchor tag (a). <br /><br /></li>
                    <li><b>Block Elements:</b><br />Block elements are those which takes the full width whatever how many width the content has. This tag do not allow other tag to stand it's side. Say for example, heading tag (h1-h6) <br /><br /> </li>
                    <li><b>Inline-Block Element: </b><br />This element do not exist in real but we can declare any block or inline element using display: inline-block in css. This will act like block element but can stay side-by-side </li>

                </p>
            </article>
        </section>
    );
};

export default Blogs;