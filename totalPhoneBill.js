function totalPhoneBill(callsMade){
  var calls = callsMade.split(', ');
  console.log(calls);
  var total = 0
  for (var x=0;x<calls.length;x++){
    var c = calls[x].trim();
    if (c.startsWith("sms")){
      total += 0.65
    }
   if (c.startsWith("call")){
      total += 2.75
    }


  }
    return "R"+ total.toFixed(2)

}

describe("the totalPhoneBill function", function() {
  it("should return total phone bill", function() {
    assert.equal('R0.00', totalPhoneBill('total'))
  })
})
