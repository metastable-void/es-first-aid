
declare namespace firstAid {
    interface Iterable<T> {
        [Symbol.iterator](): Iterator<T>;
    }

    type BufferSource = ArrayBuffer | ArrayBufferView;

    // TypedArray constructor. (This is abstract; you cannot instantiate this.)
    const TypedArray: Function;

    // Returns true if the passed value is a TypedArray.
    const isTypedArray: (value) => boolean;

    // -0.
    const MINUS_ZERO: number;

    // Creates a new null-prototype object.
    const createNullPrototypeObject: () => {};

    // Wraps an object in a read-only Proxy.
    const createReadOnlyProxy: <T>(obj: T) => T;

    // Returns true if the passed object is a revoked Proxy.
    const isRevokedProxy: (value: any) => boolean;

    // Returns true if the passed object has a valid [[Construct]] slot.
    const isConstructor: (value: any) => boolean;

    // Converts a value into a 32-bit signed integer.
    const toInt32: (value: any) => number;

    // Returns true if the passed value is a 32-bit signed integer.
    const isInt32: (value: any) => boolean;

    // Tries to convert a value into an integer.
    const toInt: (value: any) => number;

    // Returns true if the passed value is a valid safe integer in ECMAScript.
    const isInt: (value: any) => boolean;

    // Returns true if the passed value is null.
    const isNull: (value: any) => boolean;

    // Returns true if the passed value is an object. (This includes functions but not null.)
    const isObject: (value: any) => boolean;

    // Returns true if the passed value is a valid property key (string or symbol).
    const isPropertyKey: (value: any) => boolean;

    // Returns Unicode code points of the given string.
    const getCodePoints: (str: string) => Iterable<number>;

    // Encodes a string into UTF-8 bytes.
    const encodeString: (str: string) => Uint8Array;

    // Decodes a string from UTF-8 bytes.
    const decodeString: (utf8Bytes: BufferSource) => string;

    // Converts a buffer or view into a Uint8Array.
    const toUint8Array: (buffer: BufferSource) => Uint8Array;

    // Encodes bytes into a hex string.
    const encodeHex: (buffer: BufferSource) => string;

    // Decodes a hex string.
    const decodeHex: (hexString: string) => Uint8Array;

    // Encodes bytes into Base-64 encoded string.
    const encodeBase64: (buffer: BufferSource) => string;

    // Decodes a Base-64 encoded string.
    const decodeBase64: (base64String: string) => Uint8Array;

    // Calculates a CRC-32 check sum of the given buffer. (Signed 32-bit integer)
    const crc32: (buffer: BufferSource) => number;

    // Fills the given buffer with Math.random() values.
    const randomFillInsecure: (buffer: BufferSource) => Uint8Array;

    // Fills the given buffer with secure random values.
    // Currently, Node.JS, Web, and Deno is supported.
    const randomFill: (buffer: BufferSource) => Uint8Array;

    // Returns a random number in [0, 1) range.
    // Uses Math.random() if isInsecure is true.
    const random: (isInsecure?: boolean) => number;

    // Returns a standard normal random number.
    // Uses Math.random() if isInsecure is true.
    const randomNormal: (isInsecure?: boolean) => number;

    // Returns a standard exponential random number.
    // Uses Math.random() if isInsecure is true.
    const randomExponential: (isInsecure?: boolean) => number;

    // Returns a Xenakis random number.
    // Uses Math.random() if isInsecure is true.
    const randomXenakis: (isInsecure?: boolean) => number;

    // Returns true in the given probability.
    // Uses Math.random() if isInsecure is true.
    const randomProb: (prob: number, isInsecure?: boolean) => boolean;

    // Generates a version-4 UUID string from the given buffer.
    const getUuidFromBytes: (arr: BufferSource) => string;

    // Generates a random version-4 UUID string.
    // Uses Math.random() if isInsecure is true.
    const getRandomUuid: (isInsecure?: boolean) => string;

    // Returns true if the given value is a valid UUID string.
    const validateUuid: (uuid: string) => boolean;

    // Calls the given function in an asynchronous manner.
    const callAsync: <T>(callback: (... argumentsList: any[]) => T, thisArgument: any, ... argumentList: any[]) => Promise<T>;

    // Converts any value into a Promise.
    const toPromise: <T>(value: T | Promise<T>) => Promise<T>;

    // Returns a current Unix timestamp in milliseconds.
    const getTime: () => number;
}
