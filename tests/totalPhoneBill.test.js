describe("totalPhoneBill",function(){
    it("should return sum of the total phone bill",function(){
        assert.equal("R7.45",totalPhoneBill('call, sms, call, sms, sms'));
    
    });
    it('should return R0.00 if the string is incorrect',function(){
        assert.equal("R0.00",totalPhoneBill('R7.45'))
    })

});