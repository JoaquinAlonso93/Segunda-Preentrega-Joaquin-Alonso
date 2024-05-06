document.addEventListener("DOMContentLoaded", ()=>{
    const cards = document.querySelectorAll(".section-card");

    const prevButton = document.querySelector(".carrusel-control.prev");
    const nextButton = document.querySelector(".carrusel-control.next");

    let currentCardIndex = 0;

    const showCard = (index)=>{


        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = `translateX(${direction === "next" ? "-" : " "}100)`;
            card.classList.remove("show");
        });

        cards[index].classList.add("show");

        setTimeout(() =>{
            cards.forEach(card=>card.style.transition = "opacity 0.5s, transform 0.5s");
            cards[index].style.opacity = "1";
            card[index].style.transform = "translateX(0)";
        },50);

    }

    const changeCard = (increment, direction) => {
        currentCardIndex = ( currentCardIndex + increment + cards.length) % cards.length;
        showCard(currentCardIndex, direction);
    }

    const autoScroll = ()=>{
        changeCard(1, "next");
    }

    nextButton.addEventListener("click",(event)=>{
        event.preventDefault();
        changeCard(1, "next");
    })

    prevButton.addEventListener("click",(event)=>{
        event.preventDefault();
        changeCard(-1, "prev");
    })

    let autoScrollInterval = setInterval(autoScroll,6000)

    document.querySelector(".carrusel-section").addEventListener("mouseenter",()=>{
        clearInterval(autoScrollInterval);
    })

    document.querySelector(".carrusel-section").addEventListener("mouseleave",()=>{
        autoScrollInterval = setInterval(autoScroll,6000);
    })
});