export function prefix(location: Location, ...prefixes: string[]) {
    return prefixes.some(
      prefix => (
        location.href.indexOf(`${location.origin}/${prefix}`) !== -1
      )
    )
  }
  
  export function worktime(location: Location) {
    return prefix(location, 'worktime')
  }
  
  export function app2(location: Location) {
    return prefix(location, 'app2')
  }

  export const navbar = (location: Location) => true;