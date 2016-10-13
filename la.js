"use strict";

var l = document.getElementById('plunder_list').querySelectorAll('tbody tr');

var x = 0;
var aButtons = [];
l.forEach(function (li) {
	if (x !== 0) {
		var distance = parseFloat(li.querySelectorAll('td')[7].innerHTML);
		if (distance <= 20) {
			aButtons[x] = li.querySelectorAll('td')[8].querySelector('a');
		} else {
			return 0;
		}
	}
	x++;
});

var counter = 1;
var i = setInterval(function () {
	var aButton = aButtons[counter];
	aButton.click();
	counter++;
}, 300);