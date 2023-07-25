function disableLogging() {
    global.console.log = () => {}
    global.console.info = () => {}
    global.console.error = () => {}
    global.console.error = () => {}
    global.console.trace = () => {}

}

disableLogging()
