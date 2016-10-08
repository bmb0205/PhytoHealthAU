var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", 'aurelia-router', 'aurelia-framework'], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(router) {
            this.router = router;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'PhytoHealth';
            config.map([
                { route: ['', 'home', '#'], moduleId: './pages/home/home', name: 'home' }
            ]);
        };
        App = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_router_1.Router])
        ], App);
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('pages/home/home',["require", "exports"], function (require, exports) {
    "use strict";
    var Home = (function () {
        function Home(welcome) {
            if (welcome === void 0) { welcome = "Welcome to the Homepage"; }
            this.welcome = welcome;
        }
        return Home;
    }());
    exports.Home = Home;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>"; });
define('text!pages/home/home.html', ['module'], function(module) { module.exports = "<template>\n    ${welcome}\n</template>"; });
//# sourceMappingURL=app-bundle.js.map