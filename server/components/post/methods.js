 Meteor.methods({

	getPost: function(seoUrl) {
		var post = Posts.findOne({ _id: seoUrl })
		console.log(post)
		return post
  }

})