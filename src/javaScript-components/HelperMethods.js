export default class HelperMethods {

    constructor() {
        this.rootElement = document.getElementById("root")
    }

createElement(elementName, parentNode, textContent, className) {
    const element = document.createElement(elementName) 

    if (textContent) element.textContent = textContent
    
    if (className) element.classList.add(className)

    parentNode.appendChild(element)

    return element
}


}