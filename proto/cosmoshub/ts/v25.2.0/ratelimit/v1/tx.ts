/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ratelimit.v1";

/** Gov tx to add a new rate limit */
export interface MsgAddRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: number;
}

export interface MsgAddRateLimitResponse {}

/** Gov tx to update an existing rate limit */
export interface MsgUpdateRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: number;
}

export interface MsgUpdateRateLimitResponse {}

/** Gov tx to remove a rate limit */
export interface MsgRemoveRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
}

export interface MsgRemoveRateLimitResponse {}

/** Gov tx to reset the flow on a rate limit */
export interface MsgResetRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
}

export interface MsgResetRateLimitResponse {}

const baseMsgAddRateLimit: object = {
  authority: "",
  denom: "",
  channelOrClientId: "",
  maxPercentSend: "",
  maxPercentRecv: "",
  durationHours: 0,
};

export const MsgAddRateLimit = {
  encode(
    message: MsgAddRateLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    if (message.durationHours !== 0) {
      writer.uint32(48).uint64(message.durationHours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddRateLimit } as MsgAddRateLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        case 4:
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        case 6:
          message.durationHours = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddRateLimit {
    const message = { ...baseMsgAddRateLimit } as MsgAddRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = String(object.maxPercentSend);
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = String(object.maxPercentRecv);
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = Number(object.durationHours);
    } else {
      message.durationHours = 0;
    }
    return message;
  },

  toJSON(message: MsgAddRateLimit): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    message.maxPercentSend !== undefined &&
      (obj.maxPercentSend = message.maxPercentSend);
    message.maxPercentRecv !== undefined &&
      (obj.maxPercentRecv = message.maxPercentRecv);
    message.durationHours !== undefined &&
      (obj.durationHours = message.durationHours);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRateLimit>): MsgAddRateLimit {
    const message = { ...baseMsgAddRateLimit } as MsgAddRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = object.maxPercentSend;
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = object.maxPercentRecv;
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = object.durationHours;
    } else {
      message.durationHours = 0;
    }
    return message;
  },
};

const baseMsgAddRateLimitResponse: object = {};

export const MsgAddRateLimitResponse = {
  encode(
    _: MsgAddRateLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddRateLimitResponse,
    } as MsgAddRateLimitResponse;
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

  fromJSON(_: any): MsgAddRateLimitResponse {
    const message = {
      ...baseMsgAddRateLimitResponse,
    } as MsgAddRateLimitResponse;
    return message;
  },

  toJSON(_: MsgAddRateLimitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddRateLimitResponse>
  ): MsgAddRateLimitResponse {
    const message = {
      ...baseMsgAddRateLimitResponse,
    } as MsgAddRateLimitResponse;
    return message;
  },
};

const baseMsgUpdateRateLimit: object = {
  authority: "",
  denom: "",
  channelOrClientId: "",
  maxPercentSend: "",
  maxPercentRecv: "",
  durationHours: 0,
};

export const MsgUpdateRateLimit = {
  encode(
    message: MsgUpdateRateLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    if (message.durationHours !== 0) {
      writer.uint32(48).uint64(message.durationHours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRateLimit } as MsgUpdateRateLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        case 4:
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        case 6:
          message.durationHours = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRateLimit {
    const message = { ...baseMsgUpdateRateLimit } as MsgUpdateRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = String(object.maxPercentSend);
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = String(object.maxPercentRecv);
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = Number(object.durationHours);
    } else {
      message.durationHours = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateRateLimit): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    message.maxPercentSend !== undefined &&
      (obj.maxPercentSend = message.maxPercentSend);
    message.maxPercentRecv !== undefined &&
      (obj.maxPercentRecv = message.maxPercentRecv);
    message.durationHours !== undefined &&
      (obj.durationHours = message.durationHours);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRateLimit>): MsgUpdateRateLimit {
    const message = { ...baseMsgUpdateRateLimit } as MsgUpdateRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = object.maxPercentSend;
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = object.maxPercentRecv;
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = object.durationHours;
    } else {
      message.durationHours = 0;
    }
    return message;
  },
};

const baseMsgUpdateRateLimitResponse: object = {};

export const MsgUpdateRateLimitResponse = {
  encode(
    _: MsgUpdateRateLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRateLimitResponse,
    } as MsgUpdateRateLimitResponse;
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

  fromJSON(_: any): MsgUpdateRateLimitResponse {
    const message = {
      ...baseMsgUpdateRateLimitResponse,
    } as MsgUpdateRateLimitResponse;
    return message;
  },

  toJSON(_: MsgUpdateRateLimitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRateLimitResponse>
  ): MsgUpdateRateLimitResponse {
    const message = {
      ...baseMsgUpdateRateLimitResponse,
    } as MsgUpdateRateLimitResponse;
    return message;
  },
};

