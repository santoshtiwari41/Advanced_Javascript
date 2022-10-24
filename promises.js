function register(callback) {
    setTimeout(() => {
      console.log("register  end");
      callback();
    }, 1000);
  }
  function sendEmail(callback) {
    setTimeout(() => {
      console.log("Email send");
      callback();
    }, 4000);
  }
  function login(callback) {
    setTimeout(() => {
      console.log("login end");
      callback();
    }, 5000);
  }
  function getuserData(callback) {
    setTimeout(() => {
      console.log("get user data");
      callback();

    }, 6000);
  }
  function displayuserData() {
    setTimeout(() => {
      console.log("user data displayed");
    }, 1000);
  }
  register(() => 
  {
    sendEmail(()=>
    {
        login(()=>
        {
            getuserData(()=>
            {
                displayuserData();
            });
       
        });
        
    });
  });
  console.log("other application work");