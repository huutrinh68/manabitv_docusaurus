---
slug: torch gather
title: Torch gather usage
authors:
  name: Huutrinh
  title: ManabiTV team
  url: https://github.com/huutrinh68
  image_url: https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4
tags: [torch]
---
Get the elements of **y** which index has specified by **x**

```shell=
>>> x = torch.rand(3,5)
>>> x
tensor([[ 0.0778,  0.6633,  0.4953,  0.1461,  0.4691],
        [ 0.3024,  0.0295,  0.3526,  0.6040,  0.7512],
        [ 0.1778,  0.7783,  0.1738,  0.5278,  0.0372]])

>>> x.argmax(1)
tensor([ 1,  4,  1])

>>> x.argmax(1, keepdim=True)
tensor([[ 1],
        [ 4],
        [ 1]])

>>> y = torch.rand(3,5)
>>> y
tensor([[ 0.4005,  0.3994,  0.1083,  0.8888,  0.9239],
        [ 0.6046,  0.5906,  0.3089,  0.4983,  0.2159],
        [ 0.4500,  0.9791,  0.4029,  0.9614,  0.5124]])

>>> y.gather(1, x.argmax(1, keepdim=True))
tensor([[ 0.3994],
        [ 0.2159],
        [ 0.9791]])
```
