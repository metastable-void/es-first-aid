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

### firstAid.TypedArray
TypedArray constructor. : function

### firstAid.MINUS_ZERO : number
`-0`

### firstAid.createNullPrototypeObject : () => {}
Creates a new null-prototype object.

### firstAid.createReadOnlyProxy<T> : (T) => Proxy<T>
Wraps an object in a read-only Proxy.

### firstAid.isRevokedProxy : (*) => boolean
Returns true if the passed object is a revoked Proxy.

### firstAid.isConstructor : (function) => boolean
Returns true if the passed object has a valid `[[Construct]]` slot.

### firstAid.toInt32 : (*) => number
Converts a value into a 32-bit signed integer.

### firstAid.isInt32 : (*) => boolean
Returns true if the passed value is a 32-bit signed integer.

### firstAid.toInt : (*) => number
Tries to convert a value into an integer.

### firstAid.isInt : (*) => boolean
Returns true if the passed value is a valid safe integer in ECMAScript.

### firstAid.isNull : (*) => boolean
Returns true if the passed value is `null`.

### firstAid.isObject : (*) => boolean
Returns true if the passed value is an object. (This includes functions but not `null`.)

### firstAid.isPropertyKey : (*) => boolean
Returns true if the passed value is a valid property key (`string` or `symbol`).

### firstAid.getCodePoints : (string) => Iterator<number>
Returns Unicode code points of the given string.

### firstAid.encodeString : (string) => Uint8Array
Encodes a string into UTF-8 bytes.

### firstAid.decodeString : (BufferSource) => string
Decodes a string from UTF-8 bytes.

### firstAid.toUint8Array : (BufferSource) => Uint8Array
Converts a buffer or view into a Uint8Array.

### firstAid.encodeHex : (BufferSource) => string
Encodes bytes into a hex string.

### firstAid.decodeHex : (string) => Uint8Array
Decodes a hex string.

### firstAid.encodeBase64 : (BufferSource) => string
Encodes bytes into Base-64 encoded string.

### firstAid.decodeBase64 : (string) => Uint8Array
Decodes a Base-64 encoded string.

### firstAid.crc32 : (BufferSource) => number
Calculates a CRC-32 check sum of the given buffer. (Signed 32-bit integer)

### firstAid.randomFillInsecure : (BuffferSource) => Uint8Array
Fills the given buffer with Math.random() values.

### firstAid.randomFill : (BufferSource) => Uint8Array
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


## License
Copyright &copy; 2021 Menhera.org

Licensed under the Apache 2.0 license.
