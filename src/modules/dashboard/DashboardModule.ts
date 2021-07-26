import { module } from 'angular';
import { IStateProvider } from 'angular-ui-router';
import { ApiRequestService } from '../services/ApiRequest.service';
import { DashboardController } from './DashboardController';
import DashboardView from './DashboardView.html';
import { DetailController } from './detail/DetailController';
import DetailView from './detail/DetailView.html';

const dashboardModule = module('app.page.dashboard', [])
    .service('ApiRequestService', ApiRequestService)
    .config(($stateProvider: IStateProvider) => {
        'ngInject';
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                template: DashboardView,
                controller: DashboardController,
                controllerAs: '$ctrl',
            })
            .state('detail',{
                url: '/detail/:name',
                template: DetailView,
                controller: DetailController,
                controllerAs: '$ctrl'
            })
    }).name;

export { dashboardModule };

