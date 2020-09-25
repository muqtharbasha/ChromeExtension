export const DOMUtils = {

    getTartetTextValue(targetElement, type, Element) {
        switch (type) {
            case 'input':
                return {
                    name: targetElement.name,
                    value: (targetElement.value || '')
                };
            default:
                return {
                    name: targetElement.name || targetElement.getAttribute('name'),
                };
        }
    },

    getIdentifierFromElement(element) {
        //
    },

    getTargetTextValue(element) {
        //
    },
    getWorkflowTemplateName(taskName){

    }

}