import React from "react";
// import img from "./img.png";
function Resume1() {
  return (
    <div>
      <section>
        <div className="contain">
          <div className="leftside">
            <div className="img">
              <img src="img.png" alt="logo" />
            </div>
            <div className="education">
              <h1 style={{ color: "#fecb00", marginBottom: "5px" }}>
                EDUCATION
              </h1>
              {/* <hr style={{ color: "#fecb00" }} /> */}
              <h1>COMPUTER SCIENCE AND ENGINEERING</h1>
              <p>University Institute Of Technology</p>
              <p>2019-2023</p>
              <br />

              <h1 style={{ color: "#fecb00" }}>INTERMEDIATE</h1>
              <h1>SCIENCE (PMC)</h1>
              <p>Inter Science College</p>
              <p>2016-2018</p>
            </div>
            <div className="reference" style={{ marginTop: "1em" }}>
              <h2>LANGUAGE</h2>
              <p>English </p>
              <p>Hindi</p>

              <br />
              <h2>INTREST/HOBBIE</h2>
              <p>Cricket</p>
              <p>Coding</p>
              <p>Music</p>
            </div>
            <br />
            <div className="detail">
              <h2>phone</h2>
              <p> 6206845987 </p>
              <h2>Email</h2>
              <p>mondal.deb1610@gmail.com</p>
              {/* <h2>LinkedIn</h2>
              <p>http://surl.li/gdmhe</p> */}
              <h2>Address</h2>
              <p>Dhanbad, Jharkhand</p>
            </div>
          </div>
          <div className="rightside">
            <div className="rightContain">
              <div className="name" style={{ width: "100%" }}>
                <h1>DEBNATH MONDAL</h1>
                <p>SOFTWARE ENGINEER</p>
              </div>
              <br />
              <br />
              <div className="aboutme">
                <h2>ABOUT ME</h2>
                <hr className="line" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo nam beatae quibusdam minima voluptatibus aut non,
                  architecto aperiam doloremque velit?
                </p>
              </div>
              <br />
              <br />
              <div className="project">
                <h1>PROJECT</h1>
                <hr className="line" />
                <div className="projectInside">
                  <h2 style={{ width: "170px" }}>2012-2014</h2>
                  <div className="projectDetail">
                    <h2>PROJECT NAME</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deserunt quod fugiat praesentium voluptatem accusamus
                      tenetur!
                    </p>
                  </div>
                </div>

                <div className="projectInside">
                  <h2 style={{ width: "170px" }}>2012-2014</h2>
                  <div className="projectDetail">
                    <h2>PROJECT NAME</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deserunt quod fugiat praesentium voluptatem accusamus
                      tenetur!
                    </p>
                  </div>
                </div>

                <div className="projectInside">
                  <h2 style={{ width: "170px" }}>2012-2014</h2>
                  <div className="projectDetail">
                    <h2>PROJECT NAME</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deserunt quod fugiat praesentium voluptatem accusamus
                      tenetur!
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <h2>SOFTWARE SKILL</h2>
              <hr className="line" />
              <div className="skill">
                <span>C/C++</span>
                <span>JAVA</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume1;
