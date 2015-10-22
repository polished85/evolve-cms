Template.post.helpers({

	post: function(){
		var seoUrl = Session.get('seo_url')
		console.log(seoUrl)
		var post = Posts.findOne({ seo_url: seoUrl })
		console.log(post)
		return post
	}

})