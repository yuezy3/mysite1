// The library needed: lib/ace/ace.js for ace
//                     lib/ramda/ramda.js for curry
//const R = require('ramda'); 
var modeElement = document.getElementsByClassName('mode')[0];

var themeElement = document.getElementsByClassName('theme')[0];

var fontsizeElement = document.getElementsByClassName('fontsize')[0];

modeElement.addEventListener('change', modeChange);
themeElement.addEventListener('change', themeChange);
fontsizeElement.addEventListener('change', fontsizeChange);

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

function modeChange(e){
  var mode = e.target.options[e.target.selectedIndex].value;
  editor.getSession().setmode(mode);
}
function themeChange(e){
  var theme = e.target.options[e.target.selectedIndex].value;
  theme = "ace/theme/" + theme;
  editor.setTheme(theme); // arg are string
}
function fontsizeChange(e){
  var fontsize = e.target.options[e.target.selectedIndex].value;
  editor.setFontSize(Number(fontsize));
}

// ====================Insert theme options and mode options ==================
//  [ displayname , editor.setTheme("ace/theme/xxx"); , subcatagorys]
var themeData = [
    ["Chrome"               ,"chrome"                  , "light"],
    ["Clouds"               ,"clouds"                  , "light"],
    ["Crimson Editor"       ,"crimson_editor"          , "light"],
    ["Dawn"                 ,"dawn"                    , "light"],
    ["Dreamweaver"          ,"dreamweaver"             , "light"],
    ["Eclipse"              ,"eclipse"                 , "light"],
    ["GitHub"               ,"github"                  , "light"],
    ["IPlastic"             ,"iplastic"                , "light"],
    ["Solarized Light"      ,"solarize_light"          , "light"],
    ["TextMate"             ,"textmate"                , "light"],
    ["Tomorrow"             ,"tomorrow"                , "light"],
    ["XCode"                ,"xcode"                   , "light"],
    ["Kuroir"               ,"kuroir"                  , "light"],
    ["KatzenMilch"          ,"katzenmilch"             , "light"],
    ["SQL Server"           ,"sqlserver"               , "light"],
    ["Ambiance"             ,"ambiance"                ,  "dark"],
    ["Chaos"                ,"chaos"                   ,  "dark"],
    ["Clouds Midnight"      ,"clouds_midnight"         ,  "dark"],
    ["Cobalt"               ,"cobalt"                  ,  "dark"],
    ["Gruvbox"              ,"gruvbox"                 ,  "dark"],
    ["Green on Black"       ,"gob"                     ,  "dark"],
    ["idle Fingers"         ,"idle_fingers"            ,  "dark"],
    ["krTheme"              ,"kr_theme"                ,  "dark"],
    ["Merbivore"            ,"merbivore"               ,  "dark"],
    ["Merbivore Soft"       ,"merbivore_soft"          ,  "dark"],
    ["Mono Industrial"      ,"mono_industrial"         ,  "dark"],
    ["Monokai"              ,"monokai"                 ,  "dark"],
    ["Pastel on dark"       ,"pastel_on_dark"          ,  "dark"],
    ["Solarized Dark"       ,"solarized_dark"          ,  "dark"],
    ["Terminal"             ,"terminal"                ,  "dark"],
    ["Tomorrow Night"       ,"tomorrow_night"          ,  "dark"],
    ["Tomorrow Night Blue"  ,"tomorrow_night_blue"     ,  "dark"],
    ["Tomorrow Night Bright","tomorrow_night_bright"   ,  "dark"],
    ["Tomorrow Night 80s"   ,"tomorrow_night_eighties" ,  "dark"],
    ["Twilight"             ,"twilight"                ,  "dark"],
    ["Vibrant Ink"          ,"vibrant_ink"             ,  "dark"]
];

