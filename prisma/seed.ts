import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const plants = [
        'Perú (planta)',
        'Chile (planta)',
        'Colombia (planta)',
        'México (planta)'
    ];

    for (const name of plants) {
        const plantId = plants.indexOf(name) + 1;
        await prisma.plant.upsert({
            where: { id: plantId },
            update: { name },
            create: { name }
        });

        // Add some sample pricing rules for each plant
        const clientName = name.replace(' (planta)', '') + ' Client';
        await prisma.pricingRule.create({
            data: {
                plantId,
                clientType: 'Distribuidor',
                clientName: `${clientName} A`,
                costPerColor: 200,
                linkPricing: 'Por estructura',
                margin300kg: 10,
                margin500kg: 10,
                margin1T: 8,
                margin3T: 6,
                margin5T: 5,
                margin10T: 12,
                margin20T: 15,
                margin30T: 18,
            }
        });

        await prisma.pricingRule.create({
            data: {
                plantId,
                clientType: 'Varios Clientes',
                clientName: `${clientName} B`,
                costPerColor: 180,
                linkPricing: 'No vincular',
                margin300kg: 12,
                margin500kg: 10,
                margin1T: 5,
                margin3T: 4.5, // Alert trigger
                margin5T: 4,   // Alert trigger
                margin10T: 10,
                margin20T: 12,
                margin30T: 15,
            }
        });
    }
    console.log('Seed executed: Added/Updated plants and sample PricingRules.');
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
