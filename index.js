$(".input").on("submit", function(e){
  e.preventDefault();

  //get the user wanted location
  let location = $(".input-location").val();
  console.log(location)
  $(".input-location").val(""); 

  const key = '24c01728b5644d15972104541242910'

  fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`)
    .then((resolved) => {
      return resolved.json()
    })
    .then((data) => {
      console.log(data.location.region)
      $(".location").text(data.location.region)
      $(".date").text(data.location.localtime)
      $(".temperature").text(data.current.temp_c + "°C")
      $(".wind-speed").text(data.current.wind_mph + "mph" )
      $(".weather").attr("src",data.current.condition.icon);
    })
    .catch((e) => {
      console.log(e)
    })
  });