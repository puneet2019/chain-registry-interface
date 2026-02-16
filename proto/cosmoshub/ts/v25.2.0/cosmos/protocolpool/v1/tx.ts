/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "../../../cosmos/protocolpool/v1/types";

export const protobufPackage = "cosmos.protocolpool.v1";

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  depositor: string;
  amount: Coin[];
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}

/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 */
export interface MsgCommunityPoolSpend {
  /** Authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  recipient: string;
  amount: Coin[];
}

/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 */
export interface MsgCommunityPoolSpendResponse {}

/** MsgCreateContinuousFund defines a message for adding continuous funds. */
export interface MsgCreateContinuousFund {
  /** Authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** Recipient address of the account receiving funds. */
  recipient: string;
  /** Percentage is the percentage of funds to be allocated from Community pool. */
  percentage: string;
  /** Optional, if expiry is set, removes the state object when expired. */
  expiry: Date | undefined;
}

/**
 * MsgCreateContinuousFundResponse defines the response to executing a
 * MsgCreateContinuousFund message.
 */
export interface MsgCreateContinuousFundResponse {}

/** MsgCancelContinuousFund defines a message to cancel continuous funds for a specific recipient. */
export interface MsgCancelContinuousFund {
  /** Authority is the account address of authority. */
  authority: string;
  /** Recipient is the account address string of the recipient whose funds are to be cancelled. */
  recipient: string;
}

/**
 * MsgCancelContinuousFundResponse defines the response to executing a
 * MsgCancelContinuousFund message.
 */
export interface MsgCancelContinuousFundResponse {
  /** CanceledTime is the canceled time. */
  canceledTime: Date | undefined;
  /** CanceledHeight defines the canceled block height. */
  canceledHeight: number;
  /** Recipient is the account address string of the recipient whose funds are cancelled. */
  recipient: string;
}

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/protocolpool parameters to update.
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

const baseMsgFundCommunityPool: object = { depositor: "" };

export const MsgFundCommunityPool = {
  encode(
    message: MsgFundCommunityPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundCommunityPool {
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgFundCommunityPoolResponse: object = {};

export const MsgFundCommunityPoolResponse = {
  encode(
    _: MsgFundCommunityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFundCommunityPoolResponse,
    } as MsgFundCommunityPoolResponse;
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

  fromJSON(_: any): MsgFundCommunityPoolResponse {
    const message = {
      ...baseMsgFundCommunityPoolResponse,
    } as MsgFundCommunityPoolResponse;
    return message;
  },

  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgFundCommunityPoolResponse>
  ): MsgFundCommunityPoolResponse {
    const message = {
      ...baseMsgFundCommunityPoolResponse,
    } as MsgFundCommunityPoolResponse;
    return message;
  },
};

const baseMsgCommunityPoolSpend: object = { authority: "", recipient: "" };

export const MsgCommunityPoolSpend = {
  encode(
    message: MsgCommunityPoolSpend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCommunityPoolSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCommunityPoolSpend } as MsgCommunityPoolSpend;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCommunityPoolSpend {
    const message = { ...baseMsgCommunityPoolSpend } as MsgCommunityPoolSpend;
    message.amount = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCommunityPoolSpend): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCommunityPoolSpend>
  ): MsgCommunityPoolSpend {
    const message = { ...baseMsgCommunityPoolSpend } as MsgCommunityPoolSpend;
    message.amount = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCommunityPoolSpendResponse: object = {};

export const MsgCommunityPoolSpendResponse = {
  encode(
    _: MsgCommunityPoolSpendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCommunityPoolSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCommunityPoolSpendResponse,
    } as MsgCommunityPoolSpendResponse;
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

  fromJSON(_: any): MsgCommunityPoolSpendResponse {
    const message = {
      ...baseMsgCommunityPoolSpendResponse,
    } as MsgCommunityPoolSpendResponse;
    return message;
  },

  toJSON(_: MsgCommunityPoolSpendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCommunityPoolSpendResponse>
  ): MsgCommunityPoolSpendResponse {
    const message = {
      ...baseMsgCommunityPoolSpendResponse,
    } as MsgCommunityPoolSpendResponse;
    return message;
  },
};

const baseMsgCreateContinuousFund: object = {
  authority: "",
  recipient: "",
  percentage: "",
};

export const MsgCreateContinuousFund = {
  encode(
    message: MsgCreateContinuousFund,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.percentage !== "") {
      writer.uint32(26).string(message.percentage);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiry),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateContinuousFund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateContinuousFund,
    } as MsgCreateContinuousFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.percentage = reader.string();
          break;
        case 4:
          message.expiry = fromTimestamp(
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

  fromJSON(object: any): MsgCreateContinuousFund {
    const message = {
      ...baseMsgCreateContinuousFund,
    } as MsgCreateContinuousFund;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = String(object.percentage);
    } else {
      message.percentage = "";
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = fromJsonTimestamp(object.expiry);
    } else {
      message.expiry = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateContinuousFund): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.expiry !== undefined && (obj.expiry = message.expiry.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateContinuousFund>
  ): MsgCreateContinuousFund {
    const message = {
      ...baseMsgCreateContinuousFund,
    } as MsgCreateContinuousFund;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    } else {
      message.percentage = "";
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = object.expiry;
    } else {
      message.expiry = undefined;
    }
    return message;
  },
};

const baseMsgCreateContinuousFundResponse: object = {};

export const MsgCreateContinuousFundResponse = {
  encode(
    _: MsgCreateContinuousFundResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateContinuousFundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateContinuousFundResponse,
    } as MsgCreateContinuousFundResponse;
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

  fromJSON(_: any): MsgCreateContinuousFundResponse {
    const message = {
      ...baseMsgCreateContinuousFundResponse,
    } as MsgCreateContinuousFundResponse;
    return message;
  },

  toJSON(_: MsgCreateContinuousFundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateContinuousFundResponse>
  ): MsgCreateContinuousFundResponse {
    const message = {
      ...baseMsgCreateContinuousFundResponse,
    } as MsgCreateContinuousFundResponse;
    return message;
  },
};

const baseMsgCancelContinuousFund: object = { authority: "", recipient: "" };

export const MsgCancelContinuousFund = {
  encode(
    message: MsgCancelContinuousFund,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelContinuousFund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelContinuousFund,
    } as MsgCancelContinuousFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelContinuousFund {
    const message = {
      ...baseMsgCancelContinuousFund,
    } as MsgCancelContinuousFund;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: MsgCancelContinuousFund): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelContinuousFund>
  ): MsgCancelContinuousFund {
    const message = {
      ...baseMsgCancelContinuousFund,
    } as MsgCancelContinuousFund;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

const baseMsgCancelContinuousFundResponse: object = {
  canceledHeight: 0,
  recipient: "",
};

export const MsgCancelContinuousFundResponse = {
  encode(
    message: MsgCancelContinuousFundResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.canceledTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.canceledTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.canceledHeight !== 0) {
      writer.uint32(16).uint64(message.canceledHeight);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelContinuousFundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelContinuousFundResponse,
    } as MsgCancelContinuousFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canceledTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.canceledHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelContinuousFundResponse {
    const message = {
      ...baseMsgCancelContinuousFundResponse,
    } as MsgCancelContinuousFundResponse;
    if (object.canceledTime !== undefined && object.canceledTime !== null) {
      message.canceledTime = fromJsonTimestamp(object.canceledTime);
    } else {
      message.canceledTime = undefined;
    }
    if (object.canceledHeight !== undefined && object.canceledHeight !== null) {
      message.canceledHeight = Number(object.canceledHeight);
    } else {
      message.canceledHeight = 0;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: MsgCancelContinuousFundResponse): unknown {
    const obj: any = {};
    message.canceledTime !== undefined &&
      (obj.canceledTime = message.canceledTime.toISOString());
    message.canceledHeight !== undefined &&
      (obj.canceledHeight = message.canceledHeight);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelContinuousFundResponse>
  ): MsgCancelContinuousFundResponse {
    const message = {
      ...baseMsgCancelContinuousFundResponse,
    } as MsgCancelContinuousFundResponse;
    if (object.canceledTime !== undefined && object.canceledTime !== null) {
      message.canceledTime = object.canceledTime;
    } else {
      message.canceledTime = undefined;
    }
    if (object.canceledHeight !== undefined && object.canceledHeight !== null) {
      message.canceledHeight = object.canceledHeight;
    } else {
      message.canceledHeight = 0;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

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

/** Msg defines the pool Msg service. */
export interface Msg {
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(
    request: MsgFundCommunityPool
  ): Promise<MsgFundCommunityPoolResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/protocolpool module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   */
  CommunityPoolSpend(
    request: MsgCommunityPoolSpend
  ): Promise<MsgCommunityPoolSpendResponse>;
  /**
   * CreateContinuousFund defines a method to distribute a percentage of funds to an address continuously.
   * This ContinuousFund can be indefinite or run until a given expiry time.
   * Funds come from validator block rewards from x/distribution, but may also come from
   * any user who funds the ProtocolPoolEscrow module account directly through x/bank.
   */
  CreateContinuousFund(
    request: MsgCreateContinuousFund
  ): Promise<MsgCreateContinuousFundResponse>;
  /** CancelContinuousFund defines a method for cancelling continuous fund. */
  CancelContinuousFund(
    request: MsgCancelContinuousFund
  ): Promise<MsgCancelContinuousFundResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/protocolpool module parameters.
   * The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  FundCommunityPool(
    request: MsgFundCommunityPool
  ): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Msg",
      "FundCommunityPool",
      data
    );
    return promise.then((data) =>
      MsgFundCommunityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  CommunityPoolSpend(
    request: MsgCommunityPoolSpend
  ): Promise<MsgCommunityPoolSpendResponse> {
    const data = MsgCommunityPoolSpend.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Msg",
      "CommunityPoolSpend",
      data
    );
    return promise.then((data) =>
      MsgCommunityPoolSpendResponse.decode(new _m0.Reader(data))
    );
  }

  CreateContinuousFund(
    request: MsgCreateContinuousFund
  ): Promise<MsgCreateContinuousFundResponse> {
    const data = MsgCreateContinuousFund.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Msg",
      "CreateContinuousFund",
      data
    );
    return promise.then((data) =>
      MsgCreateContinuousFundResponse.decode(new _m0.Reader(data))
    );
  }

  CancelContinuousFund(
    request: MsgCancelContinuousFund
  ): Promise<MsgCancelContinuousFundResponse> {
    const data = MsgCancelContinuousFund.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Msg",
      "CancelContinuousFund",
      data
    );
    return promise.then((data) =>
      MsgCancelContinuousFundResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.protocolpool.v1.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
