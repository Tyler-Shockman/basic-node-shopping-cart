function disableLogging() {
    global.console.log = () => {}
}

disableLogging()
