describe("fromWhere",function(){
    it("should return  Bellville if restristration number is from CY",function(){
        assert.equal("Bellville",fromWhere('CY'));
        
    
    });
    it('should return paarl if the registration number is from CJ',function(){
        assert.equal('Paarl',fromWhere('CJ 435 876'))
    });
    it('should return some other place! if registration number is not found',function(){
        assert.equal("Some other place!",fromWhere("CC 564 657"))
    });
});