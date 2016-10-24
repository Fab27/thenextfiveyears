

/* Using vanilla JavaScript */
 
// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
    }
});

// Create scene
$("section").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this, 
    })
    .setPin(this)
    
    .addTo(ctrl);
 
});

$("section").each(function() {
	new ScrollMagic.Scene({
		triggerElement: this, 
		duration: 350,
	})
	.setPin(this)
	
    .addTo(ctrl);
})


$(window).on("resize", function(e) {
  if ($(window).width() < 769 && scene.enabled()) {
    scene.enabled(false);
  } else if (!scene.enabled()) {
    scene.enabled(true);
  }
});
