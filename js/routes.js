angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.makeMoney', {
    url: '/opportunities',
    views: {
      'tab1': {
        templateUrl: 'templates/makeMoney.html',
        controller: 'makeMoneyCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.withdrawMoney'
      2) Using $state.go programatically:
        $state.go('tabsController.withdrawMoney');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/Withdraw
      /page1/tab5/Withdraw
  */
  .state('tabsController.withdrawMoney', {
    url: '/Withdraw',
    views: {
      'tab2': {
        templateUrl: 'templates/withdrawMoney.html',
        controller: 'withdrawMoneyCtrl'
      },
      'tab5': {
        templateUrl: 'templates/withdrawMoney.html',
        controller: 'withdrawMoneyCtrl'
      }
    }
  })

  .state('tabsController.changeInfo', {
    url: '/change',
    views: {
      'tab3': {
        templateUrl: 'templates/changeInfo.html',
        controller: 'changeInfoCtrl'
      }
    }
  })

  .state('fullName', {
    url: '/name',
    templateUrl: 'templates/fullName.html',
    controller: 'fullNameCtrl'
  })

  .state('email', {
    url: '/page12',
    templateUrl: 'templates/email.html',
    controller: 'emailCtrl'
  })

  .state('password', {
    url: '/page13',
    templateUrl: 'templates/password.html',
    controller: 'passwordCtrl'
  })

  .state('school', {
    url: '/schoolconf',
    templateUrl: 'templates/school.html',
    controller: 'schoolCtrl'
  })

  .state('school2', {
    url: '/schoolname',
    templateUrl: 'templates/school2.html',
    controller: 'school2Ctrl'
  })

  .state('linkYourInstagram', {
    url: '/insta',
    templateUrl: 'templates/linkYourInstagram.html',
    controller: 'linkYourInstagramCtrl'
  })

  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'locationCtrl'
  })

$urlRouterProvider.otherwise('/page1/opportunities')


});