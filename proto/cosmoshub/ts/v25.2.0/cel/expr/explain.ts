/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Value } from "../../cel/expr/value";

export const protobufPackage = "cel.expr";

/**
 * Values of intermediate expressions produced when evaluating expression.
 *
 * @deprecated
 */
export interface Explain {
  /**
   * All of the observed values.
   *
   * The field value_index is an index in the values list.
   * Separating values from steps is needed to remove redundant values.
   */
  values: Value[];
  /**
   * List of steps.
   *
   * Repeated evaluations of the same expression generate new ExprStep
   * instances. The order of such ExprStep instances matches the order of
   * elements returned by Comprehension.iter_range.
   */
  exprSteps: Explain_ExprStep[];
}

/** ID and value index of one step. */
export interface Explain_ExprStep {
  /** ID of corresponding Expr node. */
  id: number;
  /** Index of the value in the values list. */
  valueIndex: number;
}

const baseExplain: object = {};

export const Explain = {
  encode(
    message: Explain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.exprSteps) {
      Explain_ExprStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Explain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExplain } as Explain;
    message.values = [];
    message.exprSteps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        case 2:
          message.exprSteps.push(
            Explain_ExprStep.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Explain {
    const message = { ...baseExplain } as Explain;
    message.values = [];
    message.exprSteps = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromJSON(e));
      }
    }
    if (object.exprSteps !== undefined && object.exprSteps !== null) {
      for (const e of object.exprSteps) {
        message.exprSteps.push(Explain_ExprStep.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Explain): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => (e ? Value.toJSON(e) : undefined));
    } else {
      obj.values = [];
    }
    if (message.exprSteps) {
      obj.exprSteps = message.exprSteps.map((e) =>
        e ? Explain_ExprStep.toJSON(e) : undefined
      );
    } else {
      obj.exprSteps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Explain>): Explain {
    const message = { ...baseExplain } as Explain;
    message.values = [];
    message.exprSteps = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromPartial(e));
      }
    }
    if (object.exprSteps !== undefined && object.exprSteps !== null) {
      for (const e of object.exprSteps) {
        message.exprSteps.push(Explain_ExprStep.fromPartial(e));
      }
    }
    return message;
  },
};

const baseExplain_ExprStep: object = { id: 0, valueIndex: 0 };

export const Explain_ExprStep = {
  encode(
    message: Explain_ExprStep,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.valueIndex !== 0) {
      writer.uint32(16).int32(message.valueIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Explain_ExprStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExplain_ExprStep } as Explain_ExprStep;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.valueIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Explain_ExprStep {
    const message = { ...baseExplain_ExprStep } as Explain_ExprStep;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.valueIndex !== undefined && object.valueIndex !== null) {
      message.valueIndex = Number(object.valueIndex);
    } else {
      message.valueIndex = 0;
    }
    return message;
  },

  toJSON(message: Explain_ExprStep): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.valueIndex !== undefined && (obj.valueIndex = message.valueIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<Explain_ExprStep>): Explain_ExprStep {
    const message = { ...baseExplain_ExprStep } as Explain_ExprStep;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.valueIndex !== undefined && object.valueIndex !== null) {
      message.valueIndex = object.valueIndex;
    } else {
      message.valueIndex = 0;
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
