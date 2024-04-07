const parallaxSection = document.querySelector('.parallax-section');

parallaxSection.addEventListener('mousemove', function(event) {
  const width = parallaxSection.offsetWidth;
  const height = parallaxSection.offsetHeight;
  const mouseX = event.clientX - width / 2;
  const mouseY = event.clientY - height / 2;

  const parallaxElements = parallaxSection.querySelectorAll('.mid-img, .front-img, .title-img, .back-img'); 

  parallaxElements.forEach((el, index) => {
    let depth = index + 1; 
    let speedMultiplier = depth * 0.1; 
    let scale = 1;
    let invert = 1;

    if (el.classList.contains('back-img')) { 
      depth = 4;  
      speedMultiplier = 0.01; 
      invert = -1;
    } 

    if (el.classList.contains('mid-img')) { 
      depth = 3;  
      speedMultiplier = 0.05; 
      invert = -1;
    }

    if (el.classList.contains('front-img')) { 
      depth = 2;  
      speedMultiplier = 0.2; 
      invert = -1
    }

    if (el.classList.contains('title-img')) { 
        depth = 1;  
        speedMultiplier = 0; 
    } 

    const translateX = mouseX * speedMultiplier * invert;
    const translateY = mouseY * speedMultiplier * invert;

    el.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px)`;
  });
});
