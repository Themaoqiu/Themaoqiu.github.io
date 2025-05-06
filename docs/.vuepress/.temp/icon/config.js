import { hasGlobalComponent } from "D:/software/VScode/web/themaoqiu.github.io/node_modules/@vuepress/helper/lib/client/index.js";
import { h } from "vue";
import { VPIcon } from "D:/software/VScode/web/themaoqiu.github.io/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "unknown",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {

  },
}
