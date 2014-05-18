/**
 * Created by peter on 14-5-17.
 */
var box,length= 4,ie= 0,imgW=100,imgH=100;
$(function(){
    box=$(".img-wrap li");
    init();
    $("#a").click(function(){
        move("a");
    });
    $("#b").click(function(){
        move("b");
    });
    $("#c").click(function(){
        move("c");
    });
    $("#all").click(function(){
        init();
    });
});
function init(){
    if (!Modernizr.csstransitions){
       ie=1;
    }
    box.find("img").each(function(){
        var t=$(this);
        t.load(function(){
            t.addClass("show");
        });
    });
    box.each(function(){
        var t=$(this);
        var index=t.index();
//        console.log(index);
        show(t,index);
    });
}


function move(type){
    var index=0;
    box.each(function(count){
        var t=$(this);
        if(t.hasClass(type)){
            show(t,index);
            index++;
            return;
        }
        else{
            hide(t,count);
        }
    });
}

function show(target,index){
    var distancex=110*parseInt(index%length);
    var distancey=110*parseInt(index/length);
    if(!ie){
        target.css({
            "transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(1, 1, 1)",
            "-webkit-transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(1, 1, 1)",
            "opcity":"1",
            "z-index":"10"
        });
    }
    else{
        target.animate({
            "left":distancex+"px",
            "top":distancey+"px"
//            "width":imgW+"px",
//            "height":imgH+"px"
        },600);
        if(target.hasClass("hide")){
            target.removeClass("hide").addClass("show");
        }
        else{
            target.addClass("show");
        }
    }
}

function hide(target,index){
    var distancex=110*parseInt(index%length);
    var distancey=110*parseInt(index/length);
    if(!ie){
        target.css({
            "transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(0,0,1)",
            "-webkit-transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(0,0,1)",
            "opcity":"0",
            "z-index":"1"
        });
    }
    else{
        target.animate({
            "left": distancex + "px",
            "top": distancey + "px"
//            "width":"0",
//            "height":"0"
        },600);
        if(target.hasClass("show")){
            target.removeClass("show").addClass("hide");
        }
        else{
            target.addClass("hide");
        }
    }

}