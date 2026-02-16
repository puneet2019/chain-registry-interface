/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "perftools.profiles";

export interface Profile {
  /**
   * A description of the samples associated with each Sample.value.
   * For a cpu profile this might be:
   *   [["cpu","nanoseconds"]] or [["wall","seconds"]] or [["syscall","count"]]
   * For a heap profile, this might be:
   *   [["allocations","count"], ["space","bytes"]],
   * If one of the values represents the number of events represented
   * by the sample, by convention it should be at index 0 and use
   * sample_type.unit == "count".
   */
  sampleType: ValueType[];
  /** The set of samples recorded in this profile. */
  sample: Sample[];
  /**
   * Mapping from address ranges to the image/binary/library mapped
   * into that address range.  mapping[0] will be the main binary.
   */
  mapping: Mapping[];
  /** Locations referenced by samples. */
  location: Location[];
  /** Functions referenced by locations. */
  function: Function[];
  /**
   * A common table for strings referenced by various messages.
   * string_table[0] must always be "".
   */
  stringTable: string[];
  /**
   * frames with Function.function_name fully matching the following
   * regexp will be dropped from the samples, along with their successors.
   */
  dropFrames: number;
  /**
   * frames with Function.function_name fully matching the following
   * regexp will be kept, even if it matches drop_frames.
   */
  keepFrames: number;
  /** Time of collection (UTC) represented as nanoseconds past the epoch. */
  timeNanos: number;
  /** Duration of the profile, if a duration makes sense. */
  durationNanos: number;
  /**
   * The kind of events between sampled occurrences.
   * e.g [ "cpu","cycles" ] or [ "heap","bytes" ]
   */
  periodType: ValueType | undefined;
  /** The number of events between sampled occurrences. */
  period: number;
  /**
   * Free-form text associated with the profile. The text is displayed as is
   * to the user by the tools that read profiles (e.g. by pprof). This field
   * should not be used to store any machine-readable information, it is only
   * for human-friendly content. The profile must stay functional if this field
   * is cleaned.
   */
  comment: number[];
  /**
   * Index into the string table of the type of the preferred sample
   * value. If unset, clients should default to the last sample value.
   */
  defaultSampleType: number;
}

/** ValueType describes the semantics and measurement units of a value. */
export interface ValueType {
  /** Index into string table. */
  type: number;
  /** Index into string table. */
  unit: number;
}

/**
 * Each Sample records values encountered in some program
 * context. The program context is typically a stack trace, perhaps
 * augmented with auxiliary information like the thread-id, some
 * indicator of a higher level request being handled etc.
 */
export interface Sample {
  /**
   * The ids recorded here correspond to a Profile.location.id.
   * The leaf is at location_id[0].
   */
  locationId: number[];
  /**
   * The type and unit of each value is defined by the corresponding
   * entry in Profile.sample_type. All samples must have the same
   * number of values, the same as the length of Profile.sample_type.
   * When aggregating multiple samples into a single sample, the
   * result has a list of values that is the element-wise sum of the
   * lists of the originals.
   */
  value: number[];
  /**
   * label includes additional context for this sample. It can include
   * things like a thread id, allocation size, etc.
   *
   * NOTE: While possible, having multiple values for the same label key is
   * strongly discouraged and should never be used. Most tools (e.g. pprof) do
   * not have good (or any) support for multi-value labels. And an even more
   * discouraged case is having a string label and a numeric label of the same
   * name on a sample.  Again, possible to express, but should not be used.
   */
  label: Label[];
}

export interface Label {
  /**
   * Index into string table. An annotation for a sample (e.g.
   * "allocation_size") with an associated value.
   * Keys with "pprof::" prefix are reserved for internal use by pprof.
   */
  key: number;
  /** At most one of the following must be present */
  str: number;
  num: number;
  /**
   * Should only be present when num is present.
   * Specifies the units of num.
   * Use arbitrary string (for example, "requests") as a custom count unit.
   * If no unit is specified, consumer may apply heuristic to deduce the unit.
   * Consumers may also  interpret units like "bytes" and "kilobytes" as memory
   * units and units like "seconds" and "nanoseconds" as time units,
   * and apply appropriate unit conversions to these.
   */
  numUnit: number;
}

