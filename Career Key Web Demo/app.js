(function () {

var gems = [
{
        name: 'Dodechosomething',
        price: 2.95,
        description: 'This is my awesome gem!!',
        canPurchase: true
    }

    {
        name: 'Doechosamudas',
        price: 21.95,
        description: 'This is my awesome gem 2!!',
        canPurchase: true
    }

     {
        name: 'Rubies and Diamonds',
        price: 121.95,
        description: 'This is my awesome gems!!',
        canPurchase: true
    }
    ]
var app = angular.module('test', []);

app.controller('TestController', function(){
    this.products = gems;

});
})();