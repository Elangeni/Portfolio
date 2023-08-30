import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <img src="images/Elangeni.jpeg" alt="Elangeni" className='profile-pic' />

            <div className="text">
                <h1> Hello! I'm Elangeni.</h1>
                <h3>I am full-stack engineer, duck lover, and haver of many hobbies.</h3>
                <p>
                    I have been working as a full stack engineer for 3 years and I love it! My favorite
                    part is continuing to learn about new technologies. I invite you to explore my portfolio, where you'll discover a collection of 
                    projects. Each project tells a unique story of challenges met and solutions 
                    achieved, showcasing my commitment to turning ideas into reality.
                    <br/>
                    <br/>
                    Let's connect! I'm always excited to collaborate and share insights. Feel free to browse my portfolio, get in touch, 
                    or view my resume for a more comprehensive look at my journey and expertise.
                    Let's create, innovate, and build the future, one line of code at a time.


                </p>
            </div>
        </div>
    )
}

export default About