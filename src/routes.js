export default class Routes {
    static apply(app) {
        app.get('/test', (req, res) => {
            res.send("Hello World!")
        })
    }
}
