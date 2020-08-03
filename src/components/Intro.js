import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Intro() {
  return (
    <div id="info" className="bgColor">
        <div id ="tectInfo" className="container">
            <div className="row">
                <div className="col offset-lg-8 mx-auto text-center">
                    <h2 className="intro">
                        I am Samuel Yoo
                    </h2>
                    <hr className="my-4"/>
                    <p className="introContent">Hi, I am a Full-Stack Developer with a mechanical engineering background! This is my playground github page!</p>
                    <a href={process.env.PUBLIC_URL +"../assets/documents/resume_SamuelYoo.pdf"} target="_blank"> <button  className=" btnTheme js-scroll-trigger">Check Out Resume</button></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Intro;