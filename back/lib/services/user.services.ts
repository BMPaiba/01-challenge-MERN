import userModel from "@/models/user.model";

export class UserAdditionalServices {
    static async userByEmail(email:string) {
        try {
            const user = await userModel.findOne({ email });
            return user
        } catch (error) {
            throw new Error("Error al obtener usuario");
            
        }
    }
}