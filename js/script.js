$("#name").focus();
$("#other-title").hide();
$("#design").children().eq(0).hide();
const $defaultOption = $("#color").append("<option id='temp' value='default'>please select a T-shirt theme</option>")
const $firstElement = $("#color").children().eq(0).text();
$("#color").children().eq(0).text("Please select a T-shirt theme");

$("#color").children().hide();

////////////////////////////////////////////////////////////  event that check Design dropdown changes
$("#design").on('change', function(e){

$("#color").children().eq(0).text($firstElement);
$("#temp").remove();
 
 const $colorChildren = $("#color").children();
 
 if(this.value ==="js puns")
 {
    
    $colorChildren.each( function(index,value){

        const str = value.innerText;
        if(str.includes("JS Puns shirt only")  && !str.includes("please"))
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


    $colorChildren.each( function(index,value){

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
//console.log($(".activities label").children());
let $inputCollection = $(".activities label").children();


///////////////////////////////////////////////////////////////// event for activities section
$(".activities ").on("change","input",function(e){

let costActivity = parseInt($(this).attr("data-cost").substring(1));
let dateActivity = $(e.target).attr("data-day-and-time");





if($(this).prop("checked")){
    $cost += costActivity;
    $("#Cost").html('<label id="Cost">Cost : '+ $cost + '</label>');

    $inputCollection.each(function(index,value){

        //console.log($(this).attr('data-day-and-time'));
        let $currentElement = $(this).attr('data-day-and-time');
        if( $currentElement === dateActivity && $(e.target).attr("name") !== $(this).attr("name") )
        {
            $(this).prop( "disabled", true );
            
            
        } 
      
    
    })
    

}else {
    $cost -= costActivity;
    $("#Cost").html('<label id="Cost">Cost : '+ $cost + '</label>');
    $inputCollection.each(function(index,value){

       
        let $currentElement = $(this).attr('data-day-and-time');
        if( $currentElement === dateActivity && $(e.target).attr("name") !== $(this).attr("name") )
        {
            $(this).prop( "disabled", false );
            
            
        } 
      
    
    })
    
}




//console.log(parseInt($(this).attr("data-cost").substring(1)));
//console.log($(this).attr("data-day-and-time"));
//$cost += parseInt($(this).attr("data-cost"));
//console.log($cost);
});
