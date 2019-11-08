///////////////////////////////////////////// VARIABLES USED
let checkedCounter = 0;
let $cost = 0.0;
const $label = $('<label id="Cost">Cost : ' + $cost + '</label>');
const $activities = $(".activities").append($label);
let $inputCollection = $(".activities label").children();
$("#name").focus();
$("#other-title").hide();
$("#design").children().eq(0).hide();
const $defaultOption = $("#color").append("<option id='temp' value='default'>please select a T-shirt theme</option>");

$("#color option[selected]").removeAttr("selected");
$("#color option[value='default']").attr("selected", "selected");



$("#color").children().hide();



/////////////////////////// payment




///////////////////// error messages
const $ErrorName = $('<label id="badName" >the name cant be blank and must contain letter from A-Z</label>');
$("#name").before($ErrorName);
$("#badName").hide();

const $errorEmail = $('<label id="badEmail">the email must be as example@domain.com format </label>');
$("#mail").before($errorEmail);
$($errorEmail).hide();

const $errorActivities = $('<label id="no-act">you must select one activity at least! </label>');
$(".activities").append($errorActivities);
$("#no-act").hide();


const $errorCC = $('<label id="invalid-cc">invalid credit card number!</label>');
$("#credit-card").append($errorCC);
$("#invalid-cc").hide();
/////////////////////////////////////////////////////////////



let $showCC = true;
$("#payment option[selected]").removeAttr("selected");
$("#payment option[value='Credit Card']").attr("selected", "selected");
$("#payment option[value='select method']").hide();
$("#paypal").hide();
$("#bitcoin").hide();

//////////////////////////////// event that checks any change in payment dropdown menu //////////////////////////////////////////
$("#payment").on("change",function(e){

    const $pay = $("#payment").val();
    

    if($pay === "PayPal"){
        $("#paypal").show();
        $("#bitcoin").hide();
        $("#credit-card").hide();
        $showCC = false;
    }else if($pay === "Bitcoin")
    {
        $("#paypal").hide();
        $("#bitcoin").show();
        $("#credit-card").hide();
        $showCC = false;
    }
    else
    {
        $("#paypal").hide();
        $("#bitcoin").hide();
        $("#credit-card").show();
        $showCC = true;
    }


});








////////////////////////////////////////////////////////////  event that check Design dropdown changes
$("#design").on('change', function(e){


$("#temp").remove();
 
 const $colorChildren = $("#color").children();
 
 if(this.value ==="js puns")
 {
    
    $colorChildren.each( function(index,value){

        const str = $(this).attr("value");
  
   

        if(str === "cornflowerblue" || str === "darkslategrey" || str === "gold")
        {

            //console.log(index);
     
            $(this).show();
            $("#color option[selected]").removeAttr("selected");
            $("#color option[value='cornflowerblue']").attr("selected", "selected");
        }
        else{
            $(this).hide();
        }


    })

 }
 else{


    $colorChildren.each( function(index,value){

        const str = $(this).attr("value");
        
        if(str === "tomato" || str === "steelblue" || str === "dimgrey")
        {
  
            $(this).show();
            $("#color option[selected]").removeAttr("selected");
            $("#color option[value='tomato']").attr("selected", "selected");
        }
        else{
            $(this).hide();
        }
    
    })

 }
});



///////////////////////////////////////////////////////////////// event for activities section
$(".activities ").on("change","input",function(e){

let costActivity = parseInt($(this).attr("data-cost").substring(1));
let dateActivity = $(e.target).attr("data-day-and-time");

if($(this).prop("checked")){
    $cost += costActivity;
    checkedCounter ++;
    $("#Cost").html('<label id="Cost">Cost : '+ $cost + '</label>');

    $inputCollection.each(function(index,value){

    
        let $currentElement = $(this).attr('data-day-and-time');
        if( $currentElement === dateActivity && $(e.target).attr("name") !== $(this).attr("name") )
        {
            $(this).prop( "disabled", true );
            
            
        } 
      
    
    })
    

}else {
    checkedCounter --;
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

});


/////////////////////////////////////////////////////////
/*VALIDATION*/
//// validate the name
function isValidUsername(username){
    
    
   
    if(/[a-z]+/.test(username))
    {
        $($ErrorName).hide();
        return true;
    }
    else{
        $($ErrorName).show().css("color","red").delay(6000).fadeOut();
        return false;
    }
}
///////////////////////
//// validate the email
function isValidEmail(email){
    
    
    if(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
      )
      {
       
        return true;
      }
    else{
        $($errorEmail).show().css("color","red").delay(6000).fadeOut();
        return false;
    }
}
/////////////////////////////////////////
//// validate the register for activities


function isRegisteredForAnyActivity()
{
    if (checkedCounter > 0)
    {
        return true;
    }
    else{
        $($errorActivities).show().css("color","red").delay(6000).fadeOut();
        return false;
    }
}

///////////////////////////////
///////////////////////// validate the credit card number
function isValidCreditCard(creditCardNumber){
    
    
   
    if(/^[0-9]{13}$|^[0-9]{14}$|^[0-9]{15}$|^[0-9]{16}$/.test(creditCardNumber))
    {
      
        return true;
    }
    else{
        $($errorCC).show().css("color","red");
        return false;
    }
}
////////////////////////////////////////////////////










//// master validation function
function isValidForm()
{

    const $name  = $("#name").val();
    const $email = $("#mail").val();
    let isValidForm = false;



    if(isValidUsername($name) && isValidEmail($email) && isRegisteredForAnyActivity())
    {
        console.log("is ok");
        isValidForm = true;
    }
    else
    {
     isValidUsername($name);
     isValidEmail($email);
     isRegisteredForAnyActivity();

    }

    /// check the credit card info

    if($showCC)
    {
        const $cc = $("#cc-num").val();
        console.log($cc);
        isValidCreditCard($cc);
    }



}
////////////////////////////////////
//// validation on clicking button
$("button").on("click",function(e){

    e.preventDefault();
    isValidForm();


});