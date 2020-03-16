grpc_tools_node_protoc \
  -I=src/nodejs/servers/teleop/ rostopic.cmd_vel.proto   \
  --js_out=import_style=commonjs,binary:src/nodejs/servers/teleop/stubs \
  --grpc_out=src/nodejs/servers/teleop/stubs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`  \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/nodejs/servers/teleop/stubs

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=src/nodejs/servers/teleop/stubs \
  -I=src/nodejs/servers/teleop/ rostopic.cmd_vel.proto   