var fs = require("fs");

console.log("Le dossier courant: "+__dirname);
fs.mkdir('monDossier',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Le répertoire \"monDossier\" a été créé avec succès!");
});



