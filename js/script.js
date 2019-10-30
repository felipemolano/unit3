


$("#name").focus();
$("#other-title").hide();
$("#design").children().eq(0).hide();
$("#color").val("please select design");


$("#design").on('change', function(e){

 console.log(this.value);
 if(this.value ==="js puns")
 {
    const $colorChildren = $("#color").children();
    $.each($colorChildren, function(index,value){

        const str = value.innerText;

        if(str.includes("JS Puns shirt only"))
        {
            $(this).show();
        }
        else{
            $(this).hide();
        }

        //console.log(str.includes("JS Puns shirt only"));
        //console.log($(this).val());
    
    })

 }
 else{


    const $colorChildren = $("#color").children();
    $.each($colorChildren, function(index,value){

        const str = value.innerText;

        if(!str.includes("Puns"))
        {
            $(this).show();
        }
        else{
            $(this).hide();
        }

        //console.log(str.includes("JS Puns shirt only"));
        //console.log($(this).val());
    
    })

 }
   


});
