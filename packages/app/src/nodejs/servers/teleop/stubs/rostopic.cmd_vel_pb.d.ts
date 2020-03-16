// package: rostopic
// file: rostopic.cmd_vel.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Twist extends jspb.Message { 

    hasLinear(): boolean;
    clearLinear(): void;
    getLinear(): Twist.Vector3 | undefined;
    setLinear(value?: Twist.Vector3): void;


    hasAngular(): boolean;
    clearAngular(): void;
    getAngular(): Twist.Vector3 | undefined;
    setAngular(value?: Twist.Vector3): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Twist.AsObject;
    static toObject(includeInstance: boolean, msg: Twist): Twist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Twist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Twist;
    static deserializeBinaryFromReader(message: Twist, reader: jspb.BinaryReader): Twist;
}

export namespace Twist {
    export type AsObject = {
        linear?: Twist.Vector3.AsObject,
        angular?: Twist.Vector3.AsObject,
    }


    export class Vector3 extends jspb.Message { 
        getX(): number;
        setX(value: number): void;

        getY(): number;
        setY(value: number): void;

        getZ(): number;
        setZ(value: number): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Vector3.AsObject;
        static toObject(includeInstance: boolean, msg: Vector3): Vector3.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Vector3, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Vector3;
        static deserializeBinaryFromReader(message: Vector3, reader: jspb.BinaryReader): Vector3;
    }

    export namespace Vector3 {
        export type AsObject = {
            x: number,
            y: number,
            z: number,
        }
    }

}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
