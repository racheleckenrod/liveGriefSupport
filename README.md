Now, I am somewhat baffled by this, I thought I had a README.md in here already..

Escape Velocity by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


A new responsive template featuring a flat (but not too flat) minimalistic design, spacious
layout, and styling for all basic page elements. Its demo images* are courtesy of the supremely
talented photographer Felicia Simion. If you like photography or just enjoy being blown away by
awesome stuff, check out her portfolio for more stunning images:

***Deleted website link***

(* = Not included! Only meant for use with my own on-site demo, so please do NOT download
and/or use any of Felicia's work without her explicit permission!)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn

PS: Not sure how to get that contact form working? Give formspree.io a try (it's awesome).


Credits:

	Demo Images:
		Felicia Simion (ineedchemicalx.deviantart.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)


		many thanks to the community of 100devs


		Big thanks to the community of 100devs for all the support.


		new comment to the readme 
    
		Many thanks to Brad @ Travery Media for his many instructional videos.




		Big thanks to the community of 100devs for all the support.

***
after spending the day yesterday with rebasing etc, I am ready to approad coding differently I created this branch brigde to help me work out the interfacing between the two sites that is only a mvp of the final product that will make much of this unnecessary, but serves me well as a learning experience. for example: the sessions and using the guest route- In the other site I am going to eventually abondon, I need to set up a way to have the user and guest user be able to submit forms or restrict access to the chatrooms or that page alltogether which would orgininate here where they fin the link that points to grief-support, aka the chat. I see right now that the process is still not being respected as all this info belongs on the new branch's readne, and not so much here, 
***

learning the lesson from the last week. make another README.md, as there is not one here right now, only this .txt file I may have done something "wrong" but I wanted to have on e in here, I think it went to 
heroku. in this :

racheleckenrod@Rachels-Air LiveGriefSupport % git remote
heroku-staging
origin
racheleckenrod@Rachels-Air LiveGriefSupport % git push heroku-staging
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 8 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (14/14), 2.43 KiB | 2.43 MiB/s, done.
Total 14 (delta 10), reused 0 (delta 0), pack-reused 0
remote: Pushed to branch other than [main, master], skipping build.
To https://git.heroku.com/live-grief-support.git
   706d9b6..988ac06  headFix -> headFix

   and, Brother-Pete, this is the big deal. it ate my HEAD. 

   racheleckenrod@Rachels-Air LiveGriefSupport % git remote
heroku-staging
origin
racheleckenrod@Rachels-Air LiveGriefSupport % git push heroku-staging
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 8 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (14/14), 2.43 KiB | 2.43 MiB/s, done.
Total 14 (delta 10), reused 0 (delta 0), pack-reused 0
remote: Pushed to branch other than [main, master], skipping build.
To https://git.heroku.com/live-grief-support.git
   706d9b6..988ac06  headFix -> headFix


   To make it easier to see and why it is so important, here is a little more of the console.log:


racheleckenrod@Rachels-Air LiveGriefSupport % git commit -m "the lesson I am beginning to learn is about having my work online"
[headFix 988ac06] the lesson I am beginning to learn is about having my work online
 10 files changed, 76 insertions(+), 192 deletions(-)
 create mode 100644 README.md
 delete mode 100644 public/chat.html
 delete mode 100644 public/index.html
 delete mode 100644 public/index2.html
 delete mode 100644 public/index3.html
 rename utils/{messages.js => chatMessages.js} (100%)
 rename utils/{users.js => chatUsers.js} (100%)
racheleckenrod@Rachels-Air LiveGriefSupport % git status
On branch headFix
Your branch is ahead of 'origin/headFix' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
racheleckenrod@Rachels-Air LiveGriefSupport % git push origin/headFix
fatal: 'origin/headFix' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
racheleckenrod@Rachels-Air LiveGriefSupport % git fetch origin/headFix
fatal: 'origin/headFix' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
racheleckenrod@Rachels-Air LiveGriefSupport % git remote
heroku-staging
origin
racheleckenrod@Rachels-Air LiveGriefSupport % git push heroku-staging
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 8 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (14/14), 2.43 KiB | 2.43 MiB/s, done.
Total 14 (delta 10), reused 0 (delta 0), pack-reused 0
remote: Pushed to branch other than [main, master], skipping build.
To https://git.heroku.com/live-grief-support.git
   706d9b6..988ac06  headFix -> headFix
racheleckenrod@Rachels-Air LiveGriefSupport % git status
On branch headFix
Your branch is ahead of 'origin/headFix' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
racheleckenrod@Rachels-Air LiveGriefSupport % git checkout tempFix
Switched to branch 'tempFix'
Your branch is ahead of 'heroku-staging/tempFix' by 1 commit.
  (use "git push" to publish your local commits)
racheleckenrod@Rachels-Air LiveGriefSupport % 


To explain it in other words, every time you update your website (on heroku, anyway, and this was for free which is ending in a month)...

it keeps what you just did .

like taking the most recent work and removing it from you. leaving you without a HEAD. 

so, if you don't know that that is what is happening, you can't make something nice for heroku. this is why my best code was at heroku and not in my computer. They dont take a picture of your painting, they keep your painting. So you need to make them something that you don't want back. not show them and  they get a "version" like a copy, but like make them a print of the original so they can have it. It was a lot of work to get my HEADs back... those are commits they take and github doesn't have access to the commits heroku has. So you need to make a whole package to give away. I can't probably explain what it felt like in my body when I got those HEADs back the other day. I have no problem making them a file and giving it to them ... like that other README.md that I just made and they have the ONLY (I think) "copy" of it. the main/master thing 

So, for me now, what I see there is to do... is an old fashioned copy/paste of this text file into another NEW README.md, that eventually will get picked up by git, and want to merge into the other original that I made, essentially leaving me with one. OK?



Now, I made this in the other file so that the person who has this LICENSE in MY file can underststand what she needs to do for herself.

hahahaah---here is a copy/paste from the other file, but just puts in the end of what I wanted to include with somebody else's thing:



To explain it in other words, every time you update your website (on heroku, anyway, and this was for free which is ending in a month)...

it keeps what you just did .

like taking the most recent work and removing it from you. leaving you without a HEAD. 

so, if you don't know that that is what is happening, you can't make something nice for heroku. this is why my best code was at heroku and not in my computer. They dont take a picture of your painting, they keep your painting. So you need to make them something that you don't want back. not show them and  they get a "version" like a copy, but like make them a print of the original so they can have it. It was a lot of work to get my HEADs back... those are commits they take and github doesn't have access to the commits heroku has. So you need to make a whole package to give away. I can't probably explain what it felt like in my body when I got those HEADs back the other day. I have no problem making them a file and giving it to them ... like that other README.md that I just made and they have the ONLY (I think) "copy" of it. the main/master thing 

So, for me now, what I see there is to do... is an old fashioned copy/paste of this text file into another NEW README.md, that eventually will get picked up by git, and want to merge into the other original that I made, essentially leaving me with one. OK?



I put a little more info in the other README in the last commit, but even for me, keeping track of two README files in each branch is a little much, so I'll be making this last comment in the README.txt file and be leaving it behind, moving forward with the .md at least in this project. I can only assume they will be reunited at some point and updated but more likely merged.

-so long-

I was wondering how to get this file back and just learn that if I start typing in it it comes right back,
this is not to be liked or disliked but known. 


However long that took me, I am on the bridge which is my idea of a working branch for this repo that gets merged into main with beautiful wonder updates as we go along so that I am no longer working directly on main, but sticking to the bridge and incorporating my changes in the main. This code is live online and needs to have a stable branch as I continue to improve it. it is going to stay a separate site from the chats, but linked to the other one and will teach me boatloads aboiut sessions and logging in and websockets and all kinds of things. a major one in how to collaborate with others even though it is just me. I intend to work on  this project with room for contributions from other people, so I need to learn how to be set up that way.

with that said, I am going to make this commit and then merge it into main by going there and merging this into her.


This code is ok, but the form didnt send and took the site down, I thought I was sending it from localhost, but I guess I was running live in chat.





Escape Velocity by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


A new responsive template featuring a flat (but not too flat) minimalistic design, spacious
layout, and styling for all basic page elements. Its demo images* are courtesy of the supremely
talented photographer Felicia Simion. If you like photography or just enjoy being blown away by
awesome stuff, check out her portfolio for more stunning images:
(* = Not included! Only meant for use with my own on-site demo, so please do NOT download
and/or use any of Felicia's work without her explicit permission!)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn

PS: Not sure how to get that contact form working? Give formspree.io a try (it's awesome).


Credits:

	Demo Images:
		Felicia Simion (ineedchemicalx.deviantart.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)

		Big thanks to the community of 100devs for all the support.

		new comment to the readme 
    
		Many thanks to Brad @ Travery Media for his many instructional videos.




		Big thanks to the community of 100devs for all the support.

		Fixing a million detached heads isn't that fun, oh how I wish I had not 
		listened to other people when deleting what I made..
	this could be part two of finding the heroku branch if it even works that 
	way, looks like this headfix branch I am on does not get pushed to heroku
	 and the heroku/headfix does, or might.. ? i am certainly going to try.


Days later I am back with a much more advanced perspective on working with git.
 I am now noticing that this HEADfix does not include my readme and this readme 
 is the old .txt file. so I am going to make a copy/paste of this text, and put 
 it in a new file that i can only assume at this point will be connected up to 
 the old one whether I like it or not, so just as I b put a txt file up in the
  FREEDOM branch an hour or so ago now, I am going to double up on READme's in 
  this HEAD fix branch. I have a new deployment already up at heroku of the 
  linked chat site- that really is only temporary anyway....

I am glad I hung on to all this info so I understand and can choose wisely 
how to proceed. Removing files here..



That other readme had nine instances of interference from the herokuTail branch 
of my code

It is up on github right now, with the markings left, with just enough removed,
 i think - like half the <<<< things. My hope is that my doing thing in the way that
 I did, I was able to get the code to be my own work. lots of time I spent getting to 

 know the legos, so to speak, but not so much time yet able to build something,

 it is a little more difficult to write a story when your first page keeps getting 
 consumed.

 as usual here, Im going to leave this readme.txt but first this time I'll copy/paste
 it so I can have the text in my readme too.







 http://ineedchemicalx.deviantart.com/

 this little thingo might be responsibe for some funny business??