import React, { useState, useEffect } from "react";

// import { Paper, Box } from "@material-ui/core";
import "../assets/styles/Agreement.css";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function Aggreement() {
  const [isRed, setIsRed] = useState(true);
  const [studentname, setstudentname] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");
  const [phoneA, setphoneA] = useState("");
  const [phoneB, setphoneB] = useState("");
  const [phoneC, setphoneC] = useState("");
  const [socialSecurity, setsocialSecurity] = useState("");
  const [date, setdate] = useState("");
  const [emergencyNumber, setemergencyNumber] = useState("");
  const [relationship, setrelationship] = useState("");
  const [telephone, settelephone] = useState("");
  const [studentintial, setstudentintial] = useState("");
  const [studentintialTwo, setstudentintialTwo] = useState("");
  const [studentintialThree, setstudentintialThree] = useState("");
  const [studentintialFour, setstudentintialFour] = useState("");
  const [studentintialFive, setstudentintialFive] = useState("");
  const [studentintialSix, setstudentintialSix] = useState("");
  const [studentintialSeven, setstudentintialSeven] = useState("");
  const [esignature, setesignature] = useState("");
  const [esignatureparent, setesignatureparent] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsRed((prevIsRed) => !prevIsRed);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleSSNChange = (event) => {
    const inputSSN = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedSSN = "";

    if (inputSSN.length > 0) {
      formattedSSN = inputSSN.slice(0, 3);

      if (inputSSN.length >= 4) {
        formattedSSN += "-" + inputSSN.slice(3, 5);
      }

      if (inputSSN.length >= 6) {
        formattedSSN += "-" + inputSSN.slice(5, 9);
      }
    }
    setsocialSecurity(formattedSSN);
  };
  const handlePhoneChangeA = (event) => {
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
    setphoneA(formattedPhone);
  };
  const handlePhoneChangeB = (event) => {
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
    setphoneB(formattedPhone);
  };
  const handlePhoneChangeC = (event) => {
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
    setphoneC(formattedPhone);
  };
  const handlePhoneChangeTele = (event) => {
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
    settelephone(formattedPhone);
  };

  

  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-end",
    marginTop: 20,
  };
  return (
    <div
      className="container"
      style={{ alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      {/* <Paper
        elevation={5}
        style={{ padding: 30, marginTop: 20, width: "80%" }}
        className="paper"
      > */}
      <img
        src={Logo}
        style={{ width: 200, marginRight: "auto", marginLeft: "auto" }}
      />

      <p style={{ textAlign: "center" }}>
        380 E Northwest Hwy Suite 360 B Des Plaines IL 60016
      </p>
      <p style={{ textAlign: "center" }}>Tel: 877-204-6232</p>
      <p style={{ textAlign: "center" }}>Email:Info@medicaltraininghub.com</p>

      <h2 style={{ textAlign: "center" }}>Enrollment Agreement</h2>
      <h3 style={{ textAlign: "center", color: "#03045e" }}>
        PHLEBOTOMY TECHNICIAN TRAINING PROGRAM
      </h3>
      <div style={divStyle}>
        <label>
          Student Name:
          <input
            className="agg-input"
            onChange={(event) => setstudentname(event.target.value)}
            value={studentname}
          />
        </label>
        <label>
          Address:
          <input
            className="agg-input"
            onChange={(event) => setaddress(event.target.value)}
            value={address}
          />
        </label>
        <label>
          Zip code:
          <input
            className="agg-input"
            onChange={(event) => setzip(event.target.value)}
            value={zip}
          />
        </label>
      </div>
      <div style={divStyle}>
        <label>
          Phone Number Home:
          <input
            className="agg-input"
            onChange={handlePhoneChangeA}
            value={phoneA}
          />
        </label>
        <label>
          Cell Phone:
          <input
            className="agg-input"
            onChange={handlePhoneChangeB}
            value={phoneB}
          />
        </label>
        <label>
          Work Phone No:
          <input
            className="agg-input"
            onChange={handlePhoneChangeC}
            value={phoneC}
          />
        </label>
      </div>
      <div style={divStyle}>
        <label>
          SOCIAL SECURITY #:
          <input
            className="agg-input"
            onChange={handleSSNChange}
            value={socialSecurity}
          />
        </label>
        <label>
          Date:
          <input
            className="agg-input"
            type="date"
            value={date}
            onChange={(event) => setdate(event.target.value)}
          />
        </label>
        <label>
          Emergency Contact:
          <input
            className="agg-input"
            onChange={handlePhoneChangeTele}
            value={emergencyNumber}
          />
        </label>
      </div>
      <div style={divStyle}>
        <label style={{ marginTop: 20 }}>
          Relationship:
          <input
            className="agg-input"
            onChange={(event) => setrelationship(event.target.value)}
            value={relationship}
          />
        </label>
        <label
          style={{ marginTop: 20, marginRight: "auto", marginLeft: "11%" }}
        >
          Telephone#:
          <input
            className="agg-input"
            onChange={()=>{}}
            value={telephone}
          />
        </label>
      </div>
      <div>
        <h3
          style={{
            textAlign: "center",
            marginTop: 40,
            fontWeight: "bold",
            fontStyle: "italic",
            color: isRed == true ? "#03045e" : "red",
          }}
        >
          *PHLEBOTOMY COURSE STARTS IN OCTOBER*
        </h3>
      </div>
      <div>
        <h3
          style={{
            textDecorationLine: "underline",
            marginTop: 40,
            textAlign: "center",
          }}
        >
          Notice to Student
        </h3>
        <ol>
          <li>
            Do not sign this agreement before you have read it or if it contains
            any blank spaces.
          </li>
          <li>
            This agreement is a legally binding instrument and is only binding
            when the agreement is accepted, signed, and dated by the authorized
            official of the school or the admissions officer at the school’s
            principal place of business. Read all pages of this contract before
            signing.
          </li>
          <li>
            You are entitled to an exact copy of the agreement and any
            disclosure pages you sign.
          </li>
          <li>
            This agreement and the school catalog constitute the entire
            agreement between the student and the school.
          </li>
          <li>
            Any changes in this agreement must be made in writing and shall not
            be binding on either the student or the school unless such changes
            have been approved in writing by the authorized official of the
            school and by the student or the student’s parent or guardian. All
            terms and conditions of the agreement are not subject to amendment
            or modification by oral agreement.
          </li>
          <li>
            The school does not guarantee the transferability of credits to
            another school, college, or university. Credits or coursework are
            not likely to transfer; any decision on the comparability,
            appropriateness, and applicability of credit and whether credit
            should be accepted is the decision of the receiving.
          </li>
          <li>
            I understand that should I withdraw from a course prior to the
            completion of said program, I am responsible for returning all
            property including supplies, text books, when applicable.
          </li>
        </ol>
        <h4 style={{ fontWeight: "bold" }}>Student Acknowledgements:</h4>
        <ol>
          <li>
            I hereby acknowledge receipt of the school’s catalog, which contains
            information describing programs offered, and equipment or supplies
            provided. The school catalog is included as part of this enrollment
            agreement and I acknowledge that I have received a copy of this
            catalog.{" "}
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintial(event.target.value)}
                value={studentintial}
              />
            </p>
          </li>
          <li>
            I have carefully read and received an exact copy of this enrollment
            agreement.{" "}
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintialTwo(event.target.value)}
                value={studentintialTwo}
              />
            </p>
          </li>
          <li>
            I understand that the school may terminate my enrollment if I fail
            to comply with attendance, academic, and financial requirements or
            if I fail to abide by established standards of conduct, as outlined
            in the school catalog. While enrolled in the school, I understand
            that I must maintain satisfactory academic progress as described in
            the school catalog and that my financial obligation to the school
            must be paid in full before a certificate or credential may be
            awarded.
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintialThree(event.target.value)}
                value={studentintialThree}
              />
            </p>
          </li>
          <li>
            I hereby acknowledge that the school has made available to me all
            required disclosure information listed under the Consumer
            Information section of this Enrollment Agreement.
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintialFour(event.target.value)}
                value={studentintialFour}
              />
            </p>
          </li>
          <li>
            I understand that the school does not guarantee transferability of
            credit and that in most cases, credits or coursework are not likely
            to transfer to another institution. In cases where transferability
            is guaranteed, [school name] must provide me copies of transfer
            agreements that name the exact institution(s) and include agreement
            details and limitations.
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintialFive(event.target.value)}
                value={studentintialFive}
              />
            </p>
          </li>
          <li>
            I understand that the school does not guarantee job placement to
            graduates upon program completion.
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintialSix(event.target.value)}
                value={studentintialSix}
              />
            </p>
          </li>
          <li>
            I understand that complaints, which cannot be resolved by direct
            negotiation with the school in accordance with its written grievance
            policy, may be filed with : the Illinois Board of Higher Education,
            1N. Old State Capitol Plaza Suite 333, Springfield, IL 62701-1377 or
            at www.ibhe.org.
            <p style={{ marginBottom: 15, fontWeight: "bold" }}>
              Student Initials:
              <input
                className="agg-input small-width-input"
                onChange={(event) => setstudentintialSeven(event.target.value)}
                value={studentintialSeven}
              />
            </p>
          </li>
        </ol>
        <p>
          <i>
            <b>
              The student acknowledges receiving a copy of this completed
              agreement, the school catalog, and written confirmation of
              acceptance prior to signing this contract. The student by signing
              this contract acknowledges that he/she has read this contract,
              understands the terms and conditions, and agrees to the conditions
              outlined in this contract:
            </b>
          </i>
        </p>
        <p>The student and the school will retain a copy of this agreement.</p>
        <p style={{ marginBottom: 15, fontWeight: "bold" }}>
          E-signature of Student
          <input
            className="agg-input small-width-input"
            value={esignature}
            onChange={(event) => setesignature(event.target.value)}
          />
          Date:
          <input
            className="agg-input small-width-input"
            type="date"
            value={date}
            onChange={(event) => setdate(event.target.value)}
          />
        </p>
        <p style={{ marginBottom: 15, fontWeight: "bold" }}>
          E-signature of Parent(if minor):
          <input
            className="agg-input small-width-input"
            value={esignatureparent}
            onChange={(event) => setesignatureparent(event.target.value)}
          />
          Date:
          <input
            className="agg-input small-width-input"
            type="date"
            value={date}
            onChange={(event) => setdate(event.target.value)}
          />
        </p>

        <button
          className="btn"
          onClick={() => {
            if (
              studentname &&
              address &&
              zip &&
              phoneA &&
              telephone &&
              socialSecurity &&
              date &&
              emergencyNumber &&
              relationship &&
              telephone &&
              studentintial &&
              studentintialTwo &&
              studentintialThree &&
              studentintialFour &&
              studentintialFive &&
              studentintialSix &&
              studentintialSeven &&
              esignature
            ) {
              alert("Enrollment Successful!");
              window.location.href = "#/";
            } else {
              alert(
                "Please fill the Agreement Carefully! Make sure all necessary fields are filled!"
              );
            }
          }}
        >
          Enroll
        </button>
      </div>
      {/* </Paper> */}
    </div>
  );
}
