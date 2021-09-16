---
slug: docker-proxy
title: Cài đặt proxy cho docker
authors:
  name: Huutrinh
  title: ManabiTV team
  url: https://github.com/huutrinh68
  image_url: https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4
tags: [docker]
---
Cài đặt proxy cho docker
- Hệ điều hành Ubuntu

### Tạo file proxy config
```
$ sudo mkdir -p /etc/systemd/system/docker.service.d
$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf
```
### Thêm những thông tin về proxy vào trong file proxy.conf
```
[Service]
Environment="HTTP_PROXY=http://myproxy.hostname:8080"
Environment="HTTPS_PROXY=https://myproxy.hostname:8080/"
Environment="NO_PROXY="localhost,127.0.0.1,::1"
```
### Lưu lại và sau đó load lại config
```
$ sudo systemctl daemon-reload
```

### Áp dụng config đó vào docker
```
$ sudo systemctl restart docker.service
```
