/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.epochs.v1beta1";

/** EventEpochEnd is an event emitted when an epoch end. */
export interface EventEpochEnd {
  epochNumber: number;
}

/** EventEpochStart is an event emitted when an epoch start. */
export interface EventEpochStart {
  epochNumber: number;
  epochStartTime: number;
}

const baseEventEpochEnd: object = { epochNumber: 0 };

export const EventEpochEnd = {
  encode(
    message: EventEpochEnd,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochNumber !== 0) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochEnd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventEpochEnd } as EventEpochEnd;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEpochEnd {
    const message = { ...baseEventEpochEnd } as EventEpochEnd;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Number(object.epochNumber);
    } else {
      message.epochNumber = 0;
    }
    return message;
  },

  toJSON(message: EventEpochEnd): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = message.epochNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<EventEpochEnd>): EventEpochEnd {
    const message = { ...baseEventEpochEnd } as EventEpochEnd;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber;
    } else {
      message.epochNumber = 0;
    }
    return message;
  },
};

const baseEventEpochStart: object = { epochNumber: 0, epochStartTime: 0 };

export const EventEpochStart = {
  encode(
    message: EventEpochStart,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochNumber !== 0) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.epochStartTime !== 0) {
      writer.uint32(16).int64(message.epochStartTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventEpochStart } as EventEpochStart;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.epochStartTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEpochStart {
    const message = { ...baseEventEpochStart } as EventEpochStart;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Number(object.epochNumber);
    } else {
      message.epochNumber = 0;
    }
    if (object.epochStartTime !== undefined && object.epochStartTime !== null) {
      message.epochStartTime = Number(object.epochStartTime);
    } else {
      message.epochStartTime = 0;
    }
    return message;
  },

  toJSON(message: EventEpochStart): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = message.epochNumber);
    message.epochStartTime !== undefined &&
      (obj.epochStartTime = message.epochStartTime);
    return obj;
  },

  fromPartial(object: DeepPartial<EventEpochStart>): EventEpochStart {
    const message = { ...baseEventEpochStart } as EventEpochStart;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber;
    } else {
      message.epochNumber = 0;
    }
    if (object.epochStartTime !== undefined && object.epochStartTime !== null) {
      message.epochStartTime = object.epochStartTime;
    } else {
      message.epochStartTime = 0;
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
