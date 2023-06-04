# Assignment 2.4 - Routing in Action

* Create app, Install Bootstrap, jQuery

      ng new composer-app

      cd composer-app 

      npm i --save bootstrap jquery

      npm audit fix

* Wire Bootstrap, jQuery: `angular.json`

      "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
      ]

* Add components

      ng g c ComposerList

      ng g c Contact

      ng g c About

--- 

To add Bootstrap Icons, 

    npm i bootstrap-icons

* Update our styles section under `angular.json` file: 

      "styles: [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/bootstrap-icons/font/bootstrap-icons.css"
      ],

* Update our `styles.css` file:

      @import `~bootstrap-icons/font/bootstrap-icons.css';



