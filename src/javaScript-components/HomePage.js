import HelperMethods from './HelperMethods.js'
export default class HomePage {
    constructor() {
        this.helperMethods = new HelperMethods()
        this.parentNode = this.helperMethods.rootElement
    }



// Welcome section of Homepage

renderHomeSection() {

    const WelcomeSection = this.helperMethods.createElement("section", this.parentNode, null, "welcome-section")

    const welcomeSectionHeading = this.helperMethods.createElement("h1", WelcomeSection, "Ocean View", "welcome-heading")

    
    const welcomeBox = this.helperMethods.createElement("div", WelcomeSection, null, "welcome-box")

    const welcomeMsg = this.helperMethods.createElement("h2", welcomeBox, "Welcome to Ocean view restaurant", "welcome-msg")

    const visitMenuBtn = this.helperMethods.createElement("button", welcomeBox, "Visit MENU", "visit-menu-btn")

}




}