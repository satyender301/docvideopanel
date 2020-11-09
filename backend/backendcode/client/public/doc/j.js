
  /*    try {
        console.log(req.body)
       // res.render('index','Hello I am in succesfull connection') 
       
      } catch (err) {
        console.log("error occured!");
      
       console.log(err);
      }
      var doctorvideoinfo = new doctorvideoinfoModel({
      
        
         title: req.body.title,
      
        keyword: req.body.keyword,
        summary: req.body.summary,
        
      })
      
      
      let d
      doctorvideoinfoModel.find({ title: req.body.title }, function (err, d) {
          if (err) return console.log(err)
          console.log(typeof d)
      
          console.log('my name value is' + d)
          console.log('after printing the d value')
          console.log(typeof d)
      
          if (d.length == 0) {
            console.log('check succesfull')
            doctorvideoinfo.save((err, res1, data) => {
      
              if (err) {
                console.log('error occurred')
               }
      
                var m = doctorvideoinfoModel.find({})
                 m.exec(function (err, data) {
                if (err) throw error
      
               // res.render('index', { title: 'Record_details', records: data })
               res.json(data)
               console.log(data);
              })
      
        })
      
      }  else {
        console.log('ran else part')
        var m = doctorvideoinfoModel.find({})
        m.exec(function (err, data) {
          if (err) throw error
      
         
          res.json(data)
        })
      }
      
        }).next();
    
      */