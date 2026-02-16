/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  Params,
  TokenizeShareRecord,
} from "../../../gaia/liquid/v1beta1/liquid";

export const protobufPackage = "gaia.liquid.v1beta1";

/** GenesisState defines the liquid module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params: Params | undefined;
  /** store tokenize share records to provide reward to record owners */
  tokenizeShareRecords: TokenizeShareRecord[];
  /** last tokenize share record id, used for next share record id calculation */
  lastTokenizeShareRecordId: number;
  /** total number of liquid staked tokens at genesis */
  totalLiquidStakedTokens: Uint8Array;
  /** tokenize shares locks at genesis */
  tokenizeShareLocks: TokenizeShareLock[];
}

/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLock {
  /** Address of the account that is locked */
  address: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status: string;
  /** Completion time if the lock is expiring */
  completionTime: Date | undefined;
}

const baseGenesisState: object = { lastTokenizeShareRecordId: 0 };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenizeShareRecords) {
      TokenizeShareRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastTokenizeShareRecordId !== 0) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenizeShareRecords = [];
    message.tokenizeShareLocks = [];
    message.totalLiquidStakedTokens = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 9:
          message.tokenizeShareRecords.push(
            TokenizeShareRecord.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.lastTokenizeShareRecordId = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 11:
          message.totalLiquidStakedTokens = reader.bytes();
          break;
        case 12:
          message.tokenizeShareLocks.push(
            TokenizeShareLock.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenizeShareRecords = [];
    message.tokenizeShareLocks = [];
    message.totalLiquidStakedTokens = new Uint8Array();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.tokenizeShareRecords !== undefined &&
      object.tokenizeShareRecords !== null
    ) {
      for (const e of object.tokenizeShareRecords) {
        message.tokenizeShareRecords.push(TokenizeShareRecord.fromJSON(e));
      }
    }
    if (
      object.lastTokenizeShareRecordId !== undefined &&
      object.lastTokenizeShareRecordId !== null
    ) {
      message.lastTokenizeShareRecordId = Number(
        object.lastTokenizeShareRecordId
      );
    } else {
      message.lastTokenizeShareRecordId = 0;
    }
    if (
      object.totalLiquidStakedTokens !== undefined &&
      object.totalLiquidStakedTokens !== null
    ) {
      message.totalLiquidStakedTokens = bytesFromBase64(
        object.totalLiquidStakedTokens
      );
    }
    if (
      object.tokenizeShareLocks !== undefined &&
      object.tokenizeShareLocks !== null
    ) {
      for (const e of object.tokenizeShareLocks) {
        message.tokenizeShareLocks.push(TokenizeShareLock.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenizeShareRecords) {
      obj.tokenizeShareRecords = message.tokenizeShareRecords.map((e) =>
        e ? TokenizeShareRecord.toJSON(e) : undefined
      );
    } else {
      obj.tokenizeShareRecords = [];
    }
    message.lastTokenizeShareRecordId !== undefined &&
      (obj.lastTokenizeShareRecordId = message.lastTokenizeShareRecordId);
    message.totalLiquidStakedTokens !== undefined &&
      (obj.totalLiquidStakedTokens = base64FromBytes(
        message.totalLiquidStakedTokens !== undefined
          ? message.totalLiquidStakedTokens
          : new Uint8Array()
      ));
    if (message.tokenizeShareLocks) {
      obj.tokenizeShareLocks = message.tokenizeShareLocks.map((e) =>
        e ? TokenizeShareLock.toJSON(e) : undefined
      );
    } else {
      obj.tokenizeShareLocks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenizeShareRecords = [];
    message.tokenizeShareLocks = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.tokenizeShareRecords !== undefined &&
      object.tokenizeShareRecords !== null
    ) {
      for (const e of object.tokenizeShareRecords) {
        message.tokenizeShareRecords.push(TokenizeShareRecord.fromPartial(e));
      }
    }
    if (
      object.lastTokenizeShareRecordId !== undefined &&
      object.lastTokenizeShareRecordId !== null
    ) {
      message.lastTokenizeShareRecordId = object.lastTokenizeShareRecordId;
    } else {
      message.lastTokenizeShareRecordId = 0;
    }
    if (
      object.totalLiquidStakedTokens !== undefined &&
      object.totalLiquidStakedTokens !== null
    ) {
      message.totalLiquidStakedTokens = object.totalLiquidStakedTokens;
    } else {
      message.totalLiquidStakedTokens = new Uint8Array();
    }
    if (
      object.tokenizeShareLocks !== undefined &&
      object.tokenizeShareLocks !== null
    ) {
      for (const e of object.tokenizeShareLocks) {
        message.tokenizeShareLocks.push(TokenizeShareLock.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTokenizeShareLock: object = { address: "", status: "" };

export const TokenizeShareLock = {
  encode(
    message: TokenizeShareLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenizeShareLock } as TokenizeShareLock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.completionTime = fromTimestamp(
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

  fromJSON(object: any): TokenizeShareLock {
    const message = { ...baseTokenizeShareLock } as TokenizeShareLock;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = fromJsonTimestamp(object.completionTime);
    } else {
      message.completionTime = undefined;
    }
    return message;
  },

  toJSON(message: TokenizeShareLock): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = message.status);
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<TokenizeShareLock>): TokenizeShareLock {
    const message = { ...baseTokenizeShareLock } as TokenizeShareLock;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = object.completionTime;
    } else {
      message.completionTime = undefined;
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
