import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin);

// const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"center"})
// gsap.set(".burger",{transformOrigin:"",duration:0.25, scaleY:6})
// gsap.set("#outline2",{drawSVG: "0%"})




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

var canISeeMenu = false;


// menuAnimation6.to("h3",{scale:1.1, rotation:30, color:"#5e4c30", y:"-=200"})
// .from("button",{y:"+=1000"})
// .from("button",{scale:1.5})
// .from("h4",{duration: 1, y:"+=800", alpha:0})
// .to("h4",{background:"#fcebd1", outerWidth: 100})





// menuAnimation.to("#nav-container",{duration:0.5, y:0, x:0});



gsap.set(".burger-lines",{transformOrigin:"right center"});



// let textArray = gsap.utils.toArray(".connect");
// var textArray = document.querySelectorAll(".connect");
let navLinks = gsap.utils.toArray("nav .card");
// let currentLink = 1;


// console.log(textArray.length +" text array");
// console.log(navLinks.length + "nav links");

// function menuSetUp(){
// 	navLinks.forEach((link, i) => {
// 		if(i !== 0){
// 			// gsap.set(textArray[i],{});
            
// 		}
// 	});
	
// }


export function buttonClicks(){

    
	console.log("clicks!!!");
	// menuSetUp();
    
    navLinks.forEach((link, i) => {
        link.addEventListener("click", () => {
            
            // // e.preventDefault();

            

            
            burgerTL.reverse();
            
            canISeeMenu = true;

            console.log("card click");
          
            gsap.to(window, {scrollTo: i * innerHeight});

            canISeeMenu = false;

            // console.log(i);
            
            // gsap.to(navLinks[i], {duration: 0.25, ease: "none"});


            // // gsap.to(navLinks[currentLink], {duration: 0.25, ease: "none"});
           

            // currentLink = i;
          
        });
    });
}






let infoButtonArray = gsap.utils.toArray(".card" );
// let Card2Array = gsap.utils.toArray("#card-2" );

let colorArray= ["#fddbae", "#fde3be", "#fcebd1", "#FFF3E1"]

for(var i = 0; i < infoButtonArray.length; i++){
gsap.set(infoButtonArray[i],{alpha:0});
}

// for(var i = 0; i < Card2Array.length; i++){
//     gsap.set(Card2Array[i],{alpha:0});
//     }

let paraArray = ["#svg1", "#svg2", "#svg3", "#svg4" ];


 export function buttonMouseEvents(){

    console.log(navLinks.length);

    navLinks.forEach((link, i) => {


        link.addEventListener("mouseenter", () => {

            console.log("enter");


            gsap.to(infoButtonArray[i],{duration:0.1,background:"#FCF9F4"});
            gsap.to(paraArray[i],{duration: 1, y:"0", alpha:1});
            gsap.to("h3",{duration:0.25 ,scale:1.1, rotation:30, color:"#5e4c30"});
            gsap.to("h4",{duration: 1, y:"0", alpha:1})
            // gsap.to("#svg1",{duration: 1, y:"0", alpha:1})
          

            
           
        });


       
        link.addEventListener("mouseleave", () => {
            console.log("leave");

            gsap.to(infoButtonArray[i],{duration:0.1,background:colorArray[i]});
            gsap.to("h3",{duration:0.25, scale:0, rotation:0 });
            gsap.to("h4",{duration: 1, y:"800"})
            gsap.to(paraArray[i],{duration: 1, y:"-800"});
            // gsap.to("#svg1",{duration: 1, y:"-800"})
            // gsap.to("#svg1",{opacity: 1, ease:"fadein"})
            
          
        });

        



    });

    

    let nav = document.querySelector("nav");

 

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
            menuAnimation.reverse();
            burgerTL.reverse();
        }
    })

    burgerBtn.addEventListener("click", () => {
        console.log("burger click");

        if(canISeeMenu === false){
            gsap.to(nav,{x:0});
            
            // menuAnimation.play();
            burgerTL.play();
            canISeeMenu = true;
        }else{
            gsap.to(nav,{x:nav.offsetWidth});
            
            // menuAnimation.reverse();
            
            burgerTL.reverse();
            canISeeMenu = false;
        }
        
       
    })

}


// if(!burgerBtn.classList.contains("selected")){
            //     burgerTL.play();
            //     menuAnimation.play();
            //     menuAnimation2.play();
            //     menuAnimation3.play();
            //     menuAnimation4.play();
            //     menuAnimation5.play();
            //     menuAnimation6.play();
                
            // }


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









