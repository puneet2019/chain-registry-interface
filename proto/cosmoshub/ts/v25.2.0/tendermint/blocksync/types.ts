/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Block } from "../../tendermint/types/block";
import { ExtendedCommit } from "../../tendermint/types/types";

export const protobufPackage = "tendermint.blocksync";

/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
  height: number;
}

/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
  height: number;
}

/** BlockResponse returns block to the requested */
export interface BlockResponse {
  block: Block | undefined;
  extCommit: ExtendedCommit | undefined;
}

/** StatusRequest requests the status of a peer. */
export interface StatusRequest {}

/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
  height: number;
  base: number;
}

export interface Message {
  blockRequest: BlockRequest | undefined;
  noBlockResponse: NoBlockResponse | undefined;
  blockResponse: BlockResponse | undefined;
  statusRequest: StatusRequest | undefined;
  statusResponse: StatusResponse | undefined;
}

const baseBlockRequest: object = { height: 0 };

export const BlockRequest = {
  encode(
    message: BlockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockRequest } as BlockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockRequest {
    const message = { ...baseBlockRequest } as BlockRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: BlockRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockRequest>): BlockRequest {
    const message = { ...baseBlockRequest } as BlockRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseNoBlockResponse: object = { height: 0 };

export const NoBlockResponse = {
  encode(
    message: NoBlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoBlockResponse } as NoBlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NoBlockResponse {
    const message = { ...baseNoBlockResponse } as NoBlockResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: NoBlockResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<NoBlockResponse>): NoBlockResponse {
    const message = { ...baseNoBlockResponse } as NoBlockResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseBlockResponse: object = {};

export const BlockResponse = {
  encode(
    message: BlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.extCommit !== undefined) {
      ExtendedCommit.encode(
        message.extCommit,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockResponse } as BlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 2:
          message.extCommit = ExtendedCommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockResponse {
    const message = { ...baseBlockResponse } as BlockResponse;
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromJSON(object.block);
    } else {
      message.block = undefined;
    }
    if (object.extCommit !== undefined && object.extCommit !== null) {
      message.extCommit = ExtendedCommit.fromJSON(object.extCommit);
    } else {
      message.extCommit = undefined;
    }
    return message;
  },

  toJSON(message: BlockResponse): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.extCommit !== undefined &&
      (obj.extCommit = message.extCommit
        ? ExtendedCommit.toJSON(message.extCommit)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockResponse>): BlockResponse {
    const message = { ...baseBlockResponse } as BlockResponse;
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    } else {
      message.block = undefined;
    }
    if (object.extCommit !== undefined && object.extCommit !== null) {
      message.extCommit = ExtendedCommit.fromPartial(object.extCommit);
    } else {
      message.extCommit = undefined;
    }
    return message;
  },
};

const baseStatusRequest: object = {};

export const StatusRequest = {
  encode(
    _: StatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatusRequest } as StatusRequest;
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

  fromJSON(_: any): StatusRequest {
    const message = { ...baseStatusRequest } as StatusRequest;
    return message;
  },

  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = { ...baseStatusRequest } as StatusRequest;
    return message;
  },
};

const baseStatusResponse: object = { height: 0, base: 0 };

export const StatusResponse = {
  encode(
    message: StatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.base !== 0) {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatusResponse } as StatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.base = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatusResponse {
    const message = { ...baseStatusResponse } as StatusResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = Number(object.base);
    } else {
      message.base = 0;
    }
    return message;
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.base !== undefined && (obj.base = message.base);
    return obj;
  },

  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = { ...baseStatusResponse } as StatusResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    } else {
      message.base = 0;
    }
    return message;
  },
};

const baseMessage: object = {};

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockRequest !== undefined) {
      BlockRequest.encode(
        message.blockRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.noBlockResponse !== undefined) {
      NoBlockResponse.encode(
        message.noBlockResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.blockResponse !== undefined) {
      BlockResponse.encode(
        message.blockResponse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.statusRequest !== undefined) {
      StatusRequest.encode(
        message.statusRequest,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.statusResponse !== undefined) {
      StatusResponse.encode(
        message.statusResponse,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessage } as Message;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockRequest = BlockRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.noBlockResponse = NoBlockResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.blockResponse = BlockResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.statusRequest = StatusRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.statusResponse = StatusResponse.decode(
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

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    if (object.blockRequest !== undefined && object.blockRequest !== null) {
      message.blockRequest = BlockRequest.fromJSON(object.blockRequest);
    } else {
      message.blockRequest = undefined;
    }
    if (
      object.noBlockResponse !== undefined &&
      object.noBlockResponse !== null
    ) {
      message.noBlockResponse = NoBlockResponse.fromJSON(
        object.noBlockResponse
      );
    } else {
      message.noBlockResponse = undefined;
    }
    if (object.blockResponse !== undefined && object.blockResponse !== null) {
      message.blockResponse = BlockResponse.fromJSON(object.blockResponse);
    } else {
      message.blockResponse = undefined;
    }
    if (object.statusRequest !== undefined && object.statusRequest !== null) {
      message.statusRequest = StatusRequest.fromJSON(object.statusRequest);
    } else {
      message.statusRequest = undefined;
    }
    if (object.statusResponse !== undefined && object.statusResponse !== null) {
      message.statusResponse = StatusResponse.fromJSON(object.statusResponse);
    } else {
      message.statusResponse = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.blockRequest !== undefined &&
      (obj.blockRequest = message.blockRequest
        ? BlockRequest.toJSON(message.blockRequest)
        : undefined);
    message.noBlockResponse !== undefined &&
      (obj.noBlockResponse = message.noBlockResponse
        ? NoBlockResponse.toJSON(message.noBlockResponse)
        : undefined);
    message.blockResponse !== undefined &&
      (obj.blockResponse = message.blockResponse
        ? BlockResponse.toJSON(message.blockResponse)
        : undefined);
    message.statusRequest !== undefined &&
      (obj.statusRequest = message.statusRequest
        ? StatusRequest.toJSON(message.statusRequest)
        : undefined);
    message.statusResponse !== undefined &&
      (obj.statusResponse = message.statusResponse
        ? StatusResponse.toJSON(message.statusResponse)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.blockRequest !== undefined && object.blockRequest !== null) {
      message.blockRequest = BlockRequest.fromPartial(object.blockRequest);
    } else {
      message.blockRequest = undefined;
    }
    if (
      object.noBlockResponse !== undefined &&
      object.noBlockResponse !== null
    ) {
      message.noBlockResponse = NoBlockResponse.fromPartial(
        object.noBlockResponse
      );
    } else {
      message.noBlockResponse = undefined;
    }
    if (object.blockResponse !== undefined && object.blockResponse !== null) {
      message.blockResponse = BlockResponse.fromPartial(object.blockResponse);
    } else {
      message.blockResponse = undefined;
    }
    if (object.statusRequest !== undefined && object.statusRequest !== null) {
      message.statusRequest = StatusRequest.fromPartial(object.statusRequest);
    } else {
      message.statusRequest = undefined;
    }
    if (object.statusResponse !== undefined && object.statusResponse !== null) {
      message.statusResponse = StatusResponse.fromPartial(
        object.statusResponse
      );
    } else {
      message.statusResponse = undefined;
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
