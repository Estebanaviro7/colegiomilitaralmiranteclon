var down_pg = [];
var down_index = [];

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A07");

down_index.push(1);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A21");

down_index.push(2);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A01");

down_index.push(3);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A18");

down_index.push(4);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A05");

down_index.push(5);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A13");

down_index.push(6);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A15");

down_index.push(7);

down_pg.push("/lookbook/MBMA07A01A05/view?dspCtgryNo=MBMA07A01A05A03");

down_index.push(8);

var download_fnc = function(e){
    window.location = down_pg[$(".mds-section.look .pg_num>li.active").index()];
};
/*page 마우스로 옮기기*/
pageDepth = function(idx,totpag){
    var backCls = totpag - idx;
    var frontCls = totpag - backCls -1 ;
    var $flip = $(".mds-section.look .flipbook-viewport");
    if (backCls <= 4) {
        $flip.find(".depth.back").attr("class","depth back s"+backCls);
    }
    if (frontCls <= 4 ) {
        $flip.find(".depth.front").attr("class","depth front s"+frontCls);
    }
};
pageDepthInit = function(){
    var pgt_len = $(".mds-section.look .pg_num>li").length - 1;
    var $flip = $(".mds-section.look .flipbook-viewport");
    $flip.find(".depth.front").addClass("s0");
    if ( $(".mds-section.look .pg_num>li").length  <= 4 ){
        $flip.find(".depth.back").addClass( "s"+ pgt_len );
    }else{
        $flip.find(".depth.back").addClass( "s4");
    }
};
/* 20181221 추가 */
$.fn.extend({
    scissor : function() {
        this.each(function() {
            var $that = $(this);
            var b = $that
            , c = {
                width: b.width() / 2,
                height: b.height(),
                overflow: "hidden"
            }
            , f = b.clone(!0)
            , d = $("<div />", {
                css: c
            })
            , e = $("<div />", {
                css: c
            });
            b.after(d);
            d.after(e);
            b.css({
                marginLeft: 0
            }).appendTo(d);
            f.css({
                marginLeft: -c.width
            }).appendTo(e);
        });
        return this
    }
});

function loadApp() {

    var flipbook = $('.flipbook');

    // Check if the CSS was already loaded
    if (flipbook.width()==0 || flipbook.height()==0) {
        setTimeout(loadApp, 10);
        return;
    }

    if($(".flipbook .double").length === 1) {
        $(".mds-section.look .look_more").show();
    }


    $('.flipbook .double').scissor();

    // Create the flipbook
    $('.flipbook').turn({
        elevation: 50,
        page:2,
        gradients: true
    });

    $(".flipbook").bind("turning", function(event, page, pageObject) {

        var oddPageNo = pageObject[1];

        if (page == 1){
            return false;
        }

        idx = parseInt(page * 0.5);

        if( down_index.indexOf(idx) !== -1 ){
            $(".mds-section.look .look_get").show();
        }else{
            $(".mds-section.look .look_get").hide();
        }

        $(".mds-section.look .pg_num>li:nth-child("+idx+")").addClass("active").siblings("li").removeClass("active");

        // 마지막 페이지일때 더보기 버튼 보이기
        var totpag = (  $(".flipbook").turn("pages") - 1 ) * 0.5;
        if (idx >= totpag ) {
            $(".mds-section.look .look_more").show();
        }else{
            $(".mds-section.look .look_more").hide();
        }

        pageDepth(idx,totpag);

    });

    pageDepthInit();

    $(".flipbook").bind("start", function(event, pageObject) {
        if (pageObject.page == 1){
            event.preventDefault();
        }
    });

    $(".mds-section.look .pg_num>li:nth-child(1)").addClass("active");

    $(".mds-section.look .pg_num>li>a").on("click",function(){
        var idx = $(this).closest("li").index();
        idx = (idx)*2+1;
        $(".flipbook").turn("page", idx +1 );
    });
    
    if( down_index.indexOf(1) !== -1 ){
        $(".mds-section.look .look_get").show();
    }

}



loadApp();