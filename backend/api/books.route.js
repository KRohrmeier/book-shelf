import { Router } from "express";
import BooksCtrl from "./books.controller";
import CommentsCtrl from "./comments.controller";

const router = new Router();

// associate put, delete, and get(id)
router.route("/").get(BooksCtrl.apiGetBooks);
router.route("/search").get(BooksCtrl.apiSearchBooks);
// router.route("/facet-search").get(MoviesCtrl.apiFacetedSearch);
// router.route("/id/:id").get(MoviesCtrl.apiGetMovieById)
// router.route("/config-options").get(MoviesCtrl.getConfig)

router
  .route("/book")
  .post(CommentsCtrl.apiPostBook)
  .put(CommentsCtrl.apiUpdateBook)
  .delete(CommentsCtrl.apiDeleteBook)

export default router;
