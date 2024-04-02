// // import React, { useState } from "react";
// // import axios from "axios";
// // import "./Home.css";
// // const API_KEY = "bd5e378503939ddaee76f12ad7a97608"; // Replace with your OpenWeather API key
// // export function Home() {
// //   const [city, setCity] = useState("");
// //   const [weatherData, setWeatherData] = useState(null);

// //   const fetchWeatherData = async () => {
// //     try {
// //       const response = await axios.get(
// //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// //       );
// //       setWeatherData(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     fetchWeatherData();
// //   };
// //   const [file, setFile] = useState(null);
// //   const [res, setRes] = useState("");

// //   function handleChange(e) {
// //     console.log(e.target.files);
// //     setFile(e.target.files[0]);
// //   }

// //   const fetchWeatherData1 = async () => {
// //     try {
// //       if (file) {
// //         const formData = new FormData();
// //         formData.append("image", file);

// //         // const response = await fetch("http://localhost:5000/", {
// //         //   method: "POST",
// //         //   body: formData,
// //         // });

// //         // const data = await response.json();
// //         // setRes(data.predicted_class);
// //         const response = await axios.post("http://localhost:5000/", formData);

// //         const data = response.data;
// //         setRes(data.predicted_class);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleSubmit1 = (event) => {
// //     event.preventDefault();
// //     fetchWeatherData1();
// //   };
// //   return (
// //     <>
// //       <div>
// //         <link rel="stylesheet" type="text/css" href="Styles.css" />
// //         <title>Weather Prediction</title>
// //         <link
// //           rel="stylesheet"
// //           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
// //         />
// //         <style
// //           dangerouslySetInnerHTML={{
// //             __html:
// //               "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image: url('https://i.pinimg.com/474x/85/11/6f/85116f60c77ad9dcbb90888943b4142e.jpg');\n      background-size: cover;\n      background-attachment: fixed;\n      background-position: center;\n      background-repeat: no-repeat;\n      \n    }\n\n    .container {\n   display:flex;\n flex-direction:column;\n  max-width: 700px;\n      margin: 0 auto;\n      padding: 30px;\n      /* background-color: rgba(255, 255, 255, 0.8); */\n      background-color: rgba(255, 255, 255, 0.8);\n      /* background-color:#DAFFFB; */\n      border-radius: 30px;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n      position: absolute;\n      top: 50%;\n    left:60%;\n  right: 10%;\n      transform: translate(-10%, -50%);\n    }\n\n    h1 {\n      text-align: center;\n      margin-top: 0;\n      color: #176B87;\n    }\n  .k{\n    text-align: center;\n  }\n    .k i{\n      font-size: 100px;\n    }\n\n    .form-group {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 20px;\n      \n    }\n\n    .form-group label {\n      flex-basis: 100%;\n      text-align: center;\n      color: #555;\n    }\n\n    .form-group input {\n      flex-basis: 100%;\n      padding: 10px;\n      margin-top: 5px;\n      margin-bottom: 5px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n    }\n\n    .submit-btn {\n      display: block;\n      width: 100%;\n      padding: 10px;\n      margin-top: 10px;\n      background-color: #333;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n\n    .submit-btn:hover {\n      background-color: #555;\n    }\n    header {\n  background-color: transparent;\n  color:#fff;\n  padding: 20px;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nnav ul li {\n  display: inline;\n}\n\nnav ul li a {\n  color: black;\n  text-decoration: none;\n  padding: 10px 20px;\n}\n\nnav ul li a:hover {\n  background-color: #555;\n}\n , .img{width:200px;\n height:200px;\n} ",
// //           }}
// //         />
// //         <div className="container">
// //           <h1>Weather Prediction</h1>
// //           <div className="k">
// //             <i className="fa-solid fa-cloud-sun-rain" />
// //           </div>
// //           <br />
// //           <br />
// //           <form>
// //             {/* <div className="form-group">
// //             <label htmlFor="imageInput">Image Input:</label>
// //             <input type="file" id="imageInput" accept="image/*" />
// //           </div> */}
// //           </form>
// //           <form onSubmit={handleSubmit}>
// //             <div className="form-group">
// //               <label htmlFor="cityInput">City Name:</label>
// //               <input
// //                 type="text"
// //                 value={city}
// //                 id="city"
// //                 placeholder="Enter city name"
// //                 required=""
// //                 onChange={(event) => setCity(event.target.value)}
// //               />
// //             </div>
// //             <button className="submit-btn" type="submit">
// //               Submit
// //             </button>

