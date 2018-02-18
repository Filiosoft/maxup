/**
 * @apiDefine RequireAuth
 * @apiHeader (Authorization) {String} Authorization Bearer + JWT token.
 */

/**
 * @api {post} /v1/auth Request a login
 * @apiName PostAuth
 * @apiGroup Authentication
 * @apiDescription Request a new login for a user to get a token.
 *
 * @apiParam {String} email         The user email.
 *
 * @apiSuccess {String} token       The token used to verify the user accepted the login request.
 *
 * @apiExample {curl} Example usage:
 *     curl -i -X "POST" https://api.maxup.sh/v1/auth
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "jim@example.com"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "T1dmvPu36nmyYisXAs7IRzcR"
 *     }
 */

/**
 * @api {post} /v1/auth/verify?email&token Verify login
 * @apiName GetVerify
 * @apiGroup Authentication
 * @apiDescription Verify the user accepted the login request and get a authentication token. The user email address and the token received after [requesting the login](#api-Authentication-PostAuth) must be added to the URL as a query string with the names `email` and `token`.
 *
 * @apiParam (Query string) {String} email         The user email.
 * @apiParam (Query string) {String} token         The token recieved with [PostAuth](#api-Authentication-PostAuth).
 *
 * @apiSuccess {String} token       The token used to verify the user accepted the login request.
 *
 * @apiExample {curl} Example usage:
 *     curl https://api.maxup.sh/v1/auth/verify?email=jim@example.com&token=T1dmvPu36nmyYisXAs7IRzcR
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *     }
 */

/**
 * @api {post} /v1/auth/confirm?email&token Confirm login request
 * @apiName GetConfirm
 * @apiGroup Authentication
 * @apiDescription Confirm a login request. This link is sent to a user when a login is requested. 
 *
 * @apiParam (Query string) {String} email      The user email.
 * @apiParam (Query string) {String} token      Token generated with [uuid/v4](https://www.npmjs.com/package/uuid#version-4).
 *
 * @apiSuccess {String} message                 Response message.
 *
 * @apiExample {curl} Example usage:
 *     curl https://api.maxup.sh/v1/auth/confirm?email=jim@example.com&token=317e0ffc-d77d-489f-b04c-78035a20e6c2
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Login verified!"
 *     }
 */

/**
 * @api {get} /v1/auth/whoami Who Am I?
 * @apiName GetWhoami
 * @apiGroup Authentication
 * @apiDescription Check the current logged in user. 
 * @apiUse RequireAuth
 *
 * @apiSuccess {String} email       Current users email address.
 *
 * @apiExample {curl} Example usage:
 *     curl https://api.maxup.sh/v1/auth/whoami
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Login verified!"
 *     }
 */

/**
 * @api {get} /v1/files Upload files
 * @apiName PostFiles
 * @apiGroup Deploy
 * @apiDescription Upload files to the API.
 * @apiUse RequireAuth
 *
 * @apiSuccess {String} message         Response message (e.g. File uploaded successfully)
 * 
 * @apiHeader {String} Content-Type     With the value `application/octet-stream`
 * @apiHeader {String} Content-Length   The file size in bytes
 * @apiHeader {String} x-maxup-digest     The file SHA1 used to check integrity
 * @apiHeader {String} x-maxup-size       The file size in bytes
 * @apiHeader {String} x-maxup-filename   The name of the file
 * @apiHeader {String} x-maxup-site       Site to be deployed to
 * 
 * @apiExample {curl} Example usage:
 *     curl -X POST "https://api.zeit.co/v2/now/files" \
 *        -H "Authorization: Bearer $TOKEN" \
 *        -H "Content-Type: application/octet-stream" \
 *        -H "Content-Length: 145" \
 *        -H "x-maxup-digest: 514b5ffa5ef016df7f5f42370157d49f97526a42" \
 *        -H "x-maxup-size: 145" \
 *        -H "x-maxup-site: testsite.maxup.sh"
 *        -d 'file contents'
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "File uploaded successfully!"
 *     }
 */
