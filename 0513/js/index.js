var box,type,length=4;
$(function(){
    box=$(".box");
    init();

    $("#btna").click(function(){
        type="a";
        move(type);
    });
    $("#btnb").click(function(){
        type="b";
        move(type);
    });
    $("#btnc").click(function(){
        type="c";
        move(type);
    });
    $("#btnall").click(function(){
        init();
    });
});

function move(type){
    box.each(function(){
    var t=$(this);
        if(t.hasClass(type)){
           var index= t.index();
           var distancex=110*parseInt(index%length);
           var distancey=110*parseInt(index/length);
            t.css({
                "transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(1, 1, 1)",
                "-webkit-transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(1, 1, 1)",
                "opcity":"1",
                "z-index":"10"
            });
        }
        else{
            var index= t.index();
            console.log(index);
            var distancex=110*parseInt(index%length);
            var distancey=110*parseInt(index/length);
            t.css({
                "transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(0,0,1)",
                "-webkit-transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(0,0,1)",
                "opcity":"0",
                "z-index":"1"
            });
//            console.log(distancex+":"+distancey);
        }
    });
}


function init(){
    var len=0;
    var ul=$("ul").each(function(){
        var t1=$(this);
        var index1=t1.index();
        var box=t1.find(".box");
//        console.log(index1);
//        console.log(len);
        box.each(function(){
            var t2=$(this);
            var index2=t2.index();
//            console.log(len);
            var index=index1*len+index2;
            console.log(index);
            var distancex=110*parseInt(index%length);
            var distancey=110*parseInt(index/length);
//            console.log(distancex+":"+distancey);
            t2.css({
                "transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(1, 1, 1)",
                "-webkit-transform":"translate3d("+distancex+"px,"+distancey+"px,0) scale3d(1, 1, 1)",
                "opcity":"1",
                "z-index":"10"
            });
        });
        len=box.length;

    });
}

