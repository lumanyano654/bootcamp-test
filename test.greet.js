describe('the greet function' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
 it("should greet Lindani with 'hello, Lindani'", function(){
   assert.equal("hello, Lindani", greet("Lindani"))

 })

 it ("should greet Zola with 'hello, Zola'", function(){
    assert.equal("hello, Zola", greet("Zola"))
 })

});
