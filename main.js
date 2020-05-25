const btns = Array.from(document.querySelectorAll(".imgBtn"));
console.log(btns)
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const img = document.querySelector(".profileImg");
        let value = img.getAttribute("src")
        if (value == "images/image-tanya.jpg") {
            img.src = "images/image-john.jpg"
            console.log("tanya")
        } else {
            img.src = "images/image-tanya.jpg"
        }

        console.log(value);
    })
})