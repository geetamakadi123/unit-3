
function bankServer(){
    // logic
    return true // false;
}

let payment_promise = new Promise(function(resolve,reject){
   let pin = bankServer();

   setTimeout(function(){
    if(pin){
        resolve("Payment successfull!");
    
       }else{
        reject("Try again Later.");
       }
   },3000)

   
});
// handling the promise

//.then .catch
 // async await

 let image = document.getElementById("pay_img")
//  payment_promise.then(function(res){
//     console.log(res);
//     image.src = "https://c.tenor.com/K2UGDd4acJUAAAAM/load-loading.gif";
//  });

//  payment_promise.catch(function(err){
//     console.log(err);
//     image.src = "https://c.tenor.com/flmQIupAKBkAAAAC/steven-he-failure.gif";
//  });
//console.log(payment_promise);


async function content(){
    try{
        let res = await payment_promise;// take a time
        console.log(res);
        image.src = "https://c.tenor.com/K2UGDd4acJUAAAAM/load-loading.gif";
    }catch(err){
        console.log(err);
        image.src = "https://c.tenor.com/flmQIupAKBkAAAAC/steven-he-failure.gif";

    }
}

content();

