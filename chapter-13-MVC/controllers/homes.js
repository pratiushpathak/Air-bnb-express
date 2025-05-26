const Home=require("../models/home");

exports.getaddhome=(req,res,next)=>{

   res.render('addhome',{pageTitle:'Add Home to Airbnb',currentpage:'addhome'})
  // res.sendFile(path.join(rootDir,"views","addhome.html"))
    
}

exports.postaddhome=(req,res,next)=>{
  // console.log("home registration succeful for :", req.body.housename,req.body)
  const {housename,price,location,rating,photourl}=req.body

 const home= new Home(housename,price,location,rating,photourl)

   home.save();
  // price.push()



   res.render('homeadded',{pageTitle:'Home added succesfully',currentpage:'homeadded'})
  //  res.sendFile(path.join(rootDir,"views","homeadded.html"))
    
}
exports.gethomes=(req,res,next)=>{
  const registeredHomes=Home.fetchAll()
  // console.log(registeredHomes);

  // the variable we define renders here
   res.render('home',{registeredHomes:registeredHomes,
    pageTitle:'airbnb home',currentpage:'home'})


  // res.sendFile(path.join(rootDir,"views","home.html"))
}
exports.error=(req,res,next)=>{
  //using render for ejs file
  res.status(404).render('404',{pageTitle:'page not found',currentpage:'404'})
// res.sendFile(path.join(rootDir,'views','404.html'))
}



