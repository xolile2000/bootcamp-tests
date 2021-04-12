describe("greet",function(){
it("should return Hello, Bob",function(){
    assert.equal(greet('Bob'), 'Hello, Bob');

});

it("should return undfined",function(){
    assert.equal(greet(''), 'Hello, ');

});

it("should return Hello, xolile",function(){
    assert.equal(greet('xolile'), 'Hello, xolile');

});
it("should return true",function(){
    assert.equal(greet("Bob"), "Hello, Bob")
});


});
