/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security <aside class=\"notice\">   Before we begin a reminder that your application will need to adhere to PCI-DSS standards to operate safely   and to meet requirements set out by Visa and MasterCard and the PCI Security Standards Council including: </aside>  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities.
 *
 * Contact: support@citypay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import superagent from "superagent";
import querystring from "querystring";
import ApiKey from "./model/ApiKey";

/**
* @module ApiClient
* @version 1.2.0
*/

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
class ApiClient {
    constructor(config) {

        this.config = config || {};

        this.version = "1.2.0";

        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://api.citypay.com/v6
         */
        this.basePath = (config && config.sandbox ? 'https://sandbox.citypay.com' : 'https://api.citypay.com').replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        this.authentications = {
            'cp-api-key': {type: 'apiKey', 'in': 'header', name: 'cp-api-key'}
        }

        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
        this.defaultHeaders = {
            "User-Agent": "CityPay-JS-SDK/" + this.version,
            "cp-sdk": "CP-JS-SDK/" + this.version
        };

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = config && config.timeout ? config.timeout : 60000;

        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        this.cache = true;

        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        this.enableCookies = false;

        /*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
        if (typeof window === 'undefined') {
          this.agent = new superagent.agent();
        }

        /*
         * Allow user to override superagent agent
         */
         this.requestAgent = false;

        /*
         * Allow user to add superagent plugins
         */
        this.plugins = null;

    }

    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */
    paramToString(param) {
        if (param == undefined) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }

