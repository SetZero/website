#!/bin/sh

echo "[\"$NODE_NAME\", \"$POD_NAME\"]" > /mainpage/build/k8s_data.json
serve -s /mainpage/build