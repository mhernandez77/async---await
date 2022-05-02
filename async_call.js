function resolveAfter2Seconds() {
    return new Promise(resolve => {
        //settime out fxn fires in 2 seconds
        setTimeout(() =>{
            resolve('resolved');
        }, 2000);
    });
}
//
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
}

