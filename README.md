# fontawesomepro
Helper service to include Font Awesome Pro CSS

# Documentation

This is a wrapper in order to use Font Awesome Pro in Servoy Solution. You must import this service in your developer and copy the content of folders css and webfonts from Font Awesome library.
The service already contains these folders as dummy, both for NG1 (location in root folder) and for TiNG (location inside project/assets folder).
The service is configured to use all.css file from fontawesome, this can be changed if needed, see: 
[Font Awesome Documentation](https://fontawesome.com/docs/web/setup/host-yourself/webfonts#reference-font-awesome-in-your-project)
There is a helper service with a method ( plugins.fontawesomeproLib.load() ),
that you may call on your solution open method, just to have a reference to the package, so that when it will be exported to WAR,
it will be selected to export.

# Steps for usage (inside Servoy Developer):

1. Clone the git repository (https://github.com/Servoy/fontawesomepro.git)
1. Copy files into css and webfonts folders on 2 locations in your git directory, first one is the the root (NG1) the second one is in the TiNG source location (project/assets); maybe do other changes to service, if needed; after this point Titanium Client can be built and can run with Font Awesome Pro included.
2. After this you can do 2 things, 1 is to build it see below and drop the generated fontawesomepro.zip in the ng_web_packages directory of your solution.
3. Or import the project
   1. Import service project from your local git repository (File -> Import -> Project from Git)
   2. Add reference to service project from your solution/module (after this point, the Titanium Client should be built using the dummy wrapper) 

With both of them you can export it as a war (building in the cloud means that the cloud also needs to have the git repo if you use the import project variant)
  
To generate the zip file, run the following commands (from a command console, in fontawesomepro folder from your git location):
* npm install  (to make sure all package.json depedencies are there, node_modules folder is created
* npm run make_release   (this build the package and will generate then a zip file that is described in the scripts/build.js)
You can use the generated fontawesomepro.zip to import and use anywhere
