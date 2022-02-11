#!/bin/bash

yarn run build

rsync -av --exclude-from=.deployignore  ./ ubuntu@13.127.48.125:/var/www/chaincode/

ssh ubuntu@13.127.48.125 << EOF
  # Enter Project Directory
  cd /var/www/chaincode/

  # Restart pm2
  pm2 restart 0
EOF
