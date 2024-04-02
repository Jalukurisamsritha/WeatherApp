// import React from 'react'

// export function About_us() {
//   return (
//     <div><>
//     <link rel="stylesheet" type="text/css" href="Styles.css" />
//     <meta charSet="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>About us</title>
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
//       integrity="sha512-..."
//       crossorigin="anonymous"
//     />
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "\n         body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image:url('https://i.pinimg.com/474x/85/11/6f/85116f60c77ad9dcbb90888943b4142e.jpg');\n      background-size: cover;\n      background-attachment: fixed;\n      background-position: center;\n      background-repeat: no-repeat;\n    }\n        h1{\n            text-align: center;\n        }\n        h2{\n            text-align: center;\n            color: rgb(30, 14, 74);\n        }\n        .container{\n            float:left;\n            max-height :1050px; \n            max-width: 550px;\n            margin: 0 auto;\n            padding: 40px;\n            /* background-color:#FFDEDE; */\n            border-radius: 30px;\n            box-shadow: 0 0 10px rgb(77, 70, 70);\n            grid-template-columns: auto 1fr; /* Two equal-width columns */\n            grid-gap: 20px;\n            \n            \n        }\n        .text{\n            float:left;\n            color: rgb(235, 237, 238);\n            grid-column: 1;\n           \n        }\n        .image{\n            float:right;\n            display:block;\n           text-align:center; \n           padding:1px;\n           width: 600px;\n           height: 500px;\n\n        }\n        .image img{\n            width:95%;\n            height:95%;\n        }\n        nav ul {\n  list-style-type: none;\n  margin: 20px;\n  padding: 0;\n}\n\nnav ul li {\n  display: inline;\n}\n\nnav ul li a {\n  color: black;\n  text-decoration: none;\n  padding: 10px 20px;\n \n}\n\nnav ul li a:hover {\n  background-color: #555;\n}\n"
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
//     </header> */}
//     <h1>
//       <b>About Us</b>
//     </h1>
//     <h2>
//       <b>
//         Welcome to our weather detection and forecasting platform! We are
//         passionate about harnessing the power of AI image processing to
//         revolutionize the way we understand and predict weather patterns.
//       </b>
//     </h2>
//     <div className="container">
//       <div className="text">
//         <h3>
//           Under the direction of our mentor,
//           <br /> we undergrads at 'KMIT' are working on this project.
//           <br />
//           we combine cutting-edge artificial intelligence algorithms
//           <br /> with advanced image processing techniques to analyze vast amounts
//           of weather data captured from satellites, radars, and other sources.
//           <br /> By leveraging the capabilities of machine learning and computer
//           vision,we are able to extract valuable insights from weather images and
//           provide accurate and timely forecasts.
//           <br /> Through our platform, users can access real-time weather updates,
//           receive personalized forecasts, and gain insights into local weather
//           conditions.
//           <br />
//           We strive to make weather information accessible to everyone, especially
//           for the farmers who are the backbone of our country and who work
//           extremely hard to keep food on the table and it's also for individuals
//           planning their daily activities{" "}
//         </h3>
//       </div>
//     </div>
//     <div className="image">
      
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1c52EWVBcixg1YmhEx-n6FAgmPkks7sOJA&usqp=CAU"
//         alt="Your Image"
//         integrity="sha512-..."
//         crossorigin="anonymous"
//       />
      
//     </div>
//   </>
//   </div>
//   )
// }
/////////////////////////////////////////////////////////////
// import React from 'react';
// import './About_Us.css';

// export function About_us() {
//   return (
//     <div className="about-us-container">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="about-us-content">
//               <h1 className="text-center mb-5">
//                 <b>About Us</b>
//               </h1>
//               <h4 className="text-center mb-5">
//                 <b>
//                   Welcome to our weather detection and forecasting platform! We
//                   are passionate about harnessing the power of AI image
//                   processing to revolutionize the way we understand and predict
//                   weather patterns.
//                 </b>
//               </h4>
//               <h5>
//                 Under the direction of our mentor, we undergrads at 'KMIT' are
//                 working on this project. We combine cutting-edge artificial
//                 intelligence algorithms with advanced image processing
//                 techniques to analyze vast amounts of weather data captured
//                 from satellites, radars, and other sources. By leveraging the
//                 capabilities of machine learning and computer vision, we are
//                 able to extract valuable insights from weather images and
//                 provide accurate and timely forecasts. Through our platform,
//                 users can access real-time weather updates, receive personalized
//                 forecasts, and gain insights into local weather conditions. We
//                 strive to make weather information accessible to everyone,
//                 especially for the farmers who are the backbone of our country
//                 and who work extremely hard to keep food on the table. It's also
//                 for individuals planning their daily activities.
//               </h5>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <img
//               src=""
//               alt="Your Image"
//               className="img-fluid"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import './About_Us.css';

export function About_us() {
  return (
    <div className="about-us-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-content">
              <h1 className="text-center mb-5">
                <b>About Us</b>
              </h1>
              
              <h4 className="text-center mb-5">
                <b>
                  Welcome to our weather detection and forecasting platform! We
                  are passionate about harnessing the power of AI image
                  processing to revolutionize the way we understand and predict
                  weather patterns.
                </b>
              </h4>
              <h5>
                Under the direction of our mentor, we undergrads at 'KMIT' are
                working on this project. We combine cutting-edge artificial
                intelligence algorithms with advanced image processing
                techniques to analyze vast amounts of weather data captured
                from satellites, radars, and other sources. By leveraging the
                capabilities of machine learning and computer vision, we are
                able to extract valuable insights from weather images and
                provide accurate and timely forecasts. Through our platform,
                users can access real-time weather updates, receive personalized
                forecasts, and gain insights into local weather conditions. We
                strive to make weather information accessible to everyone,
                especially for the farmers who are the backbone of our country
                and who work extremely hard to keep food on the table. It's also
                for individuals planning their daily activities.
              </h5>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="https://img.freepik.com/premium-vector/team-development-flat-illustration_418302-178.jpg?w=1060"
              alt="Your Image"
              className="img-fluid larger-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
