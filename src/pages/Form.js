// import LinearStepper from "../LinearSteppe
import { useState } from "react";
// import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
// import "../styles/form.css";
import "../assets/styles/form.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aggreement from "../components/Aggreement";
import FORMIMAGE from "../assets/images/form_img.png";
import axios from "axios";

export default function Form() {
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dob, setdob] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [email, setemail] = useState("");
  const [zip, setzip] = useState("");
  const [usCitizen, setusCitizen] = useState("");
  const [disease, setdisease] = useState("");
  const [criminal, setcriminal] = useState("");
  const [commitment, setcommitment] = useState("");
  const [certifiedNurse, setcertifiedNurse] = useState("");
  const [phelbotomyTechnician, setphelbotomyTechnician] = useState("");
  const [recertification, setrecertification] = useState("");
  const [personality, setpersonality] = useState("");
  const [punctuality, setpunctuality] = useState("");
  const [bloodAfraid, setbloodAfraid] = useState("");
  const [canLift, setcanLift] = useState("");
  const [anyInjuries, setanyInjuries] = useState("");
  const [currentWorking, setcurrentWorking] = useState("");
  const [jobEffect, setjobEffect] = useState("");
  const [personalSupport, setpersonalSupport] = useState("");
  const [difficultyLearning, setdifficultyLearning] = useState("");
  const [seriousCommitment, setseriousCommitment] = useState("");
  const [heardFrom, setheardFrom] = useState("");
  const [referredBy, setreferredBy] = useState("");
  const [sponsor, setsponsor] = useState("");
  const [walkin, setwalkin] = useState("");
  const [Error, setError] = useState("");
  const [ErrorText, setErrorText] = useState("");
  const [Success, setSuccess] = useState(false);
  const [course, setcourse] = useState("");
  const [endrolled, setendrolled] = useState(false);
  function formatDateToMMDDYYYY(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
  function isValidEmail(email) {
    // Regular expression for a valid email address
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  }

  const handlePost = () => {
    var today = new Date();

    if (firstName == "") {
      alert("Please fill First Name!");
      return;
    }
    if (lastName == "") {
      alert("Please fill Last Name!");
      return;
    }
    if (dob == "") {
      alert("Please fill your Date of Birth!");
      return;
    }
    if (phoneNumber == "" && typeof phoneNumber != "number") {
      alert("Make sure your Phone Number is correct!");
      return;
    }
    if (address == "") {
      alert("Please fill your address!");
      return;
    }
    if (city == "") {
      alert("Please fill your city!");
      return;
    }
    if (state == "") {
      alert("Please fill Your State!");
      return;
    }
    if (zip == "") {
      alert("Please fill Your Zip Code!");
      return;
    }
    if (usCitizen == "") {
      alert("Please fill Citizen Status!");
      return;
    }
    if (email == "") {
      alert("Please fill Your Email!");
      return;
    }
    if (disease == "") {
      alert("Please fill Your Disease Status!");
      return;
    }
    if (criminal == "") {
      alert("Please fill Your Criminal Status!");
      return;
    }
    if (commitment == "") {
      alert("Please fill Your Commitment!");
      return;
    }
    if (state == "") {
      alert("Please fill Your State!");
      return;
    }
    if (personality == "") {
      alert("Please fill Your Personlity Details!");
      return;
    }
    if (punctuality == "") {
      alert("Please fill Your Punctuality Details!");
      return;
    }
    if (bloodAfraid == "") {
      alert("Please fill Your Blood Phoabia Details!");
      return;
    }
    if (personality == "") {
      alert("Please fill Your Personlity Details!");
      return;
    }
    if (canLift == "") {
      alert("Please fill Your Physical Strenght!");
      return;
    }
    if (anyInjuries == "") {
      alert("Please fill Your Injury Details!");
      return;
    }
    if (currentWorking == "") {
      alert("Please fill Employment Status!");
      return;
    }
    if (jobEffect == "") {
      alert("Please fill Your Employment Effects!");
      return;
    }
    if (personalSupport == "") {
      alert("Please fill who will support you financially!");
      return;
    }
    if (personality == "") {
      alert("Please fill Your Personlity Details!");
      return;
    }
    if (difficultyLearning == "") {
      alert("Please fill your learning disability!");
      return;
    }
    if (seriousCommitment == "") {
      alert("Please fill asure your commitment for course completion!");
      return;
    }
    if (course == "") {
      alert("Please Select a course you want to pursue!");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please Enter a valid Email!");
      return;
    }

    const DATA = {
      registration_date: formatDateToMMDDYYYY(today),
      bnatp: "this is some bnatp text",
      phlebotomy: phelbotomyTechnician,
      recert: "This is some recert text",
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      dob: dob,
      current_phone: phoneNumber,
      current_address: address,
      city: city,
      state: state,
      zip: zip,
      us_citizen: usCitizen,
      email: email,
      communicable_diseases: disease,
      criminal_background_check: criminal,
      commit_complete_course: commitment,
      certified_nursing_assistant: certifiedNurse,
      phlebotomy_Technician: phelbotomyTechnician,
      recertification_of_skills: recertification,
      rate_yourself: personality,
      cooperation_other: punctuality,
      afraid_of_blood_other: bloodAfraid,
      lift_50_70_lbs: canLift,
      injuries: anyInjuries,
      currently_working: currentWorking,
      employment_affect_class_schedule: jobEffect,
      personal_support_completion_course_responsibity: personalSupport,
      learning_difficulty: difficultyLearning,
      financial_obligations: seriousCommitment,
      about_hugs_inc_courses: heardFrom,
      reffered_by: referredBy,
      sponsor: sponsor,
      walk_in: walkin,
      course_selected: course,
    };

    // console.log("This is data being send", DATA);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DATA),
    };
    axios
      .post(
        "https://zeneqrqtqb.execute-api.us-east-2.amazonaws.com/api/pre-registration",
        DATA,
        requestOptions
      )
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        if (res.status == true) {
          setSuccess(true);
        } else {
          setErrorText("Something went Wrong!");
          setError(true);
        }
      })
      .catch((error) => {
        setErrorText(error);
        setError(true);
      });
    // fetch(
    //   "https://zeneqrqtqb.execute-api.us-east-2.amazonaws.com/api/pre-registration",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((res) => {
    //     console.log("res", res);
    //     if (res.status == true) {
    //       setSuccess(true);
    //     } else {
    //       setErrorText("Something went Wrong!");
    //       setError(true);
    //     }
    //   })
    //   .catch((error) => {
    //     setErrorText(error);
    //     setError(true);
    //   });
  };

  const handlePhoneChange = (event) => {
    const inputphone = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedPhone = "";

    if (inputphone.length > 0) {
      formattedPhone = inputphone.slice(0, 3);

      if (inputphone.length >= 4) {
        formattedPhone += "-" + inputphone.slice(3, 6); // Corrected slice indices
      }

      if (inputphone.length >= 7) {
        formattedPhone += "-" + inputphone.slice(6, 10); // Corrected slice indices
      }
    }
    setphoneNumber(formattedPhone);
  };
  return (
    <>
      <div>
        {!Success ? (
          <>
            {/* <p>First Name</p> */}
            <Container className="form-container">
              <Row>
                <Col className="form-image"></Col>
                <Col>
                  <Row className="first-row">
                    <h1>REGISTRATION APPLICATION</h1>

                    <input
                      placeholder="First Name"
                      onChange={(event) => {
                        setfirstName(event.target.value);
                      }}
                    />

                    {/* <p>Middle Name</p> */}
                    <input
                      placeholder="Middle Name"
                      onChange={(event) => {
                        setmiddleName(event.target.value);
                      }}
                    />

                    {/* <p>Last Name</p> */}
                    <input
                      placeholder="Last Name"
                      onChange={(event) => {
                        setlastName(event.target.value);
                      }}
                    />
                    <input
                      placeholder="Date of Birth"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      pattern="\d{4}-\d{2}-\d{2}"
                      onChange={(event) => {
                        setdob(event.target.value);
                      }}
                    />
                  </Row>
                  <Row className="second-row">
                    <input
                      placeholder="Email"
                      type="email"
                      onChange={(event) => {
                        setemail(event.target.value);
                      }}
                    />

                    {/* <p>Phone Number</p> */}
                    <input
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                    />
                  </Row>
                  <Row className="third-row">
                    <input
                      placeholder="City"
                      onChange={(event) => {
                        setcity(event.target.value);
                      }}
                    />

                    {/* <p>State</p> */}
                    <input
                      placeholder="State"
                      onChange={(event) => {
                        setstate(event.target.value);
                      }}
                    />

                    {/* <p>Zip Code</p> */}
                    <input
                      placeholder="Zip Code"
                      onChange={(event) => {
                        setzip(event.target.value);
                      }}
                    />
                  </Row>
                  <Row className="fourth-row">
                    <textarea
                      placeholder="Address"
                      className="address"
                      onChange={(event) => {
                        setaddress(event.target.value);
                      }}
                    />
                  </Row>
                  {/* <p>Date of Birth</p> */}

                  {/* <p>Email</p> */}

                  {/* <p>Address</p> */}

                  {/* <p>City</p> */}
                  <Row>
                    <div className="radio-group">
                      <p>Are You a US Citizen?</p>
                      <label htmlFor="yes-us">
                        Yes
                        <input
                          id="yes-us"
                          type="radio"
                          name="us-citizen"
                          className="inline"
                          checked={usCitizen === "y"}
                          value={"y"}
                          onChange={(event) => {
                            setusCitizen(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label htmlFor="no-us">
                        No
                        <input
                          id="no-us"
                          type="radio"
                          name="us-citizen"
                          className="inline"
                          checked={usCitizen === "n"}
                          value={"n"}
                          onChange={(event) => {
                            setusCitizen(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="radio-group">
                      <p>Do you have any communicable diseases?</p>
                      <label htmlFor="yes-disease">
                        Yes
                        <input
                          id="yes-disease"
                          type="radio"
                          name="disease"
                          className="inline"
                          value={"y"}
                          checked={disease === "y"}
                          onChange={(event) => {
                            setdisease(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label htmlFor="no-disease">
                        No;
                        <input
                          id="no-disease"
                          type="radio"
                          name="disease"
                          checked={disease === "n"}
                          className="inline"
                          value={"n"}
                          onChange={(event) => {
                            setdisease(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <br />
                    {/* <i class="note">
                      *A Mandatory TB screening is required before admission to
                      program. *
                    </i> */}
                    <div className="radio-group">
                      <p>
                        Do you have any issues on{" "}
                        <i>criminal background check?</i>
                      </p>
                      <label htmlFor="yes-criminal">
                        Yes
                        <input
                          id="yes-criminal"
                          type="radio"
                          name="criminal"
                          className="inline"
                          value={"y"}
                          checked={criminal === "y"}
                          onChange={(event) => {
                            setcriminal(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label htmlFor="no-criminal">
                        No&nbsp;
                        <input
                          id="no-criminal"
                          type="radio"
                          name="criminal"
                          className="inline"
                          value={"n"}
                          checked={criminal === "n"}
                          onChange={(event) => {
                            setcriminal(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="radio-group">
                      <p>Are you able to commit the time to complete course?</p>
                      <label htmlFor="yes-course">
                        Yes
                        <input
                          id="yes-course"
                          type="radio"
                          name="course"
                          className="inline"
                          value={"y"}
                          checked={commitment === "y"}
                          onChange={(event) => {
                            setcommitment(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <label htmlFor="no-course">
                        No&nbsp;
                        <input
                          id="no-course"
                          type="radio"
                          name="course"
                          className="inline"
                          value={"n"}
                          checked={commitment === "n"}
                          onChange={(event) => {
                            setcommitment(event.target.value);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container className="form-container">
              <Row className="first-row">
                <select
                  style={{ marginLeft: 15 }}
                  id="course-select"
                  name="course-select"
                  onChange={(event) => {
                    setcourse(event.target.value);
                  }}
                >
                  <option value="">SELECT A COURSE TO PERSUE</option>
                  <option value="Phlebotomy">Phlebotomy </option>
                  <option value="CNA">CNA</option>
                  <option value="CPR">CPR</option>
                  {/* <option value="Combine">Combine</option> */}
                </select>
              </Row>
              {course ? (
                <>
                  <h1>WHY DO YOU WANT TO BECOME A</h1>

                  {course === "CNA" ? (
                    <Row className="first-row">
                      <p>Certified Nursing Assistant:</p>
                      <textarea
                        style={{ marginLeft: 15 }}
                        onChange={(event) => {
                          setcertifiedNurse(event.target.value);
                        }}
                      />
                    </Row>
                  ) : course === "Phlebotomy" ? (
                    <Row className="first-row">
                      <p>Phlebotomy Technician:</p>
                      <textarea
                        style={{ marginLeft: 15 }}
                        onChange={(event) => {
                          setphelbotomyTechnician(event.target.value);
                        }}
                      />
                    </Row>
                  ) : (
                    <Row className="first-row">
                      <p>CPR Professional</p>
                      <textarea
                        style={{ marginLeft: 15 }}
                        onChange={(event) => {
                          setrecertification(event.target.value);
                        }}
                      />
                    </Row>
                  )}
                </>
              ) : (
                <></>
              )}
              <Row className="second-row">
                <div className="second-row-inside">
                  <p>
                    Rate Yourself: Attitude, honesty, initiative, creativity.
                  </p>
                  <select
                    id="personality"
                    name="personality"
                    onChange={(event) => {
                      setpersonality(event.target.value);
                    }}
                  >
                    <option value="">(select one)</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
                <div className="second-row-inside">
                  <p>Cooperation, Attendance,Punctuality, Dependable:</p>
                  <select
                    id="punctuality"
                    name="punctuality"
                    onChange={(event) => {
                      setpunctuality(event.target.value);
                    }}
                  >
                    <option value="">(select one)</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
              </Row>
              <Row>
                <div className="radio-group">
                  <p>Are you afraid of blood, needles ,diseases ?</p>
                  <label htmlFor="yes-afraid">
                    Yes
                    <input
                      id="yes-afraid"
                      type="radio"
                      name="afraid"
                      className="inline"
                      value={"y"}
                      checked={bloodAfraid === "y"}
                      onChange={(event) => {
                        setbloodAfraid(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="no-afraid">
                    No&nbsp;
                    <input
                      id="no-afraid"
                      type="radio"
                      name="afraid"
                      className="inline"
                      value={"n"}
                      checked={bloodAfraid === "n"}
                      onChange={(event) => {
                        setbloodAfraid(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="radio-group">
                  <p>
                    Are you able to lift 50-70lbs
                    ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <label htmlFor="yes-lift">
                    Yes
                    <input
                      id="yes-lift"
                      type="radio"
                      name="lift"
                      className="inline"
                      value={"y"}
                      checked={canLift === "y"}
                      onChange={(event) => {
                        setcanLift(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="no-lift">
                    No&nbsp;
                    <input
                      id="no-lift"
                      type="radio"
                      name="lift"
                      className="inline"
                      value={"n"}
                      checked={canLift === "n"}
                      onChange={(event) => {
                        setcanLift(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </Row>
            </Container>
            <Container className="form-container">
              <Row className="first-row">
                <p>Have you had any injuries? if yes describe:</p>
                <textarea
                  style={{ marginLeft: 15 }}
                  onChange={(event) => {
                    setanyInjuries(event.target.value);
                  }}
                />
              </Row>
              <Row className="second-row ">
                <div className="radio-group second-row-inside-two">
                  <p>Are you currently working?</p>
                  <label htmlFor="yes-job">
                    Yes
                    <input
                      id="yes-job"
                      type="radio"
                      name="job"
                      className="inline"
                      value={"y"}
                      checked={currentWorking === "y"}
                      onChange={(event) => {
                        setcurrentWorking(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="no-job">
                    No&nbsp;
                    <input
                      id="no-job"
                      type="radio"
                      name="job"
                      className="inline"
                      value={"n"}
                      checked={currentWorking === "n"}
                      onChange={(event) => {
                        setcurrentWorking(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="radio-group second-row-inside-two">
                  <p>Will employment affect your class schedule? </p>
                  <label htmlFor="yes-effect">
                    Yes
                    <input
                      id="yes-effect"
                      type="radio"
                      name="effect"
                      className="inline"
                      value={"y"}
                      checked={jobEffect === "y"}
                      onChange={(event) => {
                        setjobEffect(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="no-effect">
                    No&nbsp;
                    <input
                      id="no-effect"
                      type="radio"
                      name="effect"
                      className="inline"
                      value={"n"}
                      checked={jobEffect === "n"}
                      onChange={(event) => {
                        setjobEffect(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="radio-group second-row-inside-two">
                  <p>
                    Do you have personal support for completion
                    <br />
                    of courses responsibilities?
                  </p>
                  <label htmlFor="yes-support">
                    Yes
                    <input
                      id="yes-support"
                      type="radio"
                      name="support"
                      className="inline"
                      value={"y"}
                      checked={personalSupport === "y"}
                      onChange={(event) => {
                        setpersonalSupport(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="no-support">
                    No&nbsp;
                    <input
                      id="no-support"
                      type="radio"
                      name="support"
                      className="inline"
                      value={"n"}
                      checked={personalSupport === "n"}
                      onChange={(event) => {
                        setpersonalSupport(event.target.value);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </Row>
              <Row className="first-row">
                <p>Do you have any difficulty learning ? Explain : </p>
                <textarea
                  style={{ marginLeft: 15 }}
                  onChange={(event) => {
                    setdifficultyLearning(event.target.value);
                  }}
                />
              </Row>
              <Row className="second-row">
                <p>
                  *Once classes begin, are you{" "}
                  <i>
                    willing and able to make a serious commitment to finishing
                    your training and financial obligations?
                  </i>
                </p>
                <input
                  onChange={(event) => {
                    setseriousCommitment(event.target.value);
                  }}
                />
              </Row>
              <div className="item-container">
                <button className="btn" onClick={handlePost}>
                  Submit
                </button>
                {/* </div> */}
              </div>
            </Container>
          </>
        ) : (
          <>
            <Container>
              {!endrolled ? (
                <Col>
                  <div className="success-text-container">
                    <h3 className="horizontal-container success-text">
                      Your have been registered successfully!
                    </h3>

                    <button className="btn" onClick={() => setendrolled(true)}>
                      Enroll Here
                    </button>
                  </div>
                </Col>
              ) : null}
              {course && endrolled ? (
                <>
                  (
                  {course == "Phlebotomy" ? (
                    <Aggreement />
                  ) : course == "CNA" ? (
                    <Col>
                      <div className="success-text-container">
                        <h3 className="horizontal-container success-text text-align-center">
                          Your have been registered successfully for CNA Course!
                          You will be informed via Email onces the course if
                          being offered! <i>Coming Soon!</i>
                        </h3>

                        {/* <button className="btn" >Enroll Here</button> */}
                      </div>
                    </Col>
                  ) : course == "CPR" ? (
                    <Col>
                      <div className="success-text-container">
                        <h3 className="horizontal-container success-text">
                          Your have been registered successfully! For CPR course
                          you will be contacted via email for enrollment.
                        </h3>
                      </div>
                    </Col>
                  ) : null}
                  )
                </>
              ) : null}
            </Container>
          </>
        )}
      </div>
    </>
  );
}
