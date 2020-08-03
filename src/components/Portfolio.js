import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Portfolio() {
  return (
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg text-center">
                    <h2 class="sectionHead">Portfolio</h2>
                    <hr class="my-4"/>
                </div>
            </div>
        </div>
        <div class="container p-0">
            <div class="row">
                <div class="col-sm6 col-lg-4 p-0">
                    <div href="" class="portfolio-box">
                        <img src="assets/image/portfolio/pageExchange.jpg" alt="" class="img-fluid"/>
                        <div class="portfolio-box-caption container">
                            <div class="projectTitle">
                                <span>Page Exchange</span>
                            </div>
                            <div class="projectDescrtion">
                                <p class="card-text">PageExchange is a mobile first web application that aims to replace the system of monetary exchange often associated with marketplace platforms, and dismantle the barriers that impose a sense of exclusion within a book exchange community.</p>
                            </div>
                            <div class="link">
                                <a href="https://obscure-stream-03506.herokuapp.com" class="btn btn-secondary m-1">Link</a> 
                                <a href="https://github.com/samuelyoo/TheSemicolons" class="btn btn-secondary m-1">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm6 col-lg-4 p-0">
                    <div href="" class="portfolio-box">
                        <img src="assets/image/portfolio/moodFoodChill.png" alt="" class="img-fluid"/>
                        <div class="portfolio-box-caption container">
                            <div class="projectTitle">
                                <span>Mood Food and Chill</span>
                            </div>
                            <div class="projectDescrtion">
                                <p class="card-text">This web application is using serverside and two APIs to retreive movie and food information under users' mood. This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                            </div>
                            <div class="link">
                                <a href="https://samuelyoo.github.io/Mood-Food-and-Chill/" class="btn btn-secondary m-1">Link</a> 
                                <a href="https://github.com/samuelyoo/Mood-Food-and-Chill" class="btn btn-secondary m-1">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm6 col-lg-4 p-0">
                    <div href="" class="portfolio-box">
                        <img src="assets/image/portfolio/demo_notetaker.gif" alt="" class="img-fluid"/>
                        <div class="portfolio-box-caption container">
                            <div class="projectTitle">
                                <span>Note Taker</span>
                            </div>
                            <div class="projectDescrtion">
                                <p class="card-text">This application can be used to write, save, delete notes. This application use an express backend and save and retrieve note data from a JSON file.</p>
                            </div>
                            <div class="link">
                                <a href="https://warm-island-06883.herokuapp.com/" class="btn btn-secondary m-1">Link</a> 
                                <a href="https://github.com/samuelyoo/Note-Taker" class="btn btn-secondary m-1">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm6 col-lg-4 p-0">
                    <div href="" class="portfolio-box">
                        <img src="assets/image/portfolio/demo_EmpMan.gif" alt="" class="img-fluid"/>
                        <div class="portfolio-box-caption container">
                            <div class="projectTitle">
                                <span>Employee Management</span>
                            </div>
                            <div class="projectDescrtion">
                                <p class="card-text">This application will ask prompts to user on node, and then it will create an HTML file that displays nicely formatted team roster based on the information provided by the user.</p>
                                </div>
                            <div class="link">
                                <a href="https://github.com/samuelyoo/Employee-Management" class="btn btn-secondary m-1">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm6 col-lg-4 p-0">
                    <div href="" class="portfolio-box">
                        <img src="assets/image/portfolio/demo_readme.gif" alt="" class="img-fluid"/>
                        <div class="portfolio-box-caption container">
                            <div class="projectTitle">
                                <span>Read Me Generator</span>
                            </div>
                            <div class="projectDescrtion">
                                <p class="card-text">This application will ask prompts to user on node, and then it will create a readme file.</p>
                            </div>
                            <div class="link">
                                <a href="https://github.com/samuelyoo/readMeGenerator" class="btn btn-secondary m-1">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm6 col-lg-4 p-0">
                    <div href="" class="portfolio-box">
                        <img src="assets/image/portfolio/demo_password.png" alt="" class="img-fluid"/>
                        <div class="portfolio-box-caption container">
                            <div class="projectTitle">
                                <span>Password Generator</span>
                            </div>
                            <div class="projectDescrtion">
                                <p class="card-text">This application is a simple password generating tool based on user-selected criteria.</p>
                            </div>
                            <div class="link">
                                <a href="https://samuelyoo.github.io/Password-Generator/index.html" class="btn btn-secondary m-1">Link</a> 
                                <a href="https://github.com/samuelyoo/Password-Generator" class="btn btn-secondary m-1">GitHub</a>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;