var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./lib/","/lib/");
zip.addLocalFolder("./css/","/css/");
zip.addLocalFolder("./webfonts/","/webfonts/");
zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/", "/dist/");
// add here all ng1 components/services 
//zip.addLocalFolder("./mycomponent/", "/mycomponent/");

zip.writeZip("fontawesomepro.zip");