// editor.getSession().setMode("ace/mode/javascript");
// javascript can replaced by key below, use tolower first
// key is display name, if not in var nameOverrides.
// things in the array are RegExp that match the file name's postfix.
var supportedModes = {
    ABAP:        ["abap"],
    ABC:         ["abc"],
    ActionScript:["as"],
    ADA:         ["ada|adb"],
    Apache_Conf: ["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],
    AsciiDoc:    ["asciidoc|adoc"],
    Assembly_x86:["asm|a"],
    AutoHotKey:  ["ahk"],
    BatchFile:   ["bat|cmd"],
    Bro:         ["bro"],
    C_Cpp:       ["cpp|c|cc|cxx|h|hh|hpp|ino"],
    C9Search:    ["c9search_results"],
    Cirru:       ["cirru|cr"],
    Clojure:     ["clj|cljs"],
    Cobol:       ["CBL|COB"],
    coffee:      ["coffee|cf|cson|^Cakefile"],
    ColdFusion:  ["cfm"],
    CSharp:      ["cs"],
    CSS:         ["css"],
    Curly:       ["curly"],
    D:           ["d|di"],
    Dart:        ["dart"],
    Diff:        ["diff|patch"],
    Dockerfile:  ["^Dockerfile"],
    Dot:         ["dot"],
    Drools:      ["drl"],
    Dummy:       ["dummy"],
    DummySyntax: ["dummy"],
    Eiffel:      ["e|ge"],
    EJS:         ["ejs"],
    Elixir:      ["ex|exs"],
    Elm:         ["elm"],
    Erlang:      ["erl|hrl"],
    Forth:       ["frt|fs|ldr|fth|4th"],
    Fortran:     ["f|f90"],
    FTL:         ["ftl"],
    Gcode:       ["gcode"],
    Gherkin:     ["feature"],
    Gitignore:   ["^.gitignore"],
    Glsl:        ["glsl|frag|vert"],
    Gobstones:   ["gbs"],
    golang:      ["go"],
    GraphQLSchema: ["gql"],
    Groovy:      ["groovy"],
    HAML:        ["haml"],
    Handlebars:  ["hbs|handlebars|tpl|mustache"],
    Haskell:     ["hs"],
    Haskell_Cabal:     ["cabal"],
    haXe:        ["hx"],
    Hjson:       ["hjson"],
    HTML:        ["html|htm|xhtml"],
    HTML_Elixir: ["eex|html.eex"],
    HTML_Ruby:   ["erb|rhtml|html.erb"],
    INI:         ["ini|conf|cfg|prefs"],
    Io:          ["io"],
    Jack:        ["jack"],
    Jade:        ["jade|pug"],
    Java:        ["java"],
    JavaScript:  ["js|jsm|jsx"],
    JSON:        ["json"],
    JSONiq:      ["jq"],
    JSP:         ["jsp"],
    JSX:         ["jsx"],
    Julia:       ["jl"],
    Kotlin:      ["kt|kts"],
    LaTeX:       ["tex|latex|ltx|bib"],
    LESS:        ["less"],
    Liquid:      ["liquid"],
    Lisp:        ["lisp"],
    LiveScript:  ["ls"],
    LogiQL:      ["logic|lql"],
    LSL:         ["lsl"],
    Lua:         ["lua"],
    LuaPage:     ["lp"],
    Lucene:      ["lucene"],
    Makefile:    ["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],
    Markdown:    ["md|markdown"],
    Mask:        ["mask"],
    MATLAB:      ["matlab"],
    Maze:        ["mz"],
    MEL:         ["mel"],
    MUSHCode:    ["mc|mush"],
    MySQL:       ["mysql"],
    Nix:         ["nix"],
    NSIS:        ["nsi|nsh"],
    ObjectiveC:  ["m|mm"],
    OCaml:       ["ml|mli"],
    Pascal:      ["pas|p"],
    Perl:        ["pl|pm"],
    pgSQL:       ["pgsql"],
    PHP:         ["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],
    Pig:         ["pig"],
    Powershell:  ["ps1"],
    Praat:       ["praat|praatscript|psc|proc"],
    Prolog:      ["plg|prolog"],
    Properties:  ["properties"],
    Protobuf:    ["proto"],
    Python:      ["py"],
    R:           ["r"],
    Razor:       ["cshtml|asp"],
    RDoc:        ["Rd"],
    RHTML:       ["Rhtml"],
    RST:         ["rst"],
    Ruby:        ["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],
    Rust:        ["rs"],
    SASS:        ["sass"],
    SCAD:        ["scad"],
    Scala:       ["scala"],
    Scheme:      ["scm|sm|rkt|oak|scheme"],
    SCSS:        ["scss"],
    SH:          ["sh|bash|^.bashrc"],
    SJS:         ["sjs"],
    Smarty:      ["smarty|tpl"],
    snippets:    ["snippets"],
    Soy_Template:["soy"],
    Space:       ["space"],
    SQL:         ["sql"],
    SQLServer:   ["sqlserver"],
    Stylus:      ["styl|stylus"],
    SVG:         ["svg"],
    Swift:       ["swift"],
    Tcl:         ["tcl"],
    Tex:         ["tex"],
    Text:        ["txt"],
    Textile:     ["textile"],
    Toml:        ["toml"],
    TSX:         ["tsx"],
    Twig:        ["twig|swig"],
    Typescript:  ["ts|typescript|str"],
    Vala:        ["vala"],
    VBScript:    ["vbs|vb"],
    Velocity:    ["vm"],
    Verilog:     ["v|vh|sv|svh"],
    VHDL:        ["vhd|vhdl"],
    Wollok:      ["wlk|wpgm|wtest"],
    XML:         ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],
    XQuery:      ["xq"],
    YAML:        ["yaml|yml"],
    Django:      ["html"]
};

var nameOverrides = {
    ObjectiveC: "Objective-C",
    CSharp: "C#",
    golang: "Go",
    C_Cpp: "C and C++",
    coffee: "CoffeeScript",
    HTML_Ruby: "HTML (Ruby)",
    HTML_Elixir: "HTML (Elixir)",
    FTL: "FreeMarker"
};

function addNodes(items, parent){
  items.forEach(function (i) {parent.appendChild(i);});
  return parent;
}

function nodify(tag,attrObj,text){
  var el = document.createElement(tag);
  Object.keys(attrObj).forEach(
    function (i) {el.setAttribute(i,attrObj[i]);});
  if (text){
    text = String(text);
    el.appendChild(document.createTextNode(text));
  }
  return el;
}

function choose(catagory, themeDataItem){
  return themeDataItem[2] == catagory;
}
var nodify = R.curry(nodify);
var choose = R.curry(choose);
var tree = { 'light' : R.filter(choose('light'))(themeData),
             'dark'  : R.filter(choose('dark'))(themeData) };
var nodifyOption = function(text, value){
  return nodify('option',{'value':value},text);
};
var nodifyOptionAdapt=function(array){return nodifyOption.apply(this,array);};
var nodifyOptgroup = function(label){
  return nodify('optgroup',{'label':label},'');
};
var groupNodify = R.curry(function (tree,key){
  return addNodes(R.map(nodifyOptionAdapt,tree[key]), 
                  nodifyOptgroup(key));
});

var themeNodes = Object.keys(tree).map(groupNodify(tree));

themeNodes.forEach(function(node){themeElement.appendChild(node);});
// =======   ====End of Insert theme options and mode options =================
