const request = require('request')



//Forecasting weather
const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e47fcc332443767c0fbc7d54223d64ff&query=' + lat + ',' + lng
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable not find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
        }
    })
}
module.exports = forecast