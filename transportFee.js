function transportFee(shift){
  if (shift == 'morning'){
    return 'R20'
  }
  else if (shift == 'afternoon'){
    return 'R10'
  }
  else {
    return 'free'
  }

}

describe("The transportFee function ", function(){

    it ("should be R20 in the morning", function() {
        assert.equal('R20', transportFee('morning'));
    });
    it ("should be R10 in the afternoon", function() {
      assert.equal('R10', transportFee('afternoon'))
    });
    it('should else be free', function() {
      assert.equal('free', transportFee('no shift'))
    })
});
