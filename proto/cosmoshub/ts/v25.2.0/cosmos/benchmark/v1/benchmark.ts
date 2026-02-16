/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.benchmark.v1";

/** Op is a message describing a benchmark operation. */
export interface Op {
  seed: number;
  actor: string;
  keyLength: number;
  valueLength: number;
  iterations: number;
  delete: boolean;
  exists: boolean;
}

const baseOp: object = {
  seed: 0,
  actor: "",
  keyLength: 0,
  valueLength: 0,
  iterations: 0,
  delete: false,
  exists: false,
};

export const Op = {
  encode(message: Op, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed !== 0) {
      writer.uint32(8).uint64(message.seed);
    }
    if (message.actor !== "") {
      writer.uint32(18).string(message.actor);
    }
    if (message.keyLength !== 0) {
      writer.uint32(24).uint64(message.keyLength);
    }
    if (message.valueLength !== 0) {
      writer.uint32(32).uint64(message.valueLength);
    }
    if (message.iterations !== 0) {
      writer.uint32(40).uint32(message.iterations);
    }
    if (message.delete === true) {
      writer.uint32(48).bool(message.delete);
    }
    if (message.exists === true) {
      writer.uint32(56).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Op {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOp } as Op;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.actor = reader.string();
          break;
        case 3:
          message.keyLength = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.valueLength = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.iterations = reader.uint32();
          break;
        case 6:
          message.delete = reader.bool();
          break;
        case 7:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Op {
    const message = { ...baseOp } as Op;
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = Number(object.seed);
    } else {
      message.seed = 0;
    }
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = String(object.actor);
    } else {
      message.actor = "";
    }
    if (object.keyLength !== undefined && object.keyLength !== null) {
      message.keyLength = Number(object.keyLength);
    } else {
      message.keyLength = 0;
    }
    if (object.valueLength !== undefined && object.valueLength !== null) {
      message.valueLength = Number(object.valueLength);
    } else {
      message.valueLength = 0;
    }
    if (object.iterations !== undefined && object.iterations !== null) {
      message.iterations = Number(object.iterations);
    } else {
      message.iterations = 0;
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = Boolean(object.delete);
    } else {
      message.delete = false;
    }
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = Boolean(object.exists);
    } else {
      message.exists = false;
    }
    return message;
  },

  toJSON(message: Op): unknown {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = message.seed);
    message.actor !== undefined && (obj.actor = message.actor);
    message.keyLength !== undefined && (obj.keyLength = message.keyLength);
    message.valueLength !== undefined &&
      (obj.valueLength = message.valueLength);
    message.iterations !== undefined && (obj.iterations = message.iterations);
    message.delete !== undefined && (obj.delete = message.delete);
    message.exists !== undefined && (obj.exists = message.exists);
    return obj;
  },

  fromPartial(object: DeepPartial<Op>): Op {
    const message = { ...baseOp } as Op;
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = object.seed;
    } else {
      message.seed = 0;
    }
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = object.actor;
    } else {
      message.actor = "";
    }
    if (object.keyLength !== undefined && object.keyLength !== null) {
      message.keyLength = object.keyLength;
    } else {
      message.keyLength = 0;
    }
    if (object.valueLength !== undefined && object.valueLength !== null) {
      message.valueLength = object.valueLength;
    } else {
      message.valueLength = 0;
    }
    if (object.iterations !== undefined && object.iterations !== null) {
      message.iterations = object.iterations;
    } else {
      message.iterations = 0;
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = object.delete;
    } else {
      message.delete = false;
    }
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    } else {
      message.exists = false;
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
