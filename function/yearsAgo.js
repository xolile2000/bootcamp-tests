function yearsAgo(yearAgo){
    var today = new Date()
     const year = today.getFullYear() - yearAgo
     return year
    }
    //yearsAgo(1999)