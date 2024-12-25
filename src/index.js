import HeroSection from './javaScript-components/HeroSection.js'
import HomePage from './javaScript-components/HomePage.js'
import MenuPage from './javaScript-components/MenuPage.js'
import ContactPage from './javaScript-components/ContactPage.js'
import AboutPage from './javaScript-components/AboutPage.js'
import NavBar from './javaScript-components/NavBar.js'
import githubLogoImg from './asset/github.svg'
import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
// getting navBar with ID
    const homeNav = document.getElementById("homeNav")
    const menuNav = document.getElementById("menuNav")
    const contactNav = document.getElementById("contactNav")
    const aboutNav = document.getElementById("aboutNav")
    // const visitMenuBtn = document.querySelector(".visit-menu-btn")



    // nav IDs 

    const navItems = {
        homeNav : new HomePage(),
        menuNav : new MenuPage(),
        contactNav : new ContactPage(),
        aboutNav : new AboutPage(),
    }



    // creating instances of homePage and implementing it so that the website render with home page
    
    const heroSection = new HeroSection()
    const navBar = new NavBar()

    navBar.hamburgerMenu()
    navBar.appendingLogo()
    heroSection.renderHeroSection()
    navItems.homeNav.renderHomeSection()


    const clearMainContent = () => {
        document.getElementById("root").innerHTML = ""
    }


    // Add event listener dynamically

    Object.entries(navItems).forEach(([navId, pageInstance]) => {
        const navElement = document.getElementById(`${navId}`)

        navElement.addEventListener("click", () => {
            clearMainContent()
            heroSection.renderHeroSection()



            if (pageInstance.renderHomeSection) pageInstance.renderHomeSection()
            if (pageInstance.renderMenuSection) pageInstance.renderMenuSection()
            if (pageInstance.renderContactSection) pageInstance.renderContactSection()
            if (pageInstance.renderAboutSection) pageInstance.renderAboutSection()
            
        })
    })

    // adding event listener dynamically on homePage visit menu button 

    document.addEventListener("click", (e) => {

        if (e.target.classList.contains("visit-menu-btn")) {
            
            clearMainContent()
            heroSection.renderHeroSection()
            navItems.menuNav.renderMenuSection()
        }
        })


    const githubLogo = document.createElement("img")
    githubLogo.src = githubLogoImg
    githubLogo.alt = "github logo"
     document.querySelector(".github-link a").appendChild(githubLogo)


})