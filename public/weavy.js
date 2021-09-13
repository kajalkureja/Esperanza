var token = new JwtBuilder()
.WithAlgorithm(new HMACSHA256Algorithm())
.WithSecret("mysecretstring")
.AddClaim("exp", DateTimeOffset.UtcNow.AddSeconds(60).ToUnixTimeSeconds())
.AddClaim("iss", "unique_application_id")
.AddClaim("sub", "unique_user_id")
.AddClaim("client_id", "my-clientid")
.Encode();
 
 
var getToken = function () {
return new Promise(function (resolve, reject) {
// could for instance call backend to generate a valid token
var token = getTokenFromSomewhere();
if (token) {
resolve(token);
} else {
reject("Failed to retrieve token");
}
});
}
 
var weavy = new Weavy({
jwt: getToken
});


var weavy = new Weavy({
    jwt: "server_generated_token"
    });


