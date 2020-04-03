function diff_years(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));

 }
{
 dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("April 02, 2020 11:48:00");
console.log(diff_years(dt1, dt2));
}

describe("the yearsAgo function ", function() {

  it("should give out the years ", function() {
    assert.equal(6, diff_years(dt1, dt2))

  })
})
