/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "../../../gaia/liquid/v1beta1/liquid";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "gaia.liquid.v1beta1";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/liquid parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}

/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin | undefined;
  tokenizedShareOwner: string;
}

/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
  amount: Coin | undefined;
}

/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
  delegatorAddress: string;
  amount: Coin | undefined;
}

/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
  amount: Coin | undefined;
}

/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
  tokenizeShareRecordId: number;
  sender: string;
  newOwner: string;
}

/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {}

/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
  delegatorAddress: string;
}

/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {}

/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
  delegatorAddress: string;
}

/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
  completionTime: Date | undefined;
}

/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
  ownerAddress: string;
  recordId: number;
}

/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {}

/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
  ownerAddress: string;
}

/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

const baseMsgTokenizeShares: object = {
  delegatorAddress: "",
  validatorAddress: "",
  tokenizedShareOwner: "",
};

export const MsgTokenizeShares = {
  encode(
    message: MsgTokenizeShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTokenizeShares } as MsgTokenizeShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenizedShareOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTokenizeShares {
    const message = { ...baseMsgTokenizeShares } as MsgTokenizeShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (
      object.tokenizedShareOwner !== undefined &&
      object.tokenizedShareOwner !== null
    ) {
      message.tokenizedShareOwner = String(object.tokenizedShareOwner);
    } else {
      message.tokenizedShareOwner = "";
    }
    return message;
  },

  toJSON(message: MsgTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.tokenizedShareOwner !== undefined &&
      (obj.tokenizedShareOwner = message.tokenizedShareOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = { ...baseMsgTokenizeShares } as MsgTokenizeShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (
      object.tokenizedShareOwner !== undefined &&
      object.tokenizedShareOwner !== null
    ) {
      message.tokenizedShareOwner = object.tokenizedShareOwner;
    } else {
      message.tokenizedShareOwner = "";
    }
    return message;
  },
};

const baseMsgTokenizeSharesResponse: object = {};

export const MsgTokenizeSharesResponse = {
  encode(
    message: MsgTokenizeSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTokenizeSharesResponse,
    } as MsgTokenizeSharesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTokenizeSharesResponse {
    const message = {
      ...baseMsgTokenizeSharesResponse,
    } as MsgTokenizeSharesResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgTokenizeSharesResponse>
  ): MsgTokenizeSharesResponse {
    const message = {
      ...baseMsgTokenizeSharesResponse,
    } as MsgTokenizeSharesResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgRedeemTokensForShares: object = { delegatorAddress: "" };

export const MsgRedeemTokensForShares = {
  encode(
    message: MsgRedeemTokensForShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedeemTokensForShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRedeemTokensForShares,
    } as MsgRedeemTokensForShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemTokensForShares {
    const message = {
      ...baseMsgRedeemTokensForShares,
    } as MsgRedeemTokensForShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeemTokensForShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRedeemTokensForShares>
  ): MsgRedeemTokensForShares {
    const message = {
      ...baseMsgRedeemTokensForShares,
    } as MsgRedeemTokensForShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgRedeemTokensForSharesResponse: object = {};

export const MsgRedeemTokensForSharesResponse = {
  encode(
    message: MsgRedeemTokensForSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRedeemTokensForSharesResponse,
    } as MsgRedeemTokensForSharesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemTokensForSharesResponse {
    const message = {
      ...baseMsgRedeemTokensForSharesResponse,
    } as MsgRedeemTokensForSharesResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeemTokensForSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRedeemTokensForSharesResponse>
  ): MsgRedeemTokensForSharesResponse {
    const message = {
      ...baseMsgRedeemTokensForSharesResponse,
    } as MsgRedeemTokensForSharesResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgTransferTokenizeShareRecord: object = {
  tokenizeShareRecordId: 0,
  sender: "",
  newOwner: "",
};

export const MsgTransferTokenizeShareRecord = {
  encode(
    message: MsgTransferTokenizeShareRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenizeShareRecordId !== 0) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferTokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferTokenizeShareRecord,
    } as MsgTransferTokenizeShareRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferTokenizeShareRecord {
    const message = {
      ...baseMsgTransferTokenizeShareRecord,
    } as MsgTransferTokenizeShareRecord;
    if (
      object.tokenizeShareRecordId !== undefined &&
      object.tokenizeShareRecordId !== null
    ) {
      message.tokenizeShareRecordId = Number(object.tokenizeShareRecordId);
    } else {
      message.tokenizeShareRecordId = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner);
    } else {
      message.newOwner = "";
    }
    return message;
  },

  toJSON(message: MsgTransferTokenizeShareRecord): unknown {
    const obj: any = {};
    message.tokenizeShareRecordId !== undefined &&
      (obj.tokenizeShareRecordId = message.tokenizeShareRecordId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgTransferTokenizeShareRecord>
  ): MsgTransferTokenizeShareRecord {
    const message = {
      ...baseMsgTransferTokenizeShareRecord,
    } as MsgTransferTokenizeShareRecord;
    if (
      object.tokenizeShareRecordId !== undefined &&
      object.tokenizeShareRecordId !== null
    ) {
      message.tokenizeShareRecordId = object.tokenizeShareRecordId;
    } else {
      message.tokenizeShareRecordId = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    } else {
      message.newOwner = "";
    }
    return message;
  },
};

const baseMsgTransferTokenizeShareRecordResponse: object = {};

export const MsgTransferTokenizeShareRecordResponse = {
  encode(
    _: MsgTransferTokenizeShareRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferTokenizeShareRecordResponse,
    } as MsgTransferTokenizeShareRecordResponse;
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

  fromJSON(_: any): MsgTransferTokenizeShareRecordResponse {
    const message = {
      ...baseMsgTransferTokenizeShareRecordResponse,
    } as MsgTransferTokenizeShareRecordResponse;
    return message;
  },

  toJSON(_: MsgTransferTokenizeShareRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTransferTokenizeShareRecordResponse>
  ): MsgTransferTokenizeShareRecordResponse {
    const message = {
      ...baseMsgTransferTokenizeShareRecordResponse,
    } as MsgTransferTokenizeShareRecordResponse;
    return message;
  },
};

const baseMsgDisableTokenizeShares: object = { delegatorAddress: "" };

export const MsgDisableTokenizeShares = {
  encode(
    message: MsgDisableTokenizeShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDisableTokenizeShares,
    } as MsgDisableTokenizeShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableTokenizeShares {
    const message = {
      ...baseMsgDisableTokenizeShares,
    } as MsgDisableTokenizeShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgDisableTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDisableTokenizeShares>
  ): MsgDisableTokenizeShares {
    const message = {
      ...baseMsgDisableTokenizeShares,
    } as MsgDisableTokenizeShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseMsgDisableTokenizeSharesResponse: object = {};

export const MsgDisableTokenizeSharesResponse = {
  encode(
    _: MsgDisableTokenizeSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDisableTokenizeSharesResponse,
    } as MsgDisableTokenizeSharesResponse;
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

  fromJSON(_: any): MsgDisableTokenizeSharesResponse {
    const message = {
      ...baseMsgDisableTokenizeSharesResponse,
    } as MsgDisableTokenizeSharesResponse;
    return message;
  },

  toJSON(_: MsgDisableTokenizeSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDisableTokenizeSharesResponse>
  ): MsgDisableTokenizeSharesResponse {
    const message = {
      ...baseMsgDisableTokenizeSharesResponse,
    } as MsgDisableTokenizeSharesResponse;
    return message;
  },
};

const baseMsgEnableTokenizeShares: object = { delegatorAddress: "" };

export const MsgEnableTokenizeShares = {
  encode(
    message: MsgEnableTokenizeShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEnableTokenizeShares,
    } as MsgEnableTokenizeShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableTokenizeShares {
    const message = {
      ...baseMsgEnableTokenizeShares,
    } as MsgEnableTokenizeShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgEnableTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEnableTokenizeShares>
  ): MsgEnableTokenizeShares {
    const message = {
      ...baseMsgEnableTokenizeShares,
    } as MsgEnableTokenizeShares;
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseMsgEnableTokenizeSharesResponse: object = {};

export const MsgEnableTokenizeSharesResponse = {
  encode(
    message: MsgEnableTokenizeSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEnableTokenizeSharesResponse,
    } as MsgEnableTokenizeSharesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableTokenizeSharesResponse {
    const message = {
      ...baseMsgEnableTokenizeSharesResponse,
    } as MsgEnableTokenizeSharesResponse;
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = fromJsonTimestamp(object.completionTime);
    } else {
      message.completionTime = undefined;
    }
    return message;
  },

  toJSON(message: MsgEnableTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEnableTokenizeSharesResponse>
  ): MsgEnableTokenizeSharesResponse {
    const message = {
      ...baseMsgEnableTokenizeSharesResponse,
    } as MsgEnableTokenizeSharesResponse;
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = object.completionTime;
    } else {
      message.completionTime = undefined;
    }
    return message;
  },
};

const baseMsgWithdrawTokenizeShareRecordReward: object = {
  ownerAddress: "",
  recordId: 0,
};

export const MsgWithdrawTokenizeShareRecordReward = {
  encode(
    message: MsgWithdrawTokenizeShareRecordReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.recordId !== 0) {
      writer.uint32(16).uint64(message.recordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawTokenizeShareRecordReward,
    } as MsgWithdrawTokenizeShareRecordReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.recordId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward {
    const message = {
      ...baseMsgWithdrawTokenizeShareRecordReward,
    } as MsgWithdrawTokenizeShareRecordReward;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.recordId !== undefined && object.recordId !== null) {
      message.recordId = Number(object.recordId);
    } else {
      message.recordId = 0;
    }
    return message;
  },

  toJSON(message: MsgWithdrawTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.recordId !== undefined && (obj.recordId = message.recordId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawTokenizeShareRecordReward>
  ): MsgWithdrawTokenizeShareRecordReward {
    const message = {
      ...baseMsgWithdrawTokenizeShareRecordReward,
    } as MsgWithdrawTokenizeShareRecordReward;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.recordId !== undefined && object.recordId !== null) {
      message.recordId = object.recordId;
    } else {
      message.recordId = 0;
    }
    return message;
  },
};

const baseMsgWithdrawTokenizeShareRecordRewardResponse: object = {};

export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  encode(
    _: MsgWithdrawTokenizeShareRecordRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawTokenizeShareRecordRewardResponse,
    } as MsgWithdrawTokenizeShareRecordRewardResponse;
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

  fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = {
      ...baseMsgWithdrawTokenizeShareRecordRewardResponse,
    } as MsgWithdrawTokenizeShareRecordRewardResponse;
    return message;
  },

  toJSON(_: MsgWithdrawTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawTokenizeShareRecordRewardResponse>
  ): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = {
      ...baseMsgWithdrawTokenizeShareRecordRewardResponse,
    } as MsgWithdrawTokenizeShareRecordRewardResponse;
    return message;
  },
};

const baseMsgWithdrawAllTokenizeShareRecordReward: object = {
  ownerAddress: "",
};

export const MsgWithdrawAllTokenizeShareRecordReward = {
  encode(
    message: MsgWithdrawAllTokenizeShareRecordReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawAllTokenizeShareRecordReward,
    } as MsgWithdrawAllTokenizeShareRecordReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward {
    const message = {
      ...baseMsgWithdrawAllTokenizeShareRecordReward,
    } as MsgWithdrawAllTokenizeShareRecordReward;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawAllTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>
  ): MsgWithdrawAllTokenizeShareRecordReward {
    const message = {
      ...baseMsgWithdrawAllTokenizeShareRecordReward,
    } as MsgWithdrawAllTokenizeShareRecordReward;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    return message;
  },
};

const baseMsgWithdrawAllTokenizeShareRecordRewardResponse: object = {};

export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  encode(
    _: MsgWithdrawAllTokenizeShareRecordRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawAllTokenizeShareRecordRewardResponse,
    } as MsgWithdrawAllTokenizeShareRecordRewardResponse;
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

  fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = {
      ...baseMsgWithdrawAllTokenizeShareRecordRewardResponse,
    } as MsgWithdrawAllTokenizeShareRecordRewardResponse;
    return message;
  },

  toJSON(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawAllTokenizeShareRecordRewardResponse>
  ): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = {
      ...baseMsgWithdrawAllTokenizeShareRecordRewardResponse,
    } as MsgWithdrawAllTokenizeShareRecordRewardResponse;
    return message;
  },
};

/** Msg defines the liquid Msg service. */
export interface Msg {
  /**
   * UpdateParams defines an operation for updating the x/liquid module
   * parameters.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** TokenizeShares defines a method for tokenizing shares from a validator. */
  TokenizeShares(
    request: MsgTokenizeShares
  ): Promise<MsgTokenizeSharesResponse>;
  /**
   * RedeemTokensForShares defines a method for redeeming tokens from a
   * validator for shares.
   */
  RedeemTokensForShares(
    request: MsgRedeemTokensForShares
  ): Promise<MsgRedeemTokensForSharesResponse>;
  /**
   * TransferTokenizeShareRecord defines a method to transfer ownership of
   * TokenizeShareRecord
   */
  TransferTokenizeShareRecord(
    request: MsgTransferTokenizeShareRecord
  ): Promise<MsgTransferTokenizeShareRecordResponse>;
  /**
   * DisableTokenizeShares defines a method to prevent the tokenization of an
   * addresses stake
   */
  DisableTokenizeShares(
    request: MsgDisableTokenizeShares
  ): Promise<MsgDisableTokenizeSharesResponse>;
  /**
   * EnableTokenizeShares defines a method to re-enable the tokenization of an
   * addresseses stake after it has been disabled
   */
  EnableTokenizeShares(
    request: MsgEnableTokenizeShares
  ): Promise<MsgEnableTokenizeSharesResponse>;
  /**
   * WithdrawTokenizeShareRecordReward defines a method to withdraw reward for
   * an owning TokenizeShareRecord
   */
  WithdrawTokenizeShareRecordReward(
    request: MsgWithdrawTokenizeShareRecordReward
  ): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
  /**
   * WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward
   * for all owning TokenizeShareRecord
   */
  WithdrawAllTokenizeShareRecordReward(
    request: MsgWithdrawAllTokenizeShareRecordReward
  ): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShares(
    request: MsgTokenizeShares
  ): Promise<MsgTokenizeSharesResponse> {
    const data = MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "TokenizeShares",
      data
    );
    return promise.then((data) =>
      MsgTokenizeSharesResponse.decode(new _m0.Reader(data))
    );
  }

  RedeemTokensForShares(
    request: MsgRedeemTokensForShares
  ): Promise<MsgRedeemTokensForSharesResponse> {
    const data = MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "RedeemTokensForShares",
      data
    );
    return promise.then((data) =>
      MsgRedeemTokensForSharesResponse.decode(new _m0.Reader(data))
    );
  }

  TransferTokenizeShareRecord(
    request: MsgTransferTokenizeShareRecord
  ): Promise<MsgTransferTokenizeShareRecordResponse> {
    const data = MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "TransferTokenizeShareRecord",
      data
    );
    return promise.then((data) =>
      MsgTransferTokenizeShareRecordResponse.decode(new _m0.Reader(data))
    );
  }

  DisableTokenizeShares(
    request: MsgDisableTokenizeShares
  ): Promise<MsgDisableTokenizeSharesResponse> {
    const data = MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "DisableTokenizeShares",
      data
    );
    return promise.then((data) =>
      MsgDisableTokenizeSharesResponse.decode(new _m0.Reader(data))
    );
  }

  EnableTokenizeShares(
    request: MsgEnableTokenizeShares
  ): Promise<MsgEnableTokenizeSharesResponse> {
    const data = MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "EnableTokenizeShares",
      data
    );
    return promise.then((data) =>
      MsgEnableTokenizeSharesResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawTokenizeShareRecordReward(
    request: MsgWithdrawTokenizeShareRecordReward
  ): Promise<MsgWithdrawTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "WithdrawTokenizeShareRecordReward",
      data
    );
    return promise.then((data) =>
      MsgWithdrawTokenizeShareRecordRewardResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawAllTokenizeShareRecordReward(
    request: MsgWithdrawAllTokenizeShareRecordReward
  ): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawAllTokenizeShareRecordReward.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "gaia.liquid.v1beta1.Msg",
      "WithdrawAllTokenizeShareRecordReward",
      data
    );
    return promise.then((data) =>
      MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(
        new _m0.Reader(data)
      )
    );
  }
}

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
