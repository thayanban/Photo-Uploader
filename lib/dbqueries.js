exports.saveImage = function(albumName, imageName) {
	db.albums.find({albumname: "albumName"}, function(albums) {
 	 if(albums) { 
  		albums.forEach( function(albumName) {
    		db.albums.update({albumname : "albumName"}, {$set : {imagename : "imageName"}}, function(err, updated) {
  				if( err || !updated ) {
  					console.log("image not updated");
  				}
  				else {
  					console.log("image updated");
  				}
  			});
  		}
 	 }	 
 	 else	{
  		save({albumname : "albumName", imagename : "imageName"}, function(err, saved) {
    		if( err || !saved ) {
  				console.log("image not saved");
  			}
  			else {
  				console.log("image saved");
  			} 
  		});
 	 }	
	});
};