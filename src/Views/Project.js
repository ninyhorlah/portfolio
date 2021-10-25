import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

let Project = () => {
  const projects = {
    goalRoute: "https://goalroute.000webhostapp.com/",
    eventPage: "https://ninyhorlah.github.io/event-page/",
    maintenancePage: "https://ninyhorlah.github.io/Tscoy/",
    photography: "https://ninyhorlah.github.io/Photography-portfolio/",
    weddingPlanner: "https://ninyhorlah.github.io/wedding-planner/",
    orderSummary: "https://restaurant-assessment.netlify.app/",
    go4mi: "https://go4mi.netlify.app/",
    gig: "https://chiji-gig.netlify.app/",
    invitation: "https://cynthiaamaechi.netlify.app/",
    weatherApp: "https://weather-checkk.netlify.app/",
    xttreme: "https://xttreme.com/",
  };
  return (
    <div className="wrapperBody">
      <div className="Wrapper">
        <img src="/assets/go4mi.png" alt="" />
        <h4>Go4Mi</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              Go4mi is a web app that is used for buying and selling of goods
              depending on what a seller sells
            </h6>
            <a href={projects.go4mi} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/weatherApp.png" alt="" />
        <h4>Weather App</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              A web app that shows your current weather location and allows you
              to search for the weather of other city. It also shows weather
              forecast for the next 5 days
            </h6>
            <a href={projects.weatherApp} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/gig.png" alt="" />
        <h4>Gig App</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>A web app that contains gigs</h6>
            <a href={projects.gig} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/xttreme.png" alt="" />
        <h4>Xttreme Website</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>Website for Xttreme Developers</h6>
            <a href={projects.xttreme} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/invitation.png" alt="" />
        <h4>Invitation Card</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>A wedding web app that is used instead of invitation card</h6>
            <a href={projects.invitation} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/goalRoute.png" alt="" />
        <h4>Goal Route</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              Goal Route is an app that takes in your goals and skills and
              convert it into money
            </h6>
            <a href={projects.goalRoute} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/eventPage.png" alt="" />
        <h4>Event Page</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              A webpage that shows the event of any conference and also gives
              information about the pricing and date of the event{" "}
            </h6>
            <a href={projects.eventPage} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/maintenancePage.png" alt="" />
        <h4>Maintenance Page</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              It notifies visitors of the website that the website is under
              construction
            </h6>
            <a href={projects.maintenancePage} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/photography.png" alt="" />
        <h4>Photography</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              A photographer's portfolio website that showcase their best work
            </h6>
            <a href={projects.photography} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/weddingPlanner.png" alt="" />
        <h4>Wedding Planner</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              A webpage that entails the details of how a wedding is planned
            </h6>
            <a href={projects.weddingPlanner} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <img src="/assets/orderSummary.png" alt="" />
        <h4>Customer Order Summary Page</h4>

        <div className="Overlay">
          <div className="Text">
            <h6>
              A webpage that displays the summary of a customer's order <br />
              (API + REACT)
            </h6>
            <a href={projects.orderSummary} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
