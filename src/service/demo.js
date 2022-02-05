// TODO:new request
import { $cms } from "@jx3box/jx3box-common/js/https";

function getBox() {
    return $cms().get("/api/cms/config/menu/box");
}

export { getBox };
