// import React from 'react'

// export function Contact_us() {
//   return (
//     <div><>
//     <meta charSet="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Contact_us</title>
//     <link rel="stylesheet" type="text/css" href="Styles.css" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
//     />
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "\n         body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image: url('');\n      background-size: cover;\n      background-attachment: fixed;\n      background-position: center;\n      background-repeat: no-repeat;\n         }\n        .title {\n            text-align: center;\n        }\n        \n        .add-content {\n            margin-top: 20px;\n            text-align: center;\n        }\n        \n        .add-content i.fa-solid {\n            display: inline-block;\n            width: 20px;\n        }\n        \n        .add-content p {\n            margin: 0;\n        }\n        \n        .Mail {\n            margin-top: 10px;\n        }\n        \n        .Mail i.fa-sharp {\n            display: inline-block;\n            width: 20px;\n        }\n        \n        .map {\n            text-align: center;\n            margin-top: 20px;\n\n        }\n        \n        .map iframe {\n            border: 0;\n        }\n        nav ul {\n  list-style-type: none;\n  margin: 20px;\n  padding: 0;\n}\n\nnav ul li {\n  display: inline;\n}\n\nnav ul li a {\n  color: black;\n  text-decoration: none;\n  padding: 10px 20px;\n \n}\n\nnav ul li a:hover {\n  background-color: #555;\n}\n    "
//       }}
//     />
//     {/* <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="/">
//               <i className="fas fa-home fa-icon" />
//               &nbsp;Home
//             </a>
//           </li>
//           <li>
//             <a href="./About_us">
//               <i className="fa-solid fa-address-card" />
//               &nbsp;About_Us
//             </a>
//           </li>
//           <li>
//             <a href="./Contact_us">
//               <i className="fa-sharp fa-solid fa-phone" />
//               &nbsp;Contact_Us
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>  */}
//     <div className="title">
//       <h1>Contact us</h1>
//     </div>
//     <div className="add-content">
//       <br />
//       <i className="fas fa-building">&nbsp; ADDRESS</i>
//       <p>Keshav Memorial Institute of Technology</p>
//       <p>Narayanaguda-500029</p>
//       <p>Hyderabad, Telangana</p>
//       <br />
//       <i className="fas fa-phone">&nbsp; 6305486022</i>
//       <br />
//       <br />
//       <div className="Mail">
//         <i className="fas fa-envelope" />
//         &nbsp; &nbsp;jalukurisamsritha1718@gmail.com
//       </div>
//     </div>
//     <div className="map">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.304848661974!2d78.48804571444865!3d17.397151888072795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c44533324f%3A0x8aa5456a7d836bb5!2sKeshav%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1675616354692!5m2!1sen!2sin"
//         width={300}
//         height={350}
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       />
//     </div>
//   </>
//   </div>
//   )
// }
import React from 'react';
import './Contact_us.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Contact_us() {
  return (
    <div className="background-image">
      <div className="container">
        <div className="title">
          <h1>Contact us</h1>
        </div>
        <div className="add-content">
          <br />
          <FontAwesomeIcon icon={faBuilding} size="lg" className="icon" />
          <p>Keshav Memorial Institute of Technology</p>
          <p>Narayanaguda-500029</p>
          <p>Hyderabad, Telangana</p>
          <br />
          <FontAwesomeIcon icon={faPhone} size="lg" className="icon" />
          &nbsp; &nbsp;6305486022
          <div className="Mail">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon" />
            &nbsp; &nbsp;jalukurisamsritha1718@gmail.com
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.304848661974!2d78.48804571444865!3d17.397151888072795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c44533324f%3A0x8aa5456a7d836bb5!2sKeshav%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1675616354692!5m2!1sen!2sin"
            width={300}
            height={350}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
