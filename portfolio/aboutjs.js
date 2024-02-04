var tl = gsap.timeline()

tl.from(".home,.about,.contact",
{
    y:-100,
    duration:1,
    opacity:0,
    stagger:1,
})


tl.from(".info p",{

    x:-100,
    duration:0.7,
    opacity:0,
    stagger:2,
})

tl.from(".what,.skillsimg,.comple,.current",{
    y : 100,
    duration: 0.5,
    opacity: 0,
    stagger:1,
    // scrollTrigger:".what,.skillsimg,.comple,.current"

})

tl.from(".line",{
    x:-100,
    duration: 0.5,
    opacity: 0,
    stagger:1,
})

tl.from(".glasses,.modeling p",{
    y : 100,
    duration: 0.5,
    opacity: 0,
    stagger:1,
})