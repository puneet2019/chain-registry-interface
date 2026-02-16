/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.smartaccount.v1beta1";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * MaximumUnauthenticatedGas defines the maximum amount of gas that can be
   * used to authenticate a transaction in ante handler without having fee payer
   * authenticated.
   */
  maximumUnauthenticatedGas: number;
  /**
   * IsSmartAccountActive defines the state of the authenticator.
   * If set to false, the authenticator module will not be used
   * and the classic cosmos sdk authentication will be used instead.
   */
  isSmartAccountActive: boolean;
  /**
   * CircuitBreakerControllers defines list of addresses that are allowed to
   * set is_smart_account_active without going through governance.
   */
  circuitBreakerControllers: string[];
}

const baseParams: object = {
  maximumUnauthenticatedGas: 0,
  isSmartAccountActive: false,
  circuitBreakerControllers: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maximumUnauthenticatedGas !== 0) {
      writer.uint32(8).uint64(message.maximumUnauthenticatedGas);
    }
    if (message.isSmartAccountActive === true) {
      writer.uint32(16).bool(message.isSmartAccountActive);
    }
    for (const v of message.circuitBreakerControllers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.circuitBreakerControllers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximumUnauthenticatedGas = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 2:
          message.isSmartAccountActive = reader.bool();
          break;
        case 3:
          message.circuitBreakerControllers.push(reader.string());
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
    message.circuitBreakerControllers = [];
    if (
      object.maximumUnauthenticatedGas !== undefined &&
      object.maximumUnauthenticatedGas !== null
    ) {
      message.maximumUnauthenticatedGas = Number(
        object.maximumUnauthenticatedGas
      );
    } else {
      message.maximumUnauthenticatedGas = 0;
    }
    if (
      object.isSmartAccountActive !== undefined &&
      object.isSmartAccountActive !== null
    ) {
      message.isSmartAccountActive = Boolean(object.isSmartAccountActive);
    } else {
      message.isSmartAccountActive = false;
    }
    if (
      object.circuitBreakerControllers !== undefined &&
      object.circuitBreakerControllers !== null
    ) {
      for (const e of object.circuitBreakerControllers) {
        message.circuitBreakerControllers.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maximumUnauthenticatedGas !== undefined &&
      (obj.maximumUnauthenticatedGas = message.maximumUnauthenticatedGas);
    message.isSmartAccountActive !== undefined &&
      (obj.isSmartAccountActive = message.isSmartAccountActive);
    if (message.circuitBreakerControllers) {
      obj.circuitBreakerControllers = message.circuitBreakerControllers.map(
        (e) => e
      );
    } else {
      obj.circuitBreakerControllers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.circuitBreakerControllers = [];
    if (
      object.maximumUnauthenticatedGas !== undefined &&
      object.maximumUnauthenticatedGas !== null
    ) {
      message.maximumUnauthenticatedGas = object.maximumUnauthenticatedGas;
    } else {
      message.maximumUnauthenticatedGas = 0;
    }
    if (
      object.isSmartAccountActive !== undefined &&
      object.isSmartAccountActive !== null
    ) {
      message.isSmartAccountActive = object.isSmartAccountActive;
    } else {
      message.isSmartAccountActive = false;
    }
    if (
      object.circuitBreakerControllers !== undefined &&
      object.circuitBreakerControllers !== null
    ) {
      for (const e of object.circuitBreakerControllers) {
        message.circuitBreakerControllers.push(e);
      }
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
