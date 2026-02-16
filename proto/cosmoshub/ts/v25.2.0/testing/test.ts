/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "testing";

export interface TestMessage {
  foo: string;
  bar: string;
}

export interface TestNestedMessage {
  fuzz: string;
  msg: TestMessage | undefined;
}

/** Used in shared/p2p/feed_example_test.go */
export interface Puzzle {
  challenge: string;
  answer: string;
}

/**
 * Person and address book example from
 * https://github.com/protocolbuffers/protobuf/blob/master/examples/addressbook.proto
 */
export interface Person {
  name: string;
  id: number;
  email: string;
  phones: Person_PhoneNumber[];
  lastUpdated: Date | undefined;
}

export enum Person_PhoneType {
  MOBILE = 0,
  HOME = 1,
  WORK = 2,
  UNRECOGNIZED = -1,
}

export function person_PhoneTypeFromJSON(object: any): Person_PhoneType {
  switch (object) {
    case 0:
    case "MOBILE":
      return Person_PhoneType.MOBILE;
    case 1:
    case "HOME":
      return Person_PhoneType.HOME;
    case 2:
    case "WORK":
      return Person_PhoneType.WORK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Person_PhoneType.UNRECOGNIZED;
  }
}

export function person_PhoneTypeToJSON(object: Person_PhoneType): string {
  switch (object) {
    case Person_PhoneType.MOBILE:
      return "MOBILE";
    case Person_PhoneType.HOME:
      return "HOME";
    case Person_PhoneType.WORK:
      return "WORK";
    default:
      return "UNKNOWN";
  }
}

export interface Person_PhoneNumber {
  number: string;
  type: Person_PhoneType;
}

/** Our address book file is just one of these. */
export interface AddressBook {
  people: Person[];
}

export interface TestSimpleMessage {
  foo: Uint8Array;
  bar: number;
}

const baseTestMessage: object = { foo: "", bar: "" };

export const TestMessage = {
  encode(
    message: TestMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.foo !== "") {
      writer.uint32(10).string(message.foo);
    }
    if (message.bar !== "") {
      writer.uint32(18).string(message.bar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestMessage } as TestMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foo = reader.string();
          break;
        case 2:
          message.bar = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestMessage {
    const message = { ...baseTestMessage } as TestMessage;
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = String(object.foo);
    } else {
      message.foo = "";
    }
    if (object.bar !== undefined && object.bar !== null) {
      message.bar = String(object.bar);
    } else {
      message.bar = "";
    }
    return message;
  },

  toJSON(message: TestMessage): unknown {
    const obj: any = {};
    message.foo !== undefined && (obj.foo = message.foo);
    message.bar !== undefined && (obj.bar = message.bar);
    return obj;
  },

  fromPartial(object: DeepPartial<TestMessage>): TestMessage {
    const message = { ...baseTestMessage } as TestMessage;
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = object.foo;
    } else {
      message.foo = "";
    }
    if (object.bar !== undefined && object.bar !== null) {
      message.bar = object.bar;
    } else {
      message.bar = "";
    }
    return message;
  },
};

const baseTestNestedMessage: object = { fuzz: "" };

