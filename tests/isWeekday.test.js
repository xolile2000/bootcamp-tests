describe('isWeekday',function(){
    it(' should return true if the string parameter passed is a weekday',function(){
        assert.equal(true,isWeekday("Monday"))
    });
    it("should return false if string parameter passed is a weekend",function(){
        assert.equal(false,isWeekday("Sunday"))
    });
 });

// describe('isWeekday',function(){
//     it("sholud return a number of registrations numbers in a string",function(){
//         assert.equal(true,isWeekday("Monday"))
//     });
    // it('should return true if registration numbers are equal to 3',function(){
        // assert.equal(true,isWeekdaycountRegNumber('regCount'))
    // });
    // });