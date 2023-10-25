const toBtn = document.querySelector(".to-btn");
const plBtn = document.querySelector(".pl-btn");
const playBtn = document.querySelector(".play-btn")
const plaBtn = document.querySelector(".pla-btn")
const boxSection = document.querySelector(".box-section");
const boxSectionGame = document.querySelector(".box-section-game");
const fRecElements = document.querySelectorAll('.f-rec');
const sRecElements = document.querySelectorAll('.s-rec');

let isToBtnActive = false; // Track the active state of "to-btn"
let isPlBtnActive = false; // Track the active state of "pl-btn"

toBtn.addEventListener('click', () => {
    if (!isToBtnActive) {
      toBtn.style.background = '#9B3841';
      toBtn.style.border = '2px solid #FF4252';
      isToBtnActive = true;

      // Reset the state of pl-btn
      if (isPlBtnActive) {
        plBtn.style.background = 'transparent linear-gradient(0deg, #171733 0%, #3A393D 100%)';
        plBtn.style.border = 'none';
        isPlBtnActive = false;
      }
    } else {
      toBtn.style.background = 'transparent linear-gradient(0deg, #171733 0%, #3A393D 100%)';
      toBtn.style.border = 'none';
      isToBtnActive = false;
    }

    // Toggle the "active" class for playBtn
    playBtn.classList.toggle("active");
  });

plBtn.addEventListener('click', () => {
    if (!isPlBtnActive) {
      plBtn.style.background = '#9B3841';
      plBtn.style.border = '2px solid #FF4252';
      isPlBtnActive = true;

      // Reset the state of to-btn
      if (isToBtnActive) {
        toBtn.style.background = 'transparent linear-gradient(0deg, #171733 0%, #3A393D 100%)';
        toBtn.style.border = 'none';
        isToBtnActive = false;
      }
    } else {
      plBtn.style.background = 'transparent linear-gradient(0deg, #171733 0%, #3A393D 100%)';
      plBtn.style.border = 'none';
      isPlBtnActive = false;
    }

    // Toggle the "active" class for playBtn
    plaBtn.classList.toggle("active");
  });

toBtn.addEventListener("click", () => {
    // Toggle the "active" class on the elements
    boxSection.classList.toggle("active");
    boxSectionGame.classList.remove("active");
    
});

plBtn.addEventListener("click", () => {
    // Toggle the "active" class on the elements
    boxSectionGame.classList.toggle("active");
    boxSection.classList.remove("active");
    playBtn.classList.remove("active");
});

fRecElements.forEach((fRecElement, index) => {
    fRecElement.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-section'); // Get the data-section value

        // Reset background for all f-rec and s-rec elements
        fRecElements.forEach((fRec) => {
            fRec.classList.remove('highlight');
        });

        sRecElements.forEach((sRecElement) => {
            sRecElement.classList.remove('highlight');
        });

        const sRecElement = document.getElementById(sectionId); // Find the corresponding s-rec element

        if (sRecElement) {
            // Add the 'highlight' class to the clicked f-rec and its corresponding s-rec
            this.classList.add('highlight');
            sRecElement.classList.add('highlight');
        }
    });
});

