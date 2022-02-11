#!/bin/bash

yarn run build

rsync -av --exclude-from=.deployignore  ./ ubuntu@13.127.48.125:/var/www/chaincode/
