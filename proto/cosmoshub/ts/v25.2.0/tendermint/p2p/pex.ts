/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NetAddress } from "../../tendermint/p2p/types";

export const protobufPackage = "tendermint.p2p";

export interface PexRequest {}

export interface PexAddrs {
  addrs: NetAddress[];
}

export interface Message {
  pexRequest: PexRequest | undefined;
  pexAddrs: PexAddrs | undefined;
}

const basePexRequest: object = {};

export const PexRequest = {
  encode(_: PexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePexRequest } as PexRequest;
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

  fromJSON(_: any): PexRequest {
    const message = { ...basePexRequest } as PexRequest;
    return message;
  },

  toJSON(_: PexRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PexRequest>): PexRequest {
    const message = { ...basePexRequest } as PexRequest;
    return message;
  },
};

const basePexAddrs: object = {};

export const PexAddrs = {
  encode(
    message: PexAddrs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addrs) {
      NetAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PexAddrs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePexAddrs } as PexAddrs;
    message.addrs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addrs.push(NetAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PexAddrs {
    const message = { ...basePexAddrs } as PexAddrs;
    message.addrs = [];
    if (object.addrs !== undefined && object.addrs !== null) {
      for (const e of object.addrs) {
        message.addrs.push(NetAddress.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PexAddrs): unknown {
    const obj: any = {};
    if (message.addrs) {
      obj.addrs = message.addrs.map((e) =>
        e ? NetAddress.toJSON(e) : undefined
      );
    } else {
      obj.addrs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PexAddrs>): PexAddrs {
    const message = { ...basePexAddrs } as PexAddrs;
    message.addrs = [];
    if (object.addrs !== undefined && object.addrs !== null) {
      for (const e of object.addrs) {
        message.addrs.push(NetAddress.fromPartial(e));
      }
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
    if (message.pexRequest !== undefined) {
      PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.pexAddrs !== undefined) {
      PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
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
          message.pexRequest = PexRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.pexAddrs = PexAddrs.decode(reader, reader.uint32());
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
    if (object.pexRequest !== undefined && object.pexRequest !== null) {
      message.pexRequest = PexRequest.fromJSON(object.pexRequest);
    } else {
      message.pexRequest = undefined;
    }
    if (object.pexAddrs !== undefined && object.pexAddrs !== null) {
      message.pexAddrs = PexAddrs.fromJSON(object.pexAddrs);
    } else {
      message.pexAddrs = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.pexRequest !== undefined &&
      (obj.pexRequest = message.pexRequest
        ? PexRequest.toJSON(message.pexRequest)
        : undefined);
    message.pexAddrs !== undefined &&
      (obj.pexAddrs = message.pexAddrs
        ? PexAddrs.toJSON(message.pexAddrs)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.pexRequest !== undefined && object.pexRequest !== null) {
      message.pexRequest = PexRequest.fromPartial(object.pexRequest);
    } else {
      message.pexRequest = undefined;
    }
    if (object.pexAddrs !== undefined && object.pexAddrs !== null) {
      message.pexAddrs = PexAddrs.fromPartial(object.pexAddrs);
    } else {
      message.pexAddrs = undefined;
    }
    return message;
  },
};

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
