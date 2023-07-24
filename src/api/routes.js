import CartController from "./controllers/cart-controller.js"
import ItemsController from "./controllers/items-controller.js"

export default class Routes {
    static applyAll(app) {
        console.log('Applying all routes.')
        Routes.applyItemRoutes(app)
        Routes.applyCartRoutes(app)
    }

    static applyItemRoutes(app) {
        console.log('Applying item routes.')
        app.get('/items', ItemsController.getAllItems)
        app.get('/items/categories', ItemsController.getItemCategories)
    }

    static applyCartRoutes(app) {
        console.log('Applying cart routes.')
        app.get('/cart/:cartId', CartController.getCart)
        app.get('/cart/:cartId/add/:itemId', CartController.addItemToCart)
        app.get('/cart/:cartId/clear', CartController.clearCart)
    }
}
