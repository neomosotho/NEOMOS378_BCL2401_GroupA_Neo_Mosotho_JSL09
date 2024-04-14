// Fetch a random image from the Unsplash API that is landscape-oriented and related to nature
try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json() 
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent = `By: ${data.user.name}`   
} catch(err) {
    // Set the background image of the document body.
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&cs=tinysrgb&fit=max&
    fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4MjU1Mjd8&ixlib=rb-4.0.3&q=80&w=1080
)`
    // Set the text content of an element with the id "author".
    document.getElementById("author").textContent = `By:Kalen Emsley`
} 

try {
    // Fetch data from the specified URL
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    // Check if the response is not okay.
    if (!res.ok) {
        // Throw an error with a custom message if response is not okay.
        throw Error("Something went wrong")
    }

    const data = await res.json()
    // Set the inner HTML of an element with the id "crypto-top"
    document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `
    // Append to the inner HTML of an element with the id "crypto"
    document.getElementById("crypto").innerHTML += `
        <p>🎯: R${data.market_data.current_price.zar}</p>
        <p>👆: R${data.market_data.high_24h.zar}</p>
        <p>👇: R${data.market_data.low_24h.zar}</p>
    ` 
// Catch any errors that occur in the preceding promise chain and log them to the console
} catch (err) {
    console.error(err)
}

// Define a function
function getCurrentTime() {
    // Create a new Date object to get the current date and time 
    const date = new Date() 
    // Set the text content of the element with id "time" to the current time in a medium format
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

// Calls the getCurrentTime function repeatedly every 1000 milliseconds (1 second)
setInterval(getCurrentTime, 1000) 

// Get the current position of the user using the Geolocation API
navigator.geolocation.getCurrentPosition( async position => {
    try {
        // Fetch weather data using the latitude and longitude obtained from the user's position
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=$
        {position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        const data = await res.json()
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // Update the inner HTML of the element with id "weather"
        document.getElementById("weather").innerHTML = ` 
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}</p>
            <p class="weather-city">${data.name}</p> 
        `   
    } catch (err) {
        console.error(err)
    }    
});






 