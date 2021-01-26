$(document).ready(function(){ 
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
};
$(document).ready(function(){
    $(".header__burger").click(function(event){
        $(".header__burger, .header__navbar").toggleClass('active');
        $('body').toggleClass('lock');
    });
});