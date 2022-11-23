// Code your solution in this file!

let  d2 = 42;
let pickup;

function distanceFromHqInBlocks(pickup){
  if (pickup > d2) return pickup - d2
  return d2 - pickup
    // if(pickup === 43){
    //     d1 = pickup - d2
      
        
    // }else if(pickup === 50){
    //   d1 = pickup - d2

    // }else if(pickup === 34){
    //      d1 = d2 - pickup

    // }

    // return d1
}

// console.log(distanceFromHqInBlocks(5));

function distanceFromHqInFeet( pickup){

   return distanceFromHqInBlocks(pickup) * 264

    // if(pickup === 43){
    //     d1 = pickup - d2
    //     d3 = d1 * 264
      
        
    // }else if(pickup === 50){
    //   d1 = pickup - d2
    //   d3 = d1 * 264
      

    // }else if(pickup === 34){
    //      d1 = d2 - pickup
    //      d3 = d1 * 264
      

    // }
    // return d3


}



function distanceTravelledInFeet(d1, d2){
    return distanceFromHqInFeet(d2) - distanceFromHqInFeet(d1)

    // return distanceFromHqInFeet(pickup)_- distanceFromHqInBlocks( d5)
    // if(pickup === 43 && d5 === 48){
    //     d6 = (d5 - pickup) * 264
               
    // }else if(pickup === 50 && d5 === 60 ){
    //     d6 = (d5 - pickup) * 264
      

    // }else if(pickup === 34){
    //     d6 = (pickup - d5) * 264

    // }
    // return d6

}

distanceTravelledInFeet(10, 57)

function calculatesFarePrice(d1, d2){
    let distance = distanceTravelledInFeet(d1, d2)
    if (distance < 400){
        return 0;

    }else if(distance > 400 && distance < 2000){
        return (distance-400) * 0.02

    }else if(distance > 2000 && distance < 2500){
        return 25;

    }else if(distance > 2500){
        return "cannot travel that far"

    }
}


//  if(pickup === 43 && d5 === 44){
//         d6 = (d5 - pickup) * 264
//         if(d6 < 400){
//             d7 = 0

//         }
       
               
//     }else if(pickup === 34 && d5 === 32){
//         d6 = (pickup - d5) * 264
//         if(d6 > 400 && d6 <2000 ){
//             d7 = (d6 - 400) * 0.02

// }
      

    // }else if(pickup === 50 && d5 === 58 ){
    //     d6 = (d5 - pickup) * 264
    //             if(d6 > 2000){
    //                 d7 = 25
    //     }
        

    // }else if(pickup === 34 && d5 === 24){
    //     d6 = (pickup - d5) * 264
    //     if(d6 > 2500){
    //         d7 =  "cannot travel that far"
    //     }
       
//     // // }
//     // return d7

// }
// }