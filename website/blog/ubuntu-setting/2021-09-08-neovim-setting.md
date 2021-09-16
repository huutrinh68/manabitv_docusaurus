---
slug: neovim setting
title: Neovim setting
date: 2021-09-08
authors:
  name: Huutrinh
  title: ManabiTV team
  url: https://github.com/huutrinh68
  image_url: https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4
tags: [neovim, ubuntu]
---
### Install neovim
```shell
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:neovim-ppa/stable
$ sudo apt-get update
$ sudo apt-get install neovim
```

### Prepare config folder
```shell
$ wget https://raw.githubusercontent.com/huutrinh68/my_nvim/master/config/nvim/init.vim
$ mkdir -p ~/.config/nvim/
$ mv init.vim ~/.config/nvim/init.vim
```

### Install pluginstall
```shell
$ sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
$ nvim
# type :PlugInstall
```

### Install fd search
```shell
$ wget https://github.com/sharkdp/fd/releases/download/v7.3.0/fd-musl_7.3.0_amd64.deb
$ sudo dpkg -i fd-musl_7.3.0_amd64.deb
$ mv dpkg -i fd-musl_7.3.0_amd64.deb
```

### Install grep
```shell
$ curl -LO https://github.com/BurntSushi/ripgrep/releases/download/0.8.1/ripgrep_0.8.1_amd64.deb
$ sudo dpkg -i ripgrep_0.8.1_amd64.deb && rm ripgrep_0.8.1_amd64.deb
```

### Create alias for nvim
```shell
$ echo "alias vim='nvim'" >> ~/.bashrc
$ source ~/.bashrc
```
