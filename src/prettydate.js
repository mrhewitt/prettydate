/*!
 * prettydate
 * https://github.com/mrhewitt/prettydate
 * Copyright (c) 2015 Mark Hewitt (markhewitt.co.za)
 * Based on JavaScript Pretty Date
 * Modified 2013 by Alfred Xing (alfredxing.com)
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed MIT
 */
 
/*
 * Angular prettyDate service
 *
 * Service wrapper prodiving an "angularized" access to the prettyDate jQuery formatter
 * Takes a date either as a ISO string or a UNIX timestamps (seconds in epoch) and returns a
 * descriptive string rather than an actual time, e.g. "Just now", "1 Hour ago", etc. If the 
 * time argument is empty then it will return "Never"
 *
 * Designed for a SmartAdmin project, this is intended to be used with a requirejs enabled
 * project, hence the define() wrapper
 */

define( ['angular'], function(angular) {
	angular.module('PrettyDateService', []).factory('PrettyDate', function () {
		   		   
			function prettyDate(time){
				
			  // if the date is empty then return the 	
			  if ( !time ) { return	"Never"; }
			  
			  var date = new Date( typeof time === "String" ? (time || "").replace(/-/g,"/").replace(/[TZ]/g," ") : time*1000),
				diff = (((new Date()).getTime() - date.getTime()) / 1000),
				day_diff = Math.floor(diff / 86400),
				out = "Some time ago";

				switch(true) {
					case diff < 60:
					out = "Just now";
					break;
					case diff < 120:
					out = "1 minute ago";
					break;
					case diff < 3600:
					out = Math.floor( diff / 60 ) + " minutes ago";
					break;
					case diff < 7200:
					out = "1 hour ago";
					break;
					case diff < 86400:
					out = Math.floor( diff / 3600 ) + " hours ago";
					break;
					case day_diff == 1:
					out = "Yesterday";
					break;
					case day_diff < 7:
					out = day_diff + " days ago";
					break;
					case day_diff < 31:
					out = Math.ceil( day_diff / 7 ) + " weeks ago";
					break;
					case day_diff < 366:
					out = Math.floor( day_diff / 30 ) + " months ago";
					break;
					case day_diff > 365:
					out = Math.floor( day_diff / 365 ) + " years ago";
					break;
				};

				return out;
			}

			return prettyDate;
		}
	) 
});