
document.querySelector('button').addEventListener('click', checkTheWeather)

function checkTheWeather(){

  const input = document.querySelector("#input").value;

  fetch (`/api/${input}`)
  .then(response => response.json())
  .then((data) => {
  console.log(data);
  document.querySelector('#Show').innerText=data.temp
  document.querySelector('#Show1').innerText=data.activites
  document.querySelector('#Show2').src=data.urlImage
})
}