(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{400:function(e,t,a){"use strict";a.r(t);var i=a(28),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("tsoa is a framework with integrated OpenAPI compiler to build Node.js serve-side applications using TypeScript.\nIt can target express, hapi, koa and more frameworks at runtime.\ntsoa applications are type-safe by default and handle runtime validation seamlessly.")]),e._v(" "),a("h2",{attrs:{id:"goal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),a("ul",[a("li",[e._v("TypeScript controllers and models as the single source of truth for your API")]),e._v(" "),a("li",[e._v("A valid OpenAPI (formerly Swagger) spec (2.0 or 3.0) is generated from your controllers and models, including:\n"),a("ul",[a("li",[e._v("Paths (e.g. GET /Users)")]),e._v(" "),a("li",[e._v("Definitions based on TypeScript interfaces (models)")]),e._v(" "),a("li",[e._v("Parameters/model properties marked as required or optional based on TypeScript (e.g. myProperty?: string is optional in the OpenAPI spec)")]),e._v(" "),a("li",[e._v("jsDoc supported for object descriptions (most other metadata can be inferred from TypeScript types)")])])]),e._v(" "),a("li",[e._v("Routes are generated for middleware of choice\n"),a("ul",[a("li",[e._v("Express, Hapi, and Koa currently supported, other middleware can be supported using a simple handlebars template")]),e._v(" "),a("li",[e._v("Seamless runtime validation")])])])]),e._v(" "),a("h2",{attrs:{id:"philosophy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#philosophy"}},[e._v("#")]),e._v(" Philosophy")]),e._v(" "),a("ul",[a("li",[e._v("Rely on TypeScript type annotations to generate API metadata if possible")]),e._v(" "),a("li",[e._v("If regular type annotations aren't an appropriate way to express metadata, use decorators")]),e._v(" "),a("li",[e._v("Use jsdoc for pure text metadata (e.g. endpoint descriptions)")]),e._v(" "),a("li",[e._v("Minimize boilerplate")]),e._v(" "),a("li",[e._v("Models are best represented by interfaces (pure data structures), but can also be represented by classes")]),e._v(" "),a("li",[e._v("Runtime validation of tsoa should behave as closely as possible to the specifications that the generated OpenAPI 2/3 schema describes. Any differences in validation logic are clarified by logging warnings during the generation of the OpenAPI Specification (OAS) and/or the routes.\n"),a("ul",[a("li",[e._v("Please note that by enabling OpenAPI 3 you minimize the chances of divergent validation logic since OpenAPI 3 has a more expressive schema syntax.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);