import { getUserById } from "./getUserById";
import { requestor } from "../../utils/requestor";

export const orders = async (ctx: Context) => {
    requestor(ctx, {
        'user-byid': { GET: getUserById },
    })
}