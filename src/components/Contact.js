import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            message:''
        }
    }
}

function Contact() {
  return (
    <section id="contactInfo">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="sectionHead">Let's Get In Touch</h2>
                    <hr className="my-4"/>
                    <p className="mb-5">Hi, I open to any project and tutoring, building web, and app.<br /> Feel free to contact me via email.<br />  - Samuel</p>
                </div>
            </div>
            <div className="row text-center mx-auto iconBox">
                <div className="col d-flex justify-content-around p-1 pb-3">
                    <a href={"https://www.linkedin.com/in/samuel-hc-yoo/"}><i className="fab fa-linkedin-in fa-3x mb-3 sr-contact"></i></a>
                    <a href={"https://github.com/samuelyoo/"} target="_blank"><i className="fa fa-github fa-3x mb-3 sr-contact"></i></a>
                    <a href={"mailto:sam.hc.yoo@gmail.com"}><i className="fa fa-envelope fa-3x mb-3 sr-contact" href={"mailto:sam.hc.yoo@gmail.com"}></i></a>
                </div>
            </div>
            <div className="row container">
                <div className="col-md-6 m-0">
                    <div className="contctBox">
                        <h3 id="contact">Contac Me</h3>
                        <hr/>
                        <p>Do you have any questions?<br/> Please leave a message below!</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit="{https://formspree.io/xeqrpnoo}" method="POST">
                        <label> <span> Your email:</span>
                            <input type="text" name="_replyto" className="form-control" />
                        </label>
                        <label> <span> Your message:</span>
                            <textarea name="message" className="form-control"></textarea>
                        </label>
                        <button className="btnTheme" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;