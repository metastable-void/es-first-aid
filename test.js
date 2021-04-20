
require('./es-first-aid');

firstAid.assert(firstAid === firstAid.firstAid);
firstAid.assert('string' === typeof firstAid.VERSION);

console.log('FirstAid object is sane');

const time = firstAid.getTime();
firstAid.assert('number' == typeof time);
firstAid.assert(!isNaN(time));
firstAid.assert(firstAid.isInt(time));
firstAid.assert(false === firstAid.isInt32(NaN));
firstAid.assert(false === firstAid.isInt(NaN));
firstAid.assert(true === firstAid.checkForError(() => (null).foo));
console.log('Miscellaneous tests succeeded');

const obj = {trueValue: true, one: 1};
const encodedObj = firstAid.encodeJson(obj);
const hexObj = firstAid.encodeHex(encodedObj);
const base64Obj = firstAid.encodeBase64(encodedObj);
const decodedHex = firstAid.encodeHex(firstAid.decodeBase64(base64Obj));
const decodedObj = firstAid.decodeJson(firstAid.decodeHex(hexObj));

firstAid.assert(hexObj === decodedHex);
firstAid.assert('object' == typeof decodedObj && null !== decodedObj);
firstAid.assert(true === decodedObj.trueValue);
firstAid.assert(1 === decodedObj.one);
console.log('Encoding/decoding tests passed');

firstAid.assert('00000000' === firstAid.encodeHex(firstAid.crc32Bytes(new ArrayBuffer(0))));
firstAid.assert('d202ef8d' === firstAid.encodeHex(firstAid.crc32Bytes(new ArrayBuffer(1))));
firstAid.assert('8c736521' === firstAid.encodeHex(firstAid.crc32Bytes(firstAid.encodeString('foo'))));
console.log('CRC-32 tests succeeded');

const constructor1 = function() {};
const constructor2 = class {};
const nonConstructor1 = () => {};
const nonConstructor2 = ({f(){}}).f;
const nonConstructor3 = {};

firstAid.assert(true === firstAid.isConstructor(constructor1));
firstAid.assert(true === firstAid.isConstructor(constructor2));
firstAid.assert(false === firstAid.isConstructor(nonConstructor1));
firstAid.assert(false === firstAid.isConstructor(nonConstructor2));
firstAid.assert(false === firstAid.isConstructor(nonConstructor3));

console.log('Constructor tests succeeded');

const nonProxy = {};
const proxy = new Proxy({}, {});
const {proxy: revokedProxy, revoke} = Proxy.revocable({}, {});
revoke();

firstAid.assert(false === firstAid.isRevokedProxy(nonProxy));
firstAid.assert(false === firstAid.isRevokedProxy(proxy));
firstAid.assert(true === firstAid.isRevokedProxy(revokedProxy));

console.log('Proxy tests succeeded');

const promiseValue = Promise.resolve(1);
const normalValue = 1;

const promise1 = firstAid.toPromise(promiseValue);
const promise2 = firstAid.toPromise(normalValue);

firstAid.assert(promise1 instanceof Promise);
firstAid.assert(promise2 instanceof Promise);

const composedPromise = new firstAid.PromiseComposition(Promise.reject(1), Promise.reject(2));

const promiseTest = new firstAid.PromiseComposition(
    promise1.then(value => firstAid.assert('number' == typeof value)),
    promise2.then(value => firstAid.assert('number' == typeof value)),
    composedPromise.rejections().then((rejections) => {
        firstAid.assert(rejections.length === 2);
        firstAid.assert(rejections[0] === 1);
        firstAid.assert(rejections[1] === 2);
        console.log('Promise composition tests succeeded');
    }),
);

promiseTest.rejected((reason) => console.error(reason));
promiseTest.rejections().then((rejections) => {
    if (rejections.length < 1) {
        console.log('All of Promise tests succeeded');
    }
});
