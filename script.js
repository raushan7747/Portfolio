
/**__START__TEXT-ANIMATION__mainFirstChild**/
// getting text container
const mainFirstChildContainer = document.getElementById('mainFirstChild');
// FUNCTION TO PERFORM TEXT ANIMATION
const mainTextAnimation = (objectValueContainer) => {
    // getting text from the container
    const text = objectValueContainer.textContent;

    // this will clear the content
    objectValueContainer.textContent = '';


    // function to perform animation on text
    const mainFirstChildAnimationFunction = (text, mainFirstChildAnimationIndex) => {
        if (mainFirstChildAnimationIndex < text.length) {
            objectValueContainer.textContent += text[mainFirstChildAnimationIndex];
            // setting time delay
            setTimeout(() => {
                mainFirstChildAnimationFunction(text, mainFirstChildAnimationIndex + 1)
            }, 20)
        }
    }
    // animating the text
    mainFirstChildAnimationFunction(text, 0);

}
/**__END__TEXT-ANIMATION__mainFirstChild__FUNCTION**/
/**X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X--X-X-X-X*/

/**__START__TEXT-ANIMATION__headFirstChild**/
// getting text container
let objValue = document.getElementsByClassName('nav');
let nav1 = objValue[0]
let nav2 = objValue[1]
let nav3 = objValue[2]
let nav4 = objValue[3]
let nav5 = objValue[4]


/** FUNTION TO MAKE TYPING EFFICT LIKE INPUTS */
let firstNav = document.getElementById('firstNav')
let secondNav = document.getElementById('secondNav')
let thirdNav = document.getElementById('thirdNav')
let fourthNav = document.getElementById('fourthNav')
let fifthNav = document.getElementById('fifthNav')


const inputTypeEffect = (elementToApplyEffect) => {
    // Taking dunderscore(__)
    let span = document.createElement('span');
    span.innerText = '__'
    elementToApplyEffect.appendChild(span);

    // START taking each element into an ARRAY
    const arr = [];
    for (index = 0; index < elementToApplyEffect.textContent.length; index++) {
        arr.push(elementToApplyEffect.textContent[index]);
    }
    console.log(arr);
    // AFTER taking all elements into the ARRAY
}
inputTypeEffect(firstNav);
inputTypeEffect(secondNav);
inputTypeEffect(thirdNav);
inputTypeEffect(fourthNav);
inputTypeEffect(fifthNav);

// FUNCTION TO PERFORM TEXT ANIMATION
const textAnimation = (objectValueContainer) => {
    const headFirstChildContainer = objectValueContainer;
    // getting text from the container
    const headFirstChildText = headFirstChildContainer.textContent;

    // this will clear the content
    headFirstChildContainer.textContent = '';

    // function to perform animation on text
    const headFirstChildAnimationFunction = (headFirstChildText, headFirstChildIndex) => {
        if (headFirstChildIndex < headFirstChildText.length) {
            // headFirstChild.textContent += text[headFirstChildIndex];
            headFirstChildContainer.textContent += headFirstChildText[headFirstChildIndex]
            // setting time delay
            setTimeout(() => {
                headFirstChildAnimationFunction(headFirstChildText, headFirstChildIndex + 1)
            }, 500)
        }
    }
    // animating the text
    headFirstChildAnimationFunction(headFirstChildText, 0);
}
/**__END__TEXT-ANIMATION__headFirstChild__FUNCTION**/

/** START text animation function calls */
textAnimation(nav1);
textAnimation(nav2);
textAnimation(nav3);
textAnimation(nav4);
textAnimation(nav5);
mainTextAnimation(mainFirstChildContainer)
/** END text animation function calls */
