  	var ableToClick = true;
	
	$(document).ready(function() {
        console.log('test');
	$('img').on('click', function(oh_click)  {
	console.log('test');

                if (ableToClick) {

                        console.log(this);
                        console.log(oh_click);
                                          
                        //$("p3").hide();
                        //$(".hidden").removeClass("hidden");
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
                        console.log("totalArray:",totalArray);  


                        if (totalArray.length >= 5) {
                            console.log("woof");
                            //$('img').off('click');
                            ableToClick = false;
                            alert("That's the last one");
                        }

                        var tempImg = document.createElement('IMG')
                        tempImg.setAttribute('src', url)
                        // append img to div #Good_1
                        $('#Good_1').append(tempImg);
                        }
                        
                    });
}) ();