export const TestNestedMessage = {
  encode(
    message: TestNestedMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fuzz !== "") {
      writer.uint32(10).string(message.fuzz);
    }
    if (message.msg !== undefined) {
      TestMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestNestedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestNestedMessage } as TestNestedMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fuzz = reader.string();
          break;
        case 2:
          message.msg = TestMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestNestedMessage {
    const message = { ...baseTestNestedMessage } as TestNestedMessage;
    if (object.fuzz !== undefined && object.fuzz !== null) {
      message.fuzz = String(object.fuzz);
    } else {
      message.fuzz = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = TestMessage.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: TestNestedMessage): unknown {
    const obj: any = {};
    message.fuzz !== undefined && (obj.fuzz = message.fuzz);
    message.msg !== undefined &&
      (obj.msg = message.msg ? TestMessage.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestNestedMessage>): TestNestedMessage {
    const message = { ...baseTestNestedMessage } as TestNestedMessage;
    if (object.fuzz !== undefined && object.fuzz !== null) {
      message.fuzz = object.fuzz;
    } else {
      message.fuzz = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = TestMessage.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

const basePuzzle: object = { challenge: "", answer: "" };

export const Puzzle = {
  encode(
    message: Puzzle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.challenge !== "") {
      writer.uint32(10).string(message.challenge);
    }
    if (message.answer !== "") {
      writer.uint32(18).string(message.answer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Puzzle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePuzzle } as Puzzle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge = reader.string();
          break;
        case 2:
          message.answer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Puzzle {
    const message = { ...basePuzzle } as Puzzle;
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = String(object.challenge);
    } else {
      message.challenge = "";
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = String(object.answer);
    } else {
      message.answer = "";
    }
    return message;
  },

  toJSON(message: Puzzle): unknown {
    const obj: any = {};
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.answer !== undefined && (obj.answer = message.answer);
    return obj;
  },

  fromPartial(object: DeepPartial<Puzzle>): Puzzle {
    const message = { ...basePuzzle } as Puzzle;
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = object.challenge;
    } else {
      message.challenge = "";
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = object.answer;
    } else {
      message.answer = "";
    }
    return message;
  },
};

const basePerson: object = { name: "", id: 0, email: "" };

export const Person = {
  encode(
    message: Person,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    for (const v of message.phones) {
      Person_PhoneNumber.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastUpdated !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastUpdated),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Person {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePerson } as Person;
    message.phones = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.int32();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.phones.push(
            Person_PhoneNumber.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.lastUpdated = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Person {
    const message = { ...basePerson } as Person;
    message.phones = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.phones !== undefined && object.phones !== null) {
      for (const e of object.phones) {
        message.phones.push(Person_PhoneNumber.fromJSON(e));
      }
    }
    if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
      message.lastUpdated = fromJsonTimestamp(object.lastUpdated);
    } else {
      message.lastUpdated = undefined;
    }
    return message;
  },

  toJSON(message: Person): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    if (message.phones) {
      obj.phones = message.phones.map((e) =>
        e ? Person_PhoneNumber.toJSON(e) : undefined
      );
    } else {
      obj.phones = [];
    }
    message.lastUpdated !== undefined &&
      (obj.lastUpdated = message.lastUpdated.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Person>): Person {
    const message = { ...basePerson } as Person;
    message.phones = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.phones !== undefined && object.phones !== null) {
      for (const e of object.phones) {
        message.phones.push(Person_PhoneNumber.fromPartial(e));
      }
    }
    if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
      message.lastUpdated = object.lastUpdated;
    } else {
      message.lastUpdated = undefined;
    }
    return message;
  },
};

const basePerson_PhoneNumber: object = { number: "", type: 0 };

export const Person_PhoneNumber = {
  encode(
    message: Person_PhoneNumber,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Person_PhoneNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePerson_PhoneNumber } as Person_PhoneNumber;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Person_PhoneNumber {
    const message = { ...basePerson_PhoneNumber } as Person_PhoneNumber;
    if (object.number !== undefined && object.number !== null) {
      message.number = String(object.number);
    } else {
      message.number = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = person_PhoneTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: Person_PhoneNumber): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    message.type !== undefined &&
      (obj.type = person_PhoneTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<Person_PhoneNumber>): Person_PhoneNumber {
    const message = { ...basePerson_PhoneNumber } as Person_PhoneNumber;
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseAddressBook: object = {};

export const AddressBook = {
  encode(
    message: AddressBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.people) {
      Person.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressBook } as AddressBook;
    message.people = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.people.push(Person.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBook {
    const message = { ...baseAddressBook } as AddressBook;
    message.people = [];
    if (object.people !== undefined && object.people !== null) {
      for (const e of object.people) {
        message.people.push(Person.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AddressBook): unknown {
    const obj: any = {};
    if (message.people) {
      obj.people = message.people.map((e) =>
        e ? Person.toJSON(e) : undefined
      );
    } else {
      obj.people = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AddressBook>): AddressBook {
    const message = { ...baseAddressBook } as AddressBook;
    message.people = [];
    if (object.people !== undefined && object.people !== null) {
      for (const e of object.people) {
        message.people.push(Person.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTestSimpleMessage: object = { bar: 0 };

export const TestSimpleMessage = {
  encode(
    message: TestSimpleMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.foo.length !== 0) {
      writer.uint32(10).bytes(message.foo);
    }
    if (message.bar !== 0) {
      writer.uint32(16).uint64(message.bar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSimpleMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestSimpleMessage } as TestSimpleMessage;
    message.foo = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foo = reader.bytes();
          break;
        case 2:
          message.bar = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestSimpleMessage {
    const message = { ...baseTestSimpleMessage } as TestSimpleMessage;
    message.foo = new Uint8Array();
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = bytesFromBase64(object.foo);
    }
    if (object.bar !== undefined && object.bar !== null) {
      message.bar = Number(object.bar);
    } else {
      message.bar = 0;
    }
    return message;
  },

  toJSON(message: TestSimpleMessage): unknown {
    const obj: any = {};
    message.foo !== undefined &&
      (obj.foo = base64FromBytes(
        message.foo !== undefined ? message.foo : new Uint8Array()
      ));
    message.bar !== undefined && (obj.bar = message.bar);
    return obj;
  },

  fromPartial(object: DeepPartial<TestSimpleMessage>): TestSimpleMessage {
    const message = { ...baseTestSimpleMessage } as TestSimpleMessage;
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = object.foo;
    } else {
      message.foo = new Uint8Array();
    }
    if (object.bar !== undefined && object.bar !== null) {
      message.bar = object.bar;
    } else {
      message.bar = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
