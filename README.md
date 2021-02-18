# lichfolky.github.io

My lab report.

## To test it locally

```
bundle exec jekyll serve
```

https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll

https://pages.github.com/versions/

## Some fixes I had to use on mac

https://jekyllrb.com/docs/troubleshooting/#installation-problems

```
gem install -n /usr/local/bin jekyll
```

And this:
```
bundle add webrick
```

## To remember

Every time you update Ruby to a version in which the first two digits change, update the path to match.
```
echo 'export PATH="$HOME/.gem/ruby/3.0.0/bin:$PATH"' >> ~/.zshrc
```

To update the github-pages gem.
+ If you installed Bundler, run bundle update github-pages.
+ If you don't have Bundler installed, run gem update github-pages.
