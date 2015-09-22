(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var mattSmith = new Quarterback('Matt Smith', 'Oakland Raiders');

$('#firstTableName').html(mattSmith.name);
$('#firstTableTeam').html(mattSmith.team);
$('#firstTableAttempts').html(mattSmith.attempts);
$('#firstTableCompletions').html(mattSmith.completions);
$('#firstTableYards').html(mattSmith.yards);
$('#firstTableTouchdowns').html(mattSmith.touchdowns);
$('#firstTableInterceptions').html(mattSmith.interceptions);
$('#firstTableSacks').html(mattSmith.sacks);
$('#firstTableLongestCompletion').html(mattSmith.longCompletion);

var $formType = $('#type').val();
var $formYards = $('#yards').val();

$('#addAttemptForm').submit(function (e) {
	e.preventDefault();
	mattSmith.addAttempt($formType, $formYards);
	console.log(mattSmith);
	console.log($formType);
	console.log($formYards);
});

function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.completions = 0;
	this.yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longCompletion = 0;

	this.getYards = function () {
		return yards;
	};

	this.setYards = function (y) {
		yards = y;
	};

	this.completionPercentage = function () {
		return Math.round(this.completions / this.attempts * 100) + '%';
	};

	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};

	this.addAttempt = function (type, yards) {
		type.toLowerCase();
		if (type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
		} else if (type === 'incomplete') {
			this.attempts++;
			this.yards += yards;
		} else if (type === 'interception') {
			this.attempts++;
			this.interceptions++;
			this.yards += yards;
		} else if (type === 'complete') {
			this.longCompletion++;
			this.attempts++;
			this.yards += yards;
		} else if (type === 'sack') {
			this.sacks++;
			this.yards += yards;
		}

		if (yards > this.longCompletion) {
			this.longCompletion = yards;
		}
	};
}

function Rushing(name, team) {
	this.name = name;
	this.team = team;
	this.attempt = 0;
	this.yards = 0;
	this.over20 = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	this.longestRush = 0;

	this.getYards = function () {
		return yards;
	};

	this.setYards = function (y) {
		yards = y;
	};

	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};

	this.addAttempt = function (type, yards) {
		if (type === 'fumble') {
			this.fumbles++;
			this.attempts++;
			this.yards += yards;
		} else if (type === 'first down') {
			this.firstDowns++;
			this.attempts++;
			this.yards += yards;
		} else if (type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.yards += yards;
		}

		if (yards > this.longestRush) {
			this.longestRush = yards;
		}
	};
}

function Kicking(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.longestFieldGoal = 0;

	this.getYards = function () {
		return yards;
	};

	this.setYards = function (y) {
		yards = y;
	};

	this.fieldGoalPercentage = function () {
		return Math.round(this.made / this.attempts * 100) + '%';
	};

	this.addAttempt = function (type, yards) {
		if (type === 'made') {
			this.attempts++;
			this.made++;
			this.yards += yards;
		} else if (type === 'missed') {
			this.attempts++;
			this.yards += yards;
		}

		if (yards > this.longestFieldGoal) {
			this.longestFieldGoal = yards;
		}
	};
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map