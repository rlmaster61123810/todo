import { PrismaClient } from ".prisma/client";

// prisma client
const client = new PrismaClient();

class Seeder {
    async seedUser() {
        const user = await client.user.create({
            data: {
                email: "61123810@g.cmru.ac.th",
                password: "123456",
                name: "Nontawat wuttifaey",
                role: "ADMIN",
            }
        });
        console.log("user", user);
    }

}


new Seeder().seedUser();