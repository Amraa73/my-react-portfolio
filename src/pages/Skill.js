import React from "react";
// icon link
import { FaWebAwesome, FaFigma, FaWordpress, FaArrowRightArrowLeft, FaReact } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
// style link
import "../component/Skills.css"
function Skill() {
  return (
    <div className="skills">
      <div className="title">
        <span>Services</span>
        <h2>Skill-Set</h2>
      </div>
      <div className="skill-cards">
        <div className="card">
          <div className="card-title">
            <FaWebAwesome className="card-icon" />
            <span>Full Stack Developing</span>
          </div>
          <p>
            Full stack development is
            the practice of creating a
            complete application, including
            both the user-facing front end
            and the behind-the-scenes back end.
          </p>
        </div>
        <div className="card">
          <div className="card-title">
            <FaFigma className="card-icon" />
            <span>Figma Design</span>
          </div>
          <p>
            Figma is a collaborative,
            web-based design tool used for
            creating user interfaces for websites and apps.
          </p>
        </div>
        <div className="card">
          <div className="card-title">
            <FaWordpress className="card-icon" />
            <span>Wordpress Developing</span>
          </div>
          <p>
            WordPress is a free, open-source content management system (CMS) used to create and manage websites without needing to code.
          </p>
        </div>
        <div className="card">
          <div className="card-title">
            <FaArrowRightArrowLeft className="card-icon" />
            <span>Responsive websites</span>
          </div>
          <p>
            A responsive website is a website designed to adapt its layout and content to provide an optimal viewing experience across a wide range of devices and screen sizes. This means that whether a user is accessing the website on a desktop computer, a tablet, or a mobile phone, the website will automatically adjust its appearance to fit the screen, ensuring readability and usability without the need for excessive zooming, panning, or scrolling.
          </p>
        </div>
        <div className="card">
          <div className="card-title">
            <FaReact className="card-icon" />
            <span>React Js creation and developing</span>
          </div>
          <p>
            React.js is a free and open-source front-end JavaScript library primarily used for developing user interfaces (UIs) for web and native applications.
          </p>
        </div>
        <div className="card">
          <div className="card-title">
            <RiTailwindCssLine className="card-icon" />
            <span>Tailwind Styles</span>
          </div>
          <p>
            What is Tailwind CSS and how to use it?Tailwind is a utility-first CSS framework used to build custom user interfaces rapidly directly within an HTML or JSX file. Instead of writing custom CSS, developers use a large collection of pre-defined utility classes to style elements, which allows for quick development and consistent design.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill;