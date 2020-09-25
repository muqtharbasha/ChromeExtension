chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendresponse) {

    let paragraphs = document.getElementsByTagName("div");
    for (elt of paragraphs) {
        elt.style['background-color'] = '#00CED1';
    }

    let changeColor = document.getElementById('fullpage');
    for (elt of paragraphs) {
        elt.style['background-color'] = '#00CED1';
    }

    var x = document.getElementById('customerid');
    x.value = 'Hello';
    var x = document.getElementById('rtn');
    x.value = '123456789';

    console.log(message.txt);

    function Validations() {
        const errorMessages = [];
        let textAreas;
        let errorExistInText = false;
        let isValidHypenSpaceCheck = false;
        let isValidSingleWord;
        const border = '2px solid red';
        const extension_constants = {
            SINGLE_WORD_CHECK_ERROR: 'Link text should contain at least two words.',
            HYPHEN_SPACE_CHECK_ERROR: 'The links text contains Hyphen should not be surrounded by space.',
        };
        /**
         * Function to apply toolTip on inputArea
         * @param {!Object} event 
         */
        let showTooltip = (event) => {
            const textAreaBorder = event.target.style.border;
            const x = (event.pageX) + 'px';
            const y = (event.pageY) + 'px';
            errorMessages.length = 0;
            validateTextAreas(event);
            const textArea = event.target.name;
            const currentEvent = document.getElementsByName(textArea)[0];
            currentEvent.parentNode.style.zIndex = '10';
            if (errorMessages.length !== 0) {
                const div = document.createElement('div');
                div.setAttribute('id', 'tooltip' + textArea);
                div.style.position = 'fixed';
                div.style.left = x;
                div.style.top = y;
                div.style.width = 'auto';
                div.style.height = 'auto';
                div.style.color = 'black';
                div.style.background = 'rgb(241, 241, 241)';
                div.style.paddingRight = '10px';
                div.style.border = '1px solid rgb(179, 179, 179)';
                div.style.borderRadius = '8px';
                div.style.zIndex = '200';
                const ul = document.createElement('ul');
                for (let i = 0; i < errorMessages.length; i++) {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(errorMessages[i]));
                    ul.appendChild(li);
                }
                div.appendChild(ul);
                currentEvent.parentNode.insertBefore(div, currentEvent);
                document.getElementById('tooltip' + textArea).style.display = 'block';
            }
        };

        /**
         * Function to remove inputArea tooltip.
         * @param {!Object} event
         */
        let removeTooltip = (event) => {
            const textArea = event.target.name;
            const currentEvent = document.getElementsByName(textArea)[0];
            const textAreaTooltip = document.getElementById('tooltip' + textArea);
            if (textAreaTooltip) {
                currentEvent.parentNode.removeChild(textAreaTooltip);
            }
        };
        /**
         * Function to apply validtions on input elements
         * @param {!Object} event 
         */
        let validateTextAreas = (event) => {
            validateItemText(event);
        }

        /**
         *Apply / Remove Event Listeners
         * @param {input} 
         */
        var textBoxes = document.querySelectorAll('input');
        if (textBoxes != undefined) {
            for (let textBoxValidate of textBoxes) {
                textBoxValidate.removeEventListener('blur', validateTextAreas, false);
                textBoxValidate.removeEventListener('mouseover', showTooltip, false);
                textBoxValidate.removeEventListener('mouseout', removeTooltip, false);
                textBoxValidate.addEventListener('blur', validateTextAreas, true);
                textBoxValidate.addEventListener('mouseover', showTooltip, false);
                textBoxValidate.addEventListener('mouseout', removeTooltip, true);
            }
        }

        /**
         * Validates textareas having Item type "Text" based on defined
         * validation rules.
         * @param {!Object} event
         */
        function validateItemText(event) {

            /**
             * Checks for Single Word for all the "Text" items type.
             * @param {!Object} event
             */
            const textAreaVal = event.target.value;
            const values = textAreaVal.split(' ').filter(function (v) {
                return v !== '';
            });

            const isSingleWord = values.length === 1;

            if (isSingleWord) {
                event.target.style.border = border;
                event.target.classList.add('error-validation');
                errorExistInText = true;
                isValidSingleWord = true;
                errorMessages.push(extension_constants.SINGLE_WORD_CHECK_ERROR);
                console.log(extension_constants.SINGLE_WORD_CHECK_ERROR);
            } else {
                isValidSingleWord = false;
            }

            const textAreaHyphen = event.target.value;
            for (let i = 0; i < textAreaHyphen.length; i++) {
                if (textAreaHyphen[i] === '-') {
                    if (textAreaHyphen[i - 1] === '' || textAreaHyphen[i + 1] === '') {
                        event.target.classList.add('error-validation');
                        errorExistInText = true;
                        isValidHypenSpaceCheck = true;
                        errorMessages.push(extension_constants.HYPHEN_SPACE_CHECK_ERROR);
                        break;
                    }
                }
            }
        }

        return Validations;
    }

    Validations();
}

class DuplicateUrlHelper {
    // function1
    // function2
}
