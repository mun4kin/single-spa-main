import { registerApplication } from 'single-spa';
import { locationContainsPath } from './locationContainsPath';

const user = {
  id: '147839',
  fullName: 'Булкина Оксана',
  firstName: 'Оксана',
  secondName: 'Булкина',
  middleName: '',
  photo:
    'http://SAPD-HCM-AP01.vtb24.ru:8000/sap/bc/contentserver/100?get&pVersion=0045&contRep=MIME&docId=D48560E1B5B391DC5E10000000A42172E48560E1C5B391DC5E10000000A42172E&compId=male.jpg&accessMode=r&authId=CN%3DHRD&expiration=20201119084452&secKey=MIH4BgkqhkiG9w0BBwKggeowgecCAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBxzCBxAIBATAaMA4xDDAKBgNVBAMTA0hSRAIICiAZBCkJQwEwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTIwMTExOTA2NDQ1MlowIwYJKoZIhvcNAQkEMRYEFKCQcTeKBUiTEUD99nDnAD0aJX7hMAkGByqGSM44BAMELjAsAhR9x6bwjqtMnhFetwxgeeixG%2BKOUgIUc77CCl5qTS6UefSN9EBLSCdPlwA%3D',
  position: 'cпециалист алист',
  department: 'Департамент операционной поддержки бизнеса',
  departmentPath: ''
};

export const registerApps = () => {
  
  registerApplication({
    name: 'navbar',
    app: () => import('../apps/navbarApp/navbarApp-lifecycle' as string),
    activeWhen: () => true,
  })
  
  registerApplication({
    name: 'worktime',
    app: () => import('worktime/_worktime/dist/single-spa-worktime' as string),
    activeWhen: (location: Location) => locationContainsPath(location, '#/worktime'),
    customProps: {
      user,
      basename: '/#/worktime'
    }
  })
}
