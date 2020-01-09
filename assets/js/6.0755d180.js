(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,r){},185:function(t,e,r){"use strict";var i=r(173);r.n(i).a},197:function(t,e,r){"use strict";r.r(e);r(185);var i=r(0),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("When the gem calls the REopt Lite APUI it recieves the following complete set of results described in the data dictionary below. Only those needed to update a Feature or Scenario Report's distributed_generation attibute set and timeseries CSV are pulled from the reponse and transferred to the Feature or Scenario Report. You may choose to modify the code to include more or less of the full REopt Lite response.")]),t._v(" "),t._m(1),t._v(" "),r("ReoptOutputSchema"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("The REopt Lite API updates the distributed_generation attributes of a Scenario or Feature Report as shown in an example below.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),r("p",[t._v("REopt Lite API responses also map dispatches to the following columns in an updated timeseries CSV for a Feature or Scenario Report.")]),t._v(" "),t._m(6)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"reopt-lite-outputs-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reopt-lite-outputs-schema"}},[this._v("#")]),this._v(" REopt Lite Outputs Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"data-dictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[this._v("#")]),this._v(" Data Dictionary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updated-from-the-data-dictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated-from-the-data-dictionary"}},[this._v("#")]),this._v(" Updated from the Data Dictionary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"distributed-generation-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#distributed-generation-attributes"}},[this._v("#")]),this._v(" Distributed Generation Attributes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('\t"distributed_generation": {\n\t      "lcc_us_dollars": 100000000.0,\n\t      "npv_us_dollars": 10000000.0,\n\t      "year_one_energy_cost_us_dollars": 7000000.0,\n\t      "year_one_demand_cost_us_dollars": 3000000.0,\n\t      "year_one_bill_us_dollars": 10000000.0,\n\t      "total_energy_cost_us_dollars": 70000000.0,\n\t      "solar_pv": {\n\t        "size_kw": 30000.0\n\t      },\n\t      "wind": {\n\t        "size_kw": 0.0\n\t      },\n\t      "generator": {\n\t        "size_kw": 0.0\n\t      },\n\t      "storage": {\n\t        "size_kw": 2000.0,\n\t        "size_kwh": 5000.0\n\t      }\n\t    }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"timeseries-csv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeseries-csv"}},[this._v("#")]),this._v(" Timeseries CSV")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("output")]),t._v(" "),r("th",[t._v("unit")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ElectricityProduced:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Load:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Grid:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Grid:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Storage:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Storage:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("Electricity:Storage:StateOfCharge")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Generator:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:PV:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:Total")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:ToBattery")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:ToLoad")]),t._v(" "),r("td",[t._v("kWh")])]),t._v(" "),r("tr",[r("td",[t._v("ElectricityProduced:Wind:ToGrid")]),t._v(" "),r("td",[t._v("kWh")])])])])}],!1,null,null,null);e.default=a.exports}}]);