        return param.toString();
    }

   /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    * NOTE: query parameters are not handled here.
    * @param {String} path The path to append to the base URL.
    * @param {Object} pathParams The parameter values to append.
    * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
    * @returns {String} The encoded path with parameter values substituted.
    */
    buildUrl(path, pathParams, apiBasePath) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }

        var url = this.basePath + path;

        // use API (operation, path) base path if defined
        if (apiBasePath !== null && apiBasePath !== undefined) {
            url = apiBasePath + path;
        }

        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }

            return encodeURIComponent(value);
        });

        return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
    isJsonMime(contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
    jsonPreferredMime(contentTypes) {
        for (var i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }

        return contentTypes[0];
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
    isFileParam(param) {
        // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
        if (typeof require === 'function') {
            let fs;
            try {
                fs = require('fs');
            } catch (err) {}
            if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                return true;
            }
        }

        // Buffer in Node.js
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }

        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }

        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }

        return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
    normalizeParams(params) {
        var newParams = {};
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                var value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }

        return newParams;
    }

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
    buildCollectionParam(param, collectionFormat) {
        if (param == null) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                //return the array directly as SuperAgent will handle it as expected
                return param.map(this.paramToString);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    }

    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    */
    applyAuthToRequest(request, authNames) {
        authNames.forEach((authName) => {
            var auth = this.authentications[authName];
            if (authName === 'cp-api-key') {

                // if we have a domain key... ignore this type
                if (this.config.domain_key) {
                    return;
                }

                auth.apiKey = new ApiKey(this.config.client_id, this.config.licence_key).generateApiKey();
            }

            if (authName === 'cp-domain-key') {

                if (this.config.client_id) {
                    return;
                }

                auth = {
                    type: 'bearer',
                    accessToken: this.config.domain_key
                };
            }

            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        request.auth(auth.username || '', auth.password || '');
                    }

                    break;
                case 'bearer':
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }

                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        var data = {};
                        if (auth.apiKeyPrefix) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        } else {
                            data[auth.name] = auth.apiKey;
                        }
                        if (auth['in'] === 'header') {
                            request.set(data);
                        } else {
                            request.query(data);
                        }
                    }

                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }

                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });
    }

   /**
    * Deserializes an HTTP response body into a value of the specified type.
    * @param {Object} response A SuperAgent response object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns A value of the specified type.
    */
    deserialize(response, returnType) {
        if (response == null || returnType == null || response.status == 204) {
            return null;
        }

        // Rely on SuperAgent for parsing response body.
        // See http://visionmedia.github.io/superagent/#parsing-response-bodies
        var data = response.body;
        if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
            // SuperAgent does not always produce a body; use the unparsed response as a fallback
            data = response.text;
        }

        return ApiClient.convertToType(data, returnType);
    }


   /**
    * Invokes the REST service using the supplied settings and parameters.
    * @param {String} path The base URL to invoke.
    * @param {String} httpMethod The HTTP method to use.
    * @param {Object.<String, String>} pathParams A map of path parameters and their values.
    * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
    * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
    * @param {Object.<String, Object>} formParams A map of form parameters and their values.
    * @param {Object} bodyParam The value to pass as the request body.
    * @param {Array.<String>} authNames An array of authentication type names.
    * @param {Array.<String>} contentTypes An array of request MIME types.
    * @param {Array.<String>} accepts An array of acceptable response MIME types.
    * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
    * constructor for a complex type.
    * @param {String} apiBasePath base path defined in the operation/path level to override the default one
    * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
    */
    callApi(path, httpMethod, pathParams,
        queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
        returnType, apiBasePath) {

        var url = this.buildUrl(path, pathParams, apiBasePath);
        var request = superagent(httpMethod, url);

        if (this.plugins !== null) {
            for (var index in this.plugins) {
                if (this.plugins.hasOwnProperty(index)) {
                    request.use(this.plugins[index])
                }
            }
        }

        // apply authentications
        this.applyAuthToRequest(request, authNames);

        // set query parameters
        if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
            queryParams['_'] = new Date().getTime();
        }

        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set requestAgent if it is set by user
        if (this.requestAgent) {
          request.agent(this.requestAgent);
        }

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType) {
            // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
            if(contentType != 'multipart/form-data') {
                request.type(contentType);
            }
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(querystring.stringify(this.normalizeParams(formParams)));
        } else if (contentType == 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]);
                    } else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        } else if (bodyParam !== null && bodyParam !== undefined) {
            if (!request.header['Content-Type']) {
                request.type('application/json');
            }
            request.send(bodyParam);
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'Blob') {
          request.responseType('blob');
        } else if (returnType === 'String') {
          request.responseType('string');
        }

        // Attach previously saved cookies, if enabled
        if (this.enableCookies){
            if (typeof window === 'undefined') {
                this.agent._attachCookies(request);
            }
            else {
                request.withCredentials();
            }
        }

        return new Promise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {
                    var err = {};
                    if (response) {
                        err.status = response.status;
                        err.statusText = response.statusText;
                        err.body = response.body;
                        err.response = response;
                    }
                    err.error = error;

                    reject(err);
                } else {
                    try {
                        var data = this.deserialize(response, returnType);
                        if (this.enableCookies && typeof window === 'undefined'){
                            this.agent._saveCookies(response);
                        }

                        resolve({data, response});
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });

    }

    /**
    * Parses an ISO-8601 string representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
    static parseDate(str) {
        return new Date(str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
    static convertToType(data, type) {
        if (data === null || data === undefined)
            return data

        switch (type) {
            case 'Boolean':
                return Boolean(data);
            case 'Integer':
                return parseInt(data, 10);
            case 'Number':
                return parseFloat(data);
            case 'String':
                return String(data);
            case 'Date':
                return ApiClient.parseDate(String(data));
            case 'Blob':
                return data;
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type.constructFromObject === 'function') {
                    // for model type like User and enum class

                    // cp addition of object key level
                    if (data.hasOwnProperty(type.name)) {
                        return type.constructFromObject(data[type.name]);
                    }

                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    // for array type like: ['String']
                    var itemType = type[0];

                    return data.map((item) => {
                        return ApiClient.convertToType(item, itemType);
                    });
                } else if (typeof type === 'object') {
                    // for plain object type like: {'String': 'Integer'}
                    var keyType, valueType;
                    for (var k in type) {
                        if (type.hasOwnProperty(k)) {
                            keyType = k;
                            valueType = type[k];
                            break;
                        }
                    }

                    var result = {};
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            var key = ApiClient.convertToType(k, keyType);
                            var value = ApiClient.convertToType(data[k], valueType);
                            result[key] = value;
                        }
                    }

                    return result;
                } else {
                    // for unknown type, return the data directly
                    return data;
                }
        }
    }

  /**
    * Gets an array of host settings
    * @returns An array of host settings
    */
    hostSettings() {
        return [
            {
              'url': "https://api.citypay.com",
              'description': "Production processing endpoint",
            },
            {
              'url': "https://sandbox.citypay.com",
              'description': "Testing service returning test results for all transactions",
            }
      ];
    }

    getBasePathFromSettings(index, variables={}) {
        var servers = this.hostSettings();

        // check array index out of bound
        if (index < 0 || index >= servers.length) {
            throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
        }

        var server = servers[index];
        var url = server['url'];

        // go through variable and assign a value
        for (var variable_name in server['variables']) {
            if (variable_name in variables) {
                let variable = server['variables'][variable_name];
                if ( !('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name]) ) {
                    url = url.replace("{" + variable_name + "}", variables[variable_name]);
                } else {
                    throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
                }
            } else {
                // use default value
                url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value'])
            }
        }
        return url;
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
    static constructFromObject(data, obj, itemType) {
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = ApiClient.convertToType(data[i], itemType);
            }
        } else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = ApiClient.convertToType(data[k], itemType);
            }
        }
    };
}

/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */
ApiClient.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',

    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',

    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',

    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',

    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
};

/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
export default ApiClient;
