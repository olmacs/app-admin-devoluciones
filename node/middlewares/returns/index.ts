import { requestor } from "../../utils/requestor";
import { getAll } from "./getAll";
import { getById } from "./getById";
import { saveReturn } from "./saveReturns";

export const returns = async (ctx: Context) => {
    requestor(ctx, {
        'byid': { GET: getById },
        'all': { GET: getAll },
        'save': { GET: saveReturn },
    })
}