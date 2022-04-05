import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>What is Context API?</h2>
            <p>Context API is an Amazing thing of React to passing data to the child element.
                Its is a shorest way to passing data from parent element to children of children Element.
                With the context API, the hassle of passing data through.
                Context is primarily used when some data needs to be accessible by many components at different nesting levels.
                Apply it sparingly because it makes component reuse more difficult. each element by the props can be avoided.</p>

            <h2>What is Semantic tag?</h2>
            <p>Semantic tags are More clearly name of other tag name. for knowing about a element Its is easy to understand by the semantic tags name. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have".</p>

        </div>
    );
};

export default Blogs;