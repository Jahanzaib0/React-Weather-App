import React, { useState, useEffect } from 'react'
import "../weather.css";
import backgroundImg from "../images/images.jpeg"

const Weather = (props) => {
   const city = props.city;

   console.log(city)
    const [weather, setWeather] = useState(null)
    // setCity(props.city)

    // get weather Data
const getWeather = async() => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2521e380b0mshb6d8a21ac251c87p189ff2jsn511f3313cf58',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city
    const res = await fetch(url, options);
    // console.log(res)
    const resJson = await res.json()
    console.log(resJson)
        setWeather(resJson)
}
// call getWeather Func
 useEffect(()=>{
    getWeather();
}, [city])

  return (
    <>
     <div>
      <section style={{backgroundImage : `url(${backgroundImg})`, backgroundRepeat:'no-repeat',backgroundSize:"cover", height:"89.5vh" }}>
      {
        weather &&
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100" style={{color: "#282828"}}>
      <div className="col-md-9 col-lg-7 col-xl-5">

        <div className="card mb-4 gradient-custom" style={{borderRadius: "25px"}}>
          <div className="card-body p-4">

            <div id="demo1" className="carousel slide" data-ride="carousel">
              
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-between mb-4 pb-2">
                    <div>
                      <h2 className="display-2"><strong>{weather.temp}<span>&#8451;</span></strong></h2>
                      <p className="text-muted mb-0">{city}</p>
                    </div>
                    <div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                        width="150px" alt='weather pic'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="card mb-4" style={{borderRadius: "25px"}}>
          <div className="card-body p-4">

            <div id="demo2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div className="flex-column">
                      <p className="small"><strong>{weather.min_temp}<span>&#8451;</span> </strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{color: "#ddd"}}></i>
                      <p className="mb-0 mx-1"><strong>Min Temp</strong></p>
                   </div>
                    <div className="flex-column">
                      <p className="small"><strong>{weather.max_temp}<span>&#8451;</span> </strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{color: "#ddd"}}></i>
                      <p className="mb-0 mx-2"><strong>Max Temp</strong></p>
                   </div>
                    <div className="flex-column">
                      <p className="small"><strong>{weather.wind_speed}<span>km/h</span></strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{color: "#ddd"}}></i>
                      <p className="mb-0 mx-2"><strong>Wind Speed</strong></p>

                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>{weather.humidity}<span>%</span></strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{color: "#ddd"}}></i>
                      <p className="mb-0 mx-2"><strong>Humidity</strong></p>
                   </div>
                    <div className="flex-column">
                      <p className="small"><strong>{weather.cloud_pct}<span>%</span></strong></p>
                      <i className="fas fa-cloud-showers-heavy fa-2x mb-3" style={{color: "#ddd"}}></i>
                      <p className="mb-0 mx-2"><strong>Cloud PCT</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

       
      </div>
    </div>

  </div>
}
</section>
    </div>
</>
  )
}

export default Weather
