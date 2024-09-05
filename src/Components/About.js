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

              <p>As a software engineer with a passion for collaboration, I thrive in dynamic, cross-functional teams where communication and innovation lead the charge. I`m committed to building sustainable, iterative workflows that balance meeting deadlines with maintaining long-term success. Fresh from an immersive software engineering bootcamp, I`ve sharpened my technical skills in HTML, CSS, JavaScript, React, and Python, and am well-versed in automated testing and project management. My journey, however, didn`t start in code.</p>
              <p>With over a decade in the film industry, I`ve had the honor of premiering work at Sundance and even being shortlisted for the Oscars. You can find my work streaming on Netflix, HBO, Disney+, Paramount+, as well as several other platforms. My creative eye for multimedia, combined with an engineer`s attention to detail, means I handle projects with precision—meticulously organizing media assets, elevating user experiences, and ensuring the technical foundations are rock solid.</p>
              <p>Beyond the screen and the terminal, my heart lies on the ultimate frisbee field. Years of coaching, league commissioning, and youth organizing have instilled in me a deep understanding of teamwork, leadership, and building spaces for others to thrive.</p>
              <p>As a transgender and neurodivergent individual, I bring a unique perspective that drives my passion for building truly inclusive technology. Having experienced firsthand how often tech falls short for people like me, I`m energized by the opportunity to change that. My mission as a software engineer is to design innovative, accessible solutions that embrace diversity and empower everyone. I see technology as a tool for connection and equity, and I`m excited to be part of shaping a future where it works for all of us.</p>
              <p>I`m eager to bring this unique blend of creativity and technical know-how to a diverse, forward-thinking team where I can continue learning, contribute meaningfully, and grow alongside talented mentors. Whether it's brainstorming tech solutions, collaborating on innovative projects, tossing a frisbee, or talking films, I`m always excited to connect.</p>
              <p>Let`s create, innovate, and grow—together.</p>
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
