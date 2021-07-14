var score=0
$("#increase-5").on("click", function(){
	score+=5
	$("#score").text(score)
})

$("#decrease-5").on("click", function(){
	score-=5
	$("#score").text(score)
})

$("#submit-custom-score").on("click", function(){
	var num=$("#custom-score").val()
	$("#score").text(num)
})