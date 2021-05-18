class Slingshot{
    constructor(bodya,bodyb){
    var options = {
        bodyA:bodya,
        bodyB:bodyb,
        stiffness:0.04,
        length:10
    }
    this.slingshot = Constraint.create(options);
    World.add(world,this.slingshot);
    
}
display(){
  var point1=this.slingshot.bodyA.position;
  var point2=this.slingshot.bodyB.position;
  
  strokeWeight(4);
  line(point1.x,point1.y,point2.x,point2.y);

}
}