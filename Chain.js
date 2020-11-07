class Chain {
    constructor(bodyA, bodyB){
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          length:10,
          stiffness:0.04
      } 
      this.Chain= Constraint.create(options)
      World.add (world,Constraint)
    }
    display()
    {
        var pointA = this.Chain.bodyA.position
        var pointB = this.Chain.bodyB.position
        strokeWeight (4)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
