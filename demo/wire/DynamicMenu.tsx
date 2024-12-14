import {AsyncTreeMenu } from "@palmyralabs/rt-forms-mui"
import storeFactory from "./StoreFactory";

const DynamicMenu = ({ sidebarWidth }) => {
    const treeStore = storeFactory.getTreeStore({}, "/flatMenu.json");

    return (
        <div style={{ width: "100%" }}>
            <div>
                <AsyncTreeMenu store={treeStore} />
            </div>
        </div>
    )
}

export default DynamicMenu;
