/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import {
  NullValue,
  nullValueFromJSON,
  nullValueToJSON,
} from "../../google/protobuf/struct";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "cel.expr";

/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
  /** The parsed expression. */
  expr: Expr | undefined;
  /** The source info derived from input that generated the parsed `expr`. */
  sourceInfo: SourceInfo | undefined;
}

/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a
 * [Decl][cel.expr.Decl] provided at type-check for an expression to be
 * valid. A reference may either be a bare identifier `name` or a qualified
 * identifier `google.api.name`. References may either refer to a value or a
 * function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a
 * [Expr.Select][cel.expr.Expr.Select] expression, and the function
 * declaration `startsWith`.
 */
export interface Expr {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id: number;
  /** A constant expression. */
  constExpr: Constant | undefined;
  /** An identifier expression. */
  identExpr: Expr_Ident | undefined;
  /** A field selection expression, e.g. `request.auth`. */
  selectExpr: Expr_Select | undefined;
  /** A call expression, including calls to predefined functions and operators. */
  callExpr: Expr_Call | undefined;
  /** A list creation expression. */
  listExpr: Expr_CreateList | undefined;
  /** A map or message creation expression. */
  structExpr: Expr_CreateStruct | undefined;
  /** A comprehension expression. */
  comprehensionExpr: Expr_Comprehension | undefined;
}

/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
  /**
   * Required. Holds a single, unqualified identifier, possibly preceded by a
   * '.'.
   *
   * Qualified names are represented by the
   * [Expr.Select][cel.expr.Expr.Select] expression.
   */
  name: string;
}

/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
  /**
   * Required. The target of the selection expression.
   *
   * For example, in the select expression `request.auth`, the `request`
   * portion of the expression is the `operand`.
   */
  operand: Expr | undefined;
  /**
   * Required. The name of the field to select.
   *
   * For example, in the select expression `request.auth`, the `auth` portion
   * of the expression would be the `field`.
   */
  field: string;
  /**
   * Whether the select is to be interpreted as a field presence test.
   *
   * This results from the macro `has(request.auth)`.
   */
  testOnly: boolean;
}

/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
  /**
   * The target of an method call-style expression. For example, `x` in
   * `x.f()`.
   */
  target: Expr | undefined;
  /** Required. The name of the function or method being called. */
  function: string;
  /** The arguments. */
  args: Expr[];
}

/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
  /** The elements part of the list. */
  elements: Expr[];
  /**
   * The indices within the elements list which are marked as optional
   * elements.
   *
   * When an optional-typed value is present, the value it contains
   * is included in the list. If the optional-typed value is absent, the list
   * element is omitted from the CreateList result.
   */
  optionalIndices: number[];
}

/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
  /**
   * The type name of the message to be created, empty when creating map
   * literals.
   */
  messageName: string;
  /** The entries in the creation expression. */
  entries: Expr_CreateStruct_Entry[];
}

/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id: number;
  /** The field key for a message creator statement. */
  fieldKey: string | undefined;
  /** The key expression for a map creation statement. */
  mapKey: Expr | undefined;
  /**
   * Required. The value assigned to the key.
   *
   * If the optional_entry field is true, the expression must resolve to an
   * optional-typed value. If the optional value is present, the key will be
   * set; however, if the optional value is absent, the key will be unset.
   */
  value: Expr | undefined;
  /** Whether the key-value pair is optional. */
  optionalEntry: boolean;
}

/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 *
 * Comprehensions for the standard environment macros evaluation can be best
 * visualized as the following pseudocode:
 *
 * ```
 * let `accu_var` = `accu_init`
 * for (let `iter_var` in `iter_range`) {
 *   if (!`loop_condition`) {
 *     break
 *   }
 *   `accu_var` = `loop_step`
 * }
 * return `result`
 * ```
 *
 * Comprehensions for the optional V2 macros which support map-to-map
 * translation differ slightly from the standard environment macros in that
 * they expose both the key or index in addition to the value for each list
 * or map entry:
 *
 * ```
 * let `accu_var` = `accu_init`
 * for (let `iter_var`, `iter_var2` in `iter_range`) {
 *   if (!`loop_condition`) {
 *     break
 *   }
 *   `accu_var` = `loop_step`
 * }
 * return `result`
 * ```
 */
export interface Expr_Comprehension {
  /**
   * The name of the first iteration variable.
   * For the single iteration variable macros, when iter_range is a list, this
   * variable is the list element and when the iter_range is a map, this
   * variable is the map key.
   */
  iterVar: string;
  /**
   * The name of the second iteration variable, empty if not set.
   * This field is only set for comprehension v2 macros.
   */
  iterVar2: string;
  /** The range over which the comprehension iterates. */
  iterRange: Expr | undefined;
  /** The name of the variable used for accumulation of the result. */
  accuVar: string;
  /** The initial value of the accumulator. */
  accuInit: Expr | undefined;
  /**
   * An expression which can contain iter_var, iter_var2, and accu_var.
   *
   * Returns false when the result has been computed and may be used as
   * a hint to short-circuit the remainder of the comprehension.
   */
  loopCondition: Expr | undefined;
  /**
   * An expression which can contain iter_var, iter_var2, and accu_var.
   *
   * Computes the next value of accu_var.
   */
  loopStep: Expr | undefined;
  /**
   * An expression which can contain accu_var.
   *
   * Computes the result.
   */
  result: Expr | undefined;
}

