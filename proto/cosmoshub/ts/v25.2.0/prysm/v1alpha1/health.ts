/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Empty } from "../../google/protobuf/empty";

export const protobufPackage = "ethereum.eth.v1alpha1";

export interface LogsResponse {
  logs: string[];
}

const baseLogsResponse: object = { logs: "" };

export const LogsResponse = {
  encode(
    message: LogsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogsResponse } as LogsResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogsResponse {
    const message = { ...baseLogsResponse } as LogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: LogsResponse): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => e);
    } else {
      obj.logs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LogsResponse>): LogsResponse {
    const message = { ...baseLogsResponse } as LogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(e);
      }
    }
    return message;
  },
};

/**
 * Health service API
 *
 * The health service is able to return important metadata about a beacon node
 * such being able to stream logs via gRPC.
 */
export interface Health {
  StreamBeaconLogs(request: Empty): Observable<LogsResponse>;
}

export class HealthClientImpl implements Health {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  StreamBeaconLogs(request: Empty): Promise<LogsResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(
      "ethereum.eth.v1alpha1.Health",
      "StreamBeaconLogs",
      data
    );
    return promise.then((data) => LogsResponse.decode(new _m0.Reader(data)));
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
