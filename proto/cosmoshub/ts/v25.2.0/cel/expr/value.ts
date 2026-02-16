/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  NullValue,
  nullValueFromJSON,
  nullValueToJSON,
} from "../../google/protobuf/struct";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "cel.expr";

/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
  /** Null value. */
  nullValue: NullValue | undefined;
  /** Boolean value. */
  boolValue: boolean | undefined;
  /** Signed integer value. */
  int64Value: number | undefined;
  /** Unsigned integer value. */
  uint64Value: number | undefined;
  /** Floating point value. */
  doubleValue: number | undefined;
  /** UTF-8 string value. */
  stringValue: string | undefined;
  /** Byte string value. */
  bytesValue: Uint8Array | undefined;
  /** An enum value. */
  enumValue: EnumValue | undefined;
  /** The proto message backing an object value. */
  objectValue: Any | undefined;
  /** Map value. */
  mapValue: MapValue | undefined;
  /** List value. */
  listValue: ListValue | undefined;
  /** Type value. */
  typeValue: string | undefined;
}

/** An enum value. */
export interface EnumValue {
  /** The fully qualified name of the enum type. */
  type: string;
  /** The value of the enum. */
  value: number;
}

/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValue {
  /** The ordered values in the list. */
  values: Value[];
}

/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValue {
  /**
   * The set of map entries.
   *
   * CEL has fewer restrictions on keys, so a protobuf map representation
   * cannot be used.
   */
  entries: MapValue_Entry[];
}

export interface MapValue_Entry {
  /**
   * The key.
   *
   * Must be unique with in the map.
   * Currently only boolean, int, uint, and string values can be keys.
   */
  key: Value | undefined;
  /** The value. */
  value: Value | undefined;
}

