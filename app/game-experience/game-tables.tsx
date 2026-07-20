import Link from "next/link";

type Game = {
  name: string;
  type: string;
  time: string;
  logo?: string;
  logoText?: string;
  note?: string;
};

const simulationGames: Game[] = [
  { name: "星露谷物语", type: "农场与生活模拟", time: "400h（完美档）", logo: "/game-logos/stardew-valley.jpg" },
  { name: "集合啦！动物森友会", type: "社区与生活模拟", time: "200h", logo: "/game-logos/animal-crossing.jpg" },
  { name: "模拟人生 4", type: "人生模拟", time: "120h", logo: "/game-logos/the-sims-4.jpg" },
  { name: "波西亚时光", type: "工坊经营与角色养成", time: "50h", logo: "/game-logos/my-time-at-portia.jpg" },
  { name: "江南百景图", type: "古风城市经营", time: "50h", logo: "/game-logos/jiangnan.jpg" },
  { name: "城市：天际线", type: "城市建设", time: "40h", logo: "/game-logos/cities-skylines.jpg" },
  { name: "双点医院", type: "设施经营", time: "20h", logo: "/game-logos/two-point-hospital.jpg" },
  { name: "过山车之星", type: "乐园经营", time: "15h", logo: "/game-logos/planet-coaster.jpg" },
  { name: "欧洲卡车模拟 2", type: "职业模拟", time: "30h", logo: "/game-logos/euro-truck-simulator-2.jpg" },
];

const otherGames: Game[] = [
  { name: "英雄联盟", type: "MOBA（端游及手游）", time: "累计 2000h+", logo: "/game-logos/league-of-legends.jpg" },
  { name: "金铲铲之战", type: "自走棋策略", time: "150h", logo: "/game-logos/golden-spatula.jpg" },
  { name: "炉石传说", type: "卡牌策略", time: "2 年", logo: "/game-logos/hearthstone.png" },
  { name: "哈迪斯", type: "Roguelike 动作", time: "60h", logo: "/game-logos/hades.jpg" },
  {
    name: "明日方舟",
    type: "塔防与角色养成",
    time: "开服至今，约 7 年",
    logo: "/game-logos/arknights.jpg",
    note: "集成战略：全模式最高难度、全结局通关",
  },
  { name: "原神", type: "开放世界 RPG", time: "1.0–4.3 版本", logo: "/game-logos/genshin-impact.jpg" },
  { name: "Fate/Grand Order", type: "回合制角色养成", time: "4 年", logo: "/game-logos/fate-grand-order.jpg" },
  { name: "火焰纹章：风花雪月", type: "战棋策略 RPG", time: "200h", logo: "/game-logos/fire-emblem-three-houses.jpg" },
  { name: "饥荒", type: "生存建造", time: "90h", logo: "/game-logos/dont-starve.jpg" },
  { name: "苏丹的游戏", type: "卡牌策略与资源管理", time: "80h", logo: "/game-logos/sultans-game.jpg" },
  { name: "泰拉瑞亚", type: "沙盒冒险", time: "50h", logo: "/game-logos/terraria.jpg" },
  { name: "公主连结 Re:Dive", type: "二次元角色养成", time: "1 年", logo: "/game-logos/princess-connect.jpg" },
  { name: "剑网 3", type: "武侠 MMORPG", time: "300h", logo: "/game-logos/jx3.jpg" },
  { name: "海市蜃楼之馆", type: "视觉小说", time: "全通", logo: "/game-logos/fata-morgana.jpg" },
  { name: "艾迪芬奇的记忆", type: "叙事探索", time: "全通", logo: "/game-logos/edith-finch.jpg" },
  { name: "代号鸢（如鸢）", type: "女性向剧情养成", time: "双区，2 年", logo: "/game-logos/ruyuan.jpg" },
  { name: "食物语", type: "女性向角色养成", time: "1 年", logo: "/game-logos/food-fantasy.jpg" },
  {
    name: "日系乙女游戏",
    type: "多线路叙事与角色关系",
    time: "全通 20 部+",
    logoText: "日乙",
    note: "全通：《JackJeanne》《终远的维尔修》《共生丘比特》《剑与君舞》《源平飞花梦想》《虔诚之花的晚钟》《恶意x项圈》《天狱乱斗》《终焉之一秒》《奥林匹亚的晚宴》《全员恶人》《九人安息》《失忆症》《百密一疏少女心》《薄樱鬼》《茉莉花之炯》《花合朔》《心跳回忆》",
  },
  { name: "恋与深空", type: "乙女恋爱", time: "1 年", logo: "/game-logos/love-and-deepspace.jpg" },
  { name: "世界之外", type: "乙女恋爱", time: "1 年", logo: "/game-logos/beyond-the-world.jpg" },
];

function GameTable({
  games,
  title,
}: {
  games: Game[];
  title: string;
}) {
  const tableId = title === "模拟经营" ? "simulation" : "other";

  return (
    <section className="game-table-panel" aria-labelledby={`${tableId}-table-title`}>
      <header className="game-table-panel-header">
        <div>
          <h2 id={`${tableId}-table-title`}>{title}</h2>
        </div>
        <span>{String(games.length).padStart(2, "0")} GAMES</span>
      </header>

      <table className="game-list-table">
        <colgroup>
          <col className="game-list-icon-column" />
          <col />
          <col className="game-list-time-column" />
        </colgroup>
        <thead>
          <tr>
            <th aria-label="游戏图标" scope="col" />
            <th scope="col">游戏名称</th>
            <th scope="col">游玩时长</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => {
            const detailId = `${tableId}-game-detail-${index}`;

            return (
              <tr
                aria-describedby={detailId}
                className="game-list-row"
                key={game.name}
                tabIndex={0}
              >
                <td>
                  <span className="game-list-logo" aria-hidden="true">
                    {game.logo ? (
                      <img src={game.logo} alt="" />
                    ) : (
                      <span>{game.logoText}</span>
                    )}
                  </span>
                </td>
                <th className="game-list-name" scope="row">
                  {game.name}
                  <span className="game-table-tooltip" id={detailId} role="tooltip">
                    <strong>{game.type}</strong>
                    {game.note && <span>{game.note}</span>}
                  </span>
                </th>
                <td className="game-list-time">{game.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export function GameTables() {
  return (
    <main className="experience-page experience-page--tables">
      <nav className="table-page-nav" aria-label="页面导航">
        <Link className="back-link" href="/">
          ← 返回
        </Link>
        <Link className="site-mark" href="/">
          criyz
        </Link>
      </nav>

      <header className="table-page-header">
        <div>
          <p>PLAY HISTORY / 01</p>
          <h1>游戏经历</h1>
        </div>
        <p className="table-page-note">悬浮鼠标于任意一行，可查看游戏类型与备注。</p>
      </header>

      <div className="game-tables-grid">
        <GameTable
          games={simulationGames}
          title="模拟经营"
        />
        <GameTable
          games={otherGames}
          title="其他游戏"
        />
      </div>

      <footer className="table-page-footer">
        <span>criyz · game archive</span>
        <span>树鱼</span>
      </footer>
    </main>
  );
}
