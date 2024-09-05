import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>As a software engineer with a passion for dynamic collaboration, I excel in cross-functional teams where communication and innovation drive success. Following an intensive software engineering bootcamp, I`ve developed a robust skill set in HTML, CSS, JavaScript, React, and Python, complemented by expertise in automated testing and project management.</p>
              <p>My professional journey began in the film industry, where I had the privilege of premiering work at Sundance and receiving an Oscar shortlist nomination. My projects are featured on prominent platforms such as Netflix, HBO, and Disney+. This background in multimedia, coupled with a meticulous engineering approach, enables me to manage projects with both precision and creativity.</p>
              <p>Beyond my professional endeavors, I am deeply engaged in ultimate frisbee, where my roles as a coach and league commissioner have honed my leadership and teamwork skills. In both youth organizing and as a transgender and neurodivergent individual, I am committed to crafting technology that is inclusive and accessible, addressing the diverse needs of all users.</p>
              <p>I`m eager to bring this unique blend of creativity and technical know-how to a diverse, forward-thinking team where I can continue learning, contribute meaningfully, and grow alongside talented mentors. Whether it's brainstorming tech solutions, collaborating on innovative projects, tossing a frisbee, or talking films, I`m always excited to connect.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    
                    <span>
                      
                      <br />
                      {city}, {state} 
                      
                    </span>
                    
                    
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
