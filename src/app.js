import angular from "angular";

import ChessController from "./controllers/chess";
import ChessBoardController from "./controllers/chessboard";

angular.module("chess", [])
	.controller("ChessController", ChessController)
	.controller("ChessBoardController", ChessBoardController);