/**
 * Represents a primitive literal.
 *
 * Named 'Constant' here for backwards compatibility.
 *
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][cel.expr.Expr] elements which require evaluation and
 * are thus not constant.
 *
 * Examples of constants include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Constant {
  /** null value. */
  nullValue: NullValue | undefined;
  /** boolean value. */
  boolValue: boolean | undefined;
  /** int64 value. */
  int64Value: number | undefined;
  /** uint64 value. */
  uint64Value: number | undefined;
  /** double value. */
  doubleValue: number | undefined;
  /** string value. */
  stringValue: string | undefined;
  /** bytes value. */
  bytesValue: Uint8Array | undefined;
  /**
   * protobuf.Duration value.
   *
   * Deprecated: duration is no longer considered a builtin cel type.
   *
   * @deprecated
   */
  durationValue: Duration | undefined;
  /**
   * protobuf.Timestamp value.
   *
   * Deprecated: timestamp is no longer considered a builtin cel type.
   *
   * @deprecated
   */
  timestampValue: Date | undefined;
}

/** Source information collected at parse time. */
export interface SourceInfo {
  /** The syntax version of the source, e.g. `cel1`. */
  syntaxVersion: string;
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   *
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;
  /**
   * Monotonically increasing list of code point offsets where newlines
   * `\n` appear.
   *
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derived from `id_positions[id] - line_offsets[i]`.
   */
  lineOffsets: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the code point offset
   * within the source.
   */
  positions: { [key: number]: number };
  /**
   * A map from the parse node id where a macro replacement was made to the
   * call `Expr` that resulted in a macro expansion.
   *
   * For example, `has(value.field)` is a function call that is replaced by a
   * `test_only` field selection in the AST. Likewise, the call
   * `list.exists(e, e > 10)` translates to a comprehension expression. The key
   * in the map corresponds to the expression id of the expanded macro, and the
   * value is the call `Expr` that was replaced.
   */
  macroCalls: { [key: number]: Expr };
  /**
   * A list of tags for extensions that were used while parsing or type checking
   * the source expression. For example, optimizations that require special
   * runtime support may be specified.
   *
   * These are used to check feature support between components in separate
   * implementations. This can be used to either skip redundant work or
   * report an error if the extension is unsupported.
   */
  extensions: SourceInfo_Extension[];
}

export interface SourceInfo_PositionsEntry {
  key: number;
  value: number;
}

export interface SourceInfo_MacroCallsEntry {
  key: number;
  value: Expr | undefined;
}

/** An extension that was requested for the source expression. */
export interface SourceInfo_Extension {
  /** Identifier for the extension. Example: constant_folding */
  id: string;
  /**
   * If set, the listed components must understand the extension for the
   * expression to evaluate correctly.
   *
   * This field has set semantics, repeated values should be deduplicated.
   */
  affectedComponents: SourceInfo_Extension_Component[];
  /**
   * Version info. May be skipped if it isn't meaningful for the extension.
   * (for example constant_folding might always be v0.0).
   */
  version: SourceInfo_Extension_Version | undefined;
}

/** CEL component specifier. */
export enum SourceInfo_Extension_Component {
  /** COMPONENT_UNSPECIFIED - Unspecified, default. */
  COMPONENT_UNSPECIFIED = 0,
  /** COMPONENT_PARSER - Parser. Converts a CEL string to an AST. */
  COMPONENT_PARSER = 1,
  /**
   * COMPONENT_TYPE_CHECKER - Type checker. Checks that references in an AST are defined and types
   * agree.
   */
  COMPONENT_TYPE_CHECKER = 2,
  /**
   * COMPONENT_RUNTIME - Runtime. Evaluates a parsed and optionally checked CEL AST against a
   * context.
   */
  COMPONENT_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export function sourceInfo_Extension_ComponentFromJSON(
  object: any
): SourceInfo_Extension_Component {
  switch (object) {
    case 0:
    case "COMPONENT_UNSPECIFIED":
      return SourceInfo_Extension_Component.COMPONENT_UNSPECIFIED;
    case 1:
    case "COMPONENT_PARSER":
      return SourceInfo_Extension_Component.COMPONENT_PARSER;
    case 2:
    case "COMPONENT_TYPE_CHECKER":
      return SourceInfo_Extension_Component.COMPONENT_TYPE_CHECKER;
    case 3:
    case "COMPONENT_RUNTIME":
      return SourceInfo_Extension_Component.COMPONENT_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceInfo_Extension_Component.UNRECOGNIZED;
  }
}

export function sourceInfo_Extension_ComponentToJSON(
  object: SourceInfo_Extension_Component
): string {
  switch (object) {
    case SourceInfo_Extension_Component.COMPONENT_UNSPECIFIED:
      return "COMPONENT_UNSPECIFIED";
    case SourceInfo_Extension_Component.COMPONENT_PARSER:
      return "COMPONENT_PARSER";
    case SourceInfo_Extension_Component.COMPONENT_TYPE_CHECKER:
      return "COMPONENT_TYPE_CHECKER";
    case SourceInfo_Extension_Component.COMPONENT_RUNTIME:
      return "COMPONENT_RUNTIME";
    default:
      return "UNKNOWN";
  }
}

/** Version */
export interface SourceInfo_Extension_Version {
  /**
   * Major version changes indicate different required support level from
   * the required components.
   */
  major: number;
  /**
   * Minor version changes must not change the observed behavior from
   * existing implementations, but may be provided informationally.
   */
  minor: number;
}

const baseParsedExpr: object = {};

export const ParsedExpr = {
  encode(
    message: ParsedExpr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParsedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParsedExpr } as ParsedExpr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParsedExpr {
    const message = { ...baseParsedExpr } as ParsedExpr;
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromJSON(object.expr);
    } else {
      message.expr = undefined;
    }
    if (object.sourceInfo !== undefined && object.sourceInfo !== null) {
      message.sourceInfo = SourceInfo.fromJSON(object.sourceInfo);
    } else {
      message.sourceInfo = undefined;
    }
    return message;
  },

