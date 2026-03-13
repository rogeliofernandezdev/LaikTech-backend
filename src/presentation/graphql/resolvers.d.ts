export declare const resolvers: {
    Query: {
        pricingRules: (_: any, { plantId }: {
            plantId: number;
        }) => Promise<import("../../domain/entities/PricingRule").PricingRuleWithAlerts[]>;
    };
    Mutation: {
        createPricingRule: (_: any, { input }: {
            input: any;
        }) => Promise<import("../../domain/entities/PricingRule").PricingRuleWithAlerts>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map