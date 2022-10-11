import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <div className='mb-5'>
            <h2 className='text-xl font-semibold'>1. What is the purpose of react router?</h2>
            <p>- ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-xl font-semibold'>2. How does context API works?</h2>
                <p>- Context API returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-xl font-semibold'>3. What is useRef hook?</h2>
                <p>- The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;