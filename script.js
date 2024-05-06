let trilho = document.getElementById('trilho');
let body = document.getElementById('body');

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('light-mode')
    body.classList.toggle('light-mode')
})
