const tapingUp = document.querySelector('.tapeUp')
const video = tapingUp.querySelector('video')



const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 4700,
    triggerElement: tapingUp,
    triggerHook: 0
})
    .addIndicators()
    .setPin(tapingUp)
    .addTo(controller);

    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;
    
    scene.on("update", e => {
        scrollpos = e.scrollPos / 1000;
    });
    
    setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
      
        video.currentTime = delay;
    }, 33.3);