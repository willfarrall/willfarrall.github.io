// Similar to the CSS, my Javascript was chosen based on the create an effective transition between the 6 grid photo gallery and an expanded 
// single image based on the click input. With there being two primary clicked based functions. The first being clicking an image to open
// the expanded image wrapper overlay, and the second is clicking the cross span button to close the wrapper. This allows the user to effectively
// navigate the image gallery entirely with a click based input.

let images = document.querySelectorAll("img");
console.log(images);

let wrapper =document.getElementById("wrapper");
console.log(wrapper);

let imgWrapper = document.getElementById("expandImg");
console.log(imgWrapper);

let close = document.querySelector("span");
console.log(close);

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal(`images/img${index}.jpg`)
    })
})

close.addEventListener('click', () => wrapper.style.display = 'none')

function openModal(pic) {
    wrapper.style.display = 'flex';
    imgWrapper.src = pic;
}