export interface Mapping {
  /** Unique nonzero id for the mapping. */
  id: number;
  /** Address at which the binary (or DLL) is loaded into memory. */
  memoryStart: number;
  /** The limit of the address range occupied by this mapping. */
  memoryLimit: number;
  /** Offset in the binary that corresponds to the first mapped address. */
  fileOffset: number;
  /**
   * The object this entry is loaded from.  This can be a filename on
   * disk for the main binary and shared libraries, or virtual
   * abstractions like "[vdso]".
   */
  filename: number;
  /**
   * A string that uniquely identifies a particular program version
   * with high probability. E.g., for binaries generated by GNU tools,
   * it could be the contents of the .note.gnu.build-id field.
   */
  buildId: number;
  /** The following fields indicate the resolution of symbolic info. */
  hasFunctions: boolean;
  hasFilenames: boolean;
  hasLineNumbers: boolean;
  hasInlineFrames: boolean;
}

/** Describes function and line table debug information. */
export interface Location {
  /**
   * Unique nonzero id for the location.  A profile could use
   * instruction addresses or any integer sequence as ids.
   */
  id: number;
  /**
   * The id of the corresponding profile.Mapping for this location.
   * It can be unset if the mapping is unknown or not applicable for
   * this profile type.
   */
  mappingId: number;
  /**
   * The instruction address for this location, if available.  It
   * should be within [Mapping.memory_start...Mapping.memory_limit]
   * for the corresponding mapping. A non-leaf address may be in the
   * middle of a call instruction. It is up to display tools to find
   * the beginning of the instruction if necessary.
   */
  address: number;
  /**
   * Multiple line indicates this location has inlined functions,
   * where the last entry represents the caller into which the
   * preceding entries were inlined.
   *
   * E.g., if memcpy() is inlined into printf:
   *    line[0].function_name == "memcpy"
   *    line[1].function_name == "printf"
   */
  line: Line[];
  /**
   * Provides an indication that multiple symbols map to this location's
   * address, for example due to identical code folding by the linker. In that
   * case the line information above represents one of the multiple
   * symbols. This field must be recomputed when the symbolization state of the
   * profile changes.
   */
  isFolded: boolean;
}

export interface Line {
  /** The id of the corresponding profile.Function for this line. */
  functionId: number;
  /** Line number in source code. */
  line: number;
  /** Column number in source code. */
  column: number;
}

export interface Function {
  /** Unique nonzero id for the function. */
  id: number;
  /** Name of the function, in human-readable form if available. */
  name: number;
  /**
   * Name of the function, as identified by the system.
   * For instance, it can be a C++ mangled name.
   */
  systemName: number;
  /** Source file containing the function. */
  filename: number;
  /** Line number in source file. */
  startLine: number;
}

const baseProfile: object = {
  stringTable: "",
  dropFrames: 0,
  keepFrames: 0,
  timeNanos: 0,
  durationNanos: 0,
  period: 0,
  comment: 0,
  defaultSampleType: 0,
};

