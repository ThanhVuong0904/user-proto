GO_GEN="./gen/go/$PROTO_NAME/"
TS_GEN="./gen/ts/"

protoc --go_out ${GO_GEN} --go_opt=paths=import --go-grpc_out ${GO_GEN} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN} \
	--grpc-web_out=import_style=typescript,mode=grpcweb:${TS_GEN} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/user/**/*.proto
