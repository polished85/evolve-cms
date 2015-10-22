Template.posts.helpers({

	posts: function(){
		var posts = Posts.find({}).fetch()
		console.log(posts)
		return posts
	}

})