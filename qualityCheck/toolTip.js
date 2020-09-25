
export class Tooltip {
  /**
   * Creates tooltip to an element.
   * @param {!Event} event 
   * @param {*HTMLElement} element 
   * @param {*string} elementIdentifier 
   */
    static create(event, element, elementIdentifier) {
        const x = (event.pageX) + 'px';
        const y = (event.pageY) + 'px';
        const tooltipIdentifier = 'tooltip'
        const currentEvent = element;
        currentEvent.parentNode.style.zIndex = '10';
        const tooltipWrap = document.createElement('div');
        tooltipWrap.setAttribute('id', tooltipIdentifier + elementIdentifier);
        tooltipWrap.className = tooltipIdentifier;
        const ul = document.createElement('ul');
        for (let i = 0; i < errorMessages.length; i++) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(errorMessages[i]));
            ul.appendChild(li);
        }
        tooltipWrap.appendChild(ul);
        currentEvent.parentNode.insertBefore(tooltipWrap, currentEvent);
        document.getElementById(tooltipIdentifier + elementIdentifier).style.display = 'block';
    };

    /**
     * Function to remove inputArea tooltip.
     * @param {!Object} event
     */
    static remove(event) {
        const elementIdentifier = event.target.name;
        const element = document.getElementsByName(elementIdentifier)[0];
        const textBoxToolTip = document.getElementById('tooltip' + elementIdentifier);
        if (textBoxToolTip) {
            currentEvent.parentNode.removeChild(textBoxToolTip);
        }
    }
    /**
     * Show the tooltip on the element.
     * @param {*KeyboardEvent} event 
     * @param {*string} elementIdentifier 
     * @param {*HTMLElement} element 
     */
    static show(event, elementIdentifier, element){
        event.showImmediatePropagation();
        Tooltip.remove(event);
        const textArea = event.target.name;
        const currentElement = document.getElementsByName(textArea)[0];
        Tooltip.create_(event,currentElement,textArea);
    }
    /**
     * Clears the tooltip on the element.
     * @param {*KeyboardEvent} event 
     * @param {*string} elementIdentifier 
     * @param {*HTMLElement} element 
     */
    static clear(event, elementIdentifier, element){
        //
    }

}
