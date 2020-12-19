let counterValue = 0;

const decrementBtnRef = document.querySelector("div > button:first-child");
const incrementBtnRef = document.querySelector("div > button:last-child");
const spanRef = document.getElementById("value");


decrementBtnRef.addEventListener("click", () => {
    counterValue -= 1
    spanRef.textContent = counterValue;
    return spanRef.textContent;
});

incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
  return spanRef.textContent;
});

