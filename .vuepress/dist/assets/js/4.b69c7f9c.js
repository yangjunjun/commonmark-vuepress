(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("Markdown is a plain text format for writing structured documents,\nbased on conventions for indicating formatting in email\nand usenet posts.  It was developed by John Gruber (with\nhelp from Aaron Swartz) and released in 2004 in the form of a\n"),n("a",{attrs:{href:"http://daringfireball.net/projects/markdown/syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("syntax description"),n("OutboundLink")],1),t._v("\nand a Perl script ("),n("code",[t._v("Markdown.pl")]),t._v(") for converting Markdown to\nHTML.  In the next decade, dozens of implementations were\ndeveloped in many languages.  Some extended the original\nMarkdown syntax with conventions for footnotes, tables, and\nother document elements.  Some allowed Markdown documents to be\nrendered in formats other than HTML.  Websites like Reddit,\nStackOverflow, and GitHub had millions of people using Markdown.\nAnd Markdown started to be used beyond the web, to author books,\narticles, slide shows, letters, and lecture notes.")]),t._v(" "),n("p",[t._v("What distinguishes Markdown from many other lightweight markup\nsyntaxes, which are often easier to write, is its readability.\nAs Gruber writes:")]),t._v(" "),n("blockquote",[n("p",[t._v("The overriding design goal for Markdown's formatting syntax is\nto make it as readable as possible. The idea is that a\nMarkdown-formatted document should be publishable as-is, as\nplain text, without looking like it's been marked up with tags\nor formatting instructions.\n("),n("a",{attrs:{href:"http://daringfireball.net/projects/markdown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://daringfireball.net/projects/markdown/"),n("OutboundLink")],1),t._v(")")])]),t._v(" "),n("p",[t._v("The point can be illustrated by comparing a sample of\n"),n("a",{attrs:{href:"http://www.methods.co.nz/asciidoc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AsciiDoc"),n("OutboundLink")],1),t._v(" with\nan equivalent sample of Markdown.  Here is a sample of\nAsciiDoc from the AsciiDoc manual:")]),t._v(" "),t._m(2),n("p",[t._v("And here is the equivalent in Markdown:")]),t._v(" "),t._m(3),n("p",[t._v("The AsciiDoc version is, arguably, easier to write. You don't need\nto worry about indentation.  But the Markdown version is much easier\nto read.  The nesting of list items is apparent to the eye in the\nsource, not just in the processed document.")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("John Gruber's "),n("a",{attrs:{href:"http://daringfireball.net/projects/markdown/syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("canonical description of Markdown's\nsyntax"),n("OutboundLink")],1),t._v("\ndoes not specify the syntax unambiguously.  Here are some examples of\nquestions it does not answer:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("How much indentation is needed for a sublist?  The spec says that\ncontinuation paragraphs need to be indented four spaces, but is\nnot fully explicit about sublists.  It is natural to think that\nthey, too, must be indented four spaces, but "),n("code",[t._v("Markdown.pl")]),t._v(' does\nnot require that.  This is hardly a "corner case," and divergences\nbetween implementations on this issue often lead to surprises for\nusers in real documents. (See '),n("a",{attrs:{href:"http://article.gmane.org/gmane.text.markdown.general/1997",target:"_blank",rel:"noopener noreferrer"}},[t._v("this comment by John\nGruber"),n("OutboundLink")],1),t._v(".)")])]),t._v(" "),n("li",[n("p",[t._v("Is a blank line needed before a block quote or heading?\nMost implementations do not require the blank line.  However,\nthis can lead to unexpected results in hard-wrapped text, and\nalso to ambiguities in parsing (note that some implementations\nput the heading inside the blockquote, while others do not).\n(John Gruber has also spoken "),n("a",{attrs:{href:"http://article.gmane.org/gmane.text.markdown.general/2146",target:"_blank",rel:"noopener noreferrer"}},[t._v("in favor of requiring the blank\nlines"),n("OutboundLink")],1),t._v(".)")])]),t._v(" "),t._m(5),t._v(" "),n("li",[t._m(6),t._v(" "),t._m(7),n("p",[t._v("Or this?")]),t._v(" "),t._m(8),n("p",[t._v("(There are some relevant comments by John Gruber\n"),n("a",{attrs:{href:"http://article.gmane.org/gmane.text.markdown.general/2554",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".)")])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)]),t._v(" "),t._m(19),t._v(" "),n("p",[t._v('Because there is no unambiguous spec, implementations have diverged\nconsiderably.  As a result, users are often surprised to find that\na document that renders one way on one system (say, a github wiki)\nrenders differently on another (say, converting to docbook using\npandoc).  To make matters worse, because nothing in Markdown counts\nas a "syntax error," the divergence often isn\'t discovered right away.')]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),n("p",[t._v("Since this document describes how Markdown is to be parsed into\nan abstract syntax tree, it would have made sense to use an abstract\nrepresentation of the syntax tree instead of HTML.  But HTML is capable\nof representing the structural distinctions we need to make, and the\nchoice of HTML for the tests makes it possible to run the tests against\nan implementation without writing an abstract syntax tree renderer.")]),t._v(" "),t._m(23),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Markdown?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("1. List item one.\n+\nList item one continued with a second paragraph followed by an\nIndented block.\n+\n.................\n$ ls *.sh\n$ mv *.sh ~/tmp\n.................\n+\nList item continued with a third paragraph.\n\n2. List item two continued with an open block.\n+\n--\nThis paragraph is part of the preceding list item.\n\na. This list is nested and does not require explicit item\ncontinuation.\n+\nThis paragraph is part of the preceding list item.\n\nb. List item b.\n\nThis paragraph belongs to item two of the outer list.\n--\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("1.  List item one.\n\n    List item one continued with a second paragraph followed by an\n    Indented block.\n\n        $ ls *.sh\n        $ mv *.sh ~/tmp\n\n    List item continued with a third paragraph.\n\n2.  List item two continued with an open block.\n\n    This paragraph is part of the preceding list item.\n\n    1. This list is nested and does not require explicit item continuation.\n\n       This paragraph is part of the preceding list item.\n\n    2. List item b.\n\n    This paragraph belongs to item two of the outer list.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why-is-a-spec-needed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-is-a-spec-needed","aria-hidden":"true"}},[this._v("#")]),this._v(" Why is a spec needed?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Is a blank line needed before an indented code block?\n("),e("code",[this._v("Markdown.pl")]),this._v(" requires it, but this is not mentioned in the\ndocumentation, and some implementations do not require it.)")]),this._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[this._v("paragraph\n"),e("span",{attrs:{class:"token code keyword"}},[this._v("    code?")]),this._v("\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("What is the exact rule for determining when list items get\nwrapped in "),e("code",[this._v("<p>")]),this._v(' tags?  Can a list be partially "loose" and partially\n"tight"?  What should we do with a list like this?')])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{attrs:{class:"token list punctuation"}},[this._v("1.")]),this._v(" one\n\n"),e("span",{attrs:{class:"token list punctuation"}},[this._v("2.")]),this._v(" two\n"),e("span",{attrs:{class:"token list punctuation"}},[this._v("3.")]),this._v(" three\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v("  one\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    - a")]),t._v("\n\n"),n("span",{attrs:{class:"token code keyword"}},[t._v("    - b")]),t._v("\n"),n("span",{attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v("  two\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("Can list markers be indented?  Can ordered list markers be right-aligned?")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token list punctuation"}},[t._v("8.")]),t._v(" item 1\n "),n("span",{attrs:{class:"token list punctuation"}},[t._v("9.")]),t._v(" item 2\n"),n("span",{attrs:{class:"token list punctuation"}},[t._v("10.")]),t._v(" item 2a\n")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("Is this one list with a thematic break in its second item,\nor two lists separated by a thematic break?")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" a\n"),n("span",{attrs:{class:"token hr punctuation"}},[t._v("* * * * *")]),t._v("\n"),n("span",{attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" b\n")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("When list markers change from numbers to bullets, do we have\ntwo lists or one?  (The Markdown syntax description suggests two,\nbut the perl scripts and many other implementations produce one.)")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" fee\n"),n("span",{attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" fie\n"),n("span",{attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("  foe\n"),n("span",{attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("  fum\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("What are the precedence rules for the markers of inline structure?\nFor example, is the following a valid link, or does the code span\ntake precedence ?")]),this._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[this._v("[a backtick ("),e("span",{attrs:{class:"token code keyword"}},[this._v("`)](/url) and [another backtick (`")]),this._v(")](/url).\n")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("What are the precedence rules for markers of emphasis and strong\nemphasis?  For example, how should the following be parsed?")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{attrs:{class:"token italic"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("*")]),t._v("foo "),n("span",{attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("bar"),n("span",{attrs:{class:"token italic"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("*")]),t._v(" baz"),n("span",{attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("What are the precedence rules between block-level and inline-level\nstructure?  For example, how should the following be parsed?")]),this._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{attrs:{class:"token list punctuation"}},[this._v("-")]),this._v(" `a long code span can contain a hyphen like this\n  "),e("span",{attrs:{class:"token list punctuation"}},[this._v("-")]),this._v(" and it can screw things up`\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Can list items include section headings?  ("),e("code",[this._v("Markdown.pl")]),this._v(" does not\nallow this, but does allow blockquotes to include headings.)")]),this._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{attrs:{class:"token list punctuation"}},[this._v("-")]),this._v(" # Heading\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Can list items be empty?")]),this._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{attrs:{class:"token list punctuation"}},[this._v("*")]),this._v(" a\n*\n"),e("span",{attrs:{class:"token list punctuation"}},[this._v("*")]),this._v(" b\n")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("Can link references be defined inside block quotes or list items?")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" Blockquote [foo].\n"),n("span",{attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v("\n"),n("span",{attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token url-reference url"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token variable"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /url")]),t._v("\n")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("If there are multiple definitions for the same reference, which takes\nprecedence?")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{attrs:{class:"token url-reference url"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token variable"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /url1")]),t._v("\n"),n("span",{attrs:{class:"token url-reference url"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token variable"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /url2")]),t._v("\n\n"),n("span",{attrs:{class:"token url"}},[t._v("[foo][]")]),t._v("\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the absence of a spec, early implementers consulted "),e("code",[this._v("Markdown.pl")]),this._v("\nto resolve these ambiguities.  But "),e("code",[this._v("Markdown.pl")]),this._v(" was quite buggy, and\ngave manifestly bad results in many cases, so it was not a\nsatisfactory replacement for a spec.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"about-this-document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-this-document","aria-hidden":"true"}},[this._v("#")]),this._v(" About this document")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This document attempts to specify Markdown syntax unambiguously.\nIt contains many examples with side-by-side Markdown and\nHTML.  These are intended to double as conformance tests.  An\naccompanying script "),e("code",[this._v("spec_tests.py")]),this._v(" can be used to run the tests\nagainst any Markdown program:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("python test/spec_tests.py --spec spec.txt --program PROGRAM\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This document is generated from a text file, "),e("code",[this._v("spec.txt")]),this._v(", written\nin Markdown with a small extension for the side-by-side tests.\nThe script "),e("code",[this._v("tools/makespec.py")]),this._v(" can be used to convert "),e("code",[this._v("spec.txt")]),this._v(" into\nHTML or CommonMark (which can then be converted into other formats).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the examples, the "),e("code",[this._v("→")]),this._v(" character is used to represent tabs.")])}],!1,null,null,null);a.options.__file="1.Introduction.md";e.default=a.exports}}]);