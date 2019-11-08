import animate from 'animate.css';
import $ from 'jquery';
// const $ = require("./lib/jquery/jquery.min.js");
window.$ = window.jQuery = $
const jquerymigrate = require("./lib/jquery/jquery-migrate.min.js");
import bootstrap from 'bootstrap'  ;
const WOW = require("./lib/wow/wow.js");
// import WoW from 'wowjs';
// Initiate the wowjs animation library
new WOW().init();

// import WOW from 'wowjs';
// const bootstrap = require("./lib/bootstrap/js/bootstrap.bundle.min.js");
const easing = require("./lib/easing/easing.min.js");
const hoverIntent = require("./lib/superfish/hoverIntent.js");
const superfish = require("./lib/superfish/superfish.min.js");
const magnific = require("./lib/magnific-popup/magnific-popup.min.js");
const numscroller = require("./js/numscroller-1.0.min.js");
const contactform = require("./contactform/contactform.js");
const all = require("./js/all.min.js");
const main = require("./js/main.js");

var ghpages = require('gh-pages');
 
ghpages.publish('dist', function(err) {});