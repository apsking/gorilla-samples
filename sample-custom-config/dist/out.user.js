
// ==UserScript==
// @name   Custom config Script
// @namespace   https://github.com/apsking/gorilla
// @updateURL   https://github.com/apsking/gorilla
// @downloadURL   https://github.com/apsking/gorilla
// @version   1.0
// @description   Gorilla-built, rock-solid, Monkey script with a custom config
// @author   @apsking
// @include   http://github.com/*
// @include   https://www.npmjs.com//*
// @grant   GM.getValue
// @grant   GM.setValue
// Created with love using Gorilla
// ==/UserScript==

var hello = function (name) {
    console.log("Hello " + name);
};

hello('world');
