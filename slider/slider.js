
//Elements in HTML
const sliderContainer = document.getElementsByClassName('slider');
const sliderItem = document.getElementsByClassName('slider__item');

//Number of slides & counter
let slidesNum = sliderItem.length;


//Add first and last pseudo-slides
// let newClone = node.cloneNode([deep]);
let firstSliderItem = sliderItem[slidesNum - 1].cloneNode(true);
let lastSliderItem = sliderItem[0].cloneNode(true);
// let firstSliderItem = sliderItem[slidesNum - 1];
// let lastSliderItem = sliderItem[0];
console.log(lastSliderItem);



// sliderContainer.insertBefore(firstSliderItem, sliderItem[0]);
    sliderContainer.appendChild(lastSliderItem);

function createEdgeSliderItems(){
    sliderContainer.insertBefore(firstSliderItem, sliderItem[0]);
    sliderContainer.appendChild(lastSliderItem);
}
// createEdgeSliderItems();

// sliderContainer.insertBefore(firstSliderItem, sliderItem[0]);
// sliderContainer.appendChild(lastSliderItem);


//??????????????
let translateValue = 1;

function sliderItemAddTransform(){
    if(translateValue >= slidesNum){
        translateValue = 1;
    };
    let translateItem = 'translateX(' + translateValue + '00%)';
    for(i=0; i < slidesNum; i++){
        sliderItem[i].style.transform = translateItem;
    }
    translateValue++;
    // console.log(translateValue, translateItem);
}

function loopSlider(){
    setInterval(pritisni, 3000);
}
// loopSlider();

// let id = setInterval(pritisni, 3000);



// sliderItem.forEach(sliderItemAddTransform);
// console.log(sliderItemAddTransform);