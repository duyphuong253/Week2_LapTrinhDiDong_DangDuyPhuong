const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

    //1. Tạo mảnh cầu thủ cho mỗi đội
    const [players1, players2] = game.players;

    console.log("Player of team 1: ", players1);
    console.log("Player of team 2: ", players2);

    //2.a) Tạo biến "gk" cho đội 1 "Bayern Munich"
    const gk = players1[0];
    console.log("GK of Bayern Munich: ", gk);
    
    //2.b) slice() dùng để cắt các phần tử trong mảng theo mong muốn 
    // Mảng ("fieldPlayers") chứa tất cả 10 tên còn lại
    const fieldPlayers = players1.slice(1, players1.length);
    console.log("All the remaining 10 field players of Bayern Munich", fieldPlayers);

    //3. Tạo một mảng 'allPlayers' chứa tất cả người chơi của cả hai đội (22
    //     người chơi)
    // concat() dùng để nối 2 mảng với nhau
    const allPlayers = players1.concat(players2);
    console.log("All players of both teams (22 players)", allPlayers);

    //  4.   Trong trận đấu, Bayern Munich (đội 1) sử dụng 3 cầu thủ dự bị. Vì vậy hãy tạo một
    // mảng mới ('players1Final') chứa tất cả người chơi team1 ban đầu cộng thêm
    // 'Thiago', 'Coutinho' và 'Perisic'
    const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
    console.log("All the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'", players1Final);

    // 5. Dựa trên đối tượng game.odds, tạo một biến cho mỗi số lẻ (được gọi là
    // 'team1', 'hòa' và 'team2')
    const team1 = game.odds.team1;
    const draw = game.odds.x;   // 'x' is the draw
    const team2 = game.odds.team2;

    console.log("Team 1 odds:", team1); // 1.33
    console.log("Draw odds:", draw);    // 3.25
    console.log("Team 2 odds:", team2); // 6.5

    //6. Viết hàm ('printGoals') nhận số lượng người chơi tùy ý
    // tên (không phải mảng) và in từng tên vào bảng điều khiển, cùng với
    // tổng số bàn thắng được ghi (số tên cầu thủ được chuyền vào)
    function printGoals(...players) {
        // In từng tên cầu thủ
        players.forEach(player => {
            console.log(player);
        });
        
        // In tổng số bàn thắng được ghi
        console.log(`Total goals scored: ${players.length}`);
    }
    // Ví dụ sử dụng hàm
    printGoals('Lewandowski', 'Gnarby', 'Hummels');
    //7. Đội nào có tỷ lệ cược thấp hơn sẽ có nhiều khả năng thắng hơn. In ra bàn điều khiển
    // đội có nhiều khả năng giành chiến thắng hơn mà không cần sử dụng câu lệnh if/else hoặc câu lệnh ba ngôi
    // nhà điều hành.
    // Tạo một đối tượng để ánh xạ tỷ lệ cược với đội
    const oddsToTeam = {
        [game.odds.team1]: game.team1,
        [game.odds.team2]: game.team2
    };
    
    // Tìm tỷ lệ cược thấp nhất
    const lowestOdd = Math.min(game.odds.team1, game.odds.team2);
    
    // In ra đội có tỷ lệ cược thấp nhất
    console.log("The team with the lower", oddsToTeam[lowestOdd]);
    