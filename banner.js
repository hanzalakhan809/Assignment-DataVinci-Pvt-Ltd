// Creating a new element for the banner
var banner = document.createElement('div');
banner.className = 'offer-banner'; 

// Create new elements for the image
var image = document.createElement('img');
image.src = 'https://pics.clipartpng.com/midle/Red_Alarm_Clock_Red_PNG_Clip_Art-1643.png';
image.className = 'offer-banner-image'; 
banner.appendChild(image);

// Creating a container for the texts
var textContainer = document.createElement('div');
textContainer.className = 'offer-banner-text'; 
banner.appendChild(textContainer);

// Creating new elements for the text
var text1 = document.createElement('div');
text1.innerHTML = '<b>LIMITED TIME OFFER</b>';
textContainer.appendChild(text1);

var text2 = document.createElement('div');
text2.style.textAlign = 'center'; 
textContainer.appendChild(text2);

var text3 = document.createElement('div');
text3.innerHTML = `<b>GET 10% OFF&nbsp; </b> Use Code: <b>EXAMSTART</b>`;
textContainer.appendChild(text3);


// GET the header element
var header = document.getElementsByClassName('headers')[0];

// Placing the banner after the header
header.parentNode.insertBefore(banner, header.nextSibling);

// Setting the end time
var endTime = new Date().getTime() + 1 * 60 * 1000; // for 1 minute timer


// Updating the count down in every 1 second
var timerInterval = setInterval(function() {
var now = new Date().getTime();
var distance = endTime - now;

var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

text2.innerHTML = "Ends in: " +'<b>'+hours.toString().padStart(2, '0') + " : " +
minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0')+'</b>';


// To remove Banner
if (distance < 0) {
clearInterval(timerInterval);
banner.remove();
}
}, 1000);

// CSS and Media Queries

style.type = 'text/css';
style.innerHTML = `
.offer-banner {
width: 98%;
height: 42px;
background: linear-gradient(to right, #ffb500, #ff8200);
color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
margin: 0.3rem auto;
border-radius: 25px;
overflow: visible;
position: relative;
}

.offer-banner-image {
height: 120%;
position: absolute;
margin-left: -2rem;
overflow: visible;
}

.offer-banner-text {
display: flex;
justify-content: space-between;
width: 100%;
padding-left: 60px;
}

@media only screen and (max-width: 600px) {
.offer-banner {
flex-direction: column;
height: auto;
}

.offer-banner-image {
height: 60px;
position: relative;
margin-left: 0;
}

.offer-banner-text {
padding-left: 0;
flex-direction: column;
align-items: center;
}
}
`;
document.getElementsByTagName('head')[0].appendChild(style);