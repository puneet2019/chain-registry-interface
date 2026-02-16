/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zipkin.testing";

export interface HelloRequest {
  payload: string;
}

export interface HelloResponse {
  payload: string;
  metadata: { [key: string]: string };
  spanContext: { [key: string]: string };
}

export interface HelloResponse_MetadataEntry {
  key: string;
  value: string;
}

export interface HelloResponse_SpanContextEntry {
  key: string;
  value: string;
}

const baseHelloRequest: object = { payload: "" };

export const HelloRequest = {
  encode(
    message: HelloRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== "") {
      writer.uint32(10).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHelloRequest } as HelloRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HelloRequest {
    const message = { ...baseHelloRequest } as HelloRequest;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = String(object.payload);
    } else {
      message.payload = "";
    }
    return message;
  },

  toJSON(message: HelloRequest): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<HelloRequest>): HelloRequest {
    const message = { ...baseHelloRequest } as HelloRequest;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = "";
    }
    return message;
  },
};

const baseHelloResponse: object = { payload: "" };

export const HelloResponse = {
  encode(
    message: HelloResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== "") {
      writer.uint32(10).string(message.payload);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      HelloResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    Object.entries(message.spanContext).forEach(([key, value]) => {
      HelloResponse_SpanContextEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHelloResponse } as HelloResponse;
    message.metadata = {};
    message.spanContext = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.string();
          break;
        case 2:
          const entry2 = HelloResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = HelloResponse_SpanContextEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.spanContext[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HelloResponse {
    const message = { ...baseHelloResponse } as HelloResponse;
    message.metadata = {};
    message.spanContext = {};
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = String(object.payload);
    } else {
      message.payload = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    if (object.spanContext !== undefined && object.spanContext !== null) {
      Object.entries(object.spanContext).forEach(([key, value]) => {
        message.spanContext[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: HelloResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    obj.spanContext = {};
    if (message.spanContext) {
      Object.entries(message.spanContext).forEach(([k, v]) => {
        obj.spanContext[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<HelloResponse>): HelloResponse {
    const message = { ...baseHelloResponse } as HelloResponse;
    message.metadata = {};
    message.spanContext = {};
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    if (object.spanContext !== undefined && object.spanContext !== null) {
      Object.entries(object.spanContext).forEach(([key, value]) => {
        if (value !== undefined) {
          message.spanContext[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseHelloResponse_MetadataEntry: object = { key: "", value: "" };

export const HelloResponse_MetadataEntry = {
  encode(
    message: HelloResponse_MetadataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HelloResponse_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHelloResponse_MetadataEntry,
    } as HelloResponse_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HelloResponse_MetadataEntry {
    const message = {
      ...baseHelloResponse_MetadataEntry,
    } as HelloResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: HelloResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<HelloResponse_MetadataEntry>
  ): HelloResponse_MetadataEntry {
    const message = {
      ...baseHelloResponse_MetadataEntry,
    } as HelloResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseHelloResponse_SpanContextEntry: object = { key: "", value: "" };

export const HelloResponse_SpanContextEntry = {
  encode(
    message: HelloResponse_SpanContextEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HelloResponse_SpanContextEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHelloResponse_SpanContextEntry,
    } as HelloResponse_SpanContextEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HelloResponse_SpanContextEntry {
    const message = {
      ...baseHelloResponse_SpanContextEntry,
    } as HelloResponse_SpanContextEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: HelloResponse_SpanContextEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<HelloResponse_SpanContextEntry>
  ): HelloResponse_SpanContextEntry {
    const message = {
      ...baseHelloResponse_SpanContextEntry,
    } as HelloResponse_SpanContextEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

export interface HelloService {
  Hello(request: HelloRequest): Promise<HelloResponse>;
}

export class HelloServiceClientImpl implements HelloService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Hello(request: HelloRequest): Promise<HelloResponse> {
    const data = HelloRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zipkin.testing.HelloService",
      "Hello",
      data
    );
    return promise.then((data) => HelloResponse.decode(new _m0.Reader(data)));
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
