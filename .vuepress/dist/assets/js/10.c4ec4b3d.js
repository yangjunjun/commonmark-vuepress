(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"appendix-a-parsing-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-parsing-strategy","aria-hidden":"true"}},[e._v("#")]),e._v(" Appendix: A parsing strategy")]),e._v(" "),a("p",[e._v("In this appendix we describe some features of the parsing strategy\nused in the CommonMark reference implementations.")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Parsing has two phases:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the first phase, lines of input are consumed and the block\nstructure of the document---its division into paragraphs, block quotes,\nlist items, and so on---is constructed.  Text is assigned to these\nblocks but not parsed. Link reference definitions are parsed and a\nmap of links is constructed.")])]),e._v(" "),a("li",[a("p",[e._v("In the second phase, the raw text contents of paragraphs and headings\nare parsed into sequences of Markdown inline elements (strings,\ncode spans, links, emphasis, and so on), using the map of link\nreferences constructed in phase 1.")])])]),e._v(" "),a("p",[e._v("At each point in processing, the document is represented as a tree of\n"),a("strong",[e._v("blocks")]),e._v(".  The root of the tree is a "),a("code",[e._v("document")]),e._v(" block.  The "),a("code",[e._v("document")]),e._v("\nmay have any number of other blocks as "),a("strong",[e._v("children")]),e._v(".  These children\nmay, in turn, have other blocks as children.  The last child of a block\nis normally considered "),a("strong",[e._v("open")]),e._v(", meaning that subsequent lines of input\ncan alter its contents.  (Blocks that are not open are "),a("strong",[e._v("closed")]),e._v(".)\nHere, for example, is a possible document tree, with the open blocks\nmarked by arrows:")]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-> document\n  -> block_quote\n       paragraph\n         "Lorem ipsum dolor\\nsit amet."\n    -> list (type=bullet tight=true bullet_char=-)\n         list_item\n           paragraph\n             "Qui *quodsi iracundia*"\n      -> list_item\n        -> paragraph\n             "aliquando id"\n')])])]),a("h2",{attrs:{id:"phase-1-block-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-1-block-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Phase 1: block structure")]),e._v(" "),a("p",[e._v("Each line that is processed has an effect on this tree.  The line is\nanalyzed and, depending on its contents, the document may be altered\nin one or more of the following ways:")]),e._v(" "),a("ol",[a("li",[e._v("One or more open blocks may be closed.")]),e._v(" "),a("li",[e._v("One or more new blocks may be created as children of the\nlast open block.")]),e._v(" "),a("li",[e._v("Text may be added to the last (deepest) open block remaining\non the tree.")])]),e._v(" "),a("p",[e._v("Once a line has been incorporated into the tree in this way,\nit can be discarded, so input can be read in a stream.")]),e._v(" "),a("p",[e._v("For each line, we follow this procedure:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("First we iterate through the open blocks, starting with the\nroot document, and descending through last children down to the last\nopen block.  Each block imposes a condition that the line must satisfy\nif the block is to remain open.  For example, a block quote requires a\n"),a("code",[e._v(">")]),e._v(" character.  A paragraph requires a non-blank line.\nIn this phase we may match all or just some of the open\nblocks.  But we cannot close unmatched blocks yet, because we may have a\n[lazy continuation line].")])]),e._v(" "),a("li",[a("p",[e._v("Next, after consuming the continuation markers for existing\nblocks, we look for new block starts (e.g. "),a("code",[e._v(">")]),e._v(" for a block quote).\nIf we encounter a new block start, we close any blocks unmatched\nin step 1 before creating the new block as a child of the last\nmatched block.")])]),e._v(" "),a("li",[a("p",[e._v("Finally, we look at the remainder of the line (after block\nmarkers like "),a("code",[e._v(">")]),e._v(", list markers, and indentation have been consumed).\nThis is text that can be incorporated into the last open\nblock (a paragraph, code block, heading, or raw HTML).")])])]),e._v(" "),a("p",[e._v("Setext headings are formed when we see a line of a paragraph\nthat is a [setext heading underline].")]),e._v(" "),a("p",[e._v("Reference link definitions are detected when a paragraph is closed;\nthe accumulated text lines are parsed to see if they begin with\none or more reference link definitions.  Any remainder becomes a\nnormal paragraph.")]),e._v(" "),a("p",[e._v("We can see how this works by considering how the tree above is\ngenerated by four lines of Markdown:")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" Lorem ipsum dolor\nsit amet.\n"),a("span",{attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" "),a("span",{attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" Qui "),a("span",{attrs:{class:"token italic"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("*")]),e._v("quodsi iracundia"),a("span",{attrs:{class:"token punctuation"}},[e._v("*")])]),e._v("\n"),a("span",{attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" "),a("span",{attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" aliquando id\n")])])]),a("p",[e._v("At the outset, our document model is just")]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-> document\n")])])]),a("p",[e._v("The first line of our text,")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" Lorem ipsum dolor\n")])])]),a("p",[e._v("causes a "),a("code",[e._v("block_quote")]),e._v(" block to be created as a child of our\nopen "),a("code",[e._v("document")]),e._v(" block, and a "),a("code",[e._v("paragraph")]),e._v(" block as a child of\nthe "),a("code",[e._v("block_quote")]),e._v(".  Then the text is added to the last open\nblock, the "),a("code",[e._v("paragraph")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-> document\n  -> block_quote\n    -> paragraph\n         "Lorem ipsum dolor"\n')])])]),a("p",[e._v("The next line,")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[e._v("sit amet.\n")])])]),a("p",[e._v('is a "lazy continuation" of the open '),a("code",[e._v("paragraph")]),e._v(", so it gets added\nto the paragraph's text:")]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-> document\n  -> block_quote\n    -> paragraph\n         "Lorem ipsum dolor\\nsit amet."\n')])])]),a("p",[e._v("The third line,")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" "),a("span",{attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" Qui "),a("span",{attrs:{class:"token italic"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("*")]),e._v("quodsi iracundia"),a("span",{attrs:{class:"token punctuation"}},[e._v("*")])]),e._v("\n")])])]),a("p",[e._v("causes the "),a("code",[e._v("paragraph")]),e._v(" block to be closed, and a new "),a("code",[e._v("list")]),e._v(" block\nopened as a child of the "),a("code",[e._v("block_quote")]),e._v(".  A "),a("code",[e._v("list_item")]),e._v(" is also\nadded as a child of the "),a("code",[e._v("list")]),e._v(", and a "),a("code",[e._v("paragraph")]),e._v(" as a child of\nthe "),a("code",[e._v("list_item")]),e._v(".  The text is then added to the new "),a("code",[e._v("paragraph")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-> document\n  -> block_quote\n       paragraph\n         "Lorem ipsum dolor\\nsit amet."\n    -> list (type=bullet tight=true bullet_char=-)\n      -> list_item\n        -> paragraph\n             "Qui *quodsi iracundia*"\n')])])]),a("p",[e._v("The fourth line,")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" "),a("span",{attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" aliquando id\n")])])]),a("p",[e._v("causes the "),a("code",[e._v("list_item")]),e._v(" (and its child the "),a("code",[e._v("paragraph")]),e._v(") to be closed,\nand a new "),a("code",[e._v("list_item")]),e._v(" opened up as child of the "),a("code",[e._v("list")]),e._v(".  A "),a("code",[e._v("paragraph")]),e._v("\nis added as a child of the new "),a("code",[e._v("list_item")]),e._v(", to contain the text.\nWe thus obtain the final tree:")]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-> document\n  -> block_quote\n       paragraph\n         "Lorem ipsum dolor\\nsit amet."\n    -> list (type=bullet tight=true bullet_char=-)\n         list_item\n           paragraph\n             "Qui *quodsi iracundia*"\n      -> list_item\n        -> paragraph\n             "aliquando id"\n')])])]),a("h2",{attrs:{id:"phase-2-inline-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-2-inline-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Phase 2: inline structure")]),e._v(" "),a("p",[e._v("Once all of the input has been parsed, all open blocks are closed.")]),e._v(" "),a("p",[e._v('We then "walk the tree," visiting every node, and parse raw\nstring contents of paragraphs and headings as inlines.  At this\npoint we have seen all the link reference definitions, so we can\nresolve reference links as we go.')]),e._v(" "),a("div",{staticClass:"language-tree extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('document\n  block_quote\n    paragraph\n      str "Lorem ipsum dolor"\n      softbreak\n      str "sit amet."\n    list (type=bullet tight=true bullet_char=-)\n      list_item\n        paragraph\n          str "Qui "\n          emph\n            str "quodsi iracundia"\n      list_item\n        paragraph\n          str "aliquando id"\n')])])]),a("p",[e._v("Notice how the [line ending] in the first paragraph has\nbeen parsed as a "),a("code",[e._v("softbreak")]),e._v(", and the asterisks in the first list item\nhave become an "),a("code",[e._v("emph")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"an-algorithm-for-parsing-nested-emphasis-and-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-algorithm-for-parsing-nested-emphasis-and-links","aria-hidden":"true"}},[e._v("#")]),e._v(" An algorithm for parsing nested emphasis and links")]),e._v(" "),a("p",[e._v("By far the trickiest part of inline parsing is handling emphasis,\nstrong emphasis, links, and images.  This is done using the following\nalgorithm.")]),e._v(" "),a("p",[e._v("When we're parsing inlines and we hit either")]),e._v(" "),a("ul",[a("li",[e._v("a run of "),a("code",[e._v("*")]),e._v(" or "),a("code",[e._v("_")]),e._v(" characters, or")]),e._v(" "),a("li",[e._v("a "),a("code",[e._v("[")]),e._v(" or "),a("code",[e._v("![")])])]),e._v(" "),a("p",[e._v("we insert a text node with these symbols as its literal content, and we\nadd a pointer to this text node to the "),a("a",{attrs:{href:"@"}},[e._v("delimiter stack")]),e._v(".")]),e._v(" "),a("p",[e._v("The [delimiter stack] is a doubly linked list.  Each\nelement contains a pointer to a text node, plus information about")]),e._v(" "),a("ul",[a("li",[e._v("the type of delimiter ("),a("code",[e._v("[")]),e._v(", "),a("code",[e._v("![")]),e._v(", "),a("code",[e._v("*")]),e._v(", "),a("code",[e._v("_")]),e._v(")")]),e._v(" "),a("li",[e._v("the number of delimiters,")]),e._v(" "),a("li",[e._v('whether the delimiter is "active" (all are active to start), and')]),e._v(" "),a("li",[e._v("whether the delimiter is a potential opener, a potential closer,\nor both (which depends on what sort of characters precede\nand follow the delimiters).")])]),e._v(" "),a("p",[e._v("When we hit a "),a("code",[e._v("]")]),e._v(" character, we call the "),a("em",[e._v("look for link or image")]),e._v("\nprocedure (see below).")]),e._v(" "),a("p",[e._v("When we hit the end of the input, we call the "),a("em",[e._v("process emphasis")]),e._v("\nprocedure (see below), with "),a("code",[e._v("stack_bottom")]),e._v(" = NULL.")]),e._v(" "),a("h4",{attrs:{id:"look-for-link-or-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#look-for-link-or-image","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("look for link or image")])]),e._v(" "),a("p",[e._v("Starting at the top of the delimiter stack, we look backwards\nthrough the stack for an opening "),a("code",[e._v("[")]),e._v(" or "),a("code",[e._v("![")]),e._v(" delimiter.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If we don't find one, we return a literal text node "),a("code",[e._v("]")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If we do find one, but it's not "),a("em",[e._v("active")]),e._v(", we remove the inactive\ndelimiter from the stack, and return a literal text node "),a("code",[e._v("]")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If we find one and it's active, then we parse ahead to see if\nwe have an inline link/image, reference link/image, compact reference\nlink/image, or shortcut reference link/image.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If we don't, then we remove the opening delimiter from the\ndelimiter stack and return a literal text node "),a("code",[e._v("]")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If we do, then")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("We return a link or image node whose children are the inlines\nafter the text node pointed to by the opening delimiter.")])]),e._v(" "),a("li",[a("p",[e._v("We run "),a("em",[e._v("process emphasis")]),e._v(" on these inlines, with the "),a("code",[e._v("[")]),e._v(" opener\nas "),a("code",[e._v("stack_bottom")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("We remove the opening delimiter.")])]),e._v(" "),a("li",[a("p",[e._v("If we have a link (and not an image), we also set all\n"),a("code",[e._v("[")]),e._v(" delimiters before the opening delimiter to "),a("em",[e._v("inactive")]),e._v(".  (This\nwill prevent us from getting links within links.)")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"process-emphasis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-emphasis","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("process emphasis")])]),e._v(" "),a("p",[e._v("Parameter "),a("code",[e._v("stack_bottom")]),e._v(" sets a lower bound to how far we\ndescend in the [delimiter stack].  If it is NULL, we can\ngo all the way to the bottom.  Otherwise, we stop before\nvisiting "),a("code",[e._v("stack_bottom")]),e._v(".")]),e._v(" "),a("p",[e._v("Let "),a("code",[e._v("current_position")]),e._v(" point to the element on the [delimiter stack]\njust above "),a("code",[e._v("stack_bottom")]),e._v(" (or the first element if "),a("code",[e._v("stack_bottom")]),e._v("\nis NULL).")]),e._v(" "),a("p",[e._v("We keep track of the "),a("code",[e._v("openers_bottom")]),e._v(" for each delimiter\ntype ("),a("code",[e._v("*")]),e._v(", "),a("code",[e._v("_")]),e._v(").  Initialize this to "),a("code",[e._v("stack_bottom")]),e._v(".")]),e._v(" "),a("p",[e._v("Then we repeat the following until we run out of potential\nclosers:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Move "),a("code",[e._v("current_position")]),e._v(" forward in the delimiter stack (if needed)\nuntil we find the first potential closer with delimiter "),a("code",[e._v("*")]),e._v(" or "),a("code",[e._v("_")]),e._v(".\n(This will be the potential closer closest\nto the beginning of the input -- the first one in parse order.)")])]),e._v(" "),a("li",[a("p",[e._v("Now, look back in the stack (staying above "),a("code",[e._v("stack_bottom")]),e._v(" and\nthe "),a("code",[e._v("openers_bottom")]),e._v(' for this delimiter type) for the\nfirst matching potential opener ("matching" means same delimiter).')])]),e._v(" "),a("li",[a("p",[e._v("If one is found:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Figure out whether we have emphasis or strong emphasis:\nif both closer and opener spans have length >= 2, we have\nstrong, otherwise regular.")])]),e._v(" "),a("li",[a("p",[e._v("Insert an emph or strong emph node accordingly, after\nthe text node corresponding to the opener.")])]),e._v(" "),a("li",[a("p",[e._v("Remove any delimiters between the opener and closer from\nthe delimiter stack.")])]),e._v(" "),a("li",[a("p",[e._v("Remove 1 (for regular emph) or 2 (for strong emph) delimiters\nfrom the opening and closing text nodes.  If they become empty\nas a result, remove them and remove the corresponding element\nof the delimiter stack.  If the closing node is removed, reset\n"),a("code",[e._v("current_position")]),e._v(" to the next element in the stack.")])])])]),e._v(" "),a("li",[a("p",[e._v("If none in found:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Set "),a("code",[e._v("openers_bottom")]),e._v(" to the element before "),a("code",[e._v("current_position")]),e._v(".\n(We know that there are no openers for this kind of closer up to and\nincluding this point, so this puts a lower bound on future searches.)")])]),e._v(" "),a("li",[a("p",[e._v("If the closer at "),a("code",[e._v("current_position")]),e._v(" is not a potential opener,\nremove it from the delimiter stack (since we know it can't\nbe a closer either).")])]),e._v(" "),a("li",[a("p",[e._v("Advance "),a("code",[e._v("current_position")]),e._v(" to the next element in the stack.")])])])])]),e._v(" "),a("p",[e._v("After we're done, we remove all delimiters above "),a("code",[e._v("stack_bottom")]),e._v(" from the\ndelimiter stack.")])])}],!1,null,null,null);o.options.__file="7.Appendix_A_parsing_strategy.md";t.default=o.exports}}]);