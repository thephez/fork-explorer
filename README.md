# Fork Explorer

Fork Explorer let's you see the status of a BIP9-style softfork. It relies on dashd and its JSON-RPC server.

<img width="1000" src="fork-explorer-screenshot.png" />

## Build and Run

You need [Deno](https://deno.land) version <= v1.9.2 to build and run this project. Deno is a new
Javascript environment, similar to Node.

Download Deno v1.9.2
[here](https://github.com/denoland/deno/releases/tag/v1.9.2) and extract binary
to `/home/<user>/.deno/bin`.

0. Fix config file by duplicating `config/config.ts_TEMPLATE` to `config/config.ts` and setting
   dashd's JSON-RPC credentials up.
1. `./build-frontend.sh`.
2. `./run-server.sh`.
3. Done.

NOTE: I had stability issues and added a [script called via cron](deno-check.sh) as a quick hack
to restart if deno isn't running.

### Nginx

`sudo apt install nginx`

* Create new file in `/etc/nginx/sites-enabled` (e.g. `fork-explorer`)
* Delete `default` file from `/etc/nginx/sites-enabled`
* Copy the following into your new file

```text
server {
  listen 80;

  location / {
    proxy_pass http://<IP from config.ts>:8080;
    # Example: proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

`sudo systemctl start nginx`

### Running without bitcoind installed (faked data mode):

If you want to build and run fork-explorer without bitcoind, you can start one of the two
fake modes available:

Set `mode: "fake"` or `mode: "fake-backend"` in your `config/config.ts`.

`fake`: Backend will generate fake blocks

`fake-frontend`: Frontend will generate fake blocks, this mode works in conjuction with `./frontend-dev-server.sh`

## Generating block data from a specific difficulty period

Difficulty period is calculated as `floor([any block in the period])`.

`deno run --allow-net --allow-read --allow-write generate/index.ts [period number]`

Once generated, the data is available via API call `/blocks/[epoch number]` or `[project root]/data/periods/[epoch].json`.

## Commit and Code-Style

Follow the code style of the file you are working in.

This project uses [Prettier](https://prettier.io/) for code formatting.
To contribute, install and activate the Prettier extension to your editor of choice.

For commits, make descriptive and atomic git commits.
You can prefix the page or relevant code you are working with, for example on frontend change:

```
index: Add 90% indicator to Progress Bar
```

Or for the backend:

```
blocks: Make fakemode not depend on bitcoind
```

# License

MIT
