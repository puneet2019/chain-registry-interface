/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";

/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {}

export interface JoinPoolExecuteMsgRequest {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  joinPool: EmptyRequest | undefined;
}

export interface JoinPoolExecuteMsgResponse {}

/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exitPool: EmptyRequest | undefined;
}

export interface ExitPoolExecuteMsgResponse {}

const baseEmptyRequest: object = {};

export const EmptyRequest = {
  encode(
    _: EmptyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmptyRequest } as EmptyRequest;
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

  fromJSON(_: any): EmptyRequest {
    const message = { ...baseEmptyRequest } as EmptyRequest;
    return message;
  },

  toJSON(_: EmptyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<EmptyRequest>): EmptyRequest {
    const message = { ...baseEmptyRequest } as EmptyRequest;
    return message;
  },
};

const baseJoinPoolExecuteMsgRequest: object = {};

export const JoinPoolExecuteMsgRequest = {
  encode(
    message: JoinPoolExecuteMsgRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.joinPool !== undefined) {
      EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): JoinPoolExecuteMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseJoinPoolExecuteMsgRequest,
    } as JoinPoolExecuteMsgRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.joinPool = EmptyRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JoinPoolExecuteMsgRequest {
    const message = {
      ...baseJoinPoolExecuteMsgRequest,
    } as JoinPoolExecuteMsgRequest;
    if (object.joinPool !== undefined && object.joinPool !== null) {
      message.joinPool = EmptyRequest.fromJSON(object.joinPool);
    } else {
      message.joinPool = undefined;
    }
    return message;
  },

  toJSON(message: JoinPoolExecuteMsgRequest): unknown {
    const obj: any = {};
    message.joinPool !== undefined &&
      (obj.joinPool = message.joinPool
        ? EmptyRequest.toJSON(message.joinPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<JoinPoolExecuteMsgRequest>
  ): JoinPoolExecuteMsgRequest {
    const message = {
      ...baseJoinPoolExecuteMsgRequest,
    } as JoinPoolExecuteMsgRequest;
    if (object.joinPool !== undefined && object.joinPool !== null) {
      message.joinPool = EmptyRequest.fromPartial(object.joinPool);
    } else {
      message.joinPool = undefined;
    }
    return message;
  },
};

const baseJoinPoolExecuteMsgResponse: object = {};

export const JoinPoolExecuteMsgResponse = {
  encode(
    _: JoinPoolExecuteMsgResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): JoinPoolExecuteMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseJoinPoolExecuteMsgResponse,
    } as JoinPoolExecuteMsgResponse;
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

  fromJSON(_: any): JoinPoolExecuteMsgResponse {
    const message = {
      ...baseJoinPoolExecuteMsgResponse,
    } as JoinPoolExecuteMsgResponse;
    return message;
  },

  toJSON(_: JoinPoolExecuteMsgResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<JoinPoolExecuteMsgResponse>
  ): JoinPoolExecuteMsgResponse {
    const message = {
      ...baseJoinPoolExecuteMsgResponse,
    } as JoinPoolExecuteMsgResponse;
    return message;
  },
};

const baseExitPoolExecuteMsgRequest: object = {};

export const ExitPoolExecuteMsgRequest = {
  encode(
    message: ExitPoolExecuteMsgRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exitPool !== undefined) {
      EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExitPoolExecuteMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExitPoolExecuteMsgRequest,
    } as ExitPoolExecuteMsgRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exitPool = EmptyRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExitPoolExecuteMsgRequest {
    const message = {
      ...baseExitPoolExecuteMsgRequest,
    } as ExitPoolExecuteMsgRequest;
    if (object.exitPool !== undefined && object.exitPool !== null) {
      message.exitPool = EmptyRequest.fromJSON(object.exitPool);
    } else {
      message.exitPool = undefined;
    }
    return message;
  },

  toJSON(message: ExitPoolExecuteMsgRequest): unknown {
    const obj: any = {};
    message.exitPool !== undefined &&
      (obj.exitPool = message.exitPool
        ? EmptyRequest.toJSON(message.exitPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExitPoolExecuteMsgRequest>
  ): ExitPoolExecuteMsgRequest {
    const message = {
      ...baseExitPoolExecuteMsgRequest,
    } as ExitPoolExecuteMsgRequest;
    if (object.exitPool !== undefined && object.exitPool !== null) {
      message.exitPool = EmptyRequest.fromPartial(object.exitPool);
    } else {
      message.exitPool = undefined;
    }
    return message;
  },
};

const baseExitPoolExecuteMsgResponse: object = {};

export const ExitPoolExecuteMsgResponse = {
  encode(
    _: ExitPoolExecuteMsgResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExitPoolExecuteMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExitPoolExecuteMsgResponse,
    } as ExitPoolExecuteMsgResponse;
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

  fromJSON(_: any): ExitPoolExecuteMsgResponse {
    const message = {
      ...baseExitPoolExecuteMsgResponse,
    } as ExitPoolExecuteMsgResponse;
    return message;
  },

  toJSON(_: ExitPoolExecuteMsgResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ExitPoolExecuteMsgResponse>
  ): ExitPoolExecuteMsgResponse {
    const message = {
      ...baseExitPoolExecuteMsgResponse,
    } as ExitPoolExecuteMsgResponse;
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
