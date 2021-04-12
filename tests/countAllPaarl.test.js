describe("countAllPaarl",function(){
    it("should return the number of registration numbers in a string for paarl registration numbers which start with CJ",function(){
        assert.equal(0,countAllPaarl("counter"));
    
    });
    it('should return true if registration numbers are from Paarl which sart with CJ',function(){
        assert.equal(true,countAllPaarl("CJ 456 765"))
    })
});