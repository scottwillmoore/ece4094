module.exports = {
    buildOptions: {
        metaUrlPath: "packages",
    },
    mount: {
        public: {
            url: "/",
            static: true,
        },
        src: {
            url: "/",
        },
    },
    plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
};
