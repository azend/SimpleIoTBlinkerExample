#!/bin/bash
 
 sudo apt-get update
 
 sudo apt-get -y install unzip build-essential
 
 echo '------------------------'
 echo 'Installing Node + NPM'
 echo '------------------------'
 wget http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
 tar -xvvzf node-v0.12.0.tar.gz
 cd node-v0.12.0/
 ./configure
 make
 sudo make install
 
 cd ../

echo '------------------------'
echo 'Installing app'
echo '------------------------'
wget https://github.com/azend/SimpleIoTBlinkerExample/archive/master.zip
unzip master.zip
cd SimpleIoTBlinkerExample-master/
npm install

echo '------------------------'
echo 'Running app'
echo '------------------------'
node index.js


