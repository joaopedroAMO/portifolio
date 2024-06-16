window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    const btnTop = document.getElementById("scroolTop"); 
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
}

// function scrollMenu() {
//     const menu = document.getElementById("menu"); 
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         menu.style.position = "fixed";
//         document.getElementById("body").style.paddingTop = "78.4px";
//     } else {
//         menu.style.position = "relative";
//         document.getElementById("body").style.paddingTop = "0px";
//     }
// };


// carrossel
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 6000); // Inicializa o intervalo

// Função para mostrar o slide no índice especificado
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Função para avançar para o próximo slide
function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval();  // Reinicia o intervalo ao avançar manualmente
}

// Função para voltar para o slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval();  // Reinicia o intervalo ao voltar manualmente
}

// Função para reiniciar o intervalo
function resetInterval() {
    clearInterval(slideInterval);  // Limpa o intervalo existente
    slideInterval = setInterval(nextSlide, 6000);  // Reinicia o intervalo
}
// fim-carrossel