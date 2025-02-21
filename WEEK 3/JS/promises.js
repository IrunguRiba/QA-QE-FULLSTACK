/*
Promises are there to solve cllback problems
A promise is:
1: pending
2:Fulfillled   .then
3:Rejected     .catch

Syntax
let promise =new promise((resolve, reject)=>{

    Async Operation
    if(operation is successiful){
    resolve(`success msg)
    }else{
    reject(error msg)
    }

    myPromise.then(result={
    Handle success
    })
.then is used to solve 
.catch is used to handle error

If the promise is false it will reject


*/

// Log in function returns a Promise
function logInUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Logged into Netflix");
            resolve({ userEmail: email, userPassword: password });
        }, 1000);
    });
}

// Get all videos function returns a Promise
function getAllVideos({ userEmail }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("All watched videos");
            resolve({ userEmail, videosInfo: ["Deadpool", "BodyGuard", "Lord of the Rings"] });
        }, 1000);
    });
}

// Get video info function returns a Promise
function getVideoInfo(videosInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We have the details of the VideoInfo");
            resolve({ video: videosInfo[1] }); // "BodyGuard"
        }, 1000);
    });
}

// Using .then() and .catch() to execute the sequence of async programming
function execute() {
    logInUser("jay@duff.com", "12345")
        .then(user => {
            return getAllVideos(user);
        })
        .then(allVideos => {
            return getVideoInfo(allVideos.videosInfo);
        })
        .then(videoInfo => {
            console.log("Selected video info:", videoInfo.video);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

execute();
