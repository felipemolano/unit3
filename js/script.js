$("#name").focus();
$("#other-title").hide();
$("#design").children().eq(0).hide();
$("#color").val("please select design");

////////////////////////////////////////////////////////////  event that check Design dropdown changes
$("#design").on('change', function(e){

 console.log(this.value);
 const $colorChildren = $("#color").children();
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
const $activities = $(".activities").append("Cost : " + $cost);

$(".activities").on("change","input",function(e){

console.log(parseInt($(this).attr("data-cost").substring(1)));
console.log($(this).attr("data-day-and-time"));
//$cost += parseInt($(this).attr("data-cost"));
console.log($cost);
});

