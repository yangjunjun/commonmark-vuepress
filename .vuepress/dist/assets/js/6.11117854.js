(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{169:function(e,n,t){"use strict";t.r(n);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"blocks-and-inlines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blocks-and-inlines","aria-hidden":"true"}},[e._v("#")]),e._v(" Blocks and inlines")]),e._v(" "),t("p",[e._v("We can think of a document as a sequence of\n"),t("a",{attrs:{href:"@"}},[e._v("blocks")]),e._v("---structural elements like paragraphs, block\nquotations, lists, headings, rules, and code blocks.  Some blocks (like\nblock quotes and list items) contain other blocks; others (like\nheadings and paragraphs) contain "),t("a",{attrs:{href:"@"}},[e._v("inline")]),e._v(" content---text,\nlinks, emphasized text, images, code spans, and so on.")]),e._v(" "),t("h2",{attrs:{id:"precedence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#precedence","aria-hidden":"true"}},[e._v("#")]),e._v(" Precedence")]),e._v(" "),t("p",[e._v("Indicators of block structure always take precedence over indicators\nof inline structure.  So, for example, the following is a list with\ntwo items, not a list with one item containing a code span:")]),e._v(" "),t("div",{staticClass:"language-example extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- `one\n- two`\n.\n<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n")])])]),t("p",[e._v("This means that parsing can proceed in two steps:  first, the block\nstructure of the document can be discerned; second, text lines inside\nparagraphs, headings, and other block constructs can be parsed for inline\nstructure.  The second step requires information about link reference\ndefinitions that will be available only at the end of the first\nstep.  Note that the first step requires processing lines in sequence,\nbut the second can be parallelized, since the inline parsing of\none block element does not affect the inline parsing of any other.")]),e._v(" "),t("h2",{attrs:{id:"container-blocks-and-leaf-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container-blocks-and-leaf-blocks","aria-hidden":"true"}},[e._v("#")]),e._v(" Container blocks and leaf blocks")]),e._v(" "),t("p",[e._v("We can divide blocks into two types:\n"),t("a",{attrs:{href:"@"}},[e._v("container blocks")]),e._v(",\nwhich can contain other blocks, and "),t("a",{attrs:{href:"@"}},[e._v("leaf blocks")]),e._v(",\nwhich cannot.")])])}],!1,null,null,null);s.options.__file="3.Blocks_and_inlines.md";n.default=s.exports}}]);