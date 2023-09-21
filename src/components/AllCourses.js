import React from "react";
// import { Paper, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import '../assets/styles/Courses.css'

export default function AllCourses() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col heading">
            <h1>Below Are the Courses Being Offered</h1>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <div className="row align-items-start">
          <div className="col">
            {/* <Paper component={Box} elevation={12}> */}
              <img src="https://images.unsplash.com/photo-1612776572997-76cc42e058c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE51cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
              <h2>CNA TRAINING</h2>
              <p>
                CNA training is a program that teaches students the skills and
                knowledge necessary to work as a certified nursing assistant
                (CNA). CNAs provide basic care to patients in hospitals, nursing
                homes, and other healthcare settings. They help patients with
                activities of daily living, such as bathing, dressing, and
                eating, and they also provide basic nursing care, such as taking
                vital signs and assisting with medication administration.
                <br />
                <br />
                <b>
                  Price:<i> Coming Soon</i>
                </b>
                <br />
                <br />
                <Link to={'/cna'} style={{textDecorationLine:'none'}}><a className="read-more">Read More</a></Link>
              </p>
            {/* </Paper> */}
          </div>
          <div className="col">
            {/* <Paper component={Box} elevation={12}> */}
              <img src="https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q1BSfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
              <h2>CPR TRAINING</h2>
              <p>
                CPR training is a program that teaches you the skills and
                knowledge necessary to perform cardiopulmonary resuscitation
                (CPR). CPR is a life-saving technique that can be used to help
                people who are experiencing cardiac arrest. In the classroom,
                you will learn about the anatomy and physiology of the heart,
                the signs and symptoms of<br/> cardiac arrest, and the proper
                technique for performing CPR.
                <br />
                <br />
                <b>
                  <i> $99</i>
                </b>
                <br />
                <br />
                <Link to={'/cpr'} style={{textDecorationLine:'none'}}><a className="read-more">Read More</a></Link>
              </p>
            {/* </Paper> */}
          </div>
          <div className="col">
            {/* <Paper component={Box} elevation={12}> */}
              <img src="https://images.unsplash.com/photo-1631815590058-860e4f83c1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE51cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
              <h2>PHLEBOTOMY TRAINING</h2>
              <p>
                Phlebotomy training is a program that teaches you the skills and
                knowledge necessary to draw blood from patients. In the
                classroom, you will learn about the anatomy and physiology of
                the circulatory system, the different types of blood tests, and
                the proper technique for drawing blood. In the hands-on
                practice, you will have the opportunity to draw blood from live
                patients under the supervision of a certified phlebotomist.
                <br />
                <br />
                <b>
                  Price:<i> $1,500 </i>
                </b>
                <br />
                <br />
                <Link to={'/phlebotomy'} style={{textDecorationLine:'none'}}><a className="read-more">Read More</a></Link>
              </p>
            {/* </Paper> */}
          </div>
        </div>
      </div>
    </>
  );
}
