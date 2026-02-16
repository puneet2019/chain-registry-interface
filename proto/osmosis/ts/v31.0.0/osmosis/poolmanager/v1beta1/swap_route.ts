/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.poolmanager.v1beta1";

export interface SwapAmountInRoute {
  poolId: number;
  tokenOutDenom: string;
}

export interface SwapAmountOutRoute {
  poolId: number;
  tokenInDenom: string;
}

export interface SwapAmountInSplitRoute {
  pools: SwapAmountInRoute[];
  tokenInAmount: string;
}

export interface SwapAmountOutSplitRoute {
  pools: SwapAmountOutRoute[];
  tokenOutAmount: string;
}

const baseSwapAmountInRoute: object = { poolId: 0, tokenOutDenom: "" };

export const SwapAmountInRoute = {
  encode(
    message: SwapAmountInRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapAmountInRoute } as SwapAmountInRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapAmountInRoute {
    const message = { ...baseSwapAmountInRoute } as SwapAmountInRoute;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId);
    } else {
      message.poolId = 0;
    }
    if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
      message.tokenOutDenom = String(object.tokenOutDenom);
    } else {
      message.tokenOutDenom = "";
    }
    return message;
  },

  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.tokenOutDenom !== undefined &&
      (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = { ...baseSwapAmountInRoute } as SwapAmountInRoute;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = 0;
    }
    if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
      message.tokenOutDenom = object.tokenOutDenom;
    } else {
      message.tokenOutDenom = "";
    }
    return message;
  },
};

const baseSwapAmountOutRoute: object = { poolId: 0, tokenInDenom: "" };

export const SwapAmountOutRoute = {
  encode(
    message: SwapAmountOutRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapAmountOutRoute } as SwapAmountOutRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapAmountOutRoute {
    const message = { ...baseSwapAmountOutRoute } as SwapAmountOutRoute;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId);
    } else {
      message.poolId = 0;
    }
    if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
      message.tokenInDenom = String(object.tokenInDenom);
    } else {
      message.tokenInDenom = "";
    }
    return message;
  },

  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.tokenInDenom !== undefined &&
      (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = { ...baseSwapAmountOutRoute } as SwapAmountOutRoute;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = 0;
    }
    if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
      message.tokenInDenom = object.tokenInDenom;
    } else {
      message.tokenInDenom = "";
    }
    return message;
  },
};

const baseSwapAmountInSplitRoute: object = { tokenInAmount: "" };

export const SwapAmountInSplitRoute = {
  encode(
    message: SwapAmountInSplitRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInAmount !== "") {
      writer.uint32(18).string(message.tokenInAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SwapAmountInSplitRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapAmountInSplitRoute } as SwapAmountInSplitRoute;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapAmountInSplitRoute {
    const message = { ...baseSwapAmountInSplitRoute } as SwapAmountInSplitRoute;
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(SwapAmountInRoute.fromJSON(e));
      }
    }
    if (object.tokenInAmount !== undefined && object.tokenInAmount !== null) {
      message.tokenInAmount = String(object.tokenInAmount);
    } else {
      message.tokenInAmount = "";
    }
    return message;
  },

  toJSON(message: SwapAmountInSplitRoute): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? SwapAmountInRoute.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.tokenInAmount !== undefined &&
      (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapAmountInSplitRoute>
  ): SwapAmountInSplitRoute {
    const message = { ...baseSwapAmountInSplitRoute } as SwapAmountInSplitRoute;
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(SwapAmountInRoute.fromPartial(e));
      }
    }
    if (object.tokenInAmount !== undefined && object.tokenInAmount !== null) {
      message.tokenInAmount = object.tokenInAmount;
    } else {
      message.tokenInAmount = "";
    }
    return message;
  },
};

const baseSwapAmountOutSplitRoute: object = { tokenOutAmount: "" };

export const SwapAmountOutSplitRoute = {
  encode(
    message: SwapAmountOutSplitRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      SwapAmountOutRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOutAmount !== "") {
      writer.uint32(18).string(message.tokenOutAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SwapAmountOutSplitRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapAmountOutSplitRoute,
    } as SwapAmountOutSplitRoute;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(
            SwapAmountOutRoute.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapAmountOutSplitRoute {
    const message = {
      ...baseSwapAmountOutSplitRoute,
    } as SwapAmountOutSplitRoute;
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(SwapAmountOutRoute.fromJSON(e));
      }
    }
    if (object.tokenOutAmount !== undefined && object.tokenOutAmount !== null) {
      message.tokenOutAmount = String(object.tokenOutAmount);
    } else {
      message.tokenOutAmount = "";
    }
    return message;
  },

  toJSON(message: SwapAmountOutSplitRoute): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? SwapAmountOutRoute.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.tokenOutAmount !== undefined &&
      (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapAmountOutSplitRoute>
  ): SwapAmountOutSplitRoute {
    const message = {
      ...baseSwapAmountOutSplitRoute,
    } as SwapAmountOutSplitRoute;
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(SwapAmountOutRoute.fromPartial(e));
      }
    }
    if (object.tokenOutAmount !== undefined && object.tokenOutAmount !== null) {
      message.tokenOutAmount = object.tokenOutAmount;
    } else {
      message.tokenOutAmount = "";
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
