import { IOnInit, ITimeoutService } from 'angular';
import { ApiRequestService } from '../services/ApiRequest.service';
import './Dashboard.scss';

export class DashboardController implements IOnInit {

  public numberPerPage = 20;
  public indexPage = 1;
  public coins = [];
  public bufferCoins = [];
  public search = '';
  public propertyOrder = '';

  constructor(private ApiRequestService: ApiRequestService, private $timeout: ITimeoutService) {
    this.$onInit();
  }

  $onInit() {
    this.$timeout(() => {
      this.getData();
    }, 1000);
  }

  applyFilter(filter: string) {
    if (filter && filter !== '' && this.bufferCoins) {
      this.bufferCoins = this.coins.filter((item: any) =>
        item.name.toUpperCase().includes(filter.toUpperCase())
      );
    }

    if (filter === '') {
      this.bufferCoins = this.coins;
    }
  }

  orderBy(typeOfOrder: string) {
    this.propertyOrder = typeOfOrder;
  }

  loadMore(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const result = await this.ApiRequestService.getData(this.numberPerPage, this.indexPage);

    if (!result) {
      return;
    }

    this.coins = this.bufferCoins = [...this.coins, ...result.data];
    this.indexPage++;
    this.ApiRequestService.setCoinStorage(this.coins);
  }
}

