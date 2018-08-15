module.exports = {
  base: '/commonmark-vuepress/',
  title: "CommonMark Spec",
  themeConfig: {
    repo: 'https://github.com/yangjunjun/commonmark-vuepress',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Original Site', link: 'http://spec.commonmark.org/0.28/' },
      { text: 'Original Github', link: 'https://github.com/commonmark/CommonMark' },
    ],
    sidebar: [
      ['/', '0 Home'],
      ['/1.Introduction.md', '1 Introduction'],
      ['/2.Preliminaries.md', '2 Preliminaries'],
      ['/3.Blocks_and_inlines.md', '3 Blocks and inlines'],
      ['/4.Leaf_blocks.md', '4 Leaf blocks'],
      ['/5.Container_blocks.md', '5 Container blocks'],
      ['/6.Inlines.md', '6 Inlines'],
      ['/7.Appendix_A_parsing_strategy.md', 'Appendix: A parsing strategy'],
    ]    
  }    
};
