// const { registeredHomes } = require("../../chapter-12-dynamic-ui-using EJS/routes/hostrouter");
const Home=require("../models/home");

exports.gethomes=(req,res,next)=>{
  const registeredHomes=Home.fetchAll(registeredHomes=>{
    res.render('store/homelist',{registeredHomes:registeredHomes,
    pageTitle:'Home list',currentpage:'home'})
  })
  // console.log(registeredHomes);

  // the variable we define renders here
   


  // res.sendFile(path.join(rootDir,"views","home.html"))
}



exports.getindex=(req,res,next)=>{
  const registeredHomes=Home.fetchAll(registeredHomes=>{
    res.render('store/index',{registeredHomes:registeredHomes,
    pageTitle:'airbnb home',currentpage:'index'})
  })
}

exports.getbookings=(req,res,next)=>{
  (
    res.render('store/bookings',{
    pageTitle:'My bookings',currentpage:'bookings'})
  )

}
exports.error=(req,res,next)=>{
  //using render for ejs file
  res.status(404).render('404',{pageTitle:'page not found',currentpage:'404'})
// res.sendFile(path.join(rootDir,'views','404.html'))
}


exports.getfavoritelist=(req,res,next)=>{
  const registeredHomes=Home.fetchAll(registeredHomes=>{
    res.render('store/favoritelist',{registeredHomes:registeredHomes,
    pageTitle:'My favorites',currentpage:'favorites'})
  })
}


exports.gethomedetails=(req,res,next)=>{
  const homeid=req.params.homeid;
  console.log("at home detail page",homeid);


  res.render('store/home-detail',{
    pageTitle:'home deatail',currentpage:'home'})

      
}





