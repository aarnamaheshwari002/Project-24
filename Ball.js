class BALL{

    constructor(x, y, radius){
    
        var options = {
    
            isStatic: false, 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
                
             }

             this.radius = radius;
            this.object = Bodies.circle(x, y, radius, options);
          
        
           fill("lightgreen");
           noStroke();
         World.add(world, this.object); 
   
    }
    
    display(){
    
    var pos = this.object.position;
    push();

translate(pos.x, pos.y);



        ellipseMode(CENTER);
       ellipse(0, 0,this.radius); 
    pop();
    }
    }