# The CLI

The command line interface will be the primary means of deploying websites. It will be simple but feature complete. The CLI will also supersede [RVA-CLI](https://filiosoft.net/rva-cli), so it has to provide the same functionality as RVA.

## Features
* Simple
* Easy GitLab [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/)

## Usage

### Deploy Website
Deploy the current directory as a static website! Or specify the project path. 

```bash
$ s3d [project path]
```

### Login
Login or create an account on the `s3d` API.
```bash
$ s3d login
```

### Logout
Logout of the `s3d` API. 
```bash
$ s3d logout
```

### Who Am I?
Check who you are logged in as on the `s3d` API,
```bash
$ s3d whoami
```

### List Websites
List all the projects that you have access to. 
```bash
$ s3d list
```

### Destroy Website
Destroy a published project. 
```bash
$ s3d destroy
```

### Initialize Config
Initialize optional custom config and config required for [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/). 
```bash
$ s3d init
```

### Publish Review App
Publish a static website [Review App](https://docs.gitlab.com/ee/ci/review_apps/) based on your base domain set with `s3d init`. 
```
$ s3d review start [name]
```

### Stop Review App
Destroy an already published [Review App](https://docs.gitlab.com/ee/ci/review_apps/). 
```bash
$ s3d review stop [name]
```