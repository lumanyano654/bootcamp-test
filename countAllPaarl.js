function allPaarl(str){
  var differentRegNumber = str.split(', ')

  var paarl = []
  for (var y=0;y<differentRegNumber.length;y++){
    console.log(differentRegNumber[y]);
   if (differentRegNumber[y].startsWith('CJ')){
     paarl.push(differentRegNumber[y])
    }
  }
    return paarl;

}

describe("the countAllPaarl function", function() {
  it("should give out all those from Paarl", function() {
      assert.equal('CJ', allPaarl('CJ'))

  })
})
