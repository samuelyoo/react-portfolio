import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Techinfo() {
  return (
    <div id="techInfo">
        <div className="container">
            <div className="row">
                <div className="col-lg text-center">
                    <h2 className="sectionHead">Technical Skills</h2>
                    <hr className="my-4"/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 d-flex justify-content-around p-1 pb-3">
                  <img src={process.env.PUBLIC_URL + "assets/image/logo/html.png"} height="40" className="d-inline-block align-top" alt="html logo" />
                  <img src={process.env.PUBLIC_URL +"assets/image/logo/css.png"} height="40" className="d-inline-block align-top" alt="css logo" />
                  <img src={process.env.PUBLIC_URL +"assets/image/logo/javascript.png"} height="40" className="d-inline-block align-top" alt="javascriptlogo" />
                </div>
                <div className="col-md-6 d-flex justify-content-around p-1 pb-3">
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/python.png"} height="40" className="d-inline-block align-top" alt="python logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/sql.png"} height="30" className="d-inline-block align-top" alt="sql logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/mongoDB.png"} height="30" className="d-inline-block align-top" alt="mongodb logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/git.png"} height="30" className="d-inline-block align-top" alt="git logo" />
                  </div>
              </div>
              <div className="row text-center">
                <div className="col-md-6 d-flex justify-content-around p-1 pb-3">
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/nodejs.png"} height="40" className="d-inline-block align-top" alt="nodejs logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/react.png"} height="40" className="d-inline-block align-top" alt="react logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/obj_c.png"} height="40" className="d-inline-block align-top" alt="objective c logo" />
                    
                </div>
                <div className="col-md-6 d-flex justify-content-around p-1 pb-3">
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/jQuery.png"} height="20" className="d-inline-block align-top mt-3" alt="jquery logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/bootstrap.png"} height="40" className="d-inline-block align-top" alt="bootstrap logo" />
                    <img src={process.env.PUBLIC_URL+ "assets/image/logo/Matlab_Logo.png"} height="40" className="d-inline-block align-top" alt="matlab logo" />
                </div>
              </div>
        </div>
    </div>
  );
}

export default Techinfo;