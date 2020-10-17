'use strict';

angular.module('fmd.suunto.parser', [
    'cb.x2js'
])
.factory('DM5Parser', ['$q', 'x2js', function ($q, x2js) {

    function cast(obj) {
        if (obj === 'false') {
            return false;
        } else if (obj === 'true') {
            return true;
        }
        if (typeof obj === 'object') {
            var copy = angular.copy(obj);
            angular.forEach(copy, function(value, key) {
                copy[key] = cast(value);
            });

            return copy;
        } else {
            if (!isNaN(+obj)) {
                return +obj;
            } else if (!isNaN(Date.parse(obj))) {
                return new Date(obj);
            } else {
                return obj;
            }
        }
    }

    function anonymizeAndCleanData(diveUncleared) {
        var copy = angular.copy(diveUncleared);
        var dive = copy.Dive;

        dive.SerialNumber = 'XXXXXXXX';
        dive.SampleBlob = undefined;

        if (!Array.isArray(dive.DiveSamples['Dive.Sample'])) {
            dive.DiveSamples['Dive.Sample'] = [dive.DiveSamples['Dive.Sample']];
        }

        return cast(copy);
    }

    

    return {
        'parseFiles': function (files, scope) {
            var promises = [];
            angular.forEach(files, function (file) {
                var deferred = $q.defer();
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var sample = x2js.xml2js(evt.target.result);
                    
                    scope.$apply(function () {
                    deferred.resolve(anonymizeAndCleanData(sample));
                    });
                  
                };
                reader.readAsText(file);
                promises.push(deferred.promise);
            });

            return $q.all(promises);
        }
    };
}]);