#! /bin/bash
mongod --fork --logpath ./mongod.log --dbpath=data --bind_ip 127.0.0.1 
tail -f ./mongod.log
