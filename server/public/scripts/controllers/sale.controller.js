app.controller('SaleController', ['PropService', function (PropService) {
    var self = this;

    self.properties = PropService.properties;
    self.getProps = PropService.getProps;
    self.deleteProp = PropService.deleteProp;
    self.isRental = PropService.isRental;

    self.getProps();
}]);