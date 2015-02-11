
backbone marionette boilerplate
====================

This boilerplate will help SharePoint web app developers to get start our app development framework and folder structure quickly. And its **free** to modify.

The backbone marionette boilerplate will organize your application with a logical file structure to develop your Models/Collections/Views/Routers inside require.js modules. and building process will be done by **r.js** also boilerplate has task runner winch using **Gulp.js**.


## Library's used : ##
modernizr.js , text.js ( underscore template engine ), Backbone.SharePoint OData proxy by Luc Stakenborg, bootstrap 3 with less compiler and finally jQuery v1.10.2. feel free to add or update your favorite library's. 


## Requirement : ##

 - **Node.js** installed in your computer if not install from http://nodejs.org/download/
 - **gulp.js** task runner https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md


## Getting started ##

The easiest way to get started is to install Git and clone the repository:
``` bash
# for your project.
git clone --depth 1 https://github.com/aCreativeDesign/backbone-marionette-boilerplate
# Move the repository to your own project name.
```
*If your not familiar with command line you can always download as zip from github. and change the folder name to your project name.* 

## Folder structure ##

<pre>
<font color="blue">project-name</font>
|-- <font color="blue">backups</font>
|-- <font color="blue">client-brief</font>
|-- <font color="blue">development</font>
|   `-- <font color="blue">css</font>
|   `-- <font color="blue">images</font>
|   `-- <font color="blue">js</font>
|   `-- <font color="blue">less</font>
|-- <font color="blue">dist</font>
|-- <font color="blue">node_modules</font>
</pre>

**Backups folder**  will have backup of a development folder by running :
``` bash
$ gulp backup
```

**Client-brief folder**  will have all your UI files such as Adobe Photoshop, InDesign. and maybe clients email...

**Development folder**  will have all your development source files. ( heart of your project ).

**Dist folder**  Minifyed final product folder and also gulp.js runs as server under *localhost:8888* will pointed into dist folder and it will reload on file change / watch. 

**node_modules folder**  will have all the node.js and gulp.js modules installed in local. 

## Less CSS processing ##

Inside *less folder* you will see *style.less* file will hold all your styles and variables also bootstrap folder will have less version of bootstrap. 

**Customizing bootstrap :**
inside bootstrap folder you will find a *bootstrap.less*  file has all the components @imports you can comment over it or uncomment and run build.


## Build process ##

The build process consists of numerous Gulp.js plugin tasks that work together
to optimize your application.

``` bash
# To run the build process, cd into the project folder root and run.
# It will run server under localhost:8888
$ gulp

# Backup your development folders 
$ gulp backup

# Backup your development folders into your own path
$ gulp backup --path ../your/file/path
```

Note :  if you don't want to have git repostory in your project make visible hidden files and delete .git folder.