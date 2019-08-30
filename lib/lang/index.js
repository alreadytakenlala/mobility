import arrUtil from "@/utils/lang/arr";

export default {
    /**
     * 重新排序菜单列表
     */
    sortMenus(menuList) {
        let menus = [];
        menuList.forEach(menu => {
            menus.push(menu);
            if (menu.subMenus) menus.push(...getSubMenus(menu));
        });
        function getSubMenus(menu) {
            let subMenus = [];
            menu.subMenus.forEach(menu => {
                subMenus.push(menu);
                if (menu.subMenus) subMenus.push(...getSubMenus(menu));
            });
            return arrUtil.sort(subMenus, "serialNumber");
        }
        return menus;
    }
}
