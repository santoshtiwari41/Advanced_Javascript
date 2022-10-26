function register() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("register  end");
            resolve();
            
          }, 1000);

    })
    
  }
  function sendEmail() {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Email send");
            resolve();
          }, 4000);
          
      })
    
  }
  function login() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("login end");
            resolve();
          }, 5000);
        
    })
   
  }
  function getuserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("get user data");
            resolve();
      
          }, 6000);
        
    })
    
  }
  function displayuserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("user data displayed");
            resolve();
          }, 1000);
        })
       }
// register()
// .then(sendEmail)
// .then(login)
// .then(getuserData)
// .then(displayuserData)
//   console.log("other application work");
 async function authenticate (){
    await register();
    await sendEmail();
    await login();
    await getuserData();
    await displayuserData();
}
authenticate();
console.log("other application work");