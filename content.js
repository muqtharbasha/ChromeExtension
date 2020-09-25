chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sender, sendresponse) {

    function Validations() {
        const errorMessages = [];
        let textAreas;
        let errorExistInText = false;
        let isValidSingleWord;
        const border = '2px solid red';
        const extension_constants = {
            SINGLE_WORD_CHECK_ERROR: 'Link text should contain at least two words.',
            HYPHEN_SPACE_CHECK_ERROR: 'The links text contains Hyphen should not be surrounded by space.',
        };

        /**
         * Function to apply validtions on input elements
         * @param {!Object} event 
         */
        let validateTextAreas = (event) => {
            validateItemText(event);
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
            ONLY_SINGLE_WORD_CHECK: (event) => {
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
            }

            HYPHEN_SPACE_CHECK: (event) => {
                const textAreaVal = event.target.value;
                for (let i = 0; i < textAreaVal.length; i++) {
                    if (textAreaVal[i] === '-') {
                        if (textAreaVal[i - 1] === '' || textAreaVal[i + 1] === '') {
                            event.target.classList.add('error-validation');
                            errorExistInText = true;
                            isValidHypenSpaceCheck = true;
                            errorMessages.push(extension_constants.HYPHEN_SPACE_CHECK_ERROR);
                            break;
                        }
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

  //*** TODO - Muqthar */
          //Factory method
          //Identify the Elements whether it is text or link element.
          //Based on this create the instance of text / link validation class.
          //call the getValidtions method (json object - key/value)
          // Key = textItem, value = validationError/warning. try to import the config
          //