app.controller('AddNewController', ['PropService', function(PropService){
    var self = this;
    self.newProp = {
        cost: 0,
        sqft: 0,
        kind: 'rent',
        city: '',
        image_path: 'rental.jpg'
    };

    self.addProp = PropService.addProp;
}]);