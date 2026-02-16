/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ibc.core.client.v2";

/** CounterpartyInfo defines the key that the counterparty will use to message our client */
export interface CounterpartyInfo {
  /** merkle prefix key is the prefix that ics provable keys are stored under */
  merklePrefix: Uint8Array[];
  /** client identifier is the identifier used to send packet messages to our client */
  clientId: string;
}

const baseCounterpartyInfo: object = { clientId: "" };

export const CounterpartyInfo = {
  encode(
    message: CounterpartyInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.merklePrefix) {
      writer.uint32(10).bytes(v!);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CounterpartyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCounterpartyInfo } as CounterpartyInfo;
    message.merklePrefix = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merklePrefix.push(reader.bytes());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CounterpartyInfo {
    const message = { ...baseCounterpartyInfo } as CounterpartyInfo;
    message.merklePrefix = [];
    if (object.merklePrefix !== undefined && object.merklePrefix !== null) {
      for (const e of object.merklePrefix) {
        message.merklePrefix.push(bytesFromBase64(e));
      }
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    return message;
  },

  toJSON(message: CounterpartyInfo): unknown {
    const obj: any = {};
    if (message.merklePrefix) {
      obj.merklePrefix = message.merklePrefix.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.merklePrefix = [];
    }
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial(object: DeepPartial<CounterpartyInfo>): CounterpartyInfo {
    const message = { ...baseCounterpartyInfo } as CounterpartyInfo;
    message.merklePrefix = [];
    if (object.merklePrefix !== undefined && object.merklePrefix !== null) {
      for (const e of object.merklePrefix) {
        message.merklePrefix.push(e);
      }
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
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