const baseMsgRemoveRateLimit: object = {
  authority: "",
  denom: "",
  channelOrClientId: "",
};

export const MsgRemoveRateLimit = {
  encode(
    message: MsgRemoveRateLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveRateLimit } as MsgRemoveRateLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRateLimit {
    const message = { ...baseMsgRemoveRateLimit } as MsgRemoveRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveRateLimit): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveRateLimit>): MsgRemoveRateLimit {
    const message = { ...baseMsgRemoveRateLimit } as MsgRemoveRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },
};

const baseMsgRemoveRateLimitResponse: object = {};

export const MsgRemoveRateLimitResponse = {
  encode(
    _: MsgRemoveRateLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveRateLimitResponse,
    } as MsgRemoveRateLimitResponse;
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

  fromJSON(_: any): MsgRemoveRateLimitResponse {
    const message = {
      ...baseMsgRemoveRateLimitResponse,
    } as MsgRemoveRateLimitResponse;
    return message;
  },

  toJSON(_: MsgRemoveRateLimitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveRateLimitResponse>
  ): MsgRemoveRateLimitResponse {
    const message = {
      ...baseMsgRemoveRateLimitResponse,
    } as MsgRemoveRateLimitResponse;
    return message;
  },
};

const baseMsgResetRateLimit: object = {
  authority: "",
  denom: "",
  channelOrClientId: "",
};

export const MsgResetRateLimit = {
  encode(
    message: MsgResetRateLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetRateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgResetRateLimit } as MsgResetRateLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgResetRateLimit {
    const message = { ...baseMsgResetRateLimit } as MsgResetRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },

  toJSON(message: MsgResetRateLimit): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgResetRateLimit>): MsgResetRateLimit {
    const message = { ...baseMsgResetRateLimit } as MsgResetRateLimit;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },
};

const baseMsgResetRateLimitResponse: object = {};

export const MsgResetRateLimitResponse = {
  encode(
    _: MsgResetRateLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgResetRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgResetRateLimitResponse,
    } as MsgResetRateLimitResponse;
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

  fromJSON(_: any): MsgResetRateLimitResponse {
    const message = {
      ...baseMsgResetRateLimitResponse,
    } as MsgResetRateLimitResponse;
    return message;
  },

  toJSON(_: MsgResetRateLimitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgResetRateLimitResponse>
  ): MsgResetRateLimitResponse {
    const message = {
      ...baseMsgResetRateLimitResponse,
    } as MsgResetRateLimitResponse;
    return message;
  },
};

/** Msg service for rate limit txs */
export interface Msg {
  /** Gov tx to add a new rate limit */
  AddRateLimit(request: MsgAddRateLimit): Promise<MsgAddRateLimitResponse>;
  /** Gov tx to update an existing rate limit */
  UpdateRateLimit(
    request: MsgUpdateRateLimit
  ): Promise<MsgUpdateRateLimitResponse>;
  /** Gov tx to remove a rate limit */
  RemoveRateLimit(
    request: MsgRemoveRateLimit
  ): Promise<MsgRemoveRateLimitResponse>;
  /** Gov tx to reset the flow on a rate limit */
  ResetRateLimit(
    request: MsgResetRateLimit
  ): Promise<MsgResetRateLimitResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AddRateLimit(request: MsgAddRateLimit): Promise<MsgAddRateLimitResponse> {
    const data = MsgAddRateLimit.encode(request).finish();
    const promise = this.rpc.request("ratelimit.v1.Msg", "AddRateLimit", data);
    return promise.then((data) =>
      MsgAddRateLimitResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRateLimit(
    request: MsgUpdateRateLimit
  ): Promise<MsgUpdateRateLimitResponse> {
    const data = MsgUpdateRateLimit.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Msg",
      "UpdateRateLimit",
      data
    );
    return promise.then((data) =>
      MsgUpdateRateLimitResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveRateLimit(
    request: MsgRemoveRateLimit
  ): Promise<MsgRemoveRateLimitResponse> {
    const data = MsgRemoveRateLimit.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Msg",
      "RemoveRateLimit",
      data
    );
    return promise.then((data) =>
      MsgRemoveRateLimitResponse.decode(new _m0.Reader(data))
    );
  }

  ResetRateLimit(
    request: MsgResetRateLimit
  ): Promise<MsgResetRateLimitResponse> {
    const data = MsgResetRateLimit.encode(request).finish();
    const promise = this.rpc.request(
      "ratelimit.v1.Msg",
      "ResetRateLimit",
      data
    );
    return promise.then((data) =>
      MsgResetRateLimitResponse.decode(new _m0.Reader(data))
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
