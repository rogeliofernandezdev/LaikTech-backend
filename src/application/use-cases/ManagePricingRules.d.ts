import { IPricingRuleRepository } from '../../domain/repositories/IPricingRuleRepository';
import { PricingRule, PricingRuleWithAlerts } from '../../domain/entities/PricingRule';
export declare class ManagePricingRulesUseCase {
    private repository;
    constructor(repository: IPricingRuleRepository);
    createPricingRule(data: Omit<PricingRule, 'id'>): Promise<PricingRuleWithAlerts>;
    getPricingRulesByPlant(plantId: number): Promise<PricingRuleWithAlerts[]>;
    private attachAlerts;
}
//# sourceMappingURL=ManagePricingRules.d.ts.map