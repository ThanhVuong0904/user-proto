/**
 * @fileoverview gRPC-Web generated client stub for user.web
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: proto/user/web/user.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_user_web_user_pb from '../../../proto/user/web/user_pb';


export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateUser = new grpcWeb.MethodDescriptor(
    '/user.web.UserService/CreateUser',
    grpcWeb.MethodType.UNARY,
    proto_user_web_user_pb.CreateUserReq,
    proto_user_web_user_pb.CreateUserRes,
    (request: proto_user_web_user_pb.CreateUserReq) => {
      return request.serializeBinary();
    },
    proto_user_web_user_pb.CreateUserRes.deserializeBinary
  );

  createUser(
    request: proto_user_web_user_pb.CreateUserReq,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_web_user_pb.CreateUserRes>;

  createUser(
    request: proto_user_web_user_pb.CreateUserReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_web_user_pb.CreateUserRes) => void): grpcWeb.ClientReadableStream<proto_user_web_user_pb.CreateUserRes>;

  createUser(
    request: proto_user_web_user_pb.CreateUserReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_web_user_pb.CreateUserRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.web.UserService/CreateUser',
        request,
        metadata || {},
        this.methodDescriptorCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.web.UserService/CreateUser',
    request,
    metadata || {},
    this.methodDescriptorCreateUser);
  }

}

