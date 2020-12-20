const inputRef = document.getElementById('font-size-control');
inputRef.value = '15px';

inputRef.addEventListener('input', event => {
    const spanRef = document.getElementById('text');
    
  spanRef.style.fontSize = event.target.value + 'px';
});