/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut('slow', newpage);
});

function newpage() {
    window.location = newLocation;
}

$(document).ready(function() {

    $('body').css('opacity', '1');

    //HOMEPAGE

    var homeFade = anime.timeline({
        autoplay: true,   
    })

    .add ({
        targets: '.fscr',
        duration: 1000,
        easing: 'easeOutQuad',
        opacity: 1,
    })

    .add ({
        targets: '.home_logo',
        duration: 2000,
        easing: 'easeOutQuint',
        opacity: 1,
        width: 280,
    })

    .add ({
        targets: '#homepage h2',
        duration: 1000,
        easing: 'easeOutQuint',
        opacity: 1,
        'margin-top': '16px',
        offset: '-=1000',
        delay: function(el, i) { return i * 400 } 
    })

    .add ({
        targets: '.bottom',
        duration: 1000,
        easing: 'easeOutQuad',
        opacity: 1,
        'margin-top': '0',
        offset: '-=1000'
    });


    //DESKTOP FADE

    var homeFade = anime.timeline({
        autoplay: true,
        targets: '.right_content *',
        offset: 500, 
        delay: function(el, i) { return i * 200 }  
    })

    .add ({
        duration: 1000,
        easing: 'easeOutQuad',
        opacity: 1,
        top: 0,
    });


    //Raccolta Fadeup

    var boxup = anime.timeline({
        autoplay: true,
        delay: function(el, i) { return i * 200 }    
    })

    .add ({
        targets: '.c_box',
        duration: 1000,
        easing: 'easeOutQuad',
        opacity: 1,
        "margin-top": "0px",
    })

    .add ({
        targets: '.c_box',
        duration: 1000,
        easing: 'easeOutQuad',
        opacity: 1,
        "margin-top": "0px",
    });


    //INTRO fadeinup

    $('.stop_name h1').splitLines({
        tag: '<span class="hi">',
        //keepHtml: true,
        width:'1',
    });

    $('.stop_name h3').splitLines({
        tag: '<span class="hi">',
        //keepHtml: true,
        width:'1',
    });

    var introH1 = anime.timeline({
        autoplay: true,    
    })

    .add ({
        targets: '.hi',
        duration: 1000,
        easing: 'easeInOutCubic',
        opacity: 1,
        top: 0,
        'letter-spacing': '3px',
        delay: function(el, i) { return i * 10 },
    })

    .add ({
        targets: '.main_img',
        duration: 1000,
        easing: 'linear',
        opacity: 1,
        offset: '+=2000'
    })

    .add ({
        targets: '.img_overlay',
        duration: 1000,
        easing: 'linear',
        opacity: 1,
        'background': 'rgba(0,0,0,0.4)',
        offset: '-=1000'
    })

    .add ({
        targets: '.main_img',
        duration: 3000,
        easing: 'easeInOutCubic',
        top: 0,
        offset: '-=1000'
    })

    .add ({
        targets: '.hi',
        duration: 2000,
        easing: 'linear',
        'color': '#ffffff',
        offset: '-=4000',
    })

    .add ({
        targets: '.main_img',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 1,
        height: '200px',
        complete: function(anim) {
            textfi.restart();
            $('.main.stop').css("height", "auto");
        }   
    });

    var textfi = anime.timeline({
        autoplay: false,
        targets: '.paragraph',
        delay: function(el, i) { return i * 100 }  
    })

    .add ({
        duration: 1500,
        easing: 'easeOutCubic',
        opacity: 1,
        top: 0,
    });


                
//=== ANIMAZIONE CONVALIDA ===

    //Comparsa
    var validation = anime.timeline({
        autoplay: false
    });

    validation

    .add ({
        targets: '.animation_overlay',
        top: 0,
        duration: 1000,
        easing: 'easeInOutQuart',
        complete: function(anim) {
            rotation.restart();
        }
    });


    //Rotazione
    var rotation = anime.timeline({
        autoplay: false,
        targets: '.el',
        delay: function(el, i) { return i * 200 }
    })

    .add({
        rotate: '2turn',
        easing: 'easeInOutQuart',
        duration: 3000,
        complete: function(anim) {
            expand.restart();
            fadeaway.restart();
        }
    });


    //Espansione
    var expand = anime.timeline({
        autoplay: false,
        targets: '.el',
        delay: function(el, i) { return i * 200 }
    })

    .add({
        scale: 20,
        easing: 'easeInOutQuart',
        duration: 3000,
        complete: function() {
            setTimeout(function(){
               $(".el").css( "transform", "scale(1)" );
            }, 100);
        }
    });


    //Opacità
    var fadeaway = anime.timeline({
        autoplay: false,
    })

    .add({
        targets: '.animation_overlay',
        opacity: 0,
        easing: 'easeInOutQuart',
        duration: 1000,
        offset: 2000,
        complete: function() {
            $(".animation_overlay").removeClass( "visible" );
            setTimeout(function(){
               $(".animation_overlay").css( "opacity", "1" );
            }, 100);
        }
    });


    //Fade Error
    var fadeError = anime.timeline({
        autoplay: false,
    })

    .add({
        targets: '#error',
        opacity: 0,
        easing: 'easeInOutQuart',
        duration: 1000,
        complete: function() {
            $(".response").css({'visibility':'hidden', 'opacity':'1'});
        }
    });



    //Pulsante
    $("#button").click(function() {
      
      if ($("#password").val() == $("#ans").val()) {
        validation.restart();
        //$("#secret").addClass( "show" );
        $(".animation_overlay").addClass( "visible" );
        setTimeout(function(){
           $("#success").css( "visibility","visible");
        }, 3000);
      }
      
      else {
        validation.restart();
        //$("#secret").addClass( "show" );
        $(".animation_overlay").addClass( "visible" );
        setTimeout(function(){
           $("#error").css( "visibility","visible");
        }, 3000);
      };
    });


    //Pulsante
    $("#error button").click(function() {
        fadeError.restart();
    }); 


//================= INTRO

    var currDiv = $(".content p:first-child");
    
    currDiv .css("display", "block");
    
    $(".next").click(function() {
        currDiv  = currDiv .next();
        $(".content p").css("display", "none");
        currDiv .css("display", "block");

        if ($(".content p:last-child").css("display") == "block" ) {
            $( "#intro a" ).css( "display", "block" );
            $( ".next" ).css( "display", "none" );

        }
        else {
        };
        dialogue.restart();

        $(".next").css("opacity", "0");

    });


    var dialogue = anime.timeline({
        autoplay: true,    
    })

    .add ({
        targets: '.content p',
        duration: 1000,
        easing: 'easeInOutCubic',
        opacity: 1,
        "margin-top": "0"
    })

    .add ({
        targets: '.next',
        duration: 500,
        easing: 'easeInOutCubic',
        opacity: 1,
    })

    .add ({
        targets: '#intro a',
        duration: 500,
        easing: 'easeInOutCubic',
        opacity: 1,
        offset: '-=1000',
    });


    
    var bkg_eff = anime.timeline({
        autoplay: true,
        targets: '.bkg_eff img',
        loop: true,
        delay: function(el, i) { return i * 5000 }    
    })

    .add ({
        duration: 5000,
        easing: 'easeOutQuad',
        left: "-25px",
        opacity: .2,
        //offset: '-=2500',
    })

    .add ({
        duration: 2500,
        easing: 'easeOutQuad',
        left: "-50px",
        opacity: 0,
        //offset: '2500',

        complete: function(anim) {
            $(".bkg_eff img").css( "left","0px");
        }
    })

});
