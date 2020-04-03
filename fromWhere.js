function fromWhere(regNumber){
  if (regNumber.startsWith('CY')){
    return 'Bellville';
  }
  else if (regNumber.startsWith('CJ')){
    return 'Paarl';
  }
  else if (regNumber.startsWith('CA')){
    return 'Cape Town'
  }
  else {
    return 'Some other place!'
  }
}


describe("the fromWhere function", function() {
  it("should tells us from Bellville", function() {
    assert.equal('Bellville', fromWhere('CY'))
  });
  it("should tell us from paarl", function() {
    assert.equal('Paarl', fromWhere('CJ'))
  });
  it("should tell us from Cape Town", function() {
    assert.equal('Cape Town', fromWhere('CA'))
  });
})
