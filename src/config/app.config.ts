import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';
import ptJson from '../i18n/locale-pt.json';
import { DashboardController } from '../modules/dashboard/DashboardController';
import Dashboard from '../modules/dashboard/DashboardView.html';
import { DetailController } from '../modules/dashboard/detail/DetailController';
import Detail from '../modules/dashboard/detail/DetailView.html';

const appConfig = ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider, $translateProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('dashboard');
    $translateProvider.translations('pt', ptJson).preferredLanguage('pt').useSanitizeValueStrategy('sanitize');
};

export { appConfig };

