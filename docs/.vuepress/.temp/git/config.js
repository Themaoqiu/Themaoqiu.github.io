import { GitContributors } from "D:/software/VScode/web/themaoqiu.github.io/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
