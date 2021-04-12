describe("countAllfromTown",function(){
    it("should return the number of registration numbers from a certain town",function(){
        assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        
    
    });
    it('should return the number of registration numbers from Paarl',function(){
        assert.equal(0,countAllFromTown('CJ 124,CY 567,CJ 345, CJ 456,CJ 341','CL'));

    });
});