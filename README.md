BackEnd: Firebase Cloud Firestore
Redux - redux-thunk
Authentication: Firebase (email/password)

App flow:

Splash Screen -> check if the user has an active session, then redirect to sign in/sign up screen or homescreen

Sign In/ Sign up: allow the user to create a new account and sign in

Home screen: Show the user name, logout button, trophies amount, play button and leaderboard button

Play: if the user win, 1 trophie will be added to firebase and reducer

Realtime Leaderboard: fetch from firebase the trophies collection and populate the reducer and order by the amount of trophies and keeps listening to updates.

///////////////////

TODO:

Multiplayer: the user clicks on "play online" and the app will search for another player and put them together in the same room. I am considering to use Pusher to this task but i will try to do with Firestore realtime updates.

UI Improvement: it is currently really basic.

