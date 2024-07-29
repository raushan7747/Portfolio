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
const replaceMain = (async (toAppendIn, toAddSkills, newElementID, toAddMainContent, secondElementID, toAddTags) => {
    await mainTextAnimation(toAppendIn);
    // Create the new elements
    const newElement = document.createElement('span');
    const tildNewElement = document.createElement('span');
    const tag = document.createElement('span');
    const lineBreak = document.createElement('br');
    const dollarCommand = document.createElement('span');
    const secondnewElement = document.createElement('span');
    // adding some styles on the new element
    newElement.className = 'mfc';
    newElement.id = newElementID;
    newElement.textContent = toAddSkills;
    // adding some styles on the tild new element
    tildNewElement.className = 'mfc';
    tildNewElement.style.fontSize = '1.4em'
    tildNewElement.textContent = ' ~ '
    tildNewElement.style.color = '#f1e423e5'
    // adding some styles on the tag new element
    tag.style.color = '#06a187e5';
    tag.textContent = `( ${toAddTags} )`;
    // adding some styles on the dollar($) sign new element
    dollarCommand.textContent = '$ '
    newElement.className = 'mfc';
    dollarCommand.style.fontSize = '1.1em'
    dollarCommand.style.color = '#ffffff'
    // adding some styles on the second new element
    secondnewElement.textContent = toAddMainContent;
    secondnewElement.className = 'mfc';
    secondnewElement.id = secondElementID;
    // Appending the new element to nav1
    toAppendIn.appendChild(newElement);
    toAppendIn.appendChild(tildNewElement);
    toAppendIn.appendChild(tag);
    toAppendIn.appendChild(lineBreak);
    toAppendIn.appendChild(dollarCommand);
    toAppendIn.appendChild(secondnewElement);
    // Replace the nav1 element with the new element
});
/**__END__TEXT-ANIMATION__REPLACEMENT__FUNCTION**/

/**__END__TEXT-ANIMATION__mainFirstChild__FUNCTION**/
/**__START__MAIN-TEXT__**/
const mfc_1 = 'C SQL JAVA PYTHON R JAVASCRIPT and more';
const mfc_2 = 'HTML CSS JAVASCRIPT MONGODB EXPRESS REACT NODE and more';
const mfc_3 = 'API and BACKEND-Devloppment DATABASE SCRIPTING and more';
const mfc_4 = 'FEATURE-ENGINEERING ML DL GIT AWS and more';
const mfc_5 = 'CRITICAL-THINKING WRITING-and-COMMUNICATION TEACHING-and-MENTORING LIFELONG-LEARNING and more';
/**__END__MAIN-TEXT__**/

/** START text animation function calls */
const programmingContent = ' Proficient in C, JAVA, PYTHON, SQL, and JAVASCRIPT, with over a year experience in developing robust, efficient software solutions accross various domains';
const developmentContent = ' Skilled in full-stack development, including front-end design, back-end architecture, and database managemnt, with a focus on creting responsive, user-friendly applications'
const interFacelessContent = ' Expert in developing API-driven solutions, automating processes, integrating third-party services, and optimizing performance to create seamless, efficient and scalable applications without user interfaces'
const dataScienceContent = ' Proficient in data analysis and visualization, utilizing machine learning in and python libraries like Pandas and Scikit-learn to drive data-driven decision making'
const academicsContent = ' Strong academic background with skills in critical thinking, reasearch and problem-solving, demonstrated through successful project completions and a commitment to continuous learning and grouwth'

replaceMain(mainFirstChildContainer1, mfc_1, 'mfcc_1', programmingContent, 'mfccc_1', 'HABBIT');
replaceMain(mainFirstChildContainer2, mfc_2, 'mfcc_2', developmentContent, 'mfccc_2', 'COOKING');
replaceMain(mainFirstChildContainer3, mfc_3, 'mfcc_3', interFacelessContent, 'mfccc_3', 'DIVING');
replaceMain(mainFirstChildContainer4, mfc_4, 'mfcc_4', dataScienceContent, 'mfccc_4', 'CRAZY-SCIENTIST');
replaceMain(mainFirstChildContainer5, mfc_5, 'mfcc_5', academicsContent, 'mfccc_5', 'MENTORSHIP');
/** END text animation function calls */