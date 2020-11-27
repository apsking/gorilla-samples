
// ==UserScript==
// @name			New Userscript
// @namespace		http://tampermonkey.net/
// @version			0.1
// @description		Gorilla-built, rock-solid, Monkey script
// @updateURL
// @downloadURL
// @author			You
// @include			https://**
//
// Created with love using Gorilla
// ==/UserScript==

(function () {
    'use strict';

    var hello = function (name) {
        console.log("Hello " + name);
    };

    hello('world');

}());
