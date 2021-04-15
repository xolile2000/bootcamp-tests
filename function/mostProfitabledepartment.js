function mostProfitableDepartment(salesdata){
    const dataMap = {};
   
    for (var i in salesdata){
     
      const addDept = salesdata[i];
      dataMap[addDept.department] = 0;
    }
    
   
   for(var i in  salesdata){
      const addDept = salesdata[i];
     
      var currentDeptTotal = dataMap[addDept.department];
      currentDeptTotal += addDept.sales;
      dataMap[addDept.department] = currentDeptTotal;
    }
 var currentMaxSales = 0;
 var currentDep = "";
  for(const salesDatas in dataMap){
 const currentDepSales = dataMap[salesDatas];
    if(currentDepSales > currentMaxSales){
    currentMaxSales = currentDepSales;
      currentDep = salesDatas
      
    }
  }
  return currentDep
}


function mostProfitableDay(salesdataDay){
    
    const dataMap = {};
   
    for (var i in salesdataDay){
     
      const addDept = salesdataDay[i];
      dataMap[addDept.day] = 0;
    }
    
   
   for(var i in  salesdataDay){
      const addDept = salesdataDay[i];
     
      var currentDeptTotal = dataMap[addDept.day];
      currentDeptTotal += addDept.sales;
      dataMap[addDept.day] = currentDeptTotal;
    }
 var currentMaxday = 0;
 var currentday = "";
  for(const salesDatas in dataMap){
 const currentprofitday = dataMap[salesDatas];
    if(currentprofitday > currentMaxday){
    currentMaxday = currentprofitday;
      currentday = salesDatas
      
    }
  }
  return currentday
}