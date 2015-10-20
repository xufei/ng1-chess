import Color from "../models/chess/chess/color";
import State from "../models/chess/state";
import PlayerType from "../models/chess/type";
import Game from "../models/chess/game";
import Player from "../models/chess/player";

import Setting from "../setting";

export default class ChessController {

	constructor($scope) {
		$scope.games = [];

		$scope.createGame = () => {
			let game = new Game();

			let redPlayer = new Player("Local Player 1", Color.RED, PlayerType.LOCAL);
			redPlayer.game = game;
			game.redPlayer = redPlayer;

			let blackPlayer = new Player("Local Player 2", Color.BLACK, PlayerType.LOCAL);
			blackPlayer.game = game;
			game.blackPlayer = blackPlayer;

			game.init();

			//game.addLogger(ConsoleLogger);
			$scope.games.push(game);
		};

		$scope.chessX = chess => (Setting.offsetX + chess.x * Setting.gridSize);
		$scope.chessY = chess => (Setting.offsetY + chess.y * Setting.gridSize);

		$scope.canGoX = chess => (Setting.offsetX + (chess.x - 0.5) * Setting.gridSize);
		$scope.canGoY = chess => (Setting.offsetY + (chess.y - 0.5) * Setting.gridSize);

		$scope.canAttackX = chess => (Setting.offsetX + (chess.x - 0.5) * Setting.gridSize);
		$scope.canAttackY = chess => (Setting.offsetY + (chess.y - 0.5) * Setting.gridSize);
		
		$scope.select = (game, chess) => game.currentPlayer.select(chess);
		$scope.move = (game, position) => game.currentPlayer.move(position);
		$scope.attack = (game, position) => game.currentPlayer.attack(position);

		let colors = {
			"1": "red",
			"0": "",
			"-1": "black"
		};

		let types = ["blank", "soldier", "cannon", "chariot", "horse", "staff", "guard", "general"];

		$scope.symbol = chess => ("#" + colors[chess.color] + "-" + types[chess.type]);
	}
}

ChessController.$inject = ["$scope"];