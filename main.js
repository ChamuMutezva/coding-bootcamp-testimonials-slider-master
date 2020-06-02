const btns = Array.from(document.querySelectorAll(".imgBtn"));
console.log(btns)
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const img = document.querySelector(".profileImg");
        const quorteMsg = document.querySelector(".quortesMsg");
        const profile = document.querySelector(".profileName");
        const role = document.querySelector(".role");
        let value = img.getAttribute("src")
        if (value == "images/image-tanya.jpg") {
            img.src = "images/image-john.jpg";
            console.log("tanya");
            quorteMsg.innerHTML = ` “ If you want to lay the best foundation possible I’d recommend 
            taking this course.
            The depth the instructors go into is incredible. I now feel so confident about
            starting up as a professional developer. ” ` ;
            profile.innerHTML = `John Tarkpor`;
            role.innerHTML =`Junior Front-end Developer`          
      
        } else {
            img.src = "images/image-tanya.jpg";
            quorteMsg.innerHTML = `  “ I’ve been interested in coding for a while but never taken 
            the jump, until
            now. I couldn’t recommend this course enough. I’m now in the job of my dreams 
            and so excited about the future.
            ”  ` ;
            profile.innerHTML = `Tanya Sinclair`;
            role.innerHTML = `UX Engineer`
        }

        console.log(value);
    })
})