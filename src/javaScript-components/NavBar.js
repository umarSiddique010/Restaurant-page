import HelperMethods from './HelperMethods.js'
import restaurantLogo from '../asset/hotel-logo-img.png'
import hamMenuImg from '../asset/menu.svg'
import closeImg from '../asset/close.svg'

export default class NavBar {
    constructor() {
        this.helperMethod = new HelperMethods()
        this.navElement = document.querySelector("nav")
        this.logoBox = document.getElementById("logoBox")
        this.hamMenuBtn =  document.getElementById("hamMenuBtn")
        this.hamMenuBtnImg = this.helperMethod.createElement("img", this.hamMenuBtn, null, null)
        this.hamMenuBtnImg.src = hamMenuImg

    }



    hamburgerMenu() {
        this.hamMenuBtn.addEventListener("click", () => {
            this.hamMenuHandler()
        })
    }


    hamMenuHandler() {

        const  navMenu = document.getElementById("navMenu")

          if (navMenu.classList.contains("visibility")) {
              navMenu.classList.remove("visibility")
              this.hamMenuBtnImg.src = hamMenuImg

          } else {
              navMenu.classList.add("visibility")
              this.hamMenuBtnImg.src = closeImg
          }
      }


    appendingLogo() {
       const logo = this.helperMethod.createElement("img", this.logoBox, null, "restaurant-logo")
       logo.src = restaurantLogo
       logo.alt = "Restaurant's logo"
    }

}