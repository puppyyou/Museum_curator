var ableToClick = true;

$(document).ready(function() {

    console.log('test1');

    $.getJSON('momadata.json').done(function(json){  
    
        console.log(json);
        $.each(json, function(iterator, item) {     
            $('<img>')
                .attr('src', item.Img)
                .attr('Floor', item.Floor)
                .attr('Department', item.Department)
                .attr('Name', item.Name)
                .attr('MoMA_number', item['MoMA_Number'])
                .appendTo('#image-holder')
                .click(clickHandler)

                              // console.log(counter);
                // console.log(Object.keys(data)); 
        });

    });


    $('.kicker').click(function() {
        $('#Good_1 img').remove();
        ableToClick = true;
    });
});

function clickHandler(){

   if (ableToClick) {

        $(".hidden").removeClass("hidden");
        //remove class from CSS :  .hidden {display: none;}

        // assign ID to image
        // click img : THIS
        var url = $(this).attr('src');
        var totalArray = $("#Good_1").children();
        var numImages;
        for (var i = 0; i < totalArray.length; i++) {
            if (totalArray[i].src == url) {                               
                return;
            }
        }
        +totalArray;
        console.log("totalArray:", totalArray);  

            if (totalArray.length >= 4) {
                console.log("woof");
                //$('img').off('click');
                ableToClick = false;
                alert("That's the last one");
            }

        var tempImg = document.createElement('img')
        tempImg.setAttribute('src', url)
        // append img to div #Good_1
        $('#Good_1').append(tempImg);
    }

}