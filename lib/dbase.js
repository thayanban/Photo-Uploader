exports.saveImage = function(albmName, imagName, targt_path, cb) {
	var databaseUrl = "localhost:27017/albums"
	;
	var collection = ["photos"]
	;
	var db = require("mongoskin").db(databaseUrl,{safe:false});
	;
	cb(	db.collection('photos').insert({name : albmName, member : [imagName, targt_path]}, function(err, result) {
  	if (err) return err;
  	if (result) console.log('saved!');
  }));
// var mongo = require( 'mongoskin' );

// var port = process.env.PORT || 3000;
// var mongoUri = 'user:pass@localhost:27017/albums,{safe:true}';
// var db = mongo.db( mongoUri );

// var photos = {
//     add: function( albmName, imagName, requestCallback )	{
//         db.collection( "photos" ).insert( { "firstName": albmName, "lastName": imagName }, function(error, result)	{
//             requestCallback( null, "success" );
//         });
//     }
// };
};