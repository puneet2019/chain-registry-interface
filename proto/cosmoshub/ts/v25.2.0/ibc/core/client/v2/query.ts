/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CounterpartyInfo } from "../../../../ibc/core/client/v2/counterparty";
import { Config } from "../../../../ibc/core/client/v2/config";

export const protobufPackage = "ibc.core.client.v2";

/**
 * QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
 * method
 */
export interface QueryCounterpartyInfoRequest {
  /** client state unique identifier */
  clientId: string;
}

/**
 * QueryCounterpartyInfoResponse is the response type for the
 * Query/CounterpartyInfo RPC method.
 */
export interface QueryCounterpartyInfoResponse {
  counterpartyInfo: CounterpartyInfo | undefined;
}

/** QueryConfigRequest is the request type for the Query/Config RPC method */
export interface QueryConfigRequest {
  /** client state unique identifier */
  clientId: string;
}

/** QueryConfigResponse is the response type for the Query/Config RPC method */
export interface QueryConfigResponse {
  config: Config | undefined;
}

const baseQueryCounterpartyInfoRequest: object = { clientId: "" };

export const QueryCounterpartyInfoRequest = {
  encode(
    message: QueryCounterpartyInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCounterpartyInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCounterpartyInfoRequest,
    } as QueryCounterpartyInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyInfoRequest {
    const message = {
      ...baseQueryCounterpartyInfoRequest,
    } as QueryCounterpartyInfoRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    return message;
  },

  toJSON(message: QueryCounterpartyInfoRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCounterpartyInfoRequest>
  ): QueryCounterpartyInfoRequest {
    const message = {
      ...baseQueryCounterpartyInfoRequest,
    } as QueryCounterpartyInfoRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    return message;
  },
};

const baseQueryCounterpartyInfoResponse: object = {};

export const QueryCounterpartyInfoResponse = {
  encode(
    message: QueryCounterpartyInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.counterpartyInfo !== undefined) {
      CounterpartyInfo.encode(
        message.counterpartyInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCounterpartyInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCounterpartyInfoResponse,
    } as QueryCounterpartyInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyInfo = CounterpartyInfo.decode(
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

  fromJSON(object: any): QueryCounterpartyInfoResponse {
    const message = {
      ...baseQueryCounterpartyInfoResponse,
    } as QueryCounterpartyInfoResponse;
    if (
      object.counterpartyInfo !== undefined &&
      object.counterpartyInfo !== null
    ) {
      message.counterpartyInfo = CounterpartyInfo.fromJSON(
        object.counterpartyInfo
      );
    } else {
      message.counterpartyInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryCounterpartyInfoResponse): unknown {
    const obj: any = {};
    message.counterpartyInfo !== undefined &&
      (obj.counterpartyInfo = message.counterpartyInfo
        ? CounterpartyInfo.toJSON(message.counterpartyInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCounterpartyInfoResponse>
  ): QueryCounterpartyInfoResponse {
    const message = {
      ...baseQueryCounterpartyInfoResponse,
    } as QueryCounterpartyInfoResponse;
    if (
      object.counterpartyInfo !== undefined &&
      object.counterpartyInfo !== null
    ) {
      message.counterpartyInfo = CounterpartyInfo.fromPartial(
        object.counterpartyInfo
      );
    } else {
      message.counterpartyInfo = undefined;
    }
    return message;
  },
};

const baseQueryConfigRequest: object = { clientId: "" };

export const QueryConfigRequest = {
  encode(
    message: QueryConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConfigRequest } as QueryConfigRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConfigRequest {
    const message = { ...baseQueryConfigRequest } as QueryConfigRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    return message;
  },

  toJSON(message: QueryConfigRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConfigRequest>): QueryConfigRequest {
    const message = { ...baseQueryConfigRequest } as QueryConfigRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    return message;
  },
};

const baseQueryConfigResponse: object = {};

export const QueryConfigResponse = {
  encode(
    message: QueryConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConfigResponse } as QueryConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConfigResponse {
    const message = { ...baseQueryConfigResponse } as QueryConfigResponse;
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },

  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConfigResponse>): QueryConfigResponse {
    const message = { ...baseQueryConfigResponse } as QueryConfigResponse;
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** CounterpartyInfo queries an IBC light counter party info. */
  CounterpartyInfo(
    request: QueryCounterpartyInfoRequest
  ): Promise<QueryCounterpartyInfoResponse>;
  /** Config queries the IBC client v2 configuration for a given client. */
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CounterpartyInfo(
    request: QueryCounterpartyInfoRequest
  ): Promise<QueryCounterpartyInfoResponse> {
    const data = QueryCounterpartyInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v2.Query",
      "CounterpartyInfo",
      data
    );
    return promise.then((data) =>
      QueryCounterpartyInfoResponse.decode(new _m0.Reader(data))
    );
  }

  Config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v2.Query",
      "Config",
      data
    );
    return promise.then((data) =>
      QueryConfigResponse.decode(new _m0.Reader(data))
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
