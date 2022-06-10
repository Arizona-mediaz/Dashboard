!(function (n) {
   "use strict";
   var t = function () {};
   (t.prototype.initTooltipPlugin = function () {
      n.fn.tooltip && n('[data-toggle="tooltip"]').tooltip();
   }),
      (t.prototype.initPopoverPlugin = function () {
         n.fn.popover && n('[data-toggle="popover"]').popover();
      }),
      (t.prototype.initSlimScrollPlugin = function () {
         n.fn.slimScroll && n(".slimscroll").slimScroll({ height: "auto", position: "right", size: "5px", touchScrollStep: 20, color: "#9ea5ab" });
      }),
      (t.prototype.initCustomModalPlugin = function () {
         n('[data-plugin="custommodal"]').on("click", function (t) {
            t.preventDefault(), new Custombox.modal({ content: { target: n(this).attr("href"), effect: n(this).attr("data-animation") }, overlay: { color: n(this).attr("data-overlayColor") } }).open();
         });
      }),
      (t.prototype.initCounterUp = function () {
         n(this).attr("data-delay") && n(this).attr("data-delay"), n(this).attr("data-time") && n(this).attr("data-time");
         n('[data-plugin="counterup"]').each(function (t, e) {
            n(this).counterUp({ delay: 100, time: 1200 });
         });
      }),
      (t.prototype.initPeityCharts = function () {
         n('[data-plugin="peity-pie"]').each(function (t, e) {
            var i = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [],
               a = n(this).attr("data-width") ? n(this).attr("data-width") : 20,
               o = n(this).attr("data-height") ? n(this).attr("data-height") : 20;
            n(this).peity("pie", { fill: i, width: a, height: o });
         }),
            n('[data-plugin="peity-donut"]').each(function (t, e) {
               var i = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [],
                  a = n(this).attr("data-width") ? n(this).attr("data-width") : 20,
                  o = n(this).attr("data-height") ? n(this).attr("data-height") : 20;
               n(this).peity("donut", { fill: i, width: a, height: o });
            }),
            n('[data-plugin="peity-donut-alt"]').each(function (t, e) {
               n(this).peity("donut");
            }),
            n('[data-plugin="peity-line"]').each(function (t, e) {
               n(this).peity("line", n(this).data());
            }),
            n('[data-plugin="peity-bar"]').each(function (t, e) {
               var i = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [],
                  a = n(this).attr("data-width") ? n(this).attr("data-width") : 20,
                  o = n(this).attr("data-height") ? n(this).attr("data-height") : 20;
               n(this).peity("bar", { fill: i, width: a, height: o });
            });
      }),
      (t.prototype.initKnob = function () {
         n('[data-plugin="knob"]').each(function (t, e) {
            n(this).knob();
         });
      }),
      (t.prototype.init = function () {
         this.initTooltipPlugin(), this.initPopoverPlugin(), this.initSlimScrollPlugin(), this.initCustomModalPlugin(), this.initCounterUp(), this.initPeityCharts(), this.initKnob();
      }),
      (n.Components = new t()),
      (n.Components.Constructor = t);
})(window.jQuery),
   (function (o) {
      "use strict";
      var t = function () {
         (this.$body = o("body")), (this.$portletIdentifier = ".card"), (this.$portletCloser = '.card a[data-toggle="remove"]'), (this.$portletRefresher = '.card a[data-toggle="reload"]');
      };
      (t.prototype.init = function () {
         var a = this;
         o(document).on("click", this.$portletCloser, function (t) {
            t.preventDefault();
            var e = o(this).closest(a.$portletIdentifier),
               i = e.parent();
            e.remove(), 0 == i.children().length && i.remove();
         }),
            o(document).on("click", this.$portletRefresher, function (t) {
               t.preventDefault();
               var e = o(this).closest(a.$portletIdentifier);
               e.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
               var i = e.find(".card-disabled");
               setTimeout(function () {
                  i.fadeOut("fast", function () {
                     i.remove();
                  });
               }, 500 + 5 * Math.random() * 300);
            });
      }),
         (o.Portlet = new t()),
         (o.Portlet.Constructor = t);
   })(window.jQuery),
   (function (e) {
      "use strict";
      var t = function () {
         (this.$bootstrapStylesheet = e("#bootstrap-stylesheet")),
            (this.$appStylesheet = e("#app-stylesheet")),
            (this.$originalBSStylesheet = e("#bootstrap-stylesheet").attr("href")),
            (this.$originalAppStylesheet = e("#app-stylesheet").attr("href"));
      };
      (t.prototype.init = function () {
         var t = this;
         e("#light-mode-switch").on("change", function () {
            this.checked && (t.$bootstrapStylesheet.attr("href", t.$originalBSStylesheet), t.$appStylesheet.attr("href", t.$originalAppStylesheet), e("#dark-mode-switch").prop("checked", !1), e("#rtl-mode-switch").prop("checked", !1));
         }),
            e("#dark-mode-switch").on("change", function () {
               this.checked && (t.$bootstrapStylesheet.attr("href", e(this).data("bsstyle")), t.$appStylesheet.attr("href", e(this).data("appstyle")), e("#light-mode-switch").prop("checked", !1), e("#rtl-mode-switch").prop("checked", !1));
            }),
            e("#rtl-mode-switch").on("change", function () {
               this.checked && (t.$bootstrapStylesheet.attr("href", t.$originalBSStylesheet), t.$appStylesheet.attr("href", e(this).data("appstyle")), e("#light-mode-switch").prop("checked", !1), e("#dark-mode-switch").prop("checked", !1));
            });
      }),
         (e.RightSidebar = new t()),
         (e.RightSidebar.Constructor = t);
   })(window.jQuery),
   (function (i) {
      "use strict";
      var t = function () {
         (this.$body = i("body")), (this.$window = i(window));
      };
      (t.prototype._resetSidebarScroll = function () {
         i(".slimscroll-menu").slimscroll({ height: "auto", position: "right", size: "5px", color: "#9ea5ab", wheelStep: 5, touchScrollStep: 20 });
      }),
         (t.prototype.initMenu = function () {
            var e = this;
            i(".menu-mobile").on("click", function (t) {
               // t.preventDefault(), e.$body.toggleClass("sidebar-enable"), 768 <= e.$window.width() ? e.$body.toggleClass("enlarged") : e.$body.removeClass("enlarged"), e._resetSidebarScroll();
               t.preventDefault(), e.$body.toggleClass("sidebar-enable"), 768 <= e.$window.width() ? e.$body.toggleClass("enlarged") : e.$body.addClass("enlarged"), e._resetSidebarScroll();
            }),
               i("#side-menu").metisMenu(),
               e._resetSidebarScroll(),
               i(".right-bar-toggle").on("click", function (t) {
                  i("body").toggleClass("right-bar-enabled");
               }),
               i(document).on("click", "body", function (t) {
                  0 < i(t.target).closest(".right-bar-toggle, .right-bar").length ||
                     0 < i(t.target).closest(".left-side-menu, .side-nav").length ||
                     i(t.target).hasClass("menu-mobile") ||
                     0 < i(t.target).closest(".menu-mobile").length ||
                     (i("body").removeClass("right-bar-enabled"), i("body").removeClass("sidebar-enable"));
               }),
               i("#side-menu a").each(function () {
                  var t = window.location.href.split(/[?#]/)[0];
                  this.href == t &&
                     (i(this).addClass("active"),
                     i(this).parent().addClass("mm-active"),
                     i(this).parent().parent().addClass("mm-show"),
                     i(this).parent().parent().prev().addClass("active"),
                     i(this).parent().parent().parent().addClass("mm-active"),
                     i(this).parent().parent().parent().parent().addClass("mm-show"),
                     i(this).parent().parent().parent().parent().parent().addClass("mm-active"));
               }),
               i(".navigation-menu a").each(function () {
                  var t = window.location.href.split(/[?#]/)[0];
                  this.href == t &&
                     (i(this).addClass("active"),
                     i(this).parent().addClass("active"),
                     i(this).parent().parent().addClass("in"),
                     i(this).parent().parent().prev().addClass("active"),
                     i(this).parent().parent().parent().addClass("active"),
                     i(this).parent().parent().parent().parent().addClass("in"),
                     i(this).parent().parent().parent().parent().parent().addClass("active"));
               }),
               i(".navbar-toggle").on("click", function (t) {
                  i(this).toggleClass("open"), i("#navigation").slideToggle(400);
               }),
               i(".navigation-menu>li").slice(-1).addClass("last-elements"),
               i('.navigation-menu li.has-submenu a[href="#"]').on("click", function (t) {
                  i(window).width() < 992 && (t.preventDefault(), i(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"));
               });
         }),
         (t.prototype.initLayout = function () {
            // 768 <= this.$window.width() && this.$window.width() <= 1024 ? this.$body.addClass("enlarged") : 1 != this.$body.data("keep-enlarged") && this.$body.removeClass("enlarged");
            // 768 <= this.$window.width() && this.$window.width() <= 1024 ? this.$body.removeClass("enlarged") : 1 != this.$body.data("keep-enlarged") && this.$body.addClass("enlarged");
         }),
         (t.prototype.init = function () {
            var e = this;
            this.initLayout(),
               i.Portlet.init(),
               this.initMenu(),
               i.Components.init(),
               i.RightSidebar.init(),
               e.$window.on("resize", function (t) {
                  t.preventDefault(), e.initLayout(), e._resetSidebarScroll();
               });
         }),
         (i.App = new t()),
         (i.App.Constructor = t);
   })(window.jQuery),
   (function (t) {
      "use strict";
      window.jQuery.App.init();
   })(),
   Waves.init();
//# sourceMappingURL=app.min.js.map

// for modal
(function () {
   $('.modal').on('shown.bs.modal', function (e) {
      $("body").addClass("modal-open")
   });
})();
// $('.modal').on('shown.bs.modal', function (e) {
//  $("body").addClass("modal-open")
// });