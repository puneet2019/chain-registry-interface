/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ibc.core.client.v2";

/**
 * Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
 * for a given client.
 * If it is set, then only relayers in the allow list can send v2 messages
 * If it is not set, then the client allows permissionless relaying of v2 messages
 */
export interface Config {
  /** allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client */
  allowedRelayers: string[];
}

const baseConfig: object = { allowedRelayers: "" };

export const Config = {
  encode(
    message: Config,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowedRelayers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfig } as Config;
    message.allowedRelayers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedRelayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Config {
    const message = { ...baseConfig } as Config;
    message.allowedRelayers = [];
    if (
      object.allowedRelayers !== undefined &&
      object.allowedRelayers !== null
    ) {
      for (const e of object.allowedRelayers) {
        message.allowedRelayers.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    if (message.allowedRelayers) {
      obj.allowedRelayers = message.allowedRelayers.map((e) => e);
    } else {
      obj.allowedRelayers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Config>): Config {
    const message = { ...baseConfig } as Config;
    message.allowedRelayers = [];
    if (
      object.allowedRelayers !== undefined &&
      object.allowedRelayers !== null
    ) {
      for (const e of object.allowedRelayers) {
        message.allowedRelayers.push(e);
      }
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
