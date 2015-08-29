Pretty Date
===========

Angular service built for use with requirejs and in particular SmartAdmin dashboard to convert ISO and Unix epoch dates into a human readable format.

## Usage

### Including the PrettyDate service into your SmartAdmin dashboard application, module and controller

Create a prettydate folder in the js/plugin folder containing the .js file
In your rconfig.js file add the line
```javascript
		'prettydate': '../plugin/prettydate/prettydate',
```

Make the service available to your module by including it in the module definition at the top of the file, for example

```javascript
define(['angular',
    'angular-couch-potato',
    'angular-ui-router',
	'prettydate'
], function (ng, couchPotato) {

    "use strict";

    var module = ng.module('app.mymodule', [ 'ui.router', 'PrettyDateService' ]);

    couchPotato.configureApp(module)
	
	....
	
```

Now in your controller your can inject the new service as you would in any regular Angular application, for example

```javascript
define(['../module'], function (module) {

    'use strict';

    return module.registerController('MyController', function ($scope, PrettyDate) {
					
	....
	
```

Use the PrettyDate method as a regular function to format your date ISO strings or timestamps inside any of your methods in the injected module

```javascript
	var x = PrettyDate('2015-08-31 10:00');
```

## Meta

Original script by the mighty [John Resig](https://github.com/jeresig).
Modified by [Wylst](https://github.com/wylst).

Licensed under the MIT and GPL licenses.