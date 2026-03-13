import { IPricingRuleRepository } from '../../domain/repositories/IPricingRuleRepository';
import { PricingRule, PricingRuleWithAlerts, PricingRuleDomain } from '../../domain/entities/PricingRule';

export class ManagePricingRulesUseCase {
    constructor(private repository: IPricingRuleRepository) { }

    async createPricingRule(data: Omit<PricingRule, 'id'>): Promise<PricingRuleWithAlerts> {
        const savedRule = await this.repository.create(data);
        return this.attachAlerts(savedRule);
    }

    async getPricingRulesByPlant(plantId: number): Promise<PricingRuleWithAlerts[]> {
        const rules = await this.repository.findByPlant(plantId);
        return rules.map(rule => this.attachAlerts(rule));
    }

    async getAllPlants(): Promise<{ id: number; name: string }[]> {
        return this.repository.findAllPlants();
    }

    async updatePricingRule(id: number, data: Partial<Omit<PricingRule, 'id' | 'plantId'>>): Promise<PricingRuleWithAlerts> {
        const updatedRule = await this.repository.update(id, data);
        return this.attachAlerts(updatedRule);
    }

    private attachAlerts(rule: PricingRule): PricingRuleWithAlerts {
        const alerts = PricingRuleDomain.getAlerts(rule);
        return { ...rule, alerts };
    }
}
