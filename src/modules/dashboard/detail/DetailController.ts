import { IStateParamsService } from "angular-ui-router";
import { ApiRequestService } from "../../services/ApiRequest.service";
export class DetailController {

  public coin = {};

  constructor(private ApiRequestService: ApiRequestService, private $stateParams: IStateParamsService) {
    this.loadData();
  }

  private loadData(): void {
    const coins = this.ApiRequestService.getCoinStorage() || [];
    if (this.$stateParams?.name) {
      this.coin = coins.find(coin => coin.name === this.$stateParams.name);
    }
  }
}
