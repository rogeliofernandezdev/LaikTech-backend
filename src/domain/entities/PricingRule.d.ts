export interface PricingRule {
    id?: number;
    plantId: number;
    clientType: string;
    clientName?: string;
    costPerColor: number;
    linkPricing: string;
    margin300kg: number;
    margin500kg: number;
    margin1T: number;
    margin3T: number;
    margin5T: number;
    margin10T: number;
    margin20T: number;
    margin30T: number;
}
export interface MarginAlert {
    volumeRange: string;
    message: string;
}
export interface PricingRuleWithAlerts extends PricingRule {
    alerts: MarginAlert[];
}
export declare class PricingRuleDomain {
    static getAlerts(rule: PricingRule): MarginAlert[];
}
//# sourceMappingURL=PricingRule.d.ts.map