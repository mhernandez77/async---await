    //Notes:
    // promise fxns with timers will execute at three seconds
    // async and await will be used to execute in series, that is
    // one after the other.
        function a() {
    return new Promise(function (resolve) {
    setTimeout(function () {
    resolve('a');
}, 3000);
});
}
    function b() {
    return new Promise(function (resolve) {
    setTimeout(function () {
    resolve('b');
}, 3000);
});
};
    function c() {
     return new Promise(function (resolve) {
        setTimeout(function () {
        resolve('c');
        }, 3000);
    });
};
    //list holds functions
    const list = [a,b,c];

    // for loop to step into each function in the list
    (async function() {
        for (fn of list) {
            //the body of the for loop contains the callback
            // function assigned to the result variable
            //*keyword 'await' is used (MUST HAVE ASYC WRAPPER*added to line 30)
            //wrapper includes the front & back end parathesis & () to execute at the back
            const result = await fn();
            //result is printed to the console
            console.log(result);
        }
    })();