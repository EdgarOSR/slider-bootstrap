
var calcTotalSlides = document.querySelectorAll('.slider-picture').length;
var divSlider = document.querySelector('.slider');
var divSliderWidth = document.querySelector('.slider-width');
var divSliderControls = document.querySelector('.slider-controls');
var divSliderPicture = document.querySelector('.slider-picture');

// variável de ambiente
var currSlide = 0;

// ajustar largura do slide
divSliderWidth.style.width = `calc(100vw * ${calcTotalSlides})`;

// ajustar altura do slider controls
divSliderControls.style.height = `${divSlider.clientHeight}px`;

// funções para controles dos slides
function goPrev()
{
    currSlide--;
    if(currSlide < 0)
    {
        currSlide = (calcTotalSlides - 1);
    }
    updateMargin();
}

function goNext()
{
    currSlide++;
    if(currSlide > (calcTotalSlides - 1))
    {
        currSlide = 0;
    }
    updateMargin();
}

// transição do slide
function updateMargin()
{
     let newMargin = (currSlide * divSliderPicture.clientWidth);
    divSliderWidth.style.marginLeft = `${newMargin}px`;
}

// automatizar a passagem dos slides
setInterval(goNext, 5000);