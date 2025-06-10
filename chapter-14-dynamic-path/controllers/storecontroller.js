// const { registeredHomes } = require("../../chapter-12-dynamic-ui-using EJS/routes/hostrouter");
const Home=require("../models/home");
const Favorite=require("../models/favorite");

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
  Favorite.getfavorites(favorites=>{

 
  const registeredHomes=Home.fetchAll(registeredHomes=>{
 
   const favoritehomes= registeredHomes.filter(home=> favorites.includes(home.id))


    res.render('store/favoritelist',{favoritehomes:favoritehomes,
    pageTitle:'My favorites',currentpage:'favorites'})
  })
   })
}

exports.postaddtofavorites=(req,res,next)=>{
console.log("came to add to favorite",req.body)
Favorite.addtofavorite(req.body.id,error=>{
  if(error)
  {
    console.log("error while marking favorite")
  }
  res.redirect("/favorites");
})

}


exports.gethomedetails=(req,res,next)=>{
  const homeid=req.params.homeid;
  console.log("at home detail page",homeid);
  Home.findbyid(homeid,home=>{
  
    if(!home)
    {
      console.log("home not found");
      res.redirect("/homes");
    }


// console.log("home details found",home);


else



  res.render('store/home-detail',{
    home:home,
    pageTitle:'home deatail'
    ,currentpage:'home'})
  })
}











      






