/**
 * Created by shiyaorong on 16/3/20.
 */

angular.module('modifypassword-controller', [])

  .controller('ModifyPasswordCtrl', function($scope, $state) {
    $scope.doModify = function() {
      $state.go("login");   //会根据情形来判断是返回，还是重新push
    }
  });
