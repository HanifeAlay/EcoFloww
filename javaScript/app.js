document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  cards.forEach(card => io.observe(card));

  /* Hero Video Ses Controlü */

  const video = document.querySelector(".hero-video");
  const soundBtn = document.querySelector(".video-sound-toggle");
  const icon = soundBtn?.querySelector("i");

  if(video && soundBtn && icon) {
    soundBtn.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        video.play();
        icon.classList.remove("bi-volume-mute");
        icon.classList.add("bi-volume-up");
      }else {
        video.muted = true;
        icon.classList.remove("bi-volume-up");
        icon.classList.add("bi-volume-mute");
      }
    });
  }

  /* Hero Videou Play / Pause */
  const playBtn = document.querySelector(".video-play-toggle");
  const playIcon = playBtn?.querySelector("i");
  
  if(video && playBtn && playIcon) {
    playBtn.addEventListener("click", () => {
      if(video.paused) {
        video.play();
        playIcon.classList.remove("bi-play");
        playBtn.classList.add("bi-Pause");
      }else {
        video.pause();
        playIcon.classList.remove("bi-pause");
        playBtn.classList.add("bi-play");
      }
    });
  }

});


