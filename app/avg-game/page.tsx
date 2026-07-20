import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "文字互动游戏",
  description: "criyz 的已上线文字互动游戏《灯花结》。",
};

const developmentItems = [
  {
    title: "内容与开发",
    content:
      "独立创作剧情文本 9 万余字，基于易次元 JS 编辑器完成游戏逻辑配置、功能开发及视听演出设计，并使用 Photoshop 完成界面与美术素材处理。",
  },
  {
    title: "系统设计",
    content:
      "以府宅与城镇双层大地图为核心，设计角色养成与探索系统，涵盖主控性格、能力属性、角色好感及事件触发等成长维度。",
  },
  {
    title: "分支叙事",
    content:
      "围绕玩家代入感设计多层剧情分支，根据角色好感、重大选择及主控人格树动态判定剧情走向与结局。",
  },
  {
    title: "角色定制",
    content:
      "设计主控形象选择与换装系统，支持服装、表情等视觉内容切换，强化角色塑造与个性化体验。",
  },
  {
    title: "资源管理",
    content:
      "对接画师完成立绘、CG、场景、Q 版等美术资源的需求拆解、约稿沟通与验收，累计推进约稿 100 余次。",
  },
  {
    title: "上线成果",
    content:
      "作品上线半年累计售出 1000 余份，获得 300 余条有效评论，玩家评价基本保持正向。",
  },
];

export default function AvgGame() {
  return (
    <main className="experience-page interactive-page">
      <nav className="table-page-nav" aria-label="页面导航">
        <Link className="back-link" href="/">
          ← 返回
        </Link>
        <Link className="site-mark" href="/">
          criyz
        </Link>
      </nav>

      <section className="interactive-project" aria-labelledby="project-title">
        <div className="interactive-project-main">
          <p className="interactive-project-index">01 / 易次元签约作者</p>
          <h2 id="project-title">《灯花结》</h2>
          <p>
            独立策划并制作架空古代题材角色扮演、恋爱模拟类 ACG
            文字游戏，负责产品策划、剧本创作、程序开发、演出设计、美术统筹及上线运营等完整流程。
          </p>
        </div>

        <div className="interactive-project-side">
          <a
            className="interactive-project-link"
            href="https://avg.163.com/game/detail/1517726"
            rel="noreferrer"
            target="_blank"
          >
            前往作品 <span aria-hidden="true">↗</span>
          </a>
          <dl>
            <div>
              <dt>题材</dt>
              <dd>架空古代</dd>
            </div>
            <div>
              <dt>类型</dt>
              <dd>角色扮演 / 恋爱模拟</dd>
            </div>
            <div>
              <dt>平台</dt>
              <dd>易次元</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="interactive-development" aria-labelledby="development-title">
        <header className="interactive-development-header">
          <h2 id="development-title">制作记录</h2>
          <span>{String(developmentItems.length).padStart(2, "0")} ITEMS</span>
        </header>

        <div className="interactive-development-table" role="table" aria-label="灯花结制作记录">
          <div className="interactive-development-table-head" role="row">
            <span role="columnheader">模块</span>
            <span role="columnheader">内容</span>
          </div>
          {developmentItems.map((item, index) => (
            <article className="interactive-development-row" key={item.title} role="row">
              <p role="cell">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </p>
              <p role="cell">{item.content}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="table-page-footer">
        <span>criyz · interactive fiction</span>
        <span>树鱼</span>
      </footer>
    </main>
  );
}
