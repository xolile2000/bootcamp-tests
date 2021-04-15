describe("countAllfromTown",function(){
    it("should return the number of registration numbers from a certain town",function(){
        assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        
    
    });
    it('should return 0 if registration number from a certain town has not been found',function(){
        assert.equal(0,countAllFromTown('CJ 124,CY 567,CJ 345, CJ 456,CJ 341','CL'));

    });
});