const baseValue: object = {};

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }
    if (message.int64Value !== undefined) {
      writer.uint32(24).int64(message.int64Value);
    }
    if (message.uint64Value !== undefined) {
      writer.uint32(32).uint64(message.uint64Value);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(41).double(message.doubleValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(50).string(message.stringValue);
    }
    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }
    if (message.enumValue !== undefined) {
      EnumValue.encode(message.enumValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.objectValue !== undefined) {
      Any.encode(message.objectValue, writer.uint32(82).fork()).ldelim();
    }
    if (message.mapValue !== undefined) {
      MapValue.encode(message.mapValue, writer.uint32(90).fork()).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(98).fork()).ldelim();
    }
    if (message.typeValue !== undefined) {
      writer.uint32(122).string(message.typeValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValue } as Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullValue = reader.int32() as any;
          break;
        case 2:
          message.boolValue = reader.bool();
          break;
        case 3:
          message.int64Value = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.uint64Value = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.doubleValue = reader.double();
          break;
        case 6:
          message.stringValue = reader.string();
          break;
        case 7:
          message.bytesValue = reader.bytes();
          break;
        case 9:
          message.enumValue = EnumValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.objectValue = Any.decode(reader, reader.uint32());
          break;
        case 11:
          message.mapValue = MapValue.decode(reader, reader.uint32());
          break;
        case 12:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        case 15:
          message.typeValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    const message = { ...baseValue } as Value;
    if (object.nullValue !== undefined && object.nullValue !== null) {
      message.nullValue = nullValueFromJSON(object.nullValue);
    } else {
      message.nullValue = undefined;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = Boolean(object.boolValue);
    } else {
      message.boolValue = undefined;
    }
    if (object.int64Value !== undefined && object.int64Value !== null) {
      message.int64Value = Number(object.int64Value);
    } else {
      message.int64Value = undefined;
    }
    if (object.uint64Value !== undefined && object.uint64Value !== null) {
      message.uint64Value = Number(object.uint64Value);
    } else {
      message.uint64Value = undefined;
    }
    if (object.doubleValue !== undefined && object.doubleValue !== null) {
      message.doubleValue = Number(object.doubleValue);
    } else {
      message.doubleValue = undefined;
    }
    if (object.stringValue !== undefined && object.stringValue !== null) {
      message.stringValue = String(object.stringValue);
    } else {
      message.stringValue = undefined;
    }
    if (object.bytesValue !== undefined && object.bytesValue !== null) {
      message.bytesValue = bytesFromBase64(object.bytesValue);
    }
    if (object.enumValue !== undefined && object.enumValue !== null) {
      message.enumValue = EnumValue.fromJSON(object.enumValue);
    } else {
      message.enumValue = undefined;
    }
    if (object.objectValue !== undefined && object.objectValue !== null) {
      message.objectValue = Any.fromJSON(object.objectValue);
    } else {
      message.objectValue = undefined;
    }
    if (object.mapValue !== undefined && object.mapValue !== null) {
      message.mapValue = MapValue.fromJSON(object.mapValue);
    } else {
      message.mapValue = undefined;
    }
    if (object.listValue !== undefined && object.listValue !== null) {
      message.listValue = ListValue.fromJSON(object.listValue);
    } else {
      message.listValue = undefined;
    }
    if (object.typeValue !== undefined && object.typeValue !== null) {
      message.typeValue = String(object.typeValue);
    } else {
      message.typeValue = undefined;
    }
    return message;
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined &&
      (obj.nullValue =
        message.nullValue !== undefined
          ? nullValueToJSON(message.nullValue)
          : undefined);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = message.int64Value);
    message.uint64Value !== undefined &&
      (obj.uint64Value = message.uint64Value);
    message.doubleValue !== undefined &&
      (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined &&
      (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined &&
      (obj.bytesValue =
        message.bytesValue !== undefined
          ? base64FromBytes(message.bytesValue)
          : undefined);
    message.enumValue !== undefined &&
      (obj.enumValue = message.enumValue
        ? EnumValue.toJSON(message.enumValue)
        : undefined);
    message.objectValue !== undefined &&
      (obj.objectValue = message.objectValue
        ? Any.toJSON(message.objectValue)
        : undefined);
    message.mapValue !== undefined &&
      (obj.mapValue = message.mapValue
        ? MapValue.toJSON(message.mapValue)
        : undefined);
    message.listValue !== undefined &&
      (obj.listValue = message.listValue
        ? ListValue.toJSON(message.listValue)
        : undefined);
    message.typeValue !== undefined && (obj.typeValue = message.typeValue);
    return obj;
  },

  fromPartial(object: DeepPartial<Value>): Value {
    const message = { ...baseValue } as Value;
    if (object.nullValue !== undefined && object.nullValue !== null) {
      message.nullValue = object.nullValue;
    } else {
      message.nullValue = undefined;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = object.boolValue;
    } else {
      message.boolValue = undefined;
    }
    if (object.int64Value !== undefined && object.int64Value !== null) {
      message.int64Value = object.int64Value;
    } else {
      message.int64Value = undefined;
    }
    if (object.uint64Value !== undefined && object.uint64Value !== null) {
      message.uint64Value = object.uint64Value;
    } else {
      message.uint64Value = undefined;
    }
    if (object.doubleValue !== undefined && object.doubleValue !== null) {
      message.doubleValue = object.doubleValue;
    } else {
      message.doubleValue = undefined;
    }
    if (object.stringValue !== undefined && object.stringValue !== null) {
      message.stringValue = object.stringValue;
    } else {
      message.stringValue = undefined;
    }
    if (object.bytesValue !== undefined && object.bytesValue !== null) {
      message.bytesValue = object.bytesValue;
    } else {
      message.bytesValue = undefined;
    }
    if (object.enumValue !== undefined && object.enumValue !== null) {
      message.enumValue = EnumValue.fromPartial(object.enumValue);
    } else {
      message.enumValue = undefined;
    }
    if (object.objectValue !== undefined && object.objectValue !== null) {
      message.objectValue = Any.fromPartial(object.objectValue);
    } else {
      message.objectValue = undefined;
    }
    if (object.mapValue !== undefined && object.mapValue !== null) {
      message.mapValue = MapValue.fromPartial(object.mapValue);
    } else {
      message.mapValue = undefined;
    }
    if (object.listValue !== undefined && object.listValue !== null) {
      message.listValue = ListValue.fromPartial(object.listValue);
    } else {
      message.listValue = undefined;
    }
    if (object.typeValue !== undefined && object.typeValue !== null) {
      message.typeValue = object.typeValue;
    } else {
      message.typeValue = undefined;
    }
    return message;
  },
};

const baseEnumValue: object = { type: "", value: 0 };

export const EnumValue = {
  encode(
    message: EnumValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnumValue } as EnumValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumValue {
    const message = { ...baseEnumValue } as EnumValue;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: EnumValue): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<EnumValue>): EnumValue {
    const message = { ...baseEnumValue } as EnumValue;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseListValue: object = {};

export const ListValue = {
  encode(
    message: ListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => (e ? Value.toJSON(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMapValue: object = {};

export const MapValue = {
  encode(
    message: MapValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      MapValue_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapValue } as MapValue;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(MapValue_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapValue {
    const message = { ...baseMapValue } as MapValue;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(MapValue_Entry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MapValue): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? MapValue_Entry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MapValue>): MapValue {
    const message = { ...baseMapValue } as MapValue;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(MapValue_Entry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMapValue_Entry: object = {};

export const MapValue_Entry = {
  encode(
    message: MapValue_Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== undefined) {
      Value.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapValue_Entry } as MapValue_Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Value.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapValue_Entry {
    const message = { ...baseMapValue_Entry } as MapValue_Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Value.fromJSON(object.key);
    } else {
      message.key = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: MapValue_Entry): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key ? Value.toJSON(message.key) : undefined);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MapValue_Entry>): MapValue_Entry {
    const message = { ...baseMapValue_Entry } as MapValue_Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Value.fromPartial(object.key);
    } else {
      message.key = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
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
