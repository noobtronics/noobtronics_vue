#!/bin/bash

export AWS_ACCESS_KEY_ID="AKIARZMBMCPO6N72BDQH"
export AWS_SECRET_ACCESS_KEY="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"
export AWS_BUCKET_NAME="noobtronics.in"
export AWS_CLOUDFRONT="E3RVBB3U43B8W8"

# Load nvm (node version manager), install node (version in .nvmrc), and npm install packages
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm install if not already.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy
