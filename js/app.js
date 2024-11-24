$(document).ready(function(){

    // Start Back to Top

    $(".btn-backtotops").hide();

    $(window).scroll(function(){
        let scrolltop = $(this).scrollTop();
        // console.log(scrolltop);

        if(scrolltop >= 370){
            $(".btn-backtotops").fadeIn(500);
        }else{
            $(".btn-backtotops").fadeOut(500);
        }
    });

    // End Back to Top

    
    // Start Nav Bar

    $(window).scroll(function(){
        let scrolltop = $(this).scrollTop();
        // console.log(scrolltop);

        if(scrolltop >= 150){
            $(".navbar").addClass("navmenus");
        }else{
            $(".navbar").removeClass("navmenus");
        }
    });

    $(".navbuttons").click(function(){
        $(this).toggleClass("crossxs");
    });

    // End Nav Bar


    // Start Property Section

    $(".propertylists").click(function(){
        // $(this).addClass("activeitems");
        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        // const filtervalue = $(this).attr("data-filter");
        const filtervalue = $(this).data("filter");
        console.log(filtervalue);

        if(filtervalue === "all"){
            $(".filter").show("slide",500);
        }else{
            // => Method 1
            // $(".filter").hide();
            // $(".filter").filter(`.${filtervalue}`).show();

            // => Method 2
            $(".filter").not(`.${filtervalue}`).hide();
            $(".filter").filter(`.${filtervalue}`).show("slide",500);
        }
    });

    // End Property Section


    // Start Adv Section

    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 1200){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    });

    // End Adv Section


    // Start Footer Section

    const getyear = document.getElementById("getyears");
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;

    // End Footer Section
    
});