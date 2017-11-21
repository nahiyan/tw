build/js/la-min.js: la.js
	gulp scripts
	git add la.js
	git add build/js/la-min.js
	git commit -m "New update"
	git push origin master