angular.module('myapp')
    .controller('indexCtrl',function($scope){
        $scope.items=[
            {info:{username:"xxx",txt:'吃瓜群众前排围观111',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观222',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观333',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观444',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观555',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观666',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观777',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观888',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观999',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观000',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观876',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观76867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观67867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观8768',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观7686',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观67868',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观86786',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观78',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观876',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观678',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观876',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观68',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观68',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观8',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观86',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观68',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观678',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观867',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观87',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观678',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观678',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观876',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观86',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},
            {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'}, {info:{username:"xxx",txt:'吃瓜群众前排围观',time:"1481960738773"}, agree:54354, disagree:534543, agreesup:true, disagreesup:true,imgsrc:'images/logo.png'},

        ]














        $scope.total=546454;
        $scope.join=true;
        $scope.txt='';
        $scope.username='';
        $scope.send=function(){
            var oDate= new Date();
            $scope.Date=oDate.getTime();
            console.log($scope.Date);
            var newInfo={
                info:{username:$scope.username,txt:$scope.txt,time:$scope.Date},
                agree:0,
                disagree:0,
                agreesup:true,
                disagreesup:true,
                imgsrc:'images/logo.png'
            }
            $scope.pageNum=1;
            $scope.items.unshift(newInfo);
            $scope.txt='';
            $scope.username='';
            $scope.join?$scope.total++:'';
            $scope.join=false;
            $scope.sendBox=false;
        }
        $scope.sendBox=false;
        $scope.sendClick=function(){
            $scope.sendBox?$scope.sendBox=false:$scope.sendBox=true;
        }
        $scope.agree=function(item){
            if(item.agreesup) {
                item.agree += 1;
                item.agreesup = false;
            }
            $scope.join?$scope.total++:'';
            $scope.join=false;
        }
        $scope.disagree=function(item){
            if(item.disagreesup) {
                item.disagree += 1;
                item.disagreesup = false;
            }
            $scope.join?$scope.total++:'';
            $scope.join=false;
        }
        $scope.pageNum=1;

        $scope.pageSize=8;

        $scope.page=function(p){
            angular.isNumber(p)?$scope.pageNum=p:null;

        }

        $scope.pre=function(){
            $scope.pageNum-=1;
            if($scope.pageNum<=1){
                $scope.pageNum=1;
            }
        }

        $scope.next=function(){
            $scope.pageNum+=1;
            if($scope.pageNum>=Math.ceil($scope.items.length/$scope.pageSize)){
                $scope.pageNum=Math.ceil($scope.items.length/$scope.pageSize);
            }
        }


    })