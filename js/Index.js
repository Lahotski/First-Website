$(document).ready(function(){				

    $("#follow").click(function(){
      if ($("#follow").text() == "+ Follow"){
        // *** State Change: To Following ***      
        // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms    
        $("#follow").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
        
        // then now we want the button to expand out to it's full state
        // The left translation is to keep the button centred with it's longer width
        $("#follow-button").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
          $("#follow-button").css("color", "#fff");
          $("#follow-button").text("Following");
  
          // Animate the background transition from white to green. Using JQuery Color
          $("#follow").animate({
            backgroundColor: "#2EB82E",
            borderColor: "#2EB82E"
          }, 1000 );
        });
      }else{
        
        // *** State Change: Unfollow ***     
        // Change the button back to it's original state
        $("#follow").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
          $("#follow").text("+ Follow");
          $("#follow").css("color", "#3399FF");
          $("#follow").css("background-color", "#ffffff");
          $("#follow").css("border-color", "#3399FF");
        });
      }
    }); 
  });