$(document).ready(function() {
  			var counter = 2;
  			$("#addButton").click(function () {
  				if(counter>10){
            		alert("Only 10 textboxes allow");
            		return false;
				}
				
				var newTextBoxDiv = $(document.createElement('div'))
	    		.attr("id", 'TextBoxDiv' + counter);
                
				newTextBoxDiv.after().html('<input type="text" class="form-control" placeholder="Audio/video link" id="textbox' + counter + '" value="" >');
            
				newTextBoxDiv.appendTo("#TextBoxesGroup");

				counter++;
     		});  
     		$("#removeButton").click(function () {
				if(counter==1){
          			alert("No more textbox to remove");
          			return false;
       			}   
        
				counter--;
			
        		$("#TextBoxDiv" + counter).remove();
			
     		}); 
     	
     
     		$("#submitbutton").click(function () {
     			var msg = '';
				for(i=1; i<counter; i++){
					var pos1 = $('#textbox' + i).val().indexOf(".ogg");
					var pos2 = $('#textbox' + i).val().indexOf(".mpeg");
					var pos3 = $('#textbox' + i).val().indexOf(".ogv");
					var pos4 = $('#textbox' + i).val().indexOf(".mp4");
					var pos5 = $('#textbox' + i).val().indexOf(" ");
					console.log(pos1, pos2, pos3, pos4, pos5);
					if ((pos1< 0) || (pos2< 0) || (pos3< 0) || (pos4< 0) || (pos5>= 0)){
						alert("Please enter a valid link");
						continue;
					}
					else{
   	  					msg += "\n " + $('#textbox' + i).val();
   	  				}
   	  			}
   	  		
   	  			$.ajax({
    				url: "/create_new",
    				type: "POST",
    				data: JSON.stringify(msg),
    				contentType: "application/json; charset=utf-8",
    				success: function(dat) { console.log(dat); }
				});
     		});
     		 		
});
