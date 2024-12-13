let slideIndex = 0; 

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); 
});

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) {
        console.error("No slides found!"); 
        return;
    }


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++; 

    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 10000); 
}


function plusSlides(n) {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    if (slideIndex < 1) {
        slideIndex = slides.length; 
    }

    slides[slideIndex - 1].style.display = "block"; 
}

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".s5itembox");

    items.forEach((item, index) => {
        const delay = index * 0.1; 
        item.style.transitionDelay = `${delay}s`;
        item.classList.add("hidden");
    });


    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");

                    const textElement = entry.target.querySelector('.heads5');
                    if (textElement) {
             
                        textElement.style.animationPlayState = 'running';
                    }

                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.1 } 
    );

    items.forEach(item => {
        observer.observe(item);
    });
});


