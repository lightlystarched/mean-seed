# MEAN seed
This is meant to help get a full application stack up and running with little effort.
Components being leverage on the server-side:
* NodeJS
* ExpressJS
* Recess
* Jade
* Grunt (for watching and recompiling less and jade files)

And on the client-side:
* AngularJS
* Twitter Bootstrap 3
* RequireJS

## To make use of this seed:
> git clone -b d3 https://github.com/lightlystarched/mean-seed [your folder name]

> cd [your folder name]

> npm install && bower install

And now you're good to go.
To run your test server and watch the 'less' folder for changes, type:
> grunt

Then just navigate your browser to **http://localhost:3000/**
- - -

# Breakdown of the scaffold

###
1. Server-side
1. **/config.js**  
Set the path to your mongo database here. For example, if you are running your DB locally, you would do something like: 'http://localhost'

2. **/models**  
Once you've got your database connected, this is where you go to map out your schema. It is usually best to create the schema locally before creating it in your database, since the file can act as a blueprint for your DB. It also helps reduce errors due to the structures being misaligned.

2. **/routes.js**  
Sets up the routing information for your server. Anything that you want your server to find needs to be referenced in here

3. **/controllers**
This is the glue between your model and routes.js. This allows you to setup the CRUD methods for your application so that you can, for example, pull data from your mono database through your models and serve it to the client.

3. **/views**  
This uses .jade templating for server-side template creation. Any server-side templates should be created inside this folder. Any files that you then want to manipulate on the client (for example, if you're using angular.js), they should go into **/views/client/** (see below).

###
2. Client-side
1. **/less**  
This is where your stylesheets should go, making use of Less templating. If you are running the grunt server, the server will automatically watch for changes here and recompile the styles into a .css file in the **/public** folder. The project is including bootstrap as default, so you can either simply build your html using the included bootstrap utilities, or you can create your own custom styling by manipulating the .less files yourself.

2. **/views/client**  
This is where you should put any .jade files that need to be compiled and available for any client-side scripting you may be using. In your .js files you would simply reference **/client/myfile**, once you've created the template.

3. **/public**  
All of your client-side resources should be put here. When referencing them through the browser, this is the older that will be seen as root. So, for example, if you want to reference a javascript file you've created in **/public/javascripts/myScript.js**, you would reference it in your html or jade as **/javascripts/myScript.js**
