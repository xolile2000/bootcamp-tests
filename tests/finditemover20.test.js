describe("findItemsOver20",function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    it("should return all the products that have a quantity higher than 20.",function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}],findItemsOver20(itemList))
      
    
    });
     
    
});