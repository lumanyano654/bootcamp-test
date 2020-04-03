function findItemsOver20(itemList){
  var highQty = [];

  for (var x=0;x<itemList.length;x++){
     if(itemList[x].qty > 20){
    highQty.push(itemList[x])
  }

  }
  return highQty
}




describe("the findItemsOver20 function", function() {
  it("should give out those with quantity over 20", function() {
    assert.equal(0, findItemsOver20(20))
  })
})
