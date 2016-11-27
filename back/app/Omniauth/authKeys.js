/**
 * Created by rdidier on 11/21/16.
 */

module.exports = {

    'facebook' : {
        input_token  : 'c377b622710ed5235b9db624457e50c7',
        fields : 'last_name,first_name,picture'
    },
    'ecole42' : {
        client_id: '19f6826dc7399acdad8b453be8d17621be14572f1de531ba711cb78f51414694',
        client_secret: 'd5fc78c45af974128c803fbf07b14cd3f08e60905be4bab037aec14ca35152e5',
        grant_type: 'authorization_code',
        redirect_uri: 'http://teub.es?from=Ecole42'
    },
    'github' : {
        client_id: 'abd9e4056a4f6c145b85',
        client_secret: '294fe9e62397690957b4ee974922e647cd402b65',
        redirect_uri: 'http://teub.es'
    },
    'slack' : {
        client_id: '3329266210.108193513636',
        client_secret: '321d758a51507c8feb91c92ae534f43e'
    },
    'linkedin' : {
        client_id: "78md4maw3ifr16",
        client_secret: 'mOrzINyX2XsvFdrb',
        grant_type: 'authorization_code',
        redirect_uri: 'http://teub.es?from=Linkedin'
    }
};

