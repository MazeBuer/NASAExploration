document.querySelector('button').addEventListener('click', getFetch) //add event listener listenting for a click on the button

function getFetch(){
  const choice = document.querySelector('input').value  //whatever is inside the box is the value 'choice'
  console.log(choice)
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${choice}&api_key=uuLAFR0G9uDUaF3dKdt2fmoDI6khzX626ypaP5md` //at the end of the URL we found Nasa has paramater of 'date' so we add &date = and choice is what we put into the search, so the date. 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.photos[0])
         //we go to the media_type in the array and if it is an 'image' do this
        document.querySelector('.marsdailyPhoto').src = data.photos[0].img_src  //data . what the name is on the array
        document.querySelector('.landingD').innerText = data.photos[0].rover.landing_date
        document.querySelector('.launchDate').innerText = data.photos[0].rover.launch_date
        document.querySelector('.status').innerText = data.photos[0].rover.status
        document.querySelector('.about').innerText = data.photos[0].camera.full_name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



































let key = 'uuLAFR0G9uDUaF3dKdt2fmoDI6khzX626ypaP5md'