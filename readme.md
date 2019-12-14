## pdftk-gcf

This is a fork of https://github.com/unshift/pdftk-lambda, modified to be used in Google Cloud Functions.

### Installation and Usage

```bash
npm i pdftk-gcf
```

Next, require the package at the top of your Google Cloud Function.

```js
// modifies PATH, LD_LIBRARY_PATH, and PKG_CONFIG_PATH to point to the pdftk binary and libgcj.so.10
require('pdftk-gcf')

```

## Why This Package?

Installing this package makes it possible to use pdftk in Google Cloud Function. It includes two binaries, pdftk and the dependency libgcj.so.10.

`pdftk-gcf` was compiled using the latest public Amazon Linux AMI version (amzn-ami-hvm-2017.03.1.20170812-x86_64-gp2) as of this writing (07/24/2018).
