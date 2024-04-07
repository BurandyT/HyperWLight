document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const imageSelectors = document.querySelectorAll(".list-img");

  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
      carouselItems.forEach(item => {
          item.classList.remove("active");
      });
      carouselItems[index].classList.add("active");
  }

  function showNextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
      updateSelectedImage();
  }

  function showPrevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
      updateSelectedImage();
  }

  
  function selectImage(index) {
      currentIndex = index;
      showSlide(currentIndex);
      updateSelectedImage();
  }

  
  function updateSelectedImage() {
      
      imageSelectors.forEach(img => {
          img.classList.remove("selected");
      });

      imageSelectors[currentIndex].classList.add("selected");
  }

  leftBtn.addEventListener("click", () => {
      clearInterval(intervalId);
      showPrevSlide();
  });
  rightBtn.addEventListener("click", () => {
      clearInterval(intervalId);
      showNextSlide();
  });

  imageSelectors.forEach((selector, index) => {
      selector.addEventListener("click", () => {
          clearInterval(intervalId);
          selectImage(index);
      });
  });

  showSlide(currentIndex);
  imageSelectors[currentIndex].classList.add("selected");
});

document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const imageSelectors = document.querySelectorAll(".list-img");
  const rightColumns = document.querySelectorAll(".carousel-col-right");

  let currentIndex = 0;

  function showSlide(index) {
      carouselItems.forEach(item => {
          item.classList.remove("active");
      });
      carouselItems[index].classList.add("active");
      updateDescription(index);
  }

  function selectImage(index) {
      currentIndex = index;
      showSlide(currentIndex);
  }

  function showNextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  }

  function showPrevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  }

  function updateDescription(index) {
      rightColumns.forEach(column => {
          column.style.display = "none";
      });
      document.getElementById(`right-column-${index}`).style.display = "flex";
  }

  leftBtn.addEventListener("click", () => {
      showPrevSlide();
  });

  rightBtn.addEventListener("click", () => {
      showNextSlide();
  });

  imageSelectors.forEach((selector, index) => {
      selector.addEventListener("click", () => {
          selectImage(index);
      });
  });

  showSlide(currentIndex);
});
