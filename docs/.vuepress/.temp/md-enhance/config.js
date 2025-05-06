import Playground from "D:/software/VScode/web/themaoqiu.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";

export default {
  enhance: ({ app }) => {
    app.component("Playground", Playground);
  },
};
