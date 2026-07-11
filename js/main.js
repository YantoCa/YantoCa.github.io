document.getElementById("scrollDown").addEventListener("click", () => {
    document.getElementById("fav-projects").scrollIntoView({

        behavior: "smooth"

    });
});

console.log("loaded javascript...")