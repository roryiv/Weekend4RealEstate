app.service('PropService', ['$http', function ($http) {
    var self = this;
    self.properties = { list: [] };
    self.newProp = {
        cost: 0,
        sqft: 0,
        kind: 'rent',
        city: '',
        image_path: 'rental.jpg'
    };

    self.getProps = function () {
        $http({
            method: 'GET',
            url: '/property'
        })
            .then(function (response) {
                console.log('server response to get', response.statusText);
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
                console.log('server response to post', response.statusText);
                self.resetForm();
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
                console.log('server response to delete', response.statusText);
                self.getProps();
            })
            .catch(function (error) {
                console.log('delete error', error);
            })
    }

    self.resetForm = function () {
        self.newProp.cost = 0;
        self.newProp.sqft = 0;
        self.newProp.kind = 'rent';
        self.newProp.city = '';
        self.newProp.image_path = 'rental.jpg';
    }

    self.isRental = function (listing) {
        if (listing.kind == 'rent') {
            return true;
        }
        else {
            return false;
        }
    }
}]);