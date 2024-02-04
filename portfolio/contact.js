var tl = gsap.timeline()

tl.from(".logo,.home,.about,.contact",
{
    y:-100,
    duration:0.8,
    opacity:0,
    stagger:0.7,
})

tl.from(".description > h1, .description > h3 ,.para1,.para2,.para4",{
    x : -100,
    duration:0.8,
    opacity:0,
    stagger:0.7,
})

tl.from(".yourname, .yourmobile ,.youremail,.help,.form button",{
    x : 100,
    duration:0.8,
    opacity:0,
    stagger:0.7,
})

tl.from(".footer,.para3,.facebook, .instagram ,.linkedin,.github",{
    y : 100,
    duration:0.8,
    opacity:0,
    stagger:0.7,
})