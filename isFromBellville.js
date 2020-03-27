function isFromBellville(regNumber) {
  return regNumber.startsWith("CY");
}

describe("the function isFromBellville", function(){

    it ("should return true for CY 123-223", function(){
        assert.equal(true ,isFromBellville("CY 123-223"))
    })
})
