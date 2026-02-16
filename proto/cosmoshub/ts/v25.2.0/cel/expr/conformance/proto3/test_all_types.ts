/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  NullValue,
  Struct,
  Value,
  ListValue,
  nullValueFromJSON,
  nullValueToJSON,
} from "../../../../google/protobuf/struct";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Any } from "../../../../google/protobuf/any";
import { Duration } from "../../../../google/protobuf/duration";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Empty } from "../../../../google/protobuf/empty";
import {
  Int64Value,
  Int32Value,
  DoubleValue,
  FloatValue,
  UInt64Value,
  UInt32Value,
  StringValue,
  BoolValue,
  BytesValue,
} from "../../../../google/protobuf/wrappers";

export const protobufPackage = "cel.expr.conformance.proto3";

/** This proto tests that global enums are resolved correctly. */
export enum GlobalEnum {
  GOO = 0,
  GAR = 1,
  GAZ = 2,
  UNRECOGNIZED = -1,
}

export function globalEnumFromJSON(object: any): GlobalEnum {
  switch (object) {
    case 0:
    case "GOO":
      return GlobalEnum.GOO;
    case 1:
    case "GAR":
      return GlobalEnum.GAR;
    case 2:
    case "GAZ":
      return GlobalEnum.GAZ;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GlobalEnum.UNRECOGNIZED;
  }
}

export function globalEnumToJSON(object: GlobalEnum): string {
  switch (object) {
    case GlobalEnum.GOO:
      return "GOO";
    case GlobalEnum.GAR:
      return "GAR";
    case GlobalEnum.GAZ:
      return "GAZ";
    default:
      return "UNKNOWN";
  }
}

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 */
export interface TestAllTypes {
  /** Singular */
  singleInt32: number;
  singleInt64: number;
  singleUint32: number;
  singleUint64: number;
  singleSint32: number;
  singleSint64: number;
  singleFixed32: number;
  singleFixed64: number;
  singleSfixed32: number;
  singleSfixed64: number;
  singleFloat: number;
  singleDouble: number;
  singleBool: boolean;
  singleString: string;
  singleBytes: Uint8Array;
  optionalBool?: boolean | undefined;
  optionalString?: boolean | undefined;
  /** Collides with 'in' operator. */
  in: boolean;
  /** Wellknown. */
  singleAny: Any | undefined;
  singleDuration: Duration | undefined;
  singleTimestamp: Date | undefined;
  singleStruct: Struct | undefined;
  singleValue: Value | undefined;
  singleInt64Wrapper: number | undefined;
  singleInt32Wrapper: number | undefined;
  singleDoubleWrapper: number | undefined;
  singleFloatWrapper: number | undefined;
  singleUint64Wrapper: number | undefined;
  singleUint32Wrapper: number | undefined;
  singleStringWrapper: string | undefined;
  singleBoolWrapper: boolean | undefined;
  singleBytesWrapper: Uint8Array | undefined;
  listValue: ListValue | undefined;
  nullValue: NullValue;
  optionalNullValue?: NullValue | undefined;
  fieldMask: FieldMask | undefined;
  empty: Empty | undefined;
  singleNestedMessage: TestAllTypes_NestedMessage | undefined;
  singleNestedEnum: TestAllTypes_NestedEnum | undefined;
  standaloneMessage: TestAllTypes_NestedMessage | undefined;
  standaloneEnum: TestAllTypes_NestedEnum;
  /** Repeated */
  repeatedInt32: number[];
  repeatedInt64: number[];
  repeatedUint32: number[];
  repeatedUint64: number[];
  repeatedSint32: number[];
  repeatedSint64: number[];
  repeatedFixed32: number[];
  repeatedFixed64: number[];
  repeatedSfixed32: number[];
  repeatedSfixed64: number[];
  repeatedFloat: number[];
  repeatedDouble: number[];
  repeatedBool: boolean[];
  repeatedString: string[];
  repeatedBytes: Uint8Array[];
  /** Repeated and nested */
  repeatedNestedMessage: TestAllTypes_NestedMessage[];
  repeatedNestedEnum: TestAllTypes_NestedEnum[];
  repeatedStringPiece: string[];
  repeatedCord: string[];
  repeatedLazyMessage: TestAllTypes_NestedMessage[];
  /** Repeated wellknown. */
  repeatedAny: Any[];
  repeatedDuration: Duration[];
  repeatedTimestamp: Date[];
  repeatedStruct: Struct[];
  repeatedValue: Value[];
  repeatedInt64Wrapper: number[];
  repeatedInt32Wrapper: number[];
  repeatedDoubleWrapper: number[];
  repeatedFloatWrapper: number[];
  repeatedUint64Wrapper: number[];
  repeatedUint32Wrapper: number[];
  repeatedStringWrapper: string[];
  repeatedBoolWrapper: boolean[];
  repeatedBytesWrapper: Uint8Array[];
  repeatedListValue: ListValue[];
  repeatedNullValue: NullValue[];
  /** Map */
  mapInt64NestedType: { [key: number]: NestedTestAllTypes };
  mapBoolBool: { [key: boolean]: boolean };
  mapBoolString: { [key: boolean]: string };
  mapBoolBytes: { [key: boolean]: Uint8Array };
  mapBoolInt32: { [key: boolean]: number };
  mapBoolInt64: { [key: boolean]: number };
  mapBoolUint32: { [key: boolean]: number };
  mapBoolUint64: { [key: boolean]: number };
  mapBoolFloat: { [key: boolean]: number };
  mapBoolDouble: { [key: boolean]: number };
  mapBoolEnum: { [key: boolean]: TestAllTypes_NestedEnum };
  mapBoolMessage: { [key: boolean]: TestAllTypes_NestedMessage };
  mapBoolDuration: { [key: boolean]: Duration };
  mapBoolTimestamp: { [key: boolean]: Date };
  mapBoolNullValue: { [key: boolean]: NullValue };
  mapBoolAny: { [key: boolean]: Any };
  mapBoolStruct: { [key: boolean]: Struct };
  mapBoolValue: { [key: boolean]: Value };
  mapBoolListValue: { [key: boolean]: ListValue };
  mapBoolInt64Wrapper: { [key: boolean]: number | undefined };
  mapBoolInt32Wrapper: { [key: boolean]: number | undefined };
  mapBoolDoubleWrapper: { [key: boolean]: number | undefined };
  mapBoolFloatWrapper: { [key: boolean]: number | undefined };
  mapBoolUint64Wrapper: { [key: boolean]: number | undefined };
  mapBoolUint32Wrapper: { [key: boolean]: number | undefined };
  mapBoolStringWrapper: { [key: boolean]: string | undefined };
  mapBoolBoolWrapper: { [key: boolean]: boolean | undefined };
  mapBoolBytesWrapper: { [key: boolean]: Uint8Array | undefined };
  mapInt32Bool: { [key: number]: boolean };
  mapInt32String: { [key: number]: string };
  mapInt32Bytes: { [key: number]: Uint8Array };
  mapInt32Int32: { [key: number]: number };
  mapInt32Int64: { [key: number]: number };
  mapInt32Uint32: { [key: number]: number };
  mapInt32Uint64: { [key: number]: number };
  mapInt32Float: { [key: number]: number };
  mapInt32Double: { [key: number]: number };
  mapInt32Enum: { [key: number]: TestAllTypes_NestedEnum };
  mapInt32Message: { [key: number]: TestAllTypes_NestedMessage };
  mapInt32Duration: { [key: number]: Duration };
  mapInt32Timestamp: { [key: number]: Date };
  mapInt32NullValue: { [key: number]: NullValue };
  mapInt32Any: { [key: number]: Any };
  mapInt32Struct: { [key: number]: Struct };
  mapInt32Value: { [key: number]: Value };
  mapInt32ListValue: { [key: number]: ListValue };
  mapInt32Int64Wrapper: { [key: number]: number | undefined };
  mapInt32Int32Wrapper: { [key: number]: number | undefined };
  mapInt32DoubleWrapper: { [key: number]: number | undefined };
  mapInt32FloatWrapper: { [key: number]: number | undefined };
  mapInt32Uint64Wrapper: { [key: number]: number | undefined };
  mapInt32Uint32Wrapper: { [key: number]: number | undefined };
  mapInt32StringWrapper: { [key: number]: string | undefined };
  mapInt32BoolWrapper: { [key: number]: boolean | undefined };
  mapInt32BytesWrapper: { [key: number]: Uint8Array | undefined };
  mapInt64Bool: { [key: number]: boolean };
  mapInt64String: { [key: number]: string };
  mapInt64Bytes: { [key: number]: Uint8Array };
  mapInt64Int32: { [key: number]: number };
  mapInt64Int64: { [key: number]: number };
  mapInt64Uint32: { [key: number]: number };
  mapInt64Uint64: { [key: number]: number };
  mapInt64Float: { [key: number]: number };
  mapInt64Double: { [key: number]: number };
  mapInt64Enum: { [key: number]: TestAllTypes_NestedEnum };
  mapInt64Message: { [key: number]: TestAllTypes_NestedMessage };
  mapInt64Duration: { [key: number]: Duration };
  mapInt64Timestamp: { [key: number]: Date };
  mapInt64NullValue: { [key: number]: NullValue };
  mapInt64Any: { [key: number]: Any };
  mapInt64Struct: { [key: number]: Struct };
  mapInt64Value: { [key: number]: Value };
  mapInt64ListValue: { [key: number]: ListValue };
  mapInt64Int64Wrapper: { [key: number]: number | undefined };
  mapInt64Int32Wrapper: { [key: number]: number | undefined };
  mapInt64DoubleWrapper: { [key: number]: number | undefined };
  mapInt64FloatWrapper: { [key: number]: number | undefined };
  mapInt64Uint64Wrapper: { [key: number]: number | undefined };
  mapInt64Uint32Wrapper: { [key: number]: number | undefined };
  mapInt64StringWrapper: { [key: number]: string | undefined };
  mapInt64BoolWrapper: { [key: number]: boolean | undefined };
  mapInt64BytesWrapper: { [key: number]: Uint8Array | undefined };
  mapUint32Bool: { [key: number]: boolean };
  mapUint32String: { [key: number]: string };
  mapUint32Bytes: { [key: number]: Uint8Array };
  mapUint32Int32: { [key: number]: number };
  mapUint32Int64: { [key: number]: number };
  mapUint32Uint32: { [key: number]: number };
  mapUint32Uint64: { [key: number]: number };
  mapUint32Float: { [key: number]: number };
  mapUint32Double: { [key: number]: number };
  mapUint32Enum: { [key: number]: TestAllTypes_NestedEnum };
  mapUint32Message: { [key: number]: TestAllTypes_NestedMessage };
  mapUint32Duration: { [key: number]: Duration };
  mapUint32Timestamp: { [key: number]: Date };
  mapUint32NullValue: { [key: number]: NullValue };
  mapUint32Any: { [key: number]: Any };
  mapUint32Struct: { [key: number]: Struct };
  mapUint32Value: { [key: number]: Value };
  mapUint32ListValue: { [key: number]: ListValue };
  mapUint32Int64Wrapper: { [key: number]: number | undefined };
  mapUint32Int32Wrapper: { [key: number]: number | undefined };
  mapUint32DoubleWrapper: { [key: number]: number | undefined };
  mapUint32FloatWrapper: { [key: number]: number | undefined };
  mapUint32Uint64Wrapper: { [key: number]: number | undefined };
  mapUint32Uint32Wrapper: { [key: number]: number | undefined };
  mapUint32StringWrapper: { [key: number]: string | undefined };
  mapUint32BoolWrapper: { [key: number]: boolean | undefined };
  mapUint32BytesWrapper: { [key: number]: Uint8Array | undefined };
  mapUint64Bool: { [key: number]: boolean };
  mapUint64String: { [key: number]: string };
  mapUint64Bytes: { [key: number]: Uint8Array };
  mapUint64Int32: { [key: number]: number };
  mapUint64Int64: { [key: number]: number };
  mapUint64Uint32: { [key: number]: number };
  mapUint64Uint64: { [key: number]: number };
  mapUint64Float: { [key: number]: number };
  mapUint64Double: { [key: number]: number };
  mapUint64Enum: { [key: number]: TestAllTypes_NestedEnum };
  mapUint64Message: { [key: number]: TestAllTypes_NestedMessage };
  mapUint64Duration: { [key: number]: Duration };
  mapUint64Timestamp: { [key: number]: Date };
  mapUint64NullValue: { [key: number]: NullValue };
  mapUint64Any: { [key: number]: Any };
  mapUint64Struct: { [key: number]: Struct };
  mapUint64Value: { [key: number]: Value };
  mapUint64ListValue: { [key: number]: ListValue };
  mapUint64Int64Wrapper: { [key: number]: number | undefined };
  mapUint64Int32Wrapper: { [key: number]: number | undefined };
  mapUint64DoubleWrapper: { [key: number]: number | undefined };
  mapUint64FloatWrapper: { [key: number]: number | undefined };
  mapUint64Uint64Wrapper: { [key: number]: number | undefined };
  mapUint64Uint32Wrapper: { [key: number]: number | undefined };
  mapUint64StringWrapper: { [key: number]: string | undefined };
  mapUint64BoolWrapper: { [key: number]: boolean | undefined };
  mapUint64BytesWrapper: { [key: number]: Uint8Array | undefined };
  mapStringBool: { [key: string]: boolean };
  mapStringString: { [key: string]: string };
  mapStringBytes: { [key: string]: Uint8Array };
  mapStringInt32: { [key: string]: number };
  mapStringInt64: { [key: string]: number };
  mapStringUint32: { [key: string]: number };
  mapStringUint64: { [key: string]: number };
  mapStringFloat: { [key: string]: number };
  mapStringDouble: { [key: string]: number };
  mapStringEnum: { [key: string]: TestAllTypes_NestedEnum };
  mapStringMessage: { [key: string]: TestAllTypes_NestedMessage };
  mapStringDuration: { [key: string]: Duration };
  mapStringTimestamp: { [key: string]: Date };
  mapStringNullValue: { [key: string]: NullValue };
  mapStringAny: { [key: string]: Any };
  mapStringStruct: { [key: string]: Struct };
  mapStringValue: { [key: string]: Value };
  mapStringListValue: { [key: string]: ListValue };
  mapStringInt64Wrapper: { [key: string]: number | undefined };
  mapStringInt32Wrapper: { [key: string]: number | undefined };
  mapStringDoubleWrapper: { [key: string]: number | undefined };
  mapStringFloatWrapper: { [key: string]: number | undefined };
  mapStringUint64Wrapper: { [key: string]: number | undefined };
  mapStringUint32Wrapper: { [key: string]: number | undefined };
  mapStringStringWrapper: { [key: string]: string | undefined };
  mapStringBoolWrapper: { [key: string]: boolean | undefined };
  mapStringBytesWrapper: { [key: string]: Uint8Array | undefined };
  oneofType: NestedTestAllTypes | undefined;
  oneofMsg: TestAllTypes_NestedMessage | undefined;
  oneofBool: boolean | undefined;
}

export enum TestAllTypes_NestedEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
  UNRECOGNIZED = -1,
}

export function testAllTypes_NestedEnumFromJSON(
  object: any
): TestAllTypes_NestedEnum {
  switch (object) {
    case 0:
    case "FOO":
      return TestAllTypes_NestedEnum.FOO;
    case 1:
    case "BAR":
      return TestAllTypes_NestedEnum.BAR;
    case 2:
    case "BAZ":
      return TestAllTypes_NestedEnum.BAZ;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TestAllTypes_NestedEnum.UNRECOGNIZED;
  }
}

export function testAllTypes_NestedEnumToJSON(
  object: TestAllTypes_NestedEnum
): string {
  switch (object) {
    case TestAllTypes_NestedEnum.FOO:
      return "FOO";
    case TestAllTypes_NestedEnum.BAR:
      return "BAR";
    case TestAllTypes_NestedEnum.BAZ:
      return "BAZ";
    default:
      return "UNKNOWN";
  }
}

export interface TestAllTypes_NestedMessage {
  /**
   * The field name "b" fails to compile in proto1 because it conflicts with
   * a local variable named "b" in one of the generated methods.
   * This file needs to compile in proto1 to test backwards-compatibility.
   */
  bb: number;
}

export interface TestAllTypes_MapInt64NestedTypeEntry {
  key: number;
  value: NestedTestAllTypes | undefined;
}

export interface TestAllTypes_MapBoolBoolEntry {
  key: boolean;
  value: boolean;
}

export interface TestAllTypes_MapBoolStringEntry {
  key: boolean;
  value: string;
}

export interface TestAllTypes_MapBoolBytesEntry {
  key: boolean;
  value: Uint8Array;
}

export interface TestAllTypes_MapBoolInt32Entry {
  key: boolean;
  value: number;
}

export interface TestAllTypes_MapBoolInt64Entry {
  key: boolean;
  value: number;
}

export interface TestAllTypes_MapBoolUint32Entry {
  key: boolean;
  value: number;
}

export interface TestAllTypes_MapBoolUint64Entry {
  key: boolean;
  value: number;
}

export interface TestAllTypes_MapBoolFloatEntry {
  key: boolean;
  value: number;
}

export interface TestAllTypes_MapBoolDoubleEntry {
  key: boolean;
  value: number;
}

export interface TestAllTypes_MapBoolEnumEntry {
  key: boolean;
  value: TestAllTypes_NestedEnum;
}

export interface TestAllTypes_MapBoolMessageEntry {
  key: boolean;
  value: TestAllTypes_NestedMessage | undefined;
}

export interface TestAllTypes_MapBoolDurationEntry {
  key: boolean;
  value: Duration | undefined;
}

export interface TestAllTypes_MapBoolTimestampEntry {
  key: boolean;
  value: Date | undefined;
}

export interface TestAllTypes_MapBoolNullValueEntry {
  key: boolean;
  value: NullValue;
}

export interface TestAllTypes_MapBoolAnyEntry {
  key: boolean;
  value: Any | undefined;
}

export interface TestAllTypes_MapBoolStructEntry {
  key: boolean;
  value: Struct | undefined;
}

export interface TestAllTypes_MapBoolValueEntry {
  key: boolean;
  value: Value | undefined;
}

export interface TestAllTypes_MapBoolListValueEntry {
  key: boolean;
  value: ListValue | undefined;
}

export interface TestAllTypes_MapBoolInt64WrapperEntry {
  key: boolean;
  value: number | undefined;
}

export interface TestAllTypes_MapBoolInt32WrapperEntry {
  key: boolean;
  value: number | undefined;
}

export interface TestAllTypes_MapBoolDoubleWrapperEntry {
  key: boolean;
  value: number | undefined;
}

export interface TestAllTypes_MapBoolFloatWrapperEntry {
  key: boolean;
  value: number | undefined;
}

export interface TestAllTypes_MapBoolUint64WrapperEntry {
  key: boolean;
  value: number | undefined;
}

export interface TestAllTypes_MapBoolUint32WrapperEntry {
  key: boolean;
  value: number | undefined;
}

export interface TestAllTypes_MapBoolStringWrapperEntry {
  key: boolean;
  value: string | undefined;
}

export interface TestAllTypes_MapBoolBoolWrapperEntry {
  key: boolean;
  value: boolean | undefined;
}

export interface TestAllTypes_MapBoolBytesWrapperEntry {
  key: boolean;
  value: Uint8Array | undefined;
}

export interface TestAllTypes_MapInt32BoolEntry {
  key: number;
  value: boolean;
}

export interface TestAllTypes_MapInt32StringEntry {
  key: number;
  value: string;
}

export interface TestAllTypes_MapInt32BytesEntry {
  key: number;
  value: Uint8Array;
}

export interface TestAllTypes_MapInt32Int32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt32Int64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt32Uint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt32Uint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt32FloatEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt32DoubleEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt32EnumEntry {
  key: number;
  value: TestAllTypes_NestedEnum;
}

export interface TestAllTypes_MapInt32MessageEntry {
  key: number;
  value: TestAllTypes_NestedMessage | undefined;
}

export interface TestAllTypes_MapInt32DurationEntry {
  key: number;
  value: Duration | undefined;
}

export interface TestAllTypes_MapInt32TimestampEntry {
  key: number;
  value: Date | undefined;
}

export interface TestAllTypes_MapInt32NullValueEntry {
  key: number;
  value: NullValue;
}

export interface TestAllTypes_MapInt32AnyEntry {
  key: number;
  value: Any | undefined;
}

export interface TestAllTypes_MapInt32StructEntry {
  key: number;
  value: Struct | undefined;
}

export interface TestAllTypes_MapInt32ValueEntry {
  key: number;
  value: Value | undefined;
}

export interface TestAllTypes_MapInt32ListValueEntry {
  key: number;
  value: ListValue | undefined;
}

export interface TestAllTypes_MapInt32Int64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt32Int32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt32DoubleWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt32FloatWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt32Uint64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt32Uint32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt32StringWrapperEntry {
  key: number;
  value: string | undefined;
}

export interface TestAllTypes_MapInt32BoolWrapperEntry {
  key: number;
  value: boolean | undefined;
}

export interface TestAllTypes_MapInt32BytesWrapperEntry {
  key: number;
  value: Uint8Array | undefined;
}

export interface TestAllTypes_MapInt64BoolEntry {
  key: number;
  value: boolean;
}

export interface TestAllTypes_MapInt64StringEntry {
  key: number;
  value: string;
}

export interface TestAllTypes_MapInt64BytesEntry {
  key: number;
  value: Uint8Array;
}

export interface TestAllTypes_MapInt64Int32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt64Int64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt64Uint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt64Uint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt64FloatEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt64DoubleEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapInt64EnumEntry {
  key: number;
  value: TestAllTypes_NestedEnum;
}

export interface TestAllTypes_MapInt64MessageEntry {
  key: number;
  value: TestAllTypes_NestedMessage | undefined;
}

export interface TestAllTypes_MapInt64DurationEntry {
  key: number;
  value: Duration | undefined;
}

export interface TestAllTypes_MapInt64TimestampEntry {
  key: number;
  value: Date | undefined;
}

export interface TestAllTypes_MapInt64NullValueEntry {
  key: number;
  value: NullValue;
}

export interface TestAllTypes_MapInt64AnyEntry {
  key: number;
  value: Any | undefined;
}

export interface TestAllTypes_MapInt64StructEntry {
  key: number;
  value: Struct | undefined;
}

export interface TestAllTypes_MapInt64ValueEntry {
  key: number;
  value: Value | undefined;
}

export interface TestAllTypes_MapInt64ListValueEntry {
  key: number;
  value: ListValue | undefined;
}

export interface TestAllTypes_MapInt64Int64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt64Int32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt64DoubleWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt64FloatWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt64Uint64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt64Uint32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapInt64StringWrapperEntry {
  key: number;
  value: string | undefined;
}

export interface TestAllTypes_MapInt64BoolWrapperEntry {
  key: number;
  value: boolean | undefined;
}

export interface TestAllTypes_MapInt64BytesWrapperEntry {
  key: number;
  value: Uint8Array | undefined;
}

export interface TestAllTypes_MapUint32BoolEntry {
  key: number;
  value: boolean;
}

export interface TestAllTypes_MapUint32StringEntry {
  key: number;
  value: string;
}

export interface TestAllTypes_MapUint32BytesEntry {
  key: number;
  value: Uint8Array;
}

export interface TestAllTypes_MapUint32Int32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint32Int64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint32Uint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint32Uint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint32FloatEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint32DoubleEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint32EnumEntry {
  key: number;
  value: TestAllTypes_NestedEnum;
}

export interface TestAllTypes_MapUint32MessageEntry {
  key: number;
  value: TestAllTypes_NestedMessage | undefined;
}

export interface TestAllTypes_MapUint32DurationEntry {
  key: number;
  value: Duration | undefined;
}

export interface TestAllTypes_MapUint32TimestampEntry {
  key: number;
  value: Date | undefined;
}

export interface TestAllTypes_MapUint32NullValueEntry {
  key: number;
  value: NullValue;
}

export interface TestAllTypes_MapUint32AnyEntry {
  key: number;
  value: Any | undefined;
}

export interface TestAllTypes_MapUint32StructEntry {
  key: number;
  value: Struct | undefined;
}

export interface TestAllTypes_MapUint32ValueEntry {
  key: number;
  value: Value | undefined;
}

export interface TestAllTypes_MapUint32ListValueEntry {
  key: number;
  value: ListValue | undefined;
}

export interface TestAllTypes_MapUint32Int64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint32Int32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint32DoubleWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint32FloatWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint32Uint64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint32Uint32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint32StringWrapperEntry {
  key: number;
  value: string | undefined;
}

export interface TestAllTypes_MapUint32BoolWrapperEntry {
  key: number;
  value: boolean | undefined;
}

export interface TestAllTypes_MapUint32BytesWrapperEntry {
  key: number;
  value: Uint8Array | undefined;
}

export interface TestAllTypes_MapUint64BoolEntry {
  key: number;
  value: boolean;
}

export interface TestAllTypes_MapUint64StringEntry {
  key: number;
  value: string;
}

export interface TestAllTypes_MapUint64BytesEntry {
  key: number;
  value: Uint8Array;
}

export interface TestAllTypes_MapUint64Int32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint64Int64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint64Uint32Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint64Uint64Entry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint64FloatEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint64DoubleEntry {
  key: number;
  value: number;
}

export interface TestAllTypes_MapUint64EnumEntry {
  key: number;
  value: TestAllTypes_NestedEnum;
}

export interface TestAllTypes_MapUint64MessageEntry {
  key: number;
  value: TestAllTypes_NestedMessage | undefined;
}

export interface TestAllTypes_MapUint64DurationEntry {
  key: number;
  value: Duration | undefined;
}

export interface TestAllTypes_MapUint64TimestampEntry {
  key: number;
  value: Date | undefined;
}

export interface TestAllTypes_MapUint64NullValueEntry {
  key: number;
  value: NullValue;
}

export interface TestAllTypes_MapUint64AnyEntry {
  key: number;
  value: Any | undefined;
}

export interface TestAllTypes_MapUint64StructEntry {
  key: number;
  value: Struct | undefined;
}

export interface TestAllTypes_MapUint64ValueEntry {
  key: number;
  value: Value | undefined;
}

export interface TestAllTypes_MapUint64ListValueEntry {
  key: number;
  value: ListValue | undefined;
}

export interface TestAllTypes_MapUint64Int64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint64Int32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint64DoubleWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint64FloatWrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint64Uint64WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint64Uint32WrapperEntry {
  key: number;
  value: number | undefined;
}

export interface TestAllTypes_MapUint64StringWrapperEntry {
  key: number;
  value: string | undefined;
}

export interface TestAllTypes_MapUint64BoolWrapperEntry {
  key: number;
  value: boolean | undefined;
}

export interface TestAllTypes_MapUint64BytesWrapperEntry {
  key: number;
  value: Uint8Array | undefined;
}

export interface TestAllTypes_MapStringBoolEntry {
  key: string;
  value: boolean;
}

export interface TestAllTypes_MapStringStringEntry {
  key: string;
  value: string;
}

export interface TestAllTypes_MapStringBytesEntry {
  key: string;
  value: Uint8Array;
}

export interface TestAllTypes_MapStringInt32Entry {
  key: string;
  value: number;
}

export interface TestAllTypes_MapStringInt64Entry {
  key: string;
  value: number;
}

export interface TestAllTypes_MapStringUint32Entry {
  key: string;
  value: number;
}

export interface TestAllTypes_MapStringUint64Entry {
  key: string;
  value: number;
}

export interface TestAllTypes_MapStringFloatEntry {
  key: string;
  value: number;
}

export interface TestAllTypes_MapStringDoubleEntry {
  key: string;
  value: number;
}

export interface TestAllTypes_MapStringEnumEntry {
  key: string;
  value: TestAllTypes_NestedEnum;
}

export interface TestAllTypes_MapStringMessageEntry {
  key: string;
  value: TestAllTypes_NestedMessage | undefined;
}

export interface TestAllTypes_MapStringDurationEntry {
  key: string;
  value: Duration | undefined;
}

export interface TestAllTypes_MapStringTimestampEntry {
  key: string;
  value: Date | undefined;
}

export interface TestAllTypes_MapStringNullValueEntry {
  key: string;
  value: NullValue;
}

export interface TestAllTypes_MapStringAnyEntry {
  key: string;
  value: Any | undefined;
}

export interface TestAllTypes_MapStringStructEntry {
  key: string;
  value: Struct | undefined;
}

export interface TestAllTypes_MapStringValueEntry {
  key: string;
  value: Value | undefined;
}

export interface TestAllTypes_MapStringListValueEntry {
  key: string;
  value: ListValue | undefined;
}

export interface TestAllTypes_MapStringInt64WrapperEntry {
  key: string;
  value: number | undefined;
}

export interface TestAllTypes_MapStringInt32WrapperEntry {
  key: string;
  value: number | undefined;
}

export interface TestAllTypes_MapStringDoubleWrapperEntry {
  key: string;
  value: number | undefined;
}

export interface TestAllTypes_MapStringFloatWrapperEntry {
  key: string;
  value: number | undefined;
}

export interface TestAllTypes_MapStringUint64WrapperEntry {
  key: string;
  value: number | undefined;
}

export interface TestAllTypes_MapStringUint32WrapperEntry {
  key: string;
  value: number | undefined;
}

export interface TestAllTypes_MapStringStringWrapperEntry {
  key: string;
  value: string | undefined;
}

export interface TestAllTypes_MapStringBoolWrapperEntry {
  key: string;
  value: boolean | undefined;
}

export interface TestAllTypes_MapStringBytesWrapperEntry {
  key: string;
  value: Uint8Array | undefined;
}

/** This proto includes a recursively nested message. */
export interface NestedTestAllTypes {
  child: NestedTestAllTypes | undefined;
  payload: TestAllTypes | undefined;
}

const baseTestAllTypes: object = {
  singleInt32: 0,
  singleInt64: 0,
  singleUint32: 0,
  singleUint64: 0,
  singleSint32: 0,
  singleSint64: 0,
  singleFixed32: 0,
  singleFixed64: 0,
  singleSfixed32: 0,
  singleSfixed64: 0,
  singleFloat: 0,
  singleDouble: 0,
  singleBool: false,
  singleString: "",
  in: false,
  nullValue: 0,
  standaloneEnum: 0,
  repeatedInt32: 0,
  repeatedInt64: 0,
  repeatedUint32: 0,
  repeatedUint64: 0,
  repeatedSint32: 0,
  repeatedSint64: 0,
  repeatedFixed32: 0,
  repeatedFixed64: 0,
  repeatedSfixed32: 0,
  repeatedSfixed64: 0,
  repeatedFloat: 0,
  repeatedDouble: 0,
  repeatedBool: false,
  repeatedString: "",
  repeatedNestedEnum: 0,
  repeatedStringPiece: "",
  repeatedCord: "",
  repeatedNullValue: 0,
};

export const TestAllTypes = {
  encode(
    message: TestAllTypes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.singleInt32 !== 0) {
      writer.uint32(8).int32(message.singleInt32);
    }
    if (message.singleInt64 !== 0) {
      writer.uint32(16).int64(message.singleInt64);
    }
    if (message.singleUint32 !== 0) {
      writer.uint32(24).uint32(message.singleUint32);
    }
    if (message.singleUint64 !== 0) {
      writer.uint32(32).uint64(message.singleUint64);
    }
    if (message.singleSint32 !== 0) {
      writer.uint32(40).sint32(message.singleSint32);
    }
    if (message.singleSint64 !== 0) {
      writer.uint32(48).sint64(message.singleSint64);
    }
    if (message.singleFixed32 !== 0) {
      writer.uint32(61).fixed32(message.singleFixed32);
    }
    if (message.singleFixed64 !== 0) {
      writer.uint32(65).fixed64(message.singleFixed64);
    }
    if (message.singleSfixed32 !== 0) {
      writer.uint32(77).sfixed32(message.singleSfixed32);
    }
    if (message.singleSfixed64 !== 0) {
      writer.uint32(81).sfixed64(message.singleSfixed64);
    }
    if (message.singleFloat !== 0) {
      writer.uint32(93).float(message.singleFloat);
    }
    if (message.singleDouble !== 0) {
      writer.uint32(97).double(message.singleDouble);
    }
    if (message.singleBool === true) {
      writer.uint32(104).bool(message.singleBool);
    }
    if (message.singleString !== "") {
      writer.uint32(114).string(message.singleString);
    }
    if (message.singleBytes.length !== 0) {
      writer.uint32(122).bytes(message.singleBytes);
    }
    if (message.optionalBool !== undefined) {
      writer.uint32(128).bool(message.optionalBool);
    }
    if (message.optionalString !== undefined) {
      writer.uint32(136).bool(message.optionalString);
    }
    if (message.in === true) {
      writer.uint32(144).bool(message.in);
    }
    if (message.singleAny !== undefined) {
      Any.encode(message.singleAny, writer.uint32(802).fork()).ldelim();
    }
    if (message.singleDuration !== undefined) {
      Duration.encode(
        message.singleDuration,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.singleTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.singleTimestamp),
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.singleStruct !== undefined) {
      Struct.encode(message.singleStruct, writer.uint32(826).fork()).ldelim();
    }
    if (message.singleValue !== undefined) {
      Value.encode(message.singleValue, writer.uint32(834).fork()).ldelim();
    }
    if (message.singleInt64Wrapper !== undefined) {
      Int64Value.encode(
        { value: message.singleInt64Wrapper! },
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.singleInt32Wrapper !== undefined) {
      Int32Value.encode(
        { value: message.singleInt32Wrapper! },
        writer.uint32(850).fork()
      ).ldelim();
    }
    if (message.singleDoubleWrapper !== undefined) {
      DoubleValue.encode(
        { value: message.singleDoubleWrapper! },
        writer.uint32(858).fork()
      ).ldelim();
    }
    if (message.singleFloatWrapper !== undefined) {
      FloatValue.encode(
        { value: message.singleFloatWrapper! },
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.singleUint64Wrapper !== undefined) {
      UInt64Value.encode(
        { value: message.singleUint64Wrapper! },
        writer.uint32(874).fork()
      ).ldelim();
    }
    if (message.singleUint32Wrapper !== undefined) {
      UInt32Value.encode(
        { value: message.singleUint32Wrapper! },
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.singleStringWrapper !== undefined) {
      StringValue.encode(
        { value: message.singleStringWrapper! },
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.singleBoolWrapper !== undefined) {
      BoolValue.encode(
        { value: message.singleBoolWrapper! },
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.singleBytesWrapper !== undefined) {
      BytesValue.encode(
        { value: message.singleBytesWrapper! },
        writer.uint32(906).fork()
      ).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(914).fork()).ldelim();
    }
    if (message.nullValue !== 0) {
      writer.uint32(920).int32(message.nullValue);
    }
    if (message.optionalNullValue !== undefined) {
      writer.uint32(928).int32(message.optionalNullValue);
    }
    if (message.fieldMask !== undefined) {
      FieldMask.encode(message.fieldMask, writer.uint32(938).fork()).ldelim();
    }
    if (message.empty !== undefined) {
      Empty.encode(message.empty, writer.uint32(946).fork()).ldelim();
    }
    if (message.singleNestedMessage !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.singleNestedMessage,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.singleNestedEnum !== undefined) {
      writer.uint32(176).int32(message.singleNestedEnum);
    }
    if (message.standaloneMessage !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.standaloneMessage,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.standaloneEnum !== 0) {
      writer.uint32(192).int32(message.standaloneEnum);
    }
    writer.uint32(250).fork();
    for (const v of message.repeatedInt32) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(258).fork();
    for (const v of message.repeatedInt64) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(266).fork();
    for (const v of message.repeatedUint32) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(274).fork();
    for (const v of message.repeatedUint64) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(282).fork();
    for (const v of message.repeatedSint32) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(290).fork();
    for (const v of message.repeatedSint64) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(298).fork();
    for (const v of message.repeatedFixed32) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(306).fork();
    for (const v of message.repeatedFixed64) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(314).fork();
    for (const v of message.repeatedSfixed32) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(322).fork();
    for (const v of message.repeatedSfixed64) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(330).fork();
    for (const v of message.repeatedFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(338).fork();
    for (const v of message.repeatedDouble) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(346).fork();
    for (const v of message.repeatedBool) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.repeatedString) {
      writer.uint32(354).string(v!);
    }
    for (const v of message.repeatedBytes) {
      writer.uint32(362).bytes(v!);
    }
    for (const v of message.repeatedNestedMessage) {
      TestAllTypes_NestedMessage.encode(v!, writer.uint32(410).fork()).ldelim();
    }
    writer.uint32(418).fork();
    for (const v of message.repeatedNestedEnum) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.repeatedStringPiece) {
      writer.uint32(426).string(v!);
    }
    for (const v of message.repeatedCord) {
      writer.uint32(434).string(v!);
    }
    for (const v of message.repeatedLazyMessage) {
      TestAllTypes_NestedMessage.encode(v!, writer.uint32(442).fork()).ldelim();
    }
    for (const v of message.repeatedAny) {
      Any.encode(v!, writer.uint32(962).fork()).ldelim();
    }
    for (const v of message.repeatedDuration) {
      Duration.encode(v!, writer.uint32(970).fork()).ldelim();
    }
    for (const v of message.repeatedTimestamp) {
      Timestamp.encode(toTimestamp(v!), writer.uint32(978).fork()).ldelim();
    }
    for (const v of message.repeatedStruct) {
      Struct.encode(v!, writer.uint32(986).fork()).ldelim();
    }
    for (const v of message.repeatedValue) {
      Value.encode(v!, writer.uint32(994).fork()).ldelim();
    }
    for (const v of message.repeatedInt64Wrapper) {
      Int64Value.encode({ value: v!! }, writer.uint32(1002).fork()).ldelim();
    }
    for (const v of message.repeatedInt32Wrapper) {
      Int32Value.encode({ value: v!! }, writer.uint32(1010).fork()).ldelim();
    }
    for (const v of message.repeatedDoubleWrapper) {
      DoubleValue.encode({ value: v!! }, writer.uint32(1018).fork()).ldelim();
    }
    for (const v of message.repeatedFloatWrapper) {
      FloatValue.encode({ value: v!! }, writer.uint32(1026).fork()).ldelim();
    }
    for (const v of message.repeatedUint64Wrapper) {
      UInt64Value.encode({ value: v!! }, writer.uint32(1034).fork()).ldelim();
    }
    for (const v of message.repeatedUint32Wrapper) {
      UInt32Value.encode({ value: v!! }, writer.uint32(1042).fork()).ldelim();
    }
    for (const v of message.repeatedStringWrapper) {
      StringValue.encode({ value: v!! }, writer.uint32(1050).fork()).ldelim();
    }
    for (const v of message.repeatedBoolWrapper) {
      BoolValue.encode({ value: v!! }, writer.uint32(1058).fork()).ldelim();
    }
    for (const v of message.repeatedBytesWrapper) {
      BytesValue.encode({ value: v!! }, writer.uint32(1066).fork()).ldelim();
    }
    for (const v of message.repeatedListValue) {
      ListValue.encode(v!, writer.uint32(1074).fork()).ldelim();
    }
    writer.uint32(1082).fork();
    for (const v of message.repeatedNullValue) {
      writer.int32(v);
    }
    writer.ldelim();
    Object.entries(message.mapInt64NestedType).forEach(([key, value]) => {
      TestAllTypes_MapInt64NestedTypeEntry.encode(
        { key: key as any, value },
        writer.uint32(498).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolBool).forEach(([key, value]) => {
      TestAllTypes_MapBoolBoolEntry.encode(
        { key: key as any, value },
        writer.uint32(506).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolString).forEach(([key, value]) => {
      TestAllTypes_MapBoolStringEntry.encode(
        { key: key as any, value },
        writer.uint32(514).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolBytes).forEach(([key, value]) => {
      TestAllTypes_MapBoolBytesEntry.encode(
        { key: key as any, value },
        writer.uint32(522).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolInt32).forEach(([key, value]) => {
      TestAllTypes_MapBoolInt32Entry.encode(
        { key: key as any, value },
        writer.uint32(530).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolInt64).forEach(([key, value]) => {
      TestAllTypes_MapBoolInt64Entry.encode(
        { key: key as any, value },
        writer.uint32(538).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolUint32).forEach(([key, value]) => {
      TestAllTypes_MapBoolUint32Entry.encode(
        { key: key as any, value },
        writer.uint32(546).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolUint64).forEach(([key, value]) => {
      TestAllTypes_MapBoolUint64Entry.encode(
        { key: key as any, value },
        writer.uint32(554).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolFloat).forEach(([key, value]) => {
      TestAllTypes_MapBoolFloatEntry.encode(
        { key: key as any, value },
        writer.uint32(562).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolDouble).forEach(([key, value]) => {
      TestAllTypes_MapBoolDoubleEntry.encode(
        { key: key as any, value },
        writer.uint32(570).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolEnum).forEach(([key, value]) => {
      TestAllTypes_MapBoolEnumEntry.encode(
        { key: key as any, value },
        writer.uint32(578).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolMessage).forEach(([key, value]) => {
      TestAllTypes_MapBoolMessageEntry.encode(
        { key: key as any, value },
        writer.uint32(586).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolDuration).forEach(([key, value]) => {
      TestAllTypes_MapBoolDurationEntry.encode(
        { key: key as any, value },
        writer.uint32(1826).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolTimestamp).forEach(([key, value]) => {
      TestAllTypes_MapBoolTimestampEntry.encode(
        { key: key as any, value },
        writer.uint32(1834).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolNullValue).forEach(([key, value]) => {
      TestAllTypes_MapBoolNullValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1842).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolAny).forEach(([key, value]) => {
      TestAllTypes_MapBoolAnyEntry.encode(
        { key: key as any, value },
        writer.uint32(1970).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolStruct).forEach(([key, value]) => {
      TestAllTypes_MapBoolStructEntry.encode(
        { key: key as any, value },
        writer.uint32(1978).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolValue).forEach(([key, value]) => {
      TestAllTypes_MapBoolValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1986).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolListValue).forEach(([key, value]) => {
      TestAllTypes_MapBoolListValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1994).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolInt64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolInt64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2002).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolInt32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolInt32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2010).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolDoubleWrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolDoubleWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2018).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolFloatWrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolFloatWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2026).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolUint64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolUint64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2034).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolUint32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolUint32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolStringWrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolStringWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2050).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolBoolWrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolBoolWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2058).fork()
      ).ldelim();
    });
    Object.entries(message.mapBoolBytesWrapper).forEach(([key, value]) => {
      TestAllTypes_MapBoolBytesWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2066).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Bool).forEach(([key, value]) => {
      TestAllTypes_MapInt32BoolEntry.encode(
        { key: key as any, value },
        writer.uint32(594).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32String).forEach(([key, value]) => {
      TestAllTypes_MapInt32StringEntry.encode(
        { key: key as any, value },
        writer.uint32(602).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Bytes).forEach(([key, value]) => {
      TestAllTypes_MapInt32BytesEntry.encode(
        { key: key as any, value },
        writer.uint32(610).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Int32).forEach(([key, value]) => {
      TestAllTypes_MapInt32Int32Entry.encode(
        { key: key as any, value },
        writer.uint32(618).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Int64).forEach(([key, value]) => {
      TestAllTypes_MapInt32Int64Entry.encode(
        { key: key as any, value },
        writer.uint32(626).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Uint32).forEach(([key, value]) => {
      TestAllTypes_MapInt32Uint32Entry.encode(
        { key: key as any, value },
        writer.uint32(634).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Uint64).forEach(([key, value]) => {
      TestAllTypes_MapInt32Uint64Entry.encode(
        { key: key as any, value },
        writer.uint32(642).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Float).forEach(([key, value]) => {
      TestAllTypes_MapInt32FloatEntry.encode(
        { key: key as any, value },
        writer.uint32(650).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Double).forEach(([key, value]) => {
      TestAllTypes_MapInt32DoubleEntry.encode(
        { key: key as any, value },
        writer.uint32(658).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Enum).forEach(([key, value]) => {
      TestAllTypes_MapInt32EnumEntry.encode(
        { key: key as any, value },
        writer.uint32(666).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Message).forEach(([key, value]) => {
      TestAllTypes_MapInt32MessageEntry.encode(
        { key: key as any, value },
        writer.uint32(674).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Duration).forEach(([key, value]) => {
      TestAllTypes_MapInt32DurationEntry.encode(
        { key: key as any, value },
        writer.uint32(1850).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Timestamp).forEach(([key, value]) => {
      TestAllTypes_MapInt32TimestampEntry.encode(
        { key: key as any, value },
        writer.uint32(1858).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32NullValue).forEach(([key, value]) => {
      TestAllTypes_MapInt32NullValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1866).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Any).forEach(([key, value]) => {
      TestAllTypes_MapInt32AnyEntry.encode(
        { key: key as any, value },
        writer.uint32(2074).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Struct).forEach(([key, value]) => {
      TestAllTypes_MapInt32StructEntry.encode(
        { key: key as any, value },
        writer.uint32(2082).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Value).forEach(([key, value]) => {
      TestAllTypes_MapInt32ValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2090).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32ListValue).forEach(([key, value]) => {
      TestAllTypes_MapInt32ListValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2098).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Int64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32Int64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2106).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Int32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32Int32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2114).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32DoubleWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32DoubleWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2122).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32FloatWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32FloatWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2130).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Uint64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32Uint64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2138).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32Uint32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32Uint32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2146).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32StringWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32StringWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2154).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32BoolWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32BoolWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2162).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt32BytesWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt32BytesWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2170).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Bool).forEach(([key, value]) => {
      TestAllTypes_MapInt64BoolEntry.encode(
        { key: key as any, value },
        writer.uint32(682).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64String).forEach(([key, value]) => {
      TestAllTypes_MapInt64StringEntry.encode(
        { key: key as any, value },
        writer.uint32(690).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Bytes).forEach(([key, value]) => {
      TestAllTypes_MapInt64BytesEntry.encode(
        { key: key as any, value },
        writer.uint32(698).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Int32).forEach(([key, value]) => {
      TestAllTypes_MapInt64Int32Entry.encode(
        { key: key as any, value },
        writer.uint32(706).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Int64).forEach(([key, value]) => {
      TestAllTypes_MapInt64Int64Entry.encode(
        { key: key as any, value },
        writer.uint32(714).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Uint32).forEach(([key, value]) => {
      TestAllTypes_MapInt64Uint32Entry.encode(
        { key: key as any, value },
        writer.uint32(722).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Uint64).forEach(([key, value]) => {
      TestAllTypes_MapInt64Uint64Entry.encode(
        { key: key as any, value },
        writer.uint32(730).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Float).forEach(([key, value]) => {
      TestAllTypes_MapInt64FloatEntry.encode(
        { key: key as any, value },
        writer.uint32(738).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Double).forEach(([key, value]) => {
      TestAllTypes_MapInt64DoubleEntry.encode(
        { key: key as any, value },
        writer.uint32(746).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Enum).forEach(([key, value]) => {
      TestAllTypes_MapInt64EnumEntry.encode(
        { key: key as any, value },
        writer.uint32(754).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Message).forEach(([key, value]) => {
      TestAllTypes_MapInt64MessageEntry.encode(
        { key: key as any, value },
        writer.uint32(762).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Duration).forEach(([key, value]) => {
      TestAllTypes_MapInt64DurationEntry.encode(
        { key: key as any, value },
        writer.uint32(1874).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Timestamp).forEach(([key, value]) => {
      TestAllTypes_MapInt64TimestampEntry.encode(
        { key: key as any, value },
        writer.uint32(1882).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64NullValue).forEach(([key, value]) => {
      TestAllTypes_MapInt64NullValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1890).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Any).forEach(([key, value]) => {
      TestAllTypes_MapInt64AnyEntry.encode(
        { key: key as any, value },
        writer.uint32(2178).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Struct).forEach(([key, value]) => {
      TestAllTypes_MapInt64StructEntry.encode(
        { key: key as any, value },
        writer.uint32(2186).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Value).forEach(([key, value]) => {
      TestAllTypes_MapInt64ValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2194).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64ListValue).forEach(([key, value]) => {
      TestAllTypes_MapInt64ListValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2202).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Int64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64Int64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2210).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Int32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64Int32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2218).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64DoubleWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64DoubleWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2226).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64FloatWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64FloatWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2234).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Uint64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64Uint64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2242).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64Uint32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64Uint32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2250).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64StringWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64StringWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2258).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64BoolWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64BoolWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2266).fork()
      ).ldelim();
    });
    Object.entries(message.mapInt64BytesWrapper).forEach(([key, value]) => {
      TestAllTypes_MapInt64BytesWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2274).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Bool).forEach(([key, value]) => {
      TestAllTypes_MapUint32BoolEntry.encode(
        { key: key as any, value },
        writer.uint32(770).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32String).forEach(([key, value]) => {
      TestAllTypes_MapUint32StringEntry.encode(
        { key: key as any, value },
        writer.uint32(778).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Bytes).forEach(([key, value]) => {
      TestAllTypes_MapUint32BytesEntry.encode(
        { key: key as any, value },
        writer.uint32(786).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Int32).forEach(([key, value]) => {
      TestAllTypes_MapUint32Int32Entry.encode(
        { key: key as any, value },
        writer.uint32(794).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Int64).forEach(([key, value]) => {
      TestAllTypes_MapUint32Int64Entry.encode(
        { key: key as any, value },
        writer.uint32(1602).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Uint32).forEach(([key, value]) => {
      TestAllTypes_MapUint32Uint32Entry.encode(
        { key: key as any, value },
        writer.uint32(1610).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Uint64).forEach(([key, value]) => {
      TestAllTypes_MapUint32Uint64Entry.encode(
        { key: key as any, value },
        writer.uint32(1618).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Float).forEach(([key, value]) => {
      TestAllTypes_MapUint32FloatEntry.encode(
        { key: key as any, value },
        writer.uint32(1626).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Double).forEach(([key, value]) => {
      TestAllTypes_MapUint32DoubleEntry.encode(
        { key: key as any, value },
        writer.uint32(1634).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Enum).forEach(([key, value]) => {
      TestAllTypes_MapUint32EnumEntry.encode(
        { key: key as any, value },
        writer.uint32(1642).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Message).forEach(([key, value]) => {
      TestAllTypes_MapUint32MessageEntry.encode(
        { key: key as any, value },
        writer.uint32(1650).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Duration).forEach(([key, value]) => {
      TestAllTypes_MapUint32DurationEntry.encode(
        { key: key as any, value },
        writer.uint32(1898).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Timestamp).forEach(([key, value]) => {
      TestAllTypes_MapUint32TimestampEntry.encode(
        { key: key as any, value },
        writer.uint32(1906).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32NullValue).forEach(([key, value]) => {
      TestAllTypes_MapUint32NullValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1914).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Any).forEach(([key, value]) => {
      TestAllTypes_MapUint32AnyEntry.encode(
        { key: key as any, value },
        writer.uint32(2282).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Struct).forEach(([key, value]) => {
      TestAllTypes_MapUint32StructEntry.encode(
        { key: key as any, value },
        writer.uint32(2290).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Value).forEach(([key, value]) => {
      TestAllTypes_MapUint32ValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2298).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32ListValue).forEach(([key, value]) => {
      TestAllTypes_MapUint32ListValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2306).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Int64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32Int64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2314).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Int32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32Int32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2322).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32DoubleWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32DoubleWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2330).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32FloatWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32FloatWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2338).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Uint64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32Uint64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2346).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32Uint32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32Uint32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2354).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32StringWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32StringWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2362).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32BoolWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32BoolWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2370).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint32BytesWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint32BytesWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2378).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Bool).forEach(([key, value]) => {
      TestAllTypes_MapUint64BoolEntry.encode(
        { key: key as any, value },
        writer.uint32(1658).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64String).forEach(([key, value]) => {
      TestAllTypes_MapUint64StringEntry.encode(
        { key: key as any, value },
        writer.uint32(1666).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Bytes).forEach(([key, value]) => {
      TestAllTypes_MapUint64BytesEntry.encode(
        { key: key as any, value },
        writer.uint32(1674).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Int32).forEach(([key, value]) => {
      TestAllTypes_MapUint64Int32Entry.encode(
        { key: key as any, value },
        writer.uint32(1682).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Int64).forEach(([key, value]) => {
      TestAllTypes_MapUint64Int64Entry.encode(
        { key: key as any, value },
        writer.uint32(1690).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Uint32).forEach(([key, value]) => {
      TestAllTypes_MapUint64Uint32Entry.encode(
        { key: key as any, value },
        writer.uint32(1698).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Uint64).forEach(([key, value]) => {
      TestAllTypes_MapUint64Uint64Entry.encode(
        { key: key as any, value },
        writer.uint32(1706).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Float).forEach(([key, value]) => {
      TestAllTypes_MapUint64FloatEntry.encode(
        { key: key as any, value },
        writer.uint32(1714).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Double).forEach(([key, value]) => {
      TestAllTypes_MapUint64DoubleEntry.encode(
        { key: key as any, value },
        writer.uint32(1722).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Enum).forEach(([key, value]) => {
      TestAllTypes_MapUint64EnumEntry.encode(
        { key: key as any, value },
        writer.uint32(1730).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Message).forEach(([key, value]) => {
      TestAllTypes_MapUint64MessageEntry.encode(
        { key: key as any, value },
        writer.uint32(1738).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Duration).forEach(([key, value]) => {
      TestAllTypes_MapUint64DurationEntry.encode(
        { key: key as any, value },
        writer.uint32(1922).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Timestamp).forEach(([key, value]) => {
      TestAllTypes_MapUint64TimestampEntry.encode(
        { key: key as any, value },
        writer.uint32(1930).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64NullValue).forEach(([key, value]) => {
      TestAllTypes_MapUint64NullValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1938).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Any).forEach(([key, value]) => {
      TestAllTypes_MapUint64AnyEntry.encode(
        { key: key as any, value },
        writer.uint32(2386).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Struct).forEach(([key, value]) => {
      TestAllTypes_MapUint64StructEntry.encode(
        { key: key as any, value },
        writer.uint32(2394).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Value).forEach(([key, value]) => {
      TestAllTypes_MapUint64ValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2402).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64ListValue).forEach(([key, value]) => {
      TestAllTypes_MapUint64ListValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2410).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Int64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64Int64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2418).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Int32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64Int32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2426).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64DoubleWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64DoubleWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2434).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64FloatWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64FloatWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2442).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Uint64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64Uint64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2450).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64Uint32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64Uint32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2458).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64StringWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64StringWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2466).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64BoolWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64BoolWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2474).fork()
      ).ldelim();
    });
    Object.entries(message.mapUint64BytesWrapper).forEach(([key, value]) => {
      TestAllTypes_MapUint64BytesWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2482).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringBool).forEach(([key, value]) => {
      TestAllTypes_MapStringBoolEntry.encode(
        { key: key as any, value },
        writer.uint32(1746).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringString).forEach(([key, value]) => {
      TestAllTypes_MapStringStringEntry.encode(
        { key: key as any, value },
        writer.uint32(490).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringBytes).forEach(([key, value]) => {
      TestAllTypes_MapStringBytesEntry.encode(
        { key: key as any, value },
        writer.uint32(1754).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringInt32).forEach(([key, value]) => {
      TestAllTypes_MapStringInt32Entry.encode(
        { key: key as any, value },
        writer.uint32(1762).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringInt64).forEach(([key, value]) => {
      TestAllTypes_MapStringInt64Entry.encode(
        { key: key as any, value },
        writer.uint32(1770).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringUint32).forEach(([key, value]) => {
      TestAllTypes_MapStringUint32Entry.encode(
        { key: key as any, value },
        writer.uint32(1778).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringUint64).forEach(([key, value]) => {
      TestAllTypes_MapStringUint64Entry.encode(
        { key: key as any, value },
        writer.uint32(1786).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringFloat).forEach(([key, value]) => {
      TestAllTypes_MapStringFloatEntry.encode(
        { key: key as any, value },
        writer.uint32(1794).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringDouble).forEach(([key, value]) => {
      TestAllTypes_MapStringDoubleEntry.encode(
        { key: key as any, value },
        writer.uint32(1802).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringEnum).forEach(([key, value]) => {
      TestAllTypes_MapStringEnumEntry.encode(
        { key: key as any, value },
        writer.uint32(1810).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringMessage).forEach(([key, value]) => {
      TestAllTypes_MapStringMessageEntry.encode(
        { key: key as any, value },
        writer.uint32(1818).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringDuration).forEach(([key, value]) => {
      TestAllTypes_MapStringDurationEntry.encode(
        { key: key as any, value },
        writer.uint32(1946).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringTimestamp).forEach(([key, value]) => {
      TestAllTypes_MapStringTimestampEntry.encode(
        { key: key as any, value },
        writer.uint32(1954).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringNullValue).forEach(([key, value]) => {
      TestAllTypes_MapStringNullValueEntry.encode(
        { key: key as any, value },
        writer.uint32(1962).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringAny).forEach(([key, value]) => {
      TestAllTypes_MapStringAnyEntry.encode(
        { key: key as any, value },
        writer.uint32(2490).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringStruct).forEach(([key, value]) => {
      TestAllTypes_MapStringStructEntry.encode(
        { key: key as any, value },
        writer.uint32(2498).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringValue).forEach(([key, value]) => {
      TestAllTypes_MapStringValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2506).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringListValue).forEach(([key, value]) => {
      TestAllTypes_MapStringListValueEntry.encode(
        { key: key as any, value },
        writer.uint32(2514).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringInt64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringInt64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2522).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringInt32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringInt32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2530).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringDoubleWrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringDoubleWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2538).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringFloatWrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringFloatWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2546).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringUint64Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringUint64WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2554).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringUint32Wrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringUint32WrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2562).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringStringWrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringStringWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2570).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringBoolWrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringBoolWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2578).fork()
      ).ldelim();
    });
    Object.entries(message.mapStringBytesWrapper).forEach(([key, value]) => {
      TestAllTypes_MapStringBytesWrapperEntry.encode(
        { key: key as any, value },
        writer.uint32(2586).fork()
      ).ldelim();
    });
    if (message.oneofType !== undefined) {
      NestedTestAllTypes.encode(
        message.oneofType,
        writer.uint32(3202).fork()
      ).ldelim();
    }
    if (message.oneofMsg !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.oneofMsg,
        writer.uint32(3210).fork()
      ).ldelim();
    }
    if (message.oneofBool !== undefined) {
      writer.uint32(3216).bool(message.oneofBool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestAllTypes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestAllTypes } as TestAllTypes;
    message.repeatedInt32 = [];
    message.repeatedInt64 = [];
    message.repeatedUint32 = [];
    message.repeatedUint64 = [];
    message.repeatedSint32 = [];
    message.repeatedSint64 = [];
    message.repeatedFixed32 = [];
    message.repeatedFixed64 = [];
    message.repeatedSfixed32 = [];
    message.repeatedSfixed64 = [];
    message.repeatedFloat = [];
    message.repeatedDouble = [];
    message.repeatedBool = [];
    message.repeatedString = [];
    message.repeatedBytes = [];
    message.repeatedNestedMessage = [];
    message.repeatedNestedEnum = [];
    message.repeatedStringPiece = [];
    message.repeatedCord = [];
    message.repeatedLazyMessage = [];
    message.repeatedAny = [];
    message.repeatedDuration = [];
    message.repeatedTimestamp = [];
    message.repeatedStruct = [];
    message.repeatedValue = [];
    message.repeatedInt64Wrapper = [];
    message.repeatedInt32Wrapper = [];
    message.repeatedDoubleWrapper = [];
    message.repeatedFloatWrapper = [];
    message.repeatedUint64Wrapper = [];
    message.repeatedUint32Wrapper = [];
    message.repeatedStringWrapper = [];
    message.repeatedBoolWrapper = [];
    message.repeatedBytesWrapper = [];
    message.repeatedListValue = [];
    message.repeatedNullValue = [];
    message.mapInt64NestedType = {};
    message.mapBoolBool = {};
    message.mapBoolString = {};
    message.mapBoolBytes = {};
    message.mapBoolInt32 = {};
    message.mapBoolInt64 = {};
    message.mapBoolUint32 = {};
    message.mapBoolUint64 = {};
    message.mapBoolFloat = {};
    message.mapBoolDouble = {};
    message.mapBoolEnum = {};
    message.mapBoolMessage = {};
    message.mapBoolDuration = {};
    message.mapBoolTimestamp = {};
    message.mapBoolNullValue = {};
    message.mapBoolAny = {};
    message.mapBoolStruct = {};
    message.mapBoolValue = {};
    message.mapBoolListValue = {};
    message.mapBoolInt64Wrapper = {};
    message.mapBoolInt32Wrapper = {};
    message.mapBoolDoubleWrapper = {};
    message.mapBoolFloatWrapper = {};
    message.mapBoolUint64Wrapper = {};
    message.mapBoolUint32Wrapper = {};
    message.mapBoolStringWrapper = {};
    message.mapBoolBoolWrapper = {};
    message.mapBoolBytesWrapper = {};
    message.mapInt32Bool = {};
    message.mapInt32String = {};
    message.mapInt32Bytes = {};
    message.mapInt32Int32 = {};
    message.mapInt32Int64 = {};
    message.mapInt32Uint32 = {};
    message.mapInt32Uint64 = {};
    message.mapInt32Float = {};
    message.mapInt32Double = {};
    message.mapInt32Enum = {};
    message.mapInt32Message = {};
    message.mapInt32Duration = {};
    message.mapInt32Timestamp = {};
    message.mapInt32NullValue = {};
    message.mapInt32Any = {};
    message.mapInt32Struct = {};
    message.mapInt32Value = {};
    message.mapInt32ListValue = {};
    message.mapInt32Int64Wrapper = {};
    message.mapInt32Int32Wrapper = {};
    message.mapInt32DoubleWrapper = {};
    message.mapInt32FloatWrapper = {};
    message.mapInt32Uint64Wrapper = {};
    message.mapInt32Uint32Wrapper = {};
    message.mapInt32StringWrapper = {};
    message.mapInt32BoolWrapper = {};
    message.mapInt32BytesWrapper = {};
    message.mapInt64Bool = {};
    message.mapInt64String = {};
    message.mapInt64Bytes = {};
    message.mapInt64Int32 = {};
    message.mapInt64Int64 = {};
    message.mapInt64Uint32 = {};
    message.mapInt64Uint64 = {};
    message.mapInt64Float = {};
    message.mapInt64Double = {};
    message.mapInt64Enum = {};
    message.mapInt64Message = {};
    message.mapInt64Duration = {};
    message.mapInt64Timestamp = {};
    message.mapInt64NullValue = {};
    message.mapInt64Any = {};
    message.mapInt64Struct = {};
    message.mapInt64Value = {};
    message.mapInt64ListValue = {};
    message.mapInt64Int64Wrapper = {};
    message.mapInt64Int32Wrapper = {};
    message.mapInt64DoubleWrapper = {};
    message.mapInt64FloatWrapper = {};
    message.mapInt64Uint64Wrapper = {};
    message.mapInt64Uint32Wrapper = {};
    message.mapInt64StringWrapper = {};
    message.mapInt64BoolWrapper = {};
    message.mapInt64BytesWrapper = {};
    message.mapUint32Bool = {};
    message.mapUint32String = {};
    message.mapUint32Bytes = {};
    message.mapUint32Int32 = {};
    message.mapUint32Int64 = {};
    message.mapUint32Uint32 = {};
    message.mapUint32Uint64 = {};
    message.mapUint32Float = {};
    message.mapUint32Double = {};
    message.mapUint32Enum = {};
    message.mapUint32Message = {};
    message.mapUint32Duration = {};
    message.mapUint32Timestamp = {};
    message.mapUint32NullValue = {};
    message.mapUint32Any = {};
    message.mapUint32Struct = {};
    message.mapUint32Value = {};
    message.mapUint32ListValue = {};
    message.mapUint32Int64Wrapper = {};
    message.mapUint32Int32Wrapper = {};
    message.mapUint32DoubleWrapper = {};
    message.mapUint32FloatWrapper = {};
    message.mapUint32Uint64Wrapper = {};
    message.mapUint32Uint32Wrapper = {};
    message.mapUint32StringWrapper = {};
    message.mapUint32BoolWrapper = {};
    message.mapUint32BytesWrapper = {};
    message.mapUint64Bool = {};
    message.mapUint64String = {};
    message.mapUint64Bytes = {};
    message.mapUint64Int32 = {};
    message.mapUint64Int64 = {};
    message.mapUint64Uint32 = {};
    message.mapUint64Uint64 = {};
    message.mapUint64Float = {};
    message.mapUint64Double = {};
    message.mapUint64Enum = {};
    message.mapUint64Message = {};
    message.mapUint64Duration = {};
    message.mapUint64Timestamp = {};
    message.mapUint64NullValue = {};
    message.mapUint64Any = {};
    message.mapUint64Struct = {};
    message.mapUint64Value = {};
    message.mapUint64ListValue = {};
    message.mapUint64Int64Wrapper = {};
    message.mapUint64Int32Wrapper = {};
    message.mapUint64DoubleWrapper = {};
    message.mapUint64FloatWrapper = {};
    message.mapUint64Uint64Wrapper = {};
    message.mapUint64Uint32Wrapper = {};
    message.mapUint64StringWrapper = {};
    message.mapUint64BoolWrapper = {};
    message.mapUint64BytesWrapper = {};
    message.mapStringBool = {};
    message.mapStringString = {};
    message.mapStringBytes = {};
    message.mapStringInt32 = {};
    message.mapStringInt64 = {};
    message.mapStringUint32 = {};
    message.mapStringUint64 = {};
    message.mapStringFloat = {};
    message.mapStringDouble = {};
    message.mapStringEnum = {};
    message.mapStringMessage = {};
    message.mapStringDuration = {};
    message.mapStringTimestamp = {};
    message.mapStringNullValue = {};
    message.mapStringAny = {};
    message.mapStringStruct = {};
    message.mapStringValue = {};
    message.mapStringListValue = {};
    message.mapStringInt64Wrapper = {};
    message.mapStringInt32Wrapper = {};
    message.mapStringDoubleWrapper = {};
    message.mapStringFloatWrapper = {};
    message.mapStringUint64Wrapper = {};
    message.mapStringUint32Wrapper = {};
    message.mapStringStringWrapper = {};
    message.mapStringBoolWrapper = {};
    message.mapStringBytesWrapper = {};
    message.singleBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.singleInt32 = reader.int32();
          break;
        case 2:
          message.singleInt64 = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.singleUint32 = reader.uint32();
          break;
        case 4:
          message.singleUint64 = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.singleSint32 = reader.sint32();
          break;
        case 6:
          message.singleSint64 = longToNumber(reader.sint64() as Long);
          break;
        case 7:
          message.singleFixed32 = reader.fixed32();
          break;
        case 8:
          message.singleFixed64 = longToNumber(reader.fixed64() as Long);
          break;
        case 9:
          message.singleSfixed32 = reader.sfixed32();
          break;
        case 10:
          message.singleSfixed64 = longToNumber(reader.sfixed64() as Long);
          break;
        case 11:
          message.singleFloat = reader.float();
          break;
        case 12:
          message.singleDouble = reader.double();
          break;
        case 13:
          message.singleBool = reader.bool();
          break;
        case 14:
          message.singleString = reader.string();
          break;
        case 15:
          message.singleBytes = reader.bytes();
          break;
        case 16:
          message.optionalBool = reader.bool();
          break;
        case 17:
          message.optionalString = reader.bool();
          break;
        case 18:
          message.in = reader.bool();
          break;
        case 100:
          message.singleAny = Any.decode(reader, reader.uint32());
          break;
        case 101:
          message.singleDuration = Duration.decode(reader, reader.uint32());
          break;
        case 102:
          message.singleTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 103:
          message.singleStruct = Struct.decode(reader, reader.uint32());
          break;
        case 104:
          message.singleValue = Value.decode(reader, reader.uint32());
          break;
        case 105:
          message.singleInt64Wrapper = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 106:
          message.singleInt32Wrapper = Int32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 107:
          message.singleDoubleWrapper = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 108:
          message.singleFloatWrapper = FloatValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 109:
          message.singleUint64Wrapper = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 110:
          message.singleUint32Wrapper = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 111:
          message.singleStringWrapper = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 112:
          message.singleBoolWrapper = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 113:
          message.singleBytesWrapper = BytesValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 114:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        case 115:
          message.nullValue = reader.int32() as any;
          break;
        case 116:
          message.optionalNullValue = reader.int32() as any;
          break;
        case 117:
          message.fieldMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 118:
          message.empty = Empty.decode(reader, reader.uint32());
          break;
        case 21:
          message.singleNestedMessage = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.singleNestedEnum = reader.int32() as any;
          break;
        case 23:
          message.standaloneMessage = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.standaloneEnum = reader.int32() as any;
          break;
        case 31:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt32.push(reader.int32());
            }
          } else {
            message.repeatedInt32.push(reader.int32());
          }
          break;
        case 32:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedInt64.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.repeatedInt64.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 33:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedUint32.push(reader.uint32());
            }
          } else {
            message.repeatedUint32.push(reader.uint32());
          }
          break;
        case 34:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedUint64.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.repeatedUint64.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 35:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSint32.push(reader.sint32());
            }
          } else {
            message.repeatedSint32.push(reader.sint32());
          }
          break;
        case 36:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSint64.push(
                longToNumber(reader.sint64() as Long)
              );
            }
          } else {
            message.repeatedSint64.push(longToNumber(reader.sint64() as Long));
          }
          break;
        case 37:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFixed32.push(reader.fixed32());
            }
          } else {
            message.repeatedFixed32.push(reader.fixed32());
          }
          break;
        case 38:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFixed64.push(
                longToNumber(reader.fixed64() as Long)
              );
            }
          } else {
            message.repeatedFixed64.push(
              longToNumber(reader.fixed64() as Long)
            );
          }
          break;
        case 39:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSfixed32.push(reader.sfixed32());
            }
          } else {
            message.repeatedSfixed32.push(reader.sfixed32());
          }
          break;
        case 40:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedSfixed64.push(
                longToNumber(reader.sfixed64() as Long)
              );
            }
          } else {
            message.repeatedSfixed64.push(
              longToNumber(reader.sfixed64() as Long)
            );
          }
          break;
        case 41:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedFloat.push(reader.float());
            }
          } else {
            message.repeatedFloat.push(reader.float());
          }
          break;
        case 42:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedDouble.push(reader.double());
            }
          } else {
            message.repeatedDouble.push(reader.double());
          }
          break;
        case 43:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedBool.push(reader.bool());
            }
          } else {
            message.repeatedBool.push(reader.bool());
          }
          break;
        case 44:
          message.repeatedString.push(reader.string());
          break;
        case 45:
          message.repeatedBytes.push(reader.bytes());
          break;
        case 51:
          message.repeatedNestedMessage.push(
            TestAllTypes_NestedMessage.decode(reader, reader.uint32())
          );
          break;
        case 52:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedNestedEnum.push(reader.int32() as any);
            }
          } else {
            message.repeatedNestedEnum.push(reader.int32() as any);
          }
          break;
        case 53:
          message.repeatedStringPiece.push(reader.string());
          break;
        case 54:
          message.repeatedCord.push(reader.string());
          break;
        case 55:
          message.repeatedLazyMessage.push(
            TestAllTypes_NestedMessage.decode(reader, reader.uint32())
          );
          break;
        case 120:
          message.repeatedAny.push(Any.decode(reader, reader.uint32()));
          break;
        case 121:
          message.repeatedDuration.push(
            Duration.decode(reader, reader.uint32())
          );
          break;
        case 122:
          message.repeatedTimestamp.push(
            fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          );
          break;
        case 123:
          message.repeatedStruct.push(Struct.decode(reader, reader.uint32()));
          break;
        case 124:
          message.repeatedValue.push(Value.decode(reader, reader.uint32()));
          break;
        case 125:
          message.repeatedInt64Wrapper.push(
            Int64Value.decode(reader, reader.uint32()).value
          );
          break;
        case 126:
          message.repeatedInt32Wrapper.push(
            Int32Value.decode(reader, reader.uint32()).value
          );
          break;
        case 127:
          message.repeatedDoubleWrapper.push(
            DoubleValue.decode(reader, reader.uint32()).value
          );
          break;
        case 128:
          message.repeatedFloatWrapper.push(
            FloatValue.decode(reader, reader.uint32()).value
          );
          break;
        case 129:
          message.repeatedUint64Wrapper.push(
            UInt64Value.decode(reader, reader.uint32()).value
          );
          break;
        case 130:
          message.repeatedUint32Wrapper.push(
            UInt32Value.decode(reader, reader.uint32()).value
          );
          break;
        case 131:
          message.repeatedStringWrapper.push(
            StringValue.decode(reader, reader.uint32()).value
          );
          break;
        case 132:
          message.repeatedBoolWrapper.push(
            BoolValue.decode(reader, reader.uint32()).value
          );
          break;
        case 133:
          message.repeatedBytesWrapper.push(
            BytesValue.decode(reader, reader.uint32()).value
          );
          break;
        case 134:
          message.repeatedListValue.push(
            ListValue.decode(reader, reader.uint32())
          );
          break;
        case 135:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repeatedNullValue.push(reader.int32() as any);
            }
          } else {
            message.repeatedNullValue.push(reader.int32() as any);
          }
          break;
        case 62:
          const entry62 = TestAllTypes_MapInt64NestedTypeEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry62.value !== undefined) {
            message.mapInt64NestedType[entry62.key] = entry62.value;
          }
          break;
        case 63:
          const entry63 = TestAllTypes_MapBoolBoolEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry63.value !== undefined) {
            message.mapBoolBool[entry63.key] = entry63.value;
          }
          break;
        case 64:
          const entry64 = TestAllTypes_MapBoolStringEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry64.value !== undefined) {
            message.mapBoolString[entry64.key] = entry64.value;
          }
          break;
        case 65:
          const entry65 = TestAllTypes_MapBoolBytesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry65.value !== undefined) {
            message.mapBoolBytes[entry65.key] = entry65.value;
          }
          break;
        case 66:
          const entry66 = TestAllTypes_MapBoolInt32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry66.value !== undefined) {
            message.mapBoolInt32[entry66.key] = entry66.value;
          }
          break;
        case 67:
          const entry67 = TestAllTypes_MapBoolInt64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry67.value !== undefined) {
            message.mapBoolInt64[entry67.key] = entry67.value;
          }
          break;
        case 68:
          const entry68 = TestAllTypes_MapBoolUint32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry68.value !== undefined) {
            message.mapBoolUint32[entry68.key] = entry68.value;
          }
          break;
        case 69:
          const entry69 = TestAllTypes_MapBoolUint64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry69.value !== undefined) {
            message.mapBoolUint64[entry69.key] = entry69.value;
          }
          break;
        case 70:
          const entry70 = TestAllTypes_MapBoolFloatEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry70.value !== undefined) {
            message.mapBoolFloat[entry70.key] = entry70.value;
          }
          break;
        case 71:
          const entry71 = TestAllTypes_MapBoolDoubleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry71.value !== undefined) {
            message.mapBoolDouble[entry71.key] = entry71.value;
          }
          break;
        case 72:
          const entry72 = TestAllTypes_MapBoolEnumEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry72.value !== undefined) {
            message.mapBoolEnum[entry72.key] = entry72.value;
          }
          break;
        case 73:
          const entry73 = TestAllTypes_MapBoolMessageEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry73.value !== undefined) {
            message.mapBoolMessage[entry73.key] = entry73.value;
          }
          break;
        case 228:
          const entry228 = TestAllTypes_MapBoolDurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry228.value !== undefined) {
            message.mapBoolDuration[entry228.key] = entry228.value;
          }
          break;
        case 229:
          const entry229 = TestAllTypes_MapBoolTimestampEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry229.value !== undefined) {
            message.mapBoolTimestamp[entry229.key] = entry229.value;
          }
          break;
        case 230:
          const entry230 = TestAllTypes_MapBoolNullValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry230.value !== undefined) {
            message.mapBoolNullValue[entry230.key] = entry230.value;
          }
          break;
        case 246:
          const entry246 = TestAllTypes_MapBoolAnyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry246.value !== undefined) {
            message.mapBoolAny[entry246.key] = entry246.value;
          }
          break;
        case 247:
          const entry247 = TestAllTypes_MapBoolStructEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry247.value !== undefined) {
            message.mapBoolStruct[entry247.key] = entry247.value;
          }
          break;
        case 248:
          const entry248 = TestAllTypes_MapBoolValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry248.value !== undefined) {
            message.mapBoolValue[entry248.key] = entry248.value;
          }
          break;
        case 249:
          const entry249 = TestAllTypes_MapBoolListValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry249.value !== undefined) {
            message.mapBoolListValue[entry249.key] = entry249.value;
          }
          break;
        case 250:
          const entry250 = TestAllTypes_MapBoolInt64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry250.value !== undefined) {
            message.mapBoolInt64Wrapper[entry250.key] = entry250.value;
          }
          break;
        case 251:
          const entry251 = TestAllTypes_MapBoolInt32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry251.value !== undefined) {
            message.mapBoolInt32Wrapper[entry251.key] = entry251.value;
          }
          break;
        case 252:
          const entry252 = TestAllTypes_MapBoolDoubleWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry252.value !== undefined) {
            message.mapBoolDoubleWrapper[entry252.key] = entry252.value;
          }
          break;
        case 253:
          const entry253 = TestAllTypes_MapBoolFloatWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry253.value !== undefined) {
            message.mapBoolFloatWrapper[entry253.key] = entry253.value;
          }
          break;
        case 254:
          const entry254 = TestAllTypes_MapBoolUint64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry254.value !== undefined) {
            message.mapBoolUint64Wrapper[entry254.key] = entry254.value;
          }
          break;
        case 255:
          const entry255 = TestAllTypes_MapBoolUint32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.mapBoolUint32Wrapper[entry255.key] = entry255.value;
          }
          break;
        case 256:
          const entry256 = TestAllTypes_MapBoolStringWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry256.value !== undefined) {
            message.mapBoolStringWrapper[entry256.key] = entry256.value;
          }
          break;
        case 257:
          const entry257 = TestAllTypes_MapBoolBoolWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry257.value !== undefined) {
            message.mapBoolBoolWrapper[entry257.key] = entry257.value;
          }
          break;
        case 258:
          const entry258 = TestAllTypes_MapBoolBytesWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry258.value !== undefined) {
            message.mapBoolBytesWrapper[entry258.key] = entry258.value;
          }
          break;
        case 74:
          const entry74 = TestAllTypes_MapInt32BoolEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry74.value !== undefined) {
            message.mapInt32Bool[entry74.key] = entry74.value;
          }
          break;
        case 75:
          const entry75 = TestAllTypes_MapInt32StringEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry75.value !== undefined) {
            message.mapInt32String[entry75.key] = entry75.value;
          }
          break;
        case 76:
          const entry76 = TestAllTypes_MapInt32BytesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry76.value !== undefined) {
            message.mapInt32Bytes[entry76.key] = entry76.value;
          }
          break;
        case 77:
          const entry77 = TestAllTypes_MapInt32Int32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry77.value !== undefined) {
            message.mapInt32Int32[entry77.key] = entry77.value;
          }
          break;
        case 78:
          const entry78 = TestAllTypes_MapInt32Int64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry78.value !== undefined) {
            message.mapInt32Int64[entry78.key] = entry78.value;
          }
          break;
        case 79:
          const entry79 = TestAllTypes_MapInt32Uint32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry79.value !== undefined) {
            message.mapInt32Uint32[entry79.key] = entry79.value;
          }
          break;
        case 80:
          const entry80 = TestAllTypes_MapInt32Uint64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry80.value !== undefined) {
            message.mapInt32Uint64[entry80.key] = entry80.value;
          }
          break;
        case 81:
          const entry81 = TestAllTypes_MapInt32FloatEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry81.value !== undefined) {
            message.mapInt32Float[entry81.key] = entry81.value;
          }
          break;
        case 82:
          const entry82 = TestAllTypes_MapInt32DoubleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry82.value !== undefined) {
            message.mapInt32Double[entry82.key] = entry82.value;
          }
          break;
        case 83:
          const entry83 = TestAllTypes_MapInt32EnumEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry83.value !== undefined) {
            message.mapInt32Enum[entry83.key] = entry83.value;
          }
          break;
        case 84:
          const entry84 = TestAllTypes_MapInt32MessageEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry84.value !== undefined) {
            message.mapInt32Message[entry84.key] = entry84.value;
          }
          break;
        case 231:
          const entry231 = TestAllTypes_MapInt32DurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry231.value !== undefined) {
            message.mapInt32Duration[entry231.key] = entry231.value;
          }
          break;
        case 232:
          const entry232 = TestAllTypes_MapInt32TimestampEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry232.value !== undefined) {
            message.mapInt32Timestamp[entry232.key] = entry232.value;
          }
          break;
        case 233:
          const entry233 = TestAllTypes_MapInt32NullValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry233.value !== undefined) {
            message.mapInt32NullValue[entry233.key] = entry233.value;
          }
          break;
        case 259:
          const entry259 = TestAllTypes_MapInt32AnyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry259.value !== undefined) {
            message.mapInt32Any[entry259.key] = entry259.value;
          }
          break;
        case 260:
          const entry260 = TestAllTypes_MapInt32StructEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry260.value !== undefined) {
            message.mapInt32Struct[entry260.key] = entry260.value;
          }
          break;
        case 261:
          const entry261 = TestAllTypes_MapInt32ValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry261.value !== undefined) {
            message.mapInt32Value[entry261.key] = entry261.value;
          }
          break;
        case 262:
          const entry262 = TestAllTypes_MapInt32ListValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry262.value !== undefined) {
            message.mapInt32ListValue[entry262.key] = entry262.value;
          }
          break;
        case 263:
          const entry263 = TestAllTypes_MapInt32Int64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry263.value !== undefined) {
            message.mapInt32Int64Wrapper[entry263.key] = entry263.value;
          }
          break;
        case 264:
          const entry264 = TestAllTypes_MapInt32Int32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry264.value !== undefined) {
            message.mapInt32Int32Wrapper[entry264.key] = entry264.value;
          }
          break;
        case 265:
          const entry265 = TestAllTypes_MapInt32DoubleWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry265.value !== undefined) {
            message.mapInt32DoubleWrapper[entry265.key] = entry265.value;
          }
          break;
        case 266:
          const entry266 = TestAllTypes_MapInt32FloatWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry266.value !== undefined) {
            message.mapInt32FloatWrapper[entry266.key] = entry266.value;
          }
          break;
        case 267:
          const entry267 = TestAllTypes_MapInt32Uint64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry267.value !== undefined) {
            message.mapInt32Uint64Wrapper[entry267.key] = entry267.value;
          }
          break;
        case 268:
          const entry268 = TestAllTypes_MapInt32Uint32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry268.value !== undefined) {
            message.mapInt32Uint32Wrapper[entry268.key] = entry268.value;
          }
          break;
        case 269:
          const entry269 = TestAllTypes_MapInt32StringWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry269.value !== undefined) {
            message.mapInt32StringWrapper[entry269.key] = entry269.value;
          }
          break;
        case 270:
          const entry270 = TestAllTypes_MapInt32BoolWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry270.value !== undefined) {
            message.mapInt32BoolWrapper[entry270.key] = entry270.value;
          }
          break;
        case 271:
          const entry271 = TestAllTypes_MapInt32BytesWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry271.value !== undefined) {
            message.mapInt32BytesWrapper[entry271.key] = entry271.value;
          }
          break;
        case 85:
          const entry85 = TestAllTypes_MapInt64BoolEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry85.value !== undefined) {
            message.mapInt64Bool[entry85.key] = entry85.value;
          }
          break;
        case 86:
          const entry86 = TestAllTypes_MapInt64StringEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry86.value !== undefined) {
            message.mapInt64String[entry86.key] = entry86.value;
          }
          break;
        case 87:
          const entry87 = TestAllTypes_MapInt64BytesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry87.value !== undefined) {
            message.mapInt64Bytes[entry87.key] = entry87.value;
          }
          break;
        case 88:
          const entry88 = TestAllTypes_MapInt64Int32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry88.value !== undefined) {
            message.mapInt64Int32[entry88.key] = entry88.value;
          }
          break;
        case 89:
          const entry89 = TestAllTypes_MapInt64Int64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry89.value !== undefined) {
            message.mapInt64Int64[entry89.key] = entry89.value;
          }
          break;
        case 90:
          const entry90 = TestAllTypes_MapInt64Uint32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry90.value !== undefined) {
            message.mapInt64Uint32[entry90.key] = entry90.value;
          }
          break;
        case 91:
          const entry91 = TestAllTypes_MapInt64Uint64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry91.value !== undefined) {
            message.mapInt64Uint64[entry91.key] = entry91.value;
          }
          break;
        case 92:
          const entry92 = TestAllTypes_MapInt64FloatEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry92.value !== undefined) {
            message.mapInt64Float[entry92.key] = entry92.value;
          }
          break;
        case 93:
          const entry93 = TestAllTypes_MapInt64DoubleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry93.value !== undefined) {
            message.mapInt64Double[entry93.key] = entry93.value;
          }
          break;
        case 94:
          const entry94 = TestAllTypes_MapInt64EnumEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry94.value !== undefined) {
            message.mapInt64Enum[entry94.key] = entry94.value;
          }
          break;
        case 95:
          const entry95 = TestAllTypes_MapInt64MessageEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry95.value !== undefined) {
            message.mapInt64Message[entry95.key] = entry95.value;
          }
          break;
        case 234:
          const entry234 = TestAllTypes_MapInt64DurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry234.value !== undefined) {
            message.mapInt64Duration[entry234.key] = entry234.value;
          }
          break;
        case 235:
          const entry235 = TestAllTypes_MapInt64TimestampEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry235.value !== undefined) {
            message.mapInt64Timestamp[entry235.key] = entry235.value;
          }
          break;
        case 236:
          const entry236 = TestAllTypes_MapInt64NullValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry236.value !== undefined) {
            message.mapInt64NullValue[entry236.key] = entry236.value;
          }
          break;
        case 272:
          const entry272 = TestAllTypes_MapInt64AnyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry272.value !== undefined) {
            message.mapInt64Any[entry272.key] = entry272.value;
          }
          break;
        case 273:
          const entry273 = TestAllTypes_MapInt64StructEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry273.value !== undefined) {
            message.mapInt64Struct[entry273.key] = entry273.value;
          }
          break;
        case 274:
          const entry274 = TestAllTypes_MapInt64ValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry274.value !== undefined) {
            message.mapInt64Value[entry274.key] = entry274.value;
          }
          break;
        case 275:
          const entry275 = TestAllTypes_MapInt64ListValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry275.value !== undefined) {
            message.mapInt64ListValue[entry275.key] = entry275.value;
          }
          break;
        case 276:
          const entry276 = TestAllTypes_MapInt64Int64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry276.value !== undefined) {
            message.mapInt64Int64Wrapper[entry276.key] = entry276.value;
          }
          break;
        case 277:
          const entry277 = TestAllTypes_MapInt64Int32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry277.value !== undefined) {
            message.mapInt64Int32Wrapper[entry277.key] = entry277.value;
          }
          break;
        case 278:
          const entry278 = TestAllTypes_MapInt64DoubleWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry278.value !== undefined) {
            message.mapInt64DoubleWrapper[entry278.key] = entry278.value;
          }
          break;
        case 279:
          const entry279 = TestAllTypes_MapInt64FloatWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry279.value !== undefined) {
            message.mapInt64FloatWrapper[entry279.key] = entry279.value;
          }
          break;
        case 280:
          const entry280 = TestAllTypes_MapInt64Uint64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry280.value !== undefined) {
            message.mapInt64Uint64Wrapper[entry280.key] = entry280.value;
          }
          break;
        case 281:
          const entry281 = TestAllTypes_MapInt64Uint32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry281.value !== undefined) {
            message.mapInt64Uint32Wrapper[entry281.key] = entry281.value;
          }
          break;
        case 282:
          const entry282 = TestAllTypes_MapInt64StringWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry282.value !== undefined) {
            message.mapInt64StringWrapper[entry282.key] = entry282.value;
          }
          break;
        case 283:
          const entry283 = TestAllTypes_MapInt64BoolWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry283.value !== undefined) {
            message.mapInt64BoolWrapper[entry283.key] = entry283.value;
          }
          break;
        case 284:
          const entry284 = TestAllTypes_MapInt64BytesWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry284.value !== undefined) {
            message.mapInt64BytesWrapper[entry284.key] = entry284.value;
          }
          break;
        case 96:
          const entry96 = TestAllTypes_MapUint32BoolEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry96.value !== undefined) {
            message.mapUint32Bool[entry96.key] = entry96.value;
          }
          break;
        case 97:
          const entry97 = TestAllTypes_MapUint32StringEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry97.value !== undefined) {
            message.mapUint32String[entry97.key] = entry97.value;
          }
          break;
        case 98:
          const entry98 = TestAllTypes_MapUint32BytesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry98.value !== undefined) {
            message.mapUint32Bytes[entry98.key] = entry98.value;
          }
          break;
        case 99:
          const entry99 = TestAllTypes_MapUint32Int32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry99.value !== undefined) {
            message.mapUint32Int32[entry99.key] = entry99.value;
          }
          break;
        case 200:
          const entry200 = TestAllTypes_MapUint32Int64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry200.value !== undefined) {
            message.mapUint32Int64[entry200.key] = entry200.value;
          }
          break;
        case 201:
          const entry201 = TestAllTypes_MapUint32Uint32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry201.value !== undefined) {
            message.mapUint32Uint32[entry201.key] = entry201.value;
          }
          break;
        case 202:
          const entry202 = TestAllTypes_MapUint32Uint64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry202.value !== undefined) {
            message.mapUint32Uint64[entry202.key] = entry202.value;
          }
          break;
        case 203:
          const entry203 = TestAllTypes_MapUint32FloatEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry203.value !== undefined) {
            message.mapUint32Float[entry203.key] = entry203.value;
          }
          break;
        case 204:
          const entry204 = TestAllTypes_MapUint32DoubleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry204.value !== undefined) {
            message.mapUint32Double[entry204.key] = entry204.value;
          }
          break;
        case 205:
          const entry205 = TestAllTypes_MapUint32EnumEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry205.value !== undefined) {
            message.mapUint32Enum[entry205.key] = entry205.value;
          }
          break;
        case 206:
          const entry206 = TestAllTypes_MapUint32MessageEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry206.value !== undefined) {
            message.mapUint32Message[entry206.key] = entry206.value;
          }
          break;
        case 237:
          const entry237 = TestAllTypes_MapUint32DurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry237.value !== undefined) {
            message.mapUint32Duration[entry237.key] = entry237.value;
          }
          break;
        case 238:
          const entry238 = TestAllTypes_MapUint32TimestampEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry238.value !== undefined) {
            message.mapUint32Timestamp[entry238.key] = entry238.value;
          }
          break;
        case 239:
          const entry239 = TestAllTypes_MapUint32NullValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry239.value !== undefined) {
            message.mapUint32NullValue[entry239.key] = entry239.value;
          }
          break;
        case 285:
          const entry285 = TestAllTypes_MapUint32AnyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry285.value !== undefined) {
            message.mapUint32Any[entry285.key] = entry285.value;
          }
          break;
        case 286:
          const entry286 = TestAllTypes_MapUint32StructEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry286.value !== undefined) {
            message.mapUint32Struct[entry286.key] = entry286.value;
          }
          break;
        case 287:
          const entry287 = TestAllTypes_MapUint32ValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry287.value !== undefined) {
            message.mapUint32Value[entry287.key] = entry287.value;
          }
          break;
        case 288:
          const entry288 = TestAllTypes_MapUint32ListValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry288.value !== undefined) {
            message.mapUint32ListValue[entry288.key] = entry288.value;
          }
          break;
        case 289:
          const entry289 = TestAllTypes_MapUint32Int64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry289.value !== undefined) {
            message.mapUint32Int64Wrapper[entry289.key] = entry289.value;
          }
          break;
        case 290:
          const entry290 = TestAllTypes_MapUint32Int32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry290.value !== undefined) {
            message.mapUint32Int32Wrapper[entry290.key] = entry290.value;
          }
          break;
        case 291:
          const entry291 = TestAllTypes_MapUint32DoubleWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry291.value !== undefined) {
            message.mapUint32DoubleWrapper[entry291.key] = entry291.value;
          }
          break;
        case 292:
          const entry292 = TestAllTypes_MapUint32FloatWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry292.value !== undefined) {
            message.mapUint32FloatWrapper[entry292.key] = entry292.value;
          }
          break;
        case 293:
          const entry293 = TestAllTypes_MapUint32Uint64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry293.value !== undefined) {
            message.mapUint32Uint64Wrapper[entry293.key] = entry293.value;
          }
          break;
        case 294:
          const entry294 = TestAllTypes_MapUint32Uint32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry294.value !== undefined) {
            message.mapUint32Uint32Wrapper[entry294.key] = entry294.value;
          }
          break;
        case 295:
          const entry295 = TestAllTypes_MapUint32StringWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry295.value !== undefined) {
            message.mapUint32StringWrapper[entry295.key] = entry295.value;
          }
          break;
        case 296:
          const entry296 = TestAllTypes_MapUint32BoolWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry296.value !== undefined) {
            message.mapUint32BoolWrapper[entry296.key] = entry296.value;
          }
          break;
        case 297:
          const entry297 = TestAllTypes_MapUint32BytesWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry297.value !== undefined) {
            message.mapUint32BytesWrapper[entry297.key] = entry297.value;
          }
          break;
        case 207:
          const entry207 = TestAllTypes_MapUint64BoolEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry207.value !== undefined) {
            message.mapUint64Bool[entry207.key] = entry207.value;
          }
          break;
        case 208:
          const entry208 = TestAllTypes_MapUint64StringEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry208.value !== undefined) {
            message.mapUint64String[entry208.key] = entry208.value;
          }
          break;
        case 209:
          const entry209 = TestAllTypes_MapUint64BytesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry209.value !== undefined) {
            message.mapUint64Bytes[entry209.key] = entry209.value;
          }
          break;
        case 210:
          const entry210 = TestAllTypes_MapUint64Int32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry210.value !== undefined) {
            message.mapUint64Int32[entry210.key] = entry210.value;
          }
          break;
        case 211:
          const entry211 = TestAllTypes_MapUint64Int64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry211.value !== undefined) {
            message.mapUint64Int64[entry211.key] = entry211.value;
          }
          break;
        case 212:
          const entry212 = TestAllTypes_MapUint64Uint32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry212.value !== undefined) {
            message.mapUint64Uint32[entry212.key] = entry212.value;
          }
          break;
        case 213:
          const entry213 = TestAllTypes_MapUint64Uint64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry213.value !== undefined) {
            message.mapUint64Uint64[entry213.key] = entry213.value;
          }
          break;
        case 214:
          const entry214 = TestAllTypes_MapUint64FloatEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry214.value !== undefined) {
            message.mapUint64Float[entry214.key] = entry214.value;
          }
          break;
        case 215:
          const entry215 = TestAllTypes_MapUint64DoubleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry215.value !== undefined) {
            message.mapUint64Double[entry215.key] = entry215.value;
          }
          break;
        case 216:
          const entry216 = TestAllTypes_MapUint64EnumEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry216.value !== undefined) {
            message.mapUint64Enum[entry216.key] = entry216.value;
          }
          break;
        case 217:
          const entry217 = TestAllTypes_MapUint64MessageEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry217.value !== undefined) {
            message.mapUint64Message[entry217.key] = entry217.value;
          }
          break;
        case 240:
          const entry240 = TestAllTypes_MapUint64DurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry240.value !== undefined) {
            message.mapUint64Duration[entry240.key] = entry240.value;
          }
          break;
        case 241:
          const entry241 = TestAllTypes_MapUint64TimestampEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry241.value !== undefined) {
            message.mapUint64Timestamp[entry241.key] = entry241.value;
          }
          break;
        case 242:
          const entry242 = TestAllTypes_MapUint64NullValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry242.value !== undefined) {
            message.mapUint64NullValue[entry242.key] = entry242.value;
          }
          break;
        case 298:
          const entry298 = TestAllTypes_MapUint64AnyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry298.value !== undefined) {
            message.mapUint64Any[entry298.key] = entry298.value;
          }
          break;
        case 299:
          const entry299 = TestAllTypes_MapUint64StructEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry299.value !== undefined) {
            message.mapUint64Struct[entry299.key] = entry299.value;
          }
          break;
        case 300:
          const entry300 = TestAllTypes_MapUint64ValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry300.value !== undefined) {
            message.mapUint64Value[entry300.key] = entry300.value;
          }
          break;
        case 301:
          const entry301 = TestAllTypes_MapUint64ListValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry301.value !== undefined) {
            message.mapUint64ListValue[entry301.key] = entry301.value;
          }
          break;
        case 302:
          const entry302 = TestAllTypes_MapUint64Int64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry302.value !== undefined) {
            message.mapUint64Int64Wrapper[entry302.key] = entry302.value;
          }
          break;
        case 303:
          const entry303 = TestAllTypes_MapUint64Int32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry303.value !== undefined) {
            message.mapUint64Int32Wrapper[entry303.key] = entry303.value;
          }
          break;
        case 304:
          const entry304 = TestAllTypes_MapUint64DoubleWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry304.value !== undefined) {
            message.mapUint64DoubleWrapper[entry304.key] = entry304.value;
          }
          break;
        case 305:
          const entry305 = TestAllTypes_MapUint64FloatWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry305.value !== undefined) {
            message.mapUint64FloatWrapper[entry305.key] = entry305.value;
          }
          break;
        case 306:
          const entry306 = TestAllTypes_MapUint64Uint64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry306.value !== undefined) {
            message.mapUint64Uint64Wrapper[entry306.key] = entry306.value;
          }
          break;
        case 307:
          const entry307 = TestAllTypes_MapUint64Uint32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry307.value !== undefined) {
            message.mapUint64Uint32Wrapper[entry307.key] = entry307.value;
          }
          break;
        case 308:
          const entry308 = TestAllTypes_MapUint64StringWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry308.value !== undefined) {
            message.mapUint64StringWrapper[entry308.key] = entry308.value;
          }
          break;
        case 309:
          const entry309 = TestAllTypes_MapUint64BoolWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry309.value !== undefined) {
            message.mapUint64BoolWrapper[entry309.key] = entry309.value;
          }
          break;
        case 310:
          const entry310 = TestAllTypes_MapUint64BytesWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry310.value !== undefined) {
            message.mapUint64BytesWrapper[entry310.key] = entry310.value;
          }
          break;
        case 218:
          const entry218 = TestAllTypes_MapStringBoolEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry218.value !== undefined) {
            message.mapStringBool[entry218.key] = entry218.value;
          }
          break;
        case 61:
          const entry61 = TestAllTypes_MapStringStringEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry61.value !== undefined) {
            message.mapStringString[entry61.key] = entry61.value;
          }
          break;
        case 219:
          const entry219 = TestAllTypes_MapStringBytesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry219.value !== undefined) {
            message.mapStringBytes[entry219.key] = entry219.value;
          }
          break;
        case 220:
          const entry220 = TestAllTypes_MapStringInt32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry220.value !== undefined) {
            message.mapStringInt32[entry220.key] = entry220.value;
          }
          break;
        case 221:
          const entry221 = TestAllTypes_MapStringInt64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry221.value !== undefined) {
            message.mapStringInt64[entry221.key] = entry221.value;
          }
          break;
        case 222:
          const entry222 = TestAllTypes_MapStringUint32Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry222.value !== undefined) {
            message.mapStringUint32[entry222.key] = entry222.value;
          }
          break;
        case 223:
          const entry223 = TestAllTypes_MapStringUint64Entry.decode(
            reader,
            reader.uint32()
          );
          if (entry223.value !== undefined) {
            message.mapStringUint64[entry223.key] = entry223.value;
          }
          break;
        case 224:
          const entry224 = TestAllTypes_MapStringFloatEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry224.value !== undefined) {
            message.mapStringFloat[entry224.key] = entry224.value;
          }
          break;
        case 225:
          const entry225 = TestAllTypes_MapStringDoubleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry225.value !== undefined) {
            message.mapStringDouble[entry225.key] = entry225.value;
          }
          break;
        case 226:
          const entry226 = TestAllTypes_MapStringEnumEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry226.value !== undefined) {
            message.mapStringEnum[entry226.key] = entry226.value;
          }
          break;
        case 227:
          const entry227 = TestAllTypes_MapStringMessageEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry227.value !== undefined) {
            message.mapStringMessage[entry227.key] = entry227.value;
          }
          break;
        case 243:
          const entry243 = TestAllTypes_MapStringDurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry243.value !== undefined) {
            message.mapStringDuration[entry243.key] = entry243.value;
          }
          break;
        case 244:
          const entry244 = TestAllTypes_MapStringTimestampEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry244.value !== undefined) {
            message.mapStringTimestamp[entry244.key] = entry244.value;
          }
          break;
        case 245:
          const entry245 = TestAllTypes_MapStringNullValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry245.value !== undefined) {
            message.mapStringNullValue[entry245.key] = entry245.value;
          }
          break;
        case 311:
          const entry311 = TestAllTypes_MapStringAnyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry311.value !== undefined) {
            message.mapStringAny[entry311.key] = entry311.value;
          }
          break;
        case 312:
          const entry312 = TestAllTypes_MapStringStructEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry312.value !== undefined) {
            message.mapStringStruct[entry312.key] = entry312.value;
          }
          break;
        case 313:
          const entry313 = TestAllTypes_MapStringValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry313.value !== undefined) {
            message.mapStringValue[entry313.key] = entry313.value;
          }
          break;
        case 314:
          const entry314 = TestAllTypes_MapStringListValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry314.value !== undefined) {
            message.mapStringListValue[entry314.key] = entry314.value;
          }
          break;
        case 315:
          const entry315 = TestAllTypes_MapStringInt64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry315.value !== undefined) {
            message.mapStringInt64Wrapper[entry315.key] = entry315.value;
          }
          break;
        case 316:
          const entry316 = TestAllTypes_MapStringInt32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry316.value !== undefined) {
            message.mapStringInt32Wrapper[entry316.key] = entry316.value;
          }
          break;
        case 317:
          const entry317 = TestAllTypes_MapStringDoubleWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry317.value !== undefined) {
            message.mapStringDoubleWrapper[entry317.key] = entry317.value;
          }
          break;
        case 318:
          const entry318 = TestAllTypes_MapStringFloatWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry318.value !== undefined) {
            message.mapStringFloatWrapper[entry318.key] = entry318.value;
          }
          break;
        case 319:
          const entry319 = TestAllTypes_MapStringUint64WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry319.value !== undefined) {
            message.mapStringUint64Wrapper[entry319.key] = entry319.value;
          }
          break;
        case 320:
          const entry320 = TestAllTypes_MapStringUint32WrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry320.value !== undefined) {
            message.mapStringUint32Wrapper[entry320.key] = entry320.value;
          }
          break;
        case 321:
          const entry321 = TestAllTypes_MapStringStringWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry321.value !== undefined) {
            message.mapStringStringWrapper[entry321.key] = entry321.value;
          }
          break;
        case 322:
          const entry322 = TestAllTypes_MapStringBoolWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry322.value !== undefined) {
            message.mapStringBoolWrapper[entry322.key] = entry322.value;
          }
          break;
        case 323:
          const entry323 = TestAllTypes_MapStringBytesWrapperEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry323.value !== undefined) {
            message.mapStringBytesWrapper[entry323.key] = entry323.value;
          }
          break;
        case 400:
          message.oneofType = NestedTestAllTypes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 401:
          message.oneofMsg = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 402:
          message.oneofBool = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes {
    const message = { ...baseTestAllTypes } as TestAllTypes;
    message.repeatedInt32 = [];
    message.repeatedInt64 = [];
    message.repeatedUint32 = [];
    message.repeatedUint64 = [];
    message.repeatedSint32 = [];
    message.repeatedSint64 = [];
    message.repeatedFixed32 = [];
    message.repeatedFixed64 = [];
    message.repeatedSfixed32 = [];
    message.repeatedSfixed64 = [];
    message.repeatedFloat = [];
    message.repeatedDouble = [];
    message.repeatedBool = [];
    message.repeatedString = [];
    message.repeatedBytes = [];
    message.repeatedNestedMessage = [];
    message.repeatedNestedEnum = [];
    message.repeatedStringPiece = [];
    message.repeatedCord = [];
    message.repeatedLazyMessage = [];
    message.repeatedAny = [];
    message.repeatedDuration = [];
    message.repeatedTimestamp = [];
    message.repeatedStruct = [];
    message.repeatedValue = [];
    message.repeatedInt64Wrapper = [];
    message.repeatedInt32Wrapper = [];
    message.repeatedDoubleWrapper = [];
    message.repeatedFloatWrapper = [];
    message.repeatedUint64Wrapper = [];
    message.repeatedUint32Wrapper = [];
    message.repeatedStringWrapper = [];
    message.repeatedBoolWrapper = [];
    message.repeatedBytesWrapper = [];
    message.repeatedListValue = [];
    message.repeatedNullValue = [];
    message.mapInt64NestedType = {};
    message.mapBoolBool = {};
    message.mapBoolString = {};
    message.mapBoolBytes = {};
    message.mapBoolInt32 = {};
    message.mapBoolInt64 = {};
    message.mapBoolUint32 = {};
    message.mapBoolUint64 = {};
    message.mapBoolFloat = {};
    message.mapBoolDouble = {};
    message.mapBoolEnum = {};
    message.mapBoolMessage = {};
    message.mapBoolDuration = {};
    message.mapBoolTimestamp = {};
    message.mapBoolNullValue = {};
    message.mapBoolAny = {};
    message.mapBoolStruct = {};
    message.mapBoolValue = {};
    message.mapBoolListValue = {};
    message.mapBoolInt64Wrapper = {};
    message.mapBoolInt32Wrapper = {};
    message.mapBoolDoubleWrapper = {};
    message.mapBoolFloatWrapper = {};
    message.mapBoolUint64Wrapper = {};
    message.mapBoolUint32Wrapper = {};
    message.mapBoolStringWrapper = {};
    message.mapBoolBoolWrapper = {};
    message.mapBoolBytesWrapper = {};
    message.mapInt32Bool = {};
    message.mapInt32String = {};
    message.mapInt32Bytes = {};
    message.mapInt32Int32 = {};
    message.mapInt32Int64 = {};
    message.mapInt32Uint32 = {};
    message.mapInt32Uint64 = {};
    message.mapInt32Float = {};
    message.mapInt32Double = {};
    message.mapInt32Enum = {};
    message.mapInt32Message = {};
    message.mapInt32Duration = {};
    message.mapInt32Timestamp = {};
    message.mapInt32NullValue = {};
    message.mapInt32Any = {};
    message.mapInt32Struct = {};
    message.mapInt32Value = {};
    message.mapInt32ListValue = {};
    message.mapInt32Int64Wrapper = {};
    message.mapInt32Int32Wrapper = {};
    message.mapInt32DoubleWrapper = {};
    message.mapInt32FloatWrapper = {};
    message.mapInt32Uint64Wrapper = {};
    message.mapInt32Uint32Wrapper = {};
    message.mapInt32StringWrapper = {};
    message.mapInt32BoolWrapper = {};
    message.mapInt32BytesWrapper = {};
    message.mapInt64Bool = {};
    message.mapInt64String = {};
    message.mapInt64Bytes = {};
    message.mapInt64Int32 = {};
    message.mapInt64Int64 = {};
    message.mapInt64Uint32 = {};
    message.mapInt64Uint64 = {};
    message.mapInt64Float = {};
    message.mapInt64Double = {};
    message.mapInt64Enum = {};
    message.mapInt64Message = {};
    message.mapInt64Duration = {};
    message.mapInt64Timestamp = {};
    message.mapInt64NullValue = {};
    message.mapInt64Any = {};
    message.mapInt64Struct = {};
    message.mapInt64Value = {};
    message.mapInt64ListValue = {};
    message.mapInt64Int64Wrapper = {};
    message.mapInt64Int32Wrapper = {};
    message.mapInt64DoubleWrapper = {};
    message.mapInt64FloatWrapper = {};
    message.mapInt64Uint64Wrapper = {};
    message.mapInt64Uint32Wrapper = {};
    message.mapInt64StringWrapper = {};
    message.mapInt64BoolWrapper = {};
    message.mapInt64BytesWrapper = {};
    message.mapUint32Bool = {};
    message.mapUint32String = {};
    message.mapUint32Bytes = {};
    message.mapUint32Int32 = {};
    message.mapUint32Int64 = {};
    message.mapUint32Uint32 = {};
    message.mapUint32Uint64 = {};
    message.mapUint32Float = {};
    message.mapUint32Double = {};
    message.mapUint32Enum = {};
    message.mapUint32Message = {};
    message.mapUint32Duration = {};
    message.mapUint32Timestamp = {};
    message.mapUint32NullValue = {};
    message.mapUint32Any = {};
    message.mapUint32Struct = {};
    message.mapUint32Value = {};
    message.mapUint32ListValue = {};
    message.mapUint32Int64Wrapper = {};
    message.mapUint32Int32Wrapper = {};
    message.mapUint32DoubleWrapper = {};
    message.mapUint32FloatWrapper = {};
    message.mapUint32Uint64Wrapper = {};
    message.mapUint32Uint32Wrapper = {};
    message.mapUint32StringWrapper = {};
    message.mapUint32BoolWrapper = {};
    message.mapUint32BytesWrapper = {};
    message.mapUint64Bool = {};
    message.mapUint64String = {};
    message.mapUint64Bytes = {};
    message.mapUint64Int32 = {};
    message.mapUint64Int64 = {};
    message.mapUint64Uint32 = {};
    message.mapUint64Uint64 = {};
    message.mapUint64Float = {};
    message.mapUint64Double = {};
    message.mapUint64Enum = {};
    message.mapUint64Message = {};
    message.mapUint64Duration = {};
    message.mapUint64Timestamp = {};
    message.mapUint64NullValue = {};
    message.mapUint64Any = {};
    message.mapUint64Struct = {};
    message.mapUint64Value = {};
    message.mapUint64ListValue = {};
    message.mapUint64Int64Wrapper = {};
    message.mapUint64Int32Wrapper = {};
    message.mapUint64DoubleWrapper = {};
    message.mapUint64FloatWrapper = {};
    message.mapUint64Uint64Wrapper = {};
    message.mapUint64Uint32Wrapper = {};
    message.mapUint64StringWrapper = {};
    message.mapUint64BoolWrapper = {};
    message.mapUint64BytesWrapper = {};
    message.mapStringBool = {};
    message.mapStringString = {};
    message.mapStringBytes = {};
    message.mapStringInt32 = {};
    message.mapStringInt64 = {};
    message.mapStringUint32 = {};
    message.mapStringUint64 = {};
    message.mapStringFloat = {};
    message.mapStringDouble = {};
    message.mapStringEnum = {};
    message.mapStringMessage = {};
    message.mapStringDuration = {};
    message.mapStringTimestamp = {};
    message.mapStringNullValue = {};
    message.mapStringAny = {};
    message.mapStringStruct = {};
    message.mapStringValue = {};
    message.mapStringListValue = {};
    message.mapStringInt64Wrapper = {};
    message.mapStringInt32Wrapper = {};
    message.mapStringDoubleWrapper = {};
    message.mapStringFloatWrapper = {};
    message.mapStringUint64Wrapper = {};
    message.mapStringUint32Wrapper = {};
    message.mapStringStringWrapper = {};
    message.mapStringBoolWrapper = {};
    message.mapStringBytesWrapper = {};
    message.singleBytes = new Uint8Array();
    if (object.singleInt32 !== undefined && object.singleInt32 !== null) {
      message.singleInt32 = Number(object.singleInt32);
    } else {
      message.singleInt32 = 0;
    }
    if (object.singleInt64 !== undefined && object.singleInt64 !== null) {
      message.singleInt64 = Number(object.singleInt64);
    } else {
      message.singleInt64 = 0;
    }
    if (object.singleUint32 !== undefined && object.singleUint32 !== null) {
      message.singleUint32 = Number(object.singleUint32);
    } else {
      message.singleUint32 = 0;
    }
    if (object.singleUint64 !== undefined && object.singleUint64 !== null) {
      message.singleUint64 = Number(object.singleUint64);
    } else {
      message.singleUint64 = 0;
    }
    if (object.singleSint32 !== undefined && object.singleSint32 !== null) {
      message.singleSint32 = Number(object.singleSint32);
    } else {
      message.singleSint32 = 0;
    }
    if (object.singleSint64 !== undefined && object.singleSint64 !== null) {
      message.singleSint64 = Number(object.singleSint64);
    } else {
      message.singleSint64 = 0;
    }
    if (object.singleFixed32 !== undefined && object.singleFixed32 !== null) {
      message.singleFixed32 = Number(object.singleFixed32);
    } else {
      message.singleFixed32 = 0;
    }
    if (object.singleFixed64 !== undefined && object.singleFixed64 !== null) {
      message.singleFixed64 = Number(object.singleFixed64);
    } else {
      message.singleFixed64 = 0;
    }
    if (object.singleSfixed32 !== undefined && object.singleSfixed32 !== null) {
      message.singleSfixed32 = Number(object.singleSfixed32);
    } else {
      message.singleSfixed32 = 0;
    }
    if (object.singleSfixed64 !== undefined && object.singleSfixed64 !== null) {
      message.singleSfixed64 = Number(object.singleSfixed64);
    } else {
      message.singleSfixed64 = 0;
    }
    if (object.singleFloat !== undefined && object.singleFloat !== null) {
      message.singleFloat = Number(object.singleFloat);
    } else {
      message.singleFloat = 0;
    }
    if (object.singleDouble !== undefined && object.singleDouble !== null) {
      message.singleDouble = Number(object.singleDouble);
    } else {
      message.singleDouble = 0;
    }
    if (object.singleBool !== undefined && object.singleBool !== null) {
      message.singleBool = Boolean(object.singleBool);
    } else {
      message.singleBool = false;
    }
    if (object.singleString !== undefined && object.singleString !== null) {
      message.singleString = String(object.singleString);
    } else {
      message.singleString = "";
    }
    if (object.singleBytes !== undefined && object.singleBytes !== null) {
      message.singleBytes = bytesFromBase64(object.singleBytes);
    }
    if (object.optionalBool !== undefined && object.optionalBool !== null) {
      message.optionalBool = Boolean(object.optionalBool);
    } else {
      message.optionalBool = undefined;
    }
    if (object.optionalString !== undefined && object.optionalString !== null) {
      message.optionalString = Boolean(object.optionalString);
    } else {
      message.optionalString = undefined;
    }
    if (object.in !== undefined && object.in !== null) {
      message.in = Boolean(object.in);
    } else {
      message.in = false;
    }
    if (object.singleAny !== undefined && object.singleAny !== null) {
      message.singleAny = Any.fromJSON(object.singleAny);
    } else {
      message.singleAny = undefined;
    }
    if (object.singleDuration !== undefined && object.singleDuration !== null) {
      message.singleDuration = Duration.fromJSON(object.singleDuration);
    } else {
      message.singleDuration = undefined;
    }
    if (
      object.singleTimestamp !== undefined &&
      object.singleTimestamp !== null
    ) {
      message.singleTimestamp = fromJsonTimestamp(object.singleTimestamp);
    } else {
      message.singleTimestamp = undefined;
    }
    if (object.singleStruct !== undefined && object.singleStruct !== null) {
      message.singleStruct = Struct.fromJSON(object.singleStruct);
    } else {
      message.singleStruct = undefined;
    }
    if (object.singleValue !== undefined && object.singleValue !== null) {
      message.singleValue = Value.fromJSON(object.singleValue);
    } else {
      message.singleValue = undefined;
    }
    if (
      object.singleInt64Wrapper !== undefined &&
      object.singleInt64Wrapper !== null
    ) {
      message.singleInt64Wrapper = Number(object.singleInt64Wrapper);
    } else {
      message.singleInt64Wrapper = undefined;
    }
    if (
      object.singleInt32Wrapper !== undefined &&
      object.singleInt32Wrapper !== null
    ) {
      message.singleInt32Wrapper = Number(object.singleInt32Wrapper);
    } else {
      message.singleInt32Wrapper = undefined;
    }
    if (
      object.singleDoubleWrapper !== undefined &&
      object.singleDoubleWrapper !== null
    ) {
      message.singleDoubleWrapper = Number(object.singleDoubleWrapper);
    } else {
      message.singleDoubleWrapper = undefined;
    }
    if (
      object.singleFloatWrapper !== undefined &&
      object.singleFloatWrapper !== null
    ) {
      message.singleFloatWrapper = Number(object.singleFloatWrapper);
    } else {
      message.singleFloatWrapper = undefined;
    }
    if (
      object.singleUint64Wrapper !== undefined &&
      object.singleUint64Wrapper !== null
    ) {
      message.singleUint64Wrapper = Number(object.singleUint64Wrapper);
    } else {
      message.singleUint64Wrapper = undefined;
    }
    if (
      object.singleUint32Wrapper !== undefined &&
      object.singleUint32Wrapper !== null
    ) {
      message.singleUint32Wrapper = Number(object.singleUint32Wrapper);
    } else {
      message.singleUint32Wrapper = undefined;
    }
    if (
      object.singleStringWrapper !== undefined &&
      object.singleStringWrapper !== null
    ) {
      message.singleStringWrapper = String(object.singleStringWrapper);
    } else {
      message.singleStringWrapper = undefined;
    }
    if (
      object.singleBoolWrapper !== undefined &&
      object.singleBoolWrapper !== null
    ) {
      message.singleBoolWrapper = Boolean(object.singleBoolWrapper);
    } else {
      message.singleBoolWrapper = undefined;
    }
    if (
      object.singleBytesWrapper !== undefined &&
      object.singleBytesWrapper !== null
    ) {
      message.singleBytesWrapper = new Uint8Array(object.singleBytesWrapper);
    } else {
      message.singleBytesWrapper = undefined;
    }
    if (object.listValue !== undefined && object.listValue !== null) {
      message.listValue = ListValue.fromJSON(object.listValue);
    } else {
      message.listValue = undefined;
    }
    if (object.nullValue !== undefined && object.nullValue !== null) {
      message.nullValue = nullValueFromJSON(object.nullValue);
    } else {
      message.nullValue = 0;
    }
    if (
      object.optionalNullValue !== undefined &&
      object.optionalNullValue !== null
    ) {
      message.optionalNullValue = nullValueFromJSON(object.optionalNullValue);
    } else {
      message.optionalNullValue = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromJSON(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
    if (object.empty !== undefined && object.empty !== null) {
      message.empty = Empty.fromJSON(object.empty);
    } else {
      message.empty = undefined;
    }
    if (
      object.singleNestedMessage !== undefined &&
      object.singleNestedMessage !== null
    ) {
      message.singleNestedMessage = TestAllTypes_NestedMessage.fromJSON(
        object.singleNestedMessage
      );
    } else {
      message.singleNestedMessage = undefined;
    }
    if (
      object.singleNestedEnum !== undefined &&
      object.singleNestedEnum !== null
    ) {
      message.singleNestedEnum = testAllTypes_NestedEnumFromJSON(
        object.singleNestedEnum
      );
    } else {
      message.singleNestedEnum = undefined;
    }
    if (
      object.standaloneMessage !== undefined &&
      object.standaloneMessage !== null
    ) {
      message.standaloneMessage = TestAllTypes_NestedMessage.fromJSON(
        object.standaloneMessage
      );
    } else {
      message.standaloneMessage = undefined;
    }
    if (object.standaloneEnum !== undefined && object.standaloneEnum !== null) {
      message.standaloneEnum = testAllTypes_NestedEnumFromJSON(
        object.standaloneEnum
      );
    } else {
      message.standaloneEnum = 0;
    }
    if (object.repeatedInt32 !== undefined && object.repeatedInt32 !== null) {
      for (const e of object.repeatedInt32) {
        message.repeatedInt32.push(Number(e));
      }
    }
    if (object.repeatedInt64 !== undefined && object.repeatedInt64 !== null) {
      for (const e of object.repeatedInt64) {
        message.repeatedInt64.push(Number(e));
      }
    }
    if (object.repeatedUint32 !== undefined && object.repeatedUint32 !== null) {
      for (const e of object.repeatedUint32) {
        message.repeatedUint32.push(Number(e));
      }
    }
    if (object.repeatedUint64 !== undefined && object.repeatedUint64 !== null) {
      for (const e of object.repeatedUint64) {
        message.repeatedUint64.push(Number(e));
      }
    }
    if (object.repeatedSint32 !== undefined && object.repeatedSint32 !== null) {
      for (const e of object.repeatedSint32) {
        message.repeatedSint32.push(Number(e));
      }
    }
    if (object.repeatedSint64 !== undefined && object.repeatedSint64 !== null) {
      for (const e of object.repeatedSint64) {
        message.repeatedSint64.push(Number(e));
      }
    }
    if (
      object.repeatedFixed32 !== undefined &&
      object.repeatedFixed32 !== null
    ) {
      for (const e of object.repeatedFixed32) {
        message.repeatedFixed32.push(Number(e));
      }
    }
    if (
      object.repeatedFixed64 !== undefined &&
      object.repeatedFixed64 !== null
    ) {
      for (const e of object.repeatedFixed64) {
        message.repeatedFixed64.push(Number(e));
      }
    }
    if (
      object.repeatedSfixed32 !== undefined &&
      object.repeatedSfixed32 !== null
    ) {
      for (const e of object.repeatedSfixed32) {
        message.repeatedSfixed32.push(Number(e));
      }
    }
    if (
      object.repeatedSfixed64 !== undefined &&
      object.repeatedSfixed64 !== null
    ) {
      for (const e of object.repeatedSfixed64) {
        message.repeatedSfixed64.push(Number(e));
      }
    }
    if (object.repeatedFloat !== undefined && object.repeatedFloat !== null) {
      for (const e of object.repeatedFloat) {
        message.repeatedFloat.push(Number(e));
      }
    }
    if (object.repeatedDouble !== undefined && object.repeatedDouble !== null) {
      for (const e of object.repeatedDouble) {
        message.repeatedDouble.push(Number(e));
      }
    }
    if (object.repeatedBool !== undefined && object.repeatedBool !== null) {
      for (const e of object.repeatedBool) {
        message.repeatedBool.push(Boolean(e));
      }
    }
    if (object.repeatedString !== undefined && object.repeatedString !== null) {
      for (const e of object.repeatedString) {
        message.repeatedString.push(String(e));
      }
    }
    if (object.repeatedBytes !== undefined && object.repeatedBytes !== null) {
      for (const e of object.repeatedBytes) {
        message.repeatedBytes.push(bytesFromBase64(e));
      }
    }
    if (
      object.repeatedNestedMessage !== undefined &&
      object.repeatedNestedMessage !== null
    ) {
      for (const e of object.repeatedNestedMessage) {
        message.repeatedNestedMessage.push(
          TestAllTypes_NestedMessage.fromJSON(e)
        );
      }
    }
    if (
      object.repeatedNestedEnum !== undefined &&
      object.repeatedNestedEnum !== null
    ) {
      for (const e of object.repeatedNestedEnum) {
        message.repeatedNestedEnum.push(testAllTypes_NestedEnumFromJSON(e));
      }
    }
    if (
      object.repeatedStringPiece !== undefined &&
      object.repeatedStringPiece !== null
    ) {
      for (const e of object.repeatedStringPiece) {
        message.repeatedStringPiece.push(String(e));
      }
    }
    if (object.repeatedCord !== undefined && object.repeatedCord !== null) {
      for (const e of object.repeatedCord) {
        message.repeatedCord.push(String(e));
      }
    }
    if (
      object.repeatedLazyMessage !== undefined &&
      object.repeatedLazyMessage !== null
    ) {
      for (const e of object.repeatedLazyMessage) {
        message.repeatedLazyMessage.push(
          TestAllTypes_NestedMessage.fromJSON(e)
        );
      }
    }
    if (object.repeatedAny !== undefined && object.repeatedAny !== null) {
      for (const e of object.repeatedAny) {
        message.repeatedAny.push(Any.fromJSON(e));
      }
    }
    if (
      object.repeatedDuration !== undefined &&
      object.repeatedDuration !== null
    ) {
      for (const e of object.repeatedDuration) {
        message.repeatedDuration.push(Duration.fromJSON(e));
      }
    }
    if (
      object.repeatedTimestamp !== undefined &&
      object.repeatedTimestamp !== null
    ) {
      for (const e of object.repeatedTimestamp) {
        message.repeatedTimestamp.push(fromJsonTimestamp(e));
      }
    }
    if (object.repeatedStruct !== undefined && object.repeatedStruct !== null) {
      for (const e of object.repeatedStruct) {
        message.repeatedStruct.push(Struct.fromJSON(e));
      }
    }
    if (object.repeatedValue !== undefined && object.repeatedValue !== null) {
      for (const e of object.repeatedValue) {
        message.repeatedValue.push(Value.fromJSON(e));
      }
    }
    if (
      object.repeatedInt64Wrapper !== undefined &&
      object.repeatedInt64Wrapper !== null
    ) {
      for (const e of object.repeatedInt64Wrapper) {
        message.repeatedInt64Wrapper.push(Number(e));
      }
    }
    if (
      object.repeatedInt32Wrapper !== undefined &&
      object.repeatedInt32Wrapper !== null
    ) {
      for (const e of object.repeatedInt32Wrapper) {
        message.repeatedInt32Wrapper.push(Number(e));
      }
    }
    if (
      object.repeatedDoubleWrapper !== undefined &&
      object.repeatedDoubleWrapper !== null
    ) {
      for (const e of object.repeatedDoubleWrapper) {
        message.repeatedDoubleWrapper.push(Number(e));
      }
    }
    if (
      object.repeatedFloatWrapper !== undefined &&
      object.repeatedFloatWrapper !== null
    ) {
      for (const e of object.repeatedFloatWrapper) {
        message.repeatedFloatWrapper.push(Number(e));
      }
    }
    if (
      object.repeatedUint64Wrapper !== undefined &&
      object.repeatedUint64Wrapper !== null
    ) {
      for (const e of object.repeatedUint64Wrapper) {
        message.repeatedUint64Wrapper.push(Number(e));
      }
    }
    if (
      object.repeatedUint32Wrapper !== undefined &&
      object.repeatedUint32Wrapper !== null
    ) {
      for (const e of object.repeatedUint32Wrapper) {
        message.repeatedUint32Wrapper.push(Number(e));
      }
    }
    if (
      object.repeatedStringWrapper !== undefined &&
      object.repeatedStringWrapper !== null
    ) {
      for (const e of object.repeatedStringWrapper) {
        message.repeatedStringWrapper.push(String(e));
      }
    }
    if (
      object.repeatedBoolWrapper !== undefined &&
      object.repeatedBoolWrapper !== null
    ) {
      for (const e of object.repeatedBoolWrapper) {
        message.repeatedBoolWrapper.push(Boolean(e));
      }
    }
    if (
      object.repeatedBytesWrapper !== undefined &&
      object.repeatedBytesWrapper !== null
    ) {
      for (const e of object.repeatedBytesWrapper) {
        message.repeatedBytesWrapper.push(new Uint8Array(e));
      }
    }
    if (
      object.repeatedListValue !== undefined &&
      object.repeatedListValue !== null
    ) {
      for (const e of object.repeatedListValue) {
        message.repeatedListValue.push(ListValue.fromJSON(e));
      }
    }
    if (
      object.repeatedNullValue !== undefined &&
      object.repeatedNullValue !== null
    ) {
      for (const e of object.repeatedNullValue) {
        message.repeatedNullValue.push(nullValueFromJSON(e));
      }
    }
    if (
      object.mapInt64NestedType !== undefined &&
      object.mapInt64NestedType !== null
    ) {
      Object.entries(object.mapInt64NestedType).forEach(([key, value]) => {
        message.mapInt64NestedType[Number(key)] = NestedTestAllTypes.fromJSON(
          value
        );
      });
    }
    if (object.mapBoolBool !== undefined && object.mapBoolBool !== null) {
      Object.entries(object.mapBoolBool).forEach(([key, value]) => {
        message.mapBoolBool[Number(key)] = Boolean(value);
      });
    }
    if (object.mapBoolString !== undefined && object.mapBoolString !== null) {
      Object.entries(object.mapBoolString).forEach(([key, value]) => {
        message.mapBoolString[Number(key)] = String(value);
      });
    }
    if (object.mapBoolBytes !== undefined && object.mapBoolBytes !== null) {
      Object.entries(object.mapBoolBytes).forEach(([key, value]) => {
        message.mapBoolBytes[Number(key)] = bytesFromBase64(value as string);
      });
    }
    if (object.mapBoolInt32 !== undefined && object.mapBoolInt32 !== null) {
      Object.entries(object.mapBoolInt32).forEach(([key, value]) => {
        message.mapBoolInt32[Number(key)] = Number(value);
      });
    }
    if (object.mapBoolInt64 !== undefined && object.mapBoolInt64 !== null) {
      Object.entries(object.mapBoolInt64).forEach(([key, value]) => {
        message.mapBoolInt64[Number(key)] = Number(value);
      });
    }
    if (object.mapBoolUint32 !== undefined && object.mapBoolUint32 !== null) {
      Object.entries(object.mapBoolUint32).forEach(([key, value]) => {
        message.mapBoolUint32[Number(key)] = Number(value);
      });
    }
    if (object.mapBoolUint64 !== undefined && object.mapBoolUint64 !== null) {
      Object.entries(object.mapBoolUint64).forEach(([key, value]) => {
        message.mapBoolUint64[Number(key)] = Number(value);
      });
    }
    if (object.mapBoolFloat !== undefined && object.mapBoolFloat !== null) {
      Object.entries(object.mapBoolFloat).forEach(([key, value]) => {
        message.mapBoolFloat[Number(key)] = Number(value);
      });
    }
    if (object.mapBoolDouble !== undefined && object.mapBoolDouble !== null) {
      Object.entries(object.mapBoolDouble).forEach(([key, value]) => {
        message.mapBoolDouble[Number(key)] = Number(value);
      });
    }
    if (object.mapBoolEnum !== undefined && object.mapBoolEnum !== null) {
      Object.entries(object.mapBoolEnum).forEach(([key, value]) => {
        message.mapBoolEnum[Number(key)] = value as number;
      });
    }
    if (object.mapBoolMessage !== undefined && object.mapBoolMessage !== null) {
      Object.entries(object.mapBoolMessage).forEach(([key, value]) => {
        message.mapBoolMessage[
          Number(key)
        ] = TestAllTypes_NestedMessage.fromJSON(value);
      });
    }
    if (
      object.mapBoolDuration !== undefined &&
      object.mapBoolDuration !== null
    ) {
      Object.entries(object.mapBoolDuration).forEach(([key, value]) => {
        message.mapBoolDuration[Number(key)] = Duration.fromJSON(value);
      });
    }
    if (
      object.mapBoolTimestamp !== undefined &&
      object.mapBoolTimestamp !== null
    ) {
      Object.entries(object.mapBoolTimestamp).forEach(([key, value]) => {
        message.mapBoolTimestamp[Number(key)] = fromJsonTimestamp(value);
      });
    }
    if (
      object.mapBoolNullValue !== undefined &&
      object.mapBoolNullValue !== null
    ) {
      Object.entries(object.mapBoolNullValue).forEach(([key, value]) => {
        message.mapBoolNullValue[Number(key)] = value as number;
      });
    }
    if (object.mapBoolAny !== undefined && object.mapBoolAny !== null) {
      Object.entries(object.mapBoolAny).forEach(([key, value]) => {
        message.mapBoolAny[Number(key)] = Any.fromJSON(value);
      });
    }
    if (object.mapBoolStruct !== undefined && object.mapBoolStruct !== null) {
      Object.entries(object.mapBoolStruct).forEach(([key, value]) => {
        message.mapBoolStruct[Number(key)] = Struct.fromJSON(value);
      });
    }
    if (object.mapBoolValue !== undefined && object.mapBoolValue !== null) {
      Object.entries(object.mapBoolValue).forEach(([key, value]) => {
        message.mapBoolValue[Number(key)] = Value.fromJSON(value);
      });
    }
    if (
      object.mapBoolListValue !== undefined &&
      object.mapBoolListValue !== null
    ) {
      Object.entries(object.mapBoolListValue).forEach(([key, value]) => {
        message.mapBoolListValue[Number(key)] = ListValue.fromJSON(value);
      });
    }
    if (
      object.mapBoolInt64Wrapper !== undefined &&
      object.mapBoolInt64Wrapper !== null
    ) {
      Object.entries(object.mapBoolInt64Wrapper).forEach(([key, value]) => {
        message.mapBoolInt64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolInt32Wrapper !== undefined &&
      object.mapBoolInt32Wrapper !== null
    ) {
      Object.entries(object.mapBoolInt32Wrapper).forEach(([key, value]) => {
        message.mapBoolInt32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolDoubleWrapper !== undefined &&
      object.mapBoolDoubleWrapper !== null
    ) {
      Object.entries(object.mapBoolDoubleWrapper).forEach(([key, value]) => {
        message.mapBoolDoubleWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolFloatWrapper !== undefined &&
      object.mapBoolFloatWrapper !== null
    ) {
      Object.entries(object.mapBoolFloatWrapper).forEach(([key, value]) => {
        message.mapBoolFloatWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolUint64Wrapper !== undefined &&
      object.mapBoolUint64Wrapper !== null
    ) {
      Object.entries(object.mapBoolUint64Wrapper).forEach(([key, value]) => {
        message.mapBoolUint64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolUint32Wrapper !== undefined &&
      object.mapBoolUint32Wrapper !== null
    ) {
      Object.entries(object.mapBoolUint32Wrapper).forEach(([key, value]) => {
        message.mapBoolUint32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolStringWrapper !== undefined &&
      object.mapBoolStringWrapper !== null
    ) {
      Object.entries(object.mapBoolStringWrapper).forEach(([key, value]) => {
        message.mapBoolStringWrapper[Number(key)] =
          string | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolBoolWrapper !== undefined &&
      object.mapBoolBoolWrapper !== null
    ) {
      Object.entries(object.mapBoolBoolWrapper).forEach(([key, value]) => {
        message.mapBoolBoolWrapper[Number(key)] =
          boolean | undefined.fromJSON(value);
      });
    }
    if (
      object.mapBoolBytesWrapper !== undefined &&
      object.mapBoolBytesWrapper !== null
    ) {
      Object.entries(object.mapBoolBytesWrapper).forEach(([key, value]) => {
        message.mapBoolBytesWrapper[Number(key)] =
          Uint8Array | undefined.fromJSON(value);
      });
    }
    if (object.mapInt32Bool !== undefined && object.mapInt32Bool !== null) {
      Object.entries(object.mapInt32Bool).forEach(([key, value]) => {
        message.mapInt32Bool[Number(key)] = Boolean(value);
      });
    }
    if (object.mapInt32String !== undefined && object.mapInt32String !== null) {
      Object.entries(object.mapInt32String).forEach(([key, value]) => {
        message.mapInt32String[Number(key)] = String(value);
      });
    }
    if (object.mapInt32Bytes !== undefined && object.mapInt32Bytes !== null) {
      Object.entries(object.mapInt32Bytes).forEach(([key, value]) => {
        message.mapInt32Bytes[Number(key)] = bytesFromBase64(value as string);
      });
    }
    if (object.mapInt32Int32 !== undefined && object.mapInt32Int32 !== null) {
      Object.entries(object.mapInt32Int32).forEach(([key, value]) => {
        message.mapInt32Int32[Number(key)] = Number(value);
      });
    }
    if (object.mapInt32Int64 !== undefined && object.mapInt32Int64 !== null) {
      Object.entries(object.mapInt32Int64).forEach(([key, value]) => {
        message.mapInt32Int64[Number(key)] = Number(value);
      });
    }
    if (object.mapInt32Uint32 !== undefined && object.mapInt32Uint32 !== null) {
      Object.entries(object.mapInt32Uint32).forEach(([key, value]) => {
        message.mapInt32Uint32[Number(key)] = Number(value);
      });
    }
    if (object.mapInt32Uint64 !== undefined && object.mapInt32Uint64 !== null) {
      Object.entries(object.mapInt32Uint64).forEach(([key, value]) => {
        message.mapInt32Uint64[Number(key)] = Number(value);
      });
    }
    if (object.mapInt32Float !== undefined && object.mapInt32Float !== null) {
      Object.entries(object.mapInt32Float).forEach(([key, value]) => {
        message.mapInt32Float[Number(key)] = Number(value);
      });
    }
    if (object.mapInt32Double !== undefined && object.mapInt32Double !== null) {
      Object.entries(object.mapInt32Double).forEach(([key, value]) => {
        message.mapInt32Double[Number(key)] = Number(value);
      });
    }
    if (object.mapInt32Enum !== undefined && object.mapInt32Enum !== null) {
      Object.entries(object.mapInt32Enum).forEach(([key, value]) => {
        message.mapInt32Enum[Number(key)] = value as number;
      });
    }
    if (
      object.mapInt32Message !== undefined &&
      object.mapInt32Message !== null
    ) {
      Object.entries(object.mapInt32Message).forEach(([key, value]) => {
        message.mapInt32Message[
          Number(key)
        ] = TestAllTypes_NestedMessage.fromJSON(value);
      });
    }
    if (
      object.mapInt32Duration !== undefined &&
      object.mapInt32Duration !== null
    ) {
      Object.entries(object.mapInt32Duration).forEach(([key, value]) => {
        message.mapInt32Duration[Number(key)] = Duration.fromJSON(value);
      });
    }
    if (
      object.mapInt32Timestamp !== undefined &&
      object.mapInt32Timestamp !== null
    ) {
      Object.entries(object.mapInt32Timestamp).forEach(([key, value]) => {
        message.mapInt32Timestamp[Number(key)] = fromJsonTimestamp(value);
      });
    }
    if (
      object.mapInt32NullValue !== undefined &&
      object.mapInt32NullValue !== null
    ) {
      Object.entries(object.mapInt32NullValue).forEach(([key, value]) => {
        message.mapInt32NullValue[Number(key)] = value as number;
      });
    }
    if (object.mapInt32Any !== undefined && object.mapInt32Any !== null) {
      Object.entries(object.mapInt32Any).forEach(([key, value]) => {
        message.mapInt32Any[Number(key)] = Any.fromJSON(value);
      });
    }
    if (object.mapInt32Struct !== undefined && object.mapInt32Struct !== null) {
      Object.entries(object.mapInt32Struct).forEach(([key, value]) => {
        message.mapInt32Struct[Number(key)] = Struct.fromJSON(value);
      });
    }
    if (object.mapInt32Value !== undefined && object.mapInt32Value !== null) {
      Object.entries(object.mapInt32Value).forEach(([key, value]) => {
        message.mapInt32Value[Number(key)] = Value.fromJSON(value);
      });
    }
    if (
      object.mapInt32ListValue !== undefined &&
      object.mapInt32ListValue !== null
    ) {
      Object.entries(object.mapInt32ListValue).forEach(([key, value]) => {
        message.mapInt32ListValue[Number(key)] = ListValue.fromJSON(value);
      });
    }
    if (
      object.mapInt32Int64Wrapper !== undefined &&
      object.mapInt32Int64Wrapper !== null
    ) {
      Object.entries(object.mapInt32Int64Wrapper).forEach(([key, value]) => {
        message.mapInt32Int64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32Int32Wrapper !== undefined &&
      object.mapInt32Int32Wrapper !== null
    ) {
      Object.entries(object.mapInt32Int32Wrapper).forEach(([key, value]) => {
        message.mapInt32Int32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32DoubleWrapper !== undefined &&
      object.mapInt32DoubleWrapper !== null
    ) {
      Object.entries(object.mapInt32DoubleWrapper).forEach(([key, value]) => {
        message.mapInt32DoubleWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32FloatWrapper !== undefined &&
      object.mapInt32FloatWrapper !== null
    ) {
      Object.entries(object.mapInt32FloatWrapper).forEach(([key, value]) => {
        message.mapInt32FloatWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32Uint64Wrapper !== undefined &&
      object.mapInt32Uint64Wrapper !== null
    ) {
      Object.entries(object.mapInt32Uint64Wrapper).forEach(([key, value]) => {
        message.mapInt32Uint64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32Uint32Wrapper !== undefined &&
      object.mapInt32Uint32Wrapper !== null
    ) {
      Object.entries(object.mapInt32Uint32Wrapper).forEach(([key, value]) => {
        message.mapInt32Uint32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32StringWrapper !== undefined &&
      object.mapInt32StringWrapper !== null
    ) {
      Object.entries(object.mapInt32StringWrapper).forEach(([key, value]) => {
        message.mapInt32StringWrapper[Number(key)] =
          string | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32BoolWrapper !== undefined &&
      object.mapInt32BoolWrapper !== null
    ) {
      Object.entries(object.mapInt32BoolWrapper).forEach(([key, value]) => {
        message.mapInt32BoolWrapper[Number(key)] =
          boolean | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt32BytesWrapper !== undefined &&
      object.mapInt32BytesWrapper !== null
    ) {
      Object.entries(object.mapInt32BytesWrapper).forEach(([key, value]) => {
        message.mapInt32BytesWrapper[Number(key)] =
          Uint8Array | undefined.fromJSON(value);
      });
    }
    if (object.mapInt64Bool !== undefined && object.mapInt64Bool !== null) {
      Object.entries(object.mapInt64Bool).forEach(([key, value]) => {
        message.mapInt64Bool[Number(key)] = Boolean(value);
      });
    }
    if (object.mapInt64String !== undefined && object.mapInt64String !== null) {
      Object.entries(object.mapInt64String).forEach(([key, value]) => {
        message.mapInt64String[Number(key)] = String(value);
      });
    }
    if (object.mapInt64Bytes !== undefined && object.mapInt64Bytes !== null) {
      Object.entries(object.mapInt64Bytes).forEach(([key, value]) => {
        message.mapInt64Bytes[Number(key)] = bytesFromBase64(value as string);
      });
    }
    if (object.mapInt64Int32 !== undefined && object.mapInt64Int32 !== null) {
      Object.entries(object.mapInt64Int32).forEach(([key, value]) => {
        message.mapInt64Int32[Number(key)] = Number(value);
      });
    }
    if (object.mapInt64Int64 !== undefined && object.mapInt64Int64 !== null) {
      Object.entries(object.mapInt64Int64).forEach(([key, value]) => {
        message.mapInt64Int64[Number(key)] = Number(value);
      });
    }
    if (object.mapInt64Uint32 !== undefined && object.mapInt64Uint32 !== null) {
      Object.entries(object.mapInt64Uint32).forEach(([key, value]) => {
        message.mapInt64Uint32[Number(key)] = Number(value);
      });
    }
    if (object.mapInt64Uint64 !== undefined && object.mapInt64Uint64 !== null) {
      Object.entries(object.mapInt64Uint64).forEach(([key, value]) => {
        message.mapInt64Uint64[Number(key)] = Number(value);
      });
    }
    if (object.mapInt64Float !== undefined && object.mapInt64Float !== null) {
      Object.entries(object.mapInt64Float).forEach(([key, value]) => {
        message.mapInt64Float[Number(key)] = Number(value);
      });
    }
    if (object.mapInt64Double !== undefined && object.mapInt64Double !== null) {
      Object.entries(object.mapInt64Double).forEach(([key, value]) => {
        message.mapInt64Double[Number(key)] = Number(value);
      });
    }
    if (object.mapInt64Enum !== undefined && object.mapInt64Enum !== null) {
      Object.entries(object.mapInt64Enum).forEach(([key, value]) => {
        message.mapInt64Enum[Number(key)] = value as number;
      });
    }
    if (
      object.mapInt64Message !== undefined &&
      object.mapInt64Message !== null
    ) {
      Object.entries(object.mapInt64Message).forEach(([key, value]) => {
        message.mapInt64Message[
          Number(key)
        ] = TestAllTypes_NestedMessage.fromJSON(value);
      });
    }
    if (
      object.mapInt64Duration !== undefined &&
      object.mapInt64Duration !== null
    ) {
      Object.entries(object.mapInt64Duration).forEach(([key, value]) => {
        message.mapInt64Duration[Number(key)] = Duration.fromJSON(value);
      });
    }
    if (
      object.mapInt64Timestamp !== undefined &&
      object.mapInt64Timestamp !== null
    ) {
      Object.entries(object.mapInt64Timestamp).forEach(([key, value]) => {
        message.mapInt64Timestamp[Number(key)] = fromJsonTimestamp(value);
      });
    }
    if (
      object.mapInt64NullValue !== undefined &&
      object.mapInt64NullValue !== null
    ) {
      Object.entries(object.mapInt64NullValue).forEach(([key, value]) => {
        message.mapInt64NullValue[Number(key)] = value as number;
      });
    }
    if (object.mapInt64Any !== undefined && object.mapInt64Any !== null) {
      Object.entries(object.mapInt64Any).forEach(([key, value]) => {
        message.mapInt64Any[Number(key)] = Any.fromJSON(value);
      });
    }
    if (object.mapInt64Struct !== undefined && object.mapInt64Struct !== null) {
      Object.entries(object.mapInt64Struct).forEach(([key, value]) => {
        message.mapInt64Struct[Number(key)] = Struct.fromJSON(value);
      });
    }
    if (object.mapInt64Value !== undefined && object.mapInt64Value !== null) {
      Object.entries(object.mapInt64Value).forEach(([key, value]) => {
        message.mapInt64Value[Number(key)] = Value.fromJSON(value);
      });
    }
    if (
      object.mapInt64ListValue !== undefined &&
      object.mapInt64ListValue !== null
    ) {
      Object.entries(object.mapInt64ListValue).forEach(([key, value]) => {
        message.mapInt64ListValue[Number(key)] = ListValue.fromJSON(value);
      });
    }
    if (
      object.mapInt64Int64Wrapper !== undefined &&
      object.mapInt64Int64Wrapper !== null
    ) {
      Object.entries(object.mapInt64Int64Wrapper).forEach(([key, value]) => {
        message.mapInt64Int64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64Int32Wrapper !== undefined &&
      object.mapInt64Int32Wrapper !== null
    ) {
      Object.entries(object.mapInt64Int32Wrapper).forEach(([key, value]) => {
        message.mapInt64Int32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64DoubleWrapper !== undefined &&
      object.mapInt64DoubleWrapper !== null
    ) {
      Object.entries(object.mapInt64DoubleWrapper).forEach(([key, value]) => {
        message.mapInt64DoubleWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64FloatWrapper !== undefined &&
      object.mapInt64FloatWrapper !== null
    ) {
      Object.entries(object.mapInt64FloatWrapper).forEach(([key, value]) => {
        message.mapInt64FloatWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64Uint64Wrapper !== undefined &&
      object.mapInt64Uint64Wrapper !== null
    ) {
      Object.entries(object.mapInt64Uint64Wrapper).forEach(([key, value]) => {
        message.mapInt64Uint64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64Uint32Wrapper !== undefined &&
      object.mapInt64Uint32Wrapper !== null
    ) {
      Object.entries(object.mapInt64Uint32Wrapper).forEach(([key, value]) => {
        message.mapInt64Uint32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64StringWrapper !== undefined &&
      object.mapInt64StringWrapper !== null
    ) {
      Object.entries(object.mapInt64StringWrapper).forEach(([key, value]) => {
        message.mapInt64StringWrapper[Number(key)] =
          string | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64BoolWrapper !== undefined &&
      object.mapInt64BoolWrapper !== null
    ) {
      Object.entries(object.mapInt64BoolWrapper).forEach(([key, value]) => {
        message.mapInt64BoolWrapper[Number(key)] =
          boolean | undefined.fromJSON(value);
      });
    }
    if (
      object.mapInt64BytesWrapper !== undefined &&
      object.mapInt64BytesWrapper !== null
    ) {
      Object.entries(object.mapInt64BytesWrapper).forEach(([key, value]) => {
        message.mapInt64BytesWrapper[Number(key)] =
          Uint8Array | undefined.fromJSON(value);
      });
    }
    if (object.mapUint32Bool !== undefined && object.mapUint32Bool !== null) {
      Object.entries(object.mapUint32Bool).forEach(([key, value]) => {
        message.mapUint32Bool[Number(key)] = Boolean(value);
      });
    }
    if (
      object.mapUint32String !== undefined &&
      object.mapUint32String !== null
    ) {
      Object.entries(object.mapUint32String).forEach(([key, value]) => {
        message.mapUint32String[Number(key)] = String(value);
      });
    }
    if (object.mapUint32Bytes !== undefined && object.mapUint32Bytes !== null) {
      Object.entries(object.mapUint32Bytes).forEach(([key, value]) => {
        message.mapUint32Bytes[Number(key)] = bytesFromBase64(value as string);
      });
    }
    if (object.mapUint32Int32 !== undefined && object.mapUint32Int32 !== null) {
      Object.entries(object.mapUint32Int32).forEach(([key, value]) => {
        message.mapUint32Int32[Number(key)] = Number(value);
      });
    }
    if (object.mapUint32Int64 !== undefined && object.mapUint32Int64 !== null) {
      Object.entries(object.mapUint32Int64).forEach(([key, value]) => {
        message.mapUint32Int64[Number(key)] = Number(value);
      });
    }
    if (
      object.mapUint32Uint32 !== undefined &&
      object.mapUint32Uint32 !== null
    ) {
      Object.entries(object.mapUint32Uint32).forEach(([key, value]) => {
        message.mapUint32Uint32[Number(key)] = Number(value);
      });
    }
    if (
      object.mapUint32Uint64 !== undefined &&
      object.mapUint32Uint64 !== null
    ) {
      Object.entries(object.mapUint32Uint64).forEach(([key, value]) => {
        message.mapUint32Uint64[Number(key)] = Number(value);
      });
    }
    if (object.mapUint32Float !== undefined && object.mapUint32Float !== null) {
      Object.entries(object.mapUint32Float).forEach(([key, value]) => {
        message.mapUint32Float[Number(key)] = Number(value);
      });
    }
    if (
      object.mapUint32Double !== undefined &&
      object.mapUint32Double !== null
    ) {
      Object.entries(object.mapUint32Double).forEach(([key, value]) => {
        message.mapUint32Double[Number(key)] = Number(value);
      });
    }
    if (object.mapUint32Enum !== undefined && object.mapUint32Enum !== null) {
      Object.entries(object.mapUint32Enum).forEach(([key, value]) => {
        message.mapUint32Enum[Number(key)] = value as number;
      });
    }
    if (
      object.mapUint32Message !== undefined &&
      object.mapUint32Message !== null
    ) {
      Object.entries(object.mapUint32Message).forEach(([key, value]) => {
        message.mapUint32Message[
          Number(key)
        ] = TestAllTypes_NestedMessage.fromJSON(value);
      });
    }
    if (
      object.mapUint32Duration !== undefined &&
      object.mapUint32Duration !== null
    ) {
      Object.entries(object.mapUint32Duration).forEach(([key, value]) => {
        message.mapUint32Duration[Number(key)] = Duration.fromJSON(value);
      });
    }
    if (
      object.mapUint32Timestamp !== undefined &&
      object.mapUint32Timestamp !== null
    ) {
      Object.entries(object.mapUint32Timestamp).forEach(([key, value]) => {
        message.mapUint32Timestamp[Number(key)] = fromJsonTimestamp(value);
      });
    }
    if (
      object.mapUint32NullValue !== undefined &&
      object.mapUint32NullValue !== null
    ) {
      Object.entries(object.mapUint32NullValue).forEach(([key, value]) => {
        message.mapUint32NullValue[Number(key)] = value as number;
      });
    }
    if (object.mapUint32Any !== undefined && object.mapUint32Any !== null) {
      Object.entries(object.mapUint32Any).forEach(([key, value]) => {
        message.mapUint32Any[Number(key)] = Any.fromJSON(value);
      });
    }
    if (
      object.mapUint32Struct !== undefined &&
      object.mapUint32Struct !== null
    ) {
      Object.entries(object.mapUint32Struct).forEach(([key, value]) => {
        message.mapUint32Struct[Number(key)] = Struct.fromJSON(value);
      });
    }
    if (object.mapUint32Value !== undefined && object.mapUint32Value !== null) {
      Object.entries(object.mapUint32Value).forEach(([key, value]) => {
        message.mapUint32Value[Number(key)] = Value.fromJSON(value);
      });
    }
    if (
      object.mapUint32ListValue !== undefined &&
      object.mapUint32ListValue !== null
    ) {
      Object.entries(object.mapUint32ListValue).forEach(([key, value]) => {
        message.mapUint32ListValue[Number(key)] = ListValue.fromJSON(value);
      });
    }
    if (
      object.mapUint32Int64Wrapper !== undefined &&
      object.mapUint32Int64Wrapper !== null
    ) {
      Object.entries(object.mapUint32Int64Wrapper).forEach(([key, value]) => {
        message.mapUint32Int64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32Int32Wrapper !== undefined &&
      object.mapUint32Int32Wrapper !== null
    ) {
      Object.entries(object.mapUint32Int32Wrapper).forEach(([key, value]) => {
        message.mapUint32Int32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32DoubleWrapper !== undefined &&
      object.mapUint32DoubleWrapper !== null
    ) {
      Object.entries(object.mapUint32DoubleWrapper).forEach(([key, value]) => {
        message.mapUint32DoubleWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32FloatWrapper !== undefined &&
      object.mapUint32FloatWrapper !== null
    ) {
      Object.entries(object.mapUint32FloatWrapper).forEach(([key, value]) => {
        message.mapUint32FloatWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32Uint64Wrapper !== undefined &&
      object.mapUint32Uint64Wrapper !== null
    ) {
      Object.entries(object.mapUint32Uint64Wrapper).forEach(([key, value]) => {
        message.mapUint32Uint64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32Uint32Wrapper !== undefined &&
      object.mapUint32Uint32Wrapper !== null
    ) {
      Object.entries(object.mapUint32Uint32Wrapper).forEach(([key, value]) => {
        message.mapUint32Uint32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32StringWrapper !== undefined &&
      object.mapUint32StringWrapper !== null
    ) {
      Object.entries(object.mapUint32StringWrapper).forEach(([key, value]) => {
        message.mapUint32StringWrapper[Number(key)] =
          string | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32BoolWrapper !== undefined &&
      object.mapUint32BoolWrapper !== null
    ) {
      Object.entries(object.mapUint32BoolWrapper).forEach(([key, value]) => {
        message.mapUint32BoolWrapper[Number(key)] =
          boolean | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint32BytesWrapper !== undefined &&
      object.mapUint32BytesWrapper !== null
    ) {
      Object.entries(object.mapUint32BytesWrapper).forEach(([key, value]) => {
        message.mapUint32BytesWrapper[Number(key)] =
          Uint8Array | undefined.fromJSON(value);
      });
    }
    if (object.mapUint64Bool !== undefined && object.mapUint64Bool !== null) {
      Object.entries(object.mapUint64Bool).forEach(([key, value]) => {
        message.mapUint64Bool[Number(key)] = Boolean(value);
      });
    }
    if (
      object.mapUint64String !== undefined &&
      object.mapUint64String !== null
    ) {
      Object.entries(object.mapUint64String).forEach(([key, value]) => {
        message.mapUint64String[Number(key)] = String(value);
      });
    }
    if (object.mapUint64Bytes !== undefined && object.mapUint64Bytes !== null) {
      Object.entries(object.mapUint64Bytes).forEach(([key, value]) => {
        message.mapUint64Bytes[Number(key)] = bytesFromBase64(value as string);
      });
    }
    if (object.mapUint64Int32 !== undefined && object.mapUint64Int32 !== null) {
      Object.entries(object.mapUint64Int32).forEach(([key, value]) => {
        message.mapUint64Int32[Number(key)] = Number(value);
      });
    }
    if (object.mapUint64Int64 !== undefined && object.mapUint64Int64 !== null) {
      Object.entries(object.mapUint64Int64).forEach(([key, value]) => {
        message.mapUint64Int64[Number(key)] = Number(value);
      });
    }
    if (
      object.mapUint64Uint32 !== undefined &&
      object.mapUint64Uint32 !== null
    ) {
      Object.entries(object.mapUint64Uint32).forEach(([key, value]) => {
        message.mapUint64Uint32[Number(key)] = Number(value);
      });
    }
    if (
      object.mapUint64Uint64 !== undefined &&
      object.mapUint64Uint64 !== null
    ) {
      Object.entries(object.mapUint64Uint64).forEach(([key, value]) => {
        message.mapUint64Uint64[Number(key)] = Number(value);
      });
    }
    if (object.mapUint64Float !== undefined && object.mapUint64Float !== null) {
      Object.entries(object.mapUint64Float).forEach(([key, value]) => {
        message.mapUint64Float[Number(key)] = Number(value);
      });
    }
    if (
      object.mapUint64Double !== undefined &&
      object.mapUint64Double !== null
    ) {
      Object.entries(object.mapUint64Double).forEach(([key, value]) => {
        message.mapUint64Double[Number(key)] = Number(value);
      });
    }
    if (object.mapUint64Enum !== undefined && object.mapUint64Enum !== null) {
      Object.entries(object.mapUint64Enum).forEach(([key, value]) => {
        message.mapUint64Enum[Number(key)] = value as number;
      });
    }
    if (
      object.mapUint64Message !== undefined &&
      object.mapUint64Message !== null
    ) {
      Object.entries(object.mapUint64Message).forEach(([key, value]) => {
        message.mapUint64Message[
          Number(key)
        ] = TestAllTypes_NestedMessage.fromJSON(value);
      });
    }
    if (
      object.mapUint64Duration !== undefined &&
      object.mapUint64Duration !== null
    ) {
      Object.entries(object.mapUint64Duration).forEach(([key, value]) => {
        message.mapUint64Duration[Number(key)] = Duration.fromJSON(value);
      });
    }
    if (
      object.mapUint64Timestamp !== undefined &&
      object.mapUint64Timestamp !== null
    ) {
      Object.entries(object.mapUint64Timestamp).forEach(([key, value]) => {
        message.mapUint64Timestamp[Number(key)] = fromJsonTimestamp(value);
      });
    }
    if (
      object.mapUint64NullValue !== undefined &&
      object.mapUint64NullValue !== null
    ) {
      Object.entries(object.mapUint64NullValue).forEach(([key, value]) => {
        message.mapUint64NullValue[Number(key)] = value as number;
      });
    }
    if (object.mapUint64Any !== undefined && object.mapUint64Any !== null) {
      Object.entries(object.mapUint64Any).forEach(([key, value]) => {
        message.mapUint64Any[Number(key)] = Any.fromJSON(value);
      });
    }
    if (
      object.mapUint64Struct !== undefined &&
      object.mapUint64Struct !== null
    ) {
      Object.entries(object.mapUint64Struct).forEach(([key, value]) => {
        message.mapUint64Struct[Number(key)] = Struct.fromJSON(value);
      });
    }
    if (object.mapUint64Value !== undefined && object.mapUint64Value !== null) {
      Object.entries(object.mapUint64Value).forEach(([key, value]) => {
        message.mapUint64Value[Number(key)] = Value.fromJSON(value);
      });
    }
    if (
      object.mapUint64ListValue !== undefined &&
      object.mapUint64ListValue !== null
    ) {
      Object.entries(object.mapUint64ListValue).forEach(([key, value]) => {
        message.mapUint64ListValue[Number(key)] = ListValue.fromJSON(value);
      });
    }
    if (
      object.mapUint64Int64Wrapper !== undefined &&
      object.mapUint64Int64Wrapper !== null
    ) {
      Object.entries(object.mapUint64Int64Wrapper).forEach(([key, value]) => {
        message.mapUint64Int64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64Int32Wrapper !== undefined &&
      object.mapUint64Int32Wrapper !== null
    ) {
      Object.entries(object.mapUint64Int32Wrapper).forEach(([key, value]) => {
        message.mapUint64Int32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64DoubleWrapper !== undefined &&
      object.mapUint64DoubleWrapper !== null
    ) {
      Object.entries(object.mapUint64DoubleWrapper).forEach(([key, value]) => {
        message.mapUint64DoubleWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64FloatWrapper !== undefined &&
      object.mapUint64FloatWrapper !== null
    ) {
      Object.entries(object.mapUint64FloatWrapper).forEach(([key, value]) => {
        message.mapUint64FloatWrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64Uint64Wrapper !== undefined &&
      object.mapUint64Uint64Wrapper !== null
    ) {
      Object.entries(object.mapUint64Uint64Wrapper).forEach(([key, value]) => {
        message.mapUint64Uint64Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64Uint32Wrapper !== undefined &&
      object.mapUint64Uint32Wrapper !== null
    ) {
      Object.entries(object.mapUint64Uint32Wrapper).forEach(([key, value]) => {
        message.mapUint64Uint32Wrapper[Number(key)] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64StringWrapper !== undefined &&
      object.mapUint64StringWrapper !== null
    ) {
      Object.entries(object.mapUint64StringWrapper).forEach(([key, value]) => {
        message.mapUint64StringWrapper[Number(key)] =
          string | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64BoolWrapper !== undefined &&
      object.mapUint64BoolWrapper !== null
    ) {
      Object.entries(object.mapUint64BoolWrapper).forEach(([key, value]) => {
        message.mapUint64BoolWrapper[Number(key)] =
          boolean | undefined.fromJSON(value);
      });
    }
    if (
      object.mapUint64BytesWrapper !== undefined &&
      object.mapUint64BytesWrapper !== null
    ) {
      Object.entries(object.mapUint64BytesWrapper).forEach(([key, value]) => {
        message.mapUint64BytesWrapper[Number(key)] =
          Uint8Array | undefined.fromJSON(value);
      });
    }
    if (object.mapStringBool !== undefined && object.mapStringBool !== null) {
      Object.entries(object.mapStringBool).forEach(([key, value]) => {
        message.mapStringBool[key] = Boolean(value);
      });
    }
    if (
      object.mapStringString !== undefined &&
      object.mapStringString !== null
    ) {
      Object.entries(object.mapStringString).forEach(([key, value]) => {
        message.mapStringString[key] = String(value);
      });
    }
    if (object.mapStringBytes !== undefined && object.mapStringBytes !== null) {
      Object.entries(object.mapStringBytes).forEach(([key, value]) => {
        message.mapStringBytes[key] = bytesFromBase64(value as string);
      });
    }
    if (object.mapStringInt32 !== undefined && object.mapStringInt32 !== null) {
      Object.entries(object.mapStringInt32).forEach(([key, value]) => {
        message.mapStringInt32[key] = Number(value);
      });
    }
    if (object.mapStringInt64 !== undefined && object.mapStringInt64 !== null) {
      Object.entries(object.mapStringInt64).forEach(([key, value]) => {
        message.mapStringInt64[key] = Number(value);
      });
    }
    if (
      object.mapStringUint32 !== undefined &&
      object.mapStringUint32 !== null
    ) {
      Object.entries(object.mapStringUint32).forEach(([key, value]) => {
        message.mapStringUint32[key] = Number(value);
      });
    }
    if (
      object.mapStringUint64 !== undefined &&
      object.mapStringUint64 !== null
    ) {
      Object.entries(object.mapStringUint64).forEach(([key, value]) => {
        message.mapStringUint64[key] = Number(value);
      });
    }
    if (object.mapStringFloat !== undefined && object.mapStringFloat !== null) {
      Object.entries(object.mapStringFloat).forEach(([key, value]) => {
        message.mapStringFloat[key] = Number(value);
      });
    }
    if (
      object.mapStringDouble !== undefined &&
      object.mapStringDouble !== null
    ) {
      Object.entries(object.mapStringDouble).forEach(([key, value]) => {
        message.mapStringDouble[key] = Number(value);
      });
    }
    if (object.mapStringEnum !== undefined && object.mapStringEnum !== null) {
      Object.entries(object.mapStringEnum).forEach(([key, value]) => {
        message.mapStringEnum[key] = value as number;
      });
    }
    if (
      object.mapStringMessage !== undefined &&
      object.mapStringMessage !== null
    ) {
      Object.entries(object.mapStringMessage).forEach(([key, value]) => {
        message.mapStringMessage[key] = TestAllTypes_NestedMessage.fromJSON(
          value
        );
      });
    }
    if (
      object.mapStringDuration !== undefined &&
      object.mapStringDuration !== null
    ) {
      Object.entries(object.mapStringDuration).forEach(([key, value]) => {
        message.mapStringDuration[key] = Duration.fromJSON(value);
      });
    }
    if (
      object.mapStringTimestamp !== undefined &&
      object.mapStringTimestamp !== null
    ) {
      Object.entries(object.mapStringTimestamp).forEach(([key, value]) => {
        message.mapStringTimestamp[key] = fromJsonTimestamp(value);
      });
    }
    if (
      object.mapStringNullValue !== undefined &&
      object.mapStringNullValue !== null
    ) {
      Object.entries(object.mapStringNullValue).forEach(([key, value]) => {
        message.mapStringNullValue[key] = value as number;
      });
    }
    if (object.mapStringAny !== undefined && object.mapStringAny !== null) {
      Object.entries(object.mapStringAny).forEach(([key, value]) => {
        message.mapStringAny[key] = Any.fromJSON(value);
      });
    }
    if (
      object.mapStringStruct !== undefined &&
      object.mapStringStruct !== null
    ) {
      Object.entries(object.mapStringStruct).forEach(([key, value]) => {
        message.mapStringStruct[key] = Struct.fromJSON(value);
      });
    }
    if (object.mapStringValue !== undefined && object.mapStringValue !== null) {
      Object.entries(object.mapStringValue).forEach(([key, value]) => {
        message.mapStringValue[key] = Value.fromJSON(value);
      });
    }
    if (
      object.mapStringListValue !== undefined &&
      object.mapStringListValue !== null
    ) {
      Object.entries(object.mapStringListValue).forEach(([key, value]) => {
        message.mapStringListValue[key] = ListValue.fromJSON(value);
      });
    }
    if (
      object.mapStringInt64Wrapper !== undefined &&
      object.mapStringInt64Wrapper !== null
    ) {
      Object.entries(object.mapStringInt64Wrapper).forEach(([key, value]) => {
        message.mapStringInt64Wrapper[key] = number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringInt32Wrapper !== undefined &&
      object.mapStringInt32Wrapper !== null
    ) {
      Object.entries(object.mapStringInt32Wrapper).forEach(([key, value]) => {
        message.mapStringInt32Wrapper[key] = number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringDoubleWrapper !== undefined &&
      object.mapStringDoubleWrapper !== null
    ) {
      Object.entries(object.mapStringDoubleWrapper).forEach(([key, value]) => {
        message.mapStringDoubleWrapper[key] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringFloatWrapper !== undefined &&
      object.mapStringFloatWrapper !== null
    ) {
      Object.entries(object.mapStringFloatWrapper).forEach(([key, value]) => {
        message.mapStringFloatWrapper[key] = number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringUint64Wrapper !== undefined &&
      object.mapStringUint64Wrapper !== null
    ) {
      Object.entries(object.mapStringUint64Wrapper).forEach(([key, value]) => {
        message.mapStringUint64Wrapper[key] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringUint32Wrapper !== undefined &&
      object.mapStringUint32Wrapper !== null
    ) {
      Object.entries(object.mapStringUint32Wrapper).forEach(([key, value]) => {
        message.mapStringUint32Wrapper[key] =
          number | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringStringWrapper !== undefined &&
      object.mapStringStringWrapper !== null
    ) {
      Object.entries(object.mapStringStringWrapper).forEach(([key, value]) => {
        message.mapStringStringWrapper[key] =
          string | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringBoolWrapper !== undefined &&
      object.mapStringBoolWrapper !== null
    ) {
      Object.entries(object.mapStringBoolWrapper).forEach(([key, value]) => {
        message.mapStringBoolWrapper[key] = boolean | undefined.fromJSON(value);
      });
    }
    if (
      object.mapStringBytesWrapper !== undefined &&
      object.mapStringBytesWrapper !== null
    ) {
      Object.entries(object.mapStringBytesWrapper).forEach(([key, value]) => {
        message.mapStringBytesWrapper[key] =
          Uint8Array | undefined.fromJSON(value);
      });
    }
    if (object.oneofType !== undefined && object.oneofType !== null) {
      message.oneofType = NestedTestAllTypes.fromJSON(object.oneofType);
    } else {
      message.oneofType = undefined;
    }
    if (object.oneofMsg !== undefined && object.oneofMsg !== null) {
      message.oneofMsg = TestAllTypes_NestedMessage.fromJSON(object.oneofMsg);
    } else {
      message.oneofMsg = undefined;
    }
    if (object.oneofBool !== undefined && object.oneofBool !== null) {
      message.oneofBool = Boolean(object.oneofBool);
    } else {
      message.oneofBool = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes): unknown {
    const obj: any = {};
    message.singleInt32 !== undefined &&
      (obj.singleInt32 = message.singleInt32);
    message.singleInt64 !== undefined &&
      (obj.singleInt64 = message.singleInt64);
    message.singleUint32 !== undefined &&
      (obj.singleUint32 = message.singleUint32);
    message.singleUint64 !== undefined &&
      (obj.singleUint64 = message.singleUint64);
    message.singleSint32 !== undefined &&
      (obj.singleSint32 = message.singleSint32);
    message.singleSint64 !== undefined &&
      (obj.singleSint64 = message.singleSint64);
    message.singleFixed32 !== undefined &&
      (obj.singleFixed32 = message.singleFixed32);
    message.singleFixed64 !== undefined &&
      (obj.singleFixed64 = message.singleFixed64);
    message.singleSfixed32 !== undefined &&
      (obj.singleSfixed32 = message.singleSfixed32);
    message.singleSfixed64 !== undefined &&
      (obj.singleSfixed64 = message.singleSfixed64);
    message.singleFloat !== undefined &&
      (obj.singleFloat = message.singleFloat);
    message.singleDouble !== undefined &&
      (obj.singleDouble = message.singleDouble);
    message.singleBool !== undefined && (obj.singleBool = message.singleBool);
    message.singleString !== undefined &&
      (obj.singleString = message.singleString);
    message.singleBytes !== undefined &&
      (obj.singleBytes = base64FromBytes(
        message.singleBytes !== undefined
          ? message.singleBytes
          : new Uint8Array()
      ));
    message.optionalBool !== undefined &&
      (obj.optionalBool = message.optionalBool);
    message.optionalString !== undefined &&
      (obj.optionalString = message.optionalString);
    message.in !== undefined && (obj.in = message.in);
    message.singleAny !== undefined &&
      (obj.singleAny = message.singleAny
        ? Any.toJSON(message.singleAny)
        : undefined);
    message.singleDuration !== undefined &&
      (obj.singleDuration = message.singleDuration
        ? Duration.toJSON(message.singleDuration)
        : undefined);
    message.singleTimestamp !== undefined &&
      (obj.singleTimestamp = message.singleTimestamp.toISOString());
    message.singleStruct !== undefined &&
      (obj.singleStruct = message.singleStruct
        ? Struct.toJSON(message.singleStruct)
        : undefined);
    message.singleValue !== undefined &&
      (obj.singleValue = message.singleValue
        ? Value.toJSON(message.singleValue)
        : undefined);
    message.singleInt64Wrapper !== undefined &&
      (obj.singleInt64Wrapper = message.singleInt64Wrapper);
    message.singleInt32Wrapper !== undefined &&
      (obj.singleInt32Wrapper = message.singleInt32Wrapper);
    message.singleDoubleWrapper !== undefined &&
      (obj.singleDoubleWrapper = message.singleDoubleWrapper);
    message.singleFloatWrapper !== undefined &&
      (obj.singleFloatWrapper = message.singleFloatWrapper);
    message.singleUint64Wrapper !== undefined &&
      (obj.singleUint64Wrapper = message.singleUint64Wrapper);
    message.singleUint32Wrapper !== undefined &&
      (obj.singleUint32Wrapper = message.singleUint32Wrapper);
    message.singleStringWrapper !== undefined &&
      (obj.singleStringWrapper = message.singleStringWrapper);
    message.singleBoolWrapper !== undefined &&
      (obj.singleBoolWrapper = message.singleBoolWrapper);
    message.singleBytesWrapper !== undefined &&
      (obj.singleBytesWrapper = message.singleBytesWrapper);
    message.listValue !== undefined &&
      (obj.listValue = message.listValue
        ? ListValue.toJSON(message.listValue)
        : undefined);
    message.nullValue !== undefined &&
      (obj.nullValue = nullValueToJSON(message.nullValue));
    message.optionalNullValue !== undefined &&
      (obj.optionalNullValue =
        message.optionalNullValue !== undefined
          ? nullValueToJSON(message.optionalNullValue)
          : undefined);
    message.fieldMask !== undefined &&
      (obj.fieldMask = message.fieldMask
        ? FieldMask.toJSON(message.fieldMask)
        : undefined);
    message.empty !== undefined &&
      (obj.empty = message.empty ? Empty.toJSON(message.empty) : undefined);
    message.singleNestedMessage !== undefined &&
      (obj.singleNestedMessage = message.singleNestedMessage
        ? TestAllTypes_NestedMessage.toJSON(message.singleNestedMessage)
        : undefined);
    message.singleNestedEnum !== undefined &&
      (obj.singleNestedEnum =
        message.singleNestedEnum !== undefined
          ? testAllTypes_NestedEnumToJSON(message.singleNestedEnum)
          : undefined);
    message.standaloneMessage !== undefined &&
      (obj.standaloneMessage = message.standaloneMessage
        ? TestAllTypes_NestedMessage.toJSON(message.standaloneMessage)
        : undefined);
    message.standaloneEnum !== undefined &&
      (obj.standaloneEnum = testAllTypes_NestedEnumToJSON(
        message.standaloneEnum
      ));
    if (message.repeatedInt32) {
      obj.repeatedInt32 = message.repeatedInt32.map((e) => e);
    } else {
      obj.repeatedInt32 = [];
    }
    if (message.repeatedInt64) {
      obj.repeatedInt64 = message.repeatedInt64.map((e) => e);
    } else {
      obj.repeatedInt64 = [];
    }
    if (message.repeatedUint32) {
      obj.repeatedUint32 = message.repeatedUint32.map((e) => e);
    } else {
      obj.repeatedUint32 = [];
    }
    if (message.repeatedUint64) {
      obj.repeatedUint64 = message.repeatedUint64.map((e) => e);
    } else {
      obj.repeatedUint64 = [];
    }
    if (message.repeatedSint32) {
      obj.repeatedSint32 = message.repeatedSint32.map((e) => e);
    } else {
      obj.repeatedSint32 = [];
    }
    if (message.repeatedSint64) {
      obj.repeatedSint64 = message.repeatedSint64.map((e) => e);
    } else {
      obj.repeatedSint64 = [];
    }
    if (message.repeatedFixed32) {
      obj.repeatedFixed32 = message.repeatedFixed32.map((e) => e);
    } else {
      obj.repeatedFixed32 = [];
    }
    if (message.repeatedFixed64) {
      obj.repeatedFixed64 = message.repeatedFixed64.map((e) => e);
    } else {
      obj.repeatedFixed64 = [];
    }
    if (message.repeatedSfixed32) {
      obj.repeatedSfixed32 = message.repeatedSfixed32.map((e) => e);
    } else {
      obj.repeatedSfixed32 = [];
    }
    if (message.repeatedSfixed64) {
      obj.repeatedSfixed64 = message.repeatedSfixed64.map((e) => e);
    } else {
      obj.repeatedSfixed64 = [];
    }
    if (message.repeatedFloat) {
      obj.repeatedFloat = message.repeatedFloat.map((e) => e);
    } else {
      obj.repeatedFloat = [];
    }
    if (message.repeatedDouble) {
      obj.repeatedDouble = message.repeatedDouble.map((e) => e);
    } else {
      obj.repeatedDouble = [];
    }
    if (message.repeatedBool) {
      obj.repeatedBool = message.repeatedBool.map((e) => e);
    } else {
      obj.repeatedBool = [];
    }
    if (message.repeatedString) {
      obj.repeatedString = message.repeatedString.map((e) => e);
    } else {
      obj.repeatedString = [];
    }
    if (message.repeatedBytes) {
      obj.repeatedBytes = message.repeatedBytes.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.repeatedBytes = [];
    }
    if (message.repeatedNestedMessage) {
      obj.repeatedNestedMessage = message.repeatedNestedMessage.map((e) =>
        e ? TestAllTypes_NestedMessage.toJSON(e) : undefined
      );
    } else {
      obj.repeatedNestedMessage = [];
    }
    if (message.repeatedNestedEnum) {
      obj.repeatedNestedEnum = message.repeatedNestedEnum.map((e) =>
        testAllTypes_NestedEnumToJSON(e)
      );
    } else {
      obj.repeatedNestedEnum = [];
    }
    if (message.repeatedStringPiece) {
      obj.repeatedStringPiece = message.repeatedStringPiece.map((e) => e);
    } else {
      obj.repeatedStringPiece = [];
    }
    if (message.repeatedCord) {
      obj.repeatedCord = message.repeatedCord.map((e) => e);
    } else {
      obj.repeatedCord = [];
    }
    if (message.repeatedLazyMessage) {
      obj.repeatedLazyMessage = message.repeatedLazyMessage.map((e) =>
        e ? TestAllTypes_NestedMessage.toJSON(e) : undefined
      );
    } else {
      obj.repeatedLazyMessage = [];
    }
    if (message.repeatedAny) {
      obj.repeatedAny = message.repeatedAny.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.repeatedAny = [];
    }
    if (message.repeatedDuration) {
      obj.repeatedDuration = message.repeatedDuration.map((e) =>
        e ? Duration.toJSON(e) : undefined
      );
    } else {
      obj.repeatedDuration = [];
    }
    if (message.repeatedTimestamp) {
      obj.repeatedTimestamp = message.repeatedTimestamp.map((e) =>
        e.toISOString()
      );
    } else {
      obj.repeatedTimestamp = [];
    }
    if (message.repeatedStruct) {
      obj.repeatedStruct = message.repeatedStruct.map((e) =>
        e ? Struct.toJSON(e) : undefined
      );
    } else {
      obj.repeatedStruct = [];
    }
    if (message.repeatedValue) {
      obj.repeatedValue = message.repeatedValue.map((e) =>
        e ? Value.toJSON(e) : undefined
      );
    } else {
      obj.repeatedValue = [];
    }
    if (message.repeatedInt64Wrapper) {
      obj.repeatedInt64Wrapper = message.repeatedInt64Wrapper.map((e) => e);
    } else {
      obj.repeatedInt64Wrapper = [];
    }
    if (message.repeatedInt32Wrapper) {
      obj.repeatedInt32Wrapper = message.repeatedInt32Wrapper.map((e) => e);
    } else {
      obj.repeatedInt32Wrapper = [];
    }
    if (message.repeatedDoubleWrapper) {
      obj.repeatedDoubleWrapper = message.repeatedDoubleWrapper.map((e) => e);
    } else {
      obj.repeatedDoubleWrapper = [];
    }
    if (message.repeatedFloatWrapper) {
      obj.repeatedFloatWrapper = message.repeatedFloatWrapper.map((e) => e);
    } else {
      obj.repeatedFloatWrapper = [];
    }
    if (message.repeatedUint64Wrapper) {
      obj.repeatedUint64Wrapper = message.repeatedUint64Wrapper.map((e) => e);
    } else {
      obj.repeatedUint64Wrapper = [];
    }
    if (message.repeatedUint32Wrapper) {
      obj.repeatedUint32Wrapper = message.repeatedUint32Wrapper.map((e) => e);
    } else {
      obj.repeatedUint32Wrapper = [];
    }
    if (message.repeatedStringWrapper) {
      obj.repeatedStringWrapper = message.repeatedStringWrapper.map((e) => e);
    } else {
      obj.repeatedStringWrapper = [];
    }
    if (message.repeatedBoolWrapper) {
      obj.repeatedBoolWrapper = message.repeatedBoolWrapper.map((e) => e);
    } else {
      obj.repeatedBoolWrapper = [];
    }
    if (message.repeatedBytesWrapper) {
      obj.repeatedBytesWrapper = message.repeatedBytesWrapper.map((e) => e);
    } else {
      obj.repeatedBytesWrapper = [];
    }
    if (message.repeatedListValue) {
      obj.repeatedListValue = message.repeatedListValue.map((e) =>
        e ? ListValue.toJSON(e) : undefined
      );
    } else {
      obj.repeatedListValue = [];
    }
    if (message.repeatedNullValue) {
      obj.repeatedNullValue = message.repeatedNullValue.map((e) =>
        nullValueToJSON(e)
      );
    } else {
      obj.repeatedNullValue = [];
    }
    obj.mapInt64NestedType = {};
    if (message.mapInt64NestedType) {
      Object.entries(message.mapInt64NestedType).forEach(([k, v]) => {
        obj.mapInt64NestedType[k] = NestedTestAllTypes.toJSON(v);
      });
    }
    obj.mapBoolBool = {};
    if (message.mapBoolBool) {
      Object.entries(message.mapBoolBool).forEach(([k, v]) => {
        obj.mapBoolBool[k] = v;
      });
    }
    obj.mapBoolString = {};
    if (message.mapBoolString) {
      Object.entries(message.mapBoolString).forEach(([k, v]) => {
        obj.mapBoolString[k] = v;
      });
    }
    obj.mapBoolBytes = {};
    if (message.mapBoolBytes) {
      Object.entries(message.mapBoolBytes).forEach(([k, v]) => {
        obj.mapBoolBytes[k] = base64FromBytes(v);
      });
    }
    obj.mapBoolInt32 = {};
    if (message.mapBoolInt32) {
      Object.entries(message.mapBoolInt32).forEach(([k, v]) => {
        obj.mapBoolInt32[k] = v;
      });
    }
    obj.mapBoolInt64 = {};
    if (message.mapBoolInt64) {
      Object.entries(message.mapBoolInt64).forEach(([k, v]) => {
        obj.mapBoolInt64[k] = v;
      });
    }
    obj.mapBoolUint32 = {};
    if (message.mapBoolUint32) {
      Object.entries(message.mapBoolUint32).forEach(([k, v]) => {
        obj.mapBoolUint32[k] = v;
      });
    }
    obj.mapBoolUint64 = {};
    if (message.mapBoolUint64) {
      Object.entries(message.mapBoolUint64).forEach(([k, v]) => {
        obj.mapBoolUint64[k] = v;
      });
    }
    obj.mapBoolFloat = {};
    if (message.mapBoolFloat) {
      Object.entries(message.mapBoolFloat).forEach(([k, v]) => {
        obj.mapBoolFloat[k] = v;
      });
    }
    obj.mapBoolDouble = {};
    if (message.mapBoolDouble) {
      Object.entries(message.mapBoolDouble).forEach(([k, v]) => {
        obj.mapBoolDouble[k] = v;
      });
    }
    obj.mapBoolEnum = {};
    if (message.mapBoolEnum) {
      Object.entries(message.mapBoolEnum).forEach(([k, v]) => {
        obj.mapBoolEnum[k] = testAllTypes_NestedEnumToJSON(v);
      });
    }
    obj.mapBoolMessage = {};
    if (message.mapBoolMessage) {
      Object.entries(message.mapBoolMessage).forEach(([k, v]) => {
        obj.mapBoolMessage[k] = TestAllTypes_NestedMessage.toJSON(v);
      });
    }
    obj.mapBoolDuration = {};
    if (message.mapBoolDuration) {
      Object.entries(message.mapBoolDuration).forEach(([k, v]) => {
        obj.mapBoolDuration[k] = Duration.toJSON(v);
      });
    }
    obj.mapBoolTimestamp = {};
    if (message.mapBoolTimestamp) {
      Object.entries(message.mapBoolTimestamp).forEach(([k, v]) => {
        obj.mapBoolTimestamp[k] = v.toISOString();
      });
    }
    obj.mapBoolNullValue = {};
    if (message.mapBoolNullValue) {
      Object.entries(message.mapBoolNullValue).forEach(([k, v]) => {
        obj.mapBoolNullValue[k] = nullValueToJSON(v);
      });
    }
    obj.mapBoolAny = {};
    if (message.mapBoolAny) {
      Object.entries(message.mapBoolAny).forEach(([k, v]) => {
        obj.mapBoolAny[k] = Any.toJSON(v);
      });
    }
    obj.mapBoolStruct = {};
    if (message.mapBoolStruct) {
      Object.entries(message.mapBoolStruct).forEach(([k, v]) => {
        obj.mapBoolStruct[k] = Struct.toJSON(v);
      });
    }
    obj.mapBoolValue = {};
    if (message.mapBoolValue) {
      Object.entries(message.mapBoolValue).forEach(([k, v]) => {
        obj.mapBoolValue[k] = Value.toJSON(v);
      });
    }
    obj.mapBoolListValue = {};
    if (message.mapBoolListValue) {
      Object.entries(message.mapBoolListValue).forEach(([k, v]) => {
        obj.mapBoolListValue[k] = ListValue.toJSON(v);
      });
    }
    obj.mapBoolInt64Wrapper = {};
    if (message.mapBoolInt64Wrapper) {
      Object.entries(message.mapBoolInt64Wrapper).forEach(([k, v]) => {
        obj.mapBoolInt64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapBoolInt32Wrapper = {};
    if (message.mapBoolInt32Wrapper) {
      Object.entries(message.mapBoolInt32Wrapper).forEach(([k, v]) => {
        obj.mapBoolInt32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapBoolDoubleWrapper = {};
    if (message.mapBoolDoubleWrapper) {
      Object.entries(message.mapBoolDoubleWrapper).forEach(([k, v]) => {
        obj.mapBoolDoubleWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapBoolFloatWrapper = {};
    if (message.mapBoolFloatWrapper) {
      Object.entries(message.mapBoolFloatWrapper).forEach(([k, v]) => {
        obj.mapBoolFloatWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapBoolUint64Wrapper = {};
    if (message.mapBoolUint64Wrapper) {
      Object.entries(message.mapBoolUint64Wrapper).forEach(([k, v]) => {
        obj.mapBoolUint64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapBoolUint32Wrapper = {};
    if (message.mapBoolUint32Wrapper) {
      Object.entries(message.mapBoolUint32Wrapper).forEach(([k, v]) => {
        obj.mapBoolUint32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapBoolStringWrapper = {};
    if (message.mapBoolStringWrapper) {
      Object.entries(message.mapBoolStringWrapper).forEach(([k, v]) => {
        obj.mapBoolStringWrapper[k] = string | undefined.toJSON(v);
      });
    }
    obj.mapBoolBoolWrapper = {};
    if (message.mapBoolBoolWrapper) {
      Object.entries(message.mapBoolBoolWrapper).forEach(([k, v]) => {
        obj.mapBoolBoolWrapper[k] = boolean | undefined.toJSON(v);
      });
    }
    obj.mapBoolBytesWrapper = {};
    if (message.mapBoolBytesWrapper) {
      Object.entries(message.mapBoolBytesWrapper).forEach(([k, v]) => {
        obj.mapBoolBytesWrapper[k] = Uint8Array | undefined.toJSON(v);
      });
    }
    obj.mapInt32Bool = {};
    if (message.mapInt32Bool) {
      Object.entries(message.mapInt32Bool).forEach(([k, v]) => {
        obj.mapInt32Bool[k] = v;
      });
    }
    obj.mapInt32String = {};
    if (message.mapInt32String) {
      Object.entries(message.mapInt32String).forEach(([k, v]) => {
        obj.mapInt32String[k] = v;
      });
    }
    obj.mapInt32Bytes = {};
    if (message.mapInt32Bytes) {
      Object.entries(message.mapInt32Bytes).forEach(([k, v]) => {
        obj.mapInt32Bytes[k] = base64FromBytes(v);
      });
    }
    obj.mapInt32Int32 = {};
    if (message.mapInt32Int32) {
      Object.entries(message.mapInt32Int32).forEach(([k, v]) => {
        obj.mapInt32Int32[k] = v;
      });
    }
    obj.mapInt32Int64 = {};
    if (message.mapInt32Int64) {
      Object.entries(message.mapInt32Int64).forEach(([k, v]) => {
        obj.mapInt32Int64[k] = v;
      });
    }
    obj.mapInt32Uint32 = {};
    if (message.mapInt32Uint32) {
      Object.entries(message.mapInt32Uint32).forEach(([k, v]) => {
        obj.mapInt32Uint32[k] = v;
      });
    }
    obj.mapInt32Uint64 = {};
    if (message.mapInt32Uint64) {
      Object.entries(message.mapInt32Uint64).forEach(([k, v]) => {
        obj.mapInt32Uint64[k] = v;
      });
    }
    obj.mapInt32Float = {};
    if (message.mapInt32Float) {
      Object.entries(message.mapInt32Float).forEach(([k, v]) => {
        obj.mapInt32Float[k] = v;
      });
    }
    obj.mapInt32Double = {};
    if (message.mapInt32Double) {
      Object.entries(message.mapInt32Double).forEach(([k, v]) => {
        obj.mapInt32Double[k] = v;
      });
    }
    obj.mapInt32Enum = {};
    if (message.mapInt32Enum) {
      Object.entries(message.mapInt32Enum).forEach(([k, v]) => {
        obj.mapInt32Enum[k] = testAllTypes_NestedEnumToJSON(v);
      });
    }
    obj.mapInt32Message = {};
    if (message.mapInt32Message) {
      Object.entries(message.mapInt32Message).forEach(([k, v]) => {
        obj.mapInt32Message[k] = TestAllTypes_NestedMessage.toJSON(v);
      });
    }
    obj.mapInt32Duration = {};
    if (message.mapInt32Duration) {
      Object.entries(message.mapInt32Duration).forEach(([k, v]) => {
        obj.mapInt32Duration[k] = Duration.toJSON(v);
      });
    }
    obj.mapInt32Timestamp = {};
    if (message.mapInt32Timestamp) {
      Object.entries(message.mapInt32Timestamp).forEach(([k, v]) => {
        obj.mapInt32Timestamp[k] = v.toISOString();
      });
    }
    obj.mapInt32NullValue = {};
    if (message.mapInt32NullValue) {
      Object.entries(message.mapInt32NullValue).forEach(([k, v]) => {
        obj.mapInt32NullValue[k] = nullValueToJSON(v);
      });
    }
    obj.mapInt32Any = {};
    if (message.mapInt32Any) {
      Object.entries(message.mapInt32Any).forEach(([k, v]) => {
        obj.mapInt32Any[k] = Any.toJSON(v);
      });
    }
    obj.mapInt32Struct = {};
    if (message.mapInt32Struct) {
      Object.entries(message.mapInt32Struct).forEach(([k, v]) => {
        obj.mapInt32Struct[k] = Struct.toJSON(v);
      });
    }
    obj.mapInt32Value = {};
    if (message.mapInt32Value) {
      Object.entries(message.mapInt32Value).forEach(([k, v]) => {
        obj.mapInt32Value[k] = Value.toJSON(v);
      });
    }
    obj.mapInt32ListValue = {};
    if (message.mapInt32ListValue) {
      Object.entries(message.mapInt32ListValue).forEach(([k, v]) => {
        obj.mapInt32ListValue[k] = ListValue.toJSON(v);
      });
    }
    obj.mapInt32Int64Wrapper = {};
    if (message.mapInt32Int64Wrapper) {
      Object.entries(message.mapInt32Int64Wrapper).forEach(([k, v]) => {
        obj.mapInt32Int64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt32Int32Wrapper = {};
    if (message.mapInt32Int32Wrapper) {
      Object.entries(message.mapInt32Int32Wrapper).forEach(([k, v]) => {
        obj.mapInt32Int32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt32DoubleWrapper = {};
    if (message.mapInt32DoubleWrapper) {
      Object.entries(message.mapInt32DoubleWrapper).forEach(([k, v]) => {
        obj.mapInt32DoubleWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt32FloatWrapper = {};
    if (message.mapInt32FloatWrapper) {
      Object.entries(message.mapInt32FloatWrapper).forEach(([k, v]) => {
        obj.mapInt32FloatWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt32Uint64Wrapper = {};
    if (message.mapInt32Uint64Wrapper) {
      Object.entries(message.mapInt32Uint64Wrapper).forEach(([k, v]) => {
        obj.mapInt32Uint64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt32Uint32Wrapper = {};
    if (message.mapInt32Uint32Wrapper) {
      Object.entries(message.mapInt32Uint32Wrapper).forEach(([k, v]) => {
        obj.mapInt32Uint32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt32StringWrapper = {};
    if (message.mapInt32StringWrapper) {
      Object.entries(message.mapInt32StringWrapper).forEach(([k, v]) => {
        obj.mapInt32StringWrapper[k] = string | undefined.toJSON(v);
      });
    }
    obj.mapInt32BoolWrapper = {};
    if (message.mapInt32BoolWrapper) {
      Object.entries(message.mapInt32BoolWrapper).forEach(([k, v]) => {
        obj.mapInt32BoolWrapper[k] = boolean | undefined.toJSON(v);
      });
    }
    obj.mapInt32BytesWrapper = {};
    if (message.mapInt32BytesWrapper) {
      Object.entries(message.mapInt32BytesWrapper).forEach(([k, v]) => {
        obj.mapInt32BytesWrapper[k] = Uint8Array | undefined.toJSON(v);
      });
    }
    obj.mapInt64Bool = {};
    if (message.mapInt64Bool) {
      Object.entries(message.mapInt64Bool).forEach(([k, v]) => {
        obj.mapInt64Bool[k] = v;
      });
    }
    obj.mapInt64String = {};
    if (message.mapInt64String) {
      Object.entries(message.mapInt64String).forEach(([k, v]) => {
        obj.mapInt64String[k] = v;
      });
    }
    obj.mapInt64Bytes = {};
    if (message.mapInt64Bytes) {
      Object.entries(message.mapInt64Bytes).forEach(([k, v]) => {
        obj.mapInt64Bytes[k] = base64FromBytes(v);
      });
    }
    obj.mapInt64Int32 = {};
    if (message.mapInt64Int32) {
      Object.entries(message.mapInt64Int32).forEach(([k, v]) => {
        obj.mapInt64Int32[k] = v;
      });
    }
    obj.mapInt64Int64 = {};
    if (message.mapInt64Int64) {
      Object.entries(message.mapInt64Int64).forEach(([k, v]) => {
        obj.mapInt64Int64[k] = v;
      });
    }
    obj.mapInt64Uint32 = {};
    if (message.mapInt64Uint32) {
      Object.entries(message.mapInt64Uint32).forEach(([k, v]) => {
        obj.mapInt64Uint32[k] = v;
      });
    }
    obj.mapInt64Uint64 = {};
    if (message.mapInt64Uint64) {
      Object.entries(message.mapInt64Uint64).forEach(([k, v]) => {
        obj.mapInt64Uint64[k] = v;
      });
    }
    obj.mapInt64Float = {};
    if (message.mapInt64Float) {
      Object.entries(message.mapInt64Float).forEach(([k, v]) => {
        obj.mapInt64Float[k] = v;
      });
    }
    obj.mapInt64Double = {};
    if (message.mapInt64Double) {
      Object.entries(message.mapInt64Double).forEach(([k, v]) => {
        obj.mapInt64Double[k] = v;
      });
    }
    obj.mapInt64Enum = {};
    if (message.mapInt64Enum) {
      Object.entries(message.mapInt64Enum).forEach(([k, v]) => {
        obj.mapInt64Enum[k] = testAllTypes_NestedEnumToJSON(v);
      });
    }
    obj.mapInt64Message = {};
    if (message.mapInt64Message) {
      Object.entries(message.mapInt64Message).forEach(([k, v]) => {
        obj.mapInt64Message[k] = TestAllTypes_NestedMessage.toJSON(v);
      });
    }
    obj.mapInt64Duration = {};
    if (message.mapInt64Duration) {
      Object.entries(message.mapInt64Duration).forEach(([k, v]) => {
        obj.mapInt64Duration[k] = Duration.toJSON(v);
      });
    }
    obj.mapInt64Timestamp = {};
    if (message.mapInt64Timestamp) {
      Object.entries(message.mapInt64Timestamp).forEach(([k, v]) => {
        obj.mapInt64Timestamp[k] = v.toISOString();
      });
    }
    obj.mapInt64NullValue = {};
    if (message.mapInt64NullValue) {
      Object.entries(message.mapInt64NullValue).forEach(([k, v]) => {
        obj.mapInt64NullValue[k] = nullValueToJSON(v);
      });
    }
    obj.mapInt64Any = {};
    if (message.mapInt64Any) {
      Object.entries(message.mapInt64Any).forEach(([k, v]) => {
        obj.mapInt64Any[k] = Any.toJSON(v);
      });
    }
    obj.mapInt64Struct = {};
    if (message.mapInt64Struct) {
      Object.entries(message.mapInt64Struct).forEach(([k, v]) => {
        obj.mapInt64Struct[k] = Struct.toJSON(v);
      });
    }
    obj.mapInt64Value = {};
    if (message.mapInt64Value) {
      Object.entries(message.mapInt64Value).forEach(([k, v]) => {
        obj.mapInt64Value[k] = Value.toJSON(v);
      });
    }
    obj.mapInt64ListValue = {};
    if (message.mapInt64ListValue) {
      Object.entries(message.mapInt64ListValue).forEach(([k, v]) => {
        obj.mapInt64ListValue[k] = ListValue.toJSON(v);
      });
    }
    obj.mapInt64Int64Wrapper = {};
    if (message.mapInt64Int64Wrapper) {
      Object.entries(message.mapInt64Int64Wrapper).forEach(([k, v]) => {
        obj.mapInt64Int64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt64Int32Wrapper = {};
    if (message.mapInt64Int32Wrapper) {
      Object.entries(message.mapInt64Int32Wrapper).forEach(([k, v]) => {
        obj.mapInt64Int32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt64DoubleWrapper = {};
    if (message.mapInt64DoubleWrapper) {
      Object.entries(message.mapInt64DoubleWrapper).forEach(([k, v]) => {
        obj.mapInt64DoubleWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt64FloatWrapper = {};
    if (message.mapInt64FloatWrapper) {
      Object.entries(message.mapInt64FloatWrapper).forEach(([k, v]) => {
        obj.mapInt64FloatWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt64Uint64Wrapper = {};
    if (message.mapInt64Uint64Wrapper) {
      Object.entries(message.mapInt64Uint64Wrapper).forEach(([k, v]) => {
        obj.mapInt64Uint64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt64Uint32Wrapper = {};
    if (message.mapInt64Uint32Wrapper) {
      Object.entries(message.mapInt64Uint32Wrapper).forEach(([k, v]) => {
        obj.mapInt64Uint32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapInt64StringWrapper = {};
    if (message.mapInt64StringWrapper) {
      Object.entries(message.mapInt64StringWrapper).forEach(([k, v]) => {
        obj.mapInt64StringWrapper[k] = string | undefined.toJSON(v);
      });
    }
    obj.mapInt64BoolWrapper = {};
    if (message.mapInt64BoolWrapper) {
      Object.entries(message.mapInt64BoolWrapper).forEach(([k, v]) => {
        obj.mapInt64BoolWrapper[k] = boolean | undefined.toJSON(v);
      });
    }
    obj.mapInt64BytesWrapper = {};
    if (message.mapInt64BytesWrapper) {
      Object.entries(message.mapInt64BytesWrapper).forEach(([k, v]) => {
        obj.mapInt64BytesWrapper[k] = Uint8Array | undefined.toJSON(v);
      });
    }
    obj.mapUint32Bool = {};
    if (message.mapUint32Bool) {
      Object.entries(message.mapUint32Bool).forEach(([k, v]) => {
        obj.mapUint32Bool[k] = v;
      });
    }
    obj.mapUint32String = {};
    if (message.mapUint32String) {
      Object.entries(message.mapUint32String).forEach(([k, v]) => {
        obj.mapUint32String[k] = v;
      });
    }
    obj.mapUint32Bytes = {};
    if (message.mapUint32Bytes) {
      Object.entries(message.mapUint32Bytes).forEach(([k, v]) => {
        obj.mapUint32Bytes[k] = base64FromBytes(v);
      });
    }
    obj.mapUint32Int32 = {};
    if (message.mapUint32Int32) {
      Object.entries(message.mapUint32Int32).forEach(([k, v]) => {
        obj.mapUint32Int32[k] = v;
      });
    }
    obj.mapUint32Int64 = {};
    if (message.mapUint32Int64) {
      Object.entries(message.mapUint32Int64).forEach(([k, v]) => {
        obj.mapUint32Int64[k] = v;
      });
    }
    obj.mapUint32Uint32 = {};
    if (message.mapUint32Uint32) {
      Object.entries(message.mapUint32Uint32).forEach(([k, v]) => {
        obj.mapUint32Uint32[k] = v;
      });
    }
    obj.mapUint32Uint64 = {};
    if (message.mapUint32Uint64) {
      Object.entries(message.mapUint32Uint64).forEach(([k, v]) => {
        obj.mapUint32Uint64[k] = v;
      });
    }
    obj.mapUint32Float = {};
    if (message.mapUint32Float) {
      Object.entries(message.mapUint32Float).forEach(([k, v]) => {
        obj.mapUint32Float[k] = v;
      });
    }
    obj.mapUint32Double = {};
    if (message.mapUint32Double) {
      Object.entries(message.mapUint32Double).forEach(([k, v]) => {
        obj.mapUint32Double[k] = v;
      });
    }
    obj.mapUint32Enum = {};
    if (message.mapUint32Enum) {
      Object.entries(message.mapUint32Enum).forEach(([k, v]) => {
        obj.mapUint32Enum[k] = testAllTypes_NestedEnumToJSON(v);
      });
    }
    obj.mapUint32Message = {};
    if (message.mapUint32Message) {
      Object.entries(message.mapUint32Message).forEach(([k, v]) => {
        obj.mapUint32Message[k] = TestAllTypes_NestedMessage.toJSON(v);
      });
    }
    obj.mapUint32Duration = {};
    if (message.mapUint32Duration) {
      Object.entries(message.mapUint32Duration).forEach(([k, v]) => {
        obj.mapUint32Duration[k] = Duration.toJSON(v);
      });
    }
    obj.mapUint32Timestamp = {};
    if (message.mapUint32Timestamp) {
      Object.entries(message.mapUint32Timestamp).forEach(([k, v]) => {
        obj.mapUint32Timestamp[k] = v.toISOString();
      });
    }
    obj.mapUint32NullValue = {};
    if (message.mapUint32NullValue) {
      Object.entries(message.mapUint32NullValue).forEach(([k, v]) => {
        obj.mapUint32NullValue[k] = nullValueToJSON(v);
      });
    }
    obj.mapUint32Any = {};
    if (message.mapUint32Any) {
      Object.entries(message.mapUint32Any).forEach(([k, v]) => {
        obj.mapUint32Any[k] = Any.toJSON(v);
      });
    }
    obj.mapUint32Struct = {};
    if (message.mapUint32Struct) {
      Object.entries(message.mapUint32Struct).forEach(([k, v]) => {
        obj.mapUint32Struct[k] = Struct.toJSON(v);
      });
    }
    obj.mapUint32Value = {};
    if (message.mapUint32Value) {
      Object.entries(message.mapUint32Value).forEach(([k, v]) => {
        obj.mapUint32Value[k] = Value.toJSON(v);
      });
    }
    obj.mapUint32ListValue = {};
    if (message.mapUint32ListValue) {
      Object.entries(message.mapUint32ListValue).forEach(([k, v]) => {
        obj.mapUint32ListValue[k] = ListValue.toJSON(v);
      });
    }
    obj.mapUint32Int64Wrapper = {};
    if (message.mapUint32Int64Wrapper) {
      Object.entries(message.mapUint32Int64Wrapper).forEach(([k, v]) => {
        obj.mapUint32Int64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint32Int32Wrapper = {};
    if (message.mapUint32Int32Wrapper) {
      Object.entries(message.mapUint32Int32Wrapper).forEach(([k, v]) => {
        obj.mapUint32Int32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint32DoubleWrapper = {};
    if (message.mapUint32DoubleWrapper) {
      Object.entries(message.mapUint32DoubleWrapper).forEach(([k, v]) => {
        obj.mapUint32DoubleWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint32FloatWrapper = {};
    if (message.mapUint32FloatWrapper) {
      Object.entries(message.mapUint32FloatWrapper).forEach(([k, v]) => {
        obj.mapUint32FloatWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint32Uint64Wrapper = {};
    if (message.mapUint32Uint64Wrapper) {
      Object.entries(message.mapUint32Uint64Wrapper).forEach(([k, v]) => {
        obj.mapUint32Uint64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint32Uint32Wrapper = {};
    if (message.mapUint32Uint32Wrapper) {
      Object.entries(message.mapUint32Uint32Wrapper).forEach(([k, v]) => {
        obj.mapUint32Uint32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint32StringWrapper = {};
    if (message.mapUint32StringWrapper) {
      Object.entries(message.mapUint32StringWrapper).forEach(([k, v]) => {
        obj.mapUint32StringWrapper[k] = string | undefined.toJSON(v);
      });
    }
    obj.mapUint32BoolWrapper = {};
    if (message.mapUint32BoolWrapper) {
      Object.entries(message.mapUint32BoolWrapper).forEach(([k, v]) => {
        obj.mapUint32BoolWrapper[k] = boolean | undefined.toJSON(v);
      });
    }
    obj.mapUint32BytesWrapper = {};
    if (message.mapUint32BytesWrapper) {
      Object.entries(message.mapUint32BytesWrapper).forEach(([k, v]) => {
        obj.mapUint32BytesWrapper[k] = Uint8Array | undefined.toJSON(v);
      });
    }
    obj.mapUint64Bool = {};
    if (message.mapUint64Bool) {
      Object.entries(message.mapUint64Bool).forEach(([k, v]) => {
        obj.mapUint64Bool[k] = v;
      });
    }
    obj.mapUint64String = {};
    if (message.mapUint64String) {
      Object.entries(message.mapUint64String).forEach(([k, v]) => {
        obj.mapUint64String[k] = v;
      });
    }
    obj.mapUint64Bytes = {};
    if (message.mapUint64Bytes) {
      Object.entries(message.mapUint64Bytes).forEach(([k, v]) => {
        obj.mapUint64Bytes[k] = base64FromBytes(v);
      });
    }
    obj.mapUint64Int32 = {};
    if (message.mapUint64Int32) {
      Object.entries(message.mapUint64Int32).forEach(([k, v]) => {
        obj.mapUint64Int32[k] = v;
      });
    }
    obj.mapUint64Int64 = {};
    if (message.mapUint64Int64) {
      Object.entries(message.mapUint64Int64).forEach(([k, v]) => {
        obj.mapUint64Int64[k] = v;
      });
    }
    obj.mapUint64Uint32 = {};
    if (message.mapUint64Uint32) {
      Object.entries(message.mapUint64Uint32).forEach(([k, v]) => {
        obj.mapUint64Uint32[k] = v;
      });
    }
    obj.mapUint64Uint64 = {};
    if (message.mapUint64Uint64) {
      Object.entries(message.mapUint64Uint64).forEach(([k, v]) => {
        obj.mapUint64Uint64[k] = v;
      });
    }
    obj.mapUint64Float = {};
    if (message.mapUint64Float) {
      Object.entries(message.mapUint64Float).forEach(([k, v]) => {
        obj.mapUint64Float[k] = v;
      });
    }
    obj.mapUint64Double = {};
    if (message.mapUint64Double) {
      Object.entries(message.mapUint64Double).forEach(([k, v]) => {
        obj.mapUint64Double[k] = v;
      });
    }
    obj.mapUint64Enum = {};
    if (message.mapUint64Enum) {
      Object.entries(message.mapUint64Enum).forEach(([k, v]) => {
        obj.mapUint64Enum[k] = testAllTypes_NestedEnumToJSON(v);
      });
    }
    obj.mapUint64Message = {};
    if (message.mapUint64Message) {
      Object.entries(message.mapUint64Message).forEach(([k, v]) => {
        obj.mapUint64Message[k] = TestAllTypes_NestedMessage.toJSON(v);
      });
    }
    obj.mapUint64Duration = {};
    if (message.mapUint64Duration) {
      Object.entries(message.mapUint64Duration).forEach(([k, v]) => {
        obj.mapUint64Duration[k] = Duration.toJSON(v);
      });
    }
    obj.mapUint64Timestamp = {};
    if (message.mapUint64Timestamp) {
      Object.entries(message.mapUint64Timestamp).forEach(([k, v]) => {
        obj.mapUint64Timestamp[k] = v.toISOString();
      });
    }
    obj.mapUint64NullValue = {};
    if (message.mapUint64NullValue) {
      Object.entries(message.mapUint64NullValue).forEach(([k, v]) => {
        obj.mapUint64NullValue[k] = nullValueToJSON(v);
      });
    }
    obj.mapUint64Any = {};
    if (message.mapUint64Any) {
      Object.entries(message.mapUint64Any).forEach(([k, v]) => {
        obj.mapUint64Any[k] = Any.toJSON(v);
      });
    }
    obj.mapUint64Struct = {};
    if (message.mapUint64Struct) {
      Object.entries(message.mapUint64Struct).forEach(([k, v]) => {
        obj.mapUint64Struct[k] = Struct.toJSON(v);
      });
    }
    obj.mapUint64Value = {};
    if (message.mapUint64Value) {
      Object.entries(message.mapUint64Value).forEach(([k, v]) => {
        obj.mapUint64Value[k] = Value.toJSON(v);
      });
    }
    obj.mapUint64ListValue = {};
    if (message.mapUint64ListValue) {
      Object.entries(message.mapUint64ListValue).forEach(([k, v]) => {
        obj.mapUint64ListValue[k] = ListValue.toJSON(v);
      });
    }
    obj.mapUint64Int64Wrapper = {};
    if (message.mapUint64Int64Wrapper) {
      Object.entries(message.mapUint64Int64Wrapper).forEach(([k, v]) => {
        obj.mapUint64Int64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint64Int32Wrapper = {};
    if (message.mapUint64Int32Wrapper) {
      Object.entries(message.mapUint64Int32Wrapper).forEach(([k, v]) => {
        obj.mapUint64Int32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint64DoubleWrapper = {};
    if (message.mapUint64DoubleWrapper) {
      Object.entries(message.mapUint64DoubleWrapper).forEach(([k, v]) => {
        obj.mapUint64DoubleWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint64FloatWrapper = {};
    if (message.mapUint64FloatWrapper) {
      Object.entries(message.mapUint64FloatWrapper).forEach(([k, v]) => {
        obj.mapUint64FloatWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint64Uint64Wrapper = {};
    if (message.mapUint64Uint64Wrapper) {
      Object.entries(message.mapUint64Uint64Wrapper).forEach(([k, v]) => {
        obj.mapUint64Uint64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint64Uint32Wrapper = {};
    if (message.mapUint64Uint32Wrapper) {
      Object.entries(message.mapUint64Uint32Wrapper).forEach(([k, v]) => {
        obj.mapUint64Uint32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapUint64StringWrapper = {};
    if (message.mapUint64StringWrapper) {
      Object.entries(message.mapUint64StringWrapper).forEach(([k, v]) => {
        obj.mapUint64StringWrapper[k] = string | undefined.toJSON(v);
      });
    }
    obj.mapUint64BoolWrapper = {};
    if (message.mapUint64BoolWrapper) {
      Object.entries(message.mapUint64BoolWrapper).forEach(([k, v]) => {
        obj.mapUint64BoolWrapper[k] = boolean | undefined.toJSON(v);
      });
    }
    obj.mapUint64BytesWrapper = {};
    if (message.mapUint64BytesWrapper) {
      Object.entries(message.mapUint64BytesWrapper).forEach(([k, v]) => {
        obj.mapUint64BytesWrapper[k] = Uint8Array | undefined.toJSON(v);
      });
    }
    obj.mapStringBool = {};
    if (message.mapStringBool) {
      Object.entries(message.mapStringBool).forEach(([k, v]) => {
        obj.mapStringBool[k] = v;
      });
    }
    obj.mapStringString = {};
    if (message.mapStringString) {
      Object.entries(message.mapStringString).forEach(([k, v]) => {
        obj.mapStringString[k] = v;
      });
    }
    obj.mapStringBytes = {};
    if (message.mapStringBytes) {
      Object.entries(message.mapStringBytes).forEach(([k, v]) => {
        obj.mapStringBytes[k] = base64FromBytes(v);
      });
    }
    obj.mapStringInt32 = {};
    if (message.mapStringInt32) {
      Object.entries(message.mapStringInt32).forEach(([k, v]) => {
        obj.mapStringInt32[k] = v;
      });
    }
    obj.mapStringInt64 = {};
    if (message.mapStringInt64) {
      Object.entries(message.mapStringInt64).forEach(([k, v]) => {
        obj.mapStringInt64[k] = v;
      });
    }
    obj.mapStringUint32 = {};
    if (message.mapStringUint32) {
      Object.entries(message.mapStringUint32).forEach(([k, v]) => {
        obj.mapStringUint32[k] = v;
      });
    }
    obj.mapStringUint64 = {};
    if (message.mapStringUint64) {
      Object.entries(message.mapStringUint64).forEach(([k, v]) => {
        obj.mapStringUint64[k] = v;
      });
    }
    obj.mapStringFloat = {};
    if (message.mapStringFloat) {
      Object.entries(message.mapStringFloat).forEach(([k, v]) => {
        obj.mapStringFloat[k] = v;
      });
    }
    obj.mapStringDouble = {};
    if (message.mapStringDouble) {
      Object.entries(message.mapStringDouble).forEach(([k, v]) => {
        obj.mapStringDouble[k] = v;
      });
    }
    obj.mapStringEnum = {};
    if (message.mapStringEnum) {
      Object.entries(message.mapStringEnum).forEach(([k, v]) => {
        obj.mapStringEnum[k] = testAllTypes_NestedEnumToJSON(v);
      });
    }
    obj.mapStringMessage = {};
    if (message.mapStringMessage) {
      Object.entries(message.mapStringMessage).forEach(([k, v]) => {
        obj.mapStringMessage[k] = TestAllTypes_NestedMessage.toJSON(v);
      });
    }
    obj.mapStringDuration = {};
    if (message.mapStringDuration) {
      Object.entries(message.mapStringDuration).forEach(([k, v]) => {
        obj.mapStringDuration[k] = Duration.toJSON(v);
      });
    }
    obj.mapStringTimestamp = {};
    if (message.mapStringTimestamp) {
      Object.entries(message.mapStringTimestamp).forEach(([k, v]) => {
        obj.mapStringTimestamp[k] = v.toISOString();
      });
    }
    obj.mapStringNullValue = {};
    if (message.mapStringNullValue) {
      Object.entries(message.mapStringNullValue).forEach(([k, v]) => {
        obj.mapStringNullValue[k] = nullValueToJSON(v);
      });
    }
    obj.mapStringAny = {};
    if (message.mapStringAny) {
      Object.entries(message.mapStringAny).forEach(([k, v]) => {
        obj.mapStringAny[k] = Any.toJSON(v);
      });
    }
    obj.mapStringStruct = {};
    if (message.mapStringStruct) {
      Object.entries(message.mapStringStruct).forEach(([k, v]) => {
        obj.mapStringStruct[k] = Struct.toJSON(v);
      });
    }
    obj.mapStringValue = {};
    if (message.mapStringValue) {
      Object.entries(message.mapStringValue).forEach(([k, v]) => {
        obj.mapStringValue[k] = Value.toJSON(v);
      });
    }
    obj.mapStringListValue = {};
    if (message.mapStringListValue) {
      Object.entries(message.mapStringListValue).forEach(([k, v]) => {
        obj.mapStringListValue[k] = ListValue.toJSON(v);
      });
    }
    obj.mapStringInt64Wrapper = {};
    if (message.mapStringInt64Wrapper) {
      Object.entries(message.mapStringInt64Wrapper).forEach(([k, v]) => {
        obj.mapStringInt64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapStringInt32Wrapper = {};
    if (message.mapStringInt32Wrapper) {
      Object.entries(message.mapStringInt32Wrapper).forEach(([k, v]) => {
        obj.mapStringInt32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapStringDoubleWrapper = {};
    if (message.mapStringDoubleWrapper) {
      Object.entries(message.mapStringDoubleWrapper).forEach(([k, v]) => {
        obj.mapStringDoubleWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapStringFloatWrapper = {};
    if (message.mapStringFloatWrapper) {
      Object.entries(message.mapStringFloatWrapper).forEach(([k, v]) => {
        obj.mapStringFloatWrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapStringUint64Wrapper = {};
    if (message.mapStringUint64Wrapper) {
      Object.entries(message.mapStringUint64Wrapper).forEach(([k, v]) => {
        obj.mapStringUint64Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapStringUint32Wrapper = {};
    if (message.mapStringUint32Wrapper) {
      Object.entries(message.mapStringUint32Wrapper).forEach(([k, v]) => {
        obj.mapStringUint32Wrapper[k] = number | undefined.toJSON(v);
      });
    }
    obj.mapStringStringWrapper = {};
    if (message.mapStringStringWrapper) {
      Object.entries(message.mapStringStringWrapper).forEach(([k, v]) => {
        obj.mapStringStringWrapper[k] = string | undefined.toJSON(v);
      });
    }
    obj.mapStringBoolWrapper = {};
    if (message.mapStringBoolWrapper) {
      Object.entries(message.mapStringBoolWrapper).forEach(([k, v]) => {
        obj.mapStringBoolWrapper[k] = boolean | undefined.toJSON(v);
      });
    }
    obj.mapStringBytesWrapper = {};
    if (message.mapStringBytesWrapper) {
      Object.entries(message.mapStringBytesWrapper).forEach(([k, v]) => {
        obj.mapStringBytesWrapper[k] = Uint8Array | undefined.toJSON(v);
      });
    }
    message.oneofType !== undefined &&
      (obj.oneofType = message.oneofType
        ? NestedTestAllTypes.toJSON(message.oneofType)
        : undefined);
    message.oneofMsg !== undefined &&
      (obj.oneofMsg = message.oneofMsg
        ? TestAllTypes_NestedMessage.toJSON(message.oneofMsg)
        : undefined);
    message.oneofBool !== undefined && (obj.oneofBool = message.oneofBool);
    return obj;
  },

  fromPartial(object: DeepPartial<TestAllTypes>): TestAllTypes {
    const message = { ...baseTestAllTypes } as TestAllTypes;
    message.repeatedInt32 = [];
    message.repeatedInt64 = [];
    message.repeatedUint32 = [];
    message.repeatedUint64 = [];
    message.repeatedSint32 = [];
    message.repeatedSint64 = [];
    message.repeatedFixed32 = [];
    message.repeatedFixed64 = [];
    message.repeatedSfixed32 = [];
    message.repeatedSfixed64 = [];
    message.repeatedFloat = [];
    message.repeatedDouble = [];
    message.repeatedBool = [];
    message.repeatedString = [];
    message.repeatedBytes = [];
    message.repeatedNestedMessage = [];
    message.repeatedNestedEnum = [];
    message.repeatedStringPiece = [];
    message.repeatedCord = [];
    message.repeatedLazyMessage = [];
    message.repeatedAny = [];
    message.repeatedDuration = [];
    message.repeatedTimestamp = [];
    message.repeatedStruct = [];
    message.repeatedValue = [];
    message.repeatedInt64Wrapper = [];
    message.repeatedInt32Wrapper = [];
    message.repeatedDoubleWrapper = [];
    message.repeatedFloatWrapper = [];
    message.repeatedUint64Wrapper = [];
    message.repeatedUint32Wrapper = [];
    message.repeatedStringWrapper = [];
    message.repeatedBoolWrapper = [];
    message.repeatedBytesWrapper = [];
    message.repeatedListValue = [];
    message.repeatedNullValue = [];
    message.mapInt64NestedType = {};
    message.mapBoolBool = {};
    message.mapBoolString = {};
    message.mapBoolBytes = {};
    message.mapBoolInt32 = {};
    message.mapBoolInt64 = {};
    message.mapBoolUint32 = {};
    message.mapBoolUint64 = {};
    message.mapBoolFloat = {};
    message.mapBoolDouble = {};
    message.mapBoolEnum = {};
    message.mapBoolMessage = {};
    message.mapBoolDuration = {};
    message.mapBoolTimestamp = {};
    message.mapBoolNullValue = {};
    message.mapBoolAny = {};
    message.mapBoolStruct = {};
    message.mapBoolValue = {};
    message.mapBoolListValue = {};
    message.mapBoolInt64Wrapper = {};
    message.mapBoolInt32Wrapper = {};
    message.mapBoolDoubleWrapper = {};
    message.mapBoolFloatWrapper = {};
    message.mapBoolUint64Wrapper = {};
    message.mapBoolUint32Wrapper = {};
    message.mapBoolStringWrapper = {};
    message.mapBoolBoolWrapper = {};
    message.mapBoolBytesWrapper = {};
    message.mapInt32Bool = {};
    message.mapInt32String = {};
    message.mapInt32Bytes = {};
    message.mapInt32Int32 = {};
    message.mapInt32Int64 = {};
    message.mapInt32Uint32 = {};
    message.mapInt32Uint64 = {};
    message.mapInt32Float = {};
    message.mapInt32Double = {};
    message.mapInt32Enum = {};
    message.mapInt32Message = {};
    message.mapInt32Duration = {};
    message.mapInt32Timestamp = {};
    message.mapInt32NullValue = {};
    message.mapInt32Any = {};
    message.mapInt32Struct = {};
    message.mapInt32Value = {};
    message.mapInt32ListValue = {};
    message.mapInt32Int64Wrapper = {};
    message.mapInt32Int32Wrapper = {};
    message.mapInt32DoubleWrapper = {};
    message.mapInt32FloatWrapper = {};
    message.mapInt32Uint64Wrapper = {};
    message.mapInt32Uint32Wrapper = {};
    message.mapInt32StringWrapper = {};
    message.mapInt32BoolWrapper = {};
    message.mapInt32BytesWrapper = {};
    message.mapInt64Bool = {};
    message.mapInt64String = {};
    message.mapInt64Bytes = {};
    message.mapInt64Int32 = {};
    message.mapInt64Int64 = {};
    message.mapInt64Uint32 = {};
    message.mapInt64Uint64 = {};
    message.mapInt64Float = {};
    message.mapInt64Double = {};
    message.mapInt64Enum = {};
    message.mapInt64Message = {};
    message.mapInt64Duration = {};
    message.mapInt64Timestamp = {};
    message.mapInt64NullValue = {};
    message.mapInt64Any = {};
    message.mapInt64Struct = {};
    message.mapInt64Value = {};
    message.mapInt64ListValue = {};
    message.mapInt64Int64Wrapper = {};
    message.mapInt64Int32Wrapper = {};
    message.mapInt64DoubleWrapper = {};
    message.mapInt64FloatWrapper = {};
    message.mapInt64Uint64Wrapper = {};
    message.mapInt64Uint32Wrapper = {};
    message.mapInt64StringWrapper = {};
    message.mapInt64BoolWrapper = {};
    message.mapInt64BytesWrapper = {};
    message.mapUint32Bool = {};
    message.mapUint32String = {};
    message.mapUint32Bytes = {};
    message.mapUint32Int32 = {};
    message.mapUint32Int64 = {};
    message.mapUint32Uint32 = {};
    message.mapUint32Uint64 = {};
    message.mapUint32Float = {};
    message.mapUint32Double = {};
    message.mapUint32Enum = {};
    message.mapUint32Message = {};
    message.mapUint32Duration = {};
    message.mapUint32Timestamp = {};
    message.mapUint32NullValue = {};
    message.mapUint32Any = {};
    message.mapUint32Struct = {};
    message.mapUint32Value = {};
    message.mapUint32ListValue = {};
    message.mapUint32Int64Wrapper = {};
    message.mapUint32Int32Wrapper = {};
    message.mapUint32DoubleWrapper = {};
    message.mapUint32FloatWrapper = {};
    message.mapUint32Uint64Wrapper = {};
    message.mapUint32Uint32Wrapper = {};
    message.mapUint32StringWrapper = {};
    message.mapUint32BoolWrapper = {};
    message.mapUint32BytesWrapper = {};
    message.mapUint64Bool = {};
    message.mapUint64String = {};
    message.mapUint64Bytes = {};
    message.mapUint64Int32 = {};
    message.mapUint64Int64 = {};
    message.mapUint64Uint32 = {};
    message.mapUint64Uint64 = {};
    message.mapUint64Float = {};
    message.mapUint64Double = {};
    message.mapUint64Enum = {};
    message.mapUint64Message = {};
    message.mapUint64Duration = {};
    message.mapUint64Timestamp = {};
    message.mapUint64NullValue = {};
    message.mapUint64Any = {};
    message.mapUint64Struct = {};
    message.mapUint64Value = {};
    message.mapUint64ListValue = {};
    message.mapUint64Int64Wrapper = {};
    message.mapUint64Int32Wrapper = {};
    message.mapUint64DoubleWrapper = {};
    message.mapUint64FloatWrapper = {};
    message.mapUint64Uint64Wrapper = {};
    message.mapUint64Uint32Wrapper = {};
    message.mapUint64StringWrapper = {};
    message.mapUint64BoolWrapper = {};
    message.mapUint64BytesWrapper = {};
    message.mapStringBool = {};
    message.mapStringString = {};
    message.mapStringBytes = {};
    message.mapStringInt32 = {};
    message.mapStringInt64 = {};
    message.mapStringUint32 = {};
    message.mapStringUint64 = {};
    message.mapStringFloat = {};
    message.mapStringDouble = {};
    message.mapStringEnum = {};
    message.mapStringMessage = {};
    message.mapStringDuration = {};
    message.mapStringTimestamp = {};
    message.mapStringNullValue = {};
    message.mapStringAny = {};
    message.mapStringStruct = {};
    message.mapStringValue = {};
    message.mapStringListValue = {};
    message.mapStringInt64Wrapper = {};
    message.mapStringInt32Wrapper = {};
    message.mapStringDoubleWrapper = {};
    message.mapStringFloatWrapper = {};
    message.mapStringUint64Wrapper = {};
    message.mapStringUint32Wrapper = {};
    message.mapStringStringWrapper = {};
    message.mapStringBoolWrapper = {};
    message.mapStringBytesWrapper = {};
    if (object.singleInt32 !== undefined && object.singleInt32 !== null) {
      message.singleInt32 = object.singleInt32;
    } else {
      message.singleInt32 = 0;
    }
    if (object.singleInt64 !== undefined && object.singleInt64 !== null) {
      message.singleInt64 = object.singleInt64;
    } else {
      message.singleInt64 = 0;
    }
    if (object.singleUint32 !== undefined && object.singleUint32 !== null) {
      message.singleUint32 = object.singleUint32;
    } else {
      message.singleUint32 = 0;
    }
    if (object.singleUint64 !== undefined && object.singleUint64 !== null) {
      message.singleUint64 = object.singleUint64;
    } else {
      message.singleUint64 = 0;
    }
    if (object.singleSint32 !== undefined && object.singleSint32 !== null) {
      message.singleSint32 = object.singleSint32;
    } else {
      message.singleSint32 = 0;
    }
    if (object.singleSint64 !== undefined && object.singleSint64 !== null) {
      message.singleSint64 = object.singleSint64;
    } else {
      message.singleSint64 = 0;
    }
    if (object.singleFixed32 !== undefined && object.singleFixed32 !== null) {
      message.singleFixed32 = object.singleFixed32;
    } else {
      message.singleFixed32 = 0;
    }
    if (object.singleFixed64 !== undefined && object.singleFixed64 !== null) {
      message.singleFixed64 = object.singleFixed64;
    } else {
      message.singleFixed64 = 0;
    }
    if (object.singleSfixed32 !== undefined && object.singleSfixed32 !== null) {
      message.singleSfixed32 = object.singleSfixed32;
    } else {
      message.singleSfixed32 = 0;
    }
    if (object.singleSfixed64 !== undefined && object.singleSfixed64 !== null) {
      message.singleSfixed64 = object.singleSfixed64;
    } else {
      message.singleSfixed64 = 0;
    }
    if (object.singleFloat !== undefined && object.singleFloat !== null) {
      message.singleFloat = object.singleFloat;
    } else {
      message.singleFloat = 0;
    }
    if (object.singleDouble !== undefined && object.singleDouble !== null) {
      message.singleDouble = object.singleDouble;
    } else {
      message.singleDouble = 0;
    }
    if (object.singleBool !== undefined && object.singleBool !== null) {
      message.singleBool = object.singleBool;
    } else {
      message.singleBool = false;
    }
    if (object.singleString !== undefined && object.singleString !== null) {
      message.singleString = object.singleString;
    } else {
      message.singleString = "";
    }
    if (object.singleBytes !== undefined && object.singleBytes !== null) {
      message.singleBytes = object.singleBytes;
    } else {
      message.singleBytes = new Uint8Array();
    }
    if (object.optionalBool !== undefined && object.optionalBool !== null) {
      message.optionalBool = object.optionalBool;
    } else {
      message.optionalBool = undefined;
    }
    if (object.optionalString !== undefined && object.optionalString !== null) {
      message.optionalString = object.optionalString;
    } else {
      message.optionalString = undefined;
    }
    if (object.in !== undefined && object.in !== null) {
      message.in = object.in;
    } else {
      message.in = false;
    }
    if (object.singleAny !== undefined && object.singleAny !== null) {
      message.singleAny = Any.fromPartial(object.singleAny);
    } else {
      message.singleAny = undefined;
    }
    if (object.singleDuration !== undefined && object.singleDuration !== null) {
      message.singleDuration = Duration.fromPartial(object.singleDuration);
    } else {
      message.singleDuration = undefined;
    }
    if (
      object.singleTimestamp !== undefined &&
      object.singleTimestamp !== null
    ) {
      message.singleTimestamp = object.singleTimestamp;
    } else {
      message.singleTimestamp = undefined;
    }
    if (object.singleStruct !== undefined && object.singleStruct !== null) {
      message.singleStruct = Struct.fromPartial(object.singleStruct);
    } else {
      message.singleStruct = undefined;
    }
    if (object.singleValue !== undefined && object.singleValue !== null) {
      message.singleValue = Value.fromPartial(object.singleValue);
    } else {
      message.singleValue = undefined;
    }
    if (
      object.singleInt64Wrapper !== undefined &&
      object.singleInt64Wrapper !== null
    ) {
      message.singleInt64Wrapper = object.singleInt64Wrapper;
    } else {
      message.singleInt64Wrapper = undefined;
    }
    if (
      object.singleInt32Wrapper !== undefined &&
      object.singleInt32Wrapper !== null
    ) {
      message.singleInt32Wrapper = object.singleInt32Wrapper;
    } else {
      message.singleInt32Wrapper = undefined;
    }
    if (
      object.singleDoubleWrapper !== undefined &&
      object.singleDoubleWrapper !== null
    ) {
      message.singleDoubleWrapper = object.singleDoubleWrapper;
    } else {
      message.singleDoubleWrapper = undefined;
    }
    if (
      object.singleFloatWrapper !== undefined &&
      object.singleFloatWrapper !== null
    ) {
      message.singleFloatWrapper = object.singleFloatWrapper;
    } else {
      message.singleFloatWrapper = undefined;
    }
    if (
      object.singleUint64Wrapper !== undefined &&
      object.singleUint64Wrapper !== null
    ) {
      message.singleUint64Wrapper = object.singleUint64Wrapper;
    } else {
      message.singleUint64Wrapper = undefined;
    }
    if (
      object.singleUint32Wrapper !== undefined &&
      object.singleUint32Wrapper !== null
    ) {
      message.singleUint32Wrapper = object.singleUint32Wrapper;
    } else {
      message.singleUint32Wrapper = undefined;
    }
    if (
      object.singleStringWrapper !== undefined &&
      object.singleStringWrapper !== null
    ) {
      message.singleStringWrapper = object.singleStringWrapper;
    } else {
      message.singleStringWrapper = undefined;
    }
    if (
      object.singleBoolWrapper !== undefined &&
      object.singleBoolWrapper !== null
    ) {
      message.singleBoolWrapper = object.singleBoolWrapper;
    } else {
      message.singleBoolWrapper = undefined;
    }
    if (
      object.singleBytesWrapper !== undefined &&
      object.singleBytesWrapper !== null
    ) {
      message.singleBytesWrapper = object.singleBytesWrapper;
    } else {
      message.singleBytesWrapper = undefined;
    }
    if (object.listValue !== undefined && object.listValue !== null) {
      message.listValue = ListValue.fromPartial(object.listValue);
    } else {
      message.listValue = undefined;
    }
    if (object.nullValue !== undefined && object.nullValue !== null) {
      message.nullValue = object.nullValue;
    } else {
      message.nullValue = 0;
    }
    if (
      object.optionalNullValue !== undefined &&
      object.optionalNullValue !== null
    ) {
      message.optionalNullValue = object.optionalNullValue;
    } else {
      message.optionalNullValue = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromPartial(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
    if (object.empty !== undefined && object.empty !== null) {
      message.empty = Empty.fromPartial(object.empty);
    } else {
      message.empty = undefined;
    }
    if (
      object.singleNestedMessage !== undefined &&
      object.singleNestedMessage !== null
    ) {
      message.singleNestedMessage = TestAllTypes_NestedMessage.fromPartial(
        object.singleNestedMessage
      );
    } else {
      message.singleNestedMessage = undefined;
    }
    if (
      object.singleNestedEnum !== undefined &&
      object.singleNestedEnum !== null
    ) {
      message.singleNestedEnum = object.singleNestedEnum;
    } else {
      message.singleNestedEnum = undefined;
    }
    if (
      object.standaloneMessage !== undefined &&
      object.standaloneMessage !== null
    ) {
      message.standaloneMessage = TestAllTypes_NestedMessage.fromPartial(
        object.standaloneMessage
      );
    } else {
      message.standaloneMessage = undefined;
    }
    if (object.standaloneEnum !== undefined && object.standaloneEnum !== null) {
      message.standaloneEnum = object.standaloneEnum;
    } else {
      message.standaloneEnum = 0;
    }
    if (object.repeatedInt32 !== undefined && object.repeatedInt32 !== null) {
      for (const e of object.repeatedInt32) {
        message.repeatedInt32.push(e);
      }
    }
    if (object.repeatedInt64 !== undefined && object.repeatedInt64 !== null) {
      for (const e of object.repeatedInt64) {
        message.repeatedInt64.push(e);
      }
    }
    if (object.repeatedUint32 !== undefined && object.repeatedUint32 !== null) {
      for (const e of object.repeatedUint32) {
        message.repeatedUint32.push(e);
      }
    }
    if (object.repeatedUint64 !== undefined && object.repeatedUint64 !== null) {
      for (const e of object.repeatedUint64) {
        message.repeatedUint64.push(e);
      }
    }
    if (object.repeatedSint32 !== undefined && object.repeatedSint32 !== null) {
      for (const e of object.repeatedSint32) {
        message.repeatedSint32.push(e);
      }
    }
    if (object.repeatedSint64 !== undefined && object.repeatedSint64 !== null) {
      for (const e of object.repeatedSint64) {
        message.repeatedSint64.push(e);
      }
    }
    if (
      object.repeatedFixed32 !== undefined &&
      object.repeatedFixed32 !== null
    ) {
      for (const e of object.repeatedFixed32) {
        message.repeatedFixed32.push(e);
      }
    }
    if (
      object.repeatedFixed64 !== undefined &&
      object.repeatedFixed64 !== null
    ) {
      for (const e of object.repeatedFixed64) {
        message.repeatedFixed64.push(e);
      }
    }
    if (
      object.repeatedSfixed32 !== undefined &&
      object.repeatedSfixed32 !== null
    ) {
      for (const e of object.repeatedSfixed32) {
        message.repeatedSfixed32.push(e);
      }
    }
    if (
      object.repeatedSfixed64 !== undefined &&
      object.repeatedSfixed64 !== null
    ) {
      for (const e of object.repeatedSfixed64) {
        message.repeatedSfixed64.push(e);
      }
    }
    if (object.repeatedFloat !== undefined && object.repeatedFloat !== null) {
      for (const e of object.repeatedFloat) {
        message.repeatedFloat.push(e);
      }
    }
    if (object.repeatedDouble !== undefined && object.repeatedDouble !== null) {
      for (const e of object.repeatedDouble) {
        message.repeatedDouble.push(e);
      }
    }
    if (object.repeatedBool !== undefined && object.repeatedBool !== null) {
      for (const e of object.repeatedBool) {
        message.repeatedBool.push(e);
      }
    }
    if (object.repeatedString !== undefined && object.repeatedString !== null) {
      for (const e of object.repeatedString) {
        message.repeatedString.push(e);
      }
    }
    if (object.repeatedBytes !== undefined && object.repeatedBytes !== null) {
      for (const e of object.repeatedBytes) {
        message.repeatedBytes.push(e);
      }
    }
    if (
      object.repeatedNestedMessage !== undefined &&
      object.repeatedNestedMessage !== null
    ) {
      for (const e of object.repeatedNestedMessage) {
        message.repeatedNestedMessage.push(
          TestAllTypes_NestedMessage.fromPartial(e)
        );
      }
    }
    if (
      object.repeatedNestedEnum !== undefined &&
      object.repeatedNestedEnum !== null
    ) {
      for (const e of object.repeatedNestedEnum) {
        message.repeatedNestedEnum.push(e);
      }
    }
    if (
      object.repeatedStringPiece !== undefined &&
      object.repeatedStringPiece !== null
    ) {
      for (const e of object.repeatedStringPiece) {
        message.repeatedStringPiece.push(e);
      }
    }
    if (object.repeatedCord !== undefined && object.repeatedCord !== null) {
      for (const e of object.repeatedCord) {
        message.repeatedCord.push(e);
      }
    }
    if (
      object.repeatedLazyMessage !== undefined &&
      object.repeatedLazyMessage !== null
    ) {
      for (const e of object.repeatedLazyMessage) {
        message.repeatedLazyMessage.push(
          TestAllTypes_NestedMessage.fromPartial(e)
        );
      }
    }
    if (object.repeatedAny !== undefined && object.repeatedAny !== null) {
      for (const e of object.repeatedAny) {
        message.repeatedAny.push(Any.fromPartial(e));
      }
    }
    if (
      object.repeatedDuration !== undefined &&
      object.repeatedDuration !== null
    ) {
      for (const e of object.repeatedDuration) {
        message.repeatedDuration.push(Duration.fromPartial(e));
      }
    }
    if (
      object.repeatedTimestamp !== undefined &&
      object.repeatedTimestamp !== null
    ) {
      for (const e of object.repeatedTimestamp) {
        message.repeatedTimestamp.push(e);
      }
    }
    if (object.repeatedStruct !== undefined && object.repeatedStruct !== null) {
      for (const e of object.repeatedStruct) {
        message.repeatedStruct.push(Struct.fromPartial(e));
      }
    }
    if (object.repeatedValue !== undefined && object.repeatedValue !== null) {
      for (const e of object.repeatedValue) {
        message.repeatedValue.push(Value.fromPartial(e));
      }
    }
    if (
      object.repeatedInt64Wrapper !== undefined &&
      object.repeatedInt64Wrapper !== null
    ) {
      for (const e of object.repeatedInt64Wrapper) {
        message.repeatedInt64Wrapper.push(e);
      }
    }
    if (
      object.repeatedInt32Wrapper !== undefined &&
      object.repeatedInt32Wrapper !== null
    ) {
      for (const e of object.repeatedInt32Wrapper) {
        message.repeatedInt32Wrapper.push(e);
      }
    }
    if (
      object.repeatedDoubleWrapper !== undefined &&
      object.repeatedDoubleWrapper !== null
    ) {
      for (const e of object.repeatedDoubleWrapper) {
        message.repeatedDoubleWrapper.push(e);
      }
    }
    if (
      object.repeatedFloatWrapper !== undefined &&
      object.repeatedFloatWrapper !== null
    ) {
      for (const e of object.repeatedFloatWrapper) {
        message.repeatedFloatWrapper.push(e);
      }
    }
    if (
      object.repeatedUint64Wrapper !== undefined &&
      object.repeatedUint64Wrapper !== null
    ) {
      for (const e of object.repeatedUint64Wrapper) {
        message.repeatedUint64Wrapper.push(e);
      }
    }
    if (
      object.repeatedUint32Wrapper !== undefined &&
      object.repeatedUint32Wrapper !== null
    ) {
      for (const e of object.repeatedUint32Wrapper) {
        message.repeatedUint32Wrapper.push(e);
      }
    }
    if (
      object.repeatedStringWrapper !== undefined &&
      object.repeatedStringWrapper !== null
    ) {
      for (const e of object.repeatedStringWrapper) {
        message.repeatedStringWrapper.push(e);
      }
    }
    if (
      object.repeatedBoolWrapper !== undefined &&
      object.repeatedBoolWrapper !== null
    ) {
      for (const e of object.repeatedBoolWrapper) {
        message.repeatedBoolWrapper.push(e);
      }
    }
    if (
      object.repeatedBytesWrapper !== undefined &&
      object.repeatedBytesWrapper !== null
    ) {
      for (const e of object.repeatedBytesWrapper) {
        message.repeatedBytesWrapper.push(e);
      }
    }
    if (
      object.repeatedListValue !== undefined &&
      object.repeatedListValue !== null
    ) {
      for (const e of object.repeatedListValue) {
        message.repeatedListValue.push(ListValue.fromPartial(e));
      }
    }
    if (
      object.repeatedNullValue !== undefined &&
      object.repeatedNullValue !== null
    ) {
      for (const e of object.repeatedNullValue) {
        message.repeatedNullValue.push(e);
      }
    }
    if (
      object.mapInt64NestedType !== undefined &&
      object.mapInt64NestedType !== null
    ) {
      Object.entries(object.mapInt64NestedType).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64NestedType[
            Number(key)
          ] = NestedTestAllTypes.fromPartial(value);
        }
      });
    }
    if (object.mapBoolBool !== undefined && object.mapBoolBool !== null) {
      Object.entries(object.mapBoolBool).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolBool[Number(key)] = Boolean(value);
        }
      });
    }
    if (object.mapBoolString !== undefined && object.mapBoolString !== null) {
      Object.entries(object.mapBoolString).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolString[Number(key)] = String(value);
        }
      });
    }
    if (object.mapBoolBytes !== undefined && object.mapBoolBytes !== null) {
      Object.entries(object.mapBoolBytes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolBytes[Number(key)] = value;
        }
      });
    }
    if (object.mapBoolInt32 !== undefined && object.mapBoolInt32 !== null) {
      Object.entries(object.mapBoolInt32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolInt32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapBoolInt64 !== undefined && object.mapBoolInt64 !== null) {
      Object.entries(object.mapBoolInt64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolInt64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapBoolUint32 !== undefined && object.mapBoolUint32 !== null) {
      Object.entries(object.mapBoolUint32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolUint32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapBoolUint64 !== undefined && object.mapBoolUint64 !== null) {
      Object.entries(object.mapBoolUint64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolUint64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapBoolFloat !== undefined && object.mapBoolFloat !== null) {
      Object.entries(object.mapBoolFloat).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolFloat[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapBoolDouble !== undefined && object.mapBoolDouble !== null) {
      Object.entries(object.mapBoolDouble).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolDouble[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapBoolEnum !== undefined && object.mapBoolEnum !== null) {
      Object.entries(object.mapBoolEnum).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolEnum[Number(key)] = value as number;
        }
      });
    }
    if (object.mapBoolMessage !== undefined && object.mapBoolMessage !== null) {
      Object.entries(object.mapBoolMessage).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolMessage[
            Number(key)
          ] = TestAllTypes_NestedMessage.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolDuration !== undefined &&
      object.mapBoolDuration !== null
    ) {
      Object.entries(object.mapBoolDuration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolDuration[Number(key)] = Duration.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolTimestamp !== undefined &&
      object.mapBoolTimestamp !== null
    ) {
      Object.entries(object.mapBoolTimestamp).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolTimestamp[Number(key)] = value;
        }
      });
    }
    if (
      object.mapBoolNullValue !== undefined &&
      object.mapBoolNullValue !== null
    ) {
      Object.entries(object.mapBoolNullValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolNullValue[Number(key)] = value as number;
        }
      });
    }
    if (object.mapBoolAny !== undefined && object.mapBoolAny !== null) {
      Object.entries(object.mapBoolAny).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolAny[Number(key)] = Any.fromPartial(value);
        }
      });
    }
    if (object.mapBoolStruct !== undefined && object.mapBoolStruct !== null) {
      Object.entries(object.mapBoolStruct).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolStruct[Number(key)] = Struct.fromPartial(value);
        }
      });
    }
    if (object.mapBoolValue !== undefined && object.mapBoolValue !== null) {
      Object.entries(object.mapBoolValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolValue[Number(key)] = Value.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolListValue !== undefined &&
      object.mapBoolListValue !== null
    ) {
      Object.entries(object.mapBoolListValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolListValue[Number(key)] = ListValue.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolInt64Wrapper !== undefined &&
      object.mapBoolInt64Wrapper !== null
    ) {
      Object.entries(object.mapBoolInt64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolInt64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolInt32Wrapper !== undefined &&
      object.mapBoolInt32Wrapper !== null
    ) {
      Object.entries(object.mapBoolInt32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolInt32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolDoubleWrapper !== undefined &&
      object.mapBoolDoubleWrapper !== null
    ) {
      Object.entries(object.mapBoolDoubleWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolDoubleWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolFloatWrapper !== undefined &&
      object.mapBoolFloatWrapper !== null
    ) {
      Object.entries(object.mapBoolFloatWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolFloatWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolUint64Wrapper !== undefined &&
      object.mapBoolUint64Wrapper !== null
    ) {
      Object.entries(object.mapBoolUint64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolUint64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolUint32Wrapper !== undefined &&
      object.mapBoolUint32Wrapper !== null
    ) {
      Object.entries(object.mapBoolUint32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolUint32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolStringWrapper !== undefined &&
      object.mapBoolStringWrapper !== null
    ) {
      Object.entries(object.mapBoolStringWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolStringWrapper[Number(key)] =
            string | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolBoolWrapper !== undefined &&
      object.mapBoolBoolWrapper !== null
    ) {
      Object.entries(object.mapBoolBoolWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolBoolWrapper[Number(key)] =
            boolean | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapBoolBytesWrapper !== undefined &&
      object.mapBoolBytesWrapper !== null
    ) {
      Object.entries(object.mapBoolBytesWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapBoolBytesWrapper[Number(key)] =
            Uint8Array | undefined.fromPartial(value);
        }
      });
    }
    if (object.mapInt32Bool !== undefined && object.mapInt32Bool !== null) {
      Object.entries(object.mapInt32Bool).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Bool[Number(key)] = Boolean(value);
        }
      });
    }
    if (object.mapInt32String !== undefined && object.mapInt32String !== null) {
      Object.entries(object.mapInt32String).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32String[Number(key)] = String(value);
        }
      });
    }
    if (object.mapInt32Bytes !== undefined && object.mapInt32Bytes !== null) {
      Object.entries(object.mapInt32Bytes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Bytes[Number(key)] = value;
        }
      });
    }
    if (object.mapInt32Int32 !== undefined && object.mapInt32Int32 !== null) {
      Object.entries(object.mapInt32Int32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Int32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt32Int64 !== undefined && object.mapInt32Int64 !== null) {
      Object.entries(object.mapInt32Int64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Int64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt32Uint32 !== undefined && object.mapInt32Uint32 !== null) {
      Object.entries(object.mapInt32Uint32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Uint32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt32Uint64 !== undefined && object.mapInt32Uint64 !== null) {
      Object.entries(object.mapInt32Uint64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Uint64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt32Float !== undefined && object.mapInt32Float !== null) {
      Object.entries(object.mapInt32Float).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Float[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt32Double !== undefined && object.mapInt32Double !== null) {
      Object.entries(object.mapInt32Double).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Double[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt32Enum !== undefined && object.mapInt32Enum !== null) {
      Object.entries(object.mapInt32Enum).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Enum[Number(key)] = value as number;
        }
      });
    }
    if (
      object.mapInt32Message !== undefined &&
      object.mapInt32Message !== null
    ) {
      Object.entries(object.mapInt32Message).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Message[
            Number(key)
          ] = TestAllTypes_NestedMessage.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32Duration !== undefined &&
      object.mapInt32Duration !== null
    ) {
      Object.entries(object.mapInt32Duration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Duration[Number(key)] = Duration.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32Timestamp !== undefined &&
      object.mapInt32Timestamp !== null
    ) {
      Object.entries(object.mapInt32Timestamp).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Timestamp[Number(key)] = value;
        }
      });
    }
    if (
      object.mapInt32NullValue !== undefined &&
      object.mapInt32NullValue !== null
    ) {
      Object.entries(object.mapInt32NullValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32NullValue[Number(key)] = value as number;
        }
      });
    }
    if (object.mapInt32Any !== undefined && object.mapInt32Any !== null) {
      Object.entries(object.mapInt32Any).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Any[Number(key)] = Any.fromPartial(value);
        }
      });
    }
    if (object.mapInt32Struct !== undefined && object.mapInt32Struct !== null) {
      Object.entries(object.mapInt32Struct).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Struct[Number(key)] = Struct.fromPartial(value);
        }
      });
    }
    if (object.mapInt32Value !== undefined && object.mapInt32Value !== null) {
      Object.entries(object.mapInt32Value).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Value[Number(key)] = Value.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32ListValue !== undefined &&
      object.mapInt32ListValue !== null
    ) {
      Object.entries(object.mapInt32ListValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32ListValue[Number(key)] = ListValue.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32Int64Wrapper !== undefined &&
      object.mapInt32Int64Wrapper !== null
    ) {
      Object.entries(object.mapInt32Int64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Int64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32Int32Wrapper !== undefined &&
      object.mapInt32Int32Wrapper !== null
    ) {
      Object.entries(object.mapInt32Int32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Int32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32DoubleWrapper !== undefined &&
      object.mapInt32DoubleWrapper !== null
    ) {
      Object.entries(object.mapInt32DoubleWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32DoubleWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32FloatWrapper !== undefined &&
      object.mapInt32FloatWrapper !== null
    ) {
      Object.entries(object.mapInt32FloatWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32FloatWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32Uint64Wrapper !== undefined &&
      object.mapInt32Uint64Wrapper !== null
    ) {
      Object.entries(object.mapInt32Uint64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Uint64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32Uint32Wrapper !== undefined &&
      object.mapInt32Uint32Wrapper !== null
    ) {
      Object.entries(object.mapInt32Uint32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32Uint32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32StringWrapper !== undefined &&
      object.mapInt32StringWrapper !== null
    ) {
      Object.entries(object.mapInt32StringWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32StringWrapper[Number(key)] =
            string | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32BoolWrapper !== undefined &&
      object.mapInt32BoolWrapper !== null
    ) {
      Object.entries(object.mapInt32BoolWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32BoolWrapper[Number(key)] =
            boolean | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt32BytesWrapper !== undefined &&
      object.mapInt32BytesWrapper !== null
    ) {
      Object.entries(object.mapInt32BytesWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt32BytesWrapper[Number(key)] =
            Uint8Array | undefined.fromPartial(value);
        }
      });
    }
    if (object.mapInt64Bool !== undefined && object.mapInt64Bool !== null) {
      Object.entries(object.mapInt64Bool).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Bool[Number(key)] = Boolean(value);
        }
      });
    }
    if (object.mapInt64String !== undefined && object.mapInt64String !== null) {
      Object.entries(object.mapInt64String).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64String[Number(key)] = String(value);
        }
      });
    }
    if (object.mapInt64Bytes !== undefined && object.mapInt64Bytes !== null) {
      Object.entries(object.mapInt64Bytes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Bytes[Number(key)] = value;
        }
      });
    }
    if (object.mapInt64Int32 !== undefined && object.mapInt64Int32 !== null) {
      Object.entries(object.mapInt64Int32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Int32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt64Int64 !== undefined && object.mapInt64Int64 !== null) {
      Object.entries(object.mapInt64Int64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Int64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt64Uint32 !== undefined && object.mapInt64Uint32 !== null) {
      Object.entries(object.mapInt64Uint32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Uint32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt64Uint64 !== undefined && object.mapInt64Uint64 !== null) {
      Object.entries(object.mapInt64Uint64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Uint64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt64Float !== undefined && object.mapInt64Float !== null) {
      Object.entries(object.mapInt64Float).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Float[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt64Double !== undefined && object.mapInt64Double !== null) {
      Object.entries(object.mapInt64Double).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Double[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapInt64Enum !== undefined && object.mapInt64Enum !== null) {
      Object.entries(object.mapInt64Enum).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Enum[Number(key)] = value as number;
        }
      });
    }
    if (
      object.mapInt64Message !== undefined &&
      object.mapInt64Message !== null
    ) {
      Object.entries(object.mapInt64Message).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Message[
            Number(key)
          ] = TestAllTypes_NestedMessage.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64Duration !== undefined &&
      object.mapInt64Duration !== null
    ) {
      Object.entries(object.mapInt64Duration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Duration[Number(key)] = Duration.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64Timestamp !== undefined &&
      object.mapInt64Timestamp !== null
    ) {
      Object.entries(object.mapInt64Timestamp).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Timestamp[Number(key)] = value;
        }
      });
    }
    if (
      object.mapInt64NullValue !== undefined &&
      object.mapInt64NullValue !== null
    ) {
      Object.entries(object.mapInt64NullValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64NullValue[Number(key)] = value as number;
        }
      });
    }
    if (object.mapInt64Any !== undefined && object.mapInt64Any !== null) {
      Object.entries(object.mapInt64Any).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Any[Number(key)] = Any.fromPartial(value);
        }
      });
    }
    if (object.mapInt64Struct !== undefined && object.mapInt64Struct !== null) {
      Object.entries(object.mapInt64Struct).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Struct[Number(key)] = Struct.fromPartial(value);
        }
      });
    }
    if (object.mapInt64Value !== undefined && object.mapInt64Value !== null) {
      Object.entries(object.mapInt64Value).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Value[Number(key)] = Value.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64ListValue !== undefined &&
      object.mapInt64ListValue !== null
    ) {
      Object.entries(object.mapInt64ListValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64ListValue[Number(key)] = ListValue.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64Int64Wrapper !== undefined &&
      object.mapInt64Int64Wrapper !== null
    ) {
      Object.entries(object.mapInt64Int64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Int64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64Int32Wrapper !== undefined &&
      object.mapInt64Int32Wrapper !== null
    ) {
      Object.entries(object.mapInt64Int32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Int32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64DoubleWrapper !== undefined &&
      object.mapInt64DoubleWrapper !== null
    ) {
      Object.entries(object.mapInt64DoubleWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64DoubleWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64FloatWrapper !== undefined &&
      object.mapInt64FloatWrapper !== null
    ) {
      Object.entries(object.mapInt64FloatWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64FloatWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64Uint64Wrapper !== undefined &&
      object.mapInt64Uint64Wrapper !== null
    ) {
      Object.entries(object.mapInt64Uint64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Uint64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64Uint32Wrapper !== undefined &&
      object.mapInt64Uint32Wrapper !== null
    ) {
      Object.entries(object.mapInt64Uint32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64Uint32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64StringWrapper !== undefined &&
      object.mapInt64StringWrapper !== null
    ) {
      Object.entries(object.mapInt64StringWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64StringWrapper[Number(key)] =
            string | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64BoolWrapper !== undefined &&
      object.mapInt64BoolWrapper !== null
    ) {
      Object.entries(object.mapInt64BoolWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64BoolWrapper[Number(key)] =
            boolean | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapInt64BytesWrapper !== undefined &&
      object.mapInt64BytesWrapper !== null
    ) {
      Object.entries(object.mapInt64BytesWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapInt64BytesWrapper[Number(key)] =
            Uint8Array | undefined.fromPartial(value);
        }
      });
    }
    if (object.mapUint32Bool !== undefined && object.mapUint32Bool !== null) {
      Object.entries(object.mapUint32Bool).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Bool[Number(key)] = Boolean(value);
        }
      });
    }
    if (
      object.mapUint32String !== undefined &&
      object.mapUint32String !== null
    ) {
      Object.entries(object.mapUint32String).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32String[Number(key)] = String(value);
        }
      });
    }
    if (object.mapUint32Bytes !== undefined && object.mapUint32Bytes !== null) {
      Object.entries(object.mapUint32Bytes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Bytes[Number(key)] = value;
        }
      });
    }
    if (object.mapUint32Int32 !== undefined && object.mapUint32Int32 !== null) {
      Object.entries(object.mapUint32Int32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Int32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapUint32Int64 !== undefined && object.mapUint32Int64 !== null) {
      Object.entries(object.mapUint32Int64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Int64[Number(key)] = Number(value);
        }
      });
    }
    if (
      object.mapUint32Uint32 !== undefined &&
      object.mapUint32Uint32 !== null
    ) {
      Object.entries(object.mapUint32Uint32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Uint32[Number(key)] = Number(value);
        }
      });
    }
    if (
      object.mapUint32Uint64 !== undefined &&
      object.mapUint32Uint64 !== null
    ) {
      Object.entries(object.mapUint32Uint64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Uint64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapUint32Float !== undefined && object.mapUint32Float !== null) {
      Object.entries(object.mapUint32Float).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Float[Number(key)] = Number(value);
        }
      });
    }
    if (
      object.mapUint32Double !== undefined &&
      object.mapUint32Double !== null
    ) {
      Object.entries(object.mapUint32Double).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Double[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapUint32Enum !== undefined && object.mapUint32Enum !== null) {
      Object.entries(object.mapUint32Enum).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Enum[Number(key)] = value as number;
        }
      });
    }
    if (
      object.mapUint32Message !== undefined &&
      object.mapUint32Message !== null
    ) {
      Object.entries(object.mapUint32Message).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Message[
            Number(key)
          ] = TestAllTypes_NestedMessage.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32Duration !== undefined &&
      object.mapUint32Duration !== null
    ) {
      Object.entries(object.mapUint32Duration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Duration[Number(key)] = Duration.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32Timestamp !== undefined &&
      object.mapUint32Timestamp !== null
    ) {
      Object.entries(object.mapUint32Timestamp).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Timestamp[Number(key)] = value;
        }
      });
    }
    if (
      object.mapUint32NullValue !== undefined &&
      object.mapUint32NullValue !== null
    ) {
      Object.entries(object.mapUint32NullValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32NullValue[Number(key)] = value as number;
        }
      });
    }
    if (object.mapUint32Any !== undefined && object.mapUint32Any !== null) {
      Object.entries(object.mapUint32Any).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Any[Number(key)] = Any.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32Struct !== undefined &&
      object.mapUint32Struct !== null
    ) {
      Object.entries(object.mapUint32Struct).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Struct[Number(key)] = Struct.fromPartial(value);
        }
      });
    }
    if (object.mapUint32Value !== undefined && object.mapUint32Value !== null) {
      Object.entries(object.mapUint32Value).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Value[Number(key)] = Value.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32ListValue !== undefined &&
      object.mapUint32ListValue !== null
    ) {
      Object.entries(object.mapUint32ListValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32ListValue[Number(key)] = ListValue.fromPartial(
            value
          );
        }
      });
    }
    if (
      object.mapUint32Int64Wrapper !== undefined &&
      object.mapUint32Int64Wrapper !== null
    ) {
      Object.entries(object.mapUint32Int64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Int64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32Int32Wrapper !== undefined &&
      object.mapUint32Int32Wrapper !== null
    ) {
      Object.entries(object.mapUint32Int32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Int32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32DoubleWrapper !== undefined &&
      object.mapUint32DoubleWrapper !== null
    ) {
      Object.entries(object.mapUint32DoubleWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32DoubleWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32FloatWrapper !== undefined &&
      object.mapUint32FloatWrapper !== null
    ) {
      Object.entries(object.mapUint32FloatWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32FloatWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32Uint64Wrapper !== undefined &&
      object.mapUint32Uint64Wrapper !== null
    ) {
      Object.entries(object.mapUint32Uint64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Uint64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32Uint32Wrapper !== undefined &&
      object.mapUint32Uint32Wrapper !== null
    ) {
      Object.entries(object.mapUint32Uint32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32Uint32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32StringWrapper !== undefined &&
      object.mapUint32StringWrapper !== null
    ) {
      Object.entries(object.mapUint32StringWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32StringWrapper[Number(key)] =
            string | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32BoolWrapper !== undefined &&
      object.mapUint32BoolWrapper !== null
    ) {
      Object.entries(object.mapUint32BoolWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32BoolWrapper[Number(key)] =
            boolean | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint32BytesWrapper !== undefined &&
      object.mapUint32BytesWrapper !== null
    ) {
      Object.entries(object.mapUint32BytesWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint32BytesWrapper[Number(key)] =
            Uint8Array | undefined.fromPartial(value);
        }
      });
    }
    if (object.mapUint64Bool !== undefined && object.mapUint64Bool !== null) {
      Object.entries(object.mapUint64Bool).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Bool[Number(key)] = Boolean(value);
        }
      });
    }
    if (
      object.mapUint64String !== undefined &&
      object.mapUint64String !== null
    ) {
      Object.entries(object.mapUint64String).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64String[Number(key)] = String(value);
        }
      });
    }
    if (object.mapUint64Bytes !== undefined && object.mapUint64Bytes !== null) {
      Object.entries(object.mapUint64Bytes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Bytes[Number(key)] = value;
        }
      });
    }
    if (object.mapUint64Int32 !== undefined && object.mapUint64Int32 !== null) {
      Object.entries(object.mapUint64Int32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Int32[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapUint64Int64 !== undefined && object.mapUint64Int64 !== null) {
      Object.entries(object.mapUint64Int64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Int64[Number(key)] = Number(value);
        }
      });
    }
    if (
      object.mapUint64Uint32 !== undefined &&
      object.mapUint64Uint32 !== null
    ) {
      Object.entries(object.mapUint64Uint32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Uint32[Number(key)] = Number(value);
        }
      });
    }
    if (
      object.mapUint64Uint64 !== undefined &&
      object.mapUint64Uint64 !== null
    ) {
      Object.entries(object.mapUint64Uint64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Uint64[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapUint64Float !== undefined && object.mapUint64Float !== null) {
      Object.entries(object.mapUint64Float).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Float[Number(key)] = Number(value);
        }
      });
    }
    if (
      object.mapUint64Double !== undefined &&
      object.mapUint64Double !== null
    ) {
      Object.entries(object.mapUint64Double).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Double[Number(key)] = Number(value);
        }
      });
    }
    if (object.mapUint64Enum !== undefined && object.mapUint64Enum !== null) {
      Object.entries(object.mapUint64Enum).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Enum[Number(key)] = value as number;
        }
      });
    }
    if (
      object.mapUint64Message !== undefined &&
      object.mapUint64Message !== null
    ) {
      Object.entries(object.mapUint64Message).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Message[
            Number(key)
          ] = TestAllTypes_NestedMessage.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64Duration !== undefined &&
      object.mapUint64Duration !== null
    ) {
      Object.entries(object.mapUint64Duration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Duration[Number(key)] = Duration.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64Timestamp !== undefined &&
      object.mapUint64Timestamp !== null
    ) {
      Object.entries(object.mapUint64Timestamp).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Timestamp[Number(key)] = value;
        }
      });
    }
    if (
      object.mapUint64NullValue !== undefined &&
      object.mapUint64NullValue !== null
    ) {
      Object.entries(object.mapUint64NullValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64NullValue[Number(key)] = value as number;
        }
      });
    }
    if (object.mapUint64Any !== undefined && object.mapUint64Any !== null) {
      Object.entries(object.mapUint64Any).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Any[Number(key)] = Any.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64Struct !== undefined &&
      object.mapUint64Struct !== null
    ) {
      Object.entries(object.mapUint64Struct).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Struct[Number(key)] = Struct.fromPartial(value);
        }
      });
    }
    if (object.mapUint64Value !== undefined && object.mapUint64Value !== null) {
      Object.entries(object.mapUint64Value).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Value[Number(key)] = Value.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64ListValue !== undefined &&
      object.mapUint64ListValue !== null
    ) {
      Object.entries(object.mapUint64ListValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64ListValue[Number(key)] = ListValue.fromPartial(
            value
          );
        }
      });
    }
    if (
      object.mapUint64Int64Wrapper !== undefined &&
      object.mapUint64Int64Wrapper !== null
    ) {
      Object.entries(object.mapUint64Int64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Int64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64Int32Wrapper !== undefined &&
      object.mapUint64Int32Wrapper !== null
    ) {
      Object.entries(object.mapUint64Int32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Int32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64DoubleWrapper !== undefined &&
      object.mapUint64DoubleWrapper !== null
    ) {
      Object.entries(object.mapUint64DoubleWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64DoubleWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64FloatWrapper !== undefined &&
      object.mapUint64FloatWrapper !== null
    ) {
      Object.entries(object.mapUint64FloatWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64FloatWrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64Uint64Wrapper !== undefined &&
      object.mapUint64Uint64Wrapper !== null
    ) {
      Object.entries(object.mapUint64Uint64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Uint64Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64Uint32Wrapper !== undefined &&
      object.mapUint64Uint32Wrapper !== null
    ) {
      Object.entries(object.mapUint64Uint32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64Uint32Wrapper[Number(key)] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64StringWrapper !== undefined &&
      object.mapUint64StringWrapper !== null
    ) {
      Object.entries(object.mapUint64StringWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64StringWrapper[Number(key)] =
            string | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64BoolWrapper !== undefined &&
      object.mapUint64BoolWrapper !== null
    ) {
      Object.entries(object.mapUint64BoolWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64BoolWrapper[Number(key)] =
            boolean | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapUint64BytesWrapper !== undefined &&
      object.mapUint64BytesWrapper !== null
    ) {
      Object.entries(object.mapUint64BytesWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapUint64BytesWrapper[Number(key)] =
            Uint8Array | undefined.fromPartial(value);
        }
      });
    }
    if (object.mapStringBool !== undefined && object.mapStringBool !== null) {
      Object.entries(object.mapStringBool).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringBool[key] = Boolean(value);
        }
      });
    }
    if (
      object.mapStringString !== undefined &&
      object.mapStringString !== null
    ) {
      Object.entries(object.mapStringString).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringString[key] = String(value);
        }
      });
    }
    if (object.mapStringBytes !== undefined && object.mapStringBytes !== null) {
      Object.entries(object.mapStringBytes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringBytes[key] = value;
        }
      });
    }
    if (object.mapStringInt32 !== undefined && object.mapStringInt32 !== null) {
      Object.entries(object.mapStringInt32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringInt32[key] = Number(value);
        }
      });
    }
    if (object.mapStringInt64 !== undefined && object.mapStringInt64 !== null) {
      Object.entries(object.mapStringInt64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringInt64[key] = Number(value);
        }
      });
    }
    if (
      object.mapStringUint32 !== undefined &&
      object.mapStringUint32 !== null
    ) {
      Object.entries(object.mapStringUint32).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringUint32[key] = Number(value);
        }
      });
    }
    if (
      object.mapStringUint64 !== undefined &&
      object.mapStringUint64 !== null
    ) {
      Object.entries(object.mapStringUint64).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringUint64[key] = Number(value);
        }
      });
    }
    if (object.mapStringFloat !== undefined && object.mapStringFloat !== null) {
      Object.entries(object.mapStringFloat).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringFloat[key] = Number(value);
        }
      });
    }
    if (
      object.mapStringDouble !== undefined &&
      object.mapStringDouble !== null
    ) {
      Object.entries(object.mapStringDouble).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringDouble[key] = Number(value);
        }
      });
    }
    if (object.mapStringEnum !== undefined && object.mapStringEnum !== null) {
      Object.entries(object.mapStringEnum).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringEnum[key] = value as number;
        }
      });
    }
    if (
      object.mapStringMessage !== undefined &&
      object.mapStringMessage !== null
    ) {
      Object.entries(object.mapStringMessage).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringMessage[
            key
          ] = TestAllTypes_NestedMessage.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringDuration !== undefined &&
      object.mapStringDuration !== null
    ) {
      Object.entries(object.mapStringDuration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringDuration[key] = Duration.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringTimestamp !== undefined &&
      object.mapStringTimestamp !== null
    ) {
      Object.entries(object.mapStringTimestamp).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringTimestamp[key] = value;
        }
      });
    }
    if (
      object.mapStringNullValue !== undefined &&
      object.mapStringNullValue !== null
    ) {
      Object.entries(object.mapStringNullValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringNullValue[key] = value as number;
        }
      });
    }
    if (object.mapStringAny !== undefined && object.mapStringAny !== null) {
      Object.entries(object.mapStringAny).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringAny[key] = Any.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringStruct !== undefined &&
      object.mapStringStruct !== null
    ) {
      Object.entries(object.mapStringStruct).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringStruct[key] = Struct.fromPartial(value);
        }
      });
    }
    if (object.mapStringValue !== undefined && object.mapStringValue !== null) {
      Object.entries(object.mapStringValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringValue[key] = Value.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringListValue !== undefined &&
      object.mapStringListValue !== null
    ) {
      Object.entries(object.mapStringListValue).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringListValue[key] = ListValue.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringInt64Wrapper !== undefined &&
      object.mapStringInt64Wrapper !== null
    ) {
      Object.entries(object.mapStringInt64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringInt64Wrapper[key] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringInt32Wrapper !== undefined &&
      object.mapStringInt32Wrapper !== null
    ) {
      Object.entries(object.mapStringInt32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringInt32Wrapper[key] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringDoubleWrapper !== undefined &&
      object.mapStringDoubleWrapper !== null
    ) {
      Object.entries(object.mapStringDoubleWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringDoubleWrapper[key] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringFloatWrapper !== undefined &&
      object.mapStringFloatWrapper !== null
    ) {
      Object.entries(object.mapStringFloatWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringFloatWrapper[key] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringUint64Wrapper !== undefined &&
      object.mapStringUint64Wrapper !== null
    ) {
      Object.entries(object.mapStringUint64Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringUint64Wrapper[key] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringUint32Wrapper !== undefined &&
      object.mapStringUint32Wrapper !== null
    ) {
      Object.entries(object.mapStringUint32Wrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringUint32Wrapper[key] =
            number | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringStringWrapper !== undefined &&
      object.mapStringStringWrapper !== null
    ) {
      Object.entries(object.mapStringStringWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringStringWrapper[key] =
            string | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringBoolWrapper !== undefined &&
      object.mapStringBoolWrapper !== null
    ) {
      Object.entries(object.mapStringBoolWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringBoolWrapper[key] =
            boolean | undefined.fromPartial(value);
        }
      });
    }
    if (
      object.mapStringBytesWrapper !== undefined &&
      object.mapStringBytesWrapper !== null
    ) {
      Object.entries(object.mapStringBytesWrapper).forEach(([key, value]) => {
        if (value !== undefined) {
          message.mapStringBytesWrapper[key] =
            Uint8Array | undefined.fromPartial(value);
        }
      });
    }
    if (object.oneofType !== undefined && object.oneofType !== null) {
      message.oneofType = NestedTestAllTypes.fromPartial(object.oneofType);
    } else {
      message.oneofType = undefined;
    }
    if (object.oneofMsg !== undefined && object.oneofMsg !== null) {
      message.oneofMsg = TestAllTypes_NestedMessage.fromPartial(
        object.oneofMsg
      );
    } else {
      message.oneofMsg = undefined;
    }
    if (object.oneofBool !== undefined && object.oneofBool !== null) {
      message.oneofBool = object.oneofBool;
    } else {
      message.oneofBool = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_NestedMessage: object = { bb: 0 };

export const TestAllTypes_NestedMessage = {
  encode(
    message: TestAllTypes_NestedMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bb !== 0) {
      writer.uint32(8).int32(message.bb);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_NestedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_NestedMessage,
    } as TestAllTypes_NestedMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bb = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_NestedMessage {
    const message = {
      ...baseTestAllTypes_NestedMessage,
    } as TestAllTypes_NestedMessage;
    if (object.bb !== undefined && object.bb !== null) {
      message.bb = Number(object.bb);
    } else {
      message.bb = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_NestedMessage): unknown {
    const obj: any = {};
    message.bb !== undefined && (obj.bb = message.bb);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_NestedMessage>
  ): TestAllTypes_NestedMessage {
    const message = {
      ...baseTestAllTypes_NestedMessage,
    } as TestAllTypes_NestedMessage;
    if (object.bb !== undefined && object.bb !== null) {
      message.bb = object.bb;
    } else {
      message.bb = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64NestedTypeEntry: object = { key: 0 };

export const TestAllTypes_MapInt64NestedTypeEntry = {
  encode(
    message: TestAllTypes_MapInt64NestedTypeEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      NestedTestAllTypes.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64NestedTypeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64NestedTypeEntry,
    } as TestAllTypes_MapInt64NestedTypeEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = NestedTestAllTypes.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64NestedTypeEntry {
    const message = {
      ...baseTestAllTypes_MapInt64NestedTypeEntry,
    } as TestAllTypes_MapInt64NestedTypeEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = NestedTestAllTypes.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64NestedTypeEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? NestedTestAllTypes.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64NestedTypeEntry>
  ): TestAllTypes_MapInt64NestedTypeEntry {
    const message = {
      ...baseTestAllTypes_MapInt64NestedTypeEntry,
    } as TestAllTypes_MapInt64NestedTypeEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = NestedTestAllTypes.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolBoolEntry: object = { key: false, value: false };

export const TestAllTypes_MapBoolBoolEntry = {
  encode(
    message: TestAllTypes_MapBoolBoolEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolBoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolBoolEntry,
    } as TestAllTypes_MapBoolBoolEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolBoolEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBoolEntry,
    } as TestAllTypes_MapBoolBoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolBoolEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolBoolEntry>
  ): TestAllTypes_MapBoolBoolEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBoolEntry,
    } as TestAllTypes_MapBoolBoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolStringEntry: object = { key: false, value: "" };

export const TestAllTypes_MapBoolStringEntry = {
  encode(
    message: TestAllTypes_MapBoolStringEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolStringEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolStringEntry,
    } as TestAllTypes_MapBoolStringEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolStringEntry {
    const message = {
      ...baseTestAllTypes_MapBoolStringEntry,
    } as TestAllTypes_MapBoolStringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolStringEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolStringEntry>
  ): TestAllTypes_MapBoolStringEntry {
    const message = {
      ...baseTestAllTypes_MapBoolStringEntry,
    } as TestAllTypes_MapBoolStringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolBytesEntry: object = { key: false };

export const TestAllTypes_MapBoolBytesEntry = {
  encode(
    message: TestAllTypes_MapBoolBytesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolBytesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolBytesEntry,
    } as TestAllTypes_MapBoolBytesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolBytesEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBytesEntry,
    } as TestAllTypes_MapBoolBytesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolBytesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolBytesEntry>
  ): TestAllTypes_MapBoolBytesEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBytesEntry,
    } as TestAllTypes_MapBoolBytesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolInt32Entry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolInt32Entry = {
  encode(
    message: TestAllTypes_MapBoolInt32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolInt32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolInt32Entry,
    } as TestAllTypes_MapBoolInt32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
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

  fromJSON(object: any): TestAllTypes_MapBoolInt32Entry {
    const message = {
      ...baseTestAllTypes_MapBoolInt32Entry,
    } as TestAllTypes_MapBoolInt32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolInt32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolInt32Entry>
  ): TestAllTypes_MapBoolInt32Entry {
    const message = {
      ...baseTestAllTypes_MapBoolInt32Entry,
    } as TestAllTypes_MapBoolInt32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolInt64Entry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolInt64Entry = {
  encode(
    message: TestAllTypes_MapBoolInt64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolInt64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolInt64Entry,
    } as TestAllTypes_MapBoolInt64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolInt64Entry {
    const message = {
      ...baseTestAllTypes_MapBoolInt64Entry,
    } as TestAllTypes_MapBoolInt64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolInt64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolInt64Entry>
  ): TestAllTypes_MapBoolInt64Entry {
    const message = {
      ...baseTestAllTypes_MapBoolInt64Entry,
    } as TestAllTypes_MapBoolInt64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolUint32Entry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolUint32Entry = {
  encode(
    message: TestAllTypes_MapBoolUint32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolUint32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolUint32Entry,
    } as TestAllTypes_MapBoolUint32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolUint32Entry {
    const message = {
      ...baseTestAllTypes_MapBoolUint32Entry,
    } as TestAllTypes_MapBoolUint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolUint32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolUint32Entry>
  ): TestAllTypes_MapBoolUint32Entry {
    const message = {
      ...baseTestAllTypes_MapBoolUint32Entry,
    } as TestAllTypes_MapBoolUint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolUint64Entry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolUint64Entry = {
  encode(
    message: TestAllTypes_MapBoolUint64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolUint64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolUint64Entry,
    } as TestAllTypes_MapBoolUint64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolUint64Entry {
    const message = {
      ...baseTestAllTypes_MapBoolUint64Entry,
    } as TestAllTypes_MapBoolUint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolUint64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolUint64Entry>
  ): TestAllTypes_MapBoolUint64Entry {
    const message = {
      ...baseTestAllTypes_MapBoolUint64Entry,
    } as TestAllTypes_MapBoolUint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolFloatEntry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolFloatEntry = {
  encode(
    message: TestAllTypes_MapBoolFloatEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolFloatEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolFloatEntry,
    } as TestAllTypes_MapBoolFloatEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolFloatEntry {
    const message = {
      ...baseTestAllTypes_MapBoolFloatEntry,
    } as TestAllTypes_MapBoolFloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolFloatEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolFloatEntry>
  ): TestAllTypes_MapBoolFloatEntry {
    const message = {
      ...baseTestAllTypes_MapBoolFloatEntry,
    } as TestAllTypes_MapBoolFloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolDoubleEntry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolDoubleEntry = {
  encode(
    message: TestAllTypes_MapBoolDoubleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolDoubleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolDoubleEntry,
    } as TestAllTypes_MapBoolDoubleEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolDoubleEntry {
    const message = {
      ...baseTestAllTypes_MapBoolDoubleEntry,
    } as TestAllTypes_MapBoolDoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolDoubleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolDoubleEntry>
  ): TestAllTypes_MapBoolDoubleEntry {
    const message = {
      ...baseTestAllTypes_MapBoolDoubleEntry,
    } as TestAllTypes_MapBoolDoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolEnumEntry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolEnumEntry = {
  encode(
    message: TestAllTypes_MapBoolEnumEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolEnumEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolEnumEntry,
    } as TestAllTypes_MapBoolEnumEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolEnumEntry {
    const message = {
      ...baseTestAllTypes_MapBoolEnumEntry,
    } as TestAllTypes_MapBoolEnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = testAllTypes_NestedEnumFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolEnumEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = testAllTypes_NestedEnumToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolEnumEntry>
  ): TestAllTypes_MapBoolEnumEntry {
    const message = {
      ...baseTestAllTypes_MapBoolEnumEntry,
    } as TestAllTypes_MapBoolEnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolMessageEntry: object = { key: false };

export const TestAllTypes_MapBoolMessageEntry = {
  encode(
    message: TestAllTypes_MapBoolMessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolMessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolMessageEntry,
    } as TestAllTypes_MapBoolMessageEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolMessageEntry {
    const message = {
      ...baseTestAllTypes_MapBoolMessageEntry,
    } as TestAllTypes_MapBoolMessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolMessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? TestAllTypes_NestedMessage.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolMessageEntry>
  ): TestAllTypes_MapBoolMessageEntry {
    const message = {
      ...baseTestAllTypes_MapBoolMessageEntry,
    } as TestAllTypes_MapBoolMessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolDurationEntry: object = { key: false };

export const TestAllTypes_MapBoolDurationEntry = {
  encode(
    message: TestAllTypes_MapBoolDurationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Duration.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolDurationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolDurationEntry,
    } as TestAllTypes_MapBoolDurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolDurationEntry {
    const message = {
      ...baseTestAllTypes_MapBoolDurationEntry,
    } as TestAllTypes_MapBoolDurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolDurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Duration.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolDurationEntry>
  ): TestAllTypes_MapBoolDurationEntry {
    const message = {
      ...baseTestAllTypes_MapBoolDurationEntry,
    } as TestAllTypes_MapBoolDurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolTimestampEntry: object = { key: false };

export const TestAllTypes_MapBoolTimestampEntry = {
  encode(
    message: TestAllTypes_MapBoolTimestampEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Timestamp.encode(
        toTimestamp(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolTimestampEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolTimestampEntry,
    } as TestAllTypes_MapBoolTimestampEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = fromTimestamp(
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

  fromJSON(object: any): TestAllTypes_MapBoolTimestampEntry {
    const message = {
      ...baseTestAllTypes_MapBoolTimestampEntry,
    } as TestAllTypes_MapBoolTimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = fromJsonTimestamp(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolTimestampEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolTimestampEntry>
  ): TestAllTypes_MapBoolTimestampEntry {
    const message = {
      ...baseTestAllTypes_MapBoolTimestampEntry,
    } as TestAllTypes_MapBoolTimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolNullValueEntry: object = { key: false, value: 0 };

export const TestAllTypes_MapBoolNullValueEntry = {
  encode(
    message: TestAllTypes_MapBoolNullValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolNullValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolNullValueEntry,
    } as TestAllTypes_MapBoolNullValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolNullValueEntry {
    const message = {
      ...baseTestAllTypes_MapBoolNullValueEntry,
    } as TestAllTypes_MapBoolNullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = nullValueFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolNullValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = nullValueToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolNullValueEntry>
  ): TestAllTypes_MapBoolNullValueEntry {
    const message = {
      ...baseTestAllTypes_MapBoolNullValueEntry,
    } as TestAllTypes_MapBoolNullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolAnyEntry: object = { key: false };

export const TestAllTypes_MapBoolAnyEntry = {
  encode(
    message: TestAllTypes_MapBoolAnyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolAnyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolAnyEntry,
    } as TestAllTypes_MapBoolAnyEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolAnyEntry {
    const message = {
      ...baseTestAllTypes_MapBoolAnyEntry,
    } as TestAllTypes_MapBoolAnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolAnyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolAnyEntry>
  ): TestAllTypes_MapBoolAnyEntry {
    const message = {
      ...baseTestAllTypes_MapBoolAnyEntry,
    } as TestAllTypes_MapBoolAnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolStructEntry: object = { key: false };

export const TestAllTypes_MapBoolStructEntry = {
  encode(
    message: TestAllTypes_MapBoolStructEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolStructEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolStructEntry,
    } as TestAllTypes_MapBoolStructEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolStructEntry {
    const message = {
      ...baseTestAllTypes_MapBoolStructEntry,
    } as TestAllTypes_MapBoolStructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolStructEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Struct.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolStructEntry>
  ): TestAllTypes_MapBoolStructEntry {
    const message = {
      ...baseTestAllTypes_MapBoolStructEntry,
    } as TestAllTypes_MapBoolStructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolValueEntry: object = { key: false };

export const TestAllTypes_MapBoolValueEntry = {
  encode(
    message: TestAllTypes_MapBoolValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolValueEntry,
    } as TestAllTypes_MapBoolValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
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

  fromJSON(object: any): TestAllTypes_MapBoolValueEntry {
    const message = {
      ...baseTestAllTypes_MapBoolValueEntry,
    } as TestAllTypes_MapBoolValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolValueEntry>
  ): TestAllTypes_MapBoolValueEntry {
    const message = {
      ...baseTestAllTypes_MapBoolValueEntry,
    } as TestAllTypes_MapBoolValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolListValueEntry: object = { key: false };

export const TestAllTypes_MapBoolListValueEntry = {
  encode(
    message: TestAllTypes_MapBoolListValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      ListValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolListValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolListValueEntry,
    } as TestAllTypes_MapBoolListValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolListValueEntry {
    const message = {
      ...baseTestAllTypes_MapBoolListValueEntry,
    } as TestAllTypes_MapBoolListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolListValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ListValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolListValueEntry>
  ): TestAllTypes_MapBoolListValueEntry {
    const message = {
      ...baseTestAllTypes_MapBoolListValueEntry,
    } as TestAllTypes_MapBoolListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolInt64WrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolInt64WrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolInt64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Int64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolInt64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolInt64WrapperEntry,
    } as TestAllTypes_MapBoolInt64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolInt64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolInt64WrapperEntry,
    } as TestAllTypes_MapBoolInt64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolInt64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolInt64WrapperEntry>
  ): TestAllTypes_MapBoolInt64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolInt64WrapperEntry,
    } as TestAllTypes_MapBoolInt64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolInt32WrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolInt32WrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolInt32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      Int32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolInt32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolInt32WrapperEntry,
    } as TestAllTypes_MapBoolInt32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = Int32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolInt32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolInt32WrapperEntry,
    } as TestAllTypes_MapBoolInt32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolInt32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolInt32WrapperEntry>
  ): TestAllTypes_MapBoolInt32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolInt32WrapperEntry,
    } as TestAllTypes_MapBoolInt32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolDoubleWrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolDoubleWrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolDoubleWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      DoubleValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolDoubleWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolDoubleWrapperEntry,
    } as TestAllTypes_MapBoolDoubleWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolDoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolDoubleWrapperEntry,
    } as TestAllTypes_MapBoolDoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolDoubleWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolDoubleWrapperEntry>
  ): TestAllTypes_MapBoolDoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolDoubleWrapperEntry,
    } as TestAllTypes_MapBoolDoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolFloatWrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolFloatWrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolFloatWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      FloatValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolFloatWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolFloatWrapperEntry,
    } as TestAllTypes_MapBoolFloatWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = FloatValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolFloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolFloatWrapperEntry,
    } as TestAllTypes_MapBoolFloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolFloatWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolFloatWrapperEntry>
  ): TestAllTypes_MapBoolFloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolFloatWrapperEntry,
    } as TestAllTypes_MapBoolFloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolUint64WrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolUint64WrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolUint64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      UInt64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolUint64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolUint64WrapperEntry,
    } as TestAllTypes_MapBoolUint64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolUint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolUint64WrapperEntry,
    } as TestAllTypes_MapBoolUint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolUint64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolUint64WrapperEntry>
  ): TestAllTypes_MapBoolUint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolUint64WrapperEntry,
    } as TestAllTypes_MapBoolUint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolUint32WrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolUint32WrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolUint32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      UInt32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolUint32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolUint32WrapperEntry,
    } as TestAllTypes_MapBoolUint32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolUint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolUint32WrapperEntry,
    } as TestAllTypes_MapBoolUint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolUint32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolUint32WrapperEntry>
  ): TestAllTypes_MapBoolUint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolUint32WrapperEntry,
    } as TestAllTypes_MapBoolUint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolStringWrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolStringWrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolStringWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      StringValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolStringWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolStringWrapperEntry,
    } as TestAllTypes_MapBoolStringWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolStringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolStringWrapperEntry,
    } as TestAllTypes_MapBoolStringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolStringWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolStringWrapperEntry>
  ): TestAllTypes_MapBoolStringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolStringWrapperEntry,
    } as TestAllTypes_MapBoolStringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolBoolWrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolBoolWrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolBoolWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      BoolValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolBoolWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolBoolWrapperEntry,
    } as TestAllTypes_MapBoolBoolWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolBoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBoolWrapperEntry,
    } as TestAllTypes_MapBoolBoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolBoolWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolBoolWrapperEntry>
  ): TestAllTypes_MapBoolBoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBoolWrapperEntry,
    } as TestAllTypes_MapBoolBoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapBoolBytesWrapperEntry: object = { key: false };

export const TestAllTypes_MapBoolBytesWrapperEntry = {
  encode(
    message: TestAllTypes_MapBoolBytesWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key === true) {
      writer.uint32(8).bool(message.key);
    }
    if (message.value !== undefined) {
      BytesValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapBoolBytesWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapBoolBytesWrapperEntry,
    } as TestAllTypes_MapBoolBytesWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bool();
          break;
        case 2:
          message.value = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapBoolBytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBytesWrapperEntry,
    } as TestAllTypes_MapBoolBytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Boolean(object.key);
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = new Uint8Array(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapBoolBytesWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapBoolBytesWrapperEntry>
  ): TestAllTypes_MapBoolBytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapBoolBytesWrapperEntry,
    } as TestAllTypes_MapBoolBytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = false;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32BoolEntry: object = { key: 0, value: false };

export const TestAllTypes_MapInt32BoolEntry = {
  encode(
    message: TestAllTypes_MapInt32BoolEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32BoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32BoolEntry,
    } as TestAllTypes_MapInt32BoolEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32BoolEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BoolEntry,
    } as TestAllTypes_MapInt32BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32BoolEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32BoolEntry>
  ): TestAllTypes_MapInt32BoolEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BoolEntry,
    } as TestAllTypes_MapInt32BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32StringEntry: object = { key: 0, value: "" };

export const TestAllTypes_MapInt32StringEntry = {
  encode(
    message: TestAllTypes_MapInt32StringEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32StringEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32StringEntry,
    } as TestAllTypes_MapInt32StringEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32StringEntry {
    const message = {
      ...baseTestAllTypes_MapInt32StringEntry,
    } as TestAllTypes_MapInt32StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32StringEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32StringEntry>
  ): TestAllTypes_MapInt32StringEntry {
    const message = {
      ...baseTestAllTypes_MapInt32StringEntry,
    } as TestAllTypes_MapInt32StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32BytesEntry: object = { key: 0 };

export const TestAllTypes_MapInt32BytesEntry = {
  encode(
    message: TestAllTypes_MapInt32BytesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32BytesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32BytesEntry,
    } as TestAllTypes_MapInt32BytesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32BytesEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BytesEntry,
    } as TestAllTypes_MapInt32BytesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32BytesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32BytesEntry>
  ): TestAllTypes_MapInt32BytesEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BytesEntry,
    } as TestAllTypes_MapInt32BytesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Int32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32Int32Entry = {
  encode(
    message: TestAllTypes_MapInt32Int32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Int32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Int32Entry,
    } as TestAllTypes_MapInt32Int32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
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

  fromJSON(object: any): TestAllTypes_MapInt32Int32Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Int32Entry,
    } as TestAllTypes_MapInt32Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Int32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Int32Entry>
  ): TestAllTypes_MapInt32Int32Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Int32Entry,
    } as TestAllTypes_MapInt32Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Int64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32Int64Entry = {
  encode(
    message: TestAllTypes_MapInt32Int64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Int64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Int64Entry,
    } as TestAllTypes_MapInt32Int64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Int64Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Int64Entry,
    } as TestAllTypes_MapInt32Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Int64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Int64Entry>
  ): TestAllTypes_MapInt32Int64Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Int64Entry,
    } as TestAllTypes_MapInt32Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Uint32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32Uint32Entry = {
  encode(
    message: TestAllTypes_MapInt32Uint32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Uint32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Uint32Entry,
    } as TestAllTypes_MapInt32Uint32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint32Entry,
    } as TestAllTypes_MapInt32Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Uint32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Uint32Entry>
  ): TestAllTypes_MapInt32Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint32Entry,
    } as TestAllTypes_MapInt32Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Uint64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32Uint64Entry = {
  encode(
    message: TestAllTypes_MapInt32Uint64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Uint64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Uint64Entry,
    } as TestAllTypes_MapInt32Uint64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint64Entry,
    } as TestAllTypes_MapInt32Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Uint64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Uint64Entry>
  ): TestAllTypes_MapInt32Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint64Entry,
    } as TestAllTypes_MapInt32Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32FloatEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32FloatEntry = {
  encode(
    message: TestAllTypes_MapInt32FloatEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32FloatEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32FloatEntry,
    } as TestAllTypes_MapInt32FloatEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32FloatEntry {
    const message = {
      ...baseTestAllTypes_MapInt32FloatEntry,
    } as TestAllTypes_MapInt32FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32FloatEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32FloatEntry>
  ): TestAllTypes_MapInt32FloatEntry {
    const message = {
      ...baseTestAllTypes_MapInt32FloatEntry,
    } as TestAllTypes_MapInt32FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32DoubleEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32DoubleEntry = {
  encode(
    message: TestAllTypes_MapInt32DoubleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32DoubleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32DoubleEntry,
    } as TestAllTypes_MapInt32DoubleEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapInt32DoubleEntry,
    } as TestAllTypes_MapInt32DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32DoubleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32DoubleEntry>
  ): TestAllTypes_MapInt32DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapInt32DoubleEntry,
    } as TestAllTypes_MapInt32DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32EnumEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32EnumEntry = {
  encode(
    message: TestAllTypes_MapInt32EnumEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32EnumEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32EnumEntry,
    } as TestAllTypes_MapInt32EnumEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32EnumEntry {
    const message = {
      ...baseTestAllTypes_MapInt32EnumEntry,
    } as TestAllTypes_MapInt32EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = testAllTypes_NestedEnumFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32EnumEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = testAllTypes_NestedEnumToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32EnumEntry>
  ): TestAllTypes_MapInt32EnumEntry {
    const message = {
      ...baseTestAllTypes_MapInt32EnumEntry,
    } as TestAllTypes_MapInt32EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32MessageEntry: object = { key: 0 };

export const TestAllTypes_MapInt32MessageEntry = {
  encode(
    message: TestAllTypes_MapInt32MessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32MessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32MessageEntry,
    } as TestAllTypes_MapInt32MessageEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32MessageEntry {
    const message = {
      ...baseTestAllTypes_MapInt32MessageEntry,
    } as TestAllTypes_MapInt32MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32MessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? TestAllTypes_NestedMessage.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32MessageEntry>
  ): TestAllTypes_MapInt32MessageEntry {
    const message = {
      ...baseTestAllTypes_MapInt32MessageEntry,
    } as TestAllTypes_MapInt32MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32DurationEntry: object = { key: 0 };

export const TestAllTypes_MapInt32DurationEntry = {
  encode(
    message: TestAllTypes_MapInt32DurationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Duration.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32DurationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32DurationEntry,
    } as TestAllTypes_MapInt32DurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32DurationEntry {
    const message = {
      ...baseTestAllTypes_MapInt32DurationEntry,
    } as TestAllTypes_MapInt32DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32DurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Duration.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32DurationEntry>
  ): TestAllTypes_MapInt32DurationEntry {
    const message = {
      ...baseTestAllTypes_MapInt32DurationEntry,
    } as TestAllTypes_MapInt32DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32TimestampEntry: object = { key: 0 };

export const TestAllTypes_MapInt32TimestampEntry = {
  encode(
    message: TestAllTypes_MapInt32TimestampEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Timestamp.encode(
        toTimestamp(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32TimestampEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32TimestampEntry,
    } as TestAllTypes_MapInt32TimestampEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = fromTimestamp(
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

  fromJSON(object: any): TestAllTypes_MapInt32TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapInt32TimestampEntry,
    } as TestAllTypes_MapInt32TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = fromJsonTimestamp(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32TimestampEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32TimestampEntry>
  ): TestAllTypes_MapInt32TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapInt32TimestampEntry,
    } as TestAllTypes_MapInt32TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32NullValueEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt32NullValueEntry = {
  encode(
    message: TestAllTypes_MapInt32NullValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32NullValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32NullValueEntry,
    } as TestAllTypes_MapInt32NullValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt32NullValueEntry,
    } as TestAllTypes_MapInt32NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = nullValueFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32NullValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = nullValueToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32NullValueEntry>
  ): TestAllTypes_MapInt32NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt32NullValueEntry,
    } as TestAllTypes_MapInt32NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32AnyEntry: object = { key: 0 };

export const TestAllTypes_MapInt32AnyEntry = {
  encode(
    message: TestAllTypes_MapInt32AnyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32AnyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32AnyEntry,
    } as TestAllTypes_MapInt32AnyEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32AnyEntry {
    const message = {
      ...baseTestAllTypes_MapInt32AnyEntry,
    } as TestAllTypes_MapInt32AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32AnyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32AnyEntry>
  ): TestAllTypes_MapInt32AnyEntry {
    const message = {
      ...baseTestAllTypes_MapInt32AnyEntry,
    } as TestAllTypes_MapInt32AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32StructEntry: object = { key: 0 };

export const TestAllTypes_MapInt32StructEntry = {
  encode(
    message: TestAllTypes_MapInt32StructEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32StructEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32StructEntry,
    } as TestAllTypes_MapInt32StructEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32StructEntry {
    const message = {
      ...baseTestAllTypes_MapInt32StructEntry,
    } as TestAllTypes_MapInt32StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32StructEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Struct.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32StructEntry>
  ): TestAllTypes_MapInt32StructEntry {
    const message = {
      ...baseTestAllTypes_MapInt32StructEntry,
    } as TestAllTypes_MapInt32StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32ValueEntry: object = { key: 0 };

export const TestAllTypes_MapInt32ValueEntry = {
  encode(
    message: TestAllTypes_MapInt32ValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32ValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32ValueEntry,
    } as TestAllTypes_MapInt32ValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
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

  fromJSON(object: any): TestAllTypes_MapInt32ValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt32ValueEntry,
    } as TestAllTypes_MapInt32ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32ValueEntry>
  ): TestAllTypes_MapInt32ValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt32ValueEntry,
    } as TestAllTypes_MapInt32ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32ListValueEntry: object = { key: 0 };

export const TestAllTypes_MapInt32ListValueEntry = {
  encode(
    message: TestAllTypes_MapInt32ListValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ListValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32ListValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32ListValueEntry,
    } as TestAllTypes_MapInt32ListValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt32ListValueEntry,
    } as TestAllTypes_MapInt32ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32ListValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ListValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32ListValueEntry>
  ): TestAllTypes_MapInt32ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt32ListValueEntry,
    } as TestAllTypes_MapInt32ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Int64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32Int64WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32Int64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Int64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Int64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Int64WrapperEntry,
    } as TestAllTypes_MapInt32Int64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Int64WrapperEntry,
    } as TestAllTypes_MapInt32Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Int64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Int64WrapperEntry>
  ): TestAllTypes_MapInt32Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Int64WrapperEntry,
    } as TestAllTypes_MapInt32Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Int32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32Int32WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32Int32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Int32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Int32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Int32WrapperEntry,
    } as TestAllTypes_MapInt32Int32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = Int32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Int32WrapperEntry,
    } as TestAllTypes_MapInt32Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Int32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Int32WrapperEntry>
  ): TestAllTypes_MapInt32Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Int32WrapperEntry,
    } as TestAllTypes_MapInt32Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32DoubleWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32DoubleWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32DoubleWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DoubleValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32DoubleWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32DoubleWrapperEntry,
    } as TestAllTypes_MapInt32DoubleWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32DoubleWrapperEntry,
    } as TestAllTypes_MapInt32DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32DoubleWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32DoubleWrapperEntry>
  ): TestAllTypes_MapInt32DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32DoubleWrapperEntry,
    } as TestAllTypes_MapInt32DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32FloatWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32FloatWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32FloatWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FloatValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32FloatWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32FloatWrapperEntry,
    } as TestAllTypes_MapInt32FloatWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = FloatValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32FloatWrapperEntry,
    } as TestAllTypes_MapInt32FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32FloatWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32FloatWrapperEntry>
  ): TestAllTypes_MapInt32FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32FloatWrapperEntry,
    } as TestAllTypes_MapInt32FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Uint64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32Uint64WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32Uint64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      UInt64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Uint64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Uint64WrapperEntry,
    } as TestAllTypes_MapInt32Uint64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint64WrapperEntry,
    } as TestAllTypes_MapInt32Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Uint64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Uint64WrapperEntry>
  ): TestAllTypes_MapInt32Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint64WrapperEntry,
    } as TestAllTypes_MapInt32Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32Uint32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32Uint32WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32Uint32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      UInt32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32Uint32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32Uint32WrapperEntry,
    } as TestAllTypes_MapInt32Uint32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint32WrapperEntry,
    } as TestAllTypes_MapInt32Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32Uint32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32Uint32WrapperEntry>
  ): TestAllTypes_MapInt32Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32Uint32WrapperEntry,
    } as TestAllTypes_MapInt32Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32StringWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32StringWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32StringWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      StringValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32StringWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32StringWrapperEntry,
    } as TestAllTypes_MapInt32StringWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32StringWrapperEntry,
    } as TestAllTypes_MapInt32StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32StringWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32StringWrapperEntry>
  ): TestAllTypes_MapInt32StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32StringWrapperEntry,
    } as TestAllTypes_MapInt32StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32BoolWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32BoolWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32BoolWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      BoolValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32BoolWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32BoolWrapperEntry,
    } as TestAllTypes_MapInt32BoolWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BoolWrapperEntry,
    } as TestAllTypes_MapInt32BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32BoolWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32BoolWrapperEntry>
  ): TestAllTypes_MapInt32BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BoolWrapperEntry,
    } as TestAllTypes_MapInt32BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt32BytesWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt32BytesWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt32BytesWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      BytesValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt32BytesWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt32BytesWrapperEntry,
    } as TestAllTypes_MapInt32BytesWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt32BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BytesWrapperEntry,
    } as TestAllTypes_MapInt32BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = new Uint8Array(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt32BytesWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt32BytesWrapperEntry>
  ): TestAllTypes_MapInt32BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt32BytesWrapperEntry,
    } as TestAllTypes_MapInt32BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64BoolEntry: object = { key: 0, value: false };

export const TestAllTypes_MapInt64BoolEntry = {
  encode(
    message: TestAllTypes_MapInt64BoolEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64BoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64BoolEntry,
    } as TestAllTypes_MapInt64BoolEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64BoolEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BoolEntry,
    } as TestAllTypes_MapInt64BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64BoolEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64BoolEntry>
  ): TestAllTypes_MapInt64BoolEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BoolEntry,
    } as TestAllTypes_MapInt64BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64StringEntry: object = { key: 0, value: "" };

export const TestAllTypes_MapInt64StringEntry = {
  encode(
    message: TestAllTypes_MapInt64StringEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64StringEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64StringEntry,
    } as TestAllTypes_MapInt64StringEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64StringEntry {
    const message = {
      ...baseTestAllTypes_MapInt64StringEntry,
    } as TestAllTypes_MapInt64StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64StringEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64StringEntry>
  ): TestAllTypes_MapInt64StringEntry {
    const message = {
      ...baseTestAllTypes_MapInt64StringEntry,
    } as TestAllTypes_MapInt64StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64BytesEntry: object = { key: 0 };

export const TestAllTypes_MapInt64BytesEntry = {
  encode(
    message: TestAllTypes_MapInt64BytesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64BytesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64BytesEntry,
    } as TestAllTypes_MapInt64BytesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64BytesEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BytesEntry,
    } as TestAllTypes_MapInt64BytesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64BytesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64BytesEntry>
  ): TestAllTypes_MapInt64BytesEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BytesEntry,
    } as TestAllTypes_MapInt64BytesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Int32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64Int32Entry = {
  encode(
    message: TestAllTypes_MapInt64Int32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Int32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Int32Entry,
    } as TestAllTypes_MapInt64Int32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): TestAllTypes_MapInt64Int32Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Int32Entry,
    } as TestAllTypes_MapInt64Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Int32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Int32Entry>
  ): TestAllTypes_MapInt64Int32Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Int32Entry,
    } as TestAllTypes_MapInt64Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Int64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64Int64Entry = {
  encode(
    message: TestAllTypes_MapInt64Int64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Int64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Int64Entry,
    } as TestAllTypes_MapInt64Int64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Int64Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Int64Entry,
    } as TestAllTypes_MapInt64Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Int64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Int64Entry>
  ): TestAllTypes_MapInt64Int64Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Int64Entry,
    } as TestAllTypes_MapInt64Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Uint32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64Uint32Entry = {
  encode(
    message: TestAllTypes_MapInt64Uint32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Uint32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Uint32Entry,
    } as TestAllTypes_MapInt64Uint32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint32Entry,
    } as TestAllTypes_MapInt64Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Uint32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Uint32Entry>
  ): TestAllTypes_MapInt64Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint32Entry,
    } as TestAllTypes_MapInt64Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Uint64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64Uint64Entry = {
  encode(
    message: TestAllTypes_MapInt64Uint64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Uint64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Uint64Entry,
    } as TestAllTypes_MapInt64Uint64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint64Entry,
    } as TestAllTypes_MapInt64Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Uint64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Uint64Entry>
  ): TestAllTypes_MapInt64Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint64Entry,
    } as TestAllTypes_MapInt64Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64FloatEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64FloatEntry = {
  encode(
    message: TestAllTypes_MapInt64FloatEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64FloatEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64FloatEntry,
    } as TestAllTypes_MapInt64FloatEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64FloatEntry {
    const message = {
      ...baseTestAllTypes_MapInt64FloatEntry,
    } as TestAllTypes_MapInt64FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64FloatEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64FloatEntry>
  ): TestAllTypes_MapInt64FloatEntry {
    const message = {
      ...baseTestAllTypes_MapInt64FloatEntry,
    } as TestAllTypes_MapInt64FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64DoubleEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64DoubleEntry = {
  encode(
    message: TestAllTypes_MapInt64DoubleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64DoubleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64DoubleEntry,
    } as TestAllTypes_MapInt64DoubleEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapInt64DoubleEntry,
    } as TestAllTypes_MapInt64DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64DoubleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64DoubleEntry>
  ): TestAllTypes_MapInt64DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapInt64DoubleEntry,
    } as TestAllTypes_MapInt64DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64EnumEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64EnumEntry = {
  encode(
    message: TestAllTypes_MapInt64EnumEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64EnumEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64EnumEntry,
    } as TestAllTypes_MapInt64EnumEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64EnumEntry {
    const message = {
      ...baseTestAllTypes_MapInt64EnumEntry,
    } as TestAllTypes_MapInt64EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = testAllTypes_NestedEnumFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64EnumEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = testAllTypes_NestedEnumToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64EnumEntry>
  ): TestAllTypes_MapInt64EnumEntry {
    const message = {
      ...baseTestAllTypes_MapInt64EnumEntry,
    } as TestAllTypes_MapInt64EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64MessageEntry: object = { key: 0 };

export const TestAllTypes_MapInt64MessageEntry = {
  encode(
    message: TestAllTypes_MapInt64MessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64MessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64MessageEntry,
    } as TestAllTypes_MapInt64MessageEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64MessageEntry {
    const message = {
      ...baseTestAllTypes_MapInt64MessageEntry,
    } as TestAllTypes_MapInt64MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64MessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? TestAllTypes_NestedMessage.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64MessageEntry>
  ): TestAllTypes_MapInt64MessageEntry {
    const message = {
      ...baseTestAllTypes_MapInt64MessageEntry,
    } as TestAllTypes_MapInt64MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64DurationEntry: object = { key: 0 };

export const TestAllTypes_MapInt64DurationEntry = {
  encode(
    message: TestAllTypes_MapInt64DurationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Duration.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64DurationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64DurationEntry,
    } as TestAllTypes_MapInt64DurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64DurationEntry {
    const message = {
      ...baseTestAllTypes_MapInt64DurationEntry,
    } as TestAllTypes_MapInt64DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64DurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Duration.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64DurationEntry>
  ): TestAllTypes_MapInt64DurationEntry {
    const message = {
      ...baseTestAllTypes_MapInt64DurationEntry,
    } as TestAllTypes_MapInt64DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64TimestampEntry: object = { key: 0 };

export const TestAllTypes_MapInt64TimestampEntry = {
  encode(
    message: TestAllTypes_MapInt64TimestampEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Timestamp.encode(
        toTimestamp(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64TimestampEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64TimestampEntry,
    } as TestAllTypes_MapInt64TimestampEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = fromTimestamp(
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

  fromJSON(object: any): TestAllTypes_MapInt64TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapInt64TimestampEntry,
    } as TestAllTypes_MapInt64TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = fromJsonTimestamp(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64TimestampEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64TimestampEntry>
  ): TestAllTypes_MapInt64TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapInt64TimestampEntry,
    } as TestAllTypes_MapInt64TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64NullValueEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapInt64NullValueEntry = {
  encode(
    message: TestAllTypes_MapInt64NullValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64NullValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64NullValueEntry,
    } as TestAllTypes_MapInt64NullValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt64NullValueEntry,
    } as TestAllTypes_MapInt64NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = nullValueFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64NullValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = nullValueToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64NullValueEntry>
  ): TestAllTypes_MapInt64NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt64NullValueEntry,
    } as TestAllTypes_MapInt64NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64AnyEntry: object = { key: 0 };

export const TestAllTypes_MapInt64AnyEntry = {
  encode(
    message: TestAllTypes_MapInt64AnyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64AnyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64AnyEntry,
    } as TestAllTypes_MapInt64AnyEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64AnyEntry {
    const message = {
      ...baseTestAllTypes_MapInt64AnyEntry,
    } as TestAllTypes_MapInt64AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64AnyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64AnyEntry>
  ): TestAllTypes_MapInt64AnyEntry {
    const message = {
      ...baseTestAllTypes_MapInt64AnyEntry,
    } as TestAllTypes_MapInt64AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64StructEntry: object = { key: 0 };

export const TestAllTypes_MapInt64StructEntry = {
  encode(
    message: TestAllTypes_MapInt64StructEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64StructEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64StructEntry,
    } as TestAllTypes_MapInt64StructEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64StructEntry {
    const message = {
      ...baseTestAllTypes_MapInt64StructEntry,
    } as TestAllTypes_MapInt64StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64StructEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Struct.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64StructEntry>
  ): TestAllTypes_MapInt64StructEntry {
    const message = {
      ...baseTestAllTypes_MapInt64StructEntry,
    } as TestAllTypes_MapInt64StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64ValueEntry: object = { key: 0 };

export const TestAllTypes_MapInt64ValueEntry = {
  encode(
    message: TestAllTypes_MapInt64ValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64ValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64ValueEntry,
    } as TestAllTypes_MapInt64ValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): TestAllTypes_MapInt64ValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt64ValueEntry,
    } as TestAllTypes_MapInt64ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64ValueEntry>
  ): TestAllTypes_MapInt64ValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt64ValueEntry,
    } as TestAllTypes_MapInt64ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64ListValueEntry: object = { key: 0 };

export const TestAllTypes_MapInt64ListValueEntry = {
  encode(
    message: TestAllTypes_MapInt64ListValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      ListValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64ListValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64ListValueEntry,
    } as TestAllTypes_MapInt64ListValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt64ListValueEntry,
    } as TestAllTypes_MapInt64ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64ListValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ListValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64ListValueEntry>
  ): TestAllTypes_MapInt64ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapInt64ListValueEntry,
    } as TestAllTypes_MapInt64ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Int64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64Int64WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64Int64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Int64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Int64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Int64WrapperEntry,
    } as TestAllTypes_MapInt64Int64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Int64WrapperEntry,
    } as TestAllTypes_MapInt64Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Int64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Int64WrapperEntry>
  ): TestAllTypes_MapInt64Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Int64WrapperEntry,
    } as TestAllTypes_MapInt64Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Int32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64Int32WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64Int32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Int32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Int32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Int32WrapperEntry,
    } as TestAllTypes_MapInt64Int32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Int32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Int32WrapperEntry,
    } as TestAllTypes_MapInt64Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Int32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Int32WrapperEntry>
  ): TestAllTypes_MapInt64Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Int32WrapperEntry,
    } as TestAllTypes_MapInt64Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64DoubleWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64DoubleWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64DoubleWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      DoubleValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64DoubleWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64DoubleWrapperEntry,
    } as TestAllTypes_MapInt64DoubleWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64DoubleWrapperEntry,
    } as TestAllTypes_MapInt64DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64DoubleWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64DoubleWrapperEntry>
  ): TestAllTypes_MapInt64DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64DoubleWrapperEntry,
    } as TestAllTypes_MapInt64DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64FloatWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64FloatWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64FloatWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      FloatValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64FloatWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64FloatWrapperEntry,
    } as TestAllTypes_MapInt64FloatWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = FloatValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64FloatWrapperEntry,
    } as TestAllTypes_MapInt64FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64FloatWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64FloatWrapperEntry>
  ): TestAllTypes_MapInt64FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64FloatWrapperEntry,
    } as TestAllTypes_MapInt64FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Uint64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64Uint64WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64Uint64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      UInt64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Uint64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Uint64WrapperEntry,
    } as TestAllTypes_MapInt64Uint64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint64WrapperEntry,
    } as TestAllTypes_MapInt64Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Uint64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Uint64WrapperEntry>
  ): TestAllTypes_MapInt64Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint64WrapperEntry,
    } as TestAllTypes_MapInt64Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64Uint32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64Uint32WrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64Uint32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      UInt32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64Uint32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64Uint32WrapperEntry,
    } as TestAllTypes_MapInt64Uint32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint32WrapperEntry,
    } as TestAllTypes_MapInt64Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64Uint32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64Uint32WrapperEntry>
  ): TestAllTypes_MapInt64Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64Uint32WrapperEntry,
    } as TestAllTypes_MapInt64Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64StringWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64StringWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64StringWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      StringValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64StringWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64StringWrapperEntry,
    } as TestAllTypes_MapInt64StringWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64StringWrapperEntry,
    } as TestAllTypes_MapInt64StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64StringWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64StringWrapperEntry>
  ): TestAllTypes_MapInt64StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64StringWrapperEntry,
    } as TestAllTypes_MapInt64StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64BoolWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64BoolWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64BoolWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      BoolValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64BoolWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64BoolWrapperEntry,
    } as TestAllTypes_MapInt64BoolWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BoolWrapperEntry,
    } as TestAllTypes_MapInt64BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64BoolWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64BoolWrapperEntry>
  ): TestAllTypes_MapInt64BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BoolWrapperEntry,
    } as TestAllTypes_MapInt64BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapInt64BytesWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapInt64BytesWrapperEntry = {
  encode(
    message: TestAllTypes_MapInt64BytesWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      BytesValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapInt64BytesWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapInt64BytesWrapperEntry,
    } as TestAllTypes_MapInt64BytesWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapInt64BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BytesWrapperEntry,
    } as TestAllTypes_MapInt64BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = new Uint8Array(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapInt64BytesWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapInt64BytesWrapperEntry>
  ): TestAllTypes_MapInt64BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapInt64BytesWrapperEntry,
    } as TestAllTypes_MapInt64BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32BoolEntry: object = { key: 0, value: false };

export const TestAllTypes_MapUint32BoolEntry = {
  encode(
    message: TestAllTypes_MapUint32BoolEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32BoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32BoolEntry,
    } as TestAllTypes_MapUint32BoolEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32BoolEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BoolEntry,
    } as TestAllTypes_MapUint32BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32BoolEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32BoolEntry>
  ): TestAllTypes_MapUint32BoolEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BoolEntry,
    } as TestAllTypes_MapUint32BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32StringEntry: object = { key: 0, value: "" };

export const TestAllTypes_MapUint32StringEntry = {
  encode(
    message: TestAllTypes_MapUint32StringEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32StringEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32StringEntry,
    } as TestAllTypes_MapUint32StringEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32StringEntry {
    const message = {
      ...baseTestAllTypes_MapUint32StringEntry,
    } as TestAllTypes_MapUint32StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32StringEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32StringEntry>
  ): TestAllTypes_MapUint32StringEntry {
    const message = {
      ...baseTestAllTypes_MapUint32StringEntry,
    } as TestAllTypes_MapUint32StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32BytesEntry: object = { key: 0 };

export const TestAllTypes_MapUint32BytesEntry = {
  encode(
    message: TestAllTypes_MapUint32BytesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32BytesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32BytesEntry,
    } as TestAllTypes_MapUint32BytesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32BytesEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BytesEntry,
    } as TestAllTypes_MapUint32BytesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32BytesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32BytesEntry>
  ): TestAllTypes_MapUint32BytesEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BytesEntry,
    } as TestAllTypes_MapUint32BytesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Int32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32Int32Entry = {
  encode(
    message: TestAllTypes_MapUint32Int32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Int32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Int32Entry,
    } as TestAllTypes_MapUint32Int32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
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

  fromJSON(object: any): TestAllTypes_MapUint32Int32Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Int32Entry,
    } as TestAllTypes_MapUint32Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Int32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Int32Entry>
  ): TestAllTypes_MapUint32Int32Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Int32Entry,
    } as TestAllTypes_MapUint32Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Int64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32Int64Entry = {
  encode(
    message: TestAllTypes_MapUint32Int64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Int64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Int64Entry,
    } as TestAllTypes_MapUint32Int64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Int64Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Int64Entry,
    } as TestAllTypes_MapUint32Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Int64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Int64Entry>
  ): TestAllTypes_MapUint32Int64Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Int64Entry,
    } as TestAllTypes_MapUint32Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Uint32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32Uint32Entry = {
  encode(
    message: TestAllTypes_MapUint32Uint32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Uint32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Uint32Entry,
    } as TestAllTypes_MapUint32Uint32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint32Entry,
    } as TestAllTypes_MapUint32Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Uint32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Uint32Entry>
  ): TestAllTypes_MapUint32Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint32Entry,
    } as TestAllTypes_MapUint32Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Uint64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32Uint64Entry = {
  encode(
    message: TestAllTypes_MapUint32Uint64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Uint64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Uint64Entry,
    } as TestAllTypes_MapUint32Uint64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint64Entry,
    } as TestAllTypes_MapUint32Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Uint64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Uint64Entry>
  ): TestAllTypes_MapUint32Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint64Entry,
    } as TestAllTypes_MapUint32Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32FloatEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32FloatEntry = {
  encode(
    message: TestAllTypes_MapUint32FloatEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32FloatEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32FloatEntry,
    } as TestAllTypes_MapUint32FloatEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32FloatEntry {
    const message = {
      ...baseTestAllTypes_MapUint32FloatEntry,
    } as TestAllTypes_MapUint32FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32FloatEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32FloatEntry>
  ): TestAllTypes_MapUint32FloatEntry {
    const message = {
      ...baseTestAllTypes_MapUint32FloatEntry,
    } as TestAllTypes_MapUint32FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32DoubleEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32DoubleEntry = {
  encode(
    message: TestAllTypes_MapUint32DoubleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32DoubleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32DoubleEntry,
    } as TestAllTypes_MapUint32DoubleEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapUint32DoubleEntry,
    } as TestAllTypes_MapUint32DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32DoubleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32DoubleEntry>
  ): TestAllTypes_MapUint32DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapUint32DoubleEntry,
    } as TestAllTypes_MapUint32DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32EnumEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32EnumEntry = {
  encode(
    message: TestAllTypes_MapUint32EnumEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32EnumEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32EnumEntry,
    } as TestAllTypes_MapUint32EnumEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32EnumEntry {
    const message = {
      ...baseTestAllTypes_MapUint32EnumEntry,
    } as TestAllTypes_MapUint32EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = testAllTypes_NestedEnumFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32EnumEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = testAllTypes_NestedEnumToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32EnumEntry>
  ): TestAllTypes_MapUint32EnumEntry {
    const message = {
      ...baseTestAllTypes_MapUint32EnumEntry,
    } as TestAllTypes_MapUint32EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32MessageEntry: object = { key: 0 };

export const TestAllTypes_MapUint32MessageEntry = {
  encode(
    message: TestAllTypes_MapUint32MessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32MessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32MessageEntry,
    } as TestAllTypes_MapUint32MessageEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32MessageEntry {
    const message = {
      ...baseTestAllTypes_MapUint32MessageEntry,
    } as TestAllTypes_MapUint32MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32MessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? TestAllTypes_NestedMessage.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32MessageEntry>
  ): TestAllTypes_MapUint32MessageEntry {
    const message = {
      ...baseTestAllTypes_MapUint32MessageEntry,
    } as TestAllTypes_MapUint32MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32DurationEntry: object = { key: 0 };

export const TestAllTypes_MapUint32DurationEntry = {
  encode(
    message: TestAllTypes_MapUint32DurationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Duration.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32DurationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32DurationEntry,
    } as TestAllTypes_MapUint32DurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32DurationEntry {
    const message = {
      ...baseTestAllTypes_MapUint32DurationEntry,
    } as TestAllTypes_MapUint32DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32DurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Duration.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32DurationEntry>
  ): TestAllTypes_MapUint32DurationEntry {
    const message = {
      ...baseTestAllTypes_MapUint32DurationEntry,
    } as TestAllTypes_MapUint32DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32TimestampEntry: object = { key: 0 };

export const TestAllTypes_MapUint32TimestampEntry = {
  encode(
    message: TestAllTypes_MapUint32TimestampEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Timestamp.encode(
        toTimestamp(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32TimestampEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32TimestampEntry,
    } as TestAllTypes_MapUint32TimestampEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = fromTimestamp(
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

  fromJSON(object: any): TestAllTypes_MapUint32TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapUint32TimestampEntry,
    } as TestAllTypes_MapUint32TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = fromJsonTimestamp(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32TimestampEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32TimestampEntry>
  ): TestAllTypes_MapUint32TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapUint32TimestampEntry,
    } as TestAllTypes_MapUint32TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32NullValueEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint32NullValueEntry = {
  encode(
    message: TestAllTypes_MapUint32NullValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32NullValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32NullValueEntry,
    } as TestAllTypes_MapUint32NullValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint32NullValueEntry,
    } as TestAllTypes_MapUint32NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = nullValueFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32NullValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = nullValueToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32NullValueEntry>
  ): TestAllTypes_MapUint32NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint32NullValueEntry,
    } as TestAllTypes_MapUint32NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32AnyEntry: object = { key: 0 };

export const TestAllTypes_MapUint32AnyEntry = {
  encode(
    message: TestAllTypes_MapUint32AnyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32AnyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32AnyEntry,
    } as TestAllTypes_MapUint32AnyEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32AnyEntry {
    const message = {
      ...baseTestAllTypes_MapUint32AnyEntry,
    } as TestAllTypes_MapUint32AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32AnyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32AnyEntry>
  ): TestAllTypes_MapUint32AnyEntry {
    const message = {
      ...baseTestAllTypes_MapUint32AnyEntry,
    } as TestAllTypes_MapUint32AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32StructEntry: object = { key: 0 };

export const TestAllTypes_MapUint32StructEntry = {
  encode(
    message: TestAllTypes_MapUint32StructEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32StructEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32StructEntry,
    } as TestAllTypes_MapUint32StructEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32StructEntry {
    const message = {
      ...baseTestAllTypes_MapUint32StructEntry,
    } as TestAllTypes_MapUint32StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32StructEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Struct.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32StructEntry>
  ): TestAllTypes_MapUint32StructEntry {
    const message = {
      ...baseTestAllTypes_MapUint32StructEntry,
    } as TestAllTypes_MapUint32StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32ValueEntry: object = { key: 0 };

export const TestAllTypes_MapUint32ValueEntry = {
  encode(
    message: TestAllTypes_MapUint32ValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32ValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32ValueEntry,
    } as TestAllTypes_MapUint32ValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
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

  fromJSON(object: any): TestAllTypes_MapUint32ValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint32ValueEntry,
    } as TestAllTypes_MapUint32ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32ValueEntry>
  ): TestAllTypes_MapUint32ValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint32ValueEntry,
    } as TestAllTypes_MapUint32ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32ListValueEntry: object = { key: 0 };

export const TestAllTypes_MapUint32ListValueEntry = {
  encode(
    message: TestAllTypes_MapUint32ListValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      ListValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32ListValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32ListValueEntry,
    } as TestAllTypes_MapUint32ListValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint32ListValueEntry,
    } as TestAllTypes_MapUint32ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32ListValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ListValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32ListValueEntry>
  ): TestAllTypes_MapUint32ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint32ListValueEntry,
    } as TestAllTypes_MapUint32ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Int64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32Int64WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32Int64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Int64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Int64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Int64WrapperEntry,
    } as TestAllTypes_MapUint32Int64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Int64WrapperEntry,
    } as TestAllTypes_MapUint32Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Int64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Int64WrapperEntry>
  ): TestAllTypes_MapUint32Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Int64WrapperEntry,
    } as TestAllTypes_MapUint32Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Int32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32Int32WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32Int32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Int32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Int32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Int32WrapperEntry,
    } as TestAllTypes_MapUint32Int32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Int32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Int32WrapperEntry,
    } as TestAllTypes_MapUint32Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Int32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Int32WrapperEntry>
  ): TestAllTypes_MapUint32Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Int32WrapperEntry,
    } as TestAllTypes_MapUint32Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32DoubleWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32DoubleWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32DoubleWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      DoubleValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32DoubleWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32DoubleWrapperEntry,
    } as TestAllTypes_MapUint32DoubleWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32DoubleWrapperEntry,
    } as TestAllTypes_MapUint32DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32DoubleWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32DoubleWrapperEntry>
  ): TestAllTypes_MapUint32DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32DoubleWrapperEntry,
    } as TestAllTypes_MapUint32DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32FloatWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32FloatWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32FloatWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      FloatValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32FloatWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32FloatWrapperEntry,
    } as TestAllTypes_MapUint32FloatWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = FloatValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32FloatWrapperEntry,
    } as TestAllTypes_MapUint32FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32FloatWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32FloatWrapperEntry>
  ): TestAllTypes_MapUint32FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32FloatWrapperEntry,
    } as TestAllTypes_MapUint32FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Uint64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32Uint64WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32Uint64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      UInt64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Uint64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Uint64WrapperEntry,
    } as TestAllTypes_MapUint32Uint64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint64WrapperEntry,
    } as TestAllTypes_MapUint32Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Uint64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Uint64WrapperEntry>
  ): TestAllTypes_MapUint32Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint64WrapperEntry,
    } as TestAllTypes_MapUint32Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32Uint32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32Uint32WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32Uint32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      UInt32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32Uint32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32Uint32WrapperEntry,
    } as TestAllTypes_MapUint32Uint32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint32WrapperEntry,
    } as TestAllTypes_MapUint32Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32Uint32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32Uint32WrapperEntry>
  ): TestAllTypes_MapUint32Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32Uint32WrapperEntry,
    } as TestAllTypes_MapUint32Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32StringWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32StringWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32StringWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      StringValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32StringWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32StringWrapperEntry,
    } as TestAllTypes_MapUint32StringWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32StringWrapperEntry,
    } as TestAllTypes_MapUint32StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32StringWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32StringWrapperEntry>
  ): TestAllTypes_MapUint32StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32StringWrapperEntry,
    } as TestAllTypes_MapUint32StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32BoolWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32BoolWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32BoolWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      BoolValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32BoolWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32BoolWrapperEntry,
    } as TestAllTypes_MapUint32BoolWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BoolWrapperEntry,
    } as TestAllTypes_MapUint32BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32BoolWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32BoolWrapperEntry>
  ): TestAllTypes_MapUint32BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BoolWrapperEntry,
    } as TestAllTypes_MapUint32BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint32BytesWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint32BytesWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint32BytesWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      BytesValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint32BytesWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint32BytesWrapperEntry,
    } as TestAllTypes_MapUint32BytesWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint32BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BytesWrapperEntry,
    } as TestAllTypes_MapUint32BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = new Uint8Array(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint32BytesWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint32BytesWrapperEntry>
  ): TestAllTypes_MapUint32BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint32BytesWrapperEntry,
    } as TestAllTypes_MapUint32BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64BoolEntry: object = { key: 0, value: false };

export const TestAllTypes_MapUint64BoolEntry = {
  encode(
    message: TestAllTypes_MapUint64BoolEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64BoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64BoolEntry,
    } as TestAllTypes_MapUint64BoolEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64BoolEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BoolEntry,
    } as TestAllTypes_MapUint64BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64BoolEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64BoolEntry>
  ): TestAllTypes_MapUint64BoolEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BoolEntry,
    } as TestAllTypes_MapUint64BoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64StringEntry: object = { key: 0, value: "" };

export const TestAllTypes_MapUint64StringEntry = {
  encode(
    message: TestAllTypes_MapUint64StringEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64StringEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64StringEntry,
    } as TestAllTypes_MapUint64StringEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64StringEntry {
    const message = {
      ...baseTestAllTypes_MapUint64StringEntry,
    } as TestAllTypes_MapUint64StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64StringEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64StringEntry>
  ): TestAllTypes_MapUint64StringEntry {
    const message = {
      ...baseTestAllTypes_MapUint64StringEntry,
    } as TestAllTypes_MapUint64StringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64BytesEntry: object = { key: 0 };

export const TestAllTypes_MapUint64BytesEntry = {
  encode(
    message: TestAllTypes_MapUint64BytesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64BytesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64BytesEntry,
    } as TestAllTypes_MapUint64BytesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64BytesEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BytesEntry,
    } as TestAllTypes_MapUint64BytesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64BytesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64BytesEntry>
  ): TestAllTypes_MapUint64BytesEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BytesEntry,
    } as TestAllTypes_MapUint64BytesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Int32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64Int32Entry = {
  encode(
    message: TestAllTypes_MapUint64Int32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Int32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Int32Entry,
    } as TestAllTypes_MapUint64Int32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): TestAllTypes_MapUint64Int32Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Int32Entry,
    } as TestAllTypes_MapUint64Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Int32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Int32Entry>
  ): TestAllTypes_MapUint64Int32Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Int32Entry,
    } as TestAllTypes_MapUint64Int32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Int64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64Int64Entry = {
  encode(
    message: TestAllTypes_MapUint64Int64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Int64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Int64Entry,
    } as TestAllTypes_MapUint64Int64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Int64Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Int64Entry,
    } as TestAllTypes_MapUint64Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Int64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Int64Entry>
  ): TestAllTypes_MapUint64Int64Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Int64Entry,
    } as TestAllTypes_MapUint64Int64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Uint32Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64Uint32Entry = {
  encode(
    message: TestAllTypes_MapUint64Uint32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Uint32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Uint32Entry,
    } as TestAllTypes_MapUint64Uint32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint32Entry,
    } as TestAllTypes_MapUint64Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Uint32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Uint32Entry>
  ): TestAllTypes_MapUint64Uint32Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint32Entry,
    } as TestAllTypes_MapUint64Uint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Uint64Entry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64Uint64Entry = {
  encode(
    message: TestAllTypes_MapUint64Uint64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Uint64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Uint64Entry,
    } as TestAllTypes_MapUint64Uint64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint64Entry,
    } as TestAllTypes_MapUint64Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Uint64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Uint64Entry>
  ): TestAllTypes_MapUint64Uint64Entry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint64Entry,
    } as TestAllTypes_MapUint64Uint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64FloatEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64FloatEntry = {
  encode(
    message: TestAllTypes_MapUint64FloatEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64FloatEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64FloatEntry,
    } as TestAllTypes_MapUint64FloatEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64FloatEntry {
    const message = {
      ...baseTestAllTypes_MapUint64FloatEntry,
    } as TestAllTypes_MapUint64FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64FloatEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64FloatEntry>
  ): TestAllTypes_MapUint64FloatEntry {
    const message = {
      ...baseTestAllTypes_MapUint64FloatEntry,
    } as TestAllTypes_MapUint64FloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64DoubleEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64DoubleEntry = {
  encode(
    message: TestAllTypes_MapUint64DoubleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64DoubleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64DoubleEntry,
    } as TestAllTypes_MapUint64DoubleEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapUint64DoubleEntry,
    } as TestAllTypes_MapUint64DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64DoubleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64DoubleEntry>
  ): TestAllTypes_MapUint64DoubleEntry {
    const message = {
      ...baseTestAllTypes_MapUint64DoubleEntry,
    } as TestAllTypes_MapUint64DoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64EnumEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64EnumEntry = {
  encode(
    message: TestAllTypes_MapUint64EnumEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64EnumEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64EnumEntry,
    } as TestAllTypes_MapUint64EnumEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64EnumEntry {
    const message = {
      ...baseTestAllTypes_MapUint64EnumEntry,
    } as TestAllTypes_MapUint64EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = testAllTypes_NestedEnumFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64EnumEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = testAllTypes_NestedEnumToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64EnumEntry>
  ): TestAllTypes_MapUint64EnumEntry {
    const message = {
      ...baseTestAllTypes_MapUint64EnumEntry,
    } as TestAllTypes_MapUint64EnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64MessageEntry: object = { key: 0 };

export const TestAllTypes_MapUint64MessageEntry = {
  encode(
    message: TestAllTypes_MapUint64MessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64MessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64MessageEntry,
    } as TestAllTypes_MapUint64MessageEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64MessageEntry {
    const message = {
      ...baseTestAllTypes_MapUint64MessageEntry,
    } as TestAllTypes_MapUint64MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64MessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? TestAllTypes_NestedMessage.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64MessageEntry>
  ): TestAllTypes_MapUint64MessageEntry {
    const message = {
      ...baseTestAllTypes_MapUint64MessageEntry,
    } as TestAllTypes_MapUint64MessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64DurationEntry: object = { key: 0 };

export const TestAllTypes_MapUint64DurationEntry = {
  encode(
    message: TestAllTypes_MapUint64DurationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Duration.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64DurationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64DurationEntry,
    } as TestAllTypes_MapUint64DurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64DurationEntry {
    const message = {
      ...baseTestAllTypes_MapUint64DurationEntry,
    } as TestAllTypes_MapUint64DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64DurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Duration.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64DurationEntry>
  ): TestAllTypes_MapUint64DurationEntry {
    const message = {
      ...baseTestAllTypes_MapUint64DurationEntry,
    } as TestAllTypes_MapUint64DurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64TimestampEntry: object = { key: 0 };

export const TestAllTypes_MapUint64TimestampEntry = {
  encode(
    message: TestAllTypes_MapUint64TimestampEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Timestamp.encode(
        toTimestamp(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64TimestampEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64TimestampEntry,
    } as TestAllTypes_MapUint64TimestampEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = fromTimestamp(
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

  fromJSON(object: any): TestAllTypes_MapUint64TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapUint64TimestampEntry,
    } as TestAllTypes_MapUint64TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = fromJsonTimestamp(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64TimestampEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64TimestampEntry>
  ): TestAllTypes_MapUint64TimestampEntry {
    const message = {
      ...baseTestAllTypes_MapUint64TimestampEntry,
    } as TestAllTypes_MapUint64TimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64NullValueEntry: object = { key: 0, value: 0 };

export const TestAllTypes_MapUint64NullValueEntry = {
  encode(
    message: TestAllTypes_MapUint64NullValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64NullValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64NullValueEntry,
    } as TestAllTypes_MapUint64NullValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint64NullValueEntry,
    } as TestAllTypes_MapUint64NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = nullValueFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64NullValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = nullValueToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64NullValueEntry>
  ): TestAllTypes_MapUint64NullValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint64NullValueEntry,
    } as TestAllTypes_MapUint64NullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64AnyEntry: object = { key: 0 };

export const TestAllTypes_MapUint64AnyEntry = {
  encode(
    message: TestAllTypes_MapUint64AnyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64AnyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64AnyEntry,
    } as TestAllTypes_MapUint64AnyEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64AnyEntry {
    const message = {
      ...baseTestAllTypes_MapUint64AnyEntry,
    } as TestAllTypes_MapUint64AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64AnyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64AnyEntry>
  ): TestAllTypes_MapUint64AnyEntry {
    const message = {
      ...baseTestAllTypes_MapUint64AnyEntry,
    } as TestAllTypes_MapUint64AnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64StructEntry: object = { key: 0 };

export const TestAllTypes_MapUint64StructEntry = {
  encode(
    message: TestAllTypes_MapUint64StructEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64StructEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64StructEntry,
    } as TestAllTypes_MapUint64StructEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64StructEntry {
    const message = {
      ...baseTestAllTypes_MapUint64StructEntry,
    } as TestAllTypes_MapUint64StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64StructEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Struct.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64StructEntry>
  ): TestAllTypes_MapUint64StructEntry {
    const message = {
      ...baseTestAllTypes_MapUint64StructEntry,
    } as TestAllTypes_MapUint64StructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64ValueEntry: object = { key: 0 };

export const TestAllTypes_MapUint64ValueEntry = {
  encode(
    message: TestAllTypes_MapUint64ValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64ValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64ValueEntry,
    } as TestAllTypes_MapUint64ValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): TestAllTypes_MapUint64ValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint64ValueEntry,
    } as TestAllTypes_MapUint64ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64ValueEntry>
  ): TestAllTypes_MapUint64ValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint64ValueEntry,
    } as TestAllTypes_MapUint64ValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64ListValueEntry: object = { key: 0 };

export const TestAllTypes_MapUint64ListValueEntry = {
  encode(
    message: TestAllTypes_MapUint64ListValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      ListValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64ListValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64ListValueEntry,
    } as TestAllTypes_MapUint64ListValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint64ListValueEntry,
    } as TestAllTypes_MapUint64ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64ListValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ListValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64ListValueEntry>
  ): TestAllTypes_MapUint64ListValueEntry {
    const message = {
      ...baseTestAllTypes_MapUint64ListValueEntry,
    } as TestAllTypes_MapUint64ListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Int64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64Int64WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64Int64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Int64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Int64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Int64WrapperEntry,
    } as TestAllTypes_MapUint64Int64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Int64WrapperEntry,
    } as TestAllTypes_MapUint64Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Int64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Int64WrapperEntry>
  ): TestAllTypes_MapUint64Int64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Int64WrapperEntry,
    } as TestAllTypes_MapUint64Int64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Int32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64Int32WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64Int32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      Int32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Int32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Int32WrapperEntry,
    } as TestAllTypes_MapUint64Int32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = Int32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Int32WrapperEntry,
    } as TestAllTypes_MapUint64Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Int32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Int32WrapperEntry>
  ): TestAllTypes_MapUint64Int32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Int32WrapperEntry,
    } as TestAllTypes_MapUint64Int32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64DoubleWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64DoubleWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64DoubleWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      DoubleValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64DoubleWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64DoubleWrapperEntry,
    } as TestAllTypes_MapUint64DoubleWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64DoubleWrapperEntry,
    } as TestAllTypes_MapUint64DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64DoubleWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64DoubleWrapperEntry>
  ): TestAllTypes_MapUint64DoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64DoubleWrapperEntry,
    } as TestAllTypes_MapUint64DoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64FloatWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64FloatWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64FloatWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      FloatValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64FloatWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64FloatWrapperEntry,
    } as TestAllTypes_MapUint64FloatWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = FloatValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64FloatWrapperEntry,
    } as TestAllTypes_MapUint64FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64FloatWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64FloatWrapperEntry>
  ): TestAllTypes_MapUint64FloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64FloatWrapperEntry,
    } as TestAllTypes_MapUint64FloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Uint64WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64Uint64WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64Uint64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      UInt64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Uint64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Uint64WrapperEntry,
    } as TestAllTypes_MapUint64Uint64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint64WrapperEntry,
    } as TestAllTypes_MapUint64Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Uint64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Uint64WrapperEntry>
  ): TestAllTypes_MapUint64Uint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint64WrapperEntry,
    } as TestAllTypes_MapUint64Uint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64Uint32WrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64Uint32WrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64Uint32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      UInt32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64Uint32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64Uint32WrapperEntry,
    } as TestAllTypes_MapUint64Uint32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint32WrapperEntry,
    } as TestAllTypes_MapUint64Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64Uint32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64Uint32WrapperEntry>
  ): TestAllTypes_MapUint64Uint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64Uint32WrapperEntry,
    } as TestAllTypes_MapUint64Uint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64StringWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64StringWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64StringWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      StringValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64StringWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64StringWrapperEntry,
    } as TestAllTypes_MapUint64StringWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64StringWrapperEntry,
    } as TestAllTypes_MapUint64StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64StringWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64StringWrapperEntry>
  ): TestAllTypes_MapUint64StringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64StringWrapperEntry,
    } as TestAllTypes_MapUint64StringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64BoolWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64BoolWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64BoolWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      BoolValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64BoolWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64BoolWrapperEntry,
    } as TestAllTypes_MapUint64BoolWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BoolWrapperEntry,
    } as TestAllTypes_MapUint64BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64BoolWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64BoolWrapperEntry>
  ): TestAllTypes_MapUint64BoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BoolWrapperEntry,
    } as TestAllTypes_MapUint64BoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapUint64BytesWrapperEntry: object = { key: 0 };

export const TestAllTypes_MapUint64BytesWrapperEntry = {
  encode(
    message: TestAllTypes_MapUint64BytesWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      BytesValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapUint64BytesWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapUint64BytesWrapperEntry,
    } as TestAllTypes_MapUint64BytesWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.value = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapUint64BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BytesWrapperEntry,
    } as TestAllTypes_MapUint64BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = new Uint8Array(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapUint64BytesWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapUint64BytesWrapperEntry>
  ): TestAllTypes_MapUint64BytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapUint64BytesWrapperEntry,
    } as TestAllTypes_MapUint64BytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringBoolEntry: object = { key: "", value: false };

export const TestAllTypes_MapStringBoolEntry = {
  encode(
    message: TestAllTypes_MapStringBoolEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringBoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringBoolEntry,
    } as TestAllTypes_MapStringBoolEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringBoolEntry {
    const message = {
      ...baseTestAllTypes_MapStringBoolEntry,
    } as TestAllTypes_MapStringBoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringBoolEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringBoolEntry>
  ): TestAllTypes_MapStringBoolEntry {
    const message = {
      ...baseTestAllTypes_MapStringBoolEntry,
    } as TestAllTypes_MapStringBoolEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringStringEntry: object = { key: "", value: "" };

export const TestAllTypes_MapStringStringEntry = {
  encode(
    message: TestAllTypes_MapStringStringEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringStringEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringStringEntry,
    } as TestAllTypes_MapStringStringEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringStringEntry {
    const message = {
      ...baseTestAllTypes_MapStringStringEntry,
    } as TestAllTypes_MapStringStringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringStringEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringStringEntry>
  ): TestAllTypes_MapStringStringEntry {
    const message = {
      ...baseTestAllTypes_MapStringStringEntry,
    } as TestAllTypes_MapStringStringEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTestAllTypes_MapStringBytesEntry: object = { key: "" };

export const TestAllTypes_MapStringBytesEntry = {
  encode(
    message: TestAllTypes_MapStringBytesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringBytesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringBytesEntry,
    } as TestAllTypes_MapStringBytesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringBytesEntry {
    const message = {
      ...baseTestAllTypes_MapStringBytesEntry,
    } as TestAllTypes_MapStringBytesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringBytesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringBytesEntry>
  ): TestAllTypes_MapStringBytesEntry {
    const message = {
      ...baseTestAllTypes_MapStringBytesEntry,
    } as TestAllTypes_MapStringBytesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseTestAllTypes_MapStringInt32Entry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringInt32Entry = {
  encode(
    message: TestAllTypes_MapStringInt32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringInt32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringInt32Entry,
    } as TestAllTypes_MapStringInt32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): TestAllTypes_MapStringInt32Entry {
    const message = {
      ...baseTestAllTypes_MapStringInt32Entry,
    } as TestAllTypes_MapStringInt32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringInt32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringInt32Entry>
  ): TestAllTypes_MapStringInt32Entry {
    const message = {
      ...baseTestAllTypes_MapStringInt32Entry,
    } as TestAllTypes_MapStringInt32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringInt64Entry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringInt64Entry = {
  encode(
    message: TestAllTypes_MapStringInt64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringInt64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringInt64Entry,
    } as TestAllTypes_MapStringInt64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringInt64Entry {
    const message = {
      ...baseTestAllTypes_MapStringInt64Entry,
    } as TestAllTypes_MapStringInt64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringInt64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringInt64Entry>
  ): TestAllTypes_MapStringInt64Entry {
    const message = {
      ...baseTestAllTypes_MapStringInt64Entry,
    } as TestAllTypes_MapStringInt64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringUint32Entry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringUint32Entry = {
  encode(
    message: TestAllTypes_MapStringUint32Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringUint32Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringUint32Entry,
    } as TestAllTypes_MapStringUint32Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringUint32Entry {
    const message = {
      ...baseTestAllTypes_MapStringUint32Entry,
    } as TestAllTypes_MapStringUint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringUint32Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringUint32Entry>
  ): TestAllTypes_MapStringUint32Entry {
    const message = {
      ...baseTestAllTypes_MapStringUint32Entry,
    } as TestAllTypes_MapStringUint32Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringUint64Entry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringUint64Entry = {
  encode(
    message: TestAllTypes_MapStringUint64Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringUint64Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringUint64Entry,
    } as TestAllTypes_MapStringUint64Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringUint64Entry {
    const message = {
      ...baseTestAllTypes_MapStringUint64Entry,
    } as TestAllTypes_MapStringUint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringUint64Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringUint64Entry>
  ): TestAllTypes_MapStringUint64Entry {
    const message = {
      ...baseTestAllTypes_MapStringUint64Entry,
    } as TestAllTypes_MapStringUint64Entry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringFloatEntry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringFloatEntry = {
  encode(
    message: TestAllTypes_MapStringFloatEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringFloatEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringFloatEntry,
    } as TestAllTypes_MapStringFloatEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringFloatEntry {
    const message = {
      ...baseTestAllTypes_MapStringFloatEntry,
    } as TestAllTypes_MapStringFloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringFloatEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringFloatEntry>
  ): TestAllTypes_MapStringFloatEntry {
    const message = {
      ...baseTestAllTypes_MapStringFloatEntry,
    } as TestAllTypes_MapStringFloatEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringDoubleEntry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringDoubleEntry = {
  encode(
    message: TestAllTypes_MapStringDoubleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringDoubleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringDoubleEntry,
    } as TestAllTypes_MapStringDoubleEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringDoubleEntry {
    const message = {
      ...baseTestAllTypes_MapStringDoubleEntry,
    } as TestAllTypes_MapStringDoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringDoubleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringDoubleEntry>
  ): TestAllTypes_MapStringDoubleEntry {
    const message = {
      ...baseTestAllTypes_MapStringDoubleEntry,
    } as TestAllTypes_MapStringDoubleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringEnumEntry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringEnumEntry = {
  encode(
    message: TestAllTypes_MapStringEnumEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringEnumEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringEnumEntry,
    } as TestAllTypes_MapStringEnumEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringEnumEntry {
    const message = {
      ...baseTestAllTypes_MapStringEnumEntry,
    } as TestAllTypes_MapStringEnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = testAllTypes_NestedEnumFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringEnumEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = testAllTypes_NestedEnumToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringEnumEntry>
  ): TestAllTypes_MapStringEnumEntry {
    const message = {
      ...baseTestAllTypes_MapStringEnumEntry,
    } as TestAllTypes_MapStringEnumEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringMessageEntry: object = { key: "" };

export const TestAllTypes_MapStringMessageEntry = {
  encode(
    message: TestAllTypes_MapStringMessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      TestAllTypes_NestedMessage.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringMessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringMessageEntry,
    } as TestAllTypes_MapStringMessageEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = TestAllTypes_NestedMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringMessageEntry {
    const message = {
      ...baseTestAllTypes_MapStringMessageEntry,
    } as TestAllTypes_MapStringMessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringMessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? TestAllTypes_NestedMessage.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringMessageEntry>
  ): TestAllTypes_MapStringMessageEntry {
    const message = {
      ...baseTestAllTypes_MapStringMessageEntry,
    } as TestAllTypes_MapStringMessageEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = TestAllTypes_NestedMessage.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringDurationEntry: object = { key: "" };

export const TestAllTypes_MapStringDurationEntry = {
  encode(
    message: TestAllTypes_MapStringDurationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Duration.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringDurationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringDurationEntry,
    } as TestAllTypes_MapStringDurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringDurationEntry {
    const message = {
      ...baseTestAllTypes_MapStringDurationEntry,
    } as TestAllTypes_MapStringDurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringDurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Duration.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringDurationEntry>
  ): TestAllTypes_MapStringDurationEntry {
    const message = {
      ...baseTestAllTypes_MapStringDurationEntry,
    } as TestAllTypes_MapStringDurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Duration.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringTimestampEntry: object = { key: "" };

export const TestAllTypes_MapStringTimestampEntry = {
  encode(
    message: TestAllTypes_MapStringTimestampEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Timestamp.encode(
        toTimestamp(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringTimestampEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringTimestampEntry,
    } as TestAllTypes_MapStringTimestampEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = fromTimestamp(
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

  fromJSON(object: any): TestAllTypes_MapStringTimestampEntry {
    const message = {
      ...baseTestAllTypes_MapStringTimestampEntry,
    } as TestAllTypes_MapStringTimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = fromJsonTimestamp(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringTimestampEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringTimestampEntry>
  ): TestAllTypes_MapStringTimestampEntry {
    const message = {
      ...baseTestAllTypes_MapStringTimestampEntry,
    } as TestAllTypes_MapStringTimestampEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringNullValueEntry: object = { key: "", value: 0 };

export const TestAllTypes_MapStringNullValueEntry = {
  encode(
    message: TestAllTypes_MapStringNullValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringNullValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringNullValueEntry,
    } as TestAllTypes_MapStringNullValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringNullValueEntry {
    const message = {
      ...baseTestAllTypes_MapStringNullValueEntry,
    } as TestAllTypes_MapStringNullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = nullValueFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringNullValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = nullValueToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringNullValueEntry>
  ): TestAllTypes_MapStringNullValueEntry {
    const message = {
      ...baseTestAllTypes_MapStringNullValueEntry,
    } as TestAllTypes_MapStringNullValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringAnyEntry: object = { key: "" };

export const TestAllTypes_MapStringAnyEntry = {
  encode(
    message: TestAllTypes_MapStringAnyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringAnyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringAnyEntry,
    } as TestAllTypes_MapStringAnyEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringAnyEntry {
    const message = {
      ...baseTestAllTypes_MapStringAnyEntry,
    } as TestAllTypes_MapStringAnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringAnyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringAnyEntry>
  ): TestAllTypes_MapStringAnyEntry {
    const message = {
      ...baseTestAllTypes_MapStringAnyEntry,
    } as TestAllTypes_MapStringAnyEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringStructEntry: object = { key: "" };

export const TestAllTypes_MapStringStructEntry = {
  encode(
    message: TestAllTypes_MapStringStructEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Struct.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringStructEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringStructEntry,
    } as TestAllTypes_MapStringStructEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringStructEntry {
    const message = {
      ...baseTestAllTypes_MapStringStructEntry,
    } as TestAllTypes_MapStringStructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringStructEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Struct.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringStructEntry>
  ): TestAllTypes_MapStringStructEntry {
    const message = {
      ...baseTestAllTypes_MapStringStructEntry,
    } as TestAllTypes_MapStringStructEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Struct.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringValueEntry: object = { key: "" };

export const TestAllTypes_MapStringValueEntry = {
  encode(
    message: TestAllTypes_MapStringValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringValueEntry,
    } as TestAllTypes_MapStringValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): TestAllTypes_MapStringValueEntry {
    const message = {
      ...baseTestAllTypes_MapStringValueEntry,
    } as TestAllTypes_MapStringValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringValueEntry>
  ): TestAllTypes_MapStringValueEntry {
    const message = {
      ...baseTestAllTypes_MapStringValueEntry,
    } as TestAllTypes_MapStringValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringListValueEntry: object = { key: "" };

export const TestAllTypes_MapStringListValueEntry = {
  encode(
    message: TestAllTypes_MapStringListValueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ListValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringListValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringListValueEntry,
    } as TestAllTypes_MapStringListValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringListValueEntry {
    const message = {
      ...baseTestAllTypes_MapStringListValueEntry,
    } as TestAllTypes_MapStringListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringListValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ListValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringListValueEntry>
  ): TestAllTypes_MapStringListValueEntry {
    const message = {
      ...baseTestAllTypes_MapStringListValueEntry,
    } as TestAllTypes_MapStringListValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ListValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringInt64WrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringInt64WrapperEntry = {
  encode(
    message: TestAllTypes_MapStringInt64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Int64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringInt64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringInt64WrapperEntry,
    } as TestAllTypes_MapStringInt64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringInt64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringInt64WrapperEntry,
    } as TestAllTypes_MapStringInt64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringInt64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringInt64WrapperEntry>
  ): TestAllTypes_MapStringInt64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringInt64WrapperEntry,
    } as TestAllTypes_MapStringInt64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringInt32WrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringInt32WrapperEntry = {
  encode(
    message: TestAllTypes_MapStringInt32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Int32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringInt32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringInt32WrapperEntry,
    } as TestAllTypes_MapStringInt32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Int32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringInt32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringInt32WrapperEntry,
    } as TestAllTypes_MapStringInt32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringInt32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringInt32WrapperEntry>
  ): TestAllTypes_MapStringInt32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringInt32WrapperEntry,
    } as TestAllTypes_MapStringInt32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringDoubleWrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringDoubleWrapperEntry = {
  encode(
    message: TestAllTypes_MapStringDoubleWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DoubleValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringDoubleWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringDoubleWrapperEntry,
    } as TestAllTypes_MapStringDoubleWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringDoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringDoubleWrapperEntry,
    } as TestAllTypes_MapStringDoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringDoubleWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringDoubleWrapperEntry>
  ): TestAllTypes_MapStringDoubleWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringDoubleWrapperEntry,
    } as TestAllTypes_MapStringDoubleWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringFloatWrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringFloatWrapperEntry = {
  encode(
    message: TestAllTypes_MapStringFloatWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FloatValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringFloatWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringFloatWrapperEntry,
    } as TestAllTypes_MapStringFloatWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FloatValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringFloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringFloatWrapperEntry,
    } as TestAllTypes_MapStringFloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringFloatWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringFloatWrapperEntry>
  ): TestAllTypes_MapStringFloatWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringFloatWrapperEntry,
    } as TestAllTypes_MapStringFloatWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringUint64WrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringUint64WrapperEntry = {
  encode(
    message: TestAllTypes_MapStringUint64WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UInt64Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringUint64WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringUint64WrapperEntry,
    } as TestAllTypes_MapStringUint64WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringUint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringUint64WrapperEntry,
    } as TestAllTypes_MapStringUint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringUint64WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringUint64WrapperEntry>
  ): TestAllTypes_MapStringUint64WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringUint64WrapperEntry,
    } as TestAllTypes_MapStringUint64WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringUint32WrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringUint32WrapperEntry = {
  encode(
    message: TestAllTypes_MapStringUint32WrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UInt32Value.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringUint32WrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringUint32WrapperEntry,
    } as TestAllTypes_MapStringUint32WrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringUint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringUint32WrapperEntry,
    } as TestAllTypes_MapStringUint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringUint32WrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringUint32WrapperEntry>
  ): TestAllTypes_MapStringUint32WrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringUint32WrapperEntry,
    } as TestAllTypes_MapStringUint32WrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringStringWrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringStringWrapperEntry = {
  encode(
    message: TestAllTypes_MapStringStringWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      StringValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringStringWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringStringWrapperEntry,
    } as TestAllTypes_MapStringStringWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringStringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringStringWrapperEntry,
    } as TestAllTypes_MapStringStringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringStringWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringStringWrapperEntry>
  ): TestAllTypes_MapStringStringWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringStringWrapperEntry,
    } as TestAllTypes_MapStringStringWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringBoolWrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringBoolWrapperEntry = {
  encode(
    message: TestAllTypes_MapStringBoolWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BoolValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringBoolWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringBoolWrapperEntry,
    } as TestAllTypes_MapStringBoolWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringBoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringBoolWrapperEntry,
    } as TestAllTypes_MapStringBoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringBoolWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringBoolWrapperEntry>
  ): TestAllTypes_MapStringBoolWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringBoolWrapperEntry,
    } as TestAllTypes_MapStringBoolWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTestAllTypes_MapStringBytesWrapperEntry: object = { key: "" };

export const TestAllTypes_MapStringBytesWrapperEntry = {
  encode(
    message: TestAllTypes_MapStringBytesWrapperEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BytesValue.encode(
        { value: message.value! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestAllTypes_MapStringBytesWrapperEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestAllTypes_MapStringBytesWrapperEntry,
    } as TestAllTypes_MapStringBytesWrapperEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestAllTypes_MapStringBytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringBytesWrapperEntry,
    } as TestAllTypes_MapStringBytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = new Uint8Array(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TestAllTypes_MapStringBytesWrapperEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestAllTypes_MapStringBytesWrapperEntry>
  ): TestAllTypes_MapStringBytesWrapperEntry {
    const message = {
      ...baseTestAllTypes_MapStringBytesWrapperEntry,
    } as TestAllTypes_MapStringBytesWrapperEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseNestedTestAllTypes: object = {};

export const NestedTestAllTypes = {
  encode(
    message: NestedTestAllTypes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.child !== undefined) {
      NestedTestAllTypes.encode(
        message.child,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload !== undefined) {
      TestAllTypes.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NestedTestAllTypes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNestedTestAllTypes } as NestedTestAllTypes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.child = NestedTestAllTypes.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = TestAllTypes.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NestedTestAllTypes {
    const message = { ...baseNestedTestAllTypes } as NestedTestAllTypes;
    if (object.child !== undefined && object.child !== null) {
      message.child = NestedTestAllTypes.fromJSON(object.child);
    } else {
      message.child = undefined;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = TestAllTypes.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    return message;
  },

  toJSON(message: NestedTestAllTypes): unknown {
    const obj: any = {};
    message.child !== undefined &&
      (obj.child = message.child
        ? NestedTestAllTypes.toJSON(message.child)
        : undefined);
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? TestAllTypes.toJSON(message.payload)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NestedTestAllTypes>): NestedTestAllTypes {
    const message = { ...baseNestedTestAllTypes } as NestedTestAllTypes;
    if (object.child !== undefined && object.child !== null) {
      message.child = NestedTestAllTypes.fromPartial(object.child);
    } else {
      message.child = undefined;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = TestAllTypes.fromPartial(object.payload);
    } else {
      message.payload = undefined;
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
