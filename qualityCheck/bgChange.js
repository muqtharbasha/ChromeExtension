
export default class BGChange {
    constructor() {
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
    }
}
