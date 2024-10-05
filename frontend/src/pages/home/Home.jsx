import React from 'react';
import './Home.css'; // For Home screen styling

const Home = () => {
    return (
        <>
            <div className="home-hero">
                <h1>Welcome to the Home Screen</h1>
                <p>
                    Scroll down to see the navbar disHomeear and scroll up to bring it back!
                </p>

            </div>
            <section className="content">
                <div className="box">Content Block 1</div>
                <div className="box">Content Block 2</div>
                <div className="box">Content Block 2</div>
            </section>
        </>
    );
}

export default Home;
