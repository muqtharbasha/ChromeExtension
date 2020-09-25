let ValidationsApi = function() {

    const errorMessages = [];
    let textAreas;
    let errorExistInText = false;
    let errorExistInLink = false;
    let errorRepeatedVerb = false;
    let isValidEmptyBoxText = false;
    let isValidEmptyBoxLink = false;
    let isValidItemTextEndwithIng = false;
    let isValidSingleWord;
    let isValidDomainNameLink;
    let isValidDuplicateLink;
    let isValidDuplicateLandingPageURL;
    let isValidHyphenSpacecheck;

    const border = '2px solid red';
    const extension_constants = {
        SINGLE_WORD_CHECK_ERROR: 'Sitelink text should contain at least two words.',
        REPEATED_VERB_CHECK_ERROR:
            'You have used repeated verb(s). Please use different verb(s).',
        PREVIOUS_BOX_EMPTY_CHECK_ERROR: 'Please fill previous item(s) text and link.',
        DOMAIN_NAME_CHECK_ERROR: 'Enter valid doamin name matching landing page URL.',
        DUPLICATE_SITELINK_CHECK_ERROR:
            'Duplicate Sitelink URL. All the SiteLink URL should be unique.'
    }

    let validateTextAreas = (event) => {
        validateItemText(event);
    }

    function ValidationsApi() { }

    ValidationsApi.prototype.init = () => {
        var textBoxes = document.querySelectorAll('input');
        if (textBoxes != undefined) {
            for (let text of textBoxes) {
                textBoxes.removeEventListener('blur', validateItemText, false);
                textBoxes.addEventListener('blur', validateItemText, true);
            }
        }
    };

    /**
     * Validates EWOQ textareas having Item type "Text" based on defined
     * validation rules.
     * @param {!Object} event
     */
    function validateItemText(event) {
        const VALIDATION_RULES = {
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
                } else {
                    isValidSingleWord = false;
                    if (!(errorRepeatedVerb || isValidHyphenSpacecheck ||
                        isValidItemTextEndwithIng)) {
                        event.target.style.removeProperty('border');
                        event.target.classList.remove('error-validation');
                    }
                }
            }
        }
    };

    let showTooltip = (event) => {
        const textAreaBorder = event.target.style.border;
        if (textAreaBorder === border) {
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
                div.style.zIndex = '999';
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
        }
    };

    /**
     * Function to remove textarea tooltip.
     * @param {!Object} event
     */
    let removeTooltip = (event) => {
        const inputTextArea = event.target.name;
        const currentEvent = document.getElementsByName(inputTextArea)[0];
        const textAreaTooltip = document.getElementById('tooltip' + inputTextArea);
        if (textAreaTooltip) {
            currentEvent.parentNode.removeChild(textAreaTooltip);
        }
    };
    /**
     * Function to trim "colon" from the string and return the value.
     * @param {string} text
     * @return {string} text
     */
    let TrimColon = (text) => text.toString().replace(/^(.*?):*$/, '$1');

    return ValidationsApi;
}();

class DuplicateUrlHelper {
    // function1
    // function2
}

  // let validateTextAreas = (event) => {
    //     const textString = event.target.name;
    //     const splitedString = TrimColon(textString).split(':');
    //     const extraction_item_type = splitedString[1].split('_').reverse()[1];
    //     const extraction_item_name = splitedString[1];

    //     // if (extraction_item_name !== 'analyst_comment' &&
    //     //     extraction_item_name !== 'analyst_url') {
    //     //     switch (extraction_item_type) {
    //     //         case 'item':
    //     //             validateItemText(event);
    //     //             break;
    //     //         case 'url':
    //     //             validateItemLink(event);
    //     //             break;
    //     //     }
    //     //     disableSubmitButton();
    //     // }
    // };

    // function validateItemLink(event) {

    // }
    // function disableSubmitButton() {

    // }