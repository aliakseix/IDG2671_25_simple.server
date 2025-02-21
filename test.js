import appRunningPromise from "./server.js";

const TIMEOUT = 3000;

const timeoutPr = new Promise((resolve, reject) => {
    setTimemout(()=> {
        reject(`server has not started in ${TIMEOUT}ms - presuming it wont start at all...`);
    }, TIMEOUT)
});
// mdn promise race 
Promise.race([appRunningPromise, timeoutPr])
.then(app=> {
    app.close();
    console.log("app launchin test run ok");
    process.exit(0); // 0 means success
})
.catch(e=> {
    console.log("Failed app lauching tests.");
    process.exit(1); // 1 means an error happended
});

/* just some testÆ*/