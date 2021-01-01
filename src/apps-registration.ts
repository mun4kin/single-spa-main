import { registerApplication } from 'single-spa';
import * as Activity from './activityFns';
import { prefix } from "./activityFns";

export const registerApps = () => {
	// registerApplication('navbar', () => import('./apps/navbarApp/navbarApp-lifecycle'), Activity.navbar)

	registerApplication({
		name:'navbar',
		app:()=>import('./apps/navbarApp/navbarApp-lifecycle' as any),
		activeWhen:Activity.navbar,
	})

	// registerApplication('worktime', () => import('worktime/dist/single-spa-worktime'as any),
	// 	(location: Location) => prefix(location, 'worktime'))
	registerApplication({
		name:'worktime',
		app:()=>import('worktime/_worktime/dist/single-spa-worktime' as any),
		activeWhen:(location: Location) => prefix(location, 'worktime')
	})

	//
	// registerApplication('app2', () => import('./apps/app2/app2-lifecycle'), Activity.app2)
}