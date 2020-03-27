function countRegNumber(regList){
  var counter = 0;
  const regNumbers = regList.split(" ");
  for (var i=0;i<regNumbers.length;i++) {
      var regNumber = regNumbers[i].trim();
      if (regNumber.startsWith("CY")) {
        counter++;
      } else if (regNumber.startsWith("CJ")) {
        counter++;
      }
  }

  return counter;
}


describe("The countRegNumber function ", function() {



  it("should return 1 for 'CY 123-223'", function() {


    assert.equal(1, countRegNumber("CY 123-223, CA 123-123"));
  });

  it("should return 2 - but the parameter needs work'", function() {
    var EXPECTED_COUNT = 2;



    assert.equal(1, countRegNumber("CY 123-123, CA 123-123"));
  });

  it("should return 5 - but the parameter needs work'", function() {
    var EXPECTED_COUNT = 5;



    assert.equal(3, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
  });

});
