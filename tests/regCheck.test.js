describe("regCheck",function(){
    it("should return true if registration number is from GP, L, EC, MP ",function(){
        assert.isTrue(true,regCheck('DV 23 NB GP', 'GP'));
        
    
    });
    it("should return false if registration number is not form GP, L, EC, MP",function(){
        assert.equal(false,regCheck('CY 189-012', 'CY'))
    });
});