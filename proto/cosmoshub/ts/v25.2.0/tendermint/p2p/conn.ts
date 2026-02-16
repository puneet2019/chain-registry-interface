/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../../tendermint/crypto/keys";

export const protobufPackage = "tendermint.p2p";

export interface PacketPing {}

export interface PacketPong {}

export interface PacketMsg {
  channelId: number;
  eof: boolean;
  data: Uint8Array;
}

export interface Packet {
  packetPing: PacketPing | undefined;
  packetPong: PacketPong | undefined;
  packetMsg: PacketMsg | undefined;
}

export interface AuthSigMessage {
  pubKey: PublicKey | undefined;
  sig: Uint8Array;
}

const basePacketPing: object = {};

export const PacketPing = {
  encode(_: PacketPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketPing } as PacketPing;
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

  fromJSON(_: any): PacketPing {
    const message = { ...basePacketPing } as PacketPing;
    return message;
  },

  toJSON(_: PacketPing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PacketPing>): PacketPing {
    const message = { ...basePacketPing } as PacketPing;
    return message;
  },
};

const basePacketPong: object = {};

export const PacketPong = {
  encode(_: PacketPong, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketPong } as PacketPong;
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

  fromJSON(_: any): PacketPong {
    const message = { ...basePacketPong } as PacketPong;
    return message;
  },

  toJSON(_: PacketPong): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PacketPong>): PacketPong {
    const message = { ...basePacketPong } as PacketPong;
    return message;
  },
};

const basePacketMsg: object = { channelId: 0, eof: false };

export const PacketMsg = {
  encode(
    message: PacketMsg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).int32(message.channelId);
    }
    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketMsg } as PacketMsg;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.int32();
          break;
        case 2:
          message.eof = reader.bool();
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

  fromJSON(object: any): PacketMsg {
    const message = { ...basePacketMsg } as PacketMsg;
    message.data = new Uint8Array();
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = Number(object.channelId);
    } else {
      message.channelId = 0;
    }
    if (object.eof !== undefined && object.eof !== null) {
      message.eof = Boolean(object.eof);
    } else {
      message.eof = false;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: PacketMsg): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.eof !== undefined && (obj.eof = message.eof);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<PacketMsg>): PacketMsg {
    const message = { ...basePacketMsg } as PacketMsg;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = 0;
    }
    if (object.eof !== undefined && object.eof !== null) {
      message.eof = object.eof;
    } else {
      message.eof = false;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const basePacket: object = {};

export const Packet = {
  encode(
    message: Packet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetPing !== undefined) {
      PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetPong !== undefined) {
      PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
    }
    if (message.packetMsg !== undefined) {
      PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket } as Packet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetPing = PacketPing.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetPong = PacketPong.decode(reader, reader.uint32());
          break;
        case 3:
          message.packetMsg = PacketMsg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet {
    const message = { ...basePacket } as Packet;
    if (object.packetPing !== undefined && object.packetPing !== null) {
      message.packetPing = PacketPing.fromJSON(object.packetPing);
    } else {
      message.packetPing = undefined;
    }
    if (object.packetPong !== undefined && object.packetPong !== null) {
      message.packetPong = PacketPong.fromJSON(object.packetPong);
    } else {
      message.packetPong = undefined;
    }
    if (object.packetMsg !== undefined && object.packetMsg !== null) {
      message.packetMsg = PacketMsg.fromJSON(object.packetMsg);
    } else {
      message.packetMsg = undefined;
    }
    return message;
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.packetPing !== undefined &&
      (obj.packetPing = message.packetPing
        ? PacketPing.toJSON(message.packetPing)
        : undefined);
    message.packetPong !== undefined &&
      (obj.packetPong = message.packetPong
        ? PacketPong.toJSON(message.packetPong)
        : undefined);
    message.packetMsg !== undefined &&
      (obj.packetMsg = message.packetMsg
        ? PacketMsg.toJSON(message.packetMsg)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = { ...basePacket } as Packet;
    if (object.packetPing !== undefined && object.packetPing !== null) {
      message.packetPing = PacketPing.fromPartial(object.packetPing);
    } else {
      message.packetPing = undefined;
    }
    if (object.packetPong !== undefined && object.packetPong !== null) {
      message.packetPong = PacketPong.fromPartial(object.packetPong);
    } else {
      message.packetPong = undefined;
    }
    if (object.packetMsg !== undefined && object.packetMsg !== null) {
      message.packetMsg = PacketMsg.fromPartial(object.packetMsg);
    } else {
      message.packetMsg = undefined;
    }
    return message;
  },
};

const baseAuthSigMessage: object = {};

export const AuthSigMessage = {
  encode(
    message: AuthSigMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthSigMessage } as AuthSigMessage;
    message.sig = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthSigMessage {
    const message = { ...baseAuthSigMessage } as AuthSigMessage;
    message.sig = new Uint8Array();
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromJSON(object.pubKey);
    } else {
      message.pubKey = undefined;
    }
    if (object.sig !== undefined && object.sig !== null) {
      message.sig = bytesFromBase64(object.sig);
    }
    return message;
  },

  toJSON(message: AuthSigMessage): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    message.sig !== undefined &&
      (obj.sig = base64FromBytes(
        message.sig !== undefined ? message.sig : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<AuthSigMessage>): AuthSigMessage {
    const message = { ...baseAuthSigMessage } as AuthSigMessage;
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    } else {
      message.pubKey = undefined;
    }
    if (object.sig !== undefined && object.sig !== null) {
      message.sig = object.sig;
    } else {
      message.sig = new Uint8Array();
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