export const Profile = {
  encode(
    message: Profile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sampleType) {
      ValueType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sample) {
      Sample.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mapping) {
      Mapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.location) {
      Location.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.function) {
      Function.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.stringTable) {
      writer.uint32(50).string(v!);
    }
    if (message.dropFrames !== 0) {
      writer.uint32(56).int64(message.dropFrames);
    }
    if (message.keepFrames !== 0) {
      writer.uint32(64).int64(message.keepFrames);
    }
    if (message.timeNanos !== 0) {
      writer.uint32(72).int64(message.timeNanos);
    }
    if (message.durationNanos !== 0) {
      writer.uint32(80).int64(message.durationNanos);
    }
    if (message.periodType !== undefined) {
      ValueType.encode(message.periodType, writer.uint32(90).fork()).ldelim();
    }
    if (message.period !== 0) {
      writer.uint32(96).int64(message.period);
    }
    writer.uint32(106).fork();
    for (const v of message.comment) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.defaultSampleType !== 0) {
      writer.uint32(112).int64(message.defaultSampleType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    message.sampleType = [];
    message.sample = [];
    message.mapping = [];
    message.location = [];
    message.function = [];
    message.stringTable = [];
    message.comment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sampleType.push(ValueType.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sample.push(Sample.decode(reader, reader.uint32()));
          break;
        case 3:
          message.mapping.push(Mapping.decode(reader, reader.uint32()));
          break;
        case 4:
          message.location.push(Location.decode(reader, reader.uint32()));
          break;
        case 5:
          message.function.push(Function.decode(reader, reader.uint32()));
          break;
        case 6:
          message.stringTable.push(reader.string());
          break;
        case 7:
          message.dropFrames = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.keepFrames = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.timeNanos = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.durationNanos = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.periodType = ValueType.decode(reader, reader.uint32());
          break;
        case 12:
          message.period = longToNumber(reader.int64() as Long);
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.comment.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.comment.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 14:
          message.defaultSampleType = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    message.sampleType = [];
    message.sample = [];
    message.mapping = [];
    message.location = [];
    message.function = [];
    message.stringTable = [];
    message.comment = [];
    if (object.sampleType !== undefined && object.sampleType !== null) {
      for (const e of object.sampleType) {
        message.sampleType.push(ValueType.fromJSON(e));
      }
    }
    if (object.sample !== undefined && object.sample !== null) {
      for (const e of object.sample) {
        message.sample.push(Sample.fromJSON(e));
      }
    }
    if (object.mapping !== undefined && object.mapping !== null) {
      for (const e of object.mapping) {
        message.mapping.push(Mapping.fromJSON(e));
      }
    }
    if (object.location !== undefined && object.location !== null) {
      for (const e of object.location) {
        message.location.push(Location.fromJSON(e));
      }
    }
    if (object.function !== undefined && object.function !== null) {
      for (const e of object.function) {
        message.function.push(Function.fromJSON(e));
      }
    }
    if (object.stringTable !== undefined && object.stringTable !== null) {
      for (const e of object.stringTable) {
        message.stringTable.push(String(e));
      }
    }
    if (object.dropFrames !== undefined && object.dropFrames !== null) {
      message.dropFrames = Number(object.dropFrames);
    } else {
      message.dropFrames = 0;
    }
    if (object.keepFrames !== undefined && object.keepFrames !== null) {
      message.keepFrames = Number(object.keepFrames);
    } else {
      message.keepFrames = 0;
    }
    if (object.timeNanos !== undefined && object.timeNanos !== null) {
      message.timeNanos = Number(object.timeNanos);
    } else {
      message.timeNanos = 0;
    }
    if (object.durationNanos !== undefined && object.durationNanos !== null) {
      message.durationNanos = Number(object.durationNanos);
    } else {
      message.durationNanos = 0;
    }
    if (object.periodType !== undefined && object.periodType !== null) {
      message.periodType = ValueType.fromJSON(object.periodType);
    } else {
      message.periodType = undefined;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Number(object.period);
    } else {
      message.period = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      for (const e of object.comment) {
        message.comment.push(Number(e));
      }
    }
    if (
      object.defaultSampleType !== undefined &&
      object.defaultSampleType !== null
    ) {
      message.defaultSampleType = Number(object.defaultSampleType);
    } else {
      message.defaultSampleType = 0;
    }
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    if (message.sampleType) {
      obj.sampleType = message.sampleType.map((e) =>
        e ? ValueType.toJSON(e) : undefined
      );
    } else {
      obj.sampleType = [];
    }
    if (message.sample) {
      obj.sample = message.sample.map((e) =>
        e ? Sample.toJSON(e) : undefined
      );
    } else {
      obj.sample = [];
    }
    if (message.mapping) {
      obj.mapping = message.mapping.map((e) =>
        e ? Mapping.toJSON(e) : undefined
      );
    } else {
      obj.mapping = [];
    }
    if (message.location) {
      obj.location = message.location.map((e) =>
        e ? Location.toJSON(e) : undefined
      );
    } else {
      obj.location = [];
    }
    if (message.function) {
      obj.function = message.function.map((e) =>
        e ? Function.toJSON(e) : undefined
      );
    } else {
      obj.function = [];
    }
    if (message.stringTable) {
      obj.stringTable = message.stringTable.map((e) => e);
    } else {
      obj.stringTable = [];
    }
    message.dropFrames !== undefined && (obj.dropFrames = message.dropFrames);
    message.keepFrames !== undefined && (obj.keepFrames = message.keepFrames);
    message.timeNanos !== undefined && (obj.timeNanos = message.timeNanos);
    message.durationNanos !== undefined &&
      (obj.durationNanos = message.durationNanos);
    message.periodType !== undefined &&
      (obj.periodType = message.periodType
        ? ValueType.toJSON(message.periodType)
        : undefined);
    message.period !== undefined && (obj.period = message.period);
    if (message.comment) {
      obj.comment = message.comment.map((e) => e);
    } else {
      obj.comment = [];
    }
    message.defaultSampleType !== undefined &&
      (obj.defaultSampleType = message.defaultSampleType);
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    message.sampleType = [];
    message.sample = [];
    message.mapping = [];
    message.location = [];
    message.function = [];
    message.stringTable = [];
    message.comment = [];
    if (object.sampleType !== undefined && object.sampleType !== null) {
      for (const e of object.sampleType) {
        message.sampleType.push(ValueType.fromPartial(e));
      }
    }
    if (object.sample !== undefined && object.sample !== null) {
      for (const e of object.sample) {
        message.sample.push(Sample.fromPartial(e));
      }
    }
    if (object.mapping !== undefined && object.mapping !== null) {
      for (const e of object.mapping) {
        message.mapping.push(Mapping.fromPartial(e));
      }
    }
    if (object.location !== undefined && object.location !== null) {
      for (const e of object.location) {
        message.location.push(Location.fromPartial(e));
      }
    }
    if (object.function !== undefined && object.function !== null) {
      for (const e of object.function) {
        message.function.push(Function.fromPartial(e));
      }
    }
    if (object.stringTable !== undefined && object.stringTable !== null) {
      for (const e of object.stringTable) {
        message.stringTable.push(e);
      }
    }
    if (object.dropFrames !== undefined && object.dropFrames !== null) {
      message.dropFrames = object.dropFrames;
    } else {
      message.dropFrames = 0;
    }
    if (object.keepFrames !== undefined && object.keepFrames !== null) {
      message.keepFrames = object.keepFrames;
    } else {
      message.keepFrames = 0;
    }
    if (object.timeNanos !== undefined && object.timeNanos !== null) {
      message.timeNanos = object.timeNanos;
    } else {
      message.timeNanos = 0;
    }
    if (object.durationNanos !== undefined && object.durationNanos !== null) {
      message.durationNanos = object.durationNanos;
    } else {
      message.durationNanos = 0;
    }
    if (object.periodType !== undefined && object.periodType !== null) {
      message.periodType = ValueType.fromPartial(object.periodType);
    } else {
      message.periodType = undefined;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      for (const e of object.comment) {
        message.comment.push(e);
      }
    }
    if (
      object.defaultSampleType !== undefined &&
      object.defaultSampleType !== null
    ) {
      message.defaultSampleType = object.defaultSampleType;
    } else {
      message.defaultSampleType = 0;
    }
    return message;
  },
};

const baseValueType: object = { type: 0, unit: 0 };

export const ValueType = {
  encode(
    message: ValueType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int64(message.type);
    }
    if (message.unit !== 0) {
      writer.uint32(16).int64(message.unit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValueType } as ValueType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.unit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValueType {
    const message = { ...baseValueType } as ValueType;
    if (object.type !== undefined && object.type !== null) {
      message.type = Number(object.type);
    } else {
      message.type = 0;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = Number(object.unit);
    } else {
      message.unit = 0;
    }
    return message;
  },

  toJSON(message: ValueType): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.unit !== undefined && (obj.unit = message.unit);
    return obj;
  },

  fromPartial(object: DeepPartial<ValueType>): ValueType {
    const message = { ...baseValueType } as ValueType;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    } else {
      message.unit = 0;
    }
    return message;
  },
};

