var tables = document.querySelectorAll('.vis');
var rows = tables[tables.length-1].querySelector('tbody').querySelectorAll('tr');
var count = 0;
var resources = [0, 0, 0];

function parse_int (string) {
	output = "";
	for (var key in string) {
		char = string[key];
		if ((char % 1) === 0) {
			if (!isNaN(parseInt(char))) {
				output += char;
			}
		}
	}
	return parseInt(output);
}

if (window.location.href.indexOf("screen=market&mode=send") === -1) {
	alert('You need to be in the \'Send resources\' section of the market');
} else {
	for (var key in rows) {
		if (key % 1 === 0) {
			row = rows[key];
			if (count != 0) {
				content = row.querySelectorAll('td')[1].querySelector('span');
				resource_type = content.querySelector('span').className;
				if (resource_type == 'icon header stone') {
					resources[1] += parse_int(content.innerHTML);
				} else if (resource_type == 'icon header wood') {
					resources[0] += parse_int(content.innerHTML);
				} else if (resource_type == 'icon header iron') {
					resources[2] += parse_int(content.innerHTML);
				}
			}
			count++;
		}
	}

	if (document.querySelector('.resource_info') !== null) {
		document.querySelector('.resource_info').remove();
	}
	var resource_info = document.createElement("p");
	resource_info.className = "resource_info";
	resource_info.innerHTML = "<b>Wood:</b> "+resources[0]+" <b>Clay:</b> "+resources[1]+" <b>Iron:</b> "+resources[2];
	tables[tables.length-1].parentNode.insertBefore(resource_info, tables[tables.length-1]);
}