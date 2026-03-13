const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const rules = await prisma.pricingRule.findMany({ orderBy: { id: 'desc' }, take: 2 });
    console.dir(rules, { depth: null });

    for (const rule of rules) {
        console.log(`id: ${rule.id}, margin3T: ${rule.margin3T}, type: ${typeof rule.margin3T}`);
    }
}

main().finally(() => prisma.$disconnect());
