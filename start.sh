#!/bin/sh

echo "{\"NODE\": \"$NODE_NAME\", \"POD\": \"$POD_NAME\"}" > /mainpage/build/k8s_data.json
serve -s /mainpage/build