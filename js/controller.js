$('document').ready(function(){

    console.log(Cookies.get('houseID'));
});



$('.btnGoToDetails').click(function(){
    Cookies.set('houseID', $(this).attr('id'));
        
   
 
});