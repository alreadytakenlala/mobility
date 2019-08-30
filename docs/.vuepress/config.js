module.exports = {
    base: "/",
    title: "Mobility",
    description: "一个专注于动效的框架",
    head: [
        ['link', { rel: "shortcut icon", type: "image/x-icon", href: "./favicon.png" }]
    ],
    themeConfig: {
        repo: "alreadytakenlala/mobility",
        nav: [
            { text: "主页", link: "/" },
            {
                text: "学习",
                items: [
                    { text: '介绍', link: "/introduction/" },
                    { text: "入门", link: "/install/" },
                    { text: "API", link: "/api/mobility" },
                    { text: "示例", link: "/example/increase" }
                ]
            }
        ],
        sidebar: [
            {
                title: '介绍',
                children: [
                    "/introduction/"
                ]
            },{
                title: '安装',
                children: [
                    "/install/",
                    "/install/started"
                ]
            },{
                title: 'API',
                children: [
                    "/api/mobility",
                    "/api/condition",
                    "/api/increase",
                    "/api/deposition",
                    "/api/catalog",
                    "/api/cascading",
                    "/api/drag"
                ]
            },{
                title: '示例',
                children: [
                    "/example/increase",
                    "/example/deposition",
                    "/example/catalog",
                    "/example/cascading",
                    "/example/drag"
                ]
            }
        ]
    }
};
