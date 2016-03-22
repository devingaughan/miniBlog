$(function () {
    var APPLICATION_ID = "72AB025C-DA9E-C720-FF74-AF6DEA817100",
        SECRET_KEY = "574B6FB6-E894-BB40-FF6A-653373646F00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     var dataStore = Backendless.Persistence.of(Posts);
     var post = new Posts({title: "My First Blog Post", content:"My first Blog Post content", authorEmail:"email@email.com"});
     dataStore.save(post);
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

hello;