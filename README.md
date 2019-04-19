# venm-ig
Instagram clone in the VENM stack.

Thanks to Tyler Potts for the basic video guide on the MVP. Based this off his video series.

Most code is similar, however anything after part 6 or there abouts is mostly mine. However, anyone is allowed to grab and use it :).


# Functionality:
Login
Register
Logout (lol)
Search Users
Go to Searched User profile
Edit profile (Just not password yet, the before event doesnt trigger right)
Add a new post.

# Todo/Incoming:
Follow users
Unfollow users
DM's
Like/Comment on posts
Notification on Like/Comment/Follow

# Less important todo:
Update profile with picture
Video
And some more but I'm too lazy to think about what to add.


# How to start:

Download or clone the repo.

Open up 2 instances of your terminal/cmd/whatever you use (On W10 I use ConEMU because its sick bro)

First instance navigate to the client folder and use the command:

`npm i && npm run serve`

(Note: you no longer have to use the npm i command after the first run, its just to make sure the dependencies are there)

Second instance navigate to the server folder and use the command:

`npm i && npm run dev`

(Note: you no longer have to use the npm i command after the first run, its just to make sure the dependencies are there)

Make sure you have mongoD running and it should be fine!
