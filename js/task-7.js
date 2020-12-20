const inputRef = document.getElementById('font-size-control');

inputRef.value = 0;


   

inputRef.addEventListener('input', event => {
//   console.dir(event.target.value);

  const spanRef = document.getElementById('text');
//   console.dir(spanRef);
  spanRef.style.fontSize = event.target.value + 'px';
});