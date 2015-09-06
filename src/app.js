import angular from "angular";

import ChessMan from "./models/chess/chessman";
import General from "./models/chess/general";
import Guard from "./models/chess/guard";
import Staff from "./models/chess/staff";
import Horse from "./models/chess/horse";
import Chariot from "./models/chess/chariot";
import Cannon from "./models/chess/cannon";
import Solider from "./models/chess/soldier";


import Factory from "./models/chess/factory";

import Player from "./models/chess/player";


import ChessController from "./controllers/chess";
import ChessBoardController from "./controllers/chessboard";

angular.module("chess", [])
	.controller("ChessController", ChessController)
	.controller("ChessBoardController", ChessBoardController);