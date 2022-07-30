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

  export { TaxCalculator, SavingCalculator}