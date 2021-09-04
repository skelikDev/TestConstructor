const show = true
const offComponents = ['App', 'Loader']

export const debug = {
    i(item: {} | {}[], component: string, desc = '') {
        if (show && toggleEnv(component)) {
            console.groupCollapsed('%c%s', infoStyle, `${component} ${desc}`)
            eachParamLog(item)

            console.groupEnd()
        }
    },
    d(item: any, component: string, desc = '') {
        if (show && toggleEnv(component)) {
            console.groupCollapsed(
                '%c%s',
                dangerousStyle,
                `${component} ${desc}`
            )
            eachParamLog(item)
            console.groupEnd()
        }
    },
    w(item: any, component: string, desc = '') {
        if (show && toggleEnv(component)) {
            console.groupCollapsed('%c%s', warnStyle, `${component} ${desc}`)
            eachParamLog(item)
            console.groupEnd()
        }
    },
}

function eachParamLog(item: {} | {}[]) {
    if (Array.isArray(item)) {
        item.forEach((el) => console.info(el))
    } else {
        console.info(item)
    }
}

const toggleEnv = (component: string): boolean | undefined => {
    if (!offComponents.includes(component)) {
        return true
    }
}

const warnStyle = `
background-color: rgba(255, 235, 163, 1);
border-radius: 5px;
padding: 1px;
padding-left: 5px;
padding-right: 5px;
`

const dangerousStyle = `
background-color: rgba(255, 153, 153, 1);
border: 1px solid #FF0E0E;
border-radius: 5px;
padding: 1px;
padding-left: 5px;
padding-right: 5px;
`
const infoStyle = `
background-color: rgba(131, 165, 255, 1);
border-radius: 5px;
padding: 1px;
padding-left: 5px;
padding-right: 5px;
`
