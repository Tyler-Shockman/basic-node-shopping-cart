import CartController from "./controllers/cart-controller.js"
import CategoryController from "./controllers/category-controller.js"
import ItemsController from "./controllers/items-controller.js"
import express from 'express';

export const routes = express.Router()

routes.get('/items', ItemsController.getAllItems)
routes.get('/items/:itemId', ItemsController.getItem)

routes.get('/categories', CategoryController.getAllCategories)
routes.get('/categories/:categoryId', CategoryController.getCategory)

routes.get('/cart/:cartId', CartController.getCart)
routes.post('/cart', CartController.createNewCart)
routes.patch('/cart/:cartId/add/:itemId', CartController.addItemToCart)
routes.patch('/cart/:cartId/reduce/:itemId', CartController.reduceItemInCart)
routes.delete('/cart/:cartId/remove/:itemId', CartController.removeItemFromCart)
routes.patch('/cart/:cartId/empty', CartController.emptyCart)
routes.delete('/cart/:cartId', CartController.deleteCart)
