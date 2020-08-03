import React from "react";

function copyright(){
    const styleObj ={
        fontSize: "10px",
        padding: "5px",
        margintop: "10px",
        color: "#00A699",
    }
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <footer className="footer">
        <div className="container text-right">
          <span style={{
                fontSize: "10px",
                padding: "5px",
                margintop: "10px",
                color: "#00A699"}}>
                © Samuel Yoo with Bootstrap</span>
        </div>
      </footer>
  );
}

export default Footer;