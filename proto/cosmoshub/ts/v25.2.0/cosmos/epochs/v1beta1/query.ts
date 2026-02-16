/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EpochInfo } from "../../../cosmos/epochs/v1beta1/genesis";

export const protobufPackage = "cosmos.epochs.v1beta1";

/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequest {}

/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponse {
  epochs: EpochInfo[];
}

/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequest {
  identifier: string;
}

/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponse {
  currentEpoch: number;
}

const baseQueryEpochInfosRequest: object = {};

export const QueryEpochInfosRequest = {
  encode(
    _: QueryEpochInfosRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEpochInfosRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEpochInfosRequest } as QueryEpochInfosRequest;
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

  fromJSON(_: any): QueryEpochInfosRequest {
    const message = { ...baseQueryEpochInfosRequest } as QueryEpochInfosRequest;
    return message;
  },

  toJSON(_: QueryEpochInfosRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryEpochInfosRequest>): QueryEpochInfosRequest {
    const message = { ...baseQueryEpochInfosRequest } as QueryEpochInfosRequest;
    return message;
  },
};

const baseQueryEpochInfosResponse: object = {};

export const QueryEpochInfosResponse = {
  encode(
    message: QueryEpochInfosResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEpochInfosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEpochInfosResponse,
    } as QueryEpochInfosResponse;
    message.epochs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfosResponse {
    const message = {
      ...baseQueryEpochInfosResponse,
    } as QueryEpochInfosResponse;
    message.epochs = [];
    if (object.epochs !== undefined && object.epochs !== null) {
      for (const e of object.epochs) {
        message.epochs.push(EpochInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryEpochInfosResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) =>
        e ? EpochInfo.toJSON(e) : undefined
      );
    } else {
      obj.epochs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEpochInfosResponse>
  ): QueryEpochInfosResponse {
    const message = {
      ...baseQueryEpochInfosResponse,
    } as QueryEpochInfosResponse;
    message.epochs = [];
    if (object.epochs !== undefined && object.epochs !== null) {
      for (const e of object.epochs) {
        message.epochs.push(EpochInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryCurrentEpochRequest: object = { identifier: "" };

export const QueryCurrentEpochRequest = {
  encode(
    message: QueryCurrentEpochRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCurrentEpochRequest,
    } as QueryCurrentEpochRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentEpochRequest {
    const message = {
      ...baseQueryCurrentEpochRequest,
    } as QueryCurrentEpochRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    return message;
  },

  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCurrentEpochRequest>
  ): QueryCurrentEpochRequest {
    const message = {
      ...baseQueryCurrentEpochRequest,
    } as QueryCurrentEpochRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    return message;
  },
};

const baseQueryCurrentEpochResponse: object = { currentEpoch: 0 };

export const QueryCurrentEpochResponse = {
  encode(
    message: QueryCurrentEpochResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentEpoch !== 0) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCurrentEpochResponse,
    } as QueryCurrentEpochResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentEpochResponse {
    const message = {
      ...baseQueryCurrentEpochResponse,
    } as QueryCurrentEpochResponse;
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = Number(object.currentEpoch);
    } else {
      message.currentEpoch = 0;
    }
    return message;
  },

  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined &&
      (obj.currentEpoch = message.currentEpoch);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCurrentEpochResponse>
  ): QueryCurrentEpochResponse {
    const message = {
      ...baseQueryCurrentEpochResponse,
    } as QueryCurrentEpochResponse;
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = object.currentEpoch;
    } else {
      message.currentEpoch = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request: QueryEpochInfosRequest): Promise<QueryEpochInfosResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(
    request: QueryCurrentEpochRequest
  ): Promise<QueryCurrentEpochResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  EpochInfos(
    request: QueryEpochInfosRequest
  ): Promise<QueryEpochInfosResponse> {
    const data = QueryEpochInfosRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.epochs.v1beta1.Query",
      "EpochInfos",
      data
    );
    return promise.then((data) =>
      QueryEpochInfosResponse.decode(new _m0.Reader(data))
    );
  }

  CurrentEpoch(
    request: QueryCurrentEpochRequest
  ): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.epochs.v1beta1.Query",
      "CurrentEpoch",
      data
    );
    return promise.then((data) =>
      QueryCurrentEpochResponse.decode(new _m0.Reader(data))
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
