import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#beans","#coffee","#info", "#background" ];

export function scrollPage(index){
   gsap.to(window, {duration: 3, scrollTo:idArray[index]});
}