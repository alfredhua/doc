## 运行容器

docker run -itd --privileged=true --name  hadoop03  --net net --ip  172.18.0.3 guozhenhua/centos:1.1

docker run -itd --privileged=true --name  hadoop04  --net net --ip  172.18.0.4 guozhenhua/centos:1.1

docker run -itd --privileged=true --name  hadoop05  --net net --ip  172.18.0.5 guozhenhua/centos:1.1



