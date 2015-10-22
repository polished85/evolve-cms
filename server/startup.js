Meteor.startup( function() {

	var seedData = [
		{
			title: 'No, this is Mount Everest.',
			seo_url:'this-is-mount-everest',
			text: 'You should flip on the Discovery Channel from time to time. But I guess you can&rsquo;t now, being dead and all. This is my gun, Clyde! Well, what is it today? More spelunking? Cities fall but they are rebuilt. Heroes die but they are remembered. This is the AK-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. That tall drink of water with the silver spoon up his ass. don&rsquo;t p!ss down my back and tell me it&rsquo;s raining. don&rsquo;t p!ss down my back and tell me it&rsquo;s raining. Boxing is about respect. Getting it for yourself, and taking it away from the other guy. You see, in this world there&rsquo;s two kinds of people, my friend: Those with loaded guns and those who dig. You dig. I now issue a new commandment: Thou shalt do the dance. Cities fall but they are rebuilt. Heroes die but they are remembered.',
			categories: []
		},
		{
			title: 'This is the AK-47 assault rifle',
			seo_url: 'ak47-assault-rifle',
			text: 'The preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. Cities fall but they are rebuilt. Heroes die but they are remembered. don&rsquo;t p!ss down my back and tell me it&rsquo;s raining. Mister Wayne, if you don&rsquo;t want to tell me exactly what you&rsquo;re doing, when I&rsquo;m asked, I don&rsquo;t have to lie. But don&rsquo;t think of me as an idiot. The man likes to play chess; let&rsquo;s get him some rocks. When a naked man&rsquo;s chasing a woman through an alley with a butcher knife and a hard-on, I figure he&rsquo;s not out collecting for the Red Cross. You measure yourself by the people who measure themselves by you. Here. Put that in your report!" AND "I may have found a way out of here. Dyin&rsquo; ain&rsquo;t much of a livin&rsquo;, boy. Cities fall but they are rebuilt. Heroes die but they are remembered. Ever notice how sometimes you come across somebody you shouldn&rsquo;t have F**ked with? Well, I&rsquo;m that guy. Are you feeling lucky punk?',
			categories: []
		},
		{
			title: 'Bruce&hellip; I&rsquo;m God. Bruce&hellip; I&rsquo;m God',
			seo_url: 'im-god-bruce',
			text: 'I once heard a wise man say there are no perfect men. Only perfect intentions. I did the same thing to Gandhi, he didn&rsquo;t eat for three weeks. Are you feeling lucky punk It only took me six days. Same time it took the Lord to make the world. The man likes to play chess; let&rsquo;s get him some rocks. Well, do you have anything to say for yourself? Well, what is it today? More spelunking? Rehabilitated? Well, now let me see. You know, I don&rsquo;t have any idea what that means. No, this is Mount Everest. You should flip on the Discovery Channel from time to time. But I guess you can&rsquo;t now, being dead and all. Cities fall but they are rebuilt. Heroes die but they are remembered.',
			categories: []
		},
		{
			title: 'Marketing to the Billionaire',
			seo_url: 'marketing-to-the-billionaire',
			text: 'I don&rsquo;t think they tried to market it to the billionaire, spelunking, BASE-jumping crowd. You see, in this world there&rsquo;s two kinds of people, my friend: Those with loaded guns and those who dig. You dig. Are you feeling lucky punk Let me tell you something my friend. Hope is a dangerous thing. Hope can drive a man insane. When a naked man&rsquo;s chasing a woman through an alley with a butcher knife and a hard-on, I figure he&rsquo;s not out collecting for the Red Cross. You measure yourself by the people who measure themselves by you. You measure yourself by the people who measure themselves by you. I did the same thing to Gandhi, he didn&rsquo;t eat for three weeks. This is my gun, Clyde! The man likes to play chess; let&rsquo;s get him some rocks. Multiply your anger by about a hundred, Kate, that&rsquo;s how much he thinks he loves you. Bruce... I&rsquo;m God.',
			categories: []
		},
		{
			title: 'I did the same thing to Gandhi',
			seo_url: 'i-did-the-same-thing-to-Gandhi',
			text: 'I did the same thing to Gandhi, he didn&rsquo;t eat for three weeks. Dyin&rsquo; ain&rsquo;t much of a livin&rsquo;, boy. Let me tell you something my friend. Hope is a dangerous thing. Hope can drive a man insane. I don&rsquo;t think they tried to market it to the billionaire, spelunking, BASE-jumping crowd. Boxing is about respect. Getting it for yourself, and taking it away from the other guy. That tall drink of water with the silver spoon up his ass. Well, do you have anything to say for yourself? This is my gun, Clyde! You want a guarantee, buy a toaster. Here. Put that in your report!" AND "I may have found a way out of here. Circumstances have taught me that a man&rsquo;s ethics are the only possessions he will take beyond the grave. Well, do you have anything to say for yourself?',
			categories: []
		},
		{
			title: 'Man&rsquo;s gotta know his limitations',
			seo_url: 'man-has-to-know-his-limitations',
			text: 'Circumstances have taught me that a man&rsquo;s ethics are the only possessions he will take beyond the grave. Well, what is it today? More spelunking? Here. Put that in your report!" AND "I may have found a way out of here. No, this is Mount Everest. You should flip on the Discovery Channel from time to time. But I guess you can&rsquo;t now, being dead and all. Man&rsquo;s gotta know his limitations. What you have to ask yourself is, do I feel lucky. Well do ya&rsquo; punk? Man&rsquo;s gotta know his limitations. It only took me six days. Same time it took the Lord to make the world. Dyin&rsquo; ain&rsquo;t much of a livin&rsquo;, boy. Mister Wayne, if you don&rsquo;t want to tell me exactly what you&rsquo;re doing, when I&rsquo;m asked, I don&rsquo;t have to lie. But don&rsquo;t think of me as an idiot. When a naked man&rsquo;s chasing a woman through an alley with a butcher knife and a hard-on, I figure he&rsquo;s not out collecting for the Red Cross.',
			categories: []
		}
	]	


  var posts = Posts.find({}).fetch()
  var len = posts.length
  var seedLen = seedData.length

	/* if db is empty, seed some posts */
  if(len === 0) {

		for(i=0; i<seedLen; i++){
			Posts.insert(seedData[i])
		}

	}
})