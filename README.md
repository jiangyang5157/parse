# SSH
chmod 400 ~/Documents/tencent/tencent_cloud_keypair
ssh -i ~/Documents/tencent/tencent_cloud_keypair <user_name>@<IP_address>

# parse
Server and dashboard demo

# apt (Ubuntu)
apt -v

# Yum (CentOS)
yum --version

# Ruby
https://www.ruby-lang.org/en/documentation/installation/
CentOS:
yum install ruby

# Don't run this as root!
https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-centos-quickstart

# brew
https://docs.brew.sh/Homebrew-on-Linux

sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
echo 'export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"' >>~/.bash_profile
echo 'export PATH="/home/linuxbrew/.linuxbrew/sbin:$PATH"' >> ~/.bash_profile
echo 'export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"' >>~/.bash_profile
echo 'export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"' >>~/.bash_profile
source ~/.bash_profile
echo $PATH
brew -v

# python
brew install python

# node
sudo apt install nodejs

# npm
sudo apt install npm

# https://www.terlici.com/2015/06/20/running-node-forever.html
sudo npm install pm2 -g
pm2 list
pm2 start app.js
pm2 stop app.js
pm2 reload app.js
pm2 delete app.js
pm2 startup systemd

# mongodb 
https://docs.mongodb.com/manual/installation/

Ubuntu:
sudo apt update
sudo apt install -y mongodb

mongo --version

sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
mongod --dbpath /data/db

mongod

mongodump -h <hostName> --port <portNumber>
mongorestore -h <hostname><:port> -d <dbName> <path>

# kill process
sudo ps ax | grep mongod
kill -9 <pid>

sudo lsof -iTCP -sTCP:LISTEN -n -P
sudo kill -9 <pid>

# parse
https://docs.parseplatform.org/parse-server/guide/
https://github.com/parse-community/parse-dashboard

sudo npm install -g parse-server mongodb-runner
sudo npm install -g parse-dashboard

git clone https://github.com/jiangyang5157/parse.git

npm install
npm start

# test
pm2 start mongod
pm2 start server
pm2 start dashboard

## local example
curl -X POST -H "X-Parse-Application-Id: myAppId" -H "Content-Type: application/json" -d '{"serverUrl":"http://localhost:1337","databaseUri":"mongodb://localhost:27017/dev"}' http://localhost:1337/parse/classes/MyClass

curl -H "X-Parse-Application-Id: myAppId" http://localhost:1337/parse/classes/MyClass

## remote example
curl -X POST -H "X-Parse-Application-Id: myAppId" -H "Content-Type: application/json" -d '{"name":"Yang","action":"test remote parse server"}' http://xxx.xxx.xxx.xxx:1337/parse/classes/MyClass

curl -H "X-Parse-Application-Id: myAppId" http://xxx.xxx.xxx.xxx:1337/parse/classes/MyClass

# SSL
cert: https://letsencrypt.org/getting-started/
https: https://blog.csdn.net/upshi/article/details/78447320

cert eg:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/mrjiangyang.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/mrjiangyang.com/privkey.pem
   Your cert will expire on 2019-08-25. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
