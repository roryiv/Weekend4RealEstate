app.service('PropService', ['$http', function ($http) {
    var self = this;
    self.properties = { list: [] };

    self.getProps = function () {
        $http({
            method: 'GET',
            url: '/property'
        })
            .then(function (response) {
                console.log('server says', response);
                self.properties.list = response.data;
            })
            .catch(function (error) {
                console.log('get error', error);
            });
    };

    self.addProp = function (listing) {
        $http({
            method: 'POST',
            url: '/property',
            data: listing
        })
            .then(function (response) {
                console.log('server says', response);
                self.getProps();
            })
            .catch(function (error) {
                console.log('post error', error);
            });
    };

    self.deleteProp = function (listing) {
        $http({
            method: 'DELETE',
            url: '/property',
            params: listing
        })
            .then(function (response) {
                console.log('server says', response);
                self.getProps();
            })
            .catch(function (error) {
                console.log('delete error', error);
            })
    }

    self.getProps();
}]);