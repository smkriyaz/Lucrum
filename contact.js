

const firebaseConfig = {
    apiKey: "AIzaSyCFMrg_SlJB_JjfRyGVeP3OwszjSHzjqB4",
    authDomain: "contactus-bd15e.firebaseapp.com",
    databaseURL: "https://contactus-bd15e-default-rtdb.firebaseio.com",
    projectId: "contactus-bd15e",
    storageBucket: "contactus-bd15e.appspot.com",
    messagingSenderId: "145726831067",
    appId: "1:145726831067:web:6883e2668e01791cb98ffe"
  };

  firebase.initializeApp(firebaseConfig);

 var contactusDB= firebase.database().ref('contactus');

 document.getElementById("contactus").addEventListener("submit" , submitForm);

 function submitForm(e){
    e.preventDefault();

    var first= getElementVal("fname");
    var second =getElementVal("lname");
    var cnumber=getElementVal("cnumber");
    var email=getElementVal("email");
    var country=getElementVal("country");
    var address=getElementVal("address");
    var describe=getElementVal("subject");

    saveMessages(first ,second,cnumber,email,country,address,describe);
    document.querySelector(".message").style.display = "block";

   
 }

 const saveMessages = (first, second,cnumber,email,country,address,describe) =>{
    var newcontactus= contactusDB.push();
    newcontactus.set({
        first : first,
        second : second ,
        cnumber : cnumber,
        email : email,
        country : country,
        address : address,
        describe : describe,
    });
 };

 const getElementVal =  (id) =>
 {
    return document.getElementById(id).value;
 };



//  https://youtu.be/RAWHXRTKTHw