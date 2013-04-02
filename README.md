# The Browser is dead, long live the Browser!

This is the simple app I put together as the demo for [my talk at GOTO Aarhus 2012][1]. To get to any "chapter" just checkout tag xN where N is 1 through 7. So to check out chapter 4:

    % git checkout x4

To run it you'll need a recent version of node 0.8. I've been using [n][2] so installing is as simple as setting `N_PREFIX` and adding `$N_PREFIX/bin` to your path. Then you run:

    % n 0.8.21

which will install and enable that version. (Try `n list` to see which versions are available.)

[1]: http://gotocon.com/aarhus-2012/presentation/The%20browser%20is%20dead...
[2]: https://github.com/visionmedia/n
