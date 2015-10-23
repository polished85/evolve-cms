/* function to run on triggersEnter for all protected routes */
function authenticatedRedirect() {
  console.log('running authenticated group triggers')
  // set current route
  var route = FlowRouter.current().route

  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    console.log('user failed authentication. Redirecting to login page.')
    // save attempted route (so we can redirect after user logs in)
    Session.set('redirectAfterLogin', route.path)
    // redirect user to login page
    FlowRouter.go('sign-in')
  } else {
    console.log('user is logged in')
    // continue to originally attempted path
    FlowRouter.go(route.path)
  }
}

/* authenticated group: 
any route that is a member the 'authenticated' group will run 
any group level hooks/triggers before route level hooks/triggers.
*/
var authenticated = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
})

/* authenticated routes */
authenticated.route('/admin', {
  name: 'admin',
  action: function() {
    BlazeLayout.render('single_col', { main: 'admin_posts' })
  }
})