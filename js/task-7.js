const inputRef = document.getElementById('font-size-control');
console.dir(inputRef);
inputRef.value = 0;
console.dir(inputRef.value);  

const spanRef = document.getElementById('text');
console.dir(spanRef);
spanRef.style.fontSize = "16px";    

inputRef.addEventListener("focus", (event) => { 
  
  
})