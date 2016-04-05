$(function () {
    var APPLICATION_ID = "72AB025C-DA9E-C720-FF74-AF6DEA817100",
        SECRET_KEY = "574B6FB6-E894-BB40-FF6A-653373646F00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     var postsCollection = Backendless.Persistence.of(Posts).find();
   
     console.log(postsCollection);
     
     var wrapper = {
         posts: postsCollection.data
     };
     
     Handlebars.registerHelper('format', function (time) {
         return moment(time).format("dddd, MMMM Do YYYY");
     });
     
     var blogScript = $("#blogs-template").html();
     var blogTemplate = Handlebars.compile(blogScript);
     var blogHTML = blogTemplate(wrapper);
     
     $('.main-container').html(blogHTML);
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}


