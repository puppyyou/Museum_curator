var ableToClick = true;
var jsonFile = [];

var TA = {};

$(document).ready(function() {

    console.log('selector.js init');

    $.getJSON('momadata.json').done(function(json){  
    
        // console.log('wooohoo',json.item.class[0].value);
        $.each(json, function(iterator, item) {     
            // get the img element from momadata.json file
             
            // console.log('AAaaa1',item.class[0].value);
            // console.log('AAaaa2',item.class[1].value);
            // console.log('AAaaa3',item.class[2].value);
            // console.log('AAaaa4',item.class[3].value);
            
            var li = $('<li style="display:inline-block">');
            var classVal = item.class[0].value + ' ' + item.class[1].value + ' ' + item.class[2].value + ' ' + item.class[3].value;
            //li.addClass(classVal).appendTo('#image-holder');
            li.addClass(classVal);
            $('.cd-gallery').children('ul').append(li);
            $('<img>')
                .attr('src', item.Img)
                .attr('id', iterator) 
                .attr('Floor', item.Floor)
                .attr('Department', item.Department)
                .attr('Name', item.Name)
                .attr('MoMA_number', item['MoMA_Number'])
                .appendTo(li)
                .click(clickHandler)          
                console.log('Class.data -',classVal);
        });        
    
    });

    $('.kicker').click(function() {
        console.log('kicker');
       $('.Good_1 img').remove();
       $("#reset_button").addClass("kicker");
       TA = {};
    });
});


function clickHandler(){

    if(Object.keys(TA).length < 5){

        // assign ID to image
        // click img : THIS
        var url = $(this).attr('src');
        var id = $(this).attr('id');
        
        var totalArray = $(".Good_1").children();
        var numImages;

        if ($(this)[0].id in TA) {
         console.log("returning",$(this)[0].id)
         console.log("TAA", {});
            return;
              console.log("clicked");
        };


        console.log("TA length__",Object.keys(TA).length);
        
        TA[$(this)[0].id] = $(this)[0];
        console.log("totalArray length", totalArray.length);
        console.log("TA", TA);
        ableToClick = true;


        var tempImg = document.createElement('img');
        tempImg.setAttribute('src', url);
        tempImg.setAttribute('id', id);

        $(tempImg).click(imageClicked);
        // append img to div .Good_1
        $('.Good_1').append(tempImg);

    }

    else{
        console.log("woof");
        ableToClick = false;
        // alert("That's the last one");
        $(".kicker").removeClass("kicker");
        // return;
        }


        /*+totalArray;

            if (totalArray.length >= 5) {
                console.log("woof");
                ableToClick = false;
                // alert("That's the last one");
                $(".kicker").removeClass("kicker");
               
        //remove class from CSS :  .hidden {display: none;}
            }*/

        function imageClicked(){

            $(this).remove();

            delete TA[$(this)[0].id];

            console.log("TA", TA);

            // totalArray.splice(-1,1);  //totalArray.splice(index, howmany);
            

            /*console.log("totalArray", totalArray);
            console.log("totalArray after", totalArray.length);
            console.log("done");*/
            //console.log("totalArray length before",totalArray.length);
            // totalArray = totalArray - 1;
            // console.log("totalArray length after",totalArray.length);
            }
}