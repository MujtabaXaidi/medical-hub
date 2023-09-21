import React from "react";
// import { Paper } from "@material-ui/core";
// import "../styles/form.css";

export default function CPRPolicy() {
  const tableStyle = {
    border: "1px solid #000", // Add border to the table
  };

  const cellStyle = {
    border: "1px solid #000", // Add border to table cells
    padding: "8px", // Add some padding for better spacing
  };
  return (
    <div
      className="container d-flex"
      style={{ alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      {/* <Paper
        elevation={5}
        style={{ padding: 30, marginTop: 20, width: "80%" }}
        className="paper"
      > */}
      <div>
        <h1 className="main-heading">CPR POLICY</h1>
        <ul>
          <li>
            The course provides the learner with a basic understanding of human
            anatomy and the cardiovascular system as it relates to CPR.
          </li>
          <li>
            Hands-on training in both classroom and practical scenarios to
            develop life-saving CPR skills.
          </li>
          <li>
            Learning the correct techniques for performing chest compressions,
            rescue breathing, and using automated external defibrillators
            (AEDs).
          </li>
          <li>
            Emphasizing the importance of quick response, clear communication,
            and remaining calm during emergencies.
          </li>
          <li>
            Introduction to the principles of CPR, including when and how to
            initiate it, and the importance of early defibrillation.
          </li>
          <li>
            Awareness of different CPR certification levels and their
            applicability in various settings, such as healthcare, workplace,
            and community.
          </li>
          <li>
            Understanding the importance of rapid intervention in cardiac arrest
            situations to improve survival rates.
          </li>
          <li>
            Proper techniques for infection control during CPR procedures to
            protect both rescuers and victims.
          </li>
          <li>
            Maintaining safety during CPR efforts, including checking for
            hazards and ensuring a safe environment for the victim and rescuers.
          </li>
        </ul>
        <p style={{ fontWeight: "bold" }}>
          <i>
            A CPR provider is a skilled healthcare responder, trained to execute
            life-saving techniques in emergencies, such as cardiopulmonary
            resuscitation and defibrillation, as instructed by medical
            protocols.
          </i>
        </p>
        {/* <h3>Required Textbook:</h3>
        <ul>
          <li>
            Phlebotomy Worktext and Procedures Manual 4th edition Robin S.
          </li>
          <li>
            Warehouse Richard Robinson. Elsevier Evolve. ISBN:978-0323-27940-6
          </li>
        </ul> */}
        <p style={{ fontWeight: "bold" }}>
          After successful completion of the course, the student may earn a
          certificate of completion and become eligible to take the National
          Certification Exam. Via varied National Certifier; MedCa, NHA,
          National Center for Competency Testing (NCCT) earn the title of NCPT
        </p>
        <h3>Requirements for Admission:</h3>
        <ul>
          <li>
            Interested student must complete enrollment application for
            admission to the program
          </li>
          <li>Be able to complete financial obligations</li>
          <li>
            This is an independent course must be 18 years of age at the time of
            enrollment
          </li>
          <li>Have a High School Diploma or GED</li>
          <li>
            Possess a valid social security card, State ID or Driver’s License
          </li>
          <li>
            Complete forms and authorize to have a fingerprint- background
            check.
          </li>
          <li>Be willing to commit self to complete program successfully</li>
          <li>Be able to read and write English language</li>
          <li>Pass a basic math and reading entry test</li>
          {/* <li>
            Being a certified nursing assistant is beneficial or have completed
            a BNATP Course.
          </li> */}
        </ul>
        {/* <p>
          <i>
            A Certificate of completion will be earned at the end of successful
            course completion and the student may register to take the National
            Phlebotomy Exam; assistance for students in forms and registration
            will be by the MedicalTrainingHub assigned staff.
          </i>
        </p> */}
        <h3>TUITION & FEES: PHLEBOTOMY TECHNICIAN TRAINING PROGRAM </h3>
        <table style={tableStyle}>
          <thead></thead>
          <tbody>
            <tr>
              <td style={cellStyle}>
                Non- refundable registration fee:&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td style={cellStyle}>$99 </td>
            </tr>
            {/* <tr>
              <td style={cellStyle}>Tuition:&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td style={cellStyle}>960$</td>
            </tr>
            <tr>
              <td style={cellStyle}>
                Books, Course Materials:&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td style={cellStyle}>$210$</td>
            </tr>
            <tr>
              <td style={cellStyle}>
                Books, Course Materials:&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td style={cellStyle}>$110$</td>
            </tr>
            <tr>
              <td style={cellStyle}>Lab Fees</td>
              <td style={cellStyle}>100$</td>
            </tr>
            <tr>
              <td style={cellStyle}>
                National Phlebotomy Testing Fee<br></br>(NCCT) *(not included in
                tuition)
              </td>
              <td style={cellStyle}>$90.00</td>
            </tr>
            <tr>
              <td style={cellStyle}>
                Misc.: Background Check/fingerprint:&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td style={cellStyle}>$40.00</td>
            </tr> */}
            <tr>
              <td style={cellStyle}>
                <b style={{ color: "#03045e" }}>Total Course Costs</b>
              </td>
              <td style={cellStyle}>
                <b style={{ color: "#03045e" }}>$99.00</b>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          <i>
            Payment options are check, cash, money order, credit card****A
            $35.00 returned check fee applies. All future payments will be
            required to pay in cash, money order or credit card****
          </i>
        </p>
        <h3>Refund - Cancellation Withdrawal Policy:</h3>
        <p style={{ fontWeight: "bold" }}>
          <i>
            If you cancel your course or withdraw from the school, you may be
            eligible for a refund of tuition paid based on the following
            <br />
            refund policy:
          </i>
        </p>
        <ul>
          <li>
            Tuition Refund Policy when notice is given before midnight of the
            3rd business day after the date of enrollment and prior to the first
            day of course attendance a tuition refund minus the non- refundable
            registration fee; (the student must notify MedicalTrainingHub and
            the appropriate school officials in order to withdraw or cancel from
            an enrolled course (the student needs to complete a school
            cancellation form.)
          </li>
          <li>
            If MedicalTrainingHub Inc. cancels or discontinues an enrolled
            course the applicant shall be refunded all paid fees.
          </li>
          <li>
            Stop payment of your check is not considered an official withdrawal
            and does not release you from financial obligations.
          </li>
          <li>
            When notice of withdrawal is given after the student has attended
            more than 17% of an enrolled course there is no refund of paid fees.
            Due to the short length of the program/course attendance is
            mandatory for every class. There are no make-up class days allowed
          </li>
          <li>
            Applicants not accepted by the school shall receive a full refund of
            all tuition and fees paid within 30 calendar days after the
            determination of non-acceptance is made.
          </li>
          <li>
            All refunds are paid directly to the student and within 30 calendar
            days from the date of receipt of cancellation.
          </li>
          <li>
            A student who on the personal initiative has enrolled and is no show
            for a course has unexcused absences for more than 2 school days of
            an enrolled course without solicitation or notification to school;
            is not subject to the cancellation policy refunds. For the purpose
            of cancellation, the date shall be the last day of course attendance
          </li>
        </ul>
        <h3>Tuition Reimbursement Scale:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>
                Day withdrawal occurred
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </th>
              <th style={cellStyle}>
                % of term
                completed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </th>
              <th style={cellStyle}>
                entitled refund (minus registration
                fees)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>1</td>
              <td style={cellStyle}>6%</td>
              <td style={cellStyle}>93.00</td>
            </tr>
            <tr>
              <td style={cellStyle}>2</td>
              <td style={cellStyle}>11%</td>
              <td style={cellStyle}>89.00</td>
            </tr>
            <tr>
              <td style={cellStyle}>3</td>
              <td style={cellStyle}>17%</td>
              <td style={cellStyle}>83.00</td>
            </tr>
            <tr>
              <td style={cellStyle}>4</td>
              <td style={cellStyle}>22%</td>
              <td style={cellStyle}>0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </Paper> */}
    </div>
  );
}
