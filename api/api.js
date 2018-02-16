/**
 * @api {post} /login Login or Create Account
 * @apiName PostLogin
 * @apiGroup User
 * @apiDescription Login to the API. If the user does not exist, it will be created.
 *
 * @apiParam {String} email Users unique email address.
 * @apiParam {String} password Users password.
 *
 * @apiSuccess {Boolean} success    Success true or false.
 * @apiSuccess {String} message     Lastname of the User.
 * @apiSuccess {String} token       JWT login token.
 *
 * @apiExample {curl} Example usage:
 *     curl -i -X "POST" https://api.s3d.sh/v1/login
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "nprail@filiosoft.com",
 *       "password": "Pa$$w0rd"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "Logged in successfuly!"
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OTVlOTI0MjE2NTY2MDAxOGJiMGE4YSIsInVzZXJuYW1lIjoibnByYWlsIiwiaWF0IjoxNTAzMzE4MTIwLCJleHAiOjE1MDMzMjgyMDB9.CATgjmJm-qzq9IAYI5mFMjKe9LdFmF7pvBFMSNwDjLQ"
 *     }
 */