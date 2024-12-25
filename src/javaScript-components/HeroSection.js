import HeroImage from '../asset/hero-img.jpg'
import HelperMethods from './HelperMethods.js'

export default class HeroSection {
    constructor() {
        this.helperMethods = new HelperMethods()
        this.parentNode = this.helperMethods.rootElement
    }

    // Hero section to entire website
    
    renderHeroSection() {
   
        const heroImgSection = this.helperMethods.createElement("section", this.parentNode, null, "hero-section")
        const heroImg = this.helperMethods.createElement("img", heroImgSection, null, "hero-img")
        heroImg.src = HeroImage
        heroImg.alt = "View of Ocean view restaurant"
        const heroQuote = this.helperMethods.createElement("p", this.parentNode, "Ocean View – where every bite tells a story, every flavor is a celebration, and every moment is enriched by breathtaking views.","hero-quote")
    
    }

}