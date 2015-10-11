/**
 * @constructor
 * @param {Object} placeHolder
 */
var ns = function(o) {
	this.placeHolder = o;
};

/**
 * @private
 * @method create
 * @param {String} namespace
 * @param {Object} placeHolder
 */
function create(n, o) {
	if(n) {
		var i, len;

        n = n.split('.');
        len = n.length;

        for(i=0; i < len;) {

        	if(!o[n[i]]) {
        		o[n[i]] = (i === len-1) ? ref : {};;
        	}
            o = o[n[i++]];
        }
    }

    return o;
}

/**
 * @method namespace
 * @param {String} strNamespace
 */
ns.prototype.namespace = function(n) {
    return create(n, this.placeHolder);
};

/**
 * @method ns
 * Shorthand for namespace.
 * @param {String} strNamespace
 */
ns.prototype.ns = ns.prototype.namespace

/**
 * @method namespaceRef
 * @param {String} strNamespace
 */
ns.prototype.namespaceRef = function(n, ref) {
    return create(n, this.placeHolder, ref);
};

/**
 * @method nsRef
 * Shorthand for namespace.
 * @param {String} strNamespace
 */
ns.prototype.nsRef = ns.prototype.namespaceRef

module.exports = ns;