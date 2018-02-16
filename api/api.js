/**
 * @apiDefine RequireAuth
 * @apiHeader {String} Authorization Bearer + JWT token.
 * @apiHeaderExample {json} AuthorizationHeader:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *     }
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
 *     curl -i -X "POST" https://api.s3d.sh/v1/auth
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
 *     curl https://api.s3d.sh/v1/auth/verify?email=jim@example.com&token=T1dmvPu36nmyYisXAs7IRzcR
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
 *     curl https://api.s3d.sh/v1/auth/confirm?email=jim@example.com&token=317e0ffc-d77d-489f-b04c-78035a20e6c2
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
 *     curl https://api.s3d.sh/v1/auth/whoami
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Login verified!"
 *     }
 */
