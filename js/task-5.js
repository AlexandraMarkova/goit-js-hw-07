

    const inputRef = document.getElementById("name-input");
    const captionRef = document.querySelector("h1 > span");
    
    inputRef.addEventListener("input", (event) => {
    if (event.target.value.length === 0) {
        return (captionRef.textContent = "незнакомец");
    } return captionRef.textContent = event.target.value
});