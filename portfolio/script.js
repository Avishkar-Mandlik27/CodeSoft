var tl = gsap.timeline()

tl.from(".logo,.home,.about,.contact",
{
    y:-100,
    duration:0.8,
    opacity:0,
    stagger:0.8,
})

tl.from(".name,.web,.button",{

    x:-100,
    duration:0.7,
    opacity:0,
    stagger:1,
})

function openPageabout()
{
    window.location.href = "aboutme.html";
}

