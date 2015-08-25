$(function() {
		$.getJSON('/survey_results', function(data) {
			console.log(data.result[0]);
			$("#result0").text(data.result[0]);
			$("#result1").text(data.result[1]);
			$("#result2").text(data.result[2]);
			$("#result3").text(data.result[3]);
          });
});