import { hasGlobalComponent } from "/Users/themaoqiu/CodeRepo/Nextjs/Xingjian-Wang.github.io/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/themaoqiu/CodeRepo/Nextjs/Xingjian-Wang.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/Users/themaoqiu/CodeRepo/Nextjs/Xingjian-Wang.github.io/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
