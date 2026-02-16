/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.counter.v1";

/** MsgIncreaseCounter defines a count Msg service counter. */
export interface MsgIncreaseCounter {
  /** signer is the address that controls the module (defaults to x/gov unless overwritten). */
  signer: string;
  /** count is the number of times to increment the counter. */
  count: number;
}

/** MsgIncreaseCountResponse is the Msg/Counter response type. */
export interface MsgIncreaseCountResponse {
  /** new_count is the number of times the counter was incremented. */
  newCount: number;
}

const baseMsgIncreaseCounter: object = { signer: "", count: 0 };

export const MsgIncreaseCounter = {
  encode(
    message: MsgIncreaseCounter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.count !== 0) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreaseCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIncreaseCounter } as MsgIncreaseCounter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIncreaseCounter {
    const message = { ...baseMsgIncreaseCounter } as MsgIncreaseCounter;
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: MsgIncreaseCounter): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIncreaseCounter>): MsgIncreaseCounter {
    const message = { ...baseMsgIncreaseCounter } as MsgIncreaseCounter;
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseMsgIncreaseCountResponse: object = { newCount: 0 };

export const MsgIncreaseCountResponse = {
  encode(
    message: MsgIncreaseCountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newCount !== 0) {
      writer.uint32(8).int64(message.newCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIncreaseCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIncreaseCountResponse,
    } as MsgIncreaseCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIncreaseCountResponse {
    const message = {
      ...baseMsgIncreaseCountResponse,
    } as MsgIncreaseCountResponse;
    if (object.newCount !== undefined && object.newCount !== null) {
      message.newCount = Number(object.newCount);
    } else {
      message.newCount = 0;
    }
    return message;
  },

  toJSON(message: MsgIncreaseCountResponse): unknown {
    const obj: any = {};
    message.newCount !== undefined && (obj.newCount = message.newCount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgIncreaseCountResponse>
  ): MsgIncreaseCountResponse {
    const message = {
      ...baseMsgIncreaseCountResponse,
    } as MsgIncreaseCountResponse;
    if (object.newCount !== undefined && object.newCount !== null) {
      message.newCount = object.newCount;
    } else {
      message.newCount = 0;
    }
    return message;
  },
};

/** Msg defines the counter Msg service. */
export interface Msg {
  /** IncreaseCount increments the counter by the specified amount. */
  IncreaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  IncreaseCount(
    request: MsgIncreaseCounter
  ): Promise<MsgIncreaseCountResponse> {
    const data = MsgIncreaseCounter.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.counter.v1.Msg",
      "IncreaseCount",
      data
    );
    return promise.then((data) =>
      MsgIncreaseCountResponse.decode(new _m0.Reader(data))
    );
  }
}

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
