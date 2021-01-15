// custom typefaces
import "typeface-merriweather"
import "typeface-montserrat"
import "./src/styles/global.scss"
import "gatsby-remark-vscode/styles.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
//require("prismjs/themes/prism-okaidia.css")
//require("prismjs/plugins/command-line/prism-command-line.css")
//require("prismjs/plugins/toolbar/prism-toolbar.css")

//import { wrapRootElement as wrap } from "./src/components/Code/wrap-root-element"
import Prism from "prism-react-renderer/prism"
;(typeof global !== "undefined" ? global : window).Prism = Prism

//export const wrapRootElement = wrap

// Using line numbering for code blocks
require("prismjs/plugins/line-numbers/prism-line-numbers")

// Using shell prompt in code blocks
require("prismjs/plugins/command-line/prism-command-line.css")

// You can import missing languages supported by prismjs – https://prismjs.com/
require("prismjs/components/prism-actionscript")
require("prismjs/components/prism-applescript")
require("prismjs/components/prism-arduino")
require("prismjs/components/prism-aspnet")
require("prismjs/components/prism-autohotkey")
require("prismjs/components/prism-bash")
require("prismjs/components/prism-basic")
require("prismjs/components/prism-c")
require("prismjs/components/prism-csharp")
require("prismjs/components/prism-css")
require("prismjs/components/prism-clike")
require("prismjs/components/prism-cpp")
require("prismjs/components/prism-coffeescript")
require("prismjs/components/prism-cmake")
require("prismjs/components/prism-diff")
require("prismjs/components/prism-django")
require("prismjs/components/prism-docker")
require("prismjs/components/prism-ejs")
require("prismjs/components/prism-erlang")
require("prismjs/components/prism-git")
require("prismjs/components/prism-go")
require("prismjs/components/prism-graphql")
require("prismjs/components/prism-haml")
require("prismjs/components/prism-handlebars")
require("prismjs/components/prism-haskell")
require("prismjs/components/prism-http")
require("prismjs/components/prism-java")
require("prismjs/components/prism-json")
require("prismjs/components/prism-kotlin")
require("prismjs/components/prism-latex")
require("prismjs/components/prism-less")
require("prismjs/components/prism-livescript")
require("prismjs/components/prism-makefile")
require("prismjs/components/prism-markdown")
require("prismjs/components/prism-markup")
require("prismjs/components/prism-matlab")
require("prismjs/components/prism-nginx")
require("prismjs/components/prism-objectivec")
require("prismjs/components/prism-perl")
require("prismjs/components/prism-php")
require("prismjs/components/prism-powershell")
require("prismjs/components/prism-pug")
require("prismjs/components/prism-puppet")
require("prismjs/components/prism-python")
require("prismjs/components/prism-r")
require("prismjs/components/prism-jsx")
require("prismjs/components/prism-tsx")
require("prismjs/components/prism-ruby")
require("prismjs/components/prism-sass")
require("prismjs/components/prism-scss")
require("prismjs/components/prism-scala")
require("prismjs/components/prism-sql")
require("prismjs/components/prism-swift")
require("prismjs/components/prism-typescript")
require("prismjs/components/prism-vim")
require("prismjs/components/prism-visual-basic")
require("prismjs/components/prism-yaml")