const baseSample: object = { locationId: 0, value: 0 };

export const Sample = {
  encode(
    message: Sample,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.locationId) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.value) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.label) {
      Label.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sample {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSample } as Sample;
    message.locationId = [];
    message.value = [];
    message.label = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.locationId.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.locationId.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.value.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 3:
          message.label.push(Label.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sample {
    const message = { ...baseSample } as Sample;
    message.locationId = [];
    message.value = [];
    message.label = [];
    if (object.locationId !== undefined && object.locationId !== null) {
      for (const e of object.locationId) {
        message.locationId.push(Number(e));
      }
    }
    if (object.value !== undefined && object.value !== null) {
      for (const e of object.value) {
        message.value.push(Number(e));
      }
    }
    if (object.label !== undefined && object.label !== null) {
      for (const e of object.label) {
        message.label.push(Label.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Sample): unknown {
    const obj: any = {};
    if (message.locationId) {
      obj.locationId = message.locationId.map((e) => e);
    } else {
      obj.locationId = [];
    }
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    if (message.label) {
      obj.label = message.label.map((e) => (e ? Label.toJSON(e) : undefined));
    } else {
      obj.label = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Sample>): Sample {
    const message = { ...baseSample } as Sample;
    message.locationId = [];
    message.value = [];
    message.label = [];
    if (object.locationId !== undefined && object.locationId !== null) {
      for (const e of object.locationId) {
        message.locationId.push(e);
      }
    }
    if (object.value !== undefined && object.value !== null) {
      for (const e of object.value) {
        message.value.push(e);
      }
    }
    if (object.label !== undefined && object.label !== null) {
      for (const e of object.label) {
        message.label.push(Label.fromPartial(e));
      }
    }
    return message;
  },
};

const baseLabel: object = { key: 0, str: 0, num: 0, numUnit: 0 };

export const Label = {
  encode(message: Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.str !== 0) {
      writer.uint32(16).int64(message.str);
    }
    if (message.num !== 0) {
      writer.uint32(24).int64(message.num);
    }
    if (message.numUnit !== 0) {
      writer.uint32(32).int64(message.numUnit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Label {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLabel } as Label;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.str = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.num = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.numUnit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Label {
    const message = { ...baseLabel } as Label;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.str !== undefined && object.str !== null) {
      message.str = Number(object.str);
    } else {
      message.str = 0;
    }
    if (object.num !== undefined && object.num !== null) {
      message.num = Number(object.num);
    } else {
      message.num = 0;
    }
    if (object.numUnit !== undefined && object.numUnit !== null) {
      message.numUnit = Number(object.numUnit);
    } else {
      message.numUnit = 0;
    }
    return message;
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.str !== undefined && (obj.str = message.str);
    message.num !== undefined && (obj.num = message.num);
    message.numUnit !== undefined && (obj.numUnit = message.numUnit);
    return obj;
  },

  fromPartial(object: DeepPartial<Label>): Label {
    const message = { ...baseLabel } as Label;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.str !== undefined && object.str !== null) {
      message.str = object.str;
    } else {
      message.str = 0;
    }
    if (object.num !== undefined && object.num !== null) {
      message.num = object.num;
    } else {
      message.num = 0;
    }
    if (object.numUnit !== undefined && object.numUnit !== null) {
      message.numUnit = object.numUnit;
    } else {
      message.numUnit = 0;
    }
    return message;
  },
};

const baseMapping: object = {
  id: 0,
  memoryStart: 0,
  memoryLimit: 0,
  fileOffset: 0,
  filename: 0,
  buildId: 0,
  hasFunctions: false,
  hasFilenames: false,
  hasLineNumbers: false,
  hasInlineFrames: false,
};

export const Mapping = {
  encode(
    message: Mapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.memoryStart !== 0) {
      writer.uint32(16).uint64(message.memoryStart);
    }
    if (message.memoryLimit !== 0) {
      writer.uint32(24).uint64(message.memoryLimit);
    }
    if (message.fileOffset !== 0) {
      writer.uint32(32).uint64(message.fileOffset);
    }
    if (message.filename !== 0) {
      writer.uint32(40).int64(message.filename);
    }
    if (message.buildId !== 0) {
      writer.uint32(48).int64(message.buildId);
    }
    if (message.hasFunctions === true) {
      writer.uint32(56).bool(message.hasFunctions);
    }
    if (message.hasFilenames === true) {
      writer.uint32(64).bool(message.hasFilenames);
    }
    if (message.hasLineNumbers === true) {
      writer.uint32(72).bool(message.hasLineNumbers);
    }
    if (message.hasInlineFrames === true) {
      writer.uint32(80).bool(message.hasInlineFrames);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapping } as Mapping;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.memoryStart = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.memoryLimit = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.fileOffset = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.filename = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.buildId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.hasFunctions = reader.bool();
          break;
        case 8:
          message.hasFilenames = reader.bool();
          break;
        case 9:
          message.hasLineNumbers = reader.bool();
          break;
        case 10:
          message.hasInlineFrames = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mapping {
    const message = { ...baseMapping } as Mapping;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.memoryStart !== undefined && object.memoryStart !== null) {
      message.memoryStart = Number(object.memoryStart);
    } else {
      message.memoryStart = 0;
    }
    if (object.memoryLimit !== undefined && object.memoryLimit !== null) {
      message.memoryLimit = Number(object.memoryLimit);
    } else {
      message.memoryLimit = 0;
    }
    if (object.fileOffset !== undefined && object.fileOffset !== null) {
      message.fileOffset = Number(object.fileOffset);
    } else {
      message.fileOffset = 0;
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = Number(object.filename);
    } else {
      message.filename = 0;
    }
    if (object.buildId !== undefined && object.buildId !== null) {
      message.buildId = Number(object.buildId);
    } else {
      message.buildId = 0;
    }
    if (object.hasFunctions !== undefined && object.hasFunctions !== null) {
      message.hasFunctions = Boolean(object.hasFunctions);
    } else {
      message.hasFunctions = false;
    }
    if (object.hasFilenames !== undefined && object.hasFilenames !== null) {
      message.hasFilenames = Boolean(object.hasFilenames);
    } else {
      message.hasFilenames = false;
    }
    if (object.hasLineNumbers !== undefined && object.hasLineNumbers !== null) {
      message.hasLineNumbers = Boolean(object.hasLineNumbers);
    } else {
      message.hasLineNumbers = false;
    }
    if (
      object.hasInlineFrames !== undefined &&
      object.hasInlineFrames !== null
    ) {
      message.hasInlineFrames = Boolean(object.hasInlineFrames);
    } else {
      message.hasInlineFrames = false;
    }
    return message;
  },

  toJSON(message: Mapping): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.memoryStart !== undefined &&
      (obj.memoryStart = message.memoryStart);
    message.memoryLimit !== undefined &&
      (obj.memoryLimit = message.memoryLimit);
    message.fileOffset !== undefined && (obj.fileOffset = message.fileOffset);
    message.filename !== undefined && (obj.filename = message.filename);
    message.buildId !== undefined && (obj.buildId = message.buildId);
    message.hasFunctions !== undefined &&
      (obj.hasFunctions = message.hasFunctions);
    message.hasFilenames !== undefined &&
      (obj.hasFilenames = message.hasFilenames);
    message.hasLineNumbers !== undefined &&
      (obj.hasLineNumbers = message.hasLineNumbers);
    message.hasInlineFrames !== undefined &&
      (obj.hasInlineFrames = message.hasInlineFrames);
    return obj;
  },

  fromPartial(object: DeepPartial<Mapping>): Mapping {
    const message = { ...baseMapping } as Mapping;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.memoryStart !== undefined && object.memoryStart !== null) {
      message.memoryStart = object.memoryStart;
    } else {
      message.memoryStart = 0;
    }
    if (object.memoryLimit !== undefined && object.memoryLimit !== null) {
      message.memoryLimit = object.memoryLimit;
    } else {
      message.memoryLimit = 0;
    }
    if (object.fileOffset !== undefined && object.fileOffset !== null) {
      message.fileOffset = object.fileOffset;
    } else {
      message.fileOffset = 0;
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename;
    } else {
      message.filename = 0;
    }
    if (object.buildId !== undefined && object.buildId !== null) {
      message.buildId = object.buildId;
    } else {
      message.buildId = 0;
    }
    if (object.hasFunctions !== undefined && object.hasFunctions !== null) {
      message.hasFunctions = object.hasFunctions;
    } else {
      message.hasFunctions = false;
    }
    if (object.hasFilenames !== undefined && object.hasFilenames !== null) {
      message.hasFilenames = object.hasFilenames;
    } else {
      message.hasFilenames = false;
    }
    if (object.hasLineNumbers !== undefined && object.hasLineNumbers !== null) {
      message.hasLineNumbers = object.hasLineNumbers;
    } else {
      message.hasLineNumbers = false;
    }
    if (
      object.hasInlineFrames !== undefined &&
      object.hasInlineFrames !== null
    ) {
      message.hasInlineFrames = object.hasInlineFrames;
    } else {
      message.hasInlineFrames = false;
    }
    return message;
  },
};

const baseLocation: object = {
  id: 0,
  mappingId: 0,
  address: 0,
  isFolded: false,
};

export const Location = {
  encode(
    message: Location,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.mappingId !== 0) {
      writer.uint32(16).uint64(message.mappingId);
    }
    if (message.address !== 0) {
      writer.uint32(24).uint64(message.address);
    }
    for (const v of message.line) {
      Line.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.isFolded === true) {
      writer.uint32(40).bool(message.isFolded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocation } as Location;
    message.line = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.mappingId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.line.push(Line.decode(reader, reader.uint32()));
          break;
        case 5:
          message.isFolded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location {
    const message = { ...baseLocation } as Location;
    message.line = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.mappingId !== undefined && object.mappingId !== null) {
      message.mappingId = Number(object.mappingId);
    } else {
      message.mappingId = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Number(object.address);
    } else {
      message.address = 0;
    }
    if (object.line !== undefined && object.line !== null) {
      for (const e of object.line) {
        message.line.push(Line.fromJSON(e));
      }
    }
    if (object.isFolded !== undefined && object.isFolded !== null) {
      message.isFolded = Boolean(object.isFolded);
    } else {
      message.isFolded = false;
    }
    return message;
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.mappingId !== undefined && (obj.mappingId = message.mappingId);
    message.address !== undefined && (obj.address = message.address);
    if (message.line) {
      obj.line = message.line.map((e) => (e ? Line.toJSON(e) : undefined));
    } else {
      obj.line = [];
    }
    message.isFolded !== undefined && (obj.isFolded = message.isFolded);
    return obj;
  },

  fromPartial(object: DeepPartial<Location>): Location {
    const message = { ...baseLocation } as Location;
    message.line = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.mappingId !== undefined && object.mappingId !== null) {
      message.mappingId = object.mappingId;
    } else {
      message.mappingId = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = 0;
    }
    if (object.line !== undefined && object.line !== null) {
      for (const e of object.line) {
        message.line.push(Line.fromPartial(e));
      }
    }
    if (object.isFolded !== undefined && object.isFolded !== null) {
      message.isFolded = object.isFolded;
    } else {
      message.isFolded = false;
    }
    return message;
  },
};

const baseLine: object = { functionId: 0, line: 0, column: 0 };

export const Line = {
  encode(message: Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== 0) {
      writer.uint32(8).uint64(message.functionId);
    }
    if (message.line !== 0) {
      writer.uint32(16).int64(message.line);
    }
    if (message.column !== 0) {
      writer.uint32(24).int64(message.column);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Line {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLine } as Line;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.line = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.column = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Line {
    const message = { ...baseLine } as Line;
    if (object.functionId !== undefined && object.functionId !== null) {
      message.functionId = Number(object.functionId);
    } else {
      message.functionId = 0;
    }
    if (object.line !== undefined && object.line !== null) {
      message.line = Number(object.line);
    } else {
      message.line = 0;
    }
    if (object.column !== undefined && object.column !== null) {
      message.column = Number(object.column);
    } else {
      message.column = 0;
    }
    return message;
  },

  toJSON(message: Line): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.line !== undefined && (obj.line = message.line);
    message.column !== undefined && (obj.column = message.column);
    return obj;
  },

  fromPartial(object: DeepPartial<Line>): Line {
    const message = { ...baseLine } as Line;
    if (object.functionId !== undefined && object.functionId !== null) {
      message.functionId = object.functionId;
    } else {
      message.functionId = 0;
    }
    if (object.line !== undefined && object.line !== null) {
      message.line = object.line;
    } else {
      message.line = 0;
    }
    if (object.column !== undefined && object.column !== null) {
      message.column = object.column;
    } else {
      message.column = 0;
    }
    return message;
  },
};

const baseFunction: object = {
  id: 0,
  name: 0,
  systemName: 0,
  filename: 0,
  startLine: 0,
};

export const Function = {
  encode(
    message: Function,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== 0) {
      writer.uint32(16).int64(message.name);
    }
    if (message.systemName !== 0) {
      writer.uint32(24).int64(message.systemName);
    }
    if (message.filename !== 0) {
      writer.uint32(32).int64(message.filename);
    }
    if (message.startLine !== 0) {
      writer.uint32(40).int64(message.startLine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Function {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFunction } as Function;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.systemName = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.filename = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.startLine = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Function {
    const message = { ...baseFunction } as Function;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = Number(object.name);
    } else {
      message.name = 0;
    }
    if (object.systemName !== undefined && object.systemName !== null) {
      message.systemName = Number(object.systemName);
    } else {
      message.systemName = 0;
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = Number(object.filename);
    } else {
      message.filename = 0;
    }
    if (object.startLine !== undefined && object.startLine !== null) {
      message.startLine = Number(object.startLine);
    } else {
      message.startLine = 0;
    }
    return message;
  },

  toJSON(message: Function): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.systemName !== undefined && (obj.systemName = message.systemName);
    message.filename !== undefined && (obj.filename = message.filename);
    message.startLine !== undefined && (obj.startLine = message.startLine);
    return obj;
  },

  fromPartial(object: DeepPartial<Function>): Function {
    const message = { ...baseFunction } as Function;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = 0;
    }
    if (object.systemName !== undefined && object.systemName !== null) {
      message.systemName = object.systemName;
    } else {
      message.systemName = 0;
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename;
    } else {
      message.filename = 0;
    }
    if (object.startLine !== undefined && object.startLine !== null) {
      message.startLine = object.startLine;
    } else {
      message.startLine = 0;
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
