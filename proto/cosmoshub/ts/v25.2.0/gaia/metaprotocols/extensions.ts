/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "gaia.metaprotocols";

/** ExtensionData is a data structure that can be used in transaction extensions. */
export interface ExtensionData {
  /**
   * protocol_id is the identifier of the protocol
   * the field is not used internally but it is validated for correctness
   */
  protocolId: string;
  /**
   * protocol_version is the identifier of the protocol version
   * the field is not used internally but it is validated for correctness
   */
  protocolVersion: string;
  /**
   * arbitrary bytes data that can be used to store any data
   * the field is not used internally but it is validated and must be provided
   */
  data: Uint8Array;
}

const baseExtensionData: object = { protocolId: "", protocolVersion: "" };

export const ExtensionData = {
  encode(
    message: ExtensionData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.protocolId !== "") {
      writer.uint32(10).string(message.protocolId);
    }
    if (message.protocolVersion !== "") {
      writer.uint32(18).string(message.protocolVersion);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtensionData } as ExtensionData;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolId = reader.string();
          break;
        case 2:
          message.protocolVersion = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtensionData {
    const message = { ...baseExtensionData } as ExtensionData;
    message.data = new Uint8Array();
    if (object.protocolId !== undefined && object.protocolId !== null) {
      message.protocolId = String(object.protocolId);
    } else {
      message.protocolId = "";
    }
    if (
      object.protocolVersion !== undefined &&
      object.protocolVersion !== null
    ) {
      message.protocolVersion = String(object.protocolVersion);
    } else {
      message.protocolVersion = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: ExtensionData): unknown {
    const obj: any = {};
    message.protocolId !== undefined && (obj.protocolId = message.protocolId);
    message.protocolVersion !== undefined &&
      (obj.protocolVersion = message.protocolVersion);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ExtensionData>): ExtensionData {
    const message = { ...baseExtensionData } as ExtensionData;
    if (object.protocolId !== undefined && object.protocolId !== null) {
      message.protocolId = object.protocolId;
    } else {
      message.protocolId = "";
    }
    if (
      object.protocolVersion !== undefined &&
      object.protocolVersion !== null
    ) {
      message.protocolVersion = object.protocolVersion;
    } else {
      message.protocolVersion = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
