jQuery(document).ready(function() {
         

  jQuery('#first').on('click', function() {
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery('#ans_btn').css('visibility', 'visible');

        if(jQuery('#first').attr('data-click-state') == 1) {
            jQuery('#first').attr('data-click-state', 0);
            jQuery('#first').html("\\(\\cancelto{0} {\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)");
            
            

            if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady(); 
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({\\rho}\\vec{g}\\) \\(=\\) \\(\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(\\vec{g}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(0\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else {
                jQuery('#eighth').html("\\(0 = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }
        }
        
        else  {
            jQuery('#first').attr('data-click-state', 1);
            jQuery('#first').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)");

            if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) ");
                MathJax.startup.defaultReady(); 
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(-\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
                MathJax.startup.defaultReady();
            }

            else {
                jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }
        }

    });

jQuery('#third').on('click', function() {
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery('#ans_btn').css('visibility', 'visible');
    if(jQuery('#third').attr('data-click-state') == 1) {
        jQuery('#third').attr('data-click-state', 0);
        jQuery('#third').html("\\(\\require{cancel}\\cancelto{0} {\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}}\\)");

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\rho}\\vec{g}\\) \\(=\\) \\(\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(\\vec{g}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0 = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#third').attr('data-click-state', 1);
        jQuery('#third').html("\\({\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}}\\)");

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(-\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(0\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

});

jQuery('#fourth').on('click', function() {
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery('#ans_btn').css('visibility', 'visible');
    if(jQuery('#fourth').attr('data-click-state') == 1) {
        jQuery('#fourth').attr('data-click-state', 0);
        jQuery('#fourth').html("\\(\\require{cancel}\\cancelto{0} {-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}}\\)");

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(-\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(\\vec{g}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(0\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0 = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#fourth').attr('data-click-state', 1);
        jQuery('#fourth').html("\\({-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}}\\)");


        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\rho}\\vec{g}\\) \\(=\\) \\(\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

});


jQuery('#sixth').on('click', function() {
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery('#ans_btn').css('visibility', 'visible');
    if(jQuery('#sixth').attr('data-click-state') == 1) {
        jQuery('#sixth').attr('data-click-state', 0);
        jQuery('#sixth').html("\\(\\require{cancel}\\cancelto{0} {\\vec{g}}\\)");

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(-\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(0\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0=0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#sixth').attr('data-click-state', 1);
        jQuery('#sixth').html("\\({\\vec{g}}\\)");

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\)  \\(=\\) \\(-\\frac{1}{\\rho}\\&gt;\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(+\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(+\\) \\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\) ");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({\\rho}\\vec{g}\\) \\(=\\) \\(\\overrightarrow{\\mathrm{grad}}{(p)}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\(\\underline{\\underline{\\mathrm{grad}}}\\!\\&gt;(\\vec{u})\\vec{u}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({\\frac{\\partial{}\\vec{u}}{\\partial{}t}}\\) \\(=\\) \\(\\vec{g}\\) \\(\\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html(" \\(0\\) \\(=\\) \\(\\vec{g}\\ \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

});




});


setTimeout(function(){ 

jQuery('.ans_btn').click(function() {

    if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
         jQuery("#eighth").css('border', '2px solid green');
         jQuery("#eighth").css('background-color', '#90EE90');
         jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel the 1st and 2nd term. Click on any of the terms to reset the question.</p></span>');
         jQuery('.btn_icon').css('visibility', 'visible');
         jQuery('#ans_btn').css('visibility', 'hidden');
         
    } else{
        
        jQuery("#eighth").css('border', '2px solid red');
        jQuery("#eighth").css('background-color', '#FFB6C1');
        jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel the 1st and 2nd term. Click on any of the terms to reset the question.</p></span>');
        jQuery('.btn_icon').css('visibility', 'visible');
        jQuery("#ans_btn").css('visibility', 'hidden');
    }    

	  
	 jQuery('.tooltip').show();

	  
	  
});



});


	   




