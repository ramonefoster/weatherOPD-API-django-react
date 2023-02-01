import React, {useEffect, useState} from 'react'

export const WeatherPage = () => {
    // let note = notes.find(note=> note.id === Number(id))
    let [weather_data, setData] = useState([])

    useEffect(()=> {
        getData()
    }, [weather_data])

    let getData = async()=> {       
        let response = await fetch('/api/weather-now/')
        let data = await response.json()
        setData(data)
    }

  return (
    <div className='row'>
        <div className='card text-center'>
            <div className="card-header">
                <h4>Weather at OPD <span className="badge bg-success">Now</span></h4>
                
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">                
                    <i className="bi bi-thermometer-sun"></i>
                    <div className="card-body">
                        <h5 className="card-title">Tempeture</h5>
                        <p className="card-text">{weather_data.temperature} °C</p>
                    </div>
                </div>
                <div className="col">
                    <i className="bi bi-moisture"></i>
                    <div className="card-body">
                        <h5 className="card-title">Humidity</h5>
                        <p className="card-text">{weather_data.humidity} % </p>
                    </div>
                </div>
                <div className="col">
                    <i className="bi bi-wind"></i>
                    <div className="card-body">
                        <h5 className="card-title">Wind Speed</h5>
                        <p className="card-text">{weather_data.wind_speed} km/h</p>
                    </div>
                </div>
                <div className="col">
                    <i className="bi bi-browser-safari"></i>
                    <div className="card-body">
                        <h5 className="card-title">Wind Direction</h5>
                        <p className="card-text">{weather_data.wind_dir}</p>
                    </div>
                </div>
                <div className="col">
                    <i className="bi bi-bullseye"></i>
                    <div className="card-body">
                        <h5 className="card-title">Pressure</h5>
                        <p className="card-text">{weather_data.bar} mmhg</p>
                    </div>
                </div>
                <div className="col">
                    <i className="bi bi-sun"></i>
                    <div className="card-body">
                        <h5 className="card-title">Solar Radiation</h5>
                        <p className="card-text">{weather_data.solar_rad}W/m²</p>
                    </div>
                </div>
                <div className="col">
                    <i className="bi bi-wind"></i>
                    <div className="card-body">
                        <h5 className="card-title">UV Dose</h5>
                        <p className="card-text">{weather_data.uv_dose}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}