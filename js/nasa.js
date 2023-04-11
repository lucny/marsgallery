const APIkey = '6As5LFF7nl9z3PiaU22sg7huvd6p7zFRRCVq1MSF';
const marsList = document.getElementById('mars-list');

submit.addEventListener('click', function() {
  let day = date.value;
  console.log(day);
  marsList.innerHTML = '';
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${day}&api_key=${APIkey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.photos.forEach(photo => {
    const marsItem = document.createElement('div');
    const marsLink = document.createElement('a');
    const marsPhoto = document.createElement('img');
    const marsInfo = document.createElement('h3');

    list = marsItem.classList;
    list.add('col-md-4');
    list.add('col-lg-3');
    list.add('col-xxl-2');
    list.add('mt-3');
    marsPhoto.src = photo.img_src;
    marsPhoto.title = photo.rover.name;
    marsPhoto.setAttribute('class', 'img-fluid');
    marsInfo.textContent = photo.camera.full_name;
    marsInfo.style.fontSize = '20px';
    marsLink.href = photo.img_src;
    marsLink.setAttribute('target', '_blank');
    marsLink.appendChild(marsInfo);    

    marsItem.appendChild(marsPhoto);
    marsItem.appendChild(marsLink);

    marsList.appendChild(marsItem);
    });    
  })
  .catch(error => console.log(error));

})

