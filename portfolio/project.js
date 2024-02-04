var tl = gsap.timeline()



tl.from(".logo,.home,.about,.contact",
{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.7,
})

tl.from(".title",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.5,
})

tl.from(".Projectslist div img , .Projectslist div > h2",{
    x :-100,
    opacity:0,
    duration:1,
    stagger:0.5,
})

tl.from("pre",{
    opacity: 0,
    duration: 0.8,
})


tl.from(".skills-box > h2,.progress",{
    y : 100,
    opacity: 0,
    duration: 0.8,
    stagger:0.7,
})

tl.from(".footer,.footer h2,.footer p",{
    y : 100,
    opacity: 0,
    duration: 0.8,
    stagger:0.7,
})


// tl.from(".Lpage",{
//     scale:0,
//     opacity:0,
//     duration:1,

//   })

//   tl.from(".ltitle",{
//     x:-100,
//     opacity:0,
//     duration:1,
// })

// tl.from(".pharma",{
//     scale:0,
//     opacity:0,
//     duration:1,
    
// })

// tl.from(".ptitle",{
//     x:-100,
//     opacity:0,
//     duration:1,
    
// })

// tl.from(".calci",{
//     scale:0,
//     opacity:0,
//     duration:1,
   
//   })

// tl.from("#ctitle",{
//     x:-100,
//     opacity:0,
//     duration:1,
    
// })

// tl.from(".port",{
//     scale:0,
//     opacity:0,
//     duration:1,
     
//   }) 

//   tl.from("#potitle",{
//     x:-100,
//     opacity:0,
//     duration:1,
    
// })





