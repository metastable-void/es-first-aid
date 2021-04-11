# es-first-aid
The Fundamental Utilities for ECMAScript.

- Missing utility functions for ECMAScript
- Random numbers/bytes...
- UUIDs
- CRC-32
- Most basic general utility classes for various applications
- Base64 encode/decode
- UTF-8 string encode/decode
- Hex string encode/decode
- ...

## API

```
globalThis.firstAid
```

### firstAid.TypedArray : function
TypedArray constructor.

### firstAid.MINUS_ZERO : number
`-0`

### firstAid.createNullPrototypeObject : () => {}
Creates a new null-prototype object.

### firstAid.createReadOnlyProxy<T> : (T) => Proxy<T>
Wraps an object in a read-only Proxy.

### firstAid.isRevokedProxy : (value: any) => boolean
Returns true if the passed object is a revoked Proxy.

### firstAid.isConstructor : (value: any) => boolean
Returns true if the passed object has a valid `[[Construct]]` slot.

### firstAid.toInt32 : (value: any) => number
Converts a value into a 32-bit signed integer.

### firstAid.isInt32 : (value: any) => boolean
Returns true if the passed value is a 32-bit signed integer.

### firstAid.toInt : (value: any) => number
Tries to convert a value into an integer.

### firstAid.isInt : (value: any) => boolean
Returns true if the passed value is a valid safe integer in ECMAScript.

### firstAid.isNull : (value: any) => boolean
Returns true if the passed value is `null`.

### firstAid.isObject : (value: any) => boolean
Returns true if the passed value is an object. (This includes functions but not `null`.)

### firstAid.isPropertyKey : (value: any) => boolean
Returns true if the passed value is a valid property key (`string` or `symbol`).

### firstAid.getCodePoints : (str: string) => Iterator<number>
Returns Unicode code points of the given string.

### firstAid.encodeString : (str: string) => Uint8Array
Encodes a string into UTF-8 bytes.

### firstAid.decodeString : (utf8Bytes: BufferSource) => string
Decodes a string from UTF-8 bytes.

### firstAid.toUint8Array : (buffer: BufferSource) => Uint8Array
Converts a buffer or view into a Uint8Array.

### firstAid.encodeHex : (buffer: BufferSource) => string
Encodes bytes into a hex string.

### firstAid.decodeHex : (hexString: string) => Uint8Array
Decodes a hex string.

### firstAid.encodeBase64 : (buffer: BufferSource) => string
Encodes bytes into Base-64 encoded string.

### firstAid.decodeBase64 : (base64String: string) => Uint8Array
Decodes a Base-64 encoded string.

### firstAid.crc32 : (buffer: BufferSource) => number
Calculates a CRC-32 check sum of the given buffer. (Signed 32-bit integer)

### firstAid.randomFillInsecure : (buffer: BuffferSource) => Uint8Array
Fills the given buffer with Math.random() values.

### firstAid.randomFill : (buffer: BufferSource) => Uint8Array
Fills the given buffer with secure random values.

Currently, Node.JS, Web, and Deno is supported.

### firstAid.random : (isInsecure: boolean? = false) => number
Returns a random number in [0, 1) range.

### firstAid.randomNormal : (isInsecure: boolean? = false) => number
Returns a standard normal random number.

### firstAid.randomExponential : (isInsecure: boolean? = false) => number
Returns a standard exponential random number.

### firstAid.randomXenakis : (isInsecure: boolean? = false) => number
Returns a Xenakis random number.

### firstAid.randomProb : (prob: number, isInsecure: boolean? = false) => boolean
Returns true in the given probability.

### firstAid.getUuidFromBytes : (arr: BufferSource) => string
Generates a version-4 UUID string from the given buffer.

### firstAid.getRandomUuid : (isInsecure: boolean? = false) => string
Generates a random version-4 UUID string.

### firstAid.validateUuid : (uuid: string) => boolean
Returns true if the given value is a valid UUID string.

### firstAid.callAsync : (callback: function, thisArgument: any, ... argumentList: any[]) => Promise<any>
Calls the given function in an asynchronous manner.

### firstAid.toPromise : (value: any) => Promise<any>
Converts any value into a Promise.

### firstAid.getTime: () => number
Returns a current Unix timestamp in milliseconds.

## License
Copyright &copy; 2021 Menhera.org

Licensed under the Apache 2.0 license.
