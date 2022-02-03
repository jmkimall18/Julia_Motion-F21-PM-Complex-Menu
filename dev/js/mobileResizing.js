import { gsap } from "gsap";

export function displayWindowSize(){

    let nav = document.querySelector("nav");

   if(document.documentElement.clientWidth <= 1024){
    // console.log("hide");
    gsap.set(nav,{x:nav.offsetWidth});
    }else{
        console.log("un-hide");
        gsap.set(nav,{x:0});
    }
}




    