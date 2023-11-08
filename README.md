# fontawesomepro
Helper service to include Font Awesome Pro CSS

# Documentation

This is a wrapper in order to use Font Awesome Pro in Servoy Solution. You must import this service in your developer and copy the content of folders css and webfonts from Font Awesome library.
The service already contains these folders as dummy, both for NG1 (location in root folder) and for NG2 (location inside projects folder).
The service is configured to use all.css file from fontawesome, this can be changed if needed, see: 
[Font Awesome Documentation](https://fontawesome.com/docs/web/setup/host-yourself/webfonts#reference-font-awesome-in-your-project)
There is a helper service with a method ( plugins.fontawesomeproLib.load() ),
that you may call on your solution open method, just to have a reference to the package, so that when it will be exported to WAR,
it will be selected to export.
