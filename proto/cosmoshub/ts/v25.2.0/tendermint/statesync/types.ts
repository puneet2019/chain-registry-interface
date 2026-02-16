/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.statesync";

export interface Message {
  snapshotsRequest: SnapshotsRequest | undefined;
  snapshotsResponse: SnapshotsResponse | undefined;
  chunkRequest: ChunkRequest | undefined;
  chunkResponse: ChunkResponse | undefined;
}

export interface SnapshotsRequest {}

export interface SnapshotsResponse {
  height: number;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}

export interface ChunkRequest {
  height: number;
  format: number;
  index: number;
}

export interface ChunkResponse {
  height: number;
  format: number;
  index: number;
  chunk: Uint8Array;
  missing: boolean;
}

const baseMessage: object = {};

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.snapshotsRequest !== undefined) {
      SnapshotsRequest.encode(
        message.snapshotsRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.snapshotsResponse !== undefined) {
      SnapshotsResponse.encode(
        message.snapshotsResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.chunkRequest !== undefined) {
      ChunkRequest.encode(
        message.chunkRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.chunkResponse !== undefined) {
      ChunkResponse.encode(
        message.chunkResponse,
        writer.uint32(34).fork()
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
          message.snapshotsRequest = SnapshotsRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.snapshotsResponse = SnapshotsResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.chunkRequest = ChunkRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.chunkResponse = ChunkResponse.decode(reader, reader.uint32());
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
    if (
      object.snapshotsRequest !== undefined &&
      object.snapshotsRequest !== null
    ) {
      message.snapshotsRequest = SnapshotsRequest.fromJSON(
        object.snapshotsRequest
      );
    } else {
      message.snapshotsRequest = undefined;
    }
    if (
      object.snapshotsResponse !== undefined &&
      object.snapshotsResponse !== null
    ) {
      message.snapshotsResponse = SnapshotsResponse.fromJSON(
        object.snapshotsResponse
      );
    } else {
      message.snapshotsResponse = undefined;
    }
    if (object.chunkRequest !== undefined && object.chunkRequest !== null) {
      message.chunkRequest = ChunkRequest.fromJSON(object.chunkRequest);
    } else {
      message.chunkRequest = undefined;
    }
    if (object.chunkResponse !== undefined && object.chunkResponse !== null) {
      message.chunkResponse = ChunkResponse.fromJSON(object.chunkResponse);
    } else {
      message.chunkResponse = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.snapshotsRequest !== undefined &&
      (obj.snapshotsRequest = message.snapshotsRequest
        ? SnapshotsRequest.toJSON(message.snapshotsRequest)
        : undefined);
    message.snapshotsResponse !== undefined &&
      (obj.snapshotsResponse = message.snapshotsResponse
        ? SnapshotsResponse.toJSON(message.snapshotsResponse)
        : undefined);
    message.chunkRequest !== undefined &&
      (obj.chunkRequest = message.chunkRequest
        ? ChunkRequest.toJSON(message.chunkRequest)
        : undefined);
    message.chunkResponse !== undefined &&
      (obj.chunkResponse = message.chunkResponse
        ? ChunkResponse.toJSON(message.chunkResponse)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (
      object.snapshotsRequest !== undefined &&
      object.snapshotsRequest !== null
    ) {
      message.snapshotsRequest = SnapshotsRequest.fromPartial(
        object.snapshotsRequest
      );
    } else {
      message.snapshotsRequest = undefined;
    }
    if (
      object.snapshotsResponse !== undefined &&
      object.snapshotsResponse !== null
    ) {
      message.snapshotsResponse = SnapshotsResponse.fromPartial(
        object.snapshotsResponse
      );
    } else {
      message.snapshotsResponse = undefined;
    }
    if (object.chunkRequest !== undefined && object.chunkRequest !== null) {
      message.chunkRequest = ChunkRequest.fromPartial(object.chunkRequest);
    } else {
      message.chunkRequest = undefined;
    }
    if (object.chunkResponse !== undefined && object.chunkResponse !== null) {
      message.chunkResponse = ChunkResponse.fromPartial(object.chunkResponse);
    } else {
      message.chunkResponse = undefined;
    }
    return message;
  },
};

const baseSnapshotsRequest: object = {};

export const SnapshotsRequest = {
  encode(
    _: SnapshotsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshotsRequest } as SnapshotsRequest;
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

  fromJSON(_: any): SnapshotsRequest {
    const message = { ...baseSnapshotsRequest } as SnapshotsRequest;
    return message;
  },

  toJSON(_: SnapshotsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SnapshotsRequest>): SnapshotsRequest {
    const message = { ...baseSnapshotsRequest } as SnapshotsRequest;
    return message;
  },
};

const baseSnapshotsResponse: object = { height: 0, format: 0, chunks: 0 };

export const SnapshotsResponse = {
  encode(
    message: SnapshotsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshotsResponse } as SnapshotsResponse;
    message.hash = new Uint8Array();
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotsResponse {
    const message = { ...baseSnapshotsResponse } as SnapshotsResponse;
    message.hash = new Uint8Array();
    message.metadata = new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = Number(object.format);
    } else {
      message.format = 0;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = Number(object.chunks);
    } else {
      message.chunks = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: SnapshotsResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.format !== undefined && (obj.format = message.format);
    message.chunks !== undefined && (obj.chunks = message.chunks);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SnapshotsResponse>): SnapshotsResponse {
    const message = { ...baseSnapshotsResponse } as SnapshotsResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = 0;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    } else {
      message.chunks = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseChunkRequest: object = { height: 0, format: 0, index: 0 };

export const ChunkRequest = {
  encode(
    message: ChunkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChunkRequest } as ChunkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChunkRequest {
    const message = { ...baseChunkRequest } as ChunkRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = Number(object.format);
    } else {
      message.format = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    return message;
  },

  toJSON(message: ChunkRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.format !== undefined && (obj.format = message.format);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<ChunkRequest>): ChunkRequest {
    const message = { ...baseChunkRequest } as ChunkRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    return message;
  },
};

const baseChunkResponse: object = {
  height: 0,
  format: 0,
  index: 0,
  missing: false,
};

export const ChunkResponse = {
  encode(
    message: ChunkResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(34).bytes(message.chunk);
    }
    if (message.missing === true) {
      writer.uint32(40).bool(message.missing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChunkResponse } as ChunkResponse;
    message.chunk = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        case 4:
          message.chunk = reader.bytes();
          break;
        case 5:
          message.missing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChunkResponse {
    const message = { ...baseChunkResponse } as ChunkResponse;
    message.chunk = new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = Number(object.format);
    } else {
      message.format = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.missing !== undefined && object.missing !== null) {
      message.missing = Boolean(object.missing);
    } else {
      message.missing = false;
    }
    return message;
  },

  toJSON(message: ChunkResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.format !== undefined && (obj.format = message.format);
    message.index !== undefined && (obj.index = message.index);
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(
        message.chunk !== undefined ? message.chunk : new Uint8Array()
      ));
    message.missing !== undefined && (obj.missing = message.missing);
    return obj;
  },

  fromPartial(object: DeepPartial<ChunkResponse>): ChunkResponse {
    const message = { ...baseChunkResponse } as ChunkResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    } else {
      message.chunk = new Uint8Array();
    }
    if (object.missing !== undefined && object.missing !== null) {
      message.missing = object.missing;
    } else {
      message.missing = false;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
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
