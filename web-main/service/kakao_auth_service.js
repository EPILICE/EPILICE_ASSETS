var call_kakao_rest_api = function (){

    this.signIn = function() {

    }

    // SignOut
    this.signOut = function(access_token) {

        var result_state;

        $.ajax({
            url: "https://kapi.kakao.com/v1/user/logout",
            type: "POST",
            async: false,
            data : {
               "Content-Type": "application/x-www-form-urlencoded",
               "Authorization": "Bearer ${access_token}"
            },
            success: function (result) {
               result_state = true;
            },
            error : function(xhr, ajaxSettings, thrownError) {
                result_state = false;
            },
        });

        return result_state;
    }

    // RefreshToken
    this.refreshToken = function(client_id, refresh_token) {

        var token_data;

        $.ajax({
            url: "https://kauth.kakao.com/oauth/token",
            type: "POST",
            async: false,
            data : {
                "grant_type" : "refresh_token",
                "client_id" : client_id,
                "refresh_token" : refresh_token
            },
            success: function (result) {
                token_data =  result.response;
            }
        });

        return token_data;
    }

    this.getUser = function(access_token) {

        var user_data;

        $.ajax({
            url: "https://kapi.kakao.com/v2/user/me?secure_resource=true",
            type: "GET",
            async: false,
            data : {
                "Authorization": "Bearer access_token"
            }
        });

    }

}
