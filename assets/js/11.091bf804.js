(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{195:function(t,e,r){"use strict";r.r(e);var i=r(0),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("h3",{attrs:{id:"rdocs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdocs"}},[t._v("#")]),t._v(" "),r("StaticLink",{attrs:{target:"\\_blank",href:"rdoc/"}},[t._v("Rdocs")])],1),t._v(" "),r("p",[t._v("The "),r("strong",[t._v("URBANopt REopt Gem")]),t._v(" extends "),r("strong",[t._v("URBANopt::Scenario::DefaultReports::ScenarioReport")]),t._v(" and "),r("strong",[t._v("URBANopt::Scenario::DefaultReports::FeatureReport")]),t._v(" with the ability to derive cost-optimal distributed energy resource (DER) technology sizes and annual dispatch strageties via the "),r("StaticLink",{attrs:{target:"\\_blank",href:"https://reopt.nrel.gov/tool"}},[t._v("REopt Lite")]),t._v(" decision support platform.\nREopt Lite is a technoeconomic model which leverages mixed integer linear programming to identify the cost-optimal sizing of solar PV, Wind, Storage and/or diesel generation given an electric load profile, a utility rate tariff and other technoeconomic parameters. See "),r("StaticLink",{attrs:{target:"\\_blank",href:"https://developer.nrel.gov/docs/energy-optimization/reopt-v1/"}},[t._v("https://developer.nrel.gov/docs/energy-optimization/reopt-v1/")]),t._v(" for more detailed information on input parameters and default assumptions.")],1),t._v(" "),r("p",[r("br"),r("b",[t._v("Note:")]),t._v(" this module requires an API Key from the "),r("StaticLink",{attrs:{target:"blank",href:"https://developer.nrel.gov/"}},[t._v("NREL Developer Network")]),t._v(".")],1),t._v(" "),r("p",[t._v("(RDoc Documentation)[https://urbanopt.github.io/urbanopt-reopt-gem/]{:target='_blank'}")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("See "),r("a",{attrs:{href:"https://docs.urbanopt.net/installation/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.urbanopt.net/installation/installation.html"),r("OutboundLink")],1),t._v(" for instructions on prerequiste software, including:")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("Add this line to your application's Gemfile:")]),t._v(" "),t._m(3),r("p",[t._v("And then execute:")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("Or install it yourself as:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("First, check out the repository (i.e. git clone this repo).")]),t._v(" "),r("p",[t._v("Next, obtain a developer.nrel.gov API key from the "),r("a",{attrs:{href:"https://developer.nrel.gov/%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("NREL Developer Network"),r("OutboundLink")],1),t._v(". Copy and paste your key in to the "),r("em",[t._v("developer_nrel_key")]),t._v("."),r("em",[t._v("rb")]),t._v(" file then save the file:")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("Finally, execute:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("This gem is used to call the REopt Lite API on a Scenario Report or Feature Report to update the object's Distributed Generation attributes (including system financial and sizing metrics). Moreover, the following optimal dispatch fields are added to its timeseries CSV. Where no system component is recommended the dispatch will be all zero (i.e. if no solar PV is recommended ElectricityProduced:PV:Total will be always be zero)")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"urbanopt-reopt-gem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#urbanopt-reopt-gem"}},[this._v("#")]),this._v(" URBANOpt REopt Gem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Ruby 2.2.6")]),this._v(" "),e("li",[this._v("Bundler 1.17.0")]),this._v(" "),e("li",[this._v("OpenStudio 2.8.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[this._v("gem "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'urbanopt-reopt'")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ bundle install\n$ bundle update\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ gem install 'urbanopt-reopt'\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("DEVELOPER_NREL_KEY = '<insert your key here>'\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ bundle install\n$ bundle update    \n$ bundle exec rake\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"functionality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functionality"}},[this._v("#")]),this._v(" Functionality")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("output")]),t._v(" "),r("th",[t._v("unit")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ElectricityProduced:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Load:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Grid:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Grid:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Storage:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Storage:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Storage:StateOfCharge")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"releasing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#releasing"}},[this._v("#")]),this._v(" Releasing")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("Update change log")]),t._v(" "),r("li",[t._v("Update version in "),r("code",[t._v("/lib/urbanopt/reopt/version.rb")])]),t._v(" "),r("li",[t._v("Merge down to master")]),t._v(" "),r("li",[t._v("run "),r("code",[t._v("rake release")]),t._v(" from master")])])}],!1,null,null,null);e.default=a.exports}}]);