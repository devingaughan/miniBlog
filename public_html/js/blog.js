$(function () {
    var APPLICATION_ID = "72AB025C-DA9E-C720-FF74-AF6DEA817100",
        SECRET_KEY = "574B6FB6-E894-BB40-FF6A-653373646F00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     var user = new Backendless.User();
     user.email = "tigrandrago@gmail.com";
     user.password ="r3atgp3r";
     Backendless.UserService.register(user);
     
     
});

