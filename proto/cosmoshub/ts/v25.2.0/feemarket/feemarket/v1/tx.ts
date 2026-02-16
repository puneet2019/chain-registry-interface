/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";

export const protobufPackage = "feemarket.feemarket.v1";

/**
 * MsgParams defines the Msg/Params request type. It contains the
 * new parameters for the feemarket module.
 */
export interface MsgParams {
  /** Params defines the new parameters for the feemarket module. */
  params: Params | undefined;
  /**
   * Authority defines the authority that is updating the feemarket module
   * parameters.
   */
  authority: string;
}

/** MsgParamsResponse defines the Msg/Params response type. */
export interface MsgParamsResponse {}

const baseMsgParams: object = { authority: "" };

export const MsgParams = {
  encode(
    message: MsgParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgParams } as MsgParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgParams {
    const message = { ...baseMsgParams } as MsgParams;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    return message;
  },

  toJSON(message: MsgParams): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgParams>): MsgParams {
    const message = { ...baseMsgParams } as MsgParams;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    return message;
  },
};

const baseMsgParamsResponse: object = {};

export const MsgParamsResponse = {
  encode(
    _: MsgParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgParamsResponse } as MsgParamsResponse;
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

  fromJSON(_: any): MsgParamsResponse {
    const message = { ...baseMsgParamsResponse } as MsgParamsResponse;
    return message;
  },

  toJSON(_: MsgParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgParamsResponse>): MsgParamsResponse {
    const message = { ...baseMsgParamsResponse } as MsgParamsResponse;
    return message;
  },
};

/**
 * Message service defines the types of messages supported by the feemarket
 * module.
 */
export interface Msg {
  /** Params defines a method for updating the feemarket module parameters. */
  Params(request: MsgParams): Promise<MsgParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: MsgParams): Promise<MsgParamsResponse> {
    const data = MsgParams.encode(request).finish();
    const promise = this.rpc.request(
      "feemarket.feemarket.v1.Msg",
      "Params",
      data
    );
    return promise.then((data) =>
      MsgParamsResponse.decode(new _m0.Reader(data))
    );
  }
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
