
require('./es-first-aid');

const nonProxy = {};
const proxy = new Proxy({}, {});
const {proxy: revokedProxy, revoke} = Proxy.revocable({}, {});
revoke();

firstAid.assert(false === firstAid.isRevokedProxy(nonProxy));
firstAid.assert(false === firstAid.isRevokedProxy(proxy));
console.log(firstAid.isRevokedProxy(revokedProxy));
firstAid.assert(true === firstAid.isRevokedProxy(revokedProxy));

const promiseValue = Promise.resolve(1);
const normalValue = 1;

const promise1 = firstAid.toPromise(promiseValue);
const promise2 = firstAid.toPromise(normalValue);

firstAid.assert(promise1 instanceof Promise);
firstAid.assert(promise2 instanceof Promise);

const promiseTest = new firstAid.PromiseComposition(
    promise1.then(value => firstAid.assert('number' == typeof value)),
    promise2.then(value => firstAid.assert('number' == typeof value)),
);

promiseTest.rejected((reason) => console.error(reason));
promiseTest.rejections().then((rejections) => {
    if (rejections.length < 1) {
        console.log('Promise tests succeeded');
    }
});
