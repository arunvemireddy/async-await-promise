const axiosRequest = require('axios');

// Promise
function getActivityUsingPromise(){
    axiosRequest.get('https://www.boredapi.com/api/activity')
    .then(response=>{
        console.log(`promise success msg : ${response.data.activity}`);
    })
    .catch(error=>{
        console.log(`promise : ${error}`)
    });
    console.log("executed before promise");
}

// async and await
async function getActivityUsingAsync(){
    try {
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity');
        console.log(`async success msg : ${response.data.activity}`);
    } catch (error) {
        console.log(`async : ${error}`)
    }
    console.log("executed before async");
}

getActivityUsingPromise();
getActivityUsingAsync();

