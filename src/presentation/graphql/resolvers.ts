import { ManagePricingRulesUseCase } from '../../application/use-cases/ManagePricingRules';
import { PrismaPricingRuleRepository } from '../../infrastructure/database/PrismaPricingRuleRepository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const repository = new PrismaPricingRuleRepository(prisma);
const useCase = new ManagePricingRulesUseCase(repository);

export const resolvers = {
    Query: {
        plants: async () => {
            return await useCase.getAllPlants();
        },
        pricingRules: async (_: any, { plantId }: { plantId: number }) => {
            return await useCase.getPricingRulesByPlant(plantId);
        },
    },
    Mutation: {
        createPricingRule: async (_: any, { input }: { input: any }) => {
            return await useCase.createPricingRule(input);
        },
        updatePricingRule: async (_: any, { id, input }: { id: number, input: any }) => {
            return await useCase.updatePricingRule(id, input);
        },
    },
};
