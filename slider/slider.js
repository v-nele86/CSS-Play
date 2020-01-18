const sliderContainer = document.getElementsByClassName('slider');
const sliderItem = document.getElementsByClassName('slider__item');
// console.log(sliderItem);


let slidesNum = sliderItem.length;
// console.log(slidesNum);

let firstSliderItem = sliderItem[slidesNum - 1];
let lastSliderItem = sliderItem[0];
console.log(firstSliderItem, lastSliderItem);

let a = document.createElement('p');
a.innerText = 'a';
console.log(a);
let division = document.getElementsByClassName('slider__section__wrapper');
// division.appendChild(a);
console.log(division);
//document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"


// function createEdgeSliderItems() {
//     let node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
// }

function createEdgeSliderItems(){
    // sliderContainer.insertBefore(firstSliderItem, sliderContainer.childNodes[0]);
    sliderContainer.appendChild(lastSliderItem);
}
// createEdgeSliderItems();

// sliderContainer.insertBefore(firstSliderItem, sliderItem[0]);
// sliderContainer.appendChild(lastSliderItem);


let translateValue = 1;

function pritisni(){
    if(translateValue >= slidesNum){
        translateValue = 1;
    };
    let translateItem = 'translateX(' + translateValue + '00%)';
    for(i=0; i < slidesNum; i++){
        sliderItem[i].style.transform = translateItem;//moze i duzina niza * 100%
    }
    translateValue++;
    console.log(translateValue, translateItem);
}

function loopSlider(){
    setInterval(pritisni, 3000);
}
// loopSlider();

// let id = setInterval(pritisni, 3000);



function sliderItemAddTransform(item){
    // // document.getElementsByClassName('slider__item').style.transform = 'translateX(100%)';
    // item.style.transform = 'translateX(100%)';

}
// sliderItem.forEach(sliderItemAddTransform);
// console.log(sliderItemAddTransform);