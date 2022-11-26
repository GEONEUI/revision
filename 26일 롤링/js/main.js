var date = new Date();
var today = String(date.getFullYear() + String(date.getMonth() + 1) + String(date.getDate()));
var todayArr = [];
var rolling = 24;
var el = document.querySelector('.countBox');

todayArr = today.split("");



todayArr.forEach((val, idx) => {

	var number = Number(val);
	var numberArr = [];
	var countItem = document.createElement('li');
	countItem.classList.add("countItem");



	for (var i = 0; i < rolling; i++) {
		sum = number + i;
		num = sum >= 10 ? Number(String(sum)[1]) : sum;
		numberArr[i] = num;
	}

	numberArr.reverse();

	numberArr.forEach((val, idx) => {
		var spanElem = document.createElement('span');
		spanElem.innerHTML = val;
		countItem.appendChild(spanElem);

	});

	el.appendChild(countItem);

	console.log(val);
	setTimeout(function () {
		countItem.classList.add('active');
	}, idx * 300);









});

