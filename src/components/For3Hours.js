import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class For3Hours extends React.Component {

  componentWillMount = async() =>{
    const all = this.props.weather;
    this.setState({
      temp:all.main.temp,
      rain:(all.rain)?all.rain["3h"]:null,
      windSpeed:all.wind.speed,
      windDeg:all.wind.deg,
      humidity:all.main.humidity,
      pressure:all.main.pressure,
      date:all.dt_txt,
      img:all.weather[0].icon,
      description:all.weather[0].description,
      count: all.length,
    })
  }

render(){
  return(
      <div className="hourly">
          <span>{new Date(this.state.date).toLocaleString('ru', {
                minute: 'numeric',
                hour: 'numeric',
              })}</span>
          <img src={`http://openweathermap.org/img/wn/${this.state.img}@2x.png`} alt="description"/>
          <span><strong>{(this.state.temp>273)?"+":""}{Math.round(this.state.temp-273)}°С</strong></span>
          <span>{this.state.description}</span>
          <span>{this.state.windSpeed+" м/с \n"}<br/>{Math.round(this.state.windDeg)}°</span>
          <span>{this.state.humidity}%</span>
          <span>{Math.round(this.state.pressure*0.75)+" мм.рт.ст"}</span>
      </div>
    )
  }
}

For3Hours.propTypes= {
  weather: PropTypes.object,
}
export default For3Hours;
