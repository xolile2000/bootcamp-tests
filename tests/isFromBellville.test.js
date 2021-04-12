describe("isFromBellville",function(){
    it("should return true if registration number starts with CY",function(){
        assert.isTrue(isFromBellville('CY') , "CY");
        
    
    });

    it("should return false if registration number starts with CP",function(){
        assert.isNotTrue(isFromBellville("CP"),"CP");
    });
    
    
    });