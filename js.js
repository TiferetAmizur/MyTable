$(document).ready(function () {

	//הסתרת הטבלה- ברירת מחדל
	$("#mytabel").hide();




	function getData() {
		$.ajax({
			type: "GET",
			url: "json.php"
		}).done(function (res) {
			if (res) {
				returen(res);
			} else {
				alert("error request")
			}
		});

	}


	//שרק בפעם הראשונה יטען נתונים
	var flag = false;
	//הצגת/הסתרת הטבלה בעת לחיצה
	$("#showtabel").click(function () {
		if ($("#showtabel").is(':checked')) {
			if (flag == false) {
				//הבאת נתונים
				$.ajax({
					type: "GET",
					url: "json.php"
				}).done(function (res) {
					if (res) {
						var str = JSON.parse(res)
						for (var i = 0; i < 20; i++) {
							var tr = $("<tr>");
							for (var j = 0; j < 2; j++) {
								var td = $("<td>");
								td.html(str[i][j]);
								tr.append(td)
							}
							$("#mytabel").append(tr)
						}
					}
				});
				$("#mytabel").show();
				flag = true;
			}
			else {
				$("#mytabel").show();
			}
		}
		else {
			$("#mytabel").hide();
		}
	});






	// $("#checkbox").click(
	// 	function () {
	// 		// getData();
	// 		// var arr = getData();
	// 		// alert(arr)
	// 		$.ajax({
	// 			type: "GET",
	// 			url: "json.php"
	// 		}).done(function (res) {
	// 			if (res) {

	// 				var str = JSON.parse(res)

	// 				for (var i = 0; i < 20; i++) {
	// 					var tr = $("<tr>");
	// 					for (var j = 0; j < 2; j++) {
	// 						var td = $("<td>");
	// 						td.html(str[i][j]);
	// 						tr.append(td)
	// 					}
	// 					$("#mytabel").append(tr)
	// 				}
	// 			}
	// 		});
	// 	})





});