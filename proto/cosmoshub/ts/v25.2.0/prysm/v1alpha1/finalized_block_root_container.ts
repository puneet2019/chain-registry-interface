/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethereum.eth.v1alpha1";

export interface FinalizedBlockRootContainer {
  parentRoot: Uint8Array;
  childRoot: Uint8Array;
}

const baseFinalizedBlockRootContainer: object = {};

export const FinalizedBlockRootContainer = {
  encode(
    message: FinalizedBlockRootContainer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parentRoot.length !== 0) {
      writer.uint32(10).bytes(message.parentRoot);
    }
    if (message.childRoot.length !== 0) {
      writer.uint32(18).bytes(message.childRoot);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FinalizedBlockRootContainer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFinalizedBlockRootContainer,
    } as FinalizedBlockRootContainer;
    message.parentRoot = new Uint8Array();
    message.childRoot = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentRoot = reader.bytes();
          break;
        case 2:
          message.childRoot = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FinalizedBlockRootContainer {
    const message = {
      ...baseFinalizedBlockRootContainer,
    } as FinalizedBlockRootContainer;
    message.parentRoot = new Uint8Array();
    message.childRoot = new Uint8Array();
    if (object.parentRoot !== undefined && object.parentRoot !== null) {
      message.parentRoot = bytesFromBase64(object.parentRoot);
    }
    if (object.childRoot !== undefined && object.childRoot !== null) {
      message.childRoot = bytesFromBase64(object.childRoot);
    }
    return message;
  },

  toJSON(message: FinalizedBlockRootContainer): unknown {
    const obj: any = {};
    message.parentRoot !== undefined &&
      (obj.parentRoot = base64FromBytes(
        message.parentRoot !== undefined ? message.parentRoot : new Uint8Array()
      ));
    message.childRoot !== undefined &&
      (obj.childRoot = base64FromBytes(
        message.childRoot !== undefined ? message.childRoot : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<FinalizedBlockRootContainer>
  ): FinalizedBlockRootContainer {
    const message = {
      ...baseFinalizedBlockRootContainer,
    } as FinalizedBlockRootContainer;
    if (object.parentRoot !== undefined && object.parentRoot !== null) {
      message.parentRoot = object.parentRoot;
    } else {
      message.parentRoot = new Uint8Array();
    }
    if (object.childRoot !== undefined && object.childRoot !== null) {
      message.childRoot = object.childRoot;
    } else {
      message.childRoot = new Uint8Array();
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
