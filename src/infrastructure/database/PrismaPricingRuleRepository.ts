import { PrismaClient } from '@prisma/client';
import { IPricingRuleRepository } from '../../domain/repositories/IPricingRuleRepository';
import { PricingRule } from '../../domain/entities/PricingRule';

export class PrismaPricingRuleRepository implements IPricingRuleRepository {
    constructor(private prisma: PrismaClient) { }

    async create(rule: Omit<PricingRule, 'id'>): Promise<PricingRule> {
        const created = await this.prisma.pricingRule.create({
            data: rule,
        });
        return created;
    }

    async findByPlant(plantId: number): Promise<PricingRule[]> {
        return this.prisma.pricingRule.findMany({
            where: { plantId },
        });
    }

    async update(id: number, rule: Partial<PricingRule>): Promise<PricingRule> {
        return this.prisma.pricingRule.update({
            where: { id },
            data: rule,
        });
    }

    async findAllPlants(): Promise<{ id: number; name: string }[]> {
        return this.prisma.plant.findMany();
    }
}
