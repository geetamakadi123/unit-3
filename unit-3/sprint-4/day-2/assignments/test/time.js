function convertsTime(time){
    let res=""
    if(time<1000){
      res+=time+"millisecond"
    }else if(time>1000 && time<60000){
      res+=time/1000 + "second"
    }else if(time >60000 && time <360000){
      res+=time/60000 + "minutes"
    }else{
      res+=time/360000 + "hours"
    }
      return res
    
  }
  // export {convertTime}

  function TaxCalculator(amounts){
    let tax=0
    if(amounts <= 250000){
      tax+="No Tax"
    }
    else if(amounts > 250000 && amounts < 500000){
      tax+=0.1 * amounts
    }
    else if(amounts >= 500000  && amounts <= 1000000){
      tax+=0.2 * amounts
    }
    else if( amounts > 1000000){
      tax+=0.3 * amounts
    }

    return tax
  }

  function SavingCalculator(totalincome){
    let saving=0
    if(totalincome <= 500000){
      saving+=totalincome - (0.5 * totalincome)
    }
    else if(totalincome > 500000 && totalincome <= 1000000){
      saving+=totalincome - (0.3 * totalincome)
    }
    else if(totalincome > 1000000){
      saving+=totalincome - (0.1 * totalincome)
    }
    
    return saving
  }

  export {convertsTime, TaxCalculator, SavingCalculator}