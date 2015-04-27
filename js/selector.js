var ableToClick = true;
var jsonFile = [];

var TA = {};
var selectedImages = new Array();

$(document).ready(function() {

    $.getJSON('momadata.json').done(function(json){  
        $.each(json, function(iterator, item) {     
            // get the img element from momadata.json file
                   
            var li = $('<li style="display:inline-block">');
            var classVal = item.class[0].value + ' ' + item.class[1].value + ' ' + item.class[2].value + ' ' + item.class[3].value;
            //li.addClass(classVal).appendTo('#image-holder');
            //<li class="mix color-1 check1 radio2 option3"><img src="image/img-1.jpg" alt="Image 1"></li>
            li.addClass(classVal);

            $('.cd-gallery').children('ul').append(li);
            $('<img>')
                .attr('src', item.Img)
                .attr('id', iterator) 
                .attr('data-floor', item.Floor)
                .attr('data-department', item.Department)
                .attr('data-name', item.Name)
                .attr('data-artist', item.Artist)
                .attr('data-moma-number', item['MoMA Number'])
                .appendTo(li)
                .click(clickHandler)  
                 .hover(function(){
                    console.log("Im HOVERIN!!");
                })        
                console.log('Class data -',classVal);
            
            //create Item name and Artist name below the image          
            $('<div>'+item.Artist+'</div>')
                .attr('id', 'imageText') //div id="imageText"
                .appendTo(li)
            $('<div>'+item.Name+'</div>')
                .attr('id', 'imageText') //div id="imageText"
                .appendTo(li)  
        });        
    
    });

    $('#reset_button').click(function() {
        console.log('kicker');
       $('.Good_1 img').remove();
       $("#reset_button,#save_button").addClass("kicker");
       TA = {};
    });

    $('#save_button').click(function(event){
        // will send details to server using AJAX
        // we need to send 1. email address 2. object of images selected

        //console.log($('#selected-image-holder'));

        var images = $(".selected-image").toArray();
      
        images.forEach(function(e){
            // we are using the uniqu MoMA number as a reference
            var currentMomaNumber = $(e).data('moma-number');
            selectedImages.push(currentMomaNumber);
        })

        console.log('Selected Images are ' + selectedImages);

        // NOW, ask user for email
        // once we have the email, send selectedImages and email to the server
        
        // after the server responds back successfully that it got the data, then show remove images and show user a confirmation?
       $('.Good_1 img').remove();
       $("#reset_button,#save_button").addClass("kicker");
       TA = {};
        event.preventDefault();
    })
});


function clickHandler(){

    if(Object.keys(TA).length < 4){

        // assign ID to image
        // click img : THIS
        var url = $(this).attr('src');
        var id = $(this).attr('id');
        var momaNumber = $(this).attr('data-moma-number');
        
        var totalArray = $(".Good_1").children();
        var numImages;

        if ($(this)[0].id in TA) {
         console.log("returning",$(this)[0].id)
         console.log("TAA", {});
            return;
              console.log("clicked");
        };


        console.log("TA length__",Object.keys(TA).length);
        
        TA[$(this)[0].id] = $(this)[0]; // giving each obj an unique Key
        console.log($(this)[0]);

        console.log("totalArray length", totalArray.length);
        console.log("TA", TA);
        ableToClick = true;


        var tempImg = document.createElement('img');
        tempImg.setAttribute('src', url);
        tempImg.setAttribute('id', id);
        tempImg.setAttribute('data-moma-number', momaNumber);
        $(tempImg).addClass('selected-image');

        $(tempImg).click(imageClicked);
        // append img to div .Good_1
        $('.Good_1').append(tempImg);

        if(Object.keys(TA).length  == 4){
            $(".kicker").removeClass("kicker");
        }
    }

    else{
        console.log("woof");
        ableToClick = false;
        // alert("That's the last one");
        //$(".kicker").removeClass("kicker");
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

            if(Object.keys(TA).length < 4){
                $("#reset_button,#save_button").addClass("kicker");
            }
            console.log("TA", TA);

            }
}