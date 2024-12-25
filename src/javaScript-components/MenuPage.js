import HelperMethods from './HelperMethods.js'
import MenuList from './MenuList.js'

export default class MenuPage {
    constructor() {
        this.helperMethods = new HelperMethods()

        this.parentNode = this.helperMethods.rootElement
        this.menuList = new MenuList()
        this.menuItems = this.menuList.menu

    }



    createdMenuItems(menuItem, menuContent){
    

        const menuBoxes = this.helperMethods.createElement("div", menuContent, null, "menu-boxes")

        const menuPosters = this.helperMethods.createElement("img", menuBoxes, null, "menu-posters")
        menuPosters.src = menuItem.poster
        menuPosters.alt = menuItem.name

        const menuItemNames = this.helperMethods.createElement("h3", menuBoxes, menuItem.name, "menu-names")

        const menuPrices = this.helperMethods.createElement("p", menuBoxes, menuItem.price, "menu-prices")

    }

    renderMenuSection(){
        
        const menuSection = this.helperMethods.createElement("section", this.parentNode, null, "menu-section")
        
        const menuSectionHeading = this.helperMethods.createElement("h1", menuSection, "Menu", "menu-heading")

        const menuContent = this.helperMethods.createElement("div", menuSection, null, "menu-container")



        this.menuItems.forEach(menuItem => this.createdMenuItems(menuItem, menuContent))
    }





}