/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  RateLimit,
  WhitelistedAddressPair,
} from "../../ratelimit/v1/ratelimit";

export const protobufPackage = "ratelimit.v1";

/** Queries all rate limits */
export interface QueryAllRateLimitsRequest {}

export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}

/** Queries a specific rate limit by channel ID and denom */
export interface QueryRateLimitRequest {
  denom: string;
  channelOrClientId: string;
}

export interface QueryRateLimitResponse {
  rateLimit: RateLimit | undefined;
}

/** Queries all the rate limits for a given chain */
export interface QueryRateLimitsByChainIdRequest {
  chainId: string;
}

export interface QueryRateLimitsByChainIdResponse {
  rateLimits: RateLimit[];
}

/** Queries all the rate limits for a given channel or client ID */
export interface QueryRateLimitsByChannelOrClientIdRequest {
  channelOrClientId: string;
}

export interface QueryRateLimitsByChannelOrClientIdResponse {
  rateLimits: RateLimit[];
}

/** Queries all blacklisted denoms */
export interface QueryAllBlacklistedDenomsRequest {}

export interface QueryAllBlacklistedDenomsResponse {
  denoms: string[];
}

/** Queries all whitelisted address pairs */
export interface QueryAllWhitelistedAddressesRequest {}

export interface QueryAllWhitelistedAddressesResponse {
  addressPairs: WhitelistedAddressPair[];
}

const baseQueryAllRateLimitsRequest: object = {};

export const QueryAllRateLimitsRequest = {
  encode(
    _: QueryAllRateLimitsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllRateLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRateLimitsRequest,
    } as QueryAllRateLimitsRequest;
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

  fromJSON(_: any): QueryAllRateLimitsRequest {
    const message = {
      ...baseQueryAllRateLimitsRequest,
    } as QueryAllRateLimitsRequest;
    return message;
  },

  toJSON(_: QueryAllRateLimitsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllRateLimitsRequest>
  ): QueryAllRateLimitsRequest {
    const message = {
      ...baseQueryAllRateLimitsRequest,
    } as QueryAllRateLimitsRequest;
    return message;
  },
};

const baseQueryAllRateLimitsResponse: object = {};

