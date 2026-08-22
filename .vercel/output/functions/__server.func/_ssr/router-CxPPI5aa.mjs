import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { R as notFound, _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CxPPI5aa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C6d68jB-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Incrível Dominó — Dominó estilo HQ" },
			{
				name: "description",
				content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro."
			},
			{
				name: "author",
				content: "Incrível Dominó"
			},
			{
				property: "og:title",
				content: "Incrível Dominó — Dominó estilo HQ"
			},
			{
				property: "og:description",
				content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Incrível Dominó — Dominó estilo HQ"
			},
			{
				name: "twitter:description",
				content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f03e8e7-ee3d-4402-9630-de5d15585f2a/id-preview-14cb0f1d--2b6617c4-e6b8-47b6-b48e-3bc9aad1139d.lovable.app-1784800413645.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f03e8e7-ee3d-4402-9630-de5d15585f2a/id-preview-14cb0f1d--2b6617c4-e6b8-47b6-b48e-3bc9aad1139d.lovable.app-1784800413645.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				src: "https://projetoij.lovable.app/api/public/pij.js",
				defer: true
			})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var hero_incrivel_domino_jpg_asset_default = {
	version: 1,
	asset_id: "23df1b5e-9eac-45c7-a0e4-60edaebcbac8",
	project_id: "2b6617c4-e6b8-47b6-b48e-3bc9aad1139d",
	url: "/__l5e/assets-v1/23df1b5e-9eac-45c7-a0e4-60edaebcbac8/hero-incrivel-domino.jpg",
	r2_key: "a/v1/2b6617c4-e6b8-47b6-b48e-3bc9aad1139d/23df1b5e-9eac-45c7-a0e4-60edaebcbac8/hero-incrivel-domino.jpg",
	original_filename: "hero-incrivel-domino.jpg",
	size: 572900,
	content_type: "image/jpeg",
	created_at: "2026-07-23T09:43:15Z"
};
var $$splitComponentImporter$5 = () => import("./routes-Cqzlbs-P.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Incrível Dominó — Dominó estilo HQ" },
		{
			name: "description",
			content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro."
		},
		{
			property: "og:title",
			content: "Incrível Dominó — Dominó estilo HQ"
		},
		{
			property: "og:description",
			content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro."
		},
		{
			property: "og:image",
			content: hero_incrivel_domino_jpg_asset_default.url
		},
		{
			name: "twitter:image",
			content: hero_incrivel_domino_jpg_asset_default.url
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./characters-fXecJipT.mjs");
var Route$4 = createFileRoute("/characters")({
	head: () => ({ meta: [
		{ title: "Personagens — Incrível Dominó" },
		{
			name: "description",
			content: "Conheça os personagens do Incrível Dominó, cada um com estilo e nível próprio."
		},
		{
			property: "og:title",
			content: "Personagens — Incrível Dominó"
		},
		{
			property: "og:description",
			content: "Do aprendiz Zeca ao lendário Capitão Mula-Seis."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./multiplayer-Cdl9dwcc.mjs");
var Route$3 = createFileRoute("/multiplayer")({
	head: () => ({ meta: [
		{ title: "Multiplayer — Incrível Dominó" },
		{
			name: "description",
			content: "Crie ou entre em salas de dominó online por código."
		},
		{
			property: "og:title",
			content: "Multiplayer — Incrível Dominó"
		},
		{
			property: "og:description",
			content: "Salas por código para jogar com amigos."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./settings-_CfyvQNl.mjs");
var Route$2 = createFileRoute("/settings")({
	head: () => ({ meta: [
		{ title: "Configurações — Incrível Dominó" },
		{
			name: "description",
			content: "Ajuste volume, tema da mesa, skin das peças, apelido e regras."
		},
		{
			property: "og:title",
			content: "Configurações — Incrível Dominó"
		},
		{
			property: "og:description",
			content: "Personalize sua experiência no Incrível Dominó."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tutorial-BsANXZ5U.mjs");
var Route$1 = createFileRoute("/tutorial")({
	head: () => ({ meta: [
		{ title: "Tutorial — Incrível Dominó" },
		{
			name: "description",
			content: "Aprenda a jogar dominó em painéis HQ ilustrados."
		},
		{
			property: "og:title",
			content: "Tutorial — Incrível Dominó"
		},
		{
			property: "og:description",
			content: "Regras, dicas e estratégia em painéis estilo quadrinhos."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./play._mode-CXTPuNrZ.mjs");
var VALID_MODES = [
	"casual",
	"relax",
	"campanha"
];
var Route = createFileRoute("/play/$mode")({
	head: ({ params }) => {
		const m = params.mode;
		const title = `Jogar ${m[0].toUpperCase() + m.slice(1)} — Incrível Dominó`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: `Partida de dominó no modo ${m}, com IA caricata e efeitos HQ.`
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: `Modo ${m} do Incrível Dominó.`
			}
		] };
	},
	beforeLoad: ({ params }) => {
		if (!VALID_MODES.includes(params.mode)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	CharactersRoute: Route$4.update({
		id: "/characters",
		path: "/characters",
		getParentRoute: () => Route$6
	}),
	MultiplayerRoute: Route$3.update({
		id: "/multiplayer",
		path: "/multiplayer",
		getParentRoute: () => Route$6
	}),
	SettingsRoute: Route$2.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$6
	}),
	TutorialRoute: Route$1.update({
		id: "/tutorial",
		path: "/tutorial",
		getParentRoute: () => Route$6
	}),
	PlayModeRoute: Route.update({
		id: "/play/$mode",
		path: "/play/$mode",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { hero_incrivel_domino_jpg_asset_default as n, router_exports as t };
