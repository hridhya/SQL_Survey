$(document).ready(function() {
  		$("#submitbutton").click(function () {
  			var msg = '';
  			msg += "\n " +  $("input[type='radio'][name='optradio']:checked").val() + "\n "+ $('#textbox').val() + "\n " + $("input[type='radio'][name='which_type']:checked").val() +  "\n " + $("input[type='radio'][name='percent']:checked").val()
  			console.log(msg);
  			
  			$.ajax({
    				url: "/takeasurvey",
    				type: "POST",
    				data: JSON.stringify(msg),
    				contentType: "application/json; charset=utf-8",
    				success: function(dat) { console.log(dat); }
				});
  		});
  		
  		
});