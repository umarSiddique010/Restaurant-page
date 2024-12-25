import HelperMethods from './HelperMethods.js'

export default class AboutPage {
    constructor() {
        this.helperMethods = new HelperMethods()
        this.parentNode = this.helperMethods.rootElement

        this.aboutText = "Ocean View is more than just a restaurant; it’s a culinary journey. Our menu is a fusion of global flavors, inspired by the diverse cultures that have influenced coastal cuisine. From fresh seafood dishes to international favorites, we strive to create a dining experience that’s as visually stunning as it is delicious. Savor the breathtaking ocean views while indulging in our mouthwatering creations."
    }

    renderAboutSection() {
        const aboutSection = this.helperMethods.createElement("section", this.parentNode, null, "about-section")

        const aboutHeading = this.helperMethods.createElement("section", aboutSection, "About us", "about-heading")
        const aboutTextPara = this.helperMethods.createElement("p", aboutSection, this.aboutText, "about-text-para")
    }
}