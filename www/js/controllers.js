angular.module('starter.controllers', ['login-controller', 'register-controller', 'modifypassword-controller', 'dash-controller', 'chat-controller', 'account-controller'])


//  .controller('LoginCtrl',['$scope', '$ionicPopup', '$timeout', '$state',  '$data', function($scope, $ionicPopup, $timeout, $state, $data) {
//    $scope.formUser = {};
//
//    //执行用户登录操作
//    $scope.doLogin = function(){
//      $data.login("user", this.formUser).success(function(data){
//        if(data == null){
//          $scope.showErrorMesPopup("手机号或密码错误");
//        }else{
//          $scope.showSuccessMesPopup("正在登录请稍后");
//          console.log(data);
//          var user = JSON.stringify(data);
//          sessionStorage.setItem("user",user);
//        }
//      });
//    };
//
//    $scope.showErrorMesPopup = function(title) {
//      var myPopup = $ionicPopup.show({
//        title: '<b>'+title+'</b>'
//      });
//      $timeout(function() {
//        myPopup.close(); // 2秒后关闭
//      }, 1000);
//    };
//
//    $scope.showSuccessMesPopup = function(title) {
//      var myPopup = $ionicPopup.show({
//        title: '<b>'+title+'</b>',
//        template: '<p style="text-align: center"><ion-spinner icon="android" class="spinner-positive"></ion-spinner></p>'
//      });
//      $timeout(function() {
//        myPopup.close(); // 2秒后关闭
//        $state.go("tab.dash");
//      }, 2000);
//    };
//  }])
//
//
//  .controller('RegisterCtrl', ['$scope', '$ionicPopup', '$timeout', '$state', '$data', '$ionicNavBarDelegate', function($scope, $ionicPopup, $timeout, $state, $data, $ionicNavBarDelegate) {
//    $scope.formUser = {};
//
//    $scope.doRegister = function() {
//      console.log($scope.formUser);
//      $data.register("user", $scope.formUser).success(function(data) {
//        if (data != null) {
//          $scope.showSuccessMesPopup("正在注册，请稍后");
//          $timeout(function() {
//            $scope.showErrorMesPopup("注册成功！");
//            $scope.go("login");
//          }, 2000);
//        } else {
//          $scope.showErrorMesPopup("用户已经注册，请更换！");
//        }
//      });
//    };
//
//    $scope.showErrorMesPopup = function(title) {
//      var myPopup = $ionicPopup.show({
//        title: '<b>'+title+'</b>'
//      });
//      $timeout(function() {
//        myPopup.close(); // 2秒后关闭
//      }, 1000);
//    };
//
//
//    //  验证成功后提示框
//    $scope.showSuccessMesPopup = function(title) {
//      var myPopup = $ionicPopup.show({
//        title: '<b>'+title+'</b>',
//        template: '<p style="text-align: center"><ion-spinner icon="android"></ion-spinner></p>'
//      });
//      $timeout(function() {
//        myPopup.close(); // 2秒后关闭
//      }, 2000);
//    };
//
//
//    // 返回
//    //$scope.backAction = function () {
//    //  $ionicNavBarDelegate.back();
//    //};
//
//
//  }])
//
//
//.controller('ModifyPasswordCtrl', function($scope, $state) {
//    $scope.doModify = function() {
//      $state.go("login");   //会根据情形来判断是返回，还是重新push
//    }
//  })
//
//.controller('DashCtrl', function($scope, $state, $ionicPopup) {
//    // 确认弹出框
//    $scope.showConfirm = function () {
//      $ionicPopup.confirm ({
//        title: "确认退出当前登录?",
//        okText: "确认",
//        cancelText: "取消"
//      })
//        .then(function(res) {
//          if (res) {
//            $state.go('login');
//          } else {
//            return false;
//          }
//        });
//    }
//  })
//
//
//
//.controller('ChatsCtrl', function($scope, Chats) {
//  // With the new view caching in Ionic, Controllers are only called
//  // when they are recreated or on app start, instead of every page change.
//  // To listen for when this page is active (for example, to refresh data),
//  // listen for the $ionicView.enter event:
//  //
//  //$scope.$on('$ionicView.enter', function(e) {
//  //});
//
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
//})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});

//.controller('AccountCtrl', function($scope, $ionicModal) {
//
//    $ionicModal.fromTemplateUrl("templates/account-modal.html", {
//      scope: $scope,
//      animation: "slide-in-up"
//    }).then(function(modal) {
//      $scope.modal = modal;
//    });
//
//    $scope.openModal = function() {
//      $scope.modal.show();
//    };
//
//
//
//  $scope.settings = {
//    enableFriends: true
//  };
//
//});
