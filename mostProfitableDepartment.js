function mostProfitableDepartment(department1){
var map = {};
var depName = '';
 for (var x=0;x<department1.length;x++){
   var myDepartment = department1[x].department
    if(map[myDepartment] === undefined){
       map[myDepartment] = 0;
    }
        map[myDepartment] += department1[x].sales
 }


  var greaterDep = "";
  var greaterSales = 0;

  for( x in map){
     if(map[x] > greaterSales){
       greaterDep = x
       greaterSales = map[x]

     }

  }return greaterDep
}

describe("the mostProfitableDepartment function", function() {
  it("should give out the most profitable department", function() {
    assert.equal('', mostProfitableDepartment('greaterDep'))
  })
})
