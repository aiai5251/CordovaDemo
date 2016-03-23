/**
 * Created by shiyaorong on 16/3/20.
 */


angular.module('account-controller', [])

  .controller('AccountCtrl', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl("templates/account-modal.html", {
      scope: $scope,
      animation: "slide-in-up"
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.settings = {
      enableFriends: true
    };
  });
