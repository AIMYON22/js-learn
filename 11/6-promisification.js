function promisify(f) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback(err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            }

            args.push(callback);

            f.call(this, ...args)
        })
    }
}

// 用法：
// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise(...).then(...);