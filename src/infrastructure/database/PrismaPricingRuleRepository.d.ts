import { PrismaClient } from '@prisma/client';
import { IPricingRuleRepository } from '../../domain/repositories/IPricingRuleRepository';
import { PricingRule } from '../../domain/entities/PricingRule';
export declare class PrismaPricingRuleRepository implements IPricingRuleRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    create(rule: Omit<PricingRule, 'id'>): Promise<PricingRule>;
    findByPlant(plantId: number): Promise<PricingRule[]>;
    update(id: number, rule: Partial<PricingRule>): Promise<PricingRule>;
}
//# sourceMappingURL=PrismaPricingRuleRepository.d.ts.map