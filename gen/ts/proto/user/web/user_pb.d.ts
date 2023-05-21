import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getUserName(): string;
  setUserName(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): User;

  getPhoneCode(): string;
  setPhoneCode(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getRole(): string;
  setRole(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    userName: string,
    email: string,
    phoneNumber: string,
    phoneCode: string,
    password: string,
    role: string,
  }
}

export class CreateUserReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserReq): CreateUserReq.AsObject;
  static serializeBinaryToWriter(message: CreateUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserReq;
  static deserializeBinaryFromReader(message: CreateUserReq, reader: jspb.BinaryReader): CreateUserReq;
}

export namespace CreateUserReq {
  export type AsObject = {
  }
}

export class CreateUserRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRes): CreateUserRes.AsObject;
  static serializeBinaryToWriter(message: CreateUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRes;
  static deserializeBinaryFromReader(message: CreateUserRes, reader: jspb.BinaryReader): CreateUserRes;
}

export namespace CreateUserRes {
  export type AsObject = {
  }
}

