"use strict";

import Color from "../models/chess/chess/color";
import State from "../models/chess/state";
import PlayerType from "../models/chess/type";
import Game from "../models/chess/game";
import Player from "../models/chess/player";

import Setting from "../setting";

export default class ChessController {

	constructor($scope) {
		$scope.games = [];

		$scope.createGame = function () {
			var game = new Game();

			var redPlayer = new Player("Local Player 1", Color.RED, PlayerType.LOCAL);
			redPlayer.game = game;
			game.redPlayer = redPlayer;

			var blackPlayer = new Player("Local Player 2", Color.BLACK, PlayerType.LOCAL);
			blackPlayer.game = game;
			game.blackPlayer = blackPlayer;

			game.init();

			//game.addLogger(ConsoleLogger);
			$scope.games.push(game);
		};

		$scope.chessX = function (chess) {
			return Setting.offsetX + chess.x * Setting.gridSize;
		};

		$scope.chessY = function (chess) {
			return Setting.offsetY + chess.y * Setting.gridSize;
		};

		$scope.canGoX = function (chess) {
			return Setting.offsetX + (chess.x - 0.5) * Setting.gridSize;
		};

		$scope.canGoY = function (chess) {
			return Setting.offsetY + (chess.y - 0.5) * Setting.gridSize;
		};

		$scope.canAttackX = function (chess) {
			return Setting.offsetX + (chess.x - 0.5) * Setting.gridSize;
		};

		$scope.canAttackY = function (chess) {
			return Setting.offsetY + (chess.y - 0.5) * Setting.gridSize;
		};

		$scope.select = function (game, chess) {
			game.currentPlayer.select(chess);
		};

		$scope.move = function (game, position) {
			game.currentPlayer.move(position);
		};

		$scope.attack = function (game, position) {
			game.currentPlayer.attack(position);
		};

		var colors = {
			"1": "red",
			"0": "",
			"-1": "black"
		};

		var types = ["blank", "soldier", "cannon", "chariot", "horse", "staff", "guard", "general"];

		$scope.symbol = function (chess) {
			return "#" + colors[chess.color] + "-" + types[chess.type];
		};
	}
}

ChessController.$inject = ["$scope"];