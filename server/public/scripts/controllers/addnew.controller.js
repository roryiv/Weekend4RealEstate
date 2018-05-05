app.controller('AddNewController', ['PropService', function(PropService){
    var self = this;
    self.newProp = {
        cost: 0,
        sqft: 0,
        kind: 'Rent',
        city: '',
        image_path: 'rental.jpg'
    };
    // self.properties = PropService.properties;
    // self.getProps = PropService.getProps;
    self.addProp = PropService.addProp;
    // self.deleteProp = PropService.deleteProp;
}]);