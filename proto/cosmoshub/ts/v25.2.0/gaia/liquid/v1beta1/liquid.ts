/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "gaia.liquid.v1beta1";

/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export enum TokenizeShareLockStatus {
  /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
  TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
  /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
  /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
  /**
   * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
   * will be able to tokenize shortly (after 1 unbonding period)
   */
  TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
  UNRECOGNIZED = -1,
}

export function tokenizeShareLockStatusFromJSON(
  object: any
): TokenizeShareLockStatus {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenizeShareLockStatus.UNRECOGNIZED;
  }
}

export function tokenizeShareLockStatusToJSON(
  object: TokenizeShareLockStatus
): string {
  switch (object) {
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    default:
      return "UNKNOWN";
  }
}

/** Params defines the parameters for the x/liquid module. */
export interface Params {
  /**
   * global_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers
   */
  globalLiquidStakingCap: string;
  /**
   * validator_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers for a specific validator
   */
  validatorLiquidStakingCap: string;
}

/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
  id: number;
  owner: string;
  /** module account take the role of delegator */
  moduleAccount: string;
  /** validator delegated to for tokenize share record creation */
  validator: string;
}

/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
  addresses: string[];
}

/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
  recordId: number;
  reward: DecCoin[];
}

/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 */
export interface LiquidValidator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}

const baseParams: object = {
  globalLiquidStakingCap: "",
  validatorLiquidStakingCap: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.globalLiquidStakingCap !== "") {
      writer.uint32(66).string(message.globalLiquidStakingCap);
    }
    if (message.validatorLiquidStakingCap !== "") {
      writer.uint32(74).string(message.validatorLiquidStakingCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.globalLiquidStakingCap = reader.string();
          break;
        case 9:
          message.validatorLiquidStakingCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.globalLiquidStakingCap !== undefined &&
      object.globalLiquidStakingCap !== null
    ) {
      message.globalLiquidStakingCap = String(object.globalLiquidStakingCap);
    } else {
      message.globalLiquidStakingCap = "";
    }
    if (
      object.validatorLiquidStakingCap !== undefined &&
      object.validatorLiquidStakingCap !== null
    ) {
      message.validatorLiquidStakingCap = String(
        object.validatorLiquidStakingCap
      );
    } else {
      message.validatorLiquidStakingCap = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.globalLiquidStakingCap !== undefined &&
      (obj.globalLiquidStakingCap = message.globalLiquidStakingCap);
    message.validatorLiquidStakingCap !== undefined &&
      (obj.validatorLiquidStakingCap = message.validatorLiquidStakingCap);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.globalLiquidStakingCap !== undefined &&
      object.globalLiquidStakingCap !== null
    ) {
      message.globalLiquidStakingCap = object.globalLiquidStakingCap;
    } else {
      message.globalLiquidStakingCap = "";
    }
    if (
      object.validatorLiquidStakingCap !== undefined &&
      object.validatorLiquidStakingCap !== null
    ) {
      message.validatorLiquidStakingCap = object.validatorLiquidStakingCap;
    } else {
      message.validatorLiquidStakingCap = "";
    }
    return message;
  },
};

const baseTokenizeShareRecord: object = {
  id: 0,
  owner: "",
  moduleAccount: "",
  validator: "",
};

export const TokenizeShareRecord = {
  encode(
    message: TokenizeShareRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenizeShareRecord } as TokenizeShareRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.moduleAccount = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenizeShareRecord {
    const message = { ...baseTokenizeShareRecord } as TokenizeShareRecord;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.moduleAccount !== undefined && object.moduleAccount !== null) {
      message.moduleAccount = String(object.moduleAccount);
    } else {
      message.moduleAccount = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: TokenizeShareRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.moduleAccount !== undefined &&
      (obj.moduleAccount = message.moduleAccount);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenizeShareRecord>): TokenizeShareRecord {
    const message = { ...baseTokenizeShareRecord } as TokenizeShareRecord;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.moduleAccount !== undefined && object.moduleAccount !== null) {
      message.moduleAccount = object.moduleAccount;
    } else {
      message.moduleAccount = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const basePendingTokenizeShareAuthorizations: object = { addresses: "" };

export const PendingTokenizeShareAuthorizations = {
  encode(
    message: PendingTokenizeShareAuthorizations,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingTokenizeShareAuthorizations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePendingTokenizeShareAuthorizations,
    } as PendingTokenizeShareAuthorizations;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingTokenizeShareAuthorizations {
    const message = {
      ...basePendingTokenizeShareAuthorizations,
    } as PendingTokenizeShareAuthorizations;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: PendingTokenizeShareAuthorizations): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<PendingTokenizeShareAuthorizations>
  ): PendingTokenizeShareAuthorizations {
    const message = {
      ...basePendingTokenizeShareAuthorizations,
    } as PendingTokenizeShareAuthorizations;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    return message;
  },
};

const baseTokenizeShareRecordReward: object = { recordId: 0 };

export const TokenizeShareRecordReward = {
  encode(
    message: TokenizeShareRecordReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordId !== 0) {
      writer.uint32(8).uint64(message.recordId);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTokenizeShareRecordReward,
    } as TokenizeShareRecordReward;
    message.reward = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenizeShareRecordReward {
    const message = {
      ...baseTokenizeShareRecordReward,
    } as TokenizeShareRecordReward;
    message.reward = [];
    if (object.recordId !== undefined && object.recordId !== null) {
      message.recordId = Number(object.recordId);
    } else {
      message.recordId = 0;
    }
    if (object.reward !== undefined && object.reward !== null) {
      for (const e of object.reward) {
        message.reward.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: TokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.recordId !== undefined && (obj.recordId = message.recordId);
    if (message.reward) {
      obj.reward = message.reward.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.reward = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<TokenizeShareRecordReward>
  ): TokenizeShareRecordReward {
    const message = {
      ...baseTokenizeShareRecordReward,
    } as TokenizeShareRecordReward;
    message.reward = [];
    if (object.recordId !== undefined && object.recordId !== null) {
      message.recordId = object.recordId;
    } else {
      message.recordId = 0;
    }
    if (object.reward !== undefined && object.reward !== null) {
      for (const e of object.reward) {
        message.reward.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseLiquidValidator: object = { operatorAddress: "", liquidShares: "" };

export const LiquidValidator = {
  encode(
    message: LiquidValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.liquidShares !== "") {
      writer.uint32(26).string(message.liquidShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLiquidValidator } as LiquidValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.liquidShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidValidator {
    const message = { ...baseLiquidValidator } as LiquidValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (object.liquidShares !== undefined && object.liquidShares !== null) {
      message.liquidShares = String(object.liquidShares);
    } else {
      message.liquidShares = "";
    }
    return message;
  },

  toJSON(message: LiquidValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.liquidShares !== undefined &&
      (obj.liquidShares = message.liquidShares);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidValidator>): LiquidValidator {
    const message = { ...baseLiquidValidator } as LiquidValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (object.liquidShares !== undefined && object.liquidShares !== null) {
      message.liquidShares = object.liquidShares;
    } else {
      message.liquidShares = "";
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