export const QueryAllRateLimitsResponse = {
  encode(
    message: QueryAllRateLimitsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllRateLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRateLimitsResponse,
    } as QueryAllRateLimitsResponse;
    message.rateLimits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRateLimitsResponse {
    const message = {
      ...baseQueryAllRateLimitsResponse,
    } as QueryAllRateLimitsResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllRateLimitsResponse): unknown {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) =>
        e ? RateLimit.toJSON(e) : undefined
      );
    } else {
      obj.rateLimits = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRateLimitsResponse>
  ): QueryAllRateLimitsResponse {
    const message = {
      ...baseQueryAllRateLimitsResponse,
    } as QueryAllRateLimitsResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRateLimitRequest: object = { denom: "", channelOrClientId: "" };

export const QueryRateLimitRequest = {
  encode(
    message: QueryRateLimitRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(18).string(message.channelOrClientId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateLimitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitRequest } as QueryRateLimitRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitRequest {
    const message = { ...baseQueryRateLimitRequest } as QueryRateLimitRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },

  toJSON(message: QueryRateLimitRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateLimitRequest>
  ): QueryRateLimitRequest {
    const message = { ...baseQueryRateLimitRequest } as QueryRateLimitRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },
};

const baseQueryRateLimitResponse: object = {};

export const QueryRateLimitResponse = {
  encode(
    message: QueryRateLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitResponse } as QueryRateLimitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimit = RateLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitResponse {
    const message = { ...baseQueryRateLimitResponse } as QueryRateLimitResponse;
    if (object.rateLimit !== undefined && object.rateLimit !== null) {
      message.rateLimit = RateLimit.fromJSON(object.rateLimit);
    } else {
      message.rateLimit = undefined;
    }
    return message;
  },

  toJSON(message: QueryRateLimitResponse): unknown {
    const obj: any = {};
    message.rateLimit !== undefined &&
      (obj.rateLimit = message.rateLimit
        ? RateLimit.toJSON(message.rateLimit)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateLimitResponse>
  ): QueryRateLimitResponse {
    const message = { ...baseQueryRateLimitResponse } as QueryRateLimitResponse;
    if (object.rateLimit !== undefined && object.rateLimit !== null) {
      message.rateLimit = RateLimit.fromPartial(object.rateLimit);
    } else {
      message.rateLimit = undefined;
    }
    return message;
  },
};

const baseQueryRateLimitsByChainIdRequest: object = { chainId: "" };

export const QueryRateLimitsByChainIdRequest = {
  encode(
    message: QueryRateLimitsByChainIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateLimitsByChainIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateLimitsByChainIdRequest,
    } as QueryRateLimitsByChainIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChainIdRequest {
    const message = {
      ...baseQueryRateLimitsByChainIdRequest,
    } as QueryRateLimitsByChainIdRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChainIdRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateLimitsByChainIdRequest>
  ): QueryRateLimitsByChainIdRequest {
    const message = {
      ...baseQueryRateLimitsByChainIdRequest,
    } as QueryRateLimitsByChainIdRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseQueryRateLimitsByChainIdResponse: object = {};

export const QueryRateLimitsByChainIdResponse = {
  encode(
    message: QueryRateLimitsByChainIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateLimitsByChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateLimitsByChainIdResponse,
    } as QueryRateLimitsByChainIdResponse;
    message.rateLimits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChainIdResponse {
    const message = {
      ...baseQueryRateLimitsByChainIdResponse,
    } as QueryRateLimitsByChainIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChainIdResponse): unknown {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) =>
        e ? RateLimit.toJSON(e) : undefined
      );
    } else {
      obj.rateLimits = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateLimitsByChainIdResponse>
  ): QueryRateLimitsByChainIdResponse {
    const message = {
      ...baseQueryRateLimitsByChainIdResponse,
    } as QueryRateLimitsByChainIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRateLimitsByChannelOrClientIdRequest: object = {
  channelOrClientId: "",
};

export const QueryRateLimitsByChannelOrClientIdRequest = {
  encode(
    message: QueryRateLimitsByChannelOrClientIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelOrClientId !== "") {
      writer.uint32(10).string(message.channelOrClientId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateLimitsByChannelOrClientIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateLimitsByChannelOrClientIdRequest,
    } as QueryRateLimitsByChannelOrClientIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChannelOrClientIdRequest {
    const message = {
      ...baseQueryRateLimitsByChannelOrClientIdRequest,
    } as QueryRateLimitsByChannelOrClientIdRequest;
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChannelOrClientIdRequest): unknown {
    const obj: any = {};
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateLimitsByChannelOrClientIdRequest>
  ): QueryRateLimitsByChannelOrClientIdRequest {
    const message = {
      ...baseQueryRateLimitsByChannelOrClientIdRequest,
    } as QueryRateLimitsByChannelOrClientIdRequest;
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },
};

const baseQueryRateLimitsByChannelOrClientIdResponse: object = {};

export const QueryRateLimitsByChannelOrClientIdResponse = {
  encode(
    message: QueryRateLimitsByChannelOrClientIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateLimitsByChannelOrClientIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateLimitsByChannelOrClientIdResponse,
    } as QueryRateLimitsByChannelOrClientIdResponse;
    message.rateLimits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChannelOrClientIdResponse {
    const message = {
      ...baseQueryRateLimitsByChannelOrClientIdResponse,
    } as QueryRateLimitsByChannelOrClientIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChannelOrClientIdResponse): unknown {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) =>
        e ? RateLimit.toJSON(e) : undefined
      );
    } else {
      obj.rateLimits = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateLimitsByChannelOrClientIdResponse>
  ): QueryRateLimitsByChannelOrClientIdResponse {
    const message = {
      ...baseQueryRateLimitsByChannelOrClientIdResponse,
    } as QueryRateLimitsByChannelOrClientIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllBlacklistedDenomsRequest: object = {};

export const QueryAllBlacklistedDenomsRequest = {
  encode(
    _: QueryAllBlacklistedDenomsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllBlacklistedDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBlacklistedDenomsRequest,
    } as QueryAllBlacklistedDenomsRequest;
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

  fromJSON(_: any): QueryAllBlacklistedDenomsRequest {
    const message = {
      ...baseQueryAllBlacklistedDenomsRequest,
    } as QueryAllBlacklistedDenomsRequest;
    return message;
  },

  toJSON(_: QueryAllBlacklistedDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllBlacklistedDenomsRequest>
  ): QueryAllBlacklistedDenomsRequest {
    const message = {
      ...baseQueryAllBlacklistedDenomsRequest,
    } as QueryAllBlacklistedDenomsRequest;
    return message;
  },
};

const baseQueryAllBlacklistedDenomsResponse: object = { denoms: "" };

export const QueryAllBlacklistedDenomsResponse = {
  encode(
    message: QueryAllBlacklistedDenomsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllBlacklistedDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBlacklistedDenomsResponse,
    } as QueryAllBlacklistedDenomsResponse;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBlacklistedDenomsResponse {
    const message = {
      ...baseQueryAllBlacklistedDenomsResponse,
    } as QueryAllBlacklistedDenomsResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllBlacklistedDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBlacklistedDenomsResponse>
  ): QueryAllBlacklistedDenomsResponse {
    const message = {
      ...baseQueryAllBlacklistedDenomsResponse,
    } as QueryAllBlacklistedDenomsResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    return message;
  },
};

const baseQueryAllWhitelistedAddressesRequest: object = {};

export const QueryAllWhitelistedAddressesRequest = {
  encode(
    _: QueryAllWhitelistedAddressesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistedAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistedAddressesRequest,
    } as QueryAllWhitelistedAddressesRequest;
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

  fromJSON(_: any): QueryAllWhitelistedAddressesRequest {
    const message = {
      ...baseQueryAllWhitelistedAddressesRequest,
    } as QueryAllWhitelistedAddressesRequest;
    return message;
  },

  toJSON(_: QueryAllWhitelistedAddressesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllWhitelistedAddressesRequest>
  ): QueryAllWhitelistedAddressesRequest {
    const message = {
      ...baseQueryAllWhitelistedAddressesRequest,
    } as QueryAllWhitelistedAddressesRequest;
    return message;
  },
};

const baseQueryAllWhitelistedAddressesResponse: object = {};

export const QueryAllWhitelistedAddressesResponse = {
  encode(
    message: QueryAllWhitelistedAddressesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistedAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistedAddressesResponse,
    } as QueryAllWhitelistedAddressesResponse;
    message.addressPairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressPairs.push(
            WhitelistedAddressPair.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistedAddressesResponse {
    const message = {
      ...baseQueryAllWhitelistedAddressesResponse,
    } as QueryAllWhitelistedAddressesResponse;
    message.addressPairs = [];
    if (object.addressPairs !== undefined && object.addressPairs !== null) {
      for (const e of object.addressPairs) {
        message.addressPairs.push(WhitelistedAddressPair.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistedAddressesResponse): unknown {
    const obj: any = {};
    if (message.addressPairs) {
      obj.addressPairs = message.addressPairs.map((e) =>
        e ? WhitelistedAddressPair.toJSON(e) : undefined
      );
    } else {
      obj.addressPairs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistedAddressesResponse>
  ): QueryAllWhitelistedAddressesResponse {
    const message = {
      ...baseQueryAllWhitelistedAddressesResponse,
    } as QueryAllWhitelistedAddressesResponse;
    message.addressPairs = [];
    if (object.addressPairs !== undefined && object.addressPairs !== null) {
      for (const e of object.addressPairs) {
        message.addressPairs.push(WhitelistedAddressPair.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries all rate limits */
  AllRateLimits(
    request: QueryAllRateLimitsRequest
  ): Promise<QueryAllRateLimitsResponse>;
  /**
   * Queries a specific rate limit by channel ID and denom
   * Ex:
   *  - /ratelimit/{channel_or_client_id}/by_denom?denom={denom}
   */
  RateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
  /** Queries all the rate limits for a given chain */
  RateLimitsByChainId(
    request: QueryRateLimitsByChainIdRequest
  ): Promise<QueryRateLimitsByChainIdResponse>;
  /** Queries all the rate limits for a given channel ID */
  RateLimitsByChannelOrClientId(
    request: QueryRateLimitsByChannelOrClientIdRequest
  ): Promise<QueryRateLimitsByChannelOrClientIdResponse>;
  /** Queries all blacklisted denoms */
  AllBlacklistedDenoms(
    request: QueryAllBlacklistedDenomsRequest
  ): Promise<QueryAllBlacklistedDenomsResponse>;
  /** Queries all whitelisted address pairs */
  AllWhitelistedAddresses(
    request: QueryAllWhitelistedAddressesRequest
  ): Promise<QueryAllWhitelistedAddressesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AllRateLimits(
    request: QueryAllRateLimitsRequest
  ): Promise<QueryAllRateLimitsResponse> {
    const data = QueryAllRateLimitsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Query",
      "AllRateLimits",
      data
    );
    return promise.then((data) =>
      QueryAllRateLimitsResponse.decode(new _m0.Reader(data))
    );
  }

  RateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
    const data = QueryRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("ratelimit.v1.Query", "RateLimit", data);
    return promise.then((data) =>
      QueryRateLimitResponse.decode(new _m0.Reader(data))
    );
  }

  RateLimitsByChainId(
    request: QueryRateLimitsByChainIdRequest
  ): Promise<QueryRateLimitsByChainIdResponse> {
    const data = QueryRateLimitsByChainIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Query",
      "RateLimitsByChainId",
      data
    );
    return promise.then((data) =>
      QueryRateLimitsByChainIdResponse.decode(new _m0.Reader(data))
    );
  }

  RateLimitsByChannelOrClientId(
    request: QueryRateLimitsByChannelOrClientIdRequest
  ): Promise<QueryRateLimitsByChannelOrClientIdResponse> {
    const data = QueryRateLimitsByChannelOrClientIdRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Query",
      "RateLimitsByChannelOrClientId",
      data
    );
    return promise.then((data) =>
      QueryRateLimitsByChannelOrClientIdResponse.decode(new _m0.Reader(data))
    );
  }

  AllBlacklistedDenoms(
    request: QueryAllBlacklistedDenomsRequest
  ): Promise<QueryAllBlacklistedDenomsResponse> {
    const data = QueryAllBlacklistedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Query",
      "AllBlacklistedDenoms",
      data
    );
    return promise.then((data) =>
      QueryAllBlacklistedDenomsResponse.decode(new _m0.Reader(data))
    );
  }

  AllWhitelistedAddresses(
    request: QueryAllWhitelistedAddressesRequest
  ): Promise<QueryAllWhitelistedAddressesResponse> {
    const data = QueryAllWhitelistedAddressesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Query",
      "AllWhitelistedAddresses",
      data
    );
    return promise.then((data) =>
      QueryAllWhitelistedAddressesResponse.decode(new _m0.Reader(data))
    );
  }
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
