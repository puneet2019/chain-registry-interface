/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  RequestFinalizeBlock,
  ResponseFinalizeBlock,
  ResponseCommit,
} from "../../../../tendermint/abci/types";
import { StoreKVPair } from "../../../../cosmos/store/v1beta1/listening";

export const protobufPackage = "cosmos.store.streaming.abci";

/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
  req: RequestFinalizeBlock | undefined;
  res: ResponseFinalizeBlock | undefined;
}

/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {}

/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  blockHeight: number;
  res: ResponseCommit | undefined;
  changeSet: StoreKVPair[];
}

/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {}

const baseListenFinalizeBlockRequest: object = {};

export const ListenFinalizeBlockRequest = {
  encode(
    message: ListenFinalizeBlockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.req !== undefined) {
      RequestFinalizeBlock.encode(
        message.req,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.res !== undefined) {
      ResponseFinalizeBlock.encode(
        message.res,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListenFinalizeBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListenFinalizeBlockRequest,
    } as ListenFinalizeBlockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.req = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.res = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListenFinalizeBlockRequest {
    const message = {
      ...baseListenFinalizeBlockRequest,
    } as ListenFinalizeBlockRequest;
    if (object.req !== undefined && object.req !== null) {
      message.req = RequestFinalizeBlock.fromJSON(object.req);
    } else {
      message.req = undefined;
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseFinalizeBlock.fromJSON(object.res);
    } else {
      message.res = undefined;
    }
    return message;
  },

  toJSON(message: ListenFinalizeBlockRequest): unknown {
    const obj: any = {};
    message.req !== undefined &&
      (obj.req = message.req
        ? RequestFinalizeBlock.toJSON(message.req)
        : undefined);
    message.res !== undefined &&
      (obj.res = message.res
        ? ResponseFinalizeBlock.toJSON(message.res)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListenFinalizeBlockRequest>
  ): ListenFinalizeBlockRequest {
    const message = {
      ...baseListenFinalizeBlockRequest,
    } as ListenFinalizeBlockRequest;
    if (object.req !== undefined && object.req !== null) {
      message.req = RequestFinalizeBlock.fromPartial(object.req);
    } else {
      message.req = undefined;
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseFinalizeBlock.fromPartial(object.res);
    } else {
      message.res = undefined;
    }
    return message;
  },
};

const baseListenFinalizeBlockResponse: object = {};

export const ListenFinalizeBlockResponse = {
  encode(
    _: ListenFinalizeBlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListenFinalizeBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListenFinalizeBlockResponse,
    } as ListenFinalizeBlockResponse;
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

  fromJSON(_: any): ListenFinalizeBlockResponse {
    const message = {
      ...baseListenFinalizeBlockResponse,
    } as ListenFinalizeBlockResponse;
    return message;
  },

  toJSON(_: ListenFinalizeBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ListenFinalizeBlockResponse>
  ): ListenFinalizeBlockResponse {
    const message = {
      ...baseListenFinalizeBlockResponse,
    } as ListenFinalizeBlockResponse;
    return message;
  },
};

const baseListenCommitRequest: object = { blockHeight: 0 };

export const ListenCommitRequest = {
  encode(
    message: ListenCommitRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.res !== undefined) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListenCommitRequest } as ListenCommitRequest;
    message.changeSet = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 3:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListenCommitRequest {
    const message = { ...baseListenCommitRequest } as ListenCommitRequest;
    message.changeSet = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseCommit.fromJSON(object.res);
    } else {
      message.res = undefined;
    }
    if (object.changeSet !== undefined && object.changeSet !== null) {
      for (const e of object.changeSet) {
        message.changeSet.push(StoreKVPair.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListenCommitRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.res !== undefined &&
      (obj.res = message.res ? ResponseCommit.toJSON(message.res) : undefined);
    if (message.changeSet) {
      obj.changeSet = message.changeSet.map((e) =>
        e ? StoreKVPair.toJSON(e) : undefined
      );
    } else {
      obj.changeSet = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListenCommitRequest>): ListenCommitRequest {
    const message = { ...baseListenCommitRequest } as ListenCommitRequest;
    message.changeSet = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseCommit.fromPartial(object.res);
    } else {
      message.res = undefined;
    }
    if (object.changeSet !== undefined && object.changeSet !== null) {
      for (const e of object.changeSet) {
        message.changeSet.push(StoreKVPair.fromPartial(e));
      }
    }
    return message;
  },
};

const baseListenCommitResponse: object = {};

export const ListenCommitResponse = {
  encode(
    _: ListenCommitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListenCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListenCommitResponse } as ListenCommitResponse;
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

  fromJSON(_: any): ListenCommitResponse {
    const message = { ...baseListenCommitResponse } as ListenCommitResponse;
    return message;
  },

  toJSON(_: ListenCommitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListenCommitResponse>): ListenCommitResponse {
    const message = { ...baseListenCommitResponse } as ListenCommitResponse;
    return message;
  },
};

/** ABCIListenerService is the service for the BaseApp ABCIListener interface */
export interface ABCIListenerService {
  /** ListenFinalizeBlock is the corresponding endpoint for ABCIListener.ListenEndBlock */
  ListenFinalizeBlock(
    request: ListenFinalizeBlockRequest
  ): Promise<ListenFinalizeBlockResponse>;
  /** ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit */
  ListenCommit(request: ListenCommitRequest): Promise<ListenCommitResponse>;
}

export class ABCIListenerServiceClientImpl implements ABCIListenerService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ListenFinalizeBlock(
    request: ListenFinalizeBlockRequest
  ): Promise<ListenFinalizeBlockResponse> {
    const data = ListenFinalizeBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.store.streaming.abci.ABCIListenerService",
      "ListenFinalizeBlock",
      data
    );
    return promise.then((data) =>
      ListenFinalizeBlockResponse.decode(new _m0.Reader(data))
    );
  }

  ListenCommit(request: ListenCommitRequest): Promise<ListenCommitResponse> {
    const data = ListenCommitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.store.streaming.abci.ABCIListenerService",
      "ListenCommit",
      data
    );
    return promise.then((data) =>
      ListenCommitResponse.decode(new _m0.Reader(data))
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
