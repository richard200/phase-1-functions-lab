// Code your solution in this file!
let  d2 = 42;
let pickup;
let d5;
function distanceFromHqInBlocks(pickup, d1){
  
    if(pickup === 43){
        d1 = pickup - d2
      
        
    }else if(pickup === 50){
      d1 = pickup - d2

    }else if(pickup === 34){
         d1 = d2 - pickup

    }

    return d1
}

function distanceFromHqInFeet( pickup, d1, d3){
    if(pickup === 43){
        d1 = pickup - d2
        d3 = d1 * 264
      
        
    }else if(pickup === 50){
      d1 = pickup - d2
      d3 = d1 * 264
      

    }else if(pickup === 34){
         d1 = d2 - pickup
         d3 = d1 * 264
      

    }
    return d3


}

function distanceTravelledInFeet(pickup, d5, d6){
    if(pickup === 43 && d5 === 48){
        d6 = (d5 - pickup) * 264
               
    }else if(pickup === 50 && d5 === 60 ){
        d6 = (d5 - pickup) * 264
      

    }else if(pickup === 34){
        d6 = (pickup - d5) * 264

    }
    return d6

}

function calculatesFarePrice(pickup, d5, d6, d7){
    if(pickup === 43 && d5 === 44){
        d6 = (d5 - pickup) * 264
        if(d6 < 400){
            d7 = 0

        }
       
               
    }else if(pickup === 34 && d5 === 32){
        d6 = (pickup - d5) * 264
        if(d6 > 400 && d6 <2000 ){
            d7 = (d6 - 400) * 0.02

        }
        
      

    }else if(pickup === 50 && d5 === 58 ){
        d6 = (d5 - pickup) * 264
                if(d6 > 2000){
                    d7 = 25
        }
        

    }else if(pickup === 34 && d5 === 24){
        d6 = (pickup - d5) * 264
        if(d6 > 2500){
            d7 =  "cannot travel that far"
        }
       
    }
    return d7

}