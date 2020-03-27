function regCheck(reg1, reg2){
  return reg1.endsWith(reg2);
}



describe("regCheck", function (reg1, reg2) {

  it("should return true for (GP)", function() {

    assert.equal(false, regCheck('DV 23 LP CY', 'GP'));

  });

  it("should return false for ND", function() {
       var DURBAN_REG_NUMBER = 'ND 123-124';

      assert.equal(false, regCheck(DURBAN_REG_NUMBER, 'ND'));
  });

});
