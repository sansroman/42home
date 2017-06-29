(function (exports) {
    exports.ajax = {
        /**
         *AJAX GET method
         *
         *@param string request url
         *@param function callback(AjaxObj)
         */
        get: function (url, callback) {
            var req = new XMLHttpRequest();
            if (!req) {
                callback(new CreateAjaxObj(true, "Your browser is not supported."))
            }
            if (url) {
                req.open("GET", url + "?v=" + Math.random(), true);
                req.onreadystatechange = function () {
                    if (req.readyState === 4 && req.status == 200) {
                        callback(new CreateAjaxObj(false, req.responseText));
                    }
                }
                req.send(null);
            } else {
                callback(new CreateAjaxObj(true, "error by parameter."));
            }
        },
        /**
         * AJAX POST method
         *
         * @param string url request url
         * @param string dataType example:"application/json" default:"application/json"
         * @param data string Data to send
         * @param function callback(AjaxObj)
         */
        post: function (url, dataType, data, callback) {
            if (arguments.length === 3) {
                callback = data;
                data = dataType;
                dataType = "application/json";
            }
            var req = new XMLHttpRequest();
            if (req == undefined) {
                callback(new CreateAjaxObj(true, "Your browser is not supported."))
            }
            if (url) {
                req.open("POST", url, true);
                req.setRequestHeader('Content-type', dataType);
                req.onreadystatechange = function () {
                    if (req.readyState === 4) {
                        var response = JSON.parse(req.responseText)
                        callback(new CreateAjaxObj(response.err, response.info));
                    }
                }
                req.send(data || null);
                return;
            } else {
                callback(new CreateAjaxObj(true, "error by parameter."));
            }
        },
        put: function (url, dataType, data, callback) {
            if (arguments.length === 3) {
                callback = data;
                data = dataType;
                dataType = "application/json";
            }
            var req = new XMLHttpRequest();
            if (req == undefined) {
                callback(new CreateAjaxObj(true, "Your browser is not supported."))
            }
            if (url) {
                req.open("PUT", url + "?v=" + Math.random(), true);
                req.setRequestHeader('Content-type', dataType);
                req.onreadystatechange = function () {
                    if (req.readyState === 4) {
                        var response = JSON.parse(req.responseText)
                        callback(new CreateAjaxObj(response.err, response.info));
                    }
                }
                req.send(data || null);
                return;
            } else {
                callback(new CreateAjaxObj(true, "error by parameter."));
            }
        }
    }
    /**
     * create AjaxObj
     *
     * @param string haserr
     * @param string Ajax context
     */
    function CreateAjaxObj(err, context) {
        this.err = err || false;
        this.context = context || null;
    }
})(window)