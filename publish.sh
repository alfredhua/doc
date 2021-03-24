#!/bin/bash

npm run build

rm -rf dist

mkdir -pv dist/product

cp -rf build dist/product
cp -rf img dist/product
cp -rf zh-cn dist/product
cp -rf en-us dist/product
cp index.html dist/


tar -cf dist.tar dist
echo '压缩文件'

scp dist.tar root@39.98.143.124:/root
echo '发布文件'

ssh root@39.98.143.124 'rm -rf dist/'

echo '删除远程部署目录'

ssh root@39.98.143.124 'tar -xvf dist.tar'

echo '发布完成'

rm -rf dist*