/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  LiquidValidator,
  Params,
  TokenizeShareRecord,
  TokenizeShareRecordReward,
} from "../../../gaia/liquid/v1beta1/liquid";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "gaia.liquid.v1beta1";

/**
 * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
 * RPC method.
 */
export interface QueryLiquidValidatorRequest {
  validatorAddr: string;
}

/**
 * QueryLiquidValidatorResponse is the response type for the
 * Query/LiquidValidator RPC method.
 */
export interface QueryLiquidValidatorResponse {
  liquidValidator: LiquidValidator | undefined;
}

/**
 * QueryLiquidValidatorsRequest is request type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryLiquidValidatorsResponse is response type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsResponse {
  liquidValidators: LiquidValidator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  id: number;
}

/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record: TokenizeShareRecord | undefined;
}

/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  denom: string;
}

/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record: TokenizeShareRecord | undefined;
}

/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  owner: string;
}

/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}

/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}

/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  id: number;
}

/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}

/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value: Coin | undefined;
}

/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}

/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  tokens: string;
}

/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  address: string;
}

/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}

/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
  ownerAddress: string;
}

/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}

const baseQueryLiquidValidatorRequest: object = { validatorAddr: "" };

export const QueryLiquidValidatorRequest = {
  encode(
    message: QueryLiquidValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLiquidValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLiquidValidatorRequest,
    } as QueryLiquidValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidValidatorRequest {
    const message = {
      ...baseQueryLiquidValidatorRequest,
    } as QueryLiquidValidatorRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryLiquidValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLiquidValidatorRequest>
  ): QueryLiquidValidatorRequest {
    const message = {
      ...baseQueryLiquidValidatorRequest,
    } as QueryLiquidValidatorRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryLiquidValidatorResponse: object = {};

export const QueryLiquidValidatorResponse = {
  encode(
    message: QueryLiquidValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidValidator !== undefined) {
      LiquidValidator.encode(
        message.liquidValidator,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLiquidValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLiquidValidatorResponse,
    } as QueryLiquidValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidator = LiquidValidator.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidValidatorResponse {
    const message = {
      ...baseQueryLiquidValidatorResponse,
    } as QueryLiquidValidatorResponse;
    if (
      object.liquidValidator !== undefined &&
      object.liquidValidator !== null
    ) {
      message.liquidValidator = LiquidValidator.fromJSON(
        object.liquidValidator
      );
    } else {
      message.liquidValidator = undefined;
    }
    return message;
  },

  toJSON(message: QueryLiquidValidatorResponse): unknown {
    const obj: any = {};
    message.liquidValidator !== undefined &&
      (obj.liquidValidator = message.liquidValidator
        ? LiquidValidator.toJSON(message.liquidValidator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLiquidValidatorResponse>
  ): QueryLiquidValidatorResponse {
    const message = {
      ...baseQueryLiquidValidatorResponse,
    } as QueryLiquidValidatorResponse;
    if (
      object.liquidValidator !== undefined &&
      object.liquidValidator !== null
    ) {
      message.liquidValidator = LiquidValidator.fromPartial(
        object.liquidValidator
      );
    } else {
      message.liquidValidator = undefined;
    }
    return message;
  },
};

const baseQueryLiquidValidatorsRequest: object = {};

export const QueryLiquidValidatorsRequest = {
  encode(
    message: QueryLiquidValidatorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLiquidValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLiquidValidatorsRequest,
    } as QueryLiquidValidatorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidValidatorsRequest {
    const message = {
      ...baseQueryLiquidValidatorsRequest,
    } as QueryLiquidValidatorsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryLiquidValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLiquidValidatorsRequest>
  ): QueryLiquidValidatorsRequest {
    const message = {
      ...baseQueryLiquidValidatorsRequest,
    } as QueryLiquidValidatorsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryLiquidValidatorsResponse: object = {};

export const QueryLiquidValidatorsResponse = {
  encode(
    message: QueryLiquidValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidValidators) {
      LiquidValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLiquidValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLiquidValidatorsResponse,
    } as QueryLiquidValidatorsResponse;
    message.liquidValidators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidators.push(
            LiquidValidator.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidValidatorsResponse {
    const message = {
      ...baseQueryLiquidValidatorsResponse,
    } as QueryLiquidValidatorsResponse;
    message.liquidValidators = [];
    if (
      object.liquidValidators !== undefined &&
      object.liquidValidators !== null
    ) {
      for (const e of object.liquidValidators) {
        message.liquidValidators.push(LiquidValidator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryLiquidValidatorsResponse): unknown {
    const obj: any = {};
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map((e) =>
        e ? LiquidValidator.toJSON(e) : undefined
      );
    } else {
      obj.liquidValidators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLiquidValidatorsResponse>
  ): QueryLiquidValidatorsResponse {
    const message = {
      ...baseQueryLiquidValidatorsResponse,
    } as QueryLiquidValidatorsResponse;
    message.liquidValidators = [];
    if (
      object.liquidValidators !== undefined &&
      object.liquidValidators !== null
    ) {
      for (const e of object.liquidValidators) {
        message.liquidValidators.push(LiquidValidator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordByIdRequest: object = { id: 0 };

export const QueryTokenizeShareRecordByIdRequest = {
  encode(
    message: QueryTokenizeShareRecordByIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByIdRequest,
    } as QueryTokenizeShareRecordByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByIdRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByIdRequest,
    } as QueryTokenizeShareRecordByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByIdRequest>
  ): QueryTokenizeShareRecordByIdRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByIdRequest,
    } as QueryTokenizeShareRecordByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordByIdResponse: object = {};

export const QueryTokenizeShareRecordByIdResponse = {
  encode(
    message: QueryTokenizeShareRecordByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(
        message.record,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByIdResponse,
    } as QueryTokenizeShareRecordByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByIdResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByIdResponse,
    } as QueryTokenizeShareRecordByIdResponse;
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromJSON(object.record);
    } else {
      message.record = undefined;
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByIdResponse): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record
        ? TokenizeShareRecord.toJSON(message.record)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByIdResponse>
  ): QueryTokenizeShareRecordByIdResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByIdResponse,
    } as QueryTokenizeShareRecordByIdResponse;
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromPartial(object.record);
    } else {
      message.record = undefined;
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordByDenomRequest: object = { denom: "" };

export const QueryTokenizeShareRecordByDenomRequest = {
  encode(
    message: QueryTokenizeShareRecordByDenomRequest,
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
  ): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByDenomRequest,
    } as QueryTokenizeShareRecordByDenomRequest;
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

  fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomRequest,
    } as QueryTokenizeShareRecordByDenomRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByDenomRequest>
  ): QueryTokenizeShareRecordByDenomRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomRequest,
    } as QueryTokenizeShareRecordByDenomRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordByDenomResponse: object = {};

export const QueryTokenizeShareRecordByDenomResponse = {
  encode(
    message: QueryTokenizeShareRecordByDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(
        message.record,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByDenomResponse,
    } as QueryTokenizeShareRecordByDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomResponse,
    } as QueryTokenizeShareRecordByDenomResponse;
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromJSON(object.record);
    } else {
      message.record = undefined;
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByDenomResponse): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record
        ? TokenizeShareRecord.toJSON(message.record)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByDenomResponse>
  ): QueryTokenizeShareRecordByDenomResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomResponse,
    } as QueryTokenizeShareRecordByDenomResponse;
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromPartial(object.record);
    } else {
      message.record = undefined;
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordsOwnedRequest: object = { owner: "" };

export const QueryTokenizeShareRecordsOwnedRequest = {
  encode(
    message: QueryTokenizeShareRecordsOwnedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedRequest,
    } as QueryTokenizeShareRecordsOwnedRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedRequest,
    } as QueryTokenizeShareRecordsOwnedRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordsOwnedRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>
  ): QueryTokenizeShareRecordsOwnedRequest {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedRequest,
    } as QueryTokenizeShareRecordsOwnedRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordsOwnedResponse: object = {};

export const QueryTokenizeShareRecordsOwnedResponse = {
  encode(
    message: QueryTokenizeShareRecordsOwnedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedResponse,
    } as QueryTokenizeShareRecordsOwnedResponse;
    message.records = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(
            TokenizeShareRecord.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedResponse,
    } as QueryTokenizeShareRecordsOwnedResponse;
    message.records = [];
    if (object.records !== undefined && object.records !== null) {
      for (const e of object.records) {
        message.records.push(TokenizeShareRecord.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordsOwnedResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? TokenizeShareRecord.toJSON(e) : undefined
      );
    } else {
      obj.records = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordsOwnedResponse>
  ): QueryTokenizeShareRecordsOwnedResponse {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedResponse,
    } as QueryTokenizeShareRecordsOwnedResponse;
    message.records = [];
    if (object.records !== undefined && object.records !== null) {
      for (const e of object.records) {
        message.records.push(TokenizeShareRecord.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllTokenizeShareRecordsRequest: object = {};

export const QueryAllTokenizeShareRecordsRequest = {
  encode(
    message: QueryAllTokenizeShareRecordsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTokenizeShareRecordsRequest,
    } as QueryAllTokenizeShareRecordsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenizeShareRecordsRequest {
    const message = {
      ...baseQueryAllTokenizeShareRecordsRequest,
    } as QueryAllTokenizeShareRecordsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTokenizeShareRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenizeShareRecordsRequest>
  ): QueryAllTokenizeShareRecordsRequest {
    const message = {
      ...baseQueryAllTokenizeShareRecordsRequest,
    } as QueryAllTokenizeShareRecordsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTokenizeShareRecordsResponse: object = {};

export const QueryAllTokenizeShareRecordsResponse = {
  encode(
    message: QueryAllTokenizeShareRecordsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTokenizeShareRecordsResponse,
    } as QueryAllTokenizeShareRecordsResponse;
    message.records = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(
            TokenizeShareRecord.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenizeShareRecordsResponse {
    const message = {
      ...baseQueryAllTokenizeShareRecordsResponse,
    } as QueryAllTokenizeShareRecordsResponse;
    message.records = [];
    if (object.records !== undefined && object.records !== null) {
      for (const e of object.records) {
        message.records.push(TokenizeShareRecord.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTokenizeShareRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? TokenizeShareRecord.toJSON(e) : undefined
      );
    } else {
      obj.records = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenizeShareRecordsResponse>
  ): QueryAllTokenizeShareRecordsResponse {
    const message = {
      ...baseQueryAllTokenizeShareRecordsResponse,
    } as QueryAllTokenizeShareRecordsResponse;
    message.records = [];
    if (object.records !== undefined && object.records !== null) {
      for (const e of object.records) {
        message.records.push(TokenizeShareRecord.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryLastTokenizeShareRecordIdRequest: object = {};

export const QueryLastTokenizeShareRecordIdRequest = {
  encode(
    _: QueryLastTokenizeShareRecordIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastTokenizeShareRecordIdRequest,
    } as QueryLastTokenizeShareRecordIdRequest;
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

  fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdRequest,
    } as QueryLastTokenizeShareRecordIdRequest;
    return message;
  },

  toJSON(_: QueryLastTokenizeShareRecordIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryLastTokenizeShareRecordIdRequest>
  ): QueryLastTokenizeShareRecordIdRequest {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdRequest,
    } as QueryLastTokenizeShareRecordIdRequest;
    return message;
  },
};

const baseQueryLastTokenizeShareRecordIdResponse: object = { id: 0 };

export const QueryLastTokenizeShareRecordIdResponse = {
  encode(
    message: QueryLastTokenizeShareRecordIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastTokenizeShareRecordIdResponse,
    } as QueryLastTokenizeShareRecordIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdResponse,
    } as QueryLastTokenizeShareRecordIdResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryLastTokenizeShareRecordIdResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastTokenizeShareRecordIdResponse>
  ): QueryLastTokenizeShareRecordIdResponse {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdResponse,
    } as QueryLastTokenizeShareRecordIdResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryTotalTokenizeSharedAssetsRequest: object = {};

export const QueryTotalTokenizeSharedAssetsRequest = {
  encode(
    _: QueryTotalTokenizeSharedAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsRequest,
    } as QueryTotalTokenizeSharedAssetsRequest;
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

  fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsRequest,
    } as QueryTotalTokenizeSharedAssetsRequest;
    return message;
  },

  toJSON(_: QueryTotalTokenizeSharedAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalTokenizeSharedAssetsRequest>
  ): QueryTotalTokenizeSharedAssetsRequest {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsRequest,
    } as QueryTotalTokenizeSharedAssetsRequest;
    return message;
  },
};

const baseQueryTotalTokenizeSharedAssetsResponse: object = {};

export const QueryTotalTokenizeSharedAssetsResponse = {
  encode(
    message: QueryTotalTokenizeSharedAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsResponse,
    } as QueryTotalTokenizeSharedAssetsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsResponse,
    } as QueryTotalTokenizeSharedAssetsResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalTokenizeSharedAssetsResponse): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalTokenizeSharedAssetsResponse>
  ): QueryTotalTokenizeSharedAssetsResponse {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsResponse,
    } as QueryTotalTokenizeSharedAssetsResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseQueryTotalLiquidStaked: object = {};

export const QueryTotalLiquidStaked = {
  encode(
    _: QueryTotalLiquidStaked,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalLiquidStaked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalLiquidStaked } as QueryTotalLiquidStaked;
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

  fromJSON(_: any): QueryTotalLiquidStaked {
    const message = { ...baseQueryTotalLiquidStaked } as QueryTotalLiquidStaked;
    return message;
  },

  toJSON(_: QueryTotalLiquidStaked): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = { ...baseQueryTotalLiquidStaked } as QueryTotalLiquidStaked;
    return message;
  },
};

const baseQueryTotalLiquidStakedResponse: object = { tokens: "" };

export const QueryTotalLiquidStakedResponse = {
  encode(
    message: QueryTotalLiquidStakedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalLiquidStakedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalLiquidStakedResponse,
    } as QueryTotalLiquidStakedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalLiquidStakedResponse {
    const message = {
      ...baseQueryTotalLiquidStakedResponse,
    } as QueryTotalLiquidStakedResponse;
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = String(object.tokens);
    } else {
      message.tokens = "";
    }
    return message;
  },

  toJSON(message: QueryTotalLiquidStakedResponse): unknown {
    const obj: any = {};
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalLiquidStakedResponse>
  ): QueryTotalLiquidStakedResponse {
    const message = {
      ...baseQueryTotalLiquidStakedResponse,
    } as QueryTotalLiquidStakedResponse;
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    } else {
      message.tokens = "";
    }
    return message;
  },
};

const baseQueryTokenizeShareLockInfo: object = { address: "" };

export const QueryTokenizeShareLockInfo = {
  encode(
    message: QueryTokenizeShareLockInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareLockInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareLockInfo,
    } as QueryTokenizeShareLockInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareLockInfo {
    const message = {
      ...baseQueryTokenizeShareLockInfo,
    } as QueryTokenizeShareLockInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareLockInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareLockInfo>
  ): QueryTokenizeShareLockInfo {
    const message = {
      ...baseQueryTokenizeShareLockInfo,
    } as QueryTokenizeShareLockInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryTokenizeShareLockInfoResponse: object = {
  status: "",
  expirationTime: "",
};

export const QueryTokenizeShareLockInfoResponse = {
  encode(
    message: QueryTokenizeShareLockInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareLockInfoResponse,
    } as QueryTokenizeShareLockInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareLockInfoResponse {
    const message = {
      ...baseQueryTokenizeShareLockInfoResponse,
    } as QueryTokenizeShareLockInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.expirationTime !== undefined && object.expirationTime !== null) {
      message.expirationTime = String(object.expirationTime);
    } else {
      message.expirationTime = "";
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareLockInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.expirationTime !== undefined &&
      (obj.expirationTime = message.expirationTime);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareLockInfoResponse>
  ): QueryTokenizeShareLockInfoResponse {
    const message = {
      ...baseQueryTokenizeShareLockInfoResponse,
    } as QueryTokenizeShareLockInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.expirationTime !== undefined && object.expirationTime !== null) {
      message.expirationTime = object.expirationTime;
    } else {
      message.expirationTime = "";
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordRewardRequest: object = { ownerAddress: "" };

export const QueryTokenizeShareRecordRewardRequest = {
  encode(
    message: QueryTokenizeShareRecordRewardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordRewardRequest,
    } as QueryTokenizeShareRecordRewardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordRewardRequest {
    const message = {
      ...baseQueryTokenizeShareRecordRewardRequest,
    } as QueryTokenizeShareRecordRewardRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordRewardRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordRewardRequest>
  ): QueryTokenizeShareRecordRewardRequest {
    const message = {
      ...baseQueryTokenizeShareRecordRewardRequest,
    } as QueryTokenizeShareRecordRewardRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    return message;
  },
};

const baseQueryTokenizeShareRecordRewardResponse: object = {};

export const QueryTokenizeShareRecordRewardResponse = {
  encode(
    message: QueryTokenizeShareRecordRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordRewardResponse,
    } as QueryTokenizeShareRecordRewardResponse;
    message.rewards = [];
    message.total = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(
            TokenizeShareRecordReward.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordRewardResponse {
    const message = {
      ...baseQueryTokenizeShareRecordRewardResponse,
    } as QueryTokenizeShareRecordRewardResponse;
    message.rewards = [];
    message.total = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(TokenizeShareRecordReward.fromJSON(e));
      }
    }
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? TokenizeShareRecordReward.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordRewardResponse>
  ): QueryTokenizeShareRecordRewardResponse {
    const message = {
      ...baseQueryTokenizeShareRecordRewardResponse,
    } as QueryTokenizeShareRecordRewardResponse;
    message.rewards = [];
    message.total = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(TokenizeShareRecordReward.fromPartial(e));
      }
    }
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * LiquidValidators queries all liquid validators.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  LiquidValidators(
    request: QueryLiquidValidatorsRequest
  ): Promise<QueryLiquidValidatorsResponse>;
  /** Query for an individual liquid validator by validator address */
  LiquidValidator(
    request: QueryLiquidValidatorRequest
  ): Promise<QueryLiquidValidatorResponse>;
  /** Query for individual tokenize share record information by share by id */
  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest
  ): Promise<QueryTokenizeShareRecordByIdResponse>;
  /** Query for individual tokenize share record information by share denom */
  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest
  ): Promise<QueryTokenizeShareRecordByDenomResponse>;
  /** Query tokenize share records by address */
  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest
  ): Promise<QueryTokenizeShareRecordsOwnedResponse>;
  /** Query for all tokenize share records */
  AllTokenizeShareRecords(
    request: QueryAllTokenizeShareRecordsRequest
  ): Promise<QueryAllTokenizeShareRecordsResponse>;
  /** Query for last tokenize share record id */
  LastTokenizeShareRecordId(
    request: QueryLastTokenizeShareRecordIdRequest
  ): Promise<QueryLastTokenizeShareRecordIdResponse>;
  /** Query for total tokenized staked assets */
  TotalTokenizeSharedAssets(
    request: QueryTotalTokenizeSharedAssetsRequest
  ): Promise<QueryTotalTokenizeSharedAssetsResponse>;
  /**
   * Query for total liquid staked (including tokenized shares or owned by an
   * liquid staking provider)
   */
  TotalLiquidStaked(
    request: QueryTotalLiquidStaked
  ): Promise<QueryTotalLiquidStakedResponse>;
  /** Query tokenize share locks */
  TokenizeShareLockInfo(
    request: QueryTokenizeShareLockInfo
  ): Promise<QueryTokenizeShareLockInfoResponse>;
  /** Parameters queries the liquid parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** TokenizeShareRecordReward queries the tokenize share record rewards */
  TokenizeShareRecordReward(
    request: QueryTokenizeShareRecordRewardRequest
  ): Promise<QueryTokenizeShareRecordRewardResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  LiquidValidators(
    request: QueryLiquidValidatorsRequest
  ): Promise<QueryLiquidValidatorsResponse> {
    const data = QueryLiquidValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "LiquidValidators",
      data
    );
    return promise.then((data) =>
      QueryLiquidValidatorsResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidValidator(
    request: QueryLiquidValidatorRequest
  ): Promise<QueryLiquidValidatorResponse> {
    const data = QueryLiquidValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "LiquidValidator",
      data
    );
    return promise.then((data) =>
      QueryLiquidValidatorResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest
  ): Promise<QueryTokenizeShareRecordByIdResponse> {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TokenizeShareRecordById",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordByIdResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest
  ): Promise<QueryTokenizeShareRecordByDenomResponse> {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TokenizeShareRecordByDenom",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordByDenomResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest
  ): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TokenizeShareRecordsOwned",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordsOwnedResponse.decode(new _m0.Reader(data))
    );
  }

  AllTokenizeShareRecords(
    request: QueryAllTokenizeShareRecordsRequest
  ): Promise<QueryAllTokenizeShareRecordsResponse> {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "AllTokenizeShareRecords",
      data
    );
    return promise.then((data) =>
      QueryAllTokenizeShareRecordsResponse.decode(new _m0.Reader(data))
    );
  }

  LastTokenizeShareRecordId(
    request: QueryLastTokenizeShareRecordIdRequest
  ): Promise<QueryLastTokenizeShareRecordIdResponse> {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "LastTokenizeShareRecordId",
      data
    );
    return promise.then((data) =>
      QueryLastTokenizeShareRecordIdResponse.decode(new _m0.Reader(data))
    );
  }

  TotalTokenizeSharedAssets(
    request: QueryTotalTokenizeSharedAssetsRequest
  ): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TotalTokenizeSharedAssets",
      data
    );
    return promise.then((data) =>
      QueryTotalTokenizeSharedAssetsResponse.decode(new _m0.Reader(data))
    );
  }

  TotalLiquidStaked(
    request: QueryTotalLiquidStaked
  ): Promise<QueryTotalLiquidStakedResponse> {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TotalLiquidStaked",
      data
    );
    return promise.then((data) =>
      QueryTotalLiquidStakedResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareLockInfo(
    request: QueryTokenizeShareLockInfo
  ): Promise<QueryTokenizeShareLockInfoResponse> {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TokenizeShareLockInfo",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareLockInfoResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordReward(
    request: QueryTokenizeShareRecordRewardRequest
  ): Promise<QueryTokenizeShareRecordRewardResponse> {
    const data = QueryTokenizeShareRecordRewardRequest.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Query",
      "TokenizeShareRecordReward",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordRewardResponse.decode(new _m0.Reader(data))
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
