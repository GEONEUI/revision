var rolling = 24;
var date = new Date();
var today = String(date.getFullYear()) + String(date.getMonth() + 1) + String(date.getDate())
var todayArr = [];
var el = document.querySelector('.countBox');


todayArr = today.split("");



todayArr.forEach((val, idx) => {

    var number = Number(val);
    var numberArr = [];
    var countList = document.createElement('div');
    countList.className = "countList";

    for (var i = 0; i < rolling; i++) {
        var sum = number + i;
        var num = sum >= 10 ? Number(String(sum).split("")[1]) : sum;

        numberArr[i] = num
    }


    numberArr.reverse();


    numberArr.forEach((element) => {

        var span = document.createElement('span');
        span.innerHTML = element;

        countList.appendChild(span)
    })

    el.appendChild(countList);





})

