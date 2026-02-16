/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.ibchooks";

export interface Params {
  allowedAsyncAckContracts: string[];
}

const baseParams: object = { allowedAsyncAckContracts: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowedAsyncAckContracts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.allowedAsyncAckContracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedAsyncAckContracts.push(reader.string());
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
    message.allowedAsyncAckContracts = [];
    if (
      object.allowedAsyncAckContracts !== undefined &&
      object.allowedAsyncAckContracts !== null
    ) {
      for (const e of object.allowedAsyncAckContracts) {
        message.allowedAsyncAckContracts.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedAsyncAckContracts) {
      obj.allowedAsyncAckContracts = message.allowedAsyncAckContracts.map(
        (e) => e
      );
    } else {
      obj.allowedAsyncAckContracts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.allowedAsyncAckContracts = [];
    if (
      object.allowedAsyncAckContracts !== undefined &&
      object.allowedAsyncAckContracts !== null
    ) {
      for (const e of object.allowedAsyncAckContracts) {
        message.allowedAsyncAckContracts.push(e);
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
