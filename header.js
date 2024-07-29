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
                resolve();
            }
        };
        // animating the text
        headFirstChildAnimationFunction(headFirstChildText, 0);
    });
};
/**__END__TEXT-ANIMATION__headFirstChild__FUNCTION**/

/**__START__TEXT-ANIMATION__REPLACEMENT__FUNCTION**/
const replaceAnime = (async (toReplaceAnime, toReplaceText) => {
    await textAnimation(toReplaceAnime);
    // Create the new element
    const newDiv = document.createElement('div');
    newDiv.className = 'nav';
    newDiv.id = 'nav';

    const newLink = document.createElement('a');
    newLink.style.textDecoration = 'none';
    newLink.style.color = '#00bd3fe5';
    newLink.style.fontWeight = 'bolder';
    newLink.href = '/r/programming';
    newLink.textContent = toReplaceText;

    newDiv.appendChild(newLink);

    // Append the new element to nav1
    toReplaceAnime.appendChild(newDiv);
    // Replace the nav1 element with the new element
    toReplaceAnime.replaceWith(newDiv);
});
/**__END__TEXT-ANIMATION__REPLACEMENT__FUNCTION**/

/** START text animation function calls */
replaceAnime(nav1, 'Programming');
replaceAnime(nav2, 'Development');
replaceAnime(nav3, 'Interface-less');
replaceAnime(nav4, 'Data Science');
replaceAnime(nav5, 'Academics');
/** END text animation function calls */

