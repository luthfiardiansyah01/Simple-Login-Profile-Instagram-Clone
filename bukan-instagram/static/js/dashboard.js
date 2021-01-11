var startApp = function() {
    gapi.load('auth2', function() {
        auth2 = gpai.auth2.init({
            client_id: '178714849792-m45q2fsmrvrlafbkld7dnca2mdgnd6qn.apps.googleusercontent.com',
            cookiepolicy: 'none',
            scope: 'openid profile email',
        }).then(function() {
            retrieve();
        });
    });
};

var retrieve = function() {
    let auth2 = gapi.auth2.getAuthInstance();
    let profile = auth2.currentUser.get().getBasicProfile();
    document.getElementById('email-id').innerHTML = profile.getEmail();
    document.getElementById('nama-lengkap').innerHTML = profile.getName();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}

function gotoFront() {
    window.location.replace("http://localhost:8600");
}
startApp();