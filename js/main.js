//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch) //add event listener listenting for a click on the button

function getFetch(){
  const choice = document.querySelector('input').value  //whatever is inside the box is the value 'choice'

  const url = `https://api.nasa.gov/planetary/apod?api_key=uuLAFR0G9uDUaF3dKdt2fmoDI6khzX626ypaP5md&date=${choice}` //at the end of the URL we found Nasa has paramater of 'date' so we add &date = and choice is what we put into the search, so the date. 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') { //we go to the media_type in the array and if it is an 'image' do this
        document.querySelector('.dailyPhoto').src = data.hdurl  //data . what the name is on the array
        } else if(data.media_type === 'video') { //if media is a video we will add video to here
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

let key = 'uuLAFR0G9uDUaF3dKdt2fmoDI6khzX626ypaP5md'