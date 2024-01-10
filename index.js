const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

//indexOf does not take a cb function as an argument


//find needs a cb function that either returns true or false. 
//if it returns true it returns the value on which true was found
//filter() on the other hand check for a condition and returns an array of elements that meet the condition

function superbowlWin(record){
  if(record.find(isWin)){
    return record.find(isWin).year
  }else{
    return undefined
  }
}

function isWin(record){
  return record.result === "W"
}

superbowlWin(record)
