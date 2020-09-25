import { DOMUtils } from './qualityCheck//dom_utils.js';
import { ToolTip } from './qualityCheck//toolTip.js';
import { TextValidations } from './qualityCheck//text_validations.js';

export class ValidationsApi {
    constructor(taskType) {
        this.textValidations_ = new TextValidations(taskType);
    }

    registerEventListeners() {
        /**
       *Apply / Remove Event Listeners
       * @param {input} 
       */
        var textBoxes = document.querySelectorAll('input');
        if (textBoxes != undefined) {
            for (let textBox of textBoxes) {
                textBox.removeEventListener('blur', validateInput_, false);
                textBox.removeEventListener('mouseover', ToolTip.show, false);
                textBox.removeEventListener('mouseout', Tool.remove, false);
                textBox.addEventListener('blur', validateInput_, true);
                textBox.addEventListener('mouseover', ToolTip.show, false);
                textBox.addEventListener('mouseout', Tool.remove, true);
            }
        }
    }

    validateInput_(event) {
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
        }
    };
}

chrome.runtime.onMessage.addListener(loadValidations);

function loadValidations(message, sender, sendresponse) {
   
}