// //             <br />
// //           </form>
// //           {weatherData && (
// //             <div className="weather-data">
// //               <h2>{weatherData.name}</h2>
// //               <p>Temperature: {weatherData.main.temp}°C</p>
// //               <p>Humidity: {weatherData.main.humidity}%</p>
// //               <p>Pressure: {weatherData.main.pressure}mb</p>
// //               {/* <div className="chart-container">{renderChart()}</div> */}
// //             </div>
// //           )}
// //         </div>
// //         <header>
// //           <nav>
// //             <ul>
// //               <li>
// //                 <a href="/">
// //                   <i className="fas fa-home fa-icon" />
// //                   &nbsp;Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="./About_us">
// //                   <i className="fa-solid fa-address-card" />
// //                   &nbsp;About_Us
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="./Contact_us">
// //                   <i className="fa-sharp fa-solid fa-phone" />
// //                   &nbsp;Contact_Us
// //                 </a>
// //               </li>
// //               {/* <li><a href="./Upload">
// //               <i className="fa-solid fa-upload" />
// //               &nbsp;Upload
// //             </a>
// //             </li> */}
// //             </ul>
// //           </nav>
// //         </header>
// //       </div>
// //       <div className="imaged">
// //         <form onSubmit={handleSubmit1}>
// //     <div className="upload-container">
// //       <h2>Add Image:</h2>
// //       <i class="fa-solid fa-upload"></i>
// //       <br/>
// //       <input type="file" onChange={handleChange} />
// //       <div className="image-container">
// //         {file && <img src={URL.createObjectURL(file)} className="uploaded-image" alt="Uploaded" />}
// //       </div>
// //       <button type="submit">Submit</button>
// //       <div>{res}</div>
// //     </div>
// //   </form>
// //   </div>

// //     </>
// //   );
// // }
// // import React from "react";
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Link } from "react-router-dom";
// import "./Home2.css";

// export const Home = () => {
//   return (
//     <>
//       <div className="Homepage">
//         <div className="view">
//           <div className="textcontent">
//             <h2>Stay ahead of the weather curve with our real-time updates.</h2>
//             <p>
//               Capture the Moment, Unveil the Forecast: <br />
//               <b>Upload an Image to Detect the Weather!</b>
//             </p>
//             <div className="buttons">
//               <Link to="./Detect" className="btn">
//                 Click here!
//               </Link>
//             </div>
//             <br />
//             <p>
//               Unlock the Skies, Explore with Ease: <br />
//               <b>Enter a City Name to Forecast the Weather Condition!</b>
//             </p>
//             <div className="buttons">
//               <Link to="./Forecast" className="btn">
//                 Click here!
//               </Link>
//             </div>
//           </div>
//           <div className="imgcontent">
//             <img
//               className="wimage"
//               src="https://img.freepik.com/premium-vector/happy-woman-umbrella-rain-autumn-girl-character-isolated-white_511716-273.jpg?w=2000"
//               alt="homepageImg"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;
///imp/////
// import { Link } from "react-router-dom";
// import "./Home2.css";
// export const Home = () => {
//   return (
//     <>
//       <div className="Homepage">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="textcontent">
//                 <h2>Weather updates at your fingertips. Get the latest forecast anytime, anywhere.</h2>
//                 <p>
//                 Snap a photo, reveal what's in the skies: <br />
//                   <b>Say goodbye to guesswork. Upload an image, let me predict the weather like magic!</b>
//                 </p>
//                 <div className="buttons">
//                   <Link to="./Detect" className="btn btn-primary">
//                     Click here!
//                   </Link>
//                 </div>
//                 <br />
//                 <p>
//                 Let me help you Discover the world above, exploring the skies is as easy as a single touch.: <br />
//                   <b>Enter a City Name to Forecast the Weather Condition!</b>
//                 </p>
//                 <div className="buttons">
//                   <Link to="./Forecast" className="btn btn-primary">
//                     Click here!
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="imgcontent">
//                 <img
//                   className="wimage img-fluid"
//                   src="https://img.freepik.com/free-vector/young-happy-concept-illustration_114360-1182.jpg"
//                   alt="homepageImg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
import { Link } from "react-router-dom";
import "./Home2.css";
// import backgroundImage from "C:\Users\jaluk\OneDrive\Desktop\React_project\my-app\src\Components\It's me.jpg"; // Replace "your-background-image.jpg" with the actual filename and path of your background image.

export const Home = () => {

  return (
    <>
      <div className="Homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <div className="imgcontent">
                <img
                  className="wimage img-fluid"
                  src="https://img.freepik.com/premium-vector/young-female-with-umbrella-flat-vector-illustration-autumn-season-rainy-day-stroll-rain-woman-wearing-raincoat-girl-walking-alone-faceless-character-isolated-white-background_198278-6821.jpg?w=1060"
                  alt="homepageImg"
                />
            </div>
            </div>
            <div className="col-md-6">
              <div className="textcontent">
                {/* <h2>Weather updates at your fingertips. Get the latest forecast anytime, anywhere.</h2> */}
                <p>
                <i class="fa-solid fa-camera"></i> <b>Snap a photo,<br></br> reveal what's in the skies: </b>
                  {/* <b>Say goodbye to guesswork. Upload an image, let me predict the weather like magic!</b> */}
                </p>
                <div className="buttons">
                  <Link to="./Detect" className="btn btn-primary">
                    Detetction
                  </Link>
                </div>
                <br />
                <p>
                  {/* Let me help you Discover the world above, exploring the skies is as easy as a single touch.: <br /> */}
                  <i class="fa-solid fa-keyboard"></i> <b>Enter a City Name to <br></br>Forecast the Weather Condition!</b>
                </p>
                <div className="buttons">
                  <Link to="./Forecast" className="btn btn-primary">
                   Forecasting
                  </Link>
                </div>        
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
