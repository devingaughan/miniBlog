$(function () {
    var APPLICATION_ID = "72AB025C-DA9E-C720-FF74-AF6DEA817100",
        SECRET_KEY = "574B6FB6-E894-BB40-FF6A-653373646F00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     
     
     var loginScript = $("#login-template").html();
     var loginTemplate = Handlebars.compile(loginScript);
     
     $('.main-container').html(loginTemplate);
     
     $(document).on('submit', 'form-signin', function(event){
         event.preventDefault();
         
         var data = $(this).serializeArray(),
         email = data[0].value,
         password = data[1].vale;
         
         Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
     });
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}




