const show = true
const debugLog = console.log.bind(console)
const debugGroup = console.group.bind(console)
const debugGropEnd = console.groupEnd.bind(window)

export function log(item: any, component: string, desc?: string) {
    if (show && toggleEnv(component)) {
        debugGroup(component + ' ' + (desc ? desc : ''))
        debugLog(item)
        console.trace(item)
        debugGropEnd()
    }
}

const toggleEnv = (component: string): boolean | undefined => {
    switch (component) {
        case 'App':
            return true
        case 'Loader':
            return true
        case 'firebaseOctopus':
            return true
        case 'хуй':
            return true
        default:
            return true
    }
}
