import HelperMethods from './HelperMethods.js'
import ContactData from './ContactData.js'

export default class ContactPage {
    constructor() {
        this.helperMethods = new HelperMethods()
        this.parentNode = this.helperMethods.rootElement
        this.contactData = new ContactData()
        this.getContact = this.contactData.contactList
       
    }

    createContactSection(contactKey, contactValue, contactContainer){

       
        const contactBox = this.helperMethods.createElement("div", contactContainer, null, "contact-box")
        const contactTypeHeadings = this.helperMethods.createElement("h3", contactBox, contactKey, "contact-type-headings")
        const contactTypeParas = this.helperMethods.createElement("p", contactBox, contactValue, "contact-paras")

    }


    renderContactSection(){
        const contactSection = this.helperMethods.createElement("section", this.parentNode, null, "contact-section")

        const contactSectionHeading = this.helperMethods.createElement("h1", contactSection, "Contact us", "contact-heading")

        const contactContainer = this.helperMethods.createElement("div", contactSection, null, "contact-container")


       Object.entries(this.getContact).forEach(([contactKey, contactValue]) => {
        this.createContactSection(contactKey, contactValue, contactContainer)
    });
    }


}