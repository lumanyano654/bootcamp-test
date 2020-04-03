function countAllFromTown(regNumber, place){
  var town = [];
  var regNumbers = regNumber.split(',');
  console.log(regNumbers);
    for (var x=0;x<regNumbers.length;x++){

      var t = regNumbers[x].trim()
       if (t.startsWith(place)){
           town.push(t);
         console.log(town)
      }
    }
  return town.length

}

describe("the countAllFromTown function", function () {
  it("should return all those from town", function () {
    assert.equal(0, countAllFromTown('town'))
  })
})
