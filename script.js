// OnLoad Video 
const introVideo = document.querySelector("#intro-video");
const home = document.querySelector("#home");
introVideo.addEventListener("ended", (e) => {
  introVideo.style.display = "none";
  home.classList.remove("hidden");

  document.body.style.overflow = "auto";
});


// Center card will have hover effects : for mobile 
const cards = document.querySelectorAll('.project-card');
const serviceCards = document.querySelectorAll('.services-card');
const servicesContent = document.querySelector('.services-content');

function checkCenter() {
  const viewportCenter = window.innerHeight / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    if (Math.abs(cardCenter - viewportCenter) < rect.height / 2 && window.innerWidth <= 768) {
      card.classList.add('projects-in-view');
    } else {
      card.classList.remove('projects-in-view');
    }
  });

  const servicesRect = servicesContent.getBoundingClientRect();
  const servicesContentCenter = servicesRect.top + servicesRect.height / 2;

  if (Math.abs(servicesContentCenter - viewportCenter) < servicesRect.height / 2 && window.innerWidth <= 768) {
    servicesContent.classList.add('service-content-in-view');
  } else {
    servicesContent.classList.remove('service-content-in-view');
  }

  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    if (Math.abs(cardCenter - viewportCenter) < rect.height / 2 && window.innerWidth <= 768) {
      card.classList.add('services-in-view');
    } else {
      card.classList.remove('services-in-view');
    }
  });
}

window.addEventListener('scroll', checkCenter);
window.addEventListener('resize', checkCenter);
checkCenter();


// Mouse Follower 
let mouseFollower = document.querySelector(".mouse-follower");

document.addEventListener("mousemove", (e) => {
  mouseFollower.style.left = e.clientX + "px";
  mouseFollower.style.top = e.clientY + "px";
});


// Hidden Tablets
let hiddenTabs = document.querySelectorAll(".hide-dot");
hiddenTabs.forEach((hiddenTablet) => {
  hiddenTablet.addEventListener("mouseover", (e) => {
    let hiddenText = hiddenTablet.querySelector(".hidden-tablet");
    mouseFollower.innerText = hiddenText.innerText;
  });

  hiddenTablet.addEventListener("mouseleave", (e) => {
    let hiddenText = hiddenTablet.querySelector(".hidden-tablet");
    mouseFollower.innerText = "";
  })
});


// Update Time according to place
let updateClock = () => {
    const options = {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const time = new Date().toLocaleTimeString('en-IN', options);
    document.getElementById('clock').textContent = time;
}

updateClock();
setInterval(updateClock, 100);


// Hover Images on "Detail and Playground"
// let detail = document.querySelector(".is-first");
// let hoverImgsCont = document.querySelector(".home-intro-visuals");

let hoverWrapper = document.querySelectorAll(".hover-wrapper");

let interval;

hoverWrapper.forEach((hoverCont) => {

  hoverCont.addEventListener("mouseenter", (e) => {
    let idx = 0;

    let hoverImgs = hoverCont.querySelectorAll(".home-intro-visuals img");
    interval = setInterval(() => {
      hoverImgs.forEach((img) => {
        img.style.opacity = 0;
        img.style.transform = "translate(-50%, 0%)";
      });
  
      let rotate = Math.floor(Math.random() * 11) - 5;
      hoverImgs[idx].style.opacity = 1;
      hoverImgs[idx++].style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;
  
      if(idx == hoverImgs.length) idx = 0;
    }, 300);
  });
})

hoverWrapper.forEach((hoverCont) => {

  hoverCont.addEventListener("mouseleave", (e) => {

    let hoverImgs = hoverCont.querySelectorAll(".home-intro-visuals img");
    hoverImgs.forEach((img) => {
      img.style.opacity = 0;
      img.style.transform = "translate(-50%, 0%)";
    });

    clearInterval(interval);
  });

});