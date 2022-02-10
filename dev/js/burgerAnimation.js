import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin);

// const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"center"})
gsap.set(".burger",{transformOrigin:"",duration:0.25, scaleY:6})
gsap.set("#outline2",{drawSVG: "0%"})




const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)",{duration:0.25, y:"+=30", scaleX:6})
.to(".burger-lines:nth-child(1)",{duration:0.25, rotation:90})
.to(".burger-lines:nth-child(1)", {duration:0.25, rotation:90, scaleX:6});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25, y:"-=30", scaleX:6})
.to(".burger-lines:nth-child(3)",{duration:0.25, rotation:-90, scaleX:6});

const middleTL = new gsap.timeline();
middleTL.to(".burger3:nth-child(2)",{duration:0.25, scale:0})
//.to("#outline2",{duration:0.25, drawSVG:"100%", stroke:"black"});

.from("#card-4",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-3",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-2",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-1",{duration: .25,opacity: 0, ease:"fadein"})



export const burgerTL = new gsap.timeline({paused:true});

export const menuAnimation = new gsap.timeline({paused:true});

export const menuAnimation2 = new gsap.timeline({paused:true});

export const menuAnimation3 = new gsap.timeline({paused:true});

export const menuAnimation4 = new gsap.timeline({paused:true});

export const menuAnimation5 = new gsap.timeline({paused:true});

export const menuAnimation6 = new gsap.timeline({paused:true});



// menuAnimation2.to("#card-1",{background:"#5e4c30"})
menuAnimation2.to("#card-1",{background:"#FCF9F4"})
menuAnimation3.to("#card-2",{background: "#FCF9F4"})
menuAnimation4.to("#card-3",{background: "#FCF9F4"})
menuAnimation5.to("#card-4",{background: "#FCF9F4"})



// menuAnimation6.to("h3",{scale:1.1, rotation:30, color:"#5e4c30", y:"-=200"})
// .from("button",{y:"+=1000"})
// .from("button",{scale:1.5})
// .from("h4",{duration: 1, y:"+=800", alpha:0})
// .to("h4",{background:"#fcebd1", outerWidth: 100})





// menuAnimation.to("#nav-container",{duration:0.5, y:0, x:0});



gsap.set(".burger-lines",{transformOrigin:"right center"});



let textArray = gsap.utils.toArray(".connect");
let navLinks = gsap.utils.toArray("nav .card");
let currentLink = 0;


function menuSetUp(){
	navLinks.forEach((link, i) => {
		if(i !== 0){
			gsap.set(textArray[i],{scaleX:0})
            
		}
	});
	
}


export function buttonClicks(){

    
	console.log("clicks");
	menuSetUp();

    navLinks.forEach((link, i) => {
        link.addEventListener("click", e => {
            
            e.preventDefault();

            // console.log(currentLink);
          
            gsap.to(window, {scrollTo: i * innerHeight});

            console.log(i);
            gsap.to(textArray[i], {duration: 0.25, ease: "none"});


            gsap.to(textArray[currentLink], {duration: 0.25, ease: "none"});
           

            currentLink = i;
          
        });
    });
}

let infoButtonArray = gsap.utils.toArray("#card-1");


for(var i = 0; i < infoButtonArray.length; i++){
gsap.set(infoButtonArray[i],{alpha:0});
}

// let paraArray = ;


export function buttonMouseEvents(){

    console.log(navLinks.length);

    navLinks.forEach((link, i) => {




      
        link.addEventListener("mouseenter", () => {

            console.log("enter");
            console.log(burgerBtn.classList.contains("selected"));

            gsap.to(infoButtonArray[i],{duration:0.25, alpha:1,background:"#FCF9F4"});
            

          
            // if(!burgerBtn.classList.contains("selected")){
            //     burgerTL.play();
            //     menuAnimation.play();
            //     menuAnimation2.play();
            //     menuAnimation3.play();
            //     menuAnimation4.play();
            //     menuAnimation5.play();
            //     menuAnimation6.play();
                
            // }

           
        });


       
        link.addEventListener("mouseleave", e => {
            console.log("leave");

            // console.log(burgerBtn.classList.contains("selected"));

            gsap.to(infoButtonArray[i],{alpha:2,background:"#fddbae"});

          
            // if(!burgerBtn.classList.contains("selected")){
            //     burgerTL.play();
            //     // menuAnimation.play();
            //     // menuAnimation2.reverse();
            //     // menuAnimation3.reverse();
            //     // menuAnimation4.reverse();
            //     // menuAnimation5.reverse();
            //     // menuAnimation6.reverse();
                
               
               
                
            // }
            
            // e.preventDefault();
            // if(i != currentLink){
            //     gsap.to(textArray[i], {duration: 0.25, ease: "none"});
               
            // }
        });
    });

    

    let nav = document.querySelector("nav");

    let canISeeMenu = false;

    let burgerBtn = document.querySelector("#burger");
    burgerBtn.addEventListener("mouseenter", () => {
        console.log("burger mouse enter");
        // code for burger mouse leave..... 
        menuAnimation.play();
        burgerTL.play();
        
    })

    burgerBtn.addEventListener("mouseleave", () => {
       
        // code for burger mouse leave..... 
        // menuAnimation.reverse();
      
        if(canISeeMenu === false){
            console.log("burger mouse leave");
            burgerTL.reverse();
        }
    })

    burgerBtn.addEventListener("click", () => {
        console.log("burger click");

        if(canISeeMenu === false){
            gsap.to(nav,{x:0});
            
            menuAnimation.play();
            burgerTL.play();
            canISeeMenu = true;
        }else{
            gsap.to(nav,{x:nav.offsetWidth});
            
            menuAnimation.reverse();
            
            burgerTL.reverse();
            canISeeMenu = false;
        }
        
        // code for burger mouse leave..... 
        
       
    })

}




// const color23 = document.querySelector("#card-1");

// export function buttonMouseEvents2(){


//     color23.addEventListener("mouseenter",() =>{
//         console.log("enter");
//         console.log(color23.classList.contains("selected2"));

//         //check to see if the class of selected is on the burger container, and if so don't allow the mouse enter animation
//         if(!color23.classList.contains("selected2")){
//             menuAnimation2.play(("#card-1",{background:"#ffffff"}));
//         }
//     });
    
//     color23.addEventListener("mouseleave",() =>{
//         console.log("leave");
//         //check to see if the class of selected is on the burger container, and if so don't allow the mouse enter animation
//         if(!color23.classList.contains("selected")){
//             menuAnimation2.reverse();
//         }
//     });



// }





burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")
    .add(middleTL,"burger")









