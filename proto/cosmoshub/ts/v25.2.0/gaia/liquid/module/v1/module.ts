/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "gaia.liquid.module.v1";

/** Module is the config object of the liquid module. */
export interface Module {
  /**
   * authority defines the custom module authority. If not set, defaults to the
   * governance module.
   */
  authority: string;
  /** bech32_prefix_validator is the bech32 validator prefix for the app. */
  bech32PrefixValidator: string;
  /** bech32_prefix_consensus is the bech32 consensus node prefix for the app. */
  bech32PrefixConsensus: string;
}

const baseModule: object = {
  authority: "",
  bech32PrefixValidator: "",
  bech32PrefixConsensus: "",
};

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bech32PrefixValidator !== "") {
      writer.uint32(18).string(message.bech32PrefixValidator);
    }
    if (message.bech32PrefixConsensus !== "") {
      writer.uint32(26).string(message.bech32PrefixConsensus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModule } as Module;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bech32PrefixValidator = reader.string();
          break;
        case 3:
          message.bech32PrefixConsensus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Module {
    const message = { ...baseModule } as Module;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (
      object.bech32PrefixValidator !== undefined &&
      object.bech32PrefixValidator !== null
    ) {
      message.bech32PrefixValidator = String(object.bech32PrefixValidator);
    } else {
      message.bech32PrefixValidator = "";
    }
    if (
      object.bech32PrefixConsensus !== undefined &&
      object.bech32PrefixConsensus !== null
    ) {
      message.bech32PrefixConsensus = String(object.bech32PrefixConsensus);
    } else {
      message.bech32PrefixConsensus = "";
    }
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bech32PrefixValidator !== undefined &&
      (obj.bech32PrefixValidator = message.bech32PrefixValidator);
    message.bech32PrefixConsensus !== undefined &&
      (obj.bech32PrefixConsensus = message.bech32PrefixConsensus);
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (
      object.bech32PrefixValidator !== undefined &&
      object.bech32PrefixValidator !== null
    ) {
      message.bech32PrefixValidator = object.bech32PrefixValidator;
    } else {
      message.bech32PrefixValidator = "";
    }
    if (
      object.bech32PrefixConsensus !== undefined &&
      object.bech32PrefixConsensus !== null
    ) {
      message.bech32PrefixConsensus = object.bech32PrefixConsensus;
    } else {
      message.bech32PrefixConsensus = "";
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
