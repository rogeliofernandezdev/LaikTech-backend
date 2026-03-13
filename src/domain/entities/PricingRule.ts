export interface PricingRule {
    id?: number;
    plantId: number;
    clientType: string;
    clientName?: string | null;
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

export class PricingRuleDomain {
    static getAlerts(rule: PricingRule): MarginAlert[] {
        const alerts: MarginAlert[] = [];
        const ranges = [
            { key: '300kg', value: rule.margin300kg },
            { key: '500kg', value: rule.margin500kg },
            { key: '1T', value: rule.margin1T },
            { key: '3T', value: rule.margin3T },
            { key: '5T', value: rule.margin5T },
            { key: '10T', value: rule.margin10T },
            { key: '20T', value: rule.margin20T },
            { key: '30T', value: rule.margin30T },
        ];

        for (const range of ranges) {
            const marginValue = parseFloat(range.value.toString());
            console.log(`Evaluating range ${range.key}: RawValue=${range.value}, ParsedValue=${marginValue}, Check(<5)=${marginValue < 5}`);
            if (marginValue < 5) {
                alerts.push({
                    volumeRange: range.key,
                    message: 'El número no puede ser menor a 5%',
                });
            }
        }

        return alerts;
    }
}