  toJSON(message: ParsedExpr): unknown {
    const obj: any = {};
    message.expr !== undefined &&
      (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    message.sourceInfo !== undefined &&
      (obj.sourceInfo = message.sourceInfo
        ? SourceInfo.toJSON(message.sourceInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ParsedExpr>): ParsedExpr {
    const message = { ...baseParsedExpr } as ParsedExpr;
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromPartial(object.expr);
    } else {
      message.expr = undefined;
    }
    if (object.sourceInfo !== undefined && object.sourceInfo !== null) {
      message.sourceInfo = SourceInfo.fromPartial(object.sourceInfo);
    } else {
      message.sourceInfo = undefined;
    }
    return message;
  },
};

const baseExpr: object = { id: 0 };

export const Expr = {
  encode(message: Expr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(16).int64(message.id);
    }
    if (message.constExpr !== undefined) {
      Constant.encode(message.constExpr, writer.uint32(26).fork()).ldelim();
    }
    if (message.identExpr !== undefined) {
      Expr_Ident.encode(message.identExpr, writer.uint32(34).fork()).ldelim();
    }
    if (message.selectExpr !== undefined) {
      Expr_Select.encode(message.selectExpr, writer.uint32(42).fork()).ldelim();
    }
    if (message.callExpr !== undefined) {
      Expr_Call.encode(message.callExpr, writer.uint32(50).fork()).ldelim();
    }
    if (message.listExpr !== undefined) {
      Expr_CreateList.encode(
        message.listExpr,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.structExpr !== undefined) {
      Expr_CreateStruct.encode(
        message.structExpr,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.comprehensionExpr !== undefined) {
      Expr_Comprehension.encode(
        message.comprehensionExpr,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr } as Expr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.constExpr = Constant.decode(reader, reader.uint32());
          break;
        case 4:
          message.identExpr = Expr_Ident.decode(reader, reader.uint32());
          break;
        case 5:
          message.selectExpr = Expr_Select.decode(reader, reader.uint32());
          break;
        case 6:
          message.callExpr = Expr_Call.decode(reader, reader.uint32());
          break;
        case 7:
          message.listExpr = Expr_CreateList.decode(reader, reader.uint32());
          break;
        case 8:
          message.structExpr = Expr_CreateStruct.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.comprehensionExpr = Expr_Comprehension.decode(
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

  fromJSON(object: any): Expr {
    const message = { ...baseExpr } as Expr;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.constExpr !== undefined && object.constExpr !== null) {
      message.constExpr = Constant.fromJSON(object.constExpr);
    } else {
      message.constExpr = undefined;
    }
    if (object.identExpr !== undefined && object.identExpr !== null) {
      message.identExpr = Expr_Ident.fromJSON(object.identExpr);
    } else {
      message.identExpr = undefined;
    }
    if (object.selectExpr !== undefined && object.selectExpr !== null) {
      message.selectExpr = Expr_Select.fromJSON(object.selectExpr);
    } else {
      message.selectExpr = undefined;
    }
    if (object.callExpr !== undefined && object.callExpr !== null) {
      message.callExpr = Expr_Call.fromJSON(object.callExpr);
    } else {
      message.callExpr = undefined;
    }
    if (object.listExpr !== undefined && object.listExpr !== null) {
      message.listExpr = Expr_CreateList.fromJSON(object.listExpr);
    } else {
      message.listExpr = undefined;
    }
    if (object.structExpr !== undefined && object.structExpr !== null) {
      message.structExpr = Expr_CreateStruct.fromJSON(object.structExpr);
    } else {
      message.structExpr = undefined;
    }
    if (
      object.comprehensionExpr !== undefined &&
      object.comprehensionExpr !== null
    ) {
      message.comprehensionExpr = Expr_Comprehension.fromJSON(
        object.comprehensionExpr
      );
    } else {
      message.comprehensionExpr = undefined;
    }
    return message;
  },

  toJSON(message: Expr): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.constExpr !== undefined &&
      (obj.constExpr = message.constExpr
        ? Constant.toJSON(message.constExpr)
        : undefined);
    message.identExpr !== undefined &&
      (obj.identExpr = message.identExpr
        ? Expr_Ident.toJSON(message.identExpr)
        : undefined);
    message.selectExpr !== undefined &&
      (obj.selectExpr = message.selectExpr
        ? Expr_Select.toJSON(message.selectExpr)
        : undefined);
    message.callExpr !== undefined &&
      (obj.callExpr = message.callExpr
        ? Expr_Call.toJSON(message.callExpr)
        : undefined);
    message.listExpr !== undefined &&
      (obj.listExpr = message.listExpr
        ? Expr_CreateList.toJSON(message.listExpr)
        : undefined);
    message.structExpr !== undefined &&
      (obj.structExpr = message.structExpr
        ? Expr_CreateStruct.toJSON(message.structExpr)
        : undefined);
    message.comprehensionExpr !== undefined &&
      (obj.comprehensionExpr = message.comprehensionExpr
        ? Expr_Comprehension.toJSON(message.comprehensionExpr)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Expr>): Expr {
    const message = { ...baseExpr } as Expr;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.constExpr !== undefined && object.constExpr !== null) {
      message.constExpr = Constant.fromPartial(object.constExpr);
    } else {
      message.constExpr = undefined;
    }
    if (object.identExpr !== undefined && object.identExpr !== null) {
      message.identExpr = Expr_Ident.fromPartial(object.identExpr);
    } else {
      message.identExpr = undefined;
    }
    if (object.selectExpr !== undefined && object.selectExpr !== null) {
      message.selectExpr = Expr_Select.fromPartial(object.selectExpr);
    } else {
      message.selectExpr = undefined;
    }
    if (object.callExpr !== undefined && object.callExpr !== null) {
      message.callExpr = Expr_Call.fromPartial(object.callExpr);
    } else {
      message.callExpr = undefined;
    }
    if (object.listExpr !== undefined && object.listExpr !== null) {
      message.listExpr = Expr_CreateList.fromPartial(object.listExpr);
    } else {
      message.listExpr = undefined;
    }
    if (object.structExpr !== undefined && object.structExpr !== null) {
      message.structExpr = Expr_CreateStruct.fromPartial(object.structExpr);
    } else {
      message.structExpr = undefined;
    }
    if (
      object.comprehensionExpr !== undefined &&
      object.comprehensionExpr !== null
    ) {
      message.comprehensionExpr = Expr_Comprehension.fromPartial(
        object.comprehensionExpr
      );
    } else {
      message.comprehensionExpr = undefined;
    }
    return message;
  },
};

const baseExpr_Ident: object = { name: "" };

export const Expr_Ident = {
  encode(
    message: Expr_Ident,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Ident {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr_Ident } as Expr_Ident;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_Ident {
    const message = { ...baseExpr_Ident } as Expr_Ident;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: Expr_Ident): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<Expr_Ident>): Expr_Ident {
    const message = { ...baseExpr_Ident } as Expr_Ident;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseExpr_Select: object = { field: "", testOnly: false };

export const Expr_Select = {
  encode(
    message: Expr_Select,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operand !== undefined) {
      Expr.encode(message.operand, writer.uint32(10).fork()).ldelim();
    }
    if (message.field !== "") {
      writer.uint32(18).string(message.field);
    }
    if (message.testOnly === true) {
      writer.uint32(24).bool(message.testOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Select {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr_Select } as Expr_Select;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operand = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.field = reader.string();
          break;
        case 3:
          message.testOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_Select {
    const message = { ...baseExpr_Select } as Expr_Select;
    if (object.operand !== undefined && object.operand !== null) {
      message.operand = Expr.fromJSON(object.operand);
    } else {
      message.operand = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.testOnly !== undefined && object.testOnly !== null) {
      message.testOnly = Boolean(object.testOnly);
    } else {
      message.testOnly = false;
    }
    return message;
  },

  toJSON(message: Expr_Select): unknown {
    const obj: any = {};
    message.operand !== undefined &&
      (obj.operand = message.operand
        ? Expr.toJSON(message.operand)
        : undefined);
    message.field !== undefined && (obj.field = message.field);
    message.testOnly !== undefined && (obj.testOnly = message.testOnly);
    return obj;
  },

  fromPartial(object: DeepPartial<Expr_Select>): Expr_Select {
    const message = { ...baseExpr_Select } as Expr_Select;
    if (object.operand !== undefined && object.operand !== null) {
      message.operand = Expr.fromPartial(object.operand);
    } else {
      message.operand = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.testOnly !== undefined && object.testOnly !== null) {
      message.testOnly = object.testOnly;
    } else {
      message.testOnly = false;
    }
    return message;
  },
};

const baseExpr_Call: object = { function: "" };

export const Expr_Call = {
  encode(
    message: Expr_Call,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.target !== undefined) {
      Expr.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.args) {
      Expr.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Call {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr_Call } as Expr_Call;
    message.args = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.function = reader.string();
          break;
        case 3:
          message.args.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_Call {
    const message = { ...baseExpr_Call } as Expr_Call;
    message.args = [];
    if (object.target !== undefined && object.target !== null) {
      message.target = Expr.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    if (object.args !== undefined && object.args !== null) {
      for (const e of object.args) {
        message.args.push(Expr.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Expr_Call): unknown {
    const obj: any = {};
    message.target !== undefined &&
      (obj.target = message.target ? Expr.toJSON(message.target) : undefined);
    message.function !== undefined && (obj.function = message.function);
    if (message.args) {
      obj.args = message.args.map((e) => (e ? Expr.toJSON(e) : undefined));
    } else {
      obj.args = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Expr_Call>): Expr_Call {
    const message = { ...baseExpr_Call } as Expr_Call;
    message.args = [];
    if (object.target !== undefined && object.target !== null) {
      message.target = Expr.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    if (object.args !== undefined && object.args !== null) {
      for (const e of object.args) {
        message.args.push(Expr.fromPartial(e));
      }
    }
    return message;
  },
};

const baseExpr_CreateList: object = { optionalIndices: 0 };

export const Expr_CreateList = {
  encode(
    message: Expr_CreateList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.elements) {
      Expr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.optionalIndices) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr_CreateList } as Expr_CreateList;
    message.elements = [];
    message.optionalIndices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elements.push(Expr.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.optionalIndices.push(reader.int32());
            }
          } else {
            message.optionalIndices.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_CreateList {
    const message = { ...baseExpr_CreateList } as Expr_CreateList;
    message.elements = [];
    message.optionalIndices = [];
    if (object.elements !== undefined && object.elements !== null) {
      for (const e of object.elements) {
        message.elements.push(Expr.fromJSON(e));
      }
    }
    if (
      object.optionalIndices !== undefined &&
      object.optionalIndices !== null
    ) {
      for (const e of object.optionalIndices) {
        message.optionalIndices.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: Expr_CreateList): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map((e) =>
        e ? Expr.toJSON(e) : undefined
      );
    } else {
      obj.elements = [];
    }
    if (message.optionalIndices) {
      obj.optionalIndices = message.optionalIndices.map((e) => e);
    } else {
      obj.optionalIndices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Expr_CreateList>): Expr_CreateList {
    const message = { ...baseExpr_CreateList } as Expr_CreateList;
    message.elements = [];
    message.optionalIndices = [];
    if (object.elements !== undefined && object.elements !== null) {
      for (const e of object.elements) {
        message.elements.push(Expr.fromPartial(e));
      }
    }
    if (
      object.optionalIndices !== undefined &&
      object.optionalIndices !== null
    ) {
      for (const e of object.optionalIndices) {
        message.optionalIndices.push(e);
      }
    }
    return message;
  },
};

const baseExpr_CreateStruct: object = { messageName: "" };

export const Expr_CreateStruct = {
  encode(
    message: Expr_CreateStruct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    for (const v of message.entries) {
      Expr_CreateStruct_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr_CreateStruct } as Expr_CreateStruct;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.entries.push(
            Expr_CreateStruct_Entry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_CreateStruct {
    const message = { ...baseExpr_CreateStruct } as Expr_CreateStruct;
    message.entries = [];
    if (object.messageName !== undefined && object.messageName !== null) {
      message.messageName = String(object.messageName);
    } else {
      message.messageName = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(Expr_CreateStruct_Entry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Expr_CreateStruct): unknown {
    const obj: any = {};
    message.messageName !== undefined &&
      (obj.messageName = message.messageName);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Expr_CreateStruct_Entry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Expr_CreateStruct>): Expr_CreateStruct {
    const message = { ...baseExpr_CreateStruct } as Expr_CreateStruct;
    message.entries = [];
    if (object.messageName !== undefined && object.messageName !== null) {
      message.messageName = object.messageName;
    } else {
      message.messageName = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(Expr_CreateStruct_Entry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseExpr_CreateStruct_Entry: object = { id: 0, optionalEntry: false };

export const Expr_CreateStruct_Entry = {
  encode(
    message: Expr_CreateStruct_Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.fieldKey !== undefined) {
      writer.uint32(18).string(message.fieldKey);
    }
    if (message.mapKey !== undefined) {
      Expr.encode(message.mapKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    if (message.optionalEntry === true) {
      writer.uint32(40).bool(message.optionalEntry);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Expr_CreateStruct_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExpr_CreateStruct_Entry,
    } as Expr_CreateStruct_Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.fieldKey = reader.string();
          break;
        case 3:
          message.mapKey = Expr.decode(reader, reader.uint32());
          break;
        case 4:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        case 5:
          message.optionalEntry = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_CreateStruct_Entry {
    const message = {
      ...baseExpr_CreateStruct_Entry,
    } as Expr_CreateStruct_Entry;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.fieldKey !== undefined && object.fieldKey !== null) {
      message.fieldKey = String(object.fieldKey);
    } else {
      message.fieldKey = undefined;
    }
    if (object.mapKey !== undefined && object.mapKey !== null) {
      message.mapKey = Expr.fromJSON(object.mapKey);
    } else {
      message.mapKey = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    if (object.optionalEntry !== undefined && object.optionalEntry !== null) {
      message.optionalEntry = Boolean(object.optionalEntry);
    } else {
      message.optionalEntry = false;
    }
    return message;
  },

  toJSON(message: Expr_CreateStruct_Entry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.fieldKey !== undefined && (obj.fieldKey = message.fieldKey);
    message.mapKey !== undefined &&
      (obj.mapKey = message.mapKey ? Expr.toJSON(message.mapKey) : undefined);
    message.value !== undefined &&
      (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    message.optionalEntry !== undefined &&
      (obj.optionalEntry = message.optionalEntry);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Expr_CreateStruct_Entry>
  ): Expr_CreateStruct_Entry {
    const message = {
      ...baseExpr_CreateStruct_Entry,
    } as Expr_CreateStruct_Entry;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.fieldKey !== undefined && object.fieldKey !== null) {
      message.fieldKey = object.fieldKey;
    } else {
      message.fieldKey = undefined;
    }
    if (object.mapKey !== undefined && object.mapKey !== null) {
      message.mapKey = Expr.fromPartial(object.mapKey);
    } else {
      message.mapKey = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    if (object.optionalEntry !== undefined && object.optionalEntry !== null) {
      message.optionalEntry = object.optionalEntry;
    } else {
      message.optionalEntry = false;
    }
    return message;
  },
};

const baseExpr_Comprehension: object = {
  iterVar: "",
  iterVar2: "",
  accuVar: "",
};

export const Expr_Comprehension = {
  encode(
    message: Expr_Comprehension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iterVar !== "") {
      writer.uint32(10).string(message.iterVar);
    }
    if (message.iterVar2 !== "") {
      writer.uint32(66).string(message.iterVar2);
    }
    if (message.iterRange !== undefined) {
      Expr.encode(message.iterRange, writer.uint32(18).fork()).ldelim();
    }
    if (message.accuVar !== "") {
      writer.uint32(26).string(message.accuVar);
    }
    if (message.accuInit !== undefined) {
      Expr.encode(message.accuInit, writer.uint32(34).fork()).ldelim();
    }
    if (message.loopCondition !== undefined) {
      Expr.encode(message.loopCondition, writer.uint32(42).fork()).ldelim();
    }
    if (message.loopStep !== undefined) {
      Expr.encode(message.loopStep, writer.uint32(50).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Expr.encode(message.result, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Comprehension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpr_Comprehension } as Expr_Comprehension;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iterVar = reader.string();
          break;
        case 8:
          message.iterVar2 = reader.string();
          break;
        case 2:
          message.iterRange = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.accuVar = reader.string();
          break;
        case 4:
          message.accuInit = Expr.decode(reader, reader.uint32());
          break;
        case 5:
          message.loopCondition = Expr.decode(reader, reader.uint32());
          break;
        case 6:
          message.loopStep = Expr.decode(reader, reader.uint32());
          break;
        case 7:
          message.result = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expr_Comprehension {
    const message = { ...baseExpr_Comprehension } as Expr_Comprehension;
    if (object.iterVar !== undefined && object.iterVar !== null) {
      message.iterVar = String(object.iterVar);
    } else {
      message.iterVar = "";
    }
    if (object.iterVar2 !== undefined && object.iterVar2 !== null) {
      message.iterVar2 = String(object.iterVar2);
    } else {
      message.iterVar2 = "";
    }
    if (object.iterRange !== undefined && object.iterRange !== null) {
      message.iterRange = Expr.fromJSON(object.iterRange);
    } else {
      message.iterRange = undefined;
    }
    if (object.accuVar !== undefined && object.accuVar !== null) {
      message.accuVar = String(object.accuVar);
    } else {
      message.accuVar = "";
    }
    if (object.accuInit !== undefined && object.accuInit !== null) {
      message.accuInit = Expr.fromJSON(object.accuInit);
    } else {
      message.accuInit = undefined;
    }
    if (object.loopCondition !== undefined && object.loopCondition !== null) {
      message.loopCondition = Expr.fromJSON(object.loopCondition);
    } else {
      message.loopCondition = undefined;
    }
    if (object.loopStep !== undefined && object.loopStep !== null) {
      message.loopStep = Expr.fromJSON(object.loopStep);
    } else {
      message.loopStep = undefined;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Expr.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },

  toJSON(message: Expr_Comprehension): unknown {
    const obj: any = {};
    message.iterVar !== undefined && (obj.iterVar = message.iterVar);
    message.iterVar2 !== undefined && (obj.iterVar2 = message.iterVar2);
    message.iterRange !== undefined &&
      (obj.iterRange = message.iterRange
        ? Expr.toJSON(message.iterRange)
        : undefined);
    message.accuVar !== undefined && (obj.accuVar = message.accuVar);
    message.accuInit !== undefined &&
      (obj.accuInit = message.accuInit
        ? Expr.toJSON(message.accuInit)
        : undefined);
    message.loopCondition !== undefined &&
      (obj.loopCondition = message.loopCondition
        ? Expr.toJSON(message.loopCondition)
        : undefined);
    message.loopStep !== undefined &&
      (obj.loopStep = message.loopStep
        ? Expr.toJSON(message.loopStep)
        : undefined);
    message.result !== undefined &&
      (obj.result = message.result ? Expr.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Expr_Comprehension>): Expr_Comprehension {
    const message = { ...baseExpr_Comprehension } as Expr_Comprehension;
    if (object.iterVar !== undefined && object.iterVar !== null) {
      message.iterVar = object.iterVar;
    } else {
      message.iterVar = "";
    }
    if (object.iterVar2 !== undefined && object.iterVar2 !== null) {
      message.iterVar2 = object.iterVar2;
    } else {
      message.iterVar2 = "";
    }
    if (object.iterRange !== undefined && object.iterRange !== null) {
      message.iterRange = Expr.fromPartial(object.iterRange);
    } else {
      message.iterRange = undefined;
    }
    if (object.accuVar !== undefined && object.accuVar !== null) {
      message.accuVar = object.accuVar;
    } else {
      message.accuVar = "";
    }
    if (object.accuInit !== undefined && object.accuInit !== null) {
      message.accuInit = Expr.fromPartial(object.accuInit);
    } else {
      message.accuInit = undefined;
    }
    if (object.loopCondition !== undefined && object.loopCondition !== null) {
      message.loopCondition = Expr.fromPartial(object.loopCondition);
    } else {
      message.loopCondition = undefined;
    }
    if (object.loopStep !== undefined && object.loopStep !== null) {
      message.loopStep = Expr.fromPartial(object.loopStep);
    } else {
      message.loopStep = undefined;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Expr.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
};

const baseConstant: object = {};

export const Constant = {
  encode(
    message: Constant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.durationValue !== undefined) {
      Duration.encode(message.durationValue, writer.uint32(66).fork()).ldelim();
    }
    if (message.timestampValue !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestampValue),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Constant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConstant } as Constant;
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
        case 8:
          message.durationValue = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.timestampValue = fromTimestamp(
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

  fromJSON(object: any): Constant {
    const message = { ...baseConstant } as Constant;
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
    if (object.durationValue !== undefined && object.durationValue !== null) {
      message.durationValue = Duration.fromJSON(object.durationValue);
    } else {
      message.durationValue = undefined;
    }
    if (object.timestampValue !== undefined && object.timestampValue !== null) {
      message.timestampValue = fromJsonTimestamp(object.timestampValue);
    } else {
      message.timestampValue = undefined;
    }
    return message;
  },

  toJSON(message: Constant): unknown {
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
    message.durationValue !== undefined &&
      (obj.durationValue = message.durationValue
        ? Duration.toJSON(message.durationValue)
        : undefined);
    message.timestampValue !== undefined &&
      (obj.timestampValue = message.timestampValue.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Constant>): Constant {
    const message = { ...baseConstant } as Constant;
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
    if (object.durationValue !== undefined && object.durationValue !== null) {
      message.durationValue = Duration.fromPartial(object.durationValue);
    } else {
      message.durationValue = undefined;
    }
    if (object.timestampValue !== undefined && object.timestampValue !== null) {
      message.timestampValue = object.timestampValue;
    } else {
      message.timestampValue = undefined;
    }
    return message;
  },
};

const baseSourceInfo: object = {
  syntaxVersion: "",
  location: "",
  lineOffsets: 0,
};

export const SourceInfo = {
  encode(
    message: SourceInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syntaxVersion !== "") {
      writer.uint32(10).string(message.syntaxVersion);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    writer.uint32(26).fork();
    for (const v of message.lineOffsets) {
      writer.int32(v);
    }
    writer.ldelim();
    Object.entries(message.positions).forEach(([key, value]) => {
      SourceInfo_PositionsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.macroCalls).forEach(([key, value]) => {
      SourceInfo_MacroCallsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.extensions) {
      SourceInfo_Extension.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSourceInfo } as SourceInfo;
    message.lineOffsets = [];
    message.positions = {};
    message.macroCalls = {};
    message.extensions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syntaxVersion = reader.string();
          break;
        case 2:
          message.location = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }
          } else {
            message.lineOffsets.push(reader.int32());
          }
          break;
        case 4:
          const entry4 = SourceInfo_PositionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.positions[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = SourceInfo_MacroCallsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.macroCalls[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.extensions.push(
            SourceInfo_Extension.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceInfo {
    const message = { ...baseSourceInfo } as SourceInfo;
    message.lineOffsets = [];
    message.positions = {};
    message.macroCalls = {};
    message.extensions = [];
    if (object.syntaxVersion !== undefined && object.syntaxVersion !== null) {
      message.syntaxVersion = String(object.syntaxVersion);
    } else {
      message.syntaxVersion = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.lineOffsets !== undefined && object.lineOffsets !== null) {
      for (const e of object.lineOffsets) {
        message.lineOffsets.push(Number(e));
      }
    }
    if (object.positions !== undefined && object.positions !== null) {
      Object.entries(object.positions).forEach(([key, value]) => {
        message.positions[Number(key)] = Number(value);
      });
    }
    if (object.macroCalls !== undefined && object.macroCalls !== null) {
      Object.entries(object.macroCalls).forEach(([key, value]) => {
        message.macroCalls[Number(key)] = Expr.fromJSON(value);
      });
    }
    if (object.extensions !== undefined && object.extensions !== null) {
      for (const e of object.extensions) {
        message.extensions.push(SourceInfo_Extension.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    message.syntaxVersion !== undefined &&
      (obj.syntaxVersion = message.syntaxVersion);
    message.location !== undefined && (obj.location = message.location);
    if (message.lineOffsets) {
      obj.lineOffsets = message.lineOffsets.map((e) => e);
    } else {
      obj.lineOffsets = [];
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = v;
      });
    }
    obj.macroCalls = {};
    if (message.macroCalls) {
      Object.entries(message.macroCalls).forEach(([k, v]) => {
        obj.macroCalls[k] = Expr.toJSON(v);
      });
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) =>
        e ? SourceInfo_Extension.toJSON(e) : undefined
      );
    } else {
      obj.extensions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = { ...baseSourceInfo } as SourceInfo;
    message.lineOffsets = [];
    message.positions = {};
    message.macroCalls = {};
    message.extensions = [];
    if (object.syntaxVersion !== undefined && object.syntaxVersion !== null) {
      message.syntaxVersion = object.syntaxVersion;
    } else {
      message.syntaxVersion = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.lineOffsets !== undefined && object.lineOffsets !== null) {
      for (const e of object.lineOffsets) {
        message.lineOffsets.push(e);
      }
    }
    if (object.positions !== undefined && object.positions !== null) {
      Object.entries(object.positions).forEach(([key, value]) => {
        if (value !== undefined) {
          message.positions[Number(key)] = Number(value);
        }
      });
    }
    if (object.macroCalls !== undefined && object.macroCalls !== null) {
      Object.entries(object.macroCalls).forEach(([key, value]) => {
        if (value !== undefined) {
          message.macroCalls[Number(key)] = Expr.fromPartial(value);
        }
      });
    }
    if (object.extensions !== undefined && object.extensions !== null) {
      for (const e of object.extensions) {
        message.extensions.push(SourceInfo_Extension.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSourceInfo_PositionsEntry: object = { key: 0, value: 0 };

export const SourceInfo_PositionsEntry = {
  encode(
    message: SourceInfo_PositionsEntry,
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
  ): SourceInfo_PositionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSourceInfo_PositionsEntry,
    } as SourceInfo_PositionsEntry;
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

  fromJSON(object: any): SourceInfo_PositionsEntry {
    const message = {
      ...baseSourceInfo_PositionsEntry,
    } as SourceInfo_PositionsEntry;
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

  toJSON(message: SourceInfo_PositionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SourceInfo_PositionsEntry>
  ): SourceInfo_PositionsEntry {
    const message = {
      ...baseSourceInfo_PositionsEntry,
    } as SourceInfo_PositionsEntry;
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

const baseSourceInfo_MacroCallsEntry: object = { key: 0 };

export const SourceInfo_MacroCallsEntry = {
  encode(
    message: SourceInfo_MacroCallsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceInfo_MacroCallsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSourceInfo_MacroCallsEntry,
    } as SourceInfo_MacroCallsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceInfo_MacroCallsEntry {
    const message = {
      ...baseSourceInfo_MacroCallsEntry,
    } as SourceInfo_MacroCallsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: SourceInfo_MacroCallsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SourceInfo_MacroCallsEntry>
  ): SourceInfo_MacroCallsEntry {
    const message = {
      ...baseSourceInfo_MacroCallsEntry,
    } as SourceInfo_MacroCallsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseSourceInfo_Extension: object = { id: "", affectedComponents: 0 };

export const SourceInfo_Extension = {
  encode(
    message: SourceInfo_Extension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.affectedComponents) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.version !== undefined) {
      SourceInfo_Extension_Version.encode(
        message.version,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceInfo_Extension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSourceInfo_Extension } as SourceInfo_Extension;
    message.affectedComponents = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affectedComponents.push(reader.int32() as any);
            }
          } else {
            message.affectedComponents.push(reader.int32() as any);
          }
          break;
        case 3:
          message.version = SourceInfo_Extension_Version.decode(
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

  fromJSON(object: any): SourceInfo_Extension {
    const message = { ...baseSourceInfo_Extension } as SourceInfo_Extension;
    message.affectedComponents = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.affectedComponents !== undefined &&
      object.affectedComponents !== null
    ) {
      for (const e of object.affectedComponents) {
        message.affectedComponents.push(
          sourceInfo_Extension_ComponentFromJSON(e)
        );
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = SourceInfo_Extension_Version.fromJSON(object.version);
    } else {
      message.version = undefined;
    }
    return message;
  },

  toJSON(message: SourceInfo_Extension): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.affectedComponents) {
      obj.affectedComponents = message.affectedComponents.map((e) =>
        sourceInfo_Extension_ComponentToJSON(e)
      );
    } else {
      obj.affectedComponents = [];
    }
    message.version !== undefined &&
      (obj.version = message.version
        ? SourceInfo_Extension_Version.toJSON(message.version)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceInfo_Extension>): SourceInfo_Extension {
    const message = { ...baseSourceInfo_Extension } as SourceInfo_Extension;
    message.affectedComponents = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.affectedComponents !== undefined &&
      object.affectedComponents !== null
    ) {
      for (const e of object.affectedComponents) {
        message.affectedComponents.push(e);
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = SourceInfo_Extension_Version.fromPartial(
        object.version
      );
    } else {
      message.version = undefined;
    }
    return message;
  },
};

const baseSourceInfo_Extension_Version: object = { major: 0, minor: 0 };

export const SourceInfo_Extension_Version = {
  encode(
    message: SourceInfo_Extension_Version,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.major !== 0) {
      writer.uint32(8).int64(message.major);
    }
    if (message.minor !== 0) {
      writer.uint32(16).int64(message.minor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceInfo_Extension_Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSourceInfo_Extension_Version,
    } as SourceInfo_Extension_Version;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.major = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.minor = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceInfo_Extension_Version {
    const message = {
      ...baseSourceInfo_Extension_Version,
    } as SourceInfo_Extension_Version;
    if (object.major !== undefined && object.major !== null) {
      message.major = Number(object.major);
    } else {
      message.major = 0;
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = Number(object.minor);
    } else {
      message.minor = 0;
    }
    return message;
  },

  toJSON(message: SourceInfo_Extension_Version): unknown {
    const obj: any = {};
    message.major !== undefined && (obj.major = message.major);
    message.minor !== undefined && (obj.minor = message.minor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SourceInfo_Extension_Version>
  ): SourceInfo_Extension_Version {
    const message = {
      ...baseSourceInfo_Extension_Version,
    } as SourceInfo_Extension_Version;
    if (object.major !== undefined && object.major !== null) {
      message.major = object.major;
    } else {
      message.major = 0;
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = object.minor;
    } else {
      message.minor = 0;
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
