"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Verificamos si ya existe
    const count = await prisma.plant.count();
    if (count === 0) {
        const plant = await prisma.plant.create({
            data: {
                name: 'Perú (planta)'
            }
        });
        console.log('Seed created successfully: ', plant);
    }
    else {
        console.log('Plant already exists, skipping seed.');
    }
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map