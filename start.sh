#!/bin/sh

yarn --cwd /mainpage run build
serve -s /mainpage/build