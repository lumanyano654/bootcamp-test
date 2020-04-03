
function isWeekday(day){
    return !day.startsWith("S");
}


 describe("The isWeekday function ", function(){

    it ("should say that Monday is a weekday", function() {
        assert.equal(true, isWeekday('Monday'));
    });

    it ("should say that Friday is a weekday", function() {
        assert.equal(true, isWeekday('Friday'));
    });

    it ("should say that Sunday is not weekday", function() {
        assert.equal(false, isWeekday('Sunday'));
    });

    it ("should say that Saturday is not weekday", function() {
        assert.equal(false, isWeekday('Saturday'));
    });



});
