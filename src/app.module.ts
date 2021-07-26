import { bootstrap, IModule, module } from 'angular';
import ngSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import uiRouter from 'angular-ui-router';
import './app.module.scss';
import { appConfig } from './config';
import { pagesModules } from './modules';
import { ApiRequestService } from './modules/services/ApiRequest.service';

export const app: IModule = module('app', [
    uiRouter,
    ngSanitize,
    angularTranslate,
    pagesModules,
])
    .config(appConfig);

bootstrap(document.querySelector('#app'), ['app']);
