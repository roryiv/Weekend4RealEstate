app.controller('AddNewController', ['PropService', function (PropService) {
    var self = this;

    self.newProp = PropService.newProp;
    self.addProp = PropService.addProp;
    self.resetForm = PropService.resetForm;

    self.resetForm();
}]);