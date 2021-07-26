/* (function () {
  "use strict";

  app.controller("DetailController", DetailController);

  function DetailController($scope, apiService, $stateParams) {
    var vm = $scope;
    vm.coin = {};

    vm.init = function () {
      const coins = apiService.getCoinStorage() || [];
      if($stateParams?.name){
        vm.coin = coins.find(coin => coin.name === $stateParams.name);
        console.log(vm.coin);
      }
    };
    vm.init();
  }
})();*/

import { IOnInit } from "angular";
import { IStateParamsService } from "angular-ui-router";
import { ApiRequestService } from "../../services/ApiRequest.service";

export class DetailController{

  public coin = {};

  constructor(private ApiRequestService: ApiRequestService, private $stateParams: IStateParamsService) {
    this.loadData();
  }

  private loadData(): void {
    const coins = this.ApiRequestService.getCoinStorage() || [];
    if(this.$stateParams?.name){
      this.coin = coins.find(coin => coin.name === this.$stateParams.name);
      console.log(this.coin);
    }
  }
}
