  /*
  ========================================================================
  VERSION : 1.0
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Template Name   : RD-ELLA
  Author          : RAHUL DAS
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Copyright (c) 2018 
  ========================================================================
  */
  (function ($) {
   "use strict";
   jQuery(document).ready(function($){

       
 //TYPED JS START   
        var typed = new Typed('#typed', {
          stringsElement: '#typed-strings',
          backSpeed: 40,
          typeSpeed:40,
          loop: true,
        });

        // TYPED JS END


       
       
       //COUNTDOWN TIMER START
	var newYear = new Date(); 
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
    $('#countdown').countdown({until: new Date(2018, 12-1, 18)}); // enter event day 
    
    $('#removeCountdown').toggle(
        function() {
            $(this).text('Re-attach'); 
            $('#defaultCountdown').countdown('destroy'); 
        }, 
        function() { 
            $(this).text('Remove'); 
            $('#defaultCountdown').countdown({until: newYear}); 
        }
    );
//COUNTDOWN TIMER END
       
       //POPUP JS START
            //demo 02
            $("#demo02").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#fff',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });
       
       //POPUP JS END
       
       //BACKGROUND EFFECT JS START 









       //BACKGROUND EFFECT JS END 
       
       
       
	   
        
          
     }); //DOCUMENT.READY BACKET CLOSE

   //WINDOW.LOADED START
   jQuery(window).load(function(){

    //PRELOADING START
    $("#preload").delay(350).fadeOut("slow")
    //PRELOADING END 

	
	
	
	
       

  }); //WINDOW.LOAD JS BACKET CLOSE

 }(jQuery)); //JQUERY MAIN  BACKET CLOSE
