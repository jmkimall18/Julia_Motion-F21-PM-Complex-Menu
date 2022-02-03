import { gsap } from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});
menuAnimation.to("#nav-container",{duration:0.5, y:0, x:0});

export function moveMenuOnLoad(){

    console.log("move menu");
    
}