/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.poolmanager.v2";

/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
  poolId: number;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}

/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
  /** String of the BigDec. Ex) 10.203uatom */
  spotPrice: string;
}

const baseSpotPriceRequest: object = {
  poolId: 0,
  baseAssetDenom: "",
  quoteAssetDenom: "",
};

export const SpotPriceRequest = {
  encode(
    message: SpotPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpotPriceRequest } as SpotPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotPriceRequest {
    const message = { ...baseSpotPriceRequest } as SpotPriceRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId);
    } else {
      message.poolId = 0;
    }
    if (object.baseAssetDenom !== undefined && object.baseAssetDenom !== null) {
      message.baseAssetDenom = String(object.baseAssetDenom);
    } else {
      message.baseAssetDenom = "";
    }
    if (
      object.quoteAssetDenom !== undefined &&
      object.quoteAssetDenom !== null
    ) {
      message.quoteAssetDenom = String(object.quoteAssetDenom);
    } else {
      message.quoteAssetDenom = "";
    }
    return message;
  },

  toJSON(message: SpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.baseAssetDenom !== undefined &&
      (obj.baseAssetDenom = message.baseAssetDenom);
    message.quoteAssetDenom !== undefined &&
      (obj.quoteAssetDenom = message.quoteAssetDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<SpotPriceRequest>): SpotPriceRequest {
    const message = { ...baseSpotPriceRequest } as SpotPriceRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = 0;
    }
    if (object.baseAssetDenom !== undefined && object.baseAssetDenom !== null) {
      message.baseAssetDenom = object.baseAssetDenom;
    } else {
      message.baseAssetDenom = "";
    }
    if (
      object.quoteAssetDenom !== undefined &&
      object.quoteAssetDenom !== null
    ) {
      message.quoteAssetDenom = object.quoteAssetDenom;
    } else {
      message.quoteAssetDenom = "";
    }
    return message;
  },
};

const baseSpotPriceResponse: object = { spotPrice: "" };

export const SpotPriceResponse = {
  encode(
    message: SpotPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpotPriceResponse } as SpotPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotPriceResponse {
    const message = { ...baseSpotPriceResponse } as SpotPriceResponse;
    if (object.spotPrice !== undefined && object.spotPrice !== null) {
      message.spotPrice = String(object.spotPrice);
    } else {
      message.spotPrice = "";
    }
    return message;
  },

  toJSON(message: SpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<SpotPriceResponse>): SpotPriceResponse {
    const message = { ...baseSpotPriceResponse } as SpotPriceResponse;
    if (object.spotPrice !== undefined && object.spotPrice !== null) {
      message.spotPrice = object.spotPrice;
    } else {
      message.spotPrice = "";
    }
    return message;
  },
};

export interface Query {
  /**
   * SpotPriceV2 defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   * The returned spot price has 36 decimal places. However, some of
   * modules perform sig fig rounding so most of the rightmost decimals can be
   * zeroes.
   */
  SpotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SpotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.poolmanager.v2.Query",
      "SpotPriceV2",
      data
    );
    return promise.then((data) =>
      SpotPriceResponse.decode(new _m0.Reader(data))
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
