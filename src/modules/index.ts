import { module } from 'angular';
import { dashboardModule } from './dashboard/DashboardModule';

const pagesModules = module('app.page', [
    dashboardModule
]).name;

export { pagesModules };
