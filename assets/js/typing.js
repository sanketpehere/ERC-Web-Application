const texts = [
    "Invest in your future by mastering the art of BUSINESS.",
    "Step into the fast-paced realm of ANDROID development.",
    "Embrace the ever-evolving world of WEB DEVELOPMENT.",
    "Challenge yourself,tame complexity,and race against time."
  ];
  
  const typingSpeed = 80; // Adjust typing speed in milliseconds (lower number is faster)
  const pauseDuration = 300; // Duration to pause after typing a line
  
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const textElement = document.getElementById("text");
    const currentText = texts[lineIndex];
    
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (charIndex > currentText.length) {
        isDeleting = true;
        charIndex = currentText.length;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % texts.length;
    }
  
    const typingDelay = isDeleting ? typingSpeed / 2 : typingSpeed;
    setTimeout(type, typingDelay);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, pauseDuration);
  });
  