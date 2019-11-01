$("#name").focus();
$("#other-title").hide();
$("#design").children().eq(0).hide();
$("#color").val("please select design");

////////////////////////////////////////////////////////////  event that check Design dropdown changes
$("#design").on('change', function(e){

 console.log(this.value);
 const $colorChildren = $("#color").children();
 console.log($colorChildren);
 if(this.value ==="js puns")
 {
    
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

let $cost = 0.0;
const $label = $('<label id="Cost">Cost : ' + $cost + '</label>');
const $activities = $(".activities").append($label);
console.log($(".activities label").children());
let $inputCollection = $(".activities label").children();


///////////////////////////////////////////////////////////////// event for activities section
$(".activities ").on("change","input",function(e){

let costActivity = parseInt($(this).attr("data-cost").substring(1));
let dateActivity = $(e.target).attr("data-day-and-time");
console.log(dateActivity);



$.each($inputCollection, function(index,value){

    console.log($(this).attr('data-day-and-time'));
    if($(this).attr('data-day-and-time') === dateActivity)
    {
        $( this ).prop( "disabled", true );
    } 
    else
    {
        $( this ).prop( "disabled", false);

    }

})


if($(this).prop("checked")){
    $cost += costActivity;
    $("#Cost").html('<label id="Cost">Cost : '+ $cost + '</label>');

}else {
    $cost -= costActivity;
    $("#Cost").html('<label id="Cost">Cost : '+ $cost + '</label>');
}




console.log(parseInt($(this).attr("data-cost").substring(1)));
//console.log($(this).attr("data-day-and-time"));
//$cost += parseInt($(this).attr("data-cost"));
console.log($cost);
});
