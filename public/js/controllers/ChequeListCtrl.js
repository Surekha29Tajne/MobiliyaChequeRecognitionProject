
// public/js/controllers/MainCtrl.js
angular.module('ChequeListCtrl', []).controller('ChequeListController', function($scope) {
    
        $scope.tagline = 'Select a Cheque';   

        $scope.chequeList = [
        {
            label: "Cheque-1",
            imgPath: "images/blank_post_thumbnail.png"
        },
        {
            label: "Cheque-2",
            imgPath: "images/blank_post_thumbnail.png"
        },
        {
            label: "Cheque-3",
            imgPath: "images/blank_post_thumbnail.png"
        }];

        $scope.selectCheque = function(cheque) {
            $scope.selectedCheque = cheque;
        }

    
    });