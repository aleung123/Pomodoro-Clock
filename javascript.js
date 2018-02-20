$(document).ready(function() {
	var countTime = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	var pause = false;
	var minutes = 25;
	var seconds = 0;
	var count;

	$(".timer").html(minutes + ":00");

	function countdown() {
		if (minutes === 0 && seconds === 0) {
			if ($(".clockTitle").html() === "Session") {
				$(".clockTitle").html("Break");
				minutes = breakTime;
				$(".timer").html(minutes + ":0" + seconds);
			} else if ($(".clockTitle").html() === "Break") {
				$(".clockTitle").html("Session");
				minutes = countTime;
				$(".timer").html(minutes + ":0" + seconds);
			}
		} 
		else {
			if (seconds === 0) {
				seconds = 60;
				minutes -= 1;
			}
			seconds -= 1; 
			if (seconds < 10) {
				$(".timer").html(minutes + ":0" + seconds);
			} else {
				$(".timer").html(minutes + ":" + seconds);
			}
		}

	}

	// subtracts time for session
	$("#minus").click(function() {
		if (pause === false) {
			if (countTime > 1) {
				countTime -= 1;
				$("#num").html(countTime);
				$(".clockTitle").html("Session");
				$(".timer").html(countTime + ":00");
				seconds = 0;
				minutes = countTime;
			}
		}
	});

	// adds time for session
	$("#add").click(function() {
		if (pause === false) {
			countTime += 1;
			$("#num").html(countTime);
			$(".clockTitle").html("Session");
			$(".timer").html(countTime + ":00");
			seconds = 0;
			minutes = countTime;
		}
	});

	// subtracts time for break
	$("#minBreak").click(function() {
		if (pause === false) {
			if (breakTime > 1) {
				breakTime -= 1;
				$("#breakNum").html(breakTime);
				$(".clockTitle").html("Session");
				$(".timer").html(countTime + ":00");
				seconds = 0;
				minutes = countTime;
			}
		}
	});

	// adds time for break
	$("#addBreak").click(function() {
		if (pause === false) {
			breakTime += 1;
			$("#breakNum").html(breakTime);
			$(".clockTitle").html("Session");
			$(".timer").html(countTime + ":00");
			seconds = 0;
			minutes = countTime;
		}
	});

	$(".clock").click(function() {
		if (pause === false) {
			count = setInterval(countdown, 1000);
			pause = true;
		} else {
			clearInterval(count);
			pause = false;
		}
	});
});