
//fake database
const registeredHomes=[];

module.exports= class Home{

  constructor(housname,price,location,rating,photourl)
  {
    this.housname=housname;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photourl=photourl;
    
  }
  save()
  {
    registeredHomes.push(this);
  }
  static fetchAll()
  {
    return registeredHomes;
  }


}