
document.querySelector('button').addEventListener('click', getFetch) 

function getFetch(){
  const choice = document.querySelector('input').value 

  const url = `https://api.nasa.gov/planetary/apod?api_key=uuLAFR0G9uDUaF3dKdt2fmoDI6khzX626ypaP5md&date=${choice}`

  fetch(url)
      .then(res => res.json()) 
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