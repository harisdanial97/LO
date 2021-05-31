jQuery(document).ready(function() {
         

  jQuery('#first').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#first').attr('data-click-state') == 1) {
            jQuery('#first').attr('data-click-state', 0);
            jQuery('#first').html("\\(\\cancelto{0} {\\frac{{\\partial u}}{{\\partial t}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#first').attr('data-click-state', 1);
            jQuery('#first').html("\\(\\frac{{\\partial u}}{{\\partial t}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#third').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#third').attr('data-click-state') == 1) {
            jQuery('#third').attr('data-click-state', 0);
            jQuery('#third').html("\\(\\cancelto{0} {u\\frac{{\\partial u}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#third').attr('data-click-state', 1);
            jQuery('#third').html("\\({u\\frac{{\\partial u}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#fourth').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#fourth').attr('data-click-state') == 1) {
            jQuery('#fourth').attr('data-click-state', 0);
            jQuery('#fourth').html("\\(\\cancelto{0} {v\\frac{{\\partial u}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#fourth').attr('data-click-state', 1);
            jQuery('#fourth').html("\\({v\\frac{{\\partial u}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#sixth').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#sixth').attr('data-click-state') == 1) {
            jQuery('#sixth').attr('data-click-state', 0);
            jQuery('#sixth').html("\\(\\cancelto{0} {w\\frac{{\\partial u}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#sixth').attr('data-click-state', 1);
            jQuery('#sixth').html("\\({w\\frac{{\\partial u}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#seventh').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#seventh').attr('data-click-state') == 1) {
            jQuery('#seventh').attr('data-click-state', 0);
            jQuery('#seventh').html("\\(\\cancelto{0}{- \\frac{1}{\\rho }\\frac{{\\partial p}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#seventh').attr('data-click-state', 1);
            jQuery('#seventh').html("\\({- \\frac{1}{\\rho }\\frac{{\\partial p}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });


  jQuery('#eighth').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#eighth').attr('data-click-state') == 1) {
            jQuery('#eighth').attr('data-click-state', 0);
            jQuery('#eighth').html("\\(\\cancelto{0} {\\overrightarrow g .\\widehat x}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#eighth').attr('data-click-state', 1);
            jQuery('#eighth').html("\\({\\overrightarrow g .\\widehat x}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#first_b').on('click', function() {
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery("#square").css('visibility', 'hidden');
        if(jQuery('#first_b').attr('data-click-state') == 1) {
            jQuery('#first_b').attr('data-click-state', 0);
            jQuery('#first_b').html("\\(\\cancelto{0} {\\frac{{\\partial v}}{{\\partial t}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#first_b').attr('data-click-state', 1);
            jQuery('#first_b').html("\\(\\frac{{\\partial v}}{{\\partial t}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#third_b').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#third_b').attr('data-click-state') == 1) {
            jQuery('#third_b').attr('data-click-state', 0);
            jQuery('#third_b').html("\\(\\cancelto{0} {u\\frac{{\\partial v}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#third_b').attr('data-click-state', 1);
            jQuery('#third_b').html("\\({u\\frac{{\\partial v}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#fourth_b').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#fourth_b').attr('data-click-state') == 1) {
            jQuery('#fourth_b').attr('data-click-state', 0);
            jQuery('#fourth_b').html("\\(\\cancelto{0} {v\\frac{{\\partial v}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#fourth_b').attr('data-click-state', 1);
            jQuery('#fourth_b').html("\\({v\\frac{{\\partial v}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#sixth_b').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#sixth_b').attr('data-click-state') == 1) {
            jQuery('#sixth_b').attr('data-click-state', 0);
            jQuery('#sixth_b').html("\\(\\cancelto{0} {w\\frac{{\\partial v}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#sixth_b').attr('data-click-state', 1);
            jQuery('#sixth_b').html("\\({w\\frac{{\\partial v}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#seventh_b').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#seventh_b').attr('data-click-state') == 1) {
            jQuery('#seventh_b').attr('data-click-state', 0);
            jQuery('#seventh_b').html("\\(\\cancelto{0}{- \\frac{1}{\\rho }\\frac{{\\partial p}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#seventh_b').attr('data-click-state', 1);
            jQuery('#seventh_b').html("\\({- \\frac{1}{\\rho }\\frac{{\\partial p}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });


  jQuery('#eighth_b').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#eighth_b').attr('data-click-state') == 1) {
            jQuery('#eighth_b').attr('data-click-state', 0);
            jQuery('#eighth_b').html("\\(\\cancelto{0} {\\overrightarrow g .\\widehat y}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#eighth_b').attr('data-click-state', 1);
            jQuery('#eighth_b').html("\\({\\overrightarrow g .\\widehat y}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#first_c').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#first_c').attr('data-click-state') == 1) {
            jQuery('#first_c').attr('data-click-state', 0);
            jQuery('#first_c').html("\\(\\cancelto{0} {\\frac{{\\partial w}}{{\\partial t}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#first_c').attr('data-click-state', 1);
            jQuery('#first_c').html("\\(\\frac{{\\partial w}}{{\\partial t}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#third_c').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#third_c').attr('data-click-state') == 1) {
            jQuery('#third_c').attr('data-click-state', 0);
            jQuery('#third_c').html("\\(\\cancelto{0} {u\\frac{{\\partial w}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#third_c').attr('data-click-state', 1);
            jQuery('#third_c').html("\\({u\\frac{{\\partial w}}{{\\partial x}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#fourth_c').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#fourth_c').attr('data-click-state') == 1) {
            jQuery('#fourth_c').attr('data-click-state', 0);
            jQuery('#fourth_c').html("\\(\\cancelto{0} {v\\frac{{\\partial w}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#fourth_c').attr('data-click-state', 1);
            jQuery('#fourth_c').html("\\({v\\frac{{\\partial w}}{{\\partial y}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#sixth_c').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#sixth_c').attr('data-click-state') == 1) {
            jQuery('#sixth_c').attr('data-click-state', 0);
            jQuery('#sixth_c').html("\\(\\cancelto{0} {w\\frac{{\\partial w}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#sixth_c').attr('data-click-state', 1);
            jQuery('#sixth_c').html("\\({w\\frac{{\\partial w}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });

  jQuery('#seventh_c').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#seventh_c').attr('data-click-state') == 1) {
            jQuery('#seventh_c').attr('data-click-state', 0);
            jQuery('#seventh_c').html("\\(\\cancelto{0}{- \\frac{1}{\\rho }\\frac{{\\partial p}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#seventh_c').attr('data-click-state', 1);
            jQuery('#seventh_c').html("\\({- \\frac{1}{\\rho }\\frac{{\\partial p}}{{\\partial z}}}\\)");
            MathJax.startup.defaultReady(); 
        }

    });


  jQuery('#eighth_c').on('click', function() {
    jQuery("#square").css('visibility', 'hidden');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
        if(jQuery('#eighth_c').attr('data-click-state') == 1) {
            jQuery('#eighth_c').attr('data-click-state', 0);
            jQuery('#eighth_c').html("\\(\\cancelto{0} {\\overrightarrow g .\\widehat z}\\)");
            MathJax.startup.defaultReady(); 
        }
        
        else  {
            jQuery('#eighth_c').attr('data-click-state', 1);
            jQuery('#eighth_c').html("\\({\\overrightarrow g .\\widehat z}\\)");
            MathJax.startup.defaultReady(); 
        }

    });


});





setTimeout(function(){ 

jQuery('.ans_btn').click(function() {

    if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) && (jQuery('#first_b').attr('data-click-state') == 0) && (jQuery('#third_b').attr('data-click-state') == 0) && (jQuery('#fourth_b').attr('data-click-state') == 0) && (jQuery('#sixth_b').attr('data-click-state') == 0) &&(jQuery('#first_c').attr('data-click-state') == 0) && (jQuery('#third_c').attr('data-click-state') == 0) && (jQuery('#fourth_c').attr('data-click-state') == 0) && (jQuery('#sixth_c').attr('data-click-state') == 0) &&(jQuery('#seventh').attr('data-click-state') == 1) && (jQuery('#eighth').attr('data-click-state') == 1) && (jQuery('#seventh_b').attr('data-click-state') == 1) && (jQuery('#eighth_b').attr('data-click-state') == 1) && (jQuery('#seventh_c').attr('data-click-state') == 1) && (jQuery('#eighth_c').attr('data-click-state') == 1) ) {
         jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel the third and fourth term in the first line. Then, cancel all the terms on the LHS for the second and third line. Click on any of the terms to reset the question.</p></span>');
         jQuery('.btn_icon').css('visibility', 'visible');
         jQuery('#ans_btn').css('visibility', 'hidden');
         jQuery("#square").css('visibility', 'visible');
         jQuery("#square").css('border', '2px solid #90EE90');
    } else{
        jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel the third and fourth term in the first line. Then, cancel all the terms on the LHS for the second and third line. Click on any of the terms to reset the question.</p></span>');
        jQuery('.btn_icon').css('visibility', 'visible');
        jQuery("#ans_btn").css('visibility', 'hidden');
        jQuery("#square").css('visibility', 'visible');
        jQuery("#square").css('border', '2px solid red');
    }    

	  
	 jQuery('.tooltip').show();
	  
	  
});



});


	   




