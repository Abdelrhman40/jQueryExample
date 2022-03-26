
const Days =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d =new Date();
let dayIndex =d.getDay();
let day =Days[dayIndex];
let hour =d.getHours();
let minute =d.getMinutes();
let second =d.getSeconds();

(function () {
let temp=`
        <div class="col-3">
        <div class="boxTime d-flex justify-content-center align-items-center  p-5">
            ${day}
        </div>
        </div>
        <div class="col-3">
        <div class="boxTime d-flex justify-content-center align-items-center  p-5">
            ${hour} h
        </div>
        </div>
        <div class="col-3">
        <div class="boxTime d-flex justify-content-center align-items-center  p-5">
            ${minute} m
        </div>
        </div>
        <div class="col-3">
        <div class="boxTime d-flex justify-content-center align-items-center  p-5">
            ${second} s
        </div>
        </div>
    `

    document.getElementById('myBox').innerHTML=temp;
})();


$(".slider h3").click(function() {
    $(this).next().slideToggle(500);
    $(".slider .slide").not($(this).next()).slideUp(500)
})

$(".list li a").click(function(){
    let Href=$(this).attr("href");
    let sectionTop =$(Href).offset().top;
    $('html , body').animate({scrollTop : sectionTop} , {queue:false, duration:1000})
    $(this).addClass("active");
    $(this).parent().siblings().find('a').removeClass("active");
})

$("#open").click(function () {

    let left =$(".outerBox").css("left")
    //console.log(left);
    if (left=="0px") {
        let currentPostion = $(".menu").outerWidth(true);
        $(".outerBox").animate({left:`-${currentPostion}`},1000) 
    }else{
        $(".outerBox").animate({left:"0px"},1000)
    }
    
})

$(".icon").click(function () {
    let currentPostion = $(".menu").outerWidth(true);
    $(".outerBox").animate({left:`-${currentPostion}`},1000) 
})


$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let detailsTop = $("#details").offset().top;
    if (scrollTop > detailsTop) {
        $(".top-icon").fadeIn(500)
    } else {
        $(".top-icon").fadeOut(500) 
    }
})

 $(".top-icon").click(function(){
    $('html , body').animate({scrollTop : 0} , {queue:false, duration:500})
 })