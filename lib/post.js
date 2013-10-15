
app.post('/photo-upload', function(req, res){
    var image = req.body
    , albumName = image.alname
    , imageName = image.fname
    //;
    //var tmp_path = req.body.fname.path
    , target_path =  req.body.fname.path
    ;
    //  fs.rename(tmp_path, target_path, function(err) {
    //     if (err) throw err;
    //     // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
    //     fs.unlink(tmp_path, function() {
    //         if (err) throw err;
    //         //

    //     });
    // });
    lib.dbase.saveImage(albumName, imageName, target_path, function(err) {
        if(err) {
            throw err;
        }
        else {
            console.log('sucess....connection opened & image saved');
        }
    });
});
app.listen(3000);