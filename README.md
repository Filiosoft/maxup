# maxup

🚀 Deploy static websites quickly and easily to AWS S3!

**Disclaimer:** _This is a concept. Not an actual project. At least, at this point_

## Deploy a Static Site

Deploy a static site in three keystrokes!

![shell](docs/images/shell.png)

## Requirements

* **Fast** From first keystroke to live website!
* **Simple:** One command deployment
* **Cheap:** Free or basically free
* **Secure:** Always secured with TLS

### Components

There will be two components to this project.

#### [The CLI](docs/cli.md)

The command line interface will be the primary means of deploying websites. It will be simple but feature complete. The CLI will also supersede [RVA-CLI](https://oss.eventone.page/rva-cli/), so it has to provide the same functionality as RVA.

#### [The API](docs/api.md)

The API will serve as a sort of proxy to S3. It will provide authentication so that just any user can't publish to your website. The biggest challenge to this piece will be scalability. The API has to be able to proxy 100's of file uploads at once. The API will also handle provisioning of new buckets and CDNs.

### Flow

1.  Developer runs `max`
2.  `maxup` checks that it has permission to deploy this site
3.  `max` uploads all the sites files to the API
4.  API receives the upload (checks users's permissions)
5.  API creates an S3 bucket (if it doesn't exist)
6.  Concurrently, API does these
    * API provisions CDN for the new S3 bucket (if it doesn't exist)
    * API uploads files to the new S3 bucket
7.  API responds to `max` with the new site's address

### Tools & Language

See [#1](https://github.com/maxup-sh/maxup/issues/1).

## Inspiration

Inspiration for this project comes from thses projects:

* [Surge.sh](https://surge.sh)
* [Zeit's](https://zeit.co) [Now](https://zeit.co/now)
