FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('single_col', { main: 'posts' })
  }
})

FlowRouter.route('/posts', {
  name: 'posts',
  action: function() {
    BlazeLayout.render('single_col', { main: 'posts' })
  }
})

FlowRouter.route('/posts/:seo_url', {
  name: 'post',
  triggersEnter: [function(context) {
    Session.set('seo_url', context.params.seo_url)
    console.log(context.params.seo_url)
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('single_col', { main: 'post' })
  }
})