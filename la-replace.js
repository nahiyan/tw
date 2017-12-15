'use strict';

// return Accountmanager.farm.sendUnits(this, village_id, template_id)

var template_a_id = 2034;
var template_b_id = 5149;

var villages = [];
var la_table = document.querySelector('#plunder_list tbody');

function clear_table () {
	var rows = la_table.querySelectorAll('tr');
	var x = 0;
	rows.forEach(function (row) {
		if (x >= 2)
			row.remove();

		x++;
	});
}

function add_table_item (village_id, coords) {
	document.querySelector('#plunder_list tbody').innerHTML += '\
		<tr id="village_' + village_id + '" class="report_' + village_id + ' row_a">\
			<td></td>\
			<td></td>\
			<td></td>\
			<td>' + coords + '</td>\
			<td colspan="3"></td>\
			<td></td>\
			<td></td>\
			<td>Distance</td>\
			<td>\
				<a href="#" onclick="return Accountmanager.farm.sendUnits(this, ' + village_id + ', ' + template_a_id + ')" class="farm_village_' + village_id + ' farm_icon farm_icon_a"></a>\
			</td>\
			<td>\
				<a href="#" onclick="return Accountmanager.farm.sendUnits(this, ' + village_id + ', ' + template_b_id + ')" class="farm_village_' + village_id + ' farm_icon farm_icon_b"></a>\
			</td>\
			<td>?</td>\
			<td></td>\
		</tr>';
}

function populate_table () {
	villages.forEach(function (village) {
		add_table_item(village.id, village.coords);
	});
}

// RUN

clear_table();

document.getElementById('content_value');
content_value.innerHTML = "<textarea class='vis' style='width: 98%' id='tw_villages'></textarea> <br/><button id='tw_load' class='vis'>Load</button>" + content_value.innerHTML;

document.getElementById('tw_load').onclick = function () {
	var villages_bbcode = document.getElementById('tw_villages').value;

	villages_bbcode.split('\n').forEach(function (link) {
		villages.push({
			id: parseInt(/id=[0-9]+/.exec(link)[0].substr(3)),
			coords: /\([0-9|]+\)+/.exec(link)[0].substr(1, /\([0-9|]+\)+/.exec(link)[0].length - 2)
		});
	});

	populate_table();
};