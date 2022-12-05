var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver', 
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];
// x and y ==> can take any of the values from the below list-
// var colors = [" green"," red"," purple"," blue"," crimson"," silver"," pink "]
// z ==> can take a number from 0<=a<=100
//Progression 1: Add z chocolates of x color
function addChocolates(chocolates,color,count){
  if(count>0){
    for(let z=0;z<count;z++){
      chocolates.unshift(color)
    }
  }
  else if(count===0 || count<0){
    return "Number cannot be zero/negative"
  }
}
//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates,number){
  let arr2=[]
  if(number>chocolates.length){
    return "Insufficient chocolates in the dispenser"
  }
  else if(number===0 ||number<0){
    return "Number cannot be zero/negative"
  }
  else{
  for(let j=0;j<number;j++){
    arr2.push(chocolates[j])
  }
  return arr2
  }
}


//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates,number){
  let arr3=[]
  if(number>chocolates.length){
    return 'Insufficient chocolates in the dispenser'
  }
  else if(number==0 || number<0){
    return 'Number cannot be zero/negative'
  }
  for(let i=0;i<number;i++){
    arr3.push(chocolates.pop())
  }
  return arr3

}
//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates,number, color){
  let arr4=[]
  if(number>chocolates.length){
    return 'Insufficient chocolates in the dispenser'
  }
  else if(number==0 || number<0){
    return 'Number cannot be zero/negative'
  }
  for(let i4=0;i4<number;i4++){
    arr4.push(chocolates.pop())
  }
  return arr4
}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
var one=["green","red","red"]
let counter=chocolates.length

function noOfChocolates(chocolates){
  cg=0,cs=0,cb=0,cc=0,cpu=0,cr=0,cp=0;
  var sum5=[]
  if(chocolates.length<7){
    for(let i3=0;i3<chocolates.length;i3++){
      
      if(chocolates[i3]==="green"){
        cg++
      }
      else if(chocolates[i3]==="silver"){
        cs++;
      }
      else if(chocolates[i3]==="blue"){
        cb++;
      }
      else if(chocolates[i3]==="crimson"){
        cc++;
      }
      else if(chocolates[i3]==="purple"){
        cpu++;
      }
      else if(chocolates[i3]==="red"){
        cr++;
      }
      else if(chocolates[i3]==="pink"){
        cp++;
      }
   
    }
    if(cg>0){
      sum5.push(cg)
    }
    if(cs>0){
      sum5.push(cs)
    }
    if(cc>0){
      sum5.push(cc)
    }
    if(cp>0){
      sum5.push(cp)
    }
    if(cr>0){
      sum5.push(cr)
    }
    if(cp>0){
      sum5.push(cp)
    }

    return sum5
  }
  for(let i5=0;i5<chocolates.length;i5++){
    if(chocolates[i5]==="green"){
      cg++
    }
    else if(chocolates[i5]==="silver"){
      cs++;
    }
    else if(chocolates[i5]==="blue"){
      cb++;
    }
    else if(chocolates[i5]==="crimson"){
      cc++;
    }
    else if(chocolates[i5]==="purple"){
      cpu++;
    }
    else if(chocolates[i5]==="red"){
      cr++;
    }
    else if(chocolates[i5]==="pink"){
      cp++;
    }
 
  }
  let arr5=[cg,cs,cb,cc,cp,cr,cp]
  return arr5
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
  let arr6=[]
  for(let i6=0;i6<chocolates.length;i6++){
    let count6=0;
    for(let j6=0;;j6++){
      count6++
    }
    arr6.push(count6)
    
  }
}
// console.log(sortChocolateBasedOnCount(chocolates))
//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(){}
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(){}
//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor() {}
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(){}