function openSlideMenu(){
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
function closeSlideMenu(){
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
    
  }
  
function popClose(){
    $('#welMsg').fadeOut(0);
    $('#wrapper').fadeOut(600);
    }  
  
function navBtn(){

             var rotation = true;
        $("#navButton").click(function(){
         if (rotation == true) {
                rotation = false;
            $("#navButton").css({'transform': 'rotate(180deg)'});
            
            }
            
         else{
            rotation = true;
            $("#navButton").css({'transform': 'rotate(360deg)'});
            
         }
        });
        }
