/*
	index.js
*/	
$(document).ready(function () {

	"use strict";

	var resultList = $("#resultList");
	resultList.text("This is from jQuery");

	var toggleButton = $("#toggleButton");

	toggleButton.on("click", function () {
		resultList.toggle();

		if (toggleButton.text() == "Hide") toggleButton.text("Show");
		else toggleButton.text("Hide");
	});

	var listItems =	$("header nav li");
	listItems.css("font-weight", "bold");
	listItems.filter(":first").css("font-size", "18px");


});