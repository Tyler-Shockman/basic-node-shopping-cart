import CartController from "./controllers/cart-controller.js"
import ItemsController from "./controllers/items-controller.js"

export default class Routes {
    static applyAll(app) {
        Routes.applyItemRoutes(app)
        Routes.applyCartRoutes(app)
    }

    static applyItemRoutes(app) {
        app.get('/items', ItemsController.getAllItems)
        app.get('/items/categories', ItemsController.getItemCategories)
    }

    static applyCartRoutes(app) {
        app.get('/cart/:cartId', CartController.getCart)
        app.get('/cart/:cartId/add/:itemId', CartController.addItemToCart)
        app.get('/cart/:cartId/clear', CartController.clearCart)
    }
}
