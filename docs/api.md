# The API

## Auth Flow
1. User sends `POST /auth` with email address
2. If the email exists, a magic link with a verification token is generated and sent to the provided email. Otherwise the user is created and then the magic link is sent. 
3. User repeatedly sends `GET /auth/verify?email&token` until it responds with a JWT token.
4. User then uses the JWT token to authenticate to the API. 

### Example
Jim with `jim@example.com` sends a request to `POST /auth` like the following:

```bash
curl -X POST "https://api.s3d.sh/auth" \
  -H "Content-Type: application/json" \
  -d '{ "email": "jim@example.com" }'
```

The API checks if Jim has an account and creates an account one doesn't already exist. Then it sends an email to `jim@example.com` with a verification token (e.g. `T1dmvPu36nmyYisXAs7IRzcR`). Jim then repeatedly sends a request to `GET /auth/verify` until it responds with a token after he clicks the magic link. Example:

```bash
curl "https://api.s3d.sh/auth/verify?email=jim@example.com&token=T1dmvPu36nmyYisXAs7IRzcR"
```

Jim then saves the token that was sent and uses it to authenticate to the API. Example:

```bash
curl "https://api.s3d.sh/whoami" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
```

## Endpoints
The endpoints can be found [here](endpoints.md)