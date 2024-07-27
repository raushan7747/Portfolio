
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

// FUNCTION TO PERFORM TEXT ANIMATION
const textAnimation = (objectValueContainer) => {
    return new Promise((resolve) => {
        const headFirstChildContainer = objectValueContainer;
        // getting text from the container
        const headFirstChildText = headFirstChildContainer.textContent;

        // this will clear the container
        headFirstChildContainer.textContent = '';

        // function to perform animation on text
        const headFirstChildAnimationFunction = (headFirstChildText, headFirstChildIndex) => {
            if (headFirstChildIndex < headFirstChildText.length) {
                headFirstChildContainer.textContent += headFirstChildText[headFirstChildIndex];
                // setting time delay
                setTimeout(() => {
                    headFirstChildAnimationFunction(headFirstChildText, headFirstChildIndex + 1);
                }, 500);
            } else {
                resolve(); // resolve the promise when the animation is done
            }
        };
        // animating the text
        headFirstChildAnimationFunction(headFirstChildText, 0);
    });
};
/**__END__TEXT-ANIMATION__headFirstChild__FUNCTION**/

/** START text animation function calls */
const replaceAnime = (async (toReplaceAnime) => {
    await textAnimation(toReplaceAnime);
    // Create the new element
    const newDiv = document.createElement('div');
    newDiv.className = 'nav';
    newDiv.id = 'firstNav';

    const newLink = document.createElement('a');
    newLink.href = '/r/programming';
    newLink.textContent = 'Programming';

    newDiv.appendChild(newLink);

    // Append the new element to nav1
    toReplaceAnime.appendChild(newDiv);
    // Replace the nav1 element with the new element
    toReplaceAnime.replaceWith(newDiv);
});
replaceAnime(nav1);
replaceAnime(nav2);
replaceAnime(nav3);
replaceAnime(nav4);
replaceAnime(nav5);
mainTextAnimation(mainFirstChildContainer);
/** END text animation function calls */
