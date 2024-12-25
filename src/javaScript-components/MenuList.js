import NoodlesPasta from '../asset/pasta.jpeg'
import TikkaBiryani from '../asset/biryani-img.jpg'
import BrazilianPizza from '../asset/pizza-img.jpg'
import ChickenBurger from '../asset/burger-img.jpg'
import PanCake from '../asset/pan-cake-img.png'
import ButterPaneer from '../asset/butter-paneer-img.jpg'
import SpringRoll from '../asset/spring-roll-img.jpg'
import ShashukaMixVeg from '../asset/shakshuka-mix-veg-img.jpg'
import MezcalMojito from '../asset/mezcal-mojito-img.png'



export default class menuList {
    constructor() {
        this.menu = [
            {
               poster : NoodlesPasta,
               name: "Noodles pasta",
               price: "Price: 32$",
            },
        
            {
               poster : TikkaBiryani,
               name: "Tikka chicken Biryani",
               price: "Price: 59$",
            },
        
            {
               poster : BrazilianPizza,
               name: "Hot Brazilian chicken Pizza",
               price: "Price: 56$",
            },
        
            {
               poster : ChickenBurger,
               name: "Fried chicken corn Burger",
               price: "Price: 47$"
            },
        
            {
               poster : PanCake,
               name: "Extra cheese blend honey Pan Cake",
               price: "Price: 29$"
            },
        
            {
               poster : ButterPaneer,
               name: "Butter masala Paneer",
               price: "Price: 43$"
            },
        
            {
               poster : SpringRoll,
               name: "Veg Spring Roll",
               price: "Price: 26$"
            },
        
            {
               poster : ShashukaMixVeg,
               name: "Shashuka mix veg",
               price: "Price: 49$"
            },
        
            {
               poster : MezcalMojito,
               name: "Mezcal Mojito",
               price: "Price: 21$"
            },
            
        ]
    }
}



