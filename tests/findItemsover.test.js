describe("findItemsOver",function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    var threshold = 20
    it("should return items higher then the thresholder",function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}],findItemsOver(itemList,threshold))
        
    
    });
    it("should return items lower then the thresholder",function(){
        assert.deepEqual([{name : 'pears', qty : 10},
        {name : 'bananas', qty : 3}],findItemsOver(itemList,threshold))
        
    
    });
});