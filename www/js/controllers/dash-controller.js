/**
 * Created by shiyaorong on 16/3/20.
 */

angular.module('dash-controller', [])

  .controller('DashCtrl', function($scope, $state, $ionicPopup) {
    // 确认弹出框
    $scope.showConfirm = function () {
      $ionicPopup.confirm ({
        title: "确认退出当前登录?",
        okText: "确认",
        cancelText: "取消"
      })
        .then(function(res) {
          if (res) {
            $state.go('login');
          } else {
            return false;
          }
        });
    }
  });
