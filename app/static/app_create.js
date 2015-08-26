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
				
   	  				msg += "\n " + $('#textbox' + i).val();
   	  			}
   	  		
   	  			$.ajax({
    				url: "/create_new",
    				type: "POST",
    				data: JSON.stringify(msg),
    				contentType: "application/json; charset=utf-8",
    				success: function(dat) { console.log(dat); }
				});
     			alert("Videos added to the server");
     		});
     		 		
});
