const faq = document.querySelectorAll(".faq");
const imgSection = document.querySelector(".img-section");


faq.forEach(question => {
    question.addEventListener("click", () => {
        console.log("Working");

        faq.forEach(section => {
            if(section !== question) {
                section.classList.remove("display");
            }
        })
        question.classList.toggle("display")

        if(question.classList.contains("display")) {
        imgSection.style.bottom = "18.75em"
        } else {
            imgSection.style.bottom = "14em"
        }
  
    })
})