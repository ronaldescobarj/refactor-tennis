var TennisGame2 = function(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;

    this.player1LiteralScore = "";
    this.player2LiteralScore = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var literalScore = "";

    if (this.player1Score === this.player2Score && this.player1Score < 3) {
        if (this.player1Score === 0)
            literalScore = "Love";
        if (this.player1Score === 1)
            literalScore = "Fifteen";
        if (this.player1Score === 2)
            literalScore = "Thirty";
        literalScore += "-All";
    }
    if (this.player1Score === this.player2Score && this.player1Score > 2)
        literalScore = "Deuce";

    if (this.player1Score > 0 && this.player2Score === 0) {
        if (this.player1Score === 1)
            this.player1LiteralScore = "Fifteen";
        if (this.player1Score === 2)
            this.player1LiteralScore = "Thirty";
        if (this.player1Score === 3)
            this.player1LiteralScore = "Forty";

        this.player2LiteralScore = "Love";
        literalScore = this.player1LiteralScore + "-" + this.player2LiteralScore;
    }
    if (this.player2Score > 0 && this.player1Score === 0) {
        if (this.player2Score === 1)
            this.player2LiteralScore = "Fifteen";
        if (this.player2Score === 2)
            this.player2LiteralScore = "Thirty";
        if (this.player2Score === 3)
            this.player2LiteralScore = "Forty";

        this.player1LiteralScore = "Love";
        literalScore = this.player1LiteralScore + "-" + this.player2LiteralScore;
    }

    if (this.player1Score > this.player2Score && this.player1Score < 4) {
        if (this.player1Score === 2)
            this.player1LiteralScore = "Thirty";
        if (this.player1Score === 3)
            this.player1LiteralScore = "Forty";
        if (this.player2Score === 1)
            this.player2LiteralScore = "Fifteen";
        if (this.player2Score === 2)
            this.player2LiteralScore = "Thirty";
        literalScore = this.player1LiteralScore + "-" + this.player2LiteralScore;
    }
    if (this.player2Score > this.player1Score && this.player2Score < 4) {
        if (this.player2Score === 2)
            this.player2LiteralScore = "Thirty";
        if (this.player2Score === 3)
            this.player2LiteralScore = "Forty";
        if (this.player1Score === 1)
            this.player1LiteralScore = "Fifteen";
        if (this.player1Score === 2)
            this.player1LiteralScore = "Thirty";
        literalScore = this.player1LiteralScore + "-" + this.player2LiteralScore;
    }

    if (this.player1Score > this.player2Score && this.player2Score >= 3) {
        literalScore = "Advantage player1";
    }

    if (this.player2Score > this.player1Score && this.player1Score >= 3) {
        literalScore = "Advantage player2";
    }

    if (this.player1Score >= 4 && this.player2Score >= 0 && (this.player1Score - this.player2Score) >= 2) {
        literalScore = "Win for player1";
    }
    if (this.player2Score >= 4 && this.player1Score >= 0 && (this.player2Score - this.player1Score) >= 2) {
        literalScore = "Win for player2";
    }
    return literalScore;
};

TennisGame2.prototype.setPlayer1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.increasePlayer1ScoreBy1();
    }
};

TennisGame2.prototype.setPlayer2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.increasePlayer2ScoreBy1();
    }
};

TennisGame2.prototype.increasePlayer1ScoreBy1 = function() {
    this.player1Score++;
};

TennisGame2.prototype.increasePlayer2ScoreBy1 = function() {
    this.player2Score++;
};

TennisGame2.prototype.increaseScoreBy1 = function(player) {
    if (player === "player1")
        this.increasePlayer1ScoreBy1();
    else
        this.increasePlayer2ScoreBy1();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
