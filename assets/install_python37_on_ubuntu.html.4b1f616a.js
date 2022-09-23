import{_ as e,o as n,c as i,f as l}from"./app.0503eb46.js";const s={},a=l(`<h1 id="\u5728-ubuntu-\u5B89\u88C5-python3-7" tabindex="-1"><a class="header-anchor" href="#\u5728-ubuntu-\u5B89\u88C5-python3-7" aria-hidden="true">#</a> \u5728 Ubuntu \u5B89\u88C5 Python3.7</h1><blockquote><p>\u6CE8\uFF1A\u5F53\u524DUbuntu\u7248\u672C\u4E3A18.04</p></blockquote><h2 id="\u4E0B\u8F7Dpython\u6E90\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Dpython\u6E90\u7801\u5305" aria-hidden="true">#</a> \u4E0B\u8F7DPython\u6E90\u7801\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wget https://www.python.org/ftp/python/3.7.12/Python-3.7.12.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u524D\u51C6\u5907" aria-hidden="true">#</a> \u5B89\u88C5\u524D\u51C6\u5907</h2><p>\u5B89\u88C5\u4F9D\u8D56\u7EC4\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apt-get update
apt-get install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev wget libbz2-dev tk-dev gcc make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u538B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u5B89\u88C5" aria-hidden="true">#</a> \u89E3\u538B\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u89E3\u538B\u5230/usr/local/src\u76EE\u5F55
$ tar zvxf Python-3.7.12.tgz -C /usr/local/src
$ cd /usr/local/src/Python-3.7.12
# \u7F16\u8BD1\u524D\u914D\u7F6E
$ ./configure prefix=/usr/local/python3 --enable-shared
# \u7F16\u8BD1\u6784\u5EFA
$ make -j8
# \u5B89\u88C5Python
$ make install
# \u6E05\u7406\u7F16\u8BD1\u4EA7\u51FA\u7684\u4E2D\u95F4\u6587\u4EF6
$ make clean
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684Python\u53EF\u6267\u884C\u6587\u4EF6\u5230/usr/local/bin\u76EE\u5F55
$ ln -s /usr/local/python3/bin/python3 /usr/local/bin/python
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684pip3\u53EF\u6267\u884C\u6587\u4EF6\u5230/usr/local/bin\u76EE\u5F55
$ ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip
# \u94FE\u63A5\u6784\u5EFA\u4EA7\u51FA\u7684Python\u52A8\u6001\u5E93
$ ln -s /usr/local/python3/lib/libpython3.7m.so.1.0 /usr/lib/libpython3.7m.so.1.0
# \u914D\u7F6E\u52A8\u6001\u5E93
$ ldconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5" aria-hidden="true">#</a> \u68C0\u67E5</h2><p>\u68C0\u67E5Python\u7248\u672C\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python --version
Python 3.7.12  # \u6B63\u5E38\u8F93\u51FA\uFF0C\u8868\u793A\u5B89\u88C5\u6210\u529F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A</p><ol><li>\u94FE\u63A5\u5230/usr/local/bin/\u76EE\u5F55\u4E0D\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u8F6F\u4EF6</li><li>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0CPATH\u914D\u7F6E\u662F\u5148<code>/usr/local/bin</code>\u518D<code>/usr/bin</code></li><li>\u68C0\u67E5<code>python -v</code>\u8F93\u51FA\u7ED3\u679C\u662F\u5426\u4E3A<code>Python 3.7.12</code>\u7248\u672C\uFF0C\u5982\u679C\u4E0D\u662F\u8BE5\u7248\u672C\uFF0C\u53EF\u80FD\u5F71\u54CD\u540E\u7EED\u4F9D\u8D56\u5B89\u88C5\u548C\u670D\u52A1\u8FD0\u884C</li></ol><h2 id="pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E" aria-hidden="true">#</a> pypi\u4E0B\u8F7D\u6E90\u914D\u7F6E</h2><p>pip\u9ED8\u8BA4\u662F\u5230<code>pypi</code>\u5B98\u65B9\u6E90\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5305\uFF0C\u4E0B\u8F7D\u901F\u5EA6\u53EF\u80FD\u4F1A\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u8003\u8651\u8C03\u6574\u4E3A\u817E\u8BAF\u4E91\u7684<code>pypi</code>\u4E0B\u8F7D\u6E90\uFF0C\u8C03\u6574\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/.pip/
echo &quot;[global]\\nindex-url = https://mirrors.cloud.tencent.com/pypi/simple&quot; &gt;&gt; ~/.pip/pip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[a];function r(c,o){return n(),i("div",null,d)}const u=e(s,[["render",r],["__file","install_python37_on_ubuntu.html.vue"]]);export{u as default};
