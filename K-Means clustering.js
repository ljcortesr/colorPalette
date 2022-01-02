
/*/////////////
ref. 
K-Means clustering by Bill Automata
https://openprocessing.org/sketch/51404/
*//////////////

class c_DataParticle {

	constructor(_postition, _iniC)
	{
		this.position = _postition;
		this.centroidIndex = _iniC;
	}
	
	FindClosestCentroid(_centroids)
	{
    let closestCentroidIndex = -1;
    let closestDistance = 1000000;

    // find which centroid is the closest
    for (let i = 0; i < _centroids.length; i++)
		{      
      let curCentroid = _centroids[i];

      let distanceCheck = this.position.dist(curCentroid.position) ; 
			
      if (distanceCheck < closestDistance)
      {		 
        closestCentroidIndex = i;
        closestDistance = distanceCheck;
      }
    }

    // now that we have the closest centroid chosen, assign the index,
	if(this.centroidIndex==closestCentroidIndex) return false;
    this.centroidIndex = closestCentroidIndex;
	return true;
  }
	
}

class c_CentroidL {
	constructor(_rIni, _gIni, _bIni, _i)
	{
		this.position=createVector(_rIni, _gIni, _bIni);
		this.id=_i;
		this.rate=0;
	}
	Tick(_particles)
	{
		let numberOfAssociatedParticles = 0;
		let newPosition = createVector(0, 0, 0);
		for (let i = 0; i < _particles.length; i++)
		{
			if(_particles[i].centroidIndex==this.id){
				numberOfAssociatedParticles++;
				newPosition.x=newPosition.x+_particles[i].position.x;
				newPosition.y=newPosition.y+_particles[i].position.y;
				newPosition.z=newPosition.z+_particles[i].position.z;		
			}
		}
		// move the centroid to its new position
		if(numberOfAssociatedParticles>0){
			
			this.position.x=(newPosition.x/numberOfAssociatedParticles);
			this.position.y=(newPosition.y/numberOfAssociatedParticles);
			this.position.z=(newPosition.z/numberOfAssociatedParticles);
		}
		else{
			newPosition=createVector(random(0,255), random(0,255), random(0,255));
			this.position = newPosition;
		}
		this.rate=numberOfAssociatedParticles;  		           
  }

	GetCol()
	{
		return color(this.position.x,  this.position.y,  this.position.z);
	}
	
}

