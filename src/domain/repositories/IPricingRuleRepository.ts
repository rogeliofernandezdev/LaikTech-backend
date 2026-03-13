import { PricingRule } from '../entities/PricingRule';

export interface IPricingRuleRepository {
    create(rule: Omit<PricingRule, 'id'>): Promise<PricingRule>;
    findByPlant(plantId: number): Promise<PricingRule[]>;
    update(id: number, rule: Partial<PricingRule>): Promise<PricingRule>;
    findAllPlants(): Promise<{ id: number; name: string }[]>;
}
