window.onscroll=function(){
    if(document.documentElement.scrollTop >100){
        document.querySelector('.contenedorTop').classList.add('show')
    }else{
        document.querySelector('.contenedorTop').classList.remove('show')
    }
}

document.querySelector('.contenedorTop').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'/*efecto de suavidad de subida */ 
    });
  });