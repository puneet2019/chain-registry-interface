/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.valsetpref.v1beta1";

/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  valOperAddress: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */
  weight: string;
}

/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreference[];
}

const baseValidatorPreference: object = { valOperAddress: "", weight: "" };

export const ValidatorPreference = {
  encode(
    message: ValidatorPreference,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorPreference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorPreference } as ValidatorPreference;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valOperAddress = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorPreference {
    const message = { ...baseValidatorPreference } as ValidatorPreference;
    if (object.valOperAddress !== undefined && object.valOperAddress !== null) {
      message.valOperAddress = String(object.valOperAddress);
    } else {
      message.valOperAddress = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight);
    } else {
      message.weight = "";
    }
    return message;
  },

  toJSON(message: ValidatorPreference): unknown {
    const obj: any = {};
    message.valOperAddress !== undefined &&
      (obj.valOperAddress = message.valOperAddress);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorPreference>): ValidatorPreference {
    const message = { ...baseValidatorPreference } as ValidatorPreference;
    if (object.valOperAddress !== undefined && object.valOperAddress !== null) {
      message.valOperAddress = object.valOperAddress;
    } else {
      message.valOperAddress = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = "";
    }
    return message;
  },
};

const baseValidatorSetPreferences: object = {};

export const ValidatorSetPreferences = {
  encode(
    message: ValidatorSetPreferences,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ValidatorSetPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseValidatorSetPreferences,
    } as ValidatorSetPreferences;
    message.preferences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.preferences.push(
            ValidatorPreference.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSetPreferences {
    const message = {
      ...baseValidatorSetPreferences,
    } as ValidatorSetPreferences;
    message.preferences = [];
    if (object.preferences !== undefined && object.preferences !== null) {
      for (const e of object.preferences) {
        message.preferences.push(ValidatorPreference.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ValidatorSetPreferences): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) =>
        e ? ValidatorPreference.toJSON(e) : undefined
      );
    } else {
      obj.preferences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ValidatorSetPreferences>
  ): ValidatorSetPreferences {
    const message = {
      ...baseValidatorSetPreferences,
    } as ValidatorSetPreferences;
    message.preferences = [];
    if (object.preferences !== undefined && object.preferences !== null) {
      for (const e of object.preferences) {
        message.preferences.push(ValidatorPreference.fromPartial(e));
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
