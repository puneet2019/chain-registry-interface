/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ContinuousFund, Params } from "../../../cosmos/protocolpool/v1/types";

export const protobufPackage = "cosmos.protocolpool.v1";

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: Coin[];
}

/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundRequest {
  /** recipient is the recipient address to query unclaimed budget amount for. */
  recipient: string;
}

/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundResponse {
  /** ContinuousFunds is the given continuous fund returned in the query. */
  continuousFund: ContinuousFund | undefined;
}

/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsRequest {}

/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsResponse {
  /** ContinuousFunds defines all continuous funds in state. */
  continuousFunds: ContinuousFund[];
}

/** QueryParamsRequest is the response type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params | undefined;
}

const baseQueryCommunityPoolRequest: object = {};

export const QueryCommunityPoolRequest = {
  encode(
    _: QueryCommunityPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunityPoolRequest,
    } as QueryCommunityPoolRequest;
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

  fromJSON(_: any): QueryCommunityPoolRequest {
    const message = {
      ...baseQueryCommunityPoolRequest,
    } as QueryCommunityPoolRequest;
    return message;
  },

  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCommunityPoolRequest>
  ): QueryCommunityPoolRequest {
    const message = {
      ...baseQueryCommunityPoolRequest,
    } as QueryCommunityPoolRequest;
    return message;
  },
};

const baseQueryCommunityPoolResponse: object = {};

export const QueryCommunityPoolResponse = {
  encode(
    message: QueryCommunityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunityPoolResponse,
    } as QueryCommunityPoolResponse;
    message.pool = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityPoolResponse {
    const message = {
      ...baseQueryCommunityPoolResponse,
    } as QueryCommunityPoolResponse;
    message.pool = [];
    if (object.pool !== undefined && object.pool !== null) {
      for (const e of object.pool) {
        message.pool.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityPoolResponse>
  ): QueryCommunityPoolResponse {
    const message = {
      ...baseQueryCommunityPoolResponse,
    } as QueryCommunityPoolResponse;
    message.pool = [];
    if (object.pool !== undefined && object.pool !== null) {
      for (const e of object.pool) {
        message.pool.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryContinuousFundRequest: object = { recipient: "" };

export const QueryContinuousFundRequest = {
  encode(
    message: QueryContinuousFundRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContinuousFundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContinuousFundRequest,
    } as QueryContinuousFundRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContinuousFundRequest {
    const message = {
      ...baseQueryContinuousFundRequest,
    } as QueryContinuousFundRequest;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: QueryContinuousFundRequest): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContinuousFundRequest>
  ): QueryContinuousFundRequest {
    const message = {
      ...baseQueryContinuousFundRequest,
    } as QueryContinuousFundRequest;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

const baseQueryContinuousFundResponse: object = {};

export const QueryContinuousFundResponse = {
  encode(
    message: QueryContinuousFundResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.continuousFund !== undefined) {
      ContinuousFund.encode(
        message.continuousFund,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContinuousFundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContinuousFundResponse,
    } as QueryContinuousFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFund = ContinuousFund.decode(
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

  fromJSON(object: any): QueryContinuousFundResponse {
    const message = {
      ...baseQueryContinuousFundResponse,
    } as QueryContinuousFundResponse;
    if (object.continuousFund !== undefined && object.continuousFund !== null) {
      message.continuousFund = ContinuousFund.fromJSON(object.continuousFund);
    } else {
      message.continuousFund = undefined;
    }
    return message;
  },

  toJSON(message: QueryContinuousFundResponse): unknown {
    const obj: any = {};
    message.continuousFund !== undefined &&
      (obj.continuousFund = message.continuousFund
        ? ContinuousFund.toJSON(message.continuousFund)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContinuousFundResponse>
  ): QueryContinuousFundResponse {
    const message = {
      ...baseQueryContinuousFundResponse,
    } as QueryContinuousFundResponse;
    if (object.continuousFund !== undefined && object.continuousFund !== null) {
      message.continuousFund = ContinuousFund.fromPartial(
        object.continuousFund
      );
    } else {
      message.continuousFund = undefined;
    }
    return message;
  },
};

const baseQueryContinuousFundsRequest: object = {};

export const QueryContinuousFundsRequest = {
  encode(
    _: QueryContinuousFundsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContinuousFundsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContinuousFundsRequest,
    } as QueryContinuousFundsRequest;
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

  fromJSON(_: any): QueryContinuousFundsRequest {
    const message = {
      ...baseQueryContinuousFundsRequest,
    } as QueryContinuousFundsRequest;
    return message;
  },

  toJSON(_: QueryContinuousFundsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryContinuousFundsRequest>
  ): QueryContinuousFundsRequest {
    const message = {
      ...baseQueryContinuousFundsRequest,
    } as QueryContinuousFundsRequest;
    return message;
  },
};

const baseQueryContinuousFundsResponse: object = {};

export const QueryContinuousFundsResponse = {
  encode(
    message: QueryContinuousFundsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContinuousFundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContinuousFundsResponse,
    } as QueryContinuousFundsResponse;
    message.continuousFunds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFunds.push(
            ContinuousFund.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContinuousFundsResponse {
    const message = {
      ...baseQueryContinuousFundsResponse,
    } as QueryContinuousFundsResponse;
    message.continuousFunds = [];
    if (
      object.continuousFunds !== undefined &&
      object.continuousFunds !== null
    ) {
      for (const e of object.continuousFunds) {
        message.continuousFunds.push(ContinuousFund.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryContinuousFundsResponse): unknown {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuousFunds = message.continuousFunds.map((e) =>
        e ? ContinuousFund.toJSON(e) : undefined
      );
    } else {
      obj.continuousFunds = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContinuousFundsResponse>
  ): QueryContinuousFundsResponse {
    const message = {
      ...baseQueryContinuousFundsResponse,
    } as QueryContinuousFundsResponse;
    message.continuousFunds = [];
    if (
      object.continuousFunds !== undefined &&
      object.continuousFunds !== null
    ) {
      for (const e of object.continuousFunds) {
        message.continuousFunds.push(ContinuousFund.fromPartial(e));
      }
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

/** Query defines the gRPC querier service for community pool module. */
export interface Query {
  /** CommunityPool queries the community pool coins. */
  CommunityPool(
    request: QueryCommunityPoolRequest
  ): Promise<QueryCommunityPoolResponse>;
  /** ContinuousFund queries a continuous fund by the recipient is is associated with. */
  ContinuousFund(
    request: QueryContinuousFundRequest
  ): Promise<QueryContinuousFundResponse>;
  /** ContinuousFunds queries all continuous funds in the store. */
  ContinuousFunds(
    request: QueryContinuousFundsRequest
  ): Promise<QueryContinuousFundsResponse>;
  /** Params returns the total set of x/protocolpool parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CommunityPool(
    request: QueryCommunityPoolRequest
  ): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Query",
      "CommunityPool",
      data
    );
    return promise.then((data) =>
      QueryCommunityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  ContinuousFund(
    request: QueryContinuousFundRequest
  ): Promise<QueryContinuousFundResponse> {
    const data = QueryContinuousFundRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Query",
      "ContinuousFund",
      data
    );
    return promise.then((data) =>
      QueryContinuousFundResponse.decode(new _m0.Reader(data))
    );
  }

  ContinuousFunds(
    request: QueryContinuousFundsRequest
  ): Promise<QueryContinuousFundsResponse> {
    const data = QueryContinuousFundsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Query",
      "ContinuousFunds",
      data
    );
    return promise.then((data) =>
      QueryContinuousFundsResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
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
