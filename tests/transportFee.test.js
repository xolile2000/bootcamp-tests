describe("transportFee",function(){
    it("should return a string with the right price based on the shift worked",function(){
        assert.equal("R20",transportFee("morning"));
    
    });
    it("should return a string with the right price based on the shift worked",function(){
        assert.equal("R10",transportFee("afternoon"));
    
    });
    it("should return free if the shift was nigthshift",function(){
        assert.equal('free',transportFee("nigthshift"));
    
    });

});