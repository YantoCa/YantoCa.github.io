document.getElementById("scrollDown").addEventListener("click", () => {
    document.getElementById("fav-projects").scrollIntoView({

        behavior: "smooth"

    });
});

console.log("loaded javascript...")

document.querySelectorAll(".project-image").forEach(gallery => {

    const images = gallery.querySelectorAll("img");
    const left = gallery.querySelector(".left");
    const right = gallery.querySelector(".right");
    const dotsContainer = gallery.querySelector(".dots");

    let index = 0;
    let timer;

    // Create dots
    images.forEach((_, i) => {

        const dot = document.createElement("span");
        dot.classList.add("dot");

        if(i === 0)
            dot.classList.add("active");

        dot.addEventListener("click", () => {

            index = i;
            show(index);
            restartTimer();

        });

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function show(i){

        images.forEach(img => img.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        images[i].classList.add("active");
        dots[i].classList.add("active");

    }

    function next(){

        index = (index + 1) % images.length;
        show(index);

    }

    function previous(){

        index = (index - 1 + images.length) % images.length;
        show(index);

    }

    function restartTimer(){

        clearInterval(timer);
        timer = setInterval(next, 3500);

    }

    left.addEventListener("click", () => {

        previous();
        restartTimer();

    });

    right.addEventListener("click", () => {

        next();
        restartTimer();

    });

    gallery.addEventListener("mouseenter", restartTimer);

    gallery.addEventListener("mouseleave", () => {

        clearInterval(timer);

    });

});