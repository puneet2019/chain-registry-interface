/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeToken } from "../../../osmosis/txfees/v1beta1/feetoken";

export const protobufPackage = "osmosis.txfees.v1beta1";

export interface QueryFeeTokensRequest {}

export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
  denom: string;
}

/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
  poolID: number;
  spotPrice: string;
}

export interface QueryDenomPoolIdRequest {
  denom: string;
}

export interface QueryDenomPoolIdResponse {
  poolID: number;
}

export interface QueryBaseDenomRequest {}

export interface QueryBaseDenomResponse {
  baseDenom: string;
}

export interface QueryEipBaseFeeRequest {}

export interface QueryEipBaseFeeResponse {
  baseFee: string;
}

const baseQueryFeeTokensRequest: object = {};

export const QueryFeeTokensRequest = {
  encode(
    _: QueryFeeTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeTokensRequest } as QueryFeeTokensRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryFeeTokensRequest {
    const message = { ...baseQueryFeeTokensRequest } as QueryFeeTokensRequest;
    return message;
  },

  toJSON(_: QueryFeeTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = { ...baseQueryFeeTokensRequest } as QueryFeeTokensRequest;
    return message;
  },
};

const baseQueryFeeTokensResponse: object = {};

export const QueryFeeTokensResponse = {
  encode(
    message: QueryFeeTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeTokensResponse } as QueryFeeTokensResponse;
    message.feeTokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeTokensResponse {
    const message = { ...baseQueryFeeTokensResponse } as QueryFeeTokensResponse;
    message.feeTokens = [];
    if (object.feeTokens !== undefined && object.feeTokens !== null) {
      for (const e of object.feeTokens) {
        message.feeTokens.push(FeeToken.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryFeeTokensResponse): unknown {
    const obj: any = {};
    if (message.feeTokens) {
      obj.feeTokens = message.feeTokens.map((e) =>
        e ? FeeToken.toJSON(e) : undefined
      );
    } else {
      obj.feeTokens = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeeTokensResponse>
  ): QueryFeeTokensResponse {
    const message = { ...baseQueryFeeTokensResponse } as QueryFeeTokensResponse;
    message.feeTokens = [];
    if (object.feeTokens !== undefined && object.feeTokens !== null) {
      for (const e of object.feeTokens) {
        message.feeTokens.push(FeeToken.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryDenomSpotPriceRequest: object = { denom: "" };

export const QueryDenomSpotPriceRequest = {
  encode(
    message: QueryDenomSpotPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomSpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomSpotPriceRequest,
    } as QueryDenomSpotPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomSpotPriceRequest {
    const message = {
      ...baseQueryDenomSpotPriceRequest,
    } as QueryDenomSpotPriceRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryDenomSpotPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomSpotPriceRequest>
  ): QueryDenomSpotPriceRequest {
    const message = {
      ...baseQueryDenomSpotPriceRequest,
    } as QueryDenomSpotPriceRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryDenomSpotPriceResponse: object = { poolID: 0, spotPrice: "" };

export const QueryDenomSpotPriceResponse = {
  encode(
    message: QueryDenomSpotPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolID !== 0) {
      writer.uint32(8).uint64(message.poolID);
    }
    if (message.spotPrice !== "") {
      writer.uint32(18).string(message.spotPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomSpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomSpotPriceResponse,
    } as QueryDenomSpotPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomSpotPriceResponse {
    const message = {
      ...baseQueryDenomSpotPriceResponse,
    } as QueryDenomSpotPriceResponse;
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = Number(object.poolID);
    } else {
      message.poolID = 0;
    }
    if (object.spotPrice !== undefined && object.spotPrice !== null) {
      message.spotPrice = String(object.spotPrice);
    } else {
      message.spotPrice = "";
    }
    return message;
  },

  toJSON(message: QueryDenomSpotPriceResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = message.poolID);
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomSpotPriceResponse>
  ): QueryDenomSpotPriceResponse {
    const message = {
      ...baseQueryDenomSpotPriceResponse,
    } as QueryDenomSpotPriceResponse;
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = object.poolID;
    } else {
      message.poolID = 0;
    }
    if (object.spotPrice !== undefined && object.spotPrice !== null) {
      message.spotPrice = object.spotPrice;
    } else {
      message.spotPrice = "";
    }
    return message;
  },
};

const baseQueryDenomPoolIdRequest: object = { denom: "" };

export const QueryDenomPoolIdRequest = {
  encode(
    message: QueryDenomPoolIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomPoolIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomPoolIdRequest,
    } as QueryDenomPoolIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomPoolIdRequest {
    const message = {
      ...baseQueryDenomPoolIdRequest,
    } as QueryDenomPoolIdRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryDenomPoolIdRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomPoolIdRequest>
  ): QueryDenomPoolIdRequest {
    const message = {
      ...baseQueryDenomPoolIdRequest,
    } as QueryDenomPoolIdRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryDenomPoolIdResponse: object = { poolID: 0 };

export const QueryDenomPoolIdResponse = {
  encode(
    message: QueryDenomPoolIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolID !== 0) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomPoolIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomPoolIdResponse,
    } as QueryDenomPoolIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomPoolIdResponse {
    const message = {
      ...baseQueryDenomPoolIdResponse,
    } as QueryDenomPoolIdResponse;
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = Number(object.poolID);
    } else {
      message.poolID = 0;
    }
    return message;
  },

  toJSON(message: QueryDenomPoolIdResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = message.poolID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomPoolIdResponse>
  ): QueryDenomPoolIdResponse {
    const message = {
      ...baseQueryDenomPoolIdResponse,
    } as QueryDenomPoolIdResponse;
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = object.poolID;
    } else {
      message.poolID = 0;
    }
    return message;
  },
};

const baseQueryBaseDenomRequest: object = {};

export const QueryBaseDenomRequest = {
  encode(
    _: QueryBaseDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBaseDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBaseDenomRequest } as QueryBaseDenomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryBaseDenomRequest {
    const message = { ...baseQueryBaseDenomRequest } as QueryBaseDenomRequest;
    return message;
  },

  toJSON(_: QueryBaseDenomRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest {
    const message = { ...baseQueryBaseDenomRequest } as QueryBaseDenomRequest;
    return message;
  },
};

const baseQueryBaseDenomResponse: object = { baseDenom: "" };

export const QueryBaseDenomResponse = {
  encode(
    message: QueryBaseDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBaseDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBaseDenomResponse } as QueryBaseDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBaseDenomResponse {
    const message = { ...baseQueryBaseDenomResponse } as QueryBaseDenomResponse;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    return message;
  },

  toJSON(message: QueryBaseDenomResponse): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBaseDenomResponse>
  ): QueryBaseDenomResponse {
    const message = { ...baseQueryBaseDenomResponse } as QueryBaseDenomResponse;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    return message;
  },
};

const baseQueryEipBaseFeeRequest: object = {};

export const QueryEipBaseFeeRequest = {
  encode(
    _: QueryEipBaseFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEipBaseFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEipBaseFeeRequest } as QueryEipBaseFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryEipBaseFeeRequest {
    const message = { ...baseQueryEipBaseFeeRequest } as QueryEipBaseFeeRequest;
    return message;
  },

  toJSON(_: QueryEipBaseFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryEipBaseFeeRequest>): QueryEipBaseFeeRequest {
    const message = { ...baseQueryEipBaseFeeRequest } as QueryEipBaseFeeRequest;
    return message;
  },
};

const baseQueryEipBaseFeeResponse: object = { baseFee: "" };

export const QueryEipBaseFeeResponse = {
  encode(
    message: QueryEipBaseFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEipBaseFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEipBaseFeeResponse,
    } as QueryEipBaseFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEipBaseFeeResponse {
    const message = {
      ...baseQueryEipBaseFeeResponse,
    } as QueryEipBaseFeeResponse;
    if (object.baseFee !== undefined && object.baseFee !== null) {
      message.baseFee = String(object.baseFee);
    } else {
      message.baseFee = "";
    }
    return message;
  },

  toJSON(message: QueryEipBaseFeeResponse): unknown {
    const obj: any = {};
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEipBaseFeeResponse>
  ): QueryEipBaseFeeResponse {
    const message = {
      ...baseQueryEipBaseFeeResponse,
    } as QueryEipBaseFeeResponse;
    if (object.baseFee !== undefined && object.baseFee !== null) {
      message.baseFee = object.baseFee;
    } else {
      message.baseFee = "";
    }
    return message;
  },
};

export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  FeeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  DenomSpotPrice(
    request: QueryDenomSpotPriceRequest
  ): Promise<QueryDenomSpotPriceResponse>;
  /** Returns the poolID for a specified denom input. */
  DenomPoolId(
    request: QueryDenomPoolIdRequest
  ): Promise<QueryDenomPoolIdResponse>;
  /** Returns a list of all base denom tokens and their corresponding pools. */
  BaseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
  /** Returns a list of all base denom tokens and their corresponding pools. */
  GetEipBaseFee(
    request: QueryEipBaseFeeRequest
  ): Promise<QueryEipBaseFeeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  FeeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "FeeTokens",
      data
    );
    return promise.then((data) =>
      QueryFeeTokensResponse.decode(new _m0.Reader(data))
    );
  }

  DenomSpotPrice(
    request: QueryDenomSpotPriceRequest
  ): Promise<QueryDenomSpotPriceResponse> {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "DenomSpotPrice",
      data
    );
    return promise.then((data) =>
      QueryDenomSpotPriceResponse.decode(new _m0.Reader(data))
    );
  }

  DenomPoolId(
    request: QueryDenomPoolIdRequest
  ): Promise<QueryDenomPoolIdResponse> {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "DenomPoolId",
      data
    );
    return promise.then((data) =>
      QueryDenomPoolIdResponse.decode(new _m0.Reader(data))
    );
  }

  BaseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "BaseDenom",
      data
    );
    return promise.then((data) =>
      QueryBaseDenomResponse.decode(new _m0.Reader(data))
    );
  }

  GetEipBaseFee(
    request: QueryEipBaseFeeRequest
  ): Promise<QueryEipBaseFeeResponse> {
    const data = QueryEipBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "GetEipBaseFee",
      data
    );
    return promise.then((data) =>
      QueryEipBaseFeeResponse.decode(new _m0.Reader(data))
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
