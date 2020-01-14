import JSONP from 'jsonp';

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JSONP(options.url, {
                param: 'callback'
            }, function(err, response) {
                // to-do
                if (response && response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response && response.message);
                }
            });
        });
    }
}
