/* create new mongo collection */
Posts = new Mongo.Collection('posts')

/* define schema for post model */
var Schemas = {};
Schemas.Post = new SimpleSchema({
  title: {
  	type: String,
  	label: 'title'
  },
  seo_url: {
    type: String,
    label: 'seo_url'
  },
  text: {
  	type: String,
  	label: 'title'
  },
	categories: {
	  type: [String],
	  label: 'categories',
	  defaultValue: []
	}
})

/* attach schema to 'Posts' collection */
Posts.attachSchema(Schemas.Post)