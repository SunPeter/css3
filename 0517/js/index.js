$(function  () {
    scroll();
});

function scroll(){
    var flag=0;
    var headerInit=$("nav").offset().top;
    $(window).scroll(function(){
        var scrollTop=$(document).scrollTop();
        var header=$("nav").offset().top;
//        console.log(scrollTop+":"+header);
        if(scrollTop>=header){
            $("body").addClass("sm");
            flag=1;
        }
        if(scrollTop<headerInit){
            if(flag==1){
                $("body").removeClass("sm");
                flag=0;
            }
        }
    });
}