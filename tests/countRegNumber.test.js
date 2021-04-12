describe("countRegNumber",function(){
it("sholud return a number of registrations numbers in a string",function(){
    assert.equal(1,countRegNumber("regCount"))
});
it('should return true if registration numbers are equal to 3',function(){
    assert.equal(true,countRegNumber('regCount'))
});
});