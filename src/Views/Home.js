import React from 'react';
import Typing from 'react-typing-animation';
import Test from '../Components/Test'


const Home = () => {
    return (
            <div className='contentBody'>
            <div className="LeadText">
                <Typing>
                    <div>
                    <h1>Hi 👋, My name is <span>Ninyo</span></h1>
                    <Typing.Delay ms={1000} />
                    <h1>I am a Frontend Developer.</h1>
                    <Typing.Delay ms={1000} />
                    <p>I code beautifully simple things and i love what i do</p>
                    </div>
                </Typing>
            </div>

            <div className="image">
                <img src='/assets/work.svg' alt=""/>
            </div>

            <div className="about">
                <h2>About</h2>
                <div className="under"></div>

                <p>
                    I am a Frontend Developer who love building functional and appealing things for the web. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.
                    I love to work in a positive environment and team where we help each other learn and grow. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. 
                    I worked as a Front-end developer in the HNG internship version 7 and finished among the finalists.
                    
                </p>
            </div>

            <div className="skills">
                
                <h2>My Skills</h2>
                <div className="under"></div>

                <div className='skillInfo'>
                    <Test/>
                </div>
            </div>
        
        <div className="services">
            <h2>Services</h2>
            <div className="under"></div>

            <div className='serviceInfo'>
                <div>
                    <h4>Web Development</h4>
                    <p>I build quality webpages that are pixel perfect and highly responsive on different screen sizes and also make use of animations.</p>
                </div>
                <div>
                    <h4>Web App</h4>
                    <p>I develop quality and functional web apps using Javascript and React js</p>
                </div>
                
            </div>
        </div>

        <div className='touch'>
            <h4>Get in touch 👉 <a href="mailto:ninyhorlah6@gmail.com">ninyhorlah6@gmail.com</a></h4>
        </div>
        </div>
    )
}

export default Home
