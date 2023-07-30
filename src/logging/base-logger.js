class BaseLogger {
    log(message) {
        console.log(message)
    }

    critical(message) {
        console.error(message)
    }

    error(message) {
        console.error(message)
    }

    warn(message) {
        console.warn(message)
    }

    notice(message) {
        console.notice(message)
    }

    info(message) {
        console.info(message)
    }

    debug(message) {
        console.debug(message)
    }

    trace(message) {
        console.trace(message)
    }
}

export const baseLogger = new BaseLogger()
