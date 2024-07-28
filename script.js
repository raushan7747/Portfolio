
/**__START__TEXT-ANIMATION__mainFirstChild**/
// getting text container
const mainFirstChildContainer1 = document.getElementsByClassName('mfc_1')[0];
const mainFirstChildContainer2 = document.getElementsByClassName('mfc_2')[0];
const mainFirstChildContainer3 = document.getElementsByClassName('mfc_3')[0];
const mainFirstChildContainer4 = document.getElementsByClassName('mfc_4')[0];
const mainFirstChildContainer5 = document.getElementsByClassName('mfc_5')[0];

// FUNCTION TO PERFORM TEXT ANIMATION
const mainTextAnimation = (objectValueContainer) => {
    return new Promise((resolve) => {
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
                }, 20);
            } else {
                resolve(); // resolve the promise when the animation is done
            }
        }
        // animating the text
        mainFirstChildAnimationFunction(text, 0);
    });

}

/**__START__TEXT-ANIMATION__REPLACEMENT__FUNCTION**/
const replaceMain = (async (toReplaceAnime, toReplaceText, toReplaceColor, toAddId, toAddMainContent, toReplaceContentColor, toAddContentID) => {
    await mainTextAnimation(toReplaceAnime);
    // Create the new elements
    const newDiv = document.createElement('span');
    const secondNewDiv = document.createElement('span');
    // add some styles on new element
    secondNewDiv.textContent = toAddMainContent;
    secondNewDiv.style.color = toReplaceContentColor;
    secondNewDiv.className = 'mfc';
    secondNewDiv.id = toAddContentID;
    secondNewDiv.style.fontWeight = 'bolder';

    // add some styles on new element
    newDiv.className = 'mfc';
    newDiv.id = toAddId;
    newDiv.style.color = toReplaceColor;
    newDiv.style.fontWeight = 'bolder';
    newDiv.textContent = toReplaceText;

    // Append the new element to nav1
    toReplaceAnime.appendChild(newDiv);
    toReplaceAnime.appendChild(secondNewDiv);
    // Replace the nav1 element with the new element
});
/**__END__TEXT-ANIMATION__REPLACEMENT__FUNCTION**/

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

/**__START__MAIN-TEXT__**/
const mfc_1 = 'C SQL JAVA PYTHON R JAVASCRIPT';
const mfc_2 = 'C SQL JAVA PYTHON R JAVASCRIPT';
const mfc_3 = 'C SQL JAVA PYTHON R JAVASCRIPT';
const mfc_4 = 'C SQL JAVA PYTHON R JAVASCRIPT';
const mfc_5 = 'C SQL JAVA PYTHON R JAVASCRIPT';
/**__END__MAIN-TEXT__**/

/** START text animation function calls */
const mainColor = '#a80dbde5';
const mainContentColor = '#06a187e5';
const programmingContent = ' description details programming';
const developmentContent = ' description details'
const interFacelessContent = ' description details'
const dataScienceContent = ' description details'
const academicsContent = ' description details'

replaceMain(mainFirstChildContainer1, mfc_1, mainColor, 'mfcc_1', programmingContent, mainContentColor, 'mfccc_1');
replaceMain(mainFirstChildContainer2, mfc_2, mainColor, 'mfcc_2', developmentContent, mainContentColor, 'mfccc_2');
replaceMain(mainFirstChildContainer3, mfc_3, mainColor, 'mfcc_3', interFacelessContent, mainContentColor, 'mfccc_3');
replaceMain(mainFirstChildContainer4, mfc_4, mainColor, 'mfcc_4', dataScienceContent, mainContentColor, 'mfccc_4');
replaceMain(mainFirstChildContainer5, mfc_5, mainColor, 'mfcc_5', academicsContent, mainContentColor, 'mfccc_5');
/** END text animation function calls */
