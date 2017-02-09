module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "test/test.spec.ts" },
            { pattern: "src/**/*.+(ts|html)" }
        ],

        proxies: {
            "/src/": "/base/src/"
            //"/app/": "/base/src/app/" // use this without moduleId + templateUrl: "app/hello.html"
        },

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["progress", "karma-typescript"],

        browsers: ["Chrome"],
        singleRun:true
    });
};