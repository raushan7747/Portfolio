/**__START__TEXT-ANIMATION__mainFirstChild**/
// getting text container
const mainFirstChildContainer = document.getElementById('mainFirstChild');

// getting text from the container
const text = mainFirstChildContainer.textContent;

// this will clear the content
mainFirstChildContainer.textContent = '';


// function to perform animation on text
const mainFirstChildAnimationFunction = (text, mainFirstChildAnimationIndex) => {
    if (mainFirstChildAnimationIndex < text.length) {
        mainFirstChildContainer.textContent += text[mainFirstChildAnimationIndex];
        // setting time delay
        setTimeout(() => {
            mainFirstChildAnimationFunction(text, mainFirstChildAnimationIndex + 1)
        }, 20)
    }
}
// animating the text
mainFirstChildAnimationFunction(text, 0);
/**__END__TEXT-ANIMATION__headFirstChild**/

/**X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X--X-X-X-X*/

/**__START__TEXT-ANIMATION__mainFirstChild**/
// getting text container
const headFirstChildContainer = document.getElementById('headFirstChild');

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
        }, 200)
    }
}
// animating the text
headFirstChildAnimationFunction(headFirstChildText, 0);
/**__END__TEXT-ANIMATION__headFirstChild**/