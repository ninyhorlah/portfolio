import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


let Project = () => {
    const projects = {
        goalRoute: 'https://goalroute.000webhostapp.com/',
        eventPage: 'https://ninyhorlah.github.io/event-page/',
        maintenancePage: 'https://ninyhorlah.github.io/Tscoy/',
        photography: 'https://ninyhorlah.github.io/Photography-portfolio/',
        weddingPlanner: 'https://ninyhorlah.github.io/wedding-planner/'
    }
    return(
        <div className='wrapperBody'>
            <div className='Wrapper'>
                <img src="/assets/goalRoute.png" alt=""/>
                <h4>Goal Route</h4>

                <div className="Overlay">
                    <div className="Text">
                        <h6>Goal Route is an app that takes in your goals and skills and convert it into money</h6>
                        <a href={projects.goalRoute} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink}/> Live Link</a>
                    </div>
                </div>
            </div>
            <div className='Wrapper'>
                <img src="/assets/eventPage.png" alt=""/>
                <h4>Event Page</h4>

                <div className="Overlay">
                    <div className="Text">
                        <h6>A webpage that shows the event of any conference and also gives information about the pricing and date of the event </h6>
                        <a href={projects.eventPage} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink}/> Live Link</a>
                    </div>
                </div>
            </div>
            <div className='Wrapper'>
                <img src="/assets/maintenancePage.png" alt=""/>
                <h4>Maintenance Page</h4>

                <div className="Overlay">
                    <div className="Text">
                        <h6>It notifies visitors of the website that the website is under construction</h6>
                        <a href={projects.maintenancePage} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink}/> Live Link</a>
                    </div>
                </div>
            </div>
            <div className='Wrapper'>
                <img src="/assets/photography.png" alt=""/>
                <h4>Photography</h4>

                <div className="Overlay">
                    <div className="Text">
                        <h6>A photographer's portfolio website that showcase their best work</h6>
                        <a href={projects.photography} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink}/> Live Link</a>
                    </div>
                </div>
            </div>
            <div className='Wrapper'>
                <img src="/assets/weddingPlanner.png" alt=""/>
                <h4>Wedding Planner</h4>

                <div className="Overlay">
                    <div className="Text">
                        <h6>A webpage that entails the details of how a wedding is planned</h6>
                        <a href={projects.weddingPlanner} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink}/> Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;