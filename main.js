const toBtn = document.querySelector(".to-btn");
const plBtn = document.querySelector(".pl-btn");
const playBtn = document.querySelector(".play-btn")
const boxSection = document.querySelector(".box-section");
const boxSectionGame = document.querySelector(".box-section-game");
const fRecElements = document.querySelectorAll('.f-rec');


toBtn.addEventListener("click", () => {
    // Toggle the "active" class on the elements
    boxSection.classList.toggle("active");
    playBtn.classList.toggle("active");
    boxSectionGame.classList.remove("active");    
});

plBtn.addEventListener("click", () => {
    // Toggle the "active" class on the elements
    boxSectionGame.classList.toggle("active");
    playBtn.classList.toggle("active");
    boxSection.classList.remove("active");
});


fRecElements.forEach(fRecElement => {
    fRecElement.addEventListener('click', function () {
        console.log('f-rec clicked'); // Debugging statement
        // Toggle the "highlight" class on both the clicked f-rec and its corresponding s-rec elements
        this.classList.toggle('highlight');
        const sRecElement = this.nextElementSibling;
        if (sRecElement && sRecElement.classList.contains('s-rec')) {
            sRecElement.classList.toggle('highlight');
        }
    });
});
