
	var rolling = 24;
	var date = new Date();
	var today = String(date.getFullYear()) + String(date.getMonth()+1) + String(date.getDate());
	var dateArr = [];



	dateArr = today.split("");


	dateArr.forEach(function(val, idx){
		
		var number = Number(val);
		var sumArr = [];
		var el = document.querySelector('.count_box_container');

		for(var i = 0 ; i <= rolling ; i++){
			
			var countBox = document.createElement('div');
			countBox.className = "count_box";
			var num = number + i;
			var sum = num >= 10 ? Number(String(num).split("")[1]) : num;
			sumArr[i] = sum;
		}


			sumArr.reverse();
			sumArr.forEach(function(element){
				
				var spanCon = document.createElement('span');
				spanCon.innerHTML = element;

			
				countBox.appendChild(spanCon);

				
				
			})
			
			

		
		el.appendChild(countBox);

		setTimeout(function(){
			countBox.classList.add('active');
		}, idx * 300)

	});





