# The CLI

The command line interface will be the primary means of deploying websites. It will be simple but feature complete. The CLI will also supersede [RVA-CLI](https://oss.eventone.page/rva-cli/), so it has to provide the same functionality as RVA.

## Features

* Simple
* Easy GitLab [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/)

## Usage

### Deploy Website

Deploy the current directory as a static website! Or specify the project path.

```bash
$ max [project path]
```

### Login

Login or create an account on the `maxup` API.

```bash
$ max login
```

### Logout

Logout of the `maxup` API.

```bash
$ max logout
```

### Who Am I?

Check who you are logged in as on the `maxup` API,

```bash
$ max whoami
```

### List Websites

List all the projects that you have access to.

```bash
$ max list
```

### Destroy Website

Destroy a published project.

```bash
$ max destroy
```

### Initialize Config

Initialize optional custom config and config required for [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/).

```bash
$ max init
```

### Publish Review App

Publish a static website [Review App](https://docs.gitlab.com/ee/ci/review_apps/) based on your base domain set with `max init`.

```
$ max review start [name]
```

### Stop Review App

Destroy an already published [Review App](https://docs.gitlab.com/ee/ci/review_apps/).

```bash
$ max review stop [name]
```
