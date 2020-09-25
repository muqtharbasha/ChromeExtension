import {TextValidationRules} from './qualityCheck/extension_constants.js'

export class TextValidations {
    constructor(taskType) {
        this.validationRules_ = {
            /**
             * Returns true if text value characters exceeds maximum number of
             *     characters.
             * @param {string} value
             * @return {boolean}
             */
            [TextValidationRules.CHARACTER_LENGTH_CHECK]: (value) => {
                return value.length > 300;
            },

        }
    }

    getValidations() {
        return this.validationRules_;
